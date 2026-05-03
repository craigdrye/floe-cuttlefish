from __future__ import annotations

import json
import re
from dataclasses import asdict, dataclass
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "staar_alt2_2025"
OUTPUT_JSON = OUTPUT_DIR / "staar_alt2_2025_questions.json"
OUTPUT_MD = OUTPUT_DIR / "staar_alt2_2025_summary.md"
SOURCE_URL = "https://tea.texas.gov/student-assessment/staar-alternate-2/staar-alternate-2-released-test-questions"
USER_AGENT = "floe-rebuild8-content-miner/1.0"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    subject: str
    grade_band: str
    exam_title: str
    source_url: str
    question_number: int
    prompt_text: str
    answer_key_excerpt: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def fetch_html(url: str) -> str:
    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=60)
    response.raise_for_status()
    return response.text


def extract_pdf_text(url: str) -> str:
    import io

    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=120)
    response.raise_for_status()
    reader = PdfReader(io.BytesIO(response.content))
    return "\n".join((page.extract_text() or "") for page in reader.pages)


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def collect_teacher_guides() -> list[tuple[str, str]]:
    html = fetch_html(SOURCE_URL)
    soup = BeautifulSoup(html, "html.parser")
    pairs: list[tuple[str, str]] = []
    for anchor in soup.find_all("a", href=True):
        href = urljoin(SOURCE_URL, anchor["href"])
        text = " ".join(anchor.get_text(" ", strip=True).split())
        lowered_href = href.lower()
        if "2025-staar-alternate-2-" not in lowered_href:
            continue
        if not lowered_href.endswith(".pdf"):
            continue
        if any(token in lowered_href for token in ("student-book", "student-test", "student-booklet")):
            continue
        if "teacher-guide" not in lowered_href:
            continue
        pairs.append((text, href))
    return pairs


def infer_exam_title(label: str, url: str) -> str:
    slug = url.rsplit("/", 1)[-1].replace(".pdf", "")
    slug = slug.replace("2025-staar-alternate-2-", "")
    if slug.startswith("3-"):
        return f"Grade 3 {slug[2:].replace('-', ' ').title()}"
    if slug.startswith("4-"):
        return f"Grade 4 {slug[2:].replace('-', ' ').title()}"
    if slug.startswith("5-"):
        return f"Grade 5 {slug[2:].replace('-', ' ').title()}"
    if slug.startswith("6-"):
        return f"Grade 6 {slug[2:].replace('-', ' ').title()}"
    if slug.startswith("7-"):
        return f"Grade 7 {slug[2:].replace('-', ' ').title()}"
    if slug.startswith("8-"):
        return f"Grade 8 {slug[2:].replace('-', ' ').title()}"
    if "algebra" in slug:
        return "Algebra I"
    if "english-i" in slug:
        return "English I"
    if "english-ii" in slug:
        return "English II"
    if "biology" in slug:
        return "Biology"
    if "us-history" in slug:
        return "U.S. History"
    return label.replace("Secure Test Instructions", "").strip()


def infer_subject(exam_title: str) -> str:
    lowered = exam_title.lower()
    if "algebra" in lowered:
        return "algebra"
    if "biology" in lowered:
        return "biology"
    if "history" in lowered or "social studies" in lowered:
        return "history"
    if "science" in lowered:
        return "science"
    if "english" in lowered or "reading" in lowered or "rla" in lowered or "writing" in lowered:
        return "reading-language-arts"
    return "math"


def infer_grade_band(exam_title: str) -> str:
    lowered = exam_title.lower()
    if any(f"grade {n}" in lowered for n in (3, 4, 5)):
        return "primary"
    return "high"


def infer_candidate_tracks(exam_title: str, subject: str) -> list[str]:
    lowered = exam_title.lower()
    candidates: list[str] = []
    if subject == "math":
        if "grade 3" in lowered:
            candidates.extend(["naplanYear3", "col-class-3-math"])
        elif "grade 4" in lowered:
            candidates.extend(["col-class-4-math", "naplanYear5"])
        elif "grade 5" in lowered:
            candidates.extend(["col-class-5-math", "naplanYear5"])
        elif "grade 6" in lowered:
            candidates.extend(["col-class-6-math", "naplanYear7"])
        elif "grade 7" in lowered:
            candidates.extend(["col-class-7-math", "naplanYear7"])
        elif "grade 8" in lowered:
            candidates.extend(["col-class-8-math", "high_algebra_1"])
    elif subject == "reading-language-arts":
        if "grade 3" in lowered:
            candidates.extend(["naplanYear3", "satReadingWriting"])
        elif "grade 4" in lowered or "grade 5" in lowered:
            candidates.extend(["naplanYear5", "satReadingWriting"])
        elif "grade 6" in lowered or "grade 7" in lowered:
            candidates.extend(["naplanYear7", "satReadingWriting"])
        else:
            candidates.extend(["naplanYear9", "satReadingWriting"])
    elif subject == "science":
        candidates.extend(["scienceDiscovery", "middleSchoolEarthSpace"])
    elif subject == "history":
        candidates.extend(["usHistory", "apHistory"])
    elif subject == "algebra":
        candidates.extend(["high_algebra_1", "sat"])
    elif subject == "biology":
        candidates.extend(["apBiology", "genBio1"])
    return list(dict.fromkeys(candidates))


