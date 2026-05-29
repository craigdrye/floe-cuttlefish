from __future__ import annotations

import json
import re
from dataclasses import asdict, dataclass
from pathlib import Path

import requests
from pypdf import PdfReader


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "nysed_ela_2017"
OUTPUT_JSON = OUTPUT_DIR / "nysed_ela_2017_questions.json"
OUTPUT_MD = OUTPUT_DIR / "nysed_ela_2017_summary.md"
USER_AGENT = "floe-rebuild8-content-miner/1.0"

GRADE_URLS = {
    3: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g3.pdf",
    4: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g4.pdf",
    5: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g5.pdf",
    6: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g6.pdf",
    7: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g7.pdf",
    8: "https://www.nysedregents.org/ei/ela/2017/2017-released-items-ela-g8.pdf",
}


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    grade: int
    exam_title: str
    source_url: str
    question_number: int
    prompt_text: str
    answer_key_excerpt: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def extract_pdf_text(url: str) -> str:
    import io

    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=120)
    response.raise_for_status()
    reader = PdfReader(io.BytesIO(response.content))
    return "\n".join((page.extract_text() or "") for page in reader.pages)


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def split_questions(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"New York State administered.*?review and use\.", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\bPage\s+\d+\b", " ", cleaned)
    cleaned = re.sub(r"\bGO ON\b", " ", cleaned)
    cleaned = re.sub(r"Session\s+[12]", " ", cleaned)
    cleaned = re.sub(r"Released Questions", " ", cleaned)
    cleaned = re.sub(r"\n\s*([0-9]{1,2})\s+", r"\n@@QUESTION_\1@@ ", cleaned)
    parts = re.split(r"@@QUESTION_(\d{1,2})@@", cleaned)
    questions: dict[int, str] = {}
    for index in range(1, len(parts), 2):
        number = int(parts[index])
        body = normalize_whitespace(parts[index + 1])
        if body and "Multiple Choice Questions Percentage of Students" not in body:
            questions[number] = body[:2800]
    return questions


def split_item_map_answers(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    answers: dict[int, str] = {}
    pattern = re.compile(
        r"(?<!\d)(\d{1,2})\s+(Multiple Choice|Constructed Response)\s+([A-D]|n/a)\s+(\d)\s+(CCLS\.ELA-Literacy\.[^ ]+)\s+",
        flags=re.IGNORECASE,
    )
    for match in pattern.finditer(cleaned):
        number = int(match.group(1))
        qtype = match.group(2)
        correct = match.group(3)
        points = match.group(4)
        standard = match.group(5)
        answers[number] = f"{qtype}; correct={correct}; points={points}; standard={standard}"
    return answers


def infer_candidate_tracks(grade: int) -> list[str]:
    mapping = {
        3: ["naplanYear3", "satReadingWriting"],
        4: ["naplanYear5", "satReadingWriting"],
        5: ["naplanYear5", "satReadingWriting"],
        6: ["naplanYear7", "satReadingWriting"],
        7: ["naplanYear7", "satReadingWriting"],
        8: ["naplanYear9", "satReadingWriting"],
    }
    return mapping.get(grade, ["satReadingWriting"])


def build_questions() -> list[ExtractedQuestion]:
    items: list[ExtractedQuestion] = []
    for grade, url in GRADE_URLS.items():
        text = extract_pdf_text(url)
        questions = split_questions(text)
        answers = split_item_map_answers(text)
        exam_title = f"NYSED 2017 Grade {grade} ELA"
        collection_id = f"nysed-ela-2017::grade-{grade}"
        for question_number, prompt_text in sorted(questions.items()):
            items.append(
                ExtractedQuestion(
                    source_id=f"{collection_id}::{question_number}",
                    collection_id=collection_id,
                    grade=grade,
                    exam_title=exam_title,
                    source_url=url,
                    question_number=question_number,
                    prompt_text=prompt_text,
                    answer_key_excerpt=answers.get(question_number, ""),
                    candidate_track_ids=infer_candidate_tracks(grade),
                    topic_tags=[exam_title, "ela", f"grade-{grade}", "nysed-2017"],
                )
            )
    return items


def write_outputs(items: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_grade: dict[int, int] = {}
    for item in items:
        by_grade[item.grade] = by_grade.get(item.grade, 0) + 1

    payload = {
        "source": "NYSED 2017 Grades 3-8 English Language Arts Released Questions",
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# NYSED ELA 2017 Raw Collection",
        "",
        "- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions",
        f"- Questions extracted: {len(items)}",
        "",
        "## By Grade",
        "",
    ]
    for grade, count in sorted(by_grade.items()):
        lines.append(f"- `Grade {grade}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    items = build_questions()
    write_outputs(items)
    print(f"Extracted {len(items)} NYSED 2017 ELA questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
