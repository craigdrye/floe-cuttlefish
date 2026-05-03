#!/usr/bin/env python3
"""Audit government/exam-board raw collections for recoverable fixed-choice rows."""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RAW_ROOT = ROOT / "data" / "raw_collections"
REPORT_MD = ROOT / "reports" / "government-exam-recovery-audit.md"
REPORT_JSON = ROOT / "reports" / "government-exam-recovery-audit.json"

REQUESTED_SOURCES = {
    "STAAR": ("staar_",),
    "STAAR Alternate 2": ("staar_alt2_",),
    "NYSED": ("nysed_",),
    "MCAS": ("mcas",),
    "LEAP": ("leap",),
    "Florida": ("florida", "fast_", "fsa_"),
}

CORRECT_LETTER_RE = re.compile(r"(?:correct=|Correct Answer\s*:?\s*|answer\s*:?\s*)([A-D])\b", re.I)
STAAR_KEY_RE = re.compile(r"\b(?:Readiness|Supporting)\s+Standard\b.*\b([A-D])\b")
OPTION_IS_CORRECT_RE = re.compile(r"\bOption\s+([A-D])\s+is\s+correct\b", re.I)
SPANISH_OPTION_IS_CORRECT_RE = re.compile(r"\b(?:La\s+)?opci[oó]n\s+([A-D])\s+es\s+correcta\b", re.I)
CHOICE_MARKER_RE = re.compile(r"(?:^|\n)\s*(?:[A-D][.)]|\([A-D]\))\s+.{2,}", re.M)
INLINE_MARKER_RE = re.compile(r"\bA[.)]\s+.+?\bB[.)]\s+.+?\bC[.)]\s+.+?\bD[.)]\s+", re.S)


def load_items(path: Path) -> list[dict]:
    data = json.loads(path.read_text())
    if isinstance(data, dict):
        return data.get("items", [])
    if isinstance(data, list):
        return data
    return []


def requested_group(folder: str) -> str | None:
    for label, prefixes in REQUESTED_SOURCES.items():
        if any(folder.startswith(prefix) for prefix in prefixes):
            if label == "STAAR" and folder.startswith("staar_alt2_"):
                return "STAAR Alternate 2"
            return label
    return None


def source_type(folder: str) -> str:
    if folder.startswith("staar_alt2_"):
        return "STAAR Alternate 2"
    if folder.startswith("staar_2024_rationales") or folder.startswith("staar_2025_rationales"):
        return "STAAR rationales"
    if folder.startswith("staar_"):
        return "STAAR released/redesign"
    if folder.startswith("nysed_math"):
        return "NYSED math"
    if folder.startswith("nysed_ela"):
        return "NYSED ELA"
    if folder.startswith("nysed_science"):
        return "NYSED science"
    return requested_group(folder) or "other"


def correct_letter(item: dict) -> str | None:
    text = f"{item.get('answer_key_excerpt') or ''}\n{item.get('prompt_text') or ''}"
    for regex in (CORRECT_LETTER_RE, STAAR_KEY_RE, OPTION_IS_CORRECT_RE, SPANISH_OPTION_IS_CORRECT_RE):
        match = regex.search(text)
        if match:
            return match.group(1).upper()
    return None


def has_choice_markers(text: str) -> bool:
    return bool(INLINE_MARKER_RE.search(text or "") or len(CHOICE_MARKER_RE.findall(text or "")) >= 4)


def metadata_like(text: str) -> bool:
    clean = " ".join((text or "").split())
    if not clean:
        return True
    if len(clean) < 30:
        return True
    terms = (
        "Multiple Choice",
        "Constructed Response",
        "NGLS.Math.Content",
        "Performance Expectation",
        "Readiness Standard",
        "Supporting Standard",
    )
    return len(clean) < 220 and any(term in clean for term in terms)


