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
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "staar_2023"
OUTPUT_JSON = OUTPUT_DIR / "staar_2023_questions.json"
OUTPUT_MD = OUTPUT_DIR / "staar_2023_summary.md"
SOURCE_URL = "https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions"
USER_AGENT = "floe-rebuild8-content-miner/1.0"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    subject: str
    grade_band: str
    exam_title: str
    exam_url: str
    answer_key_url: str
    question_number: int
    prompt_text: str
    answer_key_excerpt: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def fetch_html(url: str) -> str:
    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=60)
    response.raise_for_status()
    return response.text


def fetch_pdf_reader(url: str) -> PdfReader:
    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=120)
    response.raise_for_status()
    return PdfReader(io.BytesIO(response.content))


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def extract_pdf_text(url: str) -> str:
    import io

    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=120)
    response.raise_for_status()
    reader = PdfReader(io.BytesIO(response.content))
    pages: list[str] = []
    for page in reader.pages:
        pages.append(page.extract_text() or "")
    return "\n".join(pages)


def collect_sampler_pairs() -> list[tuple[str, str, str]]:
    html = fetch_html(SOURCE_URL)
    soup = BeautifulSoup(html, "html.parser")
    samplers: dict[str, str] = {}
    keys: dict[str, str] = {}

    for anchor in soup.find_all("a", href=True):
        href = urljoin(SOURCE_URL, anchor["href"])
        text = " ".join(anchor.get_text(" ", strip=True).split())
        lowered_href = href.lower()
        lowered_text = text.lower()

        if "2023" not in lowered_href and "2023" not in lowered_text:
            continue
        if "pdf" not in lowered_href:
            continue

        if "item-sampler" in lowered_href and "key" not in lowered_href:
            samplers[text.replace(" Paper Sampler", "").replace(" Item Sampler", "")] = href
        if "sampler-key" in lowered_href or "paper-sampler-key" in lowered_href:
            cleaned = (
                text.replace(" Paper Sampler Answer Key", "")
                .replace(" Paper Sample Answer Key", "")
                .replace(" Answer Key", "")
            )
            keys[cleaned] = href

    pairs: list[tuple[str, str, str]] = []
    for title, sampler_url in sorted(samplers.items()):
        key_url = keys.get(title)
        if key_url:
            pairs.append((title, sampler_url, key_url))
    return pairs


def split_questions(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"Copyright © .*?written permission from the Texas Education Agency\.", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\bPage\s+\d+\b", " ", cleaned)
    cleaned = re.sub(r"STAAR.*?Paper Item Sampler", " ", cleaned)
    cleaned = re.sub(r"\n\s*([0-9]{1,2})\s+", r"\n@@QUESTION_\1@@ ", cleaned)
    parts = re.split(r"@@QUESTION_(\d{1,2})@@", cleaned)
    questions: dict[int, str] = {}
    for index in range(1, len(parts), 2):
        number = int(parts[index])
        body = normalize_whitespace(parts[index + 1])
        if body:
            questions[number] = body[:2000]
    return questions


def split_answer_key_entries(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"New Question Type Samplers.*?Correct Answer\(s\)", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    parts = re.split(r"(?<!\d)(\d{1,2})\s+", cleaned)
    entries: dict[int, str] = {}
    for index in range(1, len(parts), 2):
        number = int(parts[index])
        body = parts[index + 1].strip()
        next_match = re.search(r"(?<!\d)\d{1,2}\s", body)
        if next_match:
            body = body[: next_match.start()].strip()
        entries[number] = body[:600]
    return entries


def infer_grade_band(title: str) -> str:
    lowered = title.lower()
    if "grade 3" in lowered or "grade 4" in lowered or "grade 5" in lowered:
        return "primary"
    if "grade 6" in lowered or "grade 7" in lowered or "grade 8" in lowered:
        return "high"
    return "high"


def infer_subject(title: str) -> str:
    lowered = title.lower()
    if "algebra" in lowered:
        return "algebra"
    if "biology" in lowered:
        return "biology"
    if "history" in lowered:
        return "history"
    if "science" in lowered:
        return "science"
    if "rla" in lowered:
        return "reading-language-arts"
    return "math"


def infer_candidate_tracks(title: str, subject: str) -> list[str]:
    lowered = title.lower()
    candidates: list[str] = []
    if subject == "math":
        candidates.extend(["naplanYear5", "naplanYear7", "high_algebra_1"])
    if subject == "algebra":
        candidates.extend(["high_algebra_1", "high_algebra_2", "sat"])
    if subject == "biology":
        candidates.extend(["apBiology", "genBio1"])
    if subject == "science":
        candidates.extend(["middleSchoolEarthSpace", "scienceDiscovery"])
    if subject == "history":
        candidates.extend(["apHistory", "usHistory"])
    if subject == "reading-language-arts":
        candidates.extend(["satReadingWriting", "logicCriticalThinking"])
    if "spanish" in lowered:
        candidates.append("spanish")

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def build_questions() -> list[ExtractedQuestion]:
    items: list[ExtractedQuestion] = []
    for title, sampler_url, key_url in collect_sampler_pairs():
        sampler_text = extract_pdf_text(sampler_url)
        key_text = extract_pdf_text(key_url)
        questions = split_questions(sampler_text)
        answers = split_answer_key_entries(key_text)
        grade_band = infer_grade_band(title)
        subject = infer_subject(title)
        collection_id = f"staar-2023::{re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')}"
        candidate_track_ids = infer_candidate_tracks(title, subject)

        for question_number, prompt_text in sorted(questions.items()):
            items.append(
                ExtractedQuestion(
                    source_id=f"{collection_id}::{question_number}",
                    collection_id=collection_id,
                    subject=subject,
                    grade_band=grade_band,
                    exam_title=title,
                    exam_url=sampler_url,
                    answer_key_url=key_url,
                    question_number=question_number,
                    prompt_text=prompt_text,
                    answer_key_excerpt=answers.get(question_number, ""),
                    candidate_track_ids=candidate_track_ids,
                    topic_tags=[title, subject, grade_band, "staar-2023"],
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
        "source": "Texas STAAR 2023 paper samplers",
        "sourceUrl": SOURCE_URL,
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# STAAR 2023 Raw Collection",
        "",
        "- Source: Texas STAAR 2023 paper samplers",
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

    lines.extend(["", "## Largest Samplers", ""])
    for exam_title, count in sorted(by_exam.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{exam_title}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    items = build_questions()
    write_outputs(items)
    print(f"Extracted {len(items)} STAAR 2023 questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
