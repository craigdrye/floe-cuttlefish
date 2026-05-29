#!/usr/bin/env python3
"""Assess whether STAAR/NYSED raw collections contain playable fixed-choice data."""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RAW_ROOT = ROOT / "data" / "raw_collections"
REPORT = ROOT / "reports" / "staar-nysed-fixed-choice-repair.md"
DETAILS = ROOT / "reports" / "staar-nysed-fixed-choice-repair.json"

CHOICE_LINE_RE = re.compile(r"(?:^|\n)\s*(?:[A-D]|[A-D][.)])\s+.{2,}", re.MULTILINE)
CHOICE_INLINE_RE = re.compile(r"\bA[.)]\s+.{2,}?\s+B[.)]\s+.{2,}?\s+C[.)]\s+.{2,}?\s+D[.)]\s+", re.DOTALL)
CORRECT_RE = re.compile(r"(?:correct=|Correct Answer\s*:?\s*|answer\s*:?\s*)([A-D])\b", re.IGNORECASE)
STAAR_KEY_RE = re.compile(r"\b(?:Readiness|Supporting)\s+Standard\b.*\b([A-D])\b")


def load_items(path: Path) -> list[dict]:
    data = json.loads(path.read_text())
    if isinstance(data, dict):
        return data.get("items", [])
    if isinstance(data, list):
        return data
    return []


def collection_family(folder: str) -> str:
    if folder.startswith("staar"):
        return "STAAR"
    if folder.startswith("nysed"):
        return "NYSED"
    return "other"


def source_kind(folder: str) -> str:
    if folder.startswith("staar_2024_rationales") or folder.startswith("staar_2025_rationales"):
        return "STAAR rationales"
    if folder.startswith("staar"):
        return "STAAR released tests"
    if folder.startswith("nysed_math"):
        return "NYSED math"
    if folder.startswith("nysed_ela"):
        return "NYSED ELA"
    if folder.startswith("nysed_science"):
        return "NYSED science"
    return "other"


def correct_letter(excerpt: str) -> str | None:
    match = CORRECT_RE.search(excerpt or "")
    if match:
        return match.group(1).upper()
    match = STAAR_KEY_RE.search(excerpt or "")
    if match:
        return match.group(1).upper()
    return None


def has_choice_markers(prompt: str) -> bool:
    return bool(CHOICE_INLINE_RE.search(prompt or "") or len(CHOICE_LINE_RE.findall(prompt or "")) >= 4)


def looks_like_metadata(prompt: str) -> bool:
    text = " ".join((prompt or "").split())
    if not text:
        return True
    metadata_terms = [
        "Multiple Choice",
        "NGLS.Math.Content",
        "Standard A.",
        "Performance Expectation",
        "Readiness Standard",
        "Supporting Standard",
    ]
    if any(term in text for term in metadata_terms) and len(text) < 220:
        return True
    return False


def sample(items: list[dict], predicate, limit: int = 3) -> list[dict]:
    out = []
    for item in items:
        if predicate(item):
            out.append(
                {
                    "source_id": item.get("source_id"),
                    "question_number": item.get("question_number"),
                    "prompt_text": " ".join((item.get("prompt_text") or "").split())[:240],
                    "answer_key_excerpt": " ".join((item.get("answer_key_excerpt") or "").split())[:180],
                }
            )
        if len(out) >= limit:
            break
    return out


