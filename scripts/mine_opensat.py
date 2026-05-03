from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path

import requests


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "opensat"
OUTPUT_JSON = OUTPUT_DIR / "opensat_questions.json"
OUTPUT_MD = OUTPUT_DIR / "opensat_summary.md"
BASE_URL = "https://pinesat.com/api/questions"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    section: str
    domain: str
    difficulty: str
    prompt_text: str
    paragraph_text: str
    correct_answer: str
    answer_choices: dict[str, str]
    explanation: str
    visuals_type: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def infer_candidate_tracks(section: str, domain: str, prompt: str) -> list[str]:
    lowered = f"{section} {domain} {prompt}".lower()
    candidates: list[str] = ["sat"]

    if section == "math":
        candidates.extend(["elevenPlus", "high_algebra_2", "apCalculusAB"])
    if any(key in lowered for key in ["advanced math", "function", "equation", "polynomial", "exponential"]):
        candidates.extend(["high_algebra_2", "mathExtensions"])
    if any(key in lowered for key in ["problem-solving", "data analysis", "statistics", "probability"]):
        candidates.extend(["apStatistics", "introDataScience", "quant"])
    if any(key in lowered for key in ["standard english conventions", "craft and structure", "expression of ideas"]):
        candidates.extend(["satReadingWriting", "logicCriticalThinking"])
    if any(key in lowered for key in ["information and ideas", "argument", "rhetoric"]):
        candidates.extend(["logicCriticalThinking", "philosophy"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def fetch_section(section: str) -> list[dict]:
    response = requests.get(BASE_URL, params={"section": section}, timeout=120)
    response.raise_for_status()
    return response.json()


def extract_all_questions() -> list[ExtractedQuestion]:
    questions: list[ExtractedQuestion] = []
    seen_ids: set[str] = set()

    for section in ["english", "math"]:
        for item in fetch_section(section):
            question_id = item.get("id", "")
            if not question_id or question_id in seen_ids:
                continue
            seen_ids.add(question_id)
            question = item.get("question", {})
            domain = item.get("domain", "")
            difficulty = item.get("difficulty", "")
            prompt_text = question.get("question", "")
            paragraph_text = question.get("paragraph", "")
            explanation = question.get("explanation", "")
            choices = question.get("choices", {})
            correct_answer = question.get("correct_answer", "")
            visuals_type = (item.get("visuals") or {}).get("type", "")

            questions.append(
                ExtractedQuestion(
                    source_id=f"opensat::{question_id}",
                    collection_id=f"opensat::{section}",
                    section=section,
                    domain=domain,
                    difficulty=difficulty,
                    prompt_text=prompt_text,
                    paragraph_text=paragraph_text,
                    correct_answer=correct_answer,
                    answer_choices=choices,
                    explanation=explanation,
                    visuals_type=visuals_type,
                    candidate_track_ids=infer_candidate_tracks(section, domain, prompt_text),
                    topic_tags=[section, domain, difficulty],
                )
            )
    return questions


def write_outputs(questions: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    by_section: dict[str, int] = {}
    by_domain: dict[str, int] = {}
    by_difficulty: dict[str, int] = {}
    for question in questions:
        by_section[question.section] = by_section.get(question.section, 0) + 1
        by_domain[question.domain] = by_domain.get(question.domain, 0) + 1
        by_difficulty[question.difficulty] = by_difficulty.get(question.difficulty, 0) + 1

    payload = {
        "source": "OpenSAT / PineSAT API",
        "license": "See OpenSAT repository and PineSAT public API",
        "api": BASE_URL,
        "questionCount": len(questions),
        "items": [asdict(question) for question in questions],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenSAT Raw Collection",
        "",
        "- Source: OpenSAT / PineSAT API",
        f"- API: {BASE_URL}",
        f"- Questions extracted: {len(questions)}",
        "",
        "## By Section",
        "",
    ]
    for section, count in sorted(by_section.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{section}`: {count}")

    lines.extend(["", "## Top Domains", ""])
    for domain, count in sorted(by_domain.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{domain}`: {count}")

    lines.extend(["", "## By Difficulty", ""])
    for difficulty, count in sorted(by_difficulty.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{difficulty}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    questions = extract_all_questions()
    write_outputs(questions)
    print(f"Extracted {len(questions)} OpenSAT questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
