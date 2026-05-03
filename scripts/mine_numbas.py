from __future__ import annotations

import html
import json
import os
import re
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable

import requests


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "numbas"
OUTPUT_JSON = OUTPUT_DIR / "numbas_questions.json"
OUTPUT_MD = OUTPUT_DIR / "numbas_summary.md"
BASE_URL = "https://numbas.mathcentre.ac.uk"
SEARCH_URL = f"{BASE_URL}/search/"

SEARCH_PARAMS = {
    "item_types": "questions",
    "usage": "reuse",
}

MAX_PAGES = int(os.getenv("NUMBAS_MAX_PAGES", "400"))
MAX_QUESTIONS = int(os.getenv("NUMBAS_MAX_QUESTIONS", "0"))
REQUEST_TIMEOUT = 30
REQUEST_PAUSE_SECONDS = 0.05


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    question_id: int
    slug: str
    title: str
    statement_html: str
    advice_html: str
    licence: str
    tags: list[str]
    contributors: list[str]
    part_types: list[str]
    variable_names: list[str]
    exam_length: int
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


def infer_candidate_tracks(title: str, text: str, tags: Iterable[str]) -> list[str]:
    lowered = " ".join([title, text, *tags]).lower()
    candidates: list[str] = []

    if any(key in lowered for key in ["integral", "derivative", "calculus", "hyperbolic", "limit"]):
        candidates.extend(["apCalculusAB", "apCalculusBC", "genMath1"])
    if any(key in lowered for key in ["matrix", "determinant", "eigen", "vector", "linear algebra"]):
        candidates.extend(["linearAlgebra", "quantAdvanced"])
    if any(key in lowered for key in ["probability", "binomial", "mean", "median", "standard deviation", "statistics"]):
        candidates.extend(["apStatistics", "quant", "introDataScience"])
    if any(key in lowered for key in ["equilibrium", "force", "moment", "beam", "friction", "mechanics"]):
        candidates.extend(["genPhys1", "quantAdvanced"])
    if any(key in lowered for key in ["bidmas", "simplify", "factor", "solve", "quadratic", "algebra"]):
        candidates.extend(["high_algebra_2", "mathExtensions"])
    if any(key in lowered for key in ["cryptography", "modular arithmetic", "logic", "proof"]):
        candidates.extend(["logicCriticalThinking", "brainBurners"])

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
        r'<a class="item-link" href="/question/(\d+)/([^"/]+)/">([^<]+)</a>',
        html_text,
        flags=re.IGNORECASE,
    )
    results = [(int(question_id), slug, html.unescape(title).strip()) for question_id, slug, title in matches]
    has_next = 'class="next"' in html_text
    return results, has_next


def fetch_all_question_refs(session: requests.Session) -> list[tuple[int, str, str]]:
    all_results: list[tuple[int, str, str]] = []
    seen_ids: set[int] = set()

    for page in range(1, MAX_PAGES + 1):
        params = dict(SEARCH_PARAMS)
        params["page"] = str(page)
        page_html = fetch_text(session, SEARCH_URL, params=params)
        page_results, has_next = parse_search_page(page_html)
        if not page_results:
            break
        for question_id, slug, title in page_results:
            if question_id in seen_ids:
                continue
            seen_ids.add(question_id)
            all_results.append((question_id, slug, title))
            if MAX_QUESTIONS and len(all_results) >= MAX_QUESTIONS:
                return all_results
        if not has_next:
            break
    return all_results


def parse_exam_payload(exam_text: str) -> dict:
    payload = exam_text
    if payload.startswith("//"):
        payload = payload.split("\n", 1)[1]
    return json.loads(payload)


def extract_question(question_id: int, slug: str, title_hint: str, exam_text: str) -> ExtractedQuestion | None:
    payload = parse_exam_payload(exam_text)
    groups = payload.get("question_groups", [])
    if not groups:
        return None
    questions = groups[0].get("questions", [])
    if not questions:
        return None
    question = questions[0]

    title = question.get("name") or title_hint
    metadata = question.get("metadata") or {}
    licence = metadata.get("licence") or "None specified"
    statement_html = question.get("statement") or ""
    advice_html = question.get("advice") or ""
    tags = question.get("tags") or []
    contributors = [c.get("name", "") for c in question.get("contributors") or [] if c.get("name")]
    part_types = [p.get("type", "") for p in question.get("parts") or [] if p.get("type")]
    variable_names = sorted((question.get("variables") or {}).keys())

    text_for_inference = clean_html_fragment(statement_html)
    topic_tags = [title, *tags]
    candidate_track_ids = infer_candidate_tracks(title, text_for_inference, tags)

    return ExtractedQuestion(
        source_id=f"numbas::{question_id}",
        collection_id="numbas::reuse-questions",
        question_id=question_id,
        slug=slug,
        title=title,
        statement_html=statement_html,
        advice_html=advice_html,
        licence=licence,
        tags=tags,
        contributors=contributors,
        part_types=part_types,
        variable_names=variable_names,
        exam_length=len(exam_text),
        source_url=f"{BASE_URL}/question/{question_id}/{slug}/",
        candidate_track_ids=candidate_track_ids,
        topic_tags=topic_tags,
    )


def fetch_questions(session: requests.Session, refs: list[tuple[int, str, str]]) -> list[ExtractedQuestion]:
    extracted: list[ExtractedQuestion] = []
    for index, (question_id, slug, title_hint) in enumerate(refs, start=1):
        exam_url = f"{BASE_URL}/question/{question_id}/{slug}.exam"
        try:
            exam_text = fetch_text(session, exam_url)
            question = extract_question(question_id, slug, title_hint, exam_text)
            if question:
                extracted.append(question)
        except Exception:
            continue
        if index % 100 == 0:
            print(f"Fetched {index}/{len(refs)} Numbas questions...", flush=True)
    return extracted


def write_outputs(questions: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    by_part_type: dict[str, int] = {}
    by_licence: dict[str, int] = {}
    top_tags: dict[str, int] = {}
    for question in questions:
        by_licence[question.licence] = by_licence.get(question.licence, 0) + 1
        for part_type in question.part_types:
            by_part_type[part_type] = by_part_type.get(part_type, 0) + 1
        for tag in question.tags:
            top_tags[tag] = top_tags.get(tag, 0) + 1

    payload = {
        "source": "Numbas public database",
        "license": "Mixed open-access licences from reusable public questions",
        "searchUrl": f"{SEARCH_URL}?item_types=questions&usage=reuse",
        "questionCount": len(questions),
        "items": [asdict(question) for question in questions],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# Numbas Raw Collection",
        "",
        "- Source: Numbas public database",
        "- Scope: Questions marked `Free to reuse` in the public database",
        f"- Search URL: {SEARCH_URL}?item_types=questions&usage=reuse",
        f"- Questions extracted: {len(questions)}",
        "",
        "## Top Part Types",
        "",
    ]
    for part_type, count in sorted(by_part_type.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{part_type}`: {count}")

    lines.extend(["", "## Top Licences", ""])
    for licence, count in sorted(by_licence.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{licence}`: {count}")

    lines.extend(["", "## Top Tags", ""])
    for tag, count in sorted(top_tags.items(), key=lambda item: (-item[1], item[0]))[:25]:
        lines.append(f"- `{tag}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    session = requests.Session()
    session.headers.update({"User-Agent": "floe-rebuild8-content-miner/1.0"})
    refs = fetch_all_question_refs(session)
    questions = fetch_questions(session, refs)
    write_outputs(questions)
    print(f"Extracted {len(questions)} Numbas questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