def normalize_answer(text: str) -> str:
    text = (text or "").lower()
    text = re.sub(r"\bin stimulus\s+\w+\b", "", text)
    text = re.sub(r"[^a-z0-9 ]+", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def alt2_choices(prompt: str) -> list[str]:
    if "answer choice" not in (prompt or "").lower():
        return []
    # Common form: "Direct the student to each answer choice... Communicate: Triangle. Pentagon. Rectangle."
    segments = re.findall(r"Communicate:\s*([^:]+?)(?=\s+(?:Communicate:|Direct|Present|If the student|The student|$))", prompt)
    candidates: list[str] = []
    for segment in segments:
        if "Find " in segment or "Here " in segment or "This " in segment:
            continue
        parts = [p.strip() for p in re.split(r"\.\s+", segment) if p.strip()]
        short_parts = [p.rstrip(".").strip() for p in parts if 1 <= len(p.split()) <= 6]
        if len(short_parts) >= 2:
            candidates = short_parts
    # Deduplicate while preserving order.
    deduped = []
    seen = set()
    for choice in candidates:
        key = normalize_answer(choice)
        if key and key not in seen:
            deduped.append(choice)
            seen.add(key)
    return deduped


def alt2_recoverable(item: dict) -> tuple[bool, list[str]]:
    choices = alt2_choices(item.get("prompt_text") or "")
    answer = normalize_answer(item.get("answer_key_excerpt") or "")
    if not (2 <= len(choices) <= 5 and answer):
        return False, choices
    normalized_choices = [normalize_answer(choice) for choice in choices]
    match = any(answer == choice or answer in choice or choice in answer for choice in normalized_choices)
    return match, choices


def sample_item(item: dict, choices: list[str] | None = None) -> dict:
    out = {
        "source_id": item.get("source_id"),
        "collection_id": item.get("collection_id"),
        "question_number": item.get("question_number"),
        "prompt_text": " ".join((item.get("prompt_text") or "").split())[:360],
        "answer_key_excerpt": " ".join((item.get("answer_key_excerpt") or "").split())[:180],
    }
    if choices:
        out["parsed_choices"] = choices
    return out


def status_for(row: dict) -> str:
    if row["safe_recoverable_now"] > 0:
        return "partial-safe-subset"
    if row["items"] == 0:
        return "absent"
    return "blocked"


def blocker_for(row: dict) -> str:
    kind = row["source_type"]
    if row["items"] == 0:
        return "No matching raw collection folder was found in data/raw_collections."
    if kind == "STAAR Alternate 2":
        return "Only rows with parseable teacher-script choices and matching answer text are safe; remaining rows depend on stimulus images or incomplete choice narration."
    if kind.startswith("NYSED"):
        return "Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer."
    if kind.startswith("STAAR"):
        return "Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned."
    return "No structured fixed-choice fields found."


def next_step_for(row: dict) -> str:
    kind = row["source_type"]
    if row["items"] == 0:
        return "Add/download raw source PDFs or generated JSON before auditing recoverability."
    if kind == "STAAR Alternate 2":
        return "Add a teacher-guide parser that extracts stimulus choice labels/images into structured choices and flags items requiring visual stimuli."
    if kind == "STAAR rationales":
        return "Join rationale/key PDFs to released-test item blocks by exam and item number after page-aware extraction."
    if kind == "STAAR released/redesign":
        return "Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number."
    if kind in {"NYSED math", "NYSED science"}:
        return "Parse question pages separately from item maps, then join item-map correct letters by grade/item number."
    if kind == "NYSED ELA":
        return "Separate passages from item blocks and extract option lists before joining answer keys."
    return "Implement a source-specific extractor that emits structured stem, choices, and correct answer."


def main() -> None:
    raw_files = []
    present_groups = set()
    for folder in sorted(p for p in RAW_ROOT.iterdir() if p.is_dir()):
        group = requested_group(folder.name)
        if not group:
            continue
        present_groups.add(group)
        for path in sorted(folder.glob("*.json")):
            raw_files.append(path)

    rows = []
    examples = defaultdict(lambda: {"recoverable": [], "blocked": []})

    for path in raw_files:
        folder = path.parent.name
        items = load_items(path)
        safe = 0
        with_correct = 0
        with_markers = 0
        metadata = 0
        structured_choices = 0
        alt2_candidate = 0

        for item in items:
            prompt = item.get("prompt_text") or ""
            choices = item.get("choices")
            structured_choices += int(isinstance(choices, list) and len(choices) >= 2)
            with_correct += int(correct_letter(item) is not None or bool(item.get("answer_key_excerpt")))
            with_markers += int(has_choice_markers(prompt))
            metadata += int(metadata_like(prompt))
            recovered = False
            parsed_choices: list[str] = []
            if folder.startswith("staar_alt2_"):
                recovered, parsed_choices = alt2_recoverable(item)
                alt2_candidate += int(bool(parsed_choices))
            safe += int(recovered)
            group = requested_group(folder) or "other"
            if recovered and len(examples[group]["recoverable"]) < 4:
                examples[group]["recoverable"].append(sample_item(item, parsed_choices))
            if not recovered and len(examples[group]["blocked"]) < 4:
                examples[group]["blocked"].append(sample_item(item, parsed_choices))

        row = {
            "source": requested_group(folder),
            "folder": folder,
            "file": str(path.relative_to(ROOT)),
            "source_type": source_type(folder),
            "items": len(items),
            "structured_choice_rows": structured_choices,
            "rows_with_any_answer_signal": with_correct,
            "rows_with_choice_markers": with_markers,
            "metadata_or_fragment_rows": metadata,
            "alt2_parseable_choice_rows": alt2_candidate,
            "safe_recoverable_now": safe,
        }
        row["status"] = status_for(row)
        row["blocker"] = blocker_for(row)
        row["next_extractor_improvement"] = next_step_for(row)
        rows.append(row)

    for label in REQUESTED_SOURCES:
        if label not in present_groups:
            row = {
                "source": label,
                "folder": None,
                "file": None,
                "source_type": label,
                "items": 0,
                "structured_choice_rows": 0,
                "rows_with_any_answer_signal": 0,
                "rows_with_choice_markers": 0,
                "metadata_or_fragment_rows": 0,
                "alt2_parseable_choice_rows": 0,
                "safe_recoverable_now": 0,
                "status": "absent",
                "blocker": "No matching raw collection folder was found in data/raw_collections.",
                "next_extractor_improvement": "Add/download raw source PDFs or generated JSON before auditing recoverability.",
            }
            rows.append(row)

    by_source = defaultdict(Counter)
    for row in rows:
        by_source[row["source"]].update(
            {
                "files": 1 if row["file"] else 0,
                "items": row["items"],
                "safe_recoverable_now": row["safe_recoverable_now"],
                "structured_choice_rows": row["structured_choice_rows"],
                "rows_with_any_answer_signal": row["rows_with_any_answer_signal"],
                "rows_with_choice_markers": row["rows_with_choice_markers"],
                "metadata_or_fragment_rows": row["metadata_or_fragment_rows"],
                "alt2_parseable_choice_rows": row["alt2_parseable_choice_rows"],
            }
        )

    payload = {
        "summary": dict(sorted((k, dict(v)) for k, v in by_source.items())),
        "sources": rows,
        "examples": examples,
        "notes": [
            "Safe recoverable now means the current row contains a usable prompt, parseable choices, and an answer that matches one parsed choice without needing source PDF/image review.",
            "Structured choice rows were checked via a literal choices array; none of the inspected government/exam-board rows have one.",
        ],
    }
    REPORT_JSON.write_text(json.dumps(payload, indent=2) + "\n")

    source_lines = []
    for source, counts in sorted(by_source.items()):
        folders = sorted({r["folder"] for r in rows if r["source"] == source and r["folder"]})
        source_lines.append(
            f"| {source} | {counts['files']} | {counts['items']} | {counts['safe_recoverable_now']} | "
            f"{counts['structured_choice_rows']} | {counts['rows_with_any_answer_signal']} | "
            f"{counts['rows_with_choice_markers']} | {', '.join(folders) if folders else 'not present'} |"
        )

    status_lines = []
    for row in sorted(rows, key=lambda r: (r["source"], r["folder"] or "")):
        status_lines.append(
            f"- `{row['folder'] or row['source']}`: {row['status']}; safe now `{row['safe_recoverable_now']}` of `{row['items']}`. "
            f"Blocker: {row['blocker']} Next: {row['next_extractor_improvement']}"
        )

    example_lines = []
    for source in sorted(examples):
        recoverable = examples[source]["recoverable"]
        blocked = examples[source]["blocked"]
        example_lines.append(f"### {source}")
        if recoverable:
            example_lines.append("Recoverable examples:")
            for item in recoverable[:3]:
                choices = f"; parsed choices={item.get('parsed_choices')}" if item.get("parsed_choices") else ""
                example_lines.append(
                    f"- `{item['source_id']}` q{item['question_number']}: answer `{item['answer_key_excerpt']}`{choices}; prompt `{item['prompt_text']}`"
                )
        else:
            example_lines.append("- Recoverable examples: none found.")
        if blocked:
            example_lines.append("Blocked examples:")
            for item in blocked[:3]:
                example_lines.append(
                    f"- `{item['source_id']}` q{item['question_number']}: answer `{item['answer_key_excerpt']}`; prompt `{item['prompt_text']}`"
                )

    markdown = f"""# Government Exam Recovery Audit

## Headline

The current raw data has one narrow recoverable subset: STAAR Alternate 2 teacher-guide rows where the prompt text names the answer choices and `answer_key_excerpt` matches one parsed choice. All standard STAAR, NYSED, MCAS, LEAP, and Florida sources are blocked for safe fixed-choice import from current rows.

Safe recoverable now means the current row contains a usable prompt, parseable choices, and an answer that matches one parsed choice without source PDF/image review.

## Source Summary

| Source | JSON files | Raw rows | Safe recoverable now | Structured choice rows | Rows with answer signal | Rows with A-D choice markers | Folders inspected |
|---|---:|---:|---:|---:|---:|---:|---|
{chr(10).join(source_lines)}

## Source-By-Source Status

{chr(10).join(status_lines)}

## Examples

{chr(10).join(example_lines)}

## Cross-Source Blockers

- No inspected standard STAAR or NYSED row has a structured `choices` array.
- NYSED math/science rows often preserve correct-answer/item-map metadata but not the actual stem and options.
- NYSED ELA rows often preserve passages or prose fragments without aligned answer choices and keys.
- Standard STAAR rows are split across released-test fragments, rationale fragments, and answer-key fragments, so stems/options/keys are not reliably aligned.
- STAAR Alternate 2 rows can sometimes be converted now, but many depend on stimulus images or partial teacher-guide wording and should remain blocked until choices are extracted structurally.
- MCAS, LEAP, and Florida cannot be audited in this workspace because no matching raw collection folders are present.

## Next Extractor Improvements

- STAAR released/redesign: use layout-aware PDF extraction to keep item stems and options together, then join answer keys by exam and item number.
- STAAR rationales: join rationale/key PDFs to extracted item blocks; do not treat rationale text alone as a playable question.
- STAAR Alternate 2: parse teacher-guide stimulus sections into structured prompt, choices, image dependency flags, and answer text; import only non-image-dependent rows automatically.
- NYSED math/science: parse question pages separately from item maps, then join correct letters by grade/item number.
- NYSED ELA: split passages from item blocks and extract answer option lists before key joining.
- MCAS/LEAP/Florida: add raw source folders or generated JSON, then run the same structured-choice audit.
"""
    REPORT_MD.write_text(markdown)
    print(f"Wrote {REPORT_MD.relative_to(ROOT)}")
    print(f"Wrote {REPORT_JSON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
