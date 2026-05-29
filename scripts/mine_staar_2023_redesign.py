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
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "staar_2023_redesign"
OUTPUT_JSON = OUTPUT_DIR / "staar_2023_redesign_questions.json"
OUTPUT_MD = OUTPUT_DIR / "staar_2023_redesign_summary.md"
SOURCE_URL = "https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions"
USER_AGENT = "floe-rebuild8-content-miner/1.0"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    subject: str
    grade_band: str
    exam_title: str
    test_url: str
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
    slug = slug.replace("2023-staar-redesign-", "").replace("-practice-test", "")
    mapping = {
        "3-math": "Grade 3 Math",
        "3-rla": "Grade 3 RLA",
        "3-math-spanish": "Grade 3 Spanish Math",
        "3-rla-spanish": "Grade 3 Spanish RLA",
        "4-math": "Grade 4 Math",
        "4-rla": "Grade 4 RLA",
        "4-math-spanish": "Grade 4 Spanish Math",
        "4-rla-spanish": "Grade 4 Spanish RLA",
        "5-math": "Grade 5 Math",
        "5-rla": "Grade 5 RLA",
        "5-science": "Grade 5 Science",
        "5-math-spanish": "Grade 5 Spanish Math",
        "5-rla-spanish": "Grade 5 Spanish RLA",
        "5-science-spanish": "Grade 5 Spanish Science",
        "6-math": "Grade 6 Math",
        "6-rla": "Grade 6 RLA",
        "7-math": "Grade 7 Math",
        "7-rla": "Grade 7 RLA",
        "8-math": "Grade 8 Math",
        "8-rla": "Grade 8 RLA",
        "8-science": "Grade 8 Science",
        "8-social-studies": "Grade 8 Social Studies",
        "algebra-i": "Algebra I",
        "english-i": "English I",
        "english-ii": "English II",
        "biology": "Biology",
    }
    return mapping.get(slug, slug.replace("-", " ").title())


def key_url_for_title(title: str) -> str | None:
    key_map = {
        "Grade 3 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-3-math-paper-key.pdf",
        "Grade 3 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-3-rla-paper-key.pdf",
        "Grade 3 Spanish Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-3-math-spanish-paper-key.pdf",
        "Grade 3 Spanish RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-3-rla-spanish-paper-key.pdf",
        "Grade 4 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-4-math-paper-key.pdf",
        "Grade 4 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-4-rla-key.pdf",
        "Grade 4 Spanish Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-4-math-spanish-paper-key.pdf",
        "Grade 4 Spanish RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-4-rla-paper-spanish-key.pdf",
        "Grade 5 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-math-paper-key.pdf",
        "Grade 5 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-rla-paper-key.pdf",
        "Grade 5 Science": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-science-paper-key.pdf",
        "Grade 5 Spanish Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-math-spanish-paper-key.pdf",
        "Grade 5 Spanish RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-rla-spanish-paper-key.pdf",
        "Grade 5 Spanish Science": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-5-science-spanish-paper-key.pdf",
        "Grade 6 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-6-math-paper-key.pdf",
        "Grade 6 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-6-rla-paper-key.pdf",
        "Grade 7 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-7-math-paper-key.pdf",
        "Grade 7 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-7-rla-paper-key.pdf",
        "Grade 8 Math": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-8-math-paper-key.pdf",
        "Grade 8 RLA": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-8-rla-paper-key.pdf",
        "Grade 8 Science": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-8-science-key.pdf-0",
        "Grade 8 Social Studies": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-8-social-studies-paper-key.pdf",
        "Algebra I": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-algebra-i-paper-key.pdf",
        "English I": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-english-i-paper-key.pdf",
        "English II": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-english-ii-paper-key.pdf",
        "Biology": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-biology-paper-key.pdf",
        "U.S. History": "https://tea.texas.gov/student-assessment/staar/released-test-questions/2022-staar-redesign-us-history-paper-key.pdf",
    }
    return key_map.get(title)


def collect_pairs() -> list[tuple[str, str, str]]:
    html = fetch_html(SOURCE_URL)
    soup = BeautifulSoup(html, "html.parser")
    tests: dict[str, str] = {}
    for anchor in soup.find_all("a", href=True):
        href = urljoin(SOURCE_URL, anchor["href"])
        low = href.lower()
        if "2023-staar-redesign" in low and low.endswith(".pdf") and "practice-test" in low:
            title = filename_to_title(href)
            tests[title] = href
    pairs: list[tuple[str, str, str]] = []
    for title, test_url in sorted(tests.items()):
        key_url = key_url_for_title(title)
        if key_url:
            pairs.append((title, test_url, key_url))
    return pairs


def split_questions(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"Copyright © .*?written permission from the Texas Education Agency\.", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\bPage\s+\d+\b", " ", cleaned)
    cleaned = re.sub(r"\bGO ON\b", " ", cleaned)
    cleaned = re.sub(r"\bPractice Assessment\b", " ", cleaned)
    cleaned = re.sub(r"\bDIRECTIONS\b.*?(?=\n\s*\d{1,2}\s)", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\n\s*([0-9]{1,2})\s+", r"\n@@QUESTION_\1@@ ", cleaned)
    parts = re.split(r"@@QUESTION_(\d{1,2})@@", cleaned)
    questions: dict[int, str] = {}
    for index in range(1, len(parts), 2):
        number = int(parts[index])
        body = normalize_whitespace(parts[index + 1])
        if body:
            questions[number] = body[:2600]
    return questions


def split_answer_key_entries(text: str) -> dict[int, str]:
    cleaned = text.replace("\xa0", " ")
    cleaned = re.sub(r"Practice Test.*?Answer Key", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"Item\s+Number.*?Correct\s+Answer\(s\)", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    matches = list(re.finditer(r"(?<!\d)(\d{1,2})\s+", cleaned))
    entries: dict[int, str] = {}
    for index, match in enumerate(matches):
        number = int(match.group(1))
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(cleaned)
        body = cleaned[start:end].strip()
        entries[number] = body[:800]
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
    if "history" in lowered or "social studies" in lowered:
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
    for title, test_url, key_url in collect_pairs():
        questions = split_questions(extract_pdf_text(test_url))
        answers = split_answer_key_entries(extract_pdf_text(key_url))
        subject = infer_subject(title)
        grade_band = infer_grade_band(title)
        collection_id = f"staar-2023-redesign::{re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')}"
        candidates = infer_candidate_tracks(title, subject)
        for question_number, prompt_text in sorted(questions.items()):
            items.append(
                ExtractedQuestion(
                    source_id=f"{collection_id}::{question_number}",
                    collection_id=collection_id,
                    subject=subject,
                    grade_band=grade_band,
                    exam_title=title,
                    test_url=test_url,
                    answer_key_url=key_url,
                    question_number=question_number,
                    prompt_text=prompt_text,
                    answer_key_excerpt=answers.get(question_number, ""),
                    candidate_track_ids=candidates,
                    topic_tags=[title, subject, grade_band, "staar-2023-redesign"],
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
        "source": "Texas STAAR 2023 redesign practice tests",
        "sourceUrl": SOURCE_URL,
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# STAAR 2023 Redesign Raw Collection",
        "",
        "- Source: Texas STAAR 2023 redesign practice tests",
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
    print(f"Extracted {len(items)} STAAR 2023 redesign questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
