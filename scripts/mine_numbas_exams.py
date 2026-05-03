from __future__ import annotations

import html
import json
import os
import re
import time
from dataclasses import asdict, dataclass
from pathlib import Path

import requests


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "numbas_exams"
OUTPUT_JSON = OUTPUT_DIR / "numbas_exam_questions.json"
OUTPUT_MD = OUTPUT_DIR / "numbas_exam_questions_summary.md"
BASE_URL = "https://numbas.mathcentre.ac.uk"
SEARCH_URL = f"{BASE_URL}/search/"

MAX_EXAMS = int(os.getenv("NUMBAS_EXAMS_MAX", "120"))
REQUEST_TIMEOUT = 30
REQUEST_PAUSE_SECONDS = 0.05


@dataclass
class ExtractedExamQuestion:
    source_id: str
    collection_id: str
    exam_id: int
    exam_slug: str
    exam_title: str
    exam_licence: str
    question_index: int
    question_title: str
    statement_html: str
    advice_html: str
    question_licence: str
    tags: list[str]
    part_types: list[str]
    variable_names: list[str]
    source_url: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def clean_html_fragment(text: str) -> str:
    cleaned = html.unescape(text)
    cleaned = re.sub(r"<br\s*/?>", " ", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"</p>|</li>|</div>|</tr>", " ", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"<[^>]+>", " ", cleaned)
    cleaned = re.sub(r"\\\((.*?)\\\)", r"\1", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\\\[(.*?)\\\]", r"\1", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\\[A-Za-z]+", " ", cleaned)
    cleaned = re.sub(r"\{([^{}]+)\}", r"\1", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def infer_candidate_tracks(title: str, text: str, tags: list[str]) -> list[str]:
    lowered = " ".join([title, text, *tags]).lower()
    candidates: list[str] = []
    if any(key in lowered for key in ["equilibrium", "rigid body", "mechanics", "force", "vector"]):
        candidates.extend(["genPhys1", "quantAdvanced"])
    if any(key in lowered for key in ["linear equations", "matrices", "algebra", "inequalities", "trigonometry"]):
        candidates.extend(["high_algebra_2", "mathExtensions", "linearAlgebra"])
    if any(key in lowered for key in ["integration", "hyperbolic", "calculus"]):
        candidates.extend(["apCalculusAB", "apCalculusBC", "genMath1"])
    if any(key in lowered for key in ["problem solving"]):
        candidates.extend(["brainBurners", "logicCriticalThinking"])
    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def fetch_text(session: requests.Session, url: str, *, params: dict[str, str] | None = None) -> str:
    response = session.get(url, params=params, timeout=REQUEST_TIMEOUT)
    response.raise_for_status()
    time.sleep(REQUEST_PAUSE_SECONDS)
    return response.text


def parse_search_page(html_text: str) -> tuple[list[tuple[int, str, str]], bool]:
    matches = re.findall(
        r'<a class="item-link" href="/exam/(\d+)/([^"/]+)/">([^<]+)</a>',
        html_text,
        flags=re.IGNORECASE,
    )
    results = [(int(exam_id), slug, html.unescape(title).strip()) for exam_id, slug, title in matches]
    has_next = 'class="next"' in html_text
    return results, has_next


def fetch_exam_refs(session: requests.Session) -> list[tuple[int, str, str]]:
    refs: list[tuple[int, str, str]] = []
    seen: set[int] = set()
    page = 1
    while len(refs) < MAX_EXAMS:
        html_text = fetch_text(session, SEARCH_URL, params={"item_types": "exams", "usage": "reuse", "page": str(page)})
        page_refs, has_next = parse_search_page(html_text)
        if not page_refs:
            break
        for ref in page_refs:
            if ref[0] in seen:
                continue
            seen.add(ref[0])
            refs.append(ref)
            if len(refs) >= MAX_EXAMS:
                return refs
        if not has_next:
            break
        page += 1
    return refs


def parse_exam_payload(exam_text: str) -> dict:
    payload = exam_text
    if payload.startswith("//"):
        payload = payload.split("\n", 1)[1]
    return json.loads(payload)


def extract_questions(exam_id: int, slug: str, title_hint: str, exam_text: str) -> list[ExtractedExamQuestion]:
    payload = parse_exam_payload(exam_text)
    exam_title = payload.get("name") or title_hint
    exam_licence = (payload.get("metadata") or {}).get("licence") or "None specified"
    items: list[ExtractedExamQuestion] = []

    question_index = 0
    for group in payload.get("question_groups", []):
        for question in group.get("questions", []) or []:
            question_index += 1
            question_title = question.get("name") or f"Question {question_index}"
            statement_html = question.get("statement") or ""
            advice_html = question.get("advice") or ""
            question_licence = (question.get("metadata") or {}).get("licence") or exam_licence
            tags = question.get("tags") or []
            part_types = [p.get("type", "") for p in question.get("parts") or [] if p.get("type")]
            variable_names = sorted((question.get("variables") or {}).keys())
            text_for_inference = clean_html_fragment(statement_html)
            items.append(
                ExtractedExamQuestion(
                    source_id=f"numbas-exam::{exam_id}::{question_index}",
                    collection_id=f"numbas-exam::{exam_id}",
                    exam_id=exam_id,
                    exam_slug=slug,
                    exam_title=exam_title,
                    exam_licence=exam_licence,
                    question_index=question_index,
                    question_title=question_title,
                    statement_html=statement_html,
                    advice_html=advice_html,
                    question_licence=question_licence,
                    tags=tags,
                    part_types=part_types,
                    variable_names=variable_names,
                    source_url=f"{BASE_URL}/exam/{exam_id}/{slug}/",
                    candidate_track_ids=infer_candidate_tracks(question_title, text_for_inference, tags),
                    topic_tags=[exam_title, question_title, *tags],
                )
            )
    return items


def write_outputs(items: list[ExtractedExamQuestion], exams_count: int) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_exam: dict[str, int] = {}
    by_licence: dict[str, int] = {}
    for item in items:
        by_exam[item.exam_title] = by_exam.get(item.exam_title, 0) + 1
        by_licence[item.question_licence] = by_licence.get(item.question_licence, 0) + 1

    payload = {
        "source": "Numbas reusable exams",
        "searchUrl": f"{SEARCH_URL}?item_types=exams&usage=reuse",
        "examCount": exams_count,
        "questionCount": len(items),
        "items": [asdict(item) for item in items],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# Numbas Exam Questions Raw Collection",
        "",
        "- Source: Numbas reusable exams",
        f"- Search URL: {SEARCH_URL}?item_types=exams&usage=reuse",
        f"- Exams extracted: {exams_count}",
        f"- Question instances extracted: {len(items)}",
        "",
        "## Top Licences",
        "",
    ]
    for licence, count in sorted(by_licence.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{licence}`: {count}")

    lines.extend(["", "## Largest Exams", ""])
    for exam_title, count in sorted(by_exam.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{exam_title}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    session = requests.Session()
    session.headers.update({"User-Agent": "floe-rebuild8-content-miner/1.0"})
    refs = fetch_exam_refs(session)
    items: list[ExtractedExamQuestion] = []
    for index, (exam_id, slug, title) in enumerate(refs, start=1):
        exam_text = fetch_text(session, f"{BASE_URL}/exam/{exam_id}/{slug}.exam")
        items.extend(extract_questions(exam_id, slug, title, exam_text))
        if index % 25 == 0:
            print(f"Fetched {index}/{len(refs)} Numbas exams...", flush=True)
    write_outputs(items, len(refs))
    print(f"Extracted {len(items)} Numbas exam questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