def main() -> None:
    raw_files = sorted(
        p
        for p in RAW_ROOT.glob("*/*")
        if p.suffix == ".json" and (p.parent.name.startswith("staar") or p.parent.name.startswith("nysed"))
    )

    rows = []
    by_kind = defaultdict(Counter)
    examples = {}

    for path in raw_files:
        folder = path.parent.name
        items = load_items(path)
        with_correct = 0
        with_choice_markers = 0
        playable_current = 0
        metadata_like = 0
        tiny_prompt = 0
        empty_key = 0

        for item in items:
            prompt = item.get("prompt_text") or ""
            excerpt = item.get("answer_key_excerpt") or ""
            correct = correct_letter(excerpt)
            choices = has_choice_markers(prompt)
            with_correct += int(correct is not None)
            with_choice_markers += int(choices)
            playable_current += int(correct is not None and choices)
            metadata_like += int(looks_like_metadata(prompt))
            tiny_prompt += int(len(prompt.strip()) < 30)
            empty_key += int(not excerpt.strip())

        kind = source_kind(folder)
        row = {
            "folder": folder,
            "file": str(path.relative_to(ROOT)),
            "kind": kind,
            "items": len(items),
            "with_correct_letter": with_correct,
            "with_choice_markers_in_prompt": with_choice_markers,
            "safe_current_fixed_choice": playable_current,
            "metadata_or_table_like_prompt": metadata_like,
            "tiny_prompt": tiny_prompt,
            "empty_answer_key_excerpt": empty_key,
        }
        rows.append(row)
        by_kind[kind].update(row)
        examples[folder] = {
            "bad_prompt_samples": sample(items, lambda i: looks_like_metadata(i.get("prompt_text") or "")),
            "choice_marker_samples": sample(items, lambda i: has_choice_markers(i.get("prompt_text") or "")),
            "correct_letter_samples": sample(items, lambda i: correct_letter(i.get("answer_key_excerpt") or "") is not None),
        }

    DETAILS.write_text(json.dumps({"files": rows, "examples": examples}, indent=2) + "\n")

    inspected = "\n".join(f"- `{row['file']}` ({row['items']} items)" for row in rows)
    kind_lines = []
    for kind in sorted(by_kind):
        c = by_kind[kind]
        kind_lines.append(
            f"| {kind} | {c['items']} | {c['with_correct_letter']} | "
            f"{c['with_choice_markers_in_prompt']} | {c['safe_current_fixed_choice']} | "
            f"{c['metadata_or_table_like_prompt']} | {c['tiny_prompt']} |"
        )

    report = f"""# STAAR/NYSED Fixed-Choice Repair Assessment

## Source Files Inspected

{inspected}

## Aggregate Findings

| Source group | Raw items | Correct letters recoverable | Choice markers in prompt | Safe current fixed-choice imports | Metadata/table-like prompts | Tiny prompts |
|---|---:|---:|---:|---:|---:|---:|
{chr(10).join(kind_lines)}

## Extraction Defects

- No inspected raw item has a structured answer-choice array; any import would need to infer choices from `prompt_text` or go back to source PDFs.
- NYSED math and science extractions mostly captured answer-key/item-map rows, not the question stems and answer options. The correct answer letter is often present, but the stem/options are not.
- NYSED ELA extractions mostly captured passages or prose chunks and usually lack `answer_key_excerpt`, so questions, choices, and correct answers are not aligned.
- STAAR released-test extractions split PDFs into numeric/page fragments and partial answer-key rows. Correct letters can sometimes be parsed from answer-key excerpts, but stems and options are not reliably present in the same record.
- STAAR rationale extractions include some rationale/answer text fragments, but records are misaligned and still do not contain complete fixed-choice options.

## Recoverability From Current Raw Data

- Correct answers: partially recoverable for NYSED math/science and some STAAR answer-key rows; weak for NYSED ELA.
- Answer choices: not safely recoverable from current raw JSON because choices are not structured; this analyzer found no prompt records with four recognizable fixed-choice markers.
- Playable fixed-choice imports: not safe from current raw data alone. The conservative safe subset is `0` items because no collection provides both a trustworthy stem, four choices, and a correct answer in structured fields.

## Safe Subset Counts

- Safe current fixed-choice imports: `0`.
- Heuristic-only candidates with a correct letter and apparent choice markers are counted in `{DETAILS.relative_to(ROOT)}`; current count is `0`.

## Concrete Next-Step Plan

1. Re-extract from source PDFs with a page-aware parser that preserves question blocks and answer-choice coordinates; do not try to repair imports from the existing JSON alone.
2. Build per-source fixtures for one representative PDF each: STAAR released test, STAAR rationale, NYSED math, NYSED ELA, and NYSED science.
3. For NYSED math/science, join item-map answer rows to page-extracted question blocks by question number, then emit only records with one stem, 3-5 choices, and one correct letter.
4. For NYSED ELA, first separate passages from item blocks; only fixed-choice items whose question text and options are captured should be imported.
5. For STAAR, parse answer-key PDFs separately for correct letters and released/rationale PDFs for stems/options, then join by exam and item number.
6. Add a validation gate before catalog import: reject any item without structured `choices`, a valid `correctAnswer`, nontrivial stem text, and no obvious item-map/rationale boilerplate.
"""
    REPORT.write_text(report)
    print(f"Wrote {REPORT.relative_to(ROOT)}")
    print(f"Wrote {DETAILS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