def split_question_blocks(text: str) -> list[tuple[int, str]]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"\n\s*(\d+)\s*\nPresentation Instructions for Question (\d+)", r"\n@@QUESTION_\2@@\n", cleaned)
    cleaned = re.sub(r"\nPresentation Instructions for Question (\d+)", r"\n@@QUESTION_\1@@\n", cleaned)
    parts = re.split(r"@@QUESTION_(\d+)@@", cleaned)
    blocks: list[tuple[int, str]] = []
    for i in range(1, len(parts), 2):
        blocks.append((int(parts[i]), parts[i + 1]))
    return blocks


def parse_prompt_and_answer(block: str) -> tuple[str, str]:
    prompt_lines: list[str] = []
    for raw_line in block.splitlines():
        line = normalize_whitespace(raw_line)
        if not line:
            continue
        if line.startswith("Scoring Instructions"):
            break
        if line.startswith("Stimulus"):
            continue
        if line == "*":
            continue
        if "Presentation Instructions for Question" in line:
            continue
        if line.startswith("•"):
            line = line[1:].strip()
        if line.lower().startswith(("direct the student", "communicate:", "present ")):
            prompt_lines.append(line)
    prompt = normalize_whitespace(" ".join(prompt_lines))
    answer = ""
    match = re.search(r"If the student finds (.*?),\s*➨\s*mark A", block, flags=re.S)
    if match:
        answer = normalize_whitespace(match.group(1))
    answer = answer.removeprefix("the ").strip()
    return prompt[:2200], answer[:500]


def build_questions() -> list[ExtractedQuestion]:
    items: list[ExtractedQuestion] = []
    for label, url in collect_teacher_guides():
        exam_title = infer_exam_title(label, url)
        text = extract_pdf_text(url)
        subject = infer_subject(exam_title)
        grade_band = infer_grade_band(exam_title)
        candidate_track_ids = infer_candidate_tracks(exam_title, subject)
        collection_id = f"staar-alt2-2025::{re.sub(r'[^a-z0-9]+', '-', exam_title.lower()).strip('-')}"
        for question_number, block in split_question_blocks(text):
            prompt, answer = parse_prompt_and_answer(block)
            if not prompt or not answer:
                continue
            items.append(
                ExtractedQuestion(
                    source_id=f"{collection_id}::{question_number}",
                    collection_id=collection_id,
                    subject=subject,
                    grade_band=grade_band,
                    exam_title=exam_title,
                    source_url=url,
                    question_number=question_number,
                    prompt_text=prompt,
                    answer_key_excerpt=answer,
                    candidate_track_ids=candidate_track_ids,
                    topic_tags=[exam_title, subject, grade_band, "staar-alt2-2025"],
                )
            )
    return items


def write_outputs(items: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_exam: dict[str, int] = {}
    by_subject: dict[str, int] = {}
    by_grade_band: dict[str, int] = {}
    for item in items:
        by_exam[item.exam_title] = by_exam.get(item.exam_title, 0) + 1
        by_subject[item.subject] = by_subject.get(item.subject, 0) + 1
        by_grade_band[item.grade_band] = by_grade_band.get(item.grade_band, 0) + 1

    payload = {
        "source": "Texas STAAR Alternate 2 2025 released teacher guides",
        "sourceUrl": SOURCE_URL,
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# STAAR Alternate 2 2025 Raw Collection",
        "",
        "- Source: Texas STAAR Alternate 2 2025 released teacher guides",
        f"- Source URL: {SOURCE_URL}",
        f"- Questions extracted: {len(items)}",
        "",
        "## By Subject",
        "",
    ]
    for subject, count in sorted(by_subject.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{subject}`: {count}")
    lines.extend(["", "## By Grade Band", ""])
    for grade_band, count in sorted(by_grade_band.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{grade_band}`: {count}")
    lines.extend(["", "## Largest Guides", ""])
    for exam_title, count in sorted(by_exam.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{exam_title}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    items = build_questions()
    write_outputs(items)
    print(f"Extracted {len(items)} STAAR Alternate 2 2025 questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
