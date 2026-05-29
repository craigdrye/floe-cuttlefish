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
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "staar_2024_rationales"
OUTPUT_JSON = OUTPUT_DIR / "staar_2024_rationales.json"
OUTPUT_MD = OUTPUT_DIR / "staar_2024_rationales_summary.md"
SOURCE_URL = "https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions"
USER_AGENT = "floe-rebuild8-content-miner/1.0"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    subject: str
    grade_band: str
    exam_title: str
    rationale_url: str
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


def extract_pdf_text(url: str) -> str:
    import io

    response = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=120)
    response.raise_for_status()
    reader = PdfReader(io.BytesIO(response.content))
    return "\n".join((page.extract_text() or "") for page in reader.pages)


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def filename_to_title(href: str) -> str:
    slug = href.rsplit("/", 1)[-1].replace(".pdf", "")
    slug = slug.replace("2024-staar-", "").replace("-rationale", "").replace("-key", "")
    mapping = {
        "3-math": "Grade 3 Math",
        "3-rla": "Grade 3 RLA",
        "3-math-spanish": "Grade 3 Spanish Math",
        "3-rla-spanish": "Grade 3 Spanish RLA",
        "algebra-i": "Algebra I",
        "english-i": "English I",
        "english-ii": "English II",
        "biology": "Biology",
        "us-history": "U.S. History",
    }
    return mapping.get(slug, slug.replace("-", " ").title())


def collect_pairs() -> list[tuple[str, str, str]]:
    html = fetch_html(SOURCE_URL)
    soup = BeautifulSoup(html, "html.parser")
    rationales: dict[str, str] = {}
    keys: dict[str, str] = {}

    for anchor in soup.find_all("a", href=True):
        href = urljoin(SOURCE_URL, anchor["href"])
        lowered_href = href.lower()
        if "2024-staar-" not in lowered_href or not lowered_href.endswith(".pdf"):
            continue
        if "practice-test-key" in lowered_href:
            continue

        title = filename_to_title(href)
        if lowered_href.endswith("-rationale.pdf"):
            rationales[title] = href
        elif lowered_href.endswith("-key.pdf"):
            keys[title] = href

    pairs: list[tuple[str, str, str]] = []
    for title, rationale_url in sorted(rationales.items()):
        key_url = keys.get(title)
        if key_url:
            pairs.append((title, rationale_url, key_url))
    return pairs


def split_rationale_entries(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"STAAR Spring 2024 .*?Rationales", " ", cleaned)
    cleaned = re.sub(r"\bPage\s+\d+\b", " ", cleaned)
    cleaned = re.sub(r"Item\s+Position\s+Rationale", " ", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    matches = list(re.finditer(r"(?<!\d)(\d{1,2})\s+", cleaned))
    entries: dict[int, str] = {}
    for index, match in enumerate(matches):
        number = int(match.group(1))
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(cleaned)
        body = cleaned[start:end].strip()
        if body:
            entries[number] = body[:2400]
    return entries


def split_answer_key_entries(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"STAAR Spring 2024 .*?Answer Key", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"Item\s+Position.*?Correct Answer\(s\)", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    matches = list(re.finditer(r"(?<!\d)(\d{1,2})\s+", cleaned))
    entries: dict[int, str] = {}
    for index, match in enumerate(matches):
        number = int(match.group(1))
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(cleaned)
        body = cleaned[start:end].strip()
        entries[number] = body[:600]
    return entries


def infer_grade_band(title: str) -> str:
    lowered = title.lower()
    if "grade 3" in lowered or "grade 4" in lowered or "grade 5" in lowered:
        return "primary"
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
    if "english" in lowered or "rla" in lowered:
        return "reading-language-arts"
    return "math"


def infer_candidate_tracks(title: str, subject: str) -> list[str]:
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
    if "spanish" in title.lower():
        candidates.append("spanish")
    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def build_questions() -> list[ExtractedQuestion]:
    items: list[ExtractedQuestion] = []
    for title, rationale_url, key_url in collect_pairs():
        rationale_entries = split_rationale_entries(extract_pdf_text(rationale_url))
        answer_entries = split_answer_key_entries(extract_pdf_text(key_url))
        subject = infer_subject(title)
        grade_band = infer_grade_band(title)
        collection_id = f"staar-2024-rationale::{re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')}"
        candidates = infer_candidate_tracks(title, subject)
        for question_number, prompt_text in sorted(rationale_entries.items()):
            items.append(
                ExtractedQuestion(
                    source_id=f"{collection_id}::{question_number}",
                    collection_id=collection_id,
                    subject=subject,
                    grade_band=grade_band,
                    exam_title=title,
                    rationale_url=rationale_url,
                    answer_key_url=key_url,
                    question_number=question_number,
                    prompt_text=normalize_whitespace(prompt_text),
                    answer_key_excerpt=answer_entries.get(question_number, ""),
                    candidate_track_ids=candidates,
                    topic_tags=[title, subject, grade_band, "staar-2024-rationale"],
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
        "source": "Texas STAAR 2024 rationales",
        "sourceUrl": SOURCE_URL,
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# STAAR 2024 Rationales Raw Collection",
        "",
        "- Source: Texas STAAR 2024 rationales",
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
    lines.extend(["", "## Largest Collections", ""])
    for exam_title, count in sorted(by_exam.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{exam_title}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    items = build_questions()
    write_outputs(items)
    print(f"Extracted {len(items)} STAAR 2024 rationale items into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
