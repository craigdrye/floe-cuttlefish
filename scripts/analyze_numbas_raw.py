from __future__ import annotations

import html
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
NUMBAS_JSON = REPO_ROOT / "data" / "raw_collections" / "numbas" / "numbas_questions.json"
NUMBAS_EXAMS_JSON = REPO_ROOT / "data" / "raw_collections" / "numbas_exams" / "numbas_exam_questions.json"
REPORT_MD = REPO_ROOT / "reports" / "numbas-import-analysis.md"
REPORT_JSON = REPO_ROOT / "reports" / "numbas-import-analysis.json"

SUPPORTED_DIRECT_TYPES = {"information"}
PLAINTEXT_DIRECT_TYPES = {"patternmatch", "yes-no", "true-false"}
UNSAFE_LICENCE_MARKERS = ("NonCommercial", "NoDerivs", "All rights reserved", "None specified")


def strip_html(value: str) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"<br\s*/?>", " ", value, flags=re.I)
    value = re.sub(r"</(?:p|li|div|tr|h[1-6])>", " ", value, flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def has_numbas_dynamic_markup(item: dict[str, Any]) -> bool:
    text = "\n".join([item.get("statement_html") or "", item.get("advice_html") or ""])
    if item.get("variable_names"):
        return True
    patterns = [
        r"\{[^{}\n]+\}",
        r"\\var\{",
        r"geogebra_applet\(",
        r"jsxgraph",
        r"\$\s*[^$]*\\(?:frac|sqrt|sum|int|vec|begin)",
    ]
    return any(re.search(pattern, text, flags=re.I) for pattern in patterns)


def licence_bucket(licence: str) -> str:
    if not licence:
        return "unknown"
    if any(marker in licence for marker in UNSAFE_LICENCE_MARKERS):
        return "blocked"
    return "permissive_cc"


def classify(item: dict[str, Any]) -> tuple[str, list[str]]:
    part_types = set(item.get("part_types") or [])
    reasons: list[str] = []
    dynamic = has_numbas_dynamic_markup(item)
    licence = item.get("licence") or item.get("question_licence") or item.get("exam_licence") or ""

    if licence_bucket(licence) == "blocked":
        reasons.append("licence requires filtering or manual policy decision")
    if dynamic:
        reasons.append("contains variables/placeholders/applets/LaTeX needing Numbas rendering")
    if not part_types:
        reasons.append("no part type captured")
    elif not part_types <= SUPPORTED_DIRECT_TYPES | PLAINTEXT_DIRECT_TYPES:
        reasons.append("uses answer part types not directly represented in Floe catalog")
    if part_types - SUPPORTED_DIRECT_TYPES:
        reasons.append("raw extraction omitted answer/correctness configuration for assessed parts")

    if not reasons and part_types <= SUPPORTED_DIRECT_TYPES:
        return "safe_direct_import", []
    if (
        not dynamic
        and licence_bucket(licence) == "permissive_cc"
        and part_types
        and part_types <= PLAINTEXT_DIRECT_TYPES
    ):
        return "possible_direct_after_answer_refetch", ["requires full .exam part answer fields"]
    return "requires_parameter_rendering_or_conversion", reasons


def load_items(path: Path, source_name: str) -> list[dict[str, Any]]:
    payload = json.loads(path.read_text(encoding="utf-8"))
    items = payload["items"]
    for item in items:
        item["_source_collection"] = source_name
    return items


def summarize(items: list[dict[str, Any]]) -> dict[str, Any]:
    classifications: Counter[str] = Counter()
    reason_counts: Counter[str] = Counter()
    part_types: Counter[str] = Counter()
    tags: Counter[str] = Counter()
    licences: Counter[str] = Counter()
    by_source: dict[str, Counter[str]] = defaultdict(Counter)
    examples: dict[str, list[dict[str, Any]]] = defaultdict(list)

    for item in items:
        classification, reasons = classify(item)
        classifications[classification] += 1
        by_source[item["_source_collection"]][classification] += 1
        for reason in reasons:
            reason_counts[reason] += 1
        for part_type in item.get("part_types") or ["(none)"]:
            part_types[part_type] += 1
        for tag in item.get("tags") or []:
            normalized = tag.strip().lower()
            if normalized:
                tags[normalized] += 1
        licence = item.get("licence") or item.get("question_licence") or item.get("exam_licence") or "None specified"
        licences[licence] += 1

        if len(examples[classification]) < 5:
            examples[classification].append(
                {
                    "source_id": item.get("source_id"),
                    "title": item.get("title") or item.get("question_title"),
                    "source_url": item.get("source_url"),
                    "part_types": item.get("part_types"),
                    "variable_count": len(item.get("variable_names") or []),
                    "licence": licence,
                    "snippet": strip_html(item.get("statement_html") or "")[:220],
                    "reasons": reasons,
                }
            )

    return {
        "total_items": len(items),
        "classifications": dict(classifications),
        "by_source": {source: dict(counts) for source, counts in sorted(by_source.items())},
        "top_part_types": dict(part_types.most_common(30)),
        "top_tags": dict(tags.most_common(40)),
        "top_licences": dict(licences.most_common(20)),
        "blocker_counts": dict(reason_counts.most_common()),
        "examples": examples,
    }


def write_markdown(summary: dict[str, Any]) -> None:
    lines = [
        "# Numbas Import Analysis",
        "",
        "## Conclusion",
        "",
        "The Numbas and Numbas Exams raw collections should be treated as conversion-required, not direct-import-ready. The only safe direct-import subset found from the current extraction is `information`-only content with permissive licensing and no dynamic Numbas markup; this subset is effectively empty in the captured data. A small plaintext assessed subset may become importable only after refetching full `.exam` part answer configuration.",
        "",
        "## Counts",
        "",
        f"- Total question records analysed: {summary['total_items']}",
    ]
    for classification, count in summary["classifications"].items():
        lines.append(f"- `{classification}`: {count}")

    lines.extend(["", "## Counts By Source", ""])
    for source, counts in summary["by_source"].items():
        lines.append(f"- `{source}`: " + ", ".join(f"`{key}` {value}" for key, value in counts.items()))

    lines.extend(["", "## Top Part Types", ""])
    for key, count in summary["top_part_types"].items():
        lines.append(f"- `{key}`: {count}")

    lines.extend(["", "## Top Tags", ""])
    for key, count in summary["top_tags"].items():
        lines.append(f"- `{key}`: {count}")

    lines.extend(["", "## Top Licences", ""])
    for key, count in summary["top_licences"].items():
        lines.append(f"- `{key}`: {count}")

    lines.extend(["", "## Blockers", ""])
    for key, count in summary["blocker_counts"].items():
        lines.append(f"- {key}: {count}")

    lines.extend(["", "## Blocker Examples", ""])
    for classification, examples in summary["examples"].items():
        lines.append(f"### {classification}")
        for example in examples:
            reasons = "; ".join(example["reasons"]) or "none"
            lines.append(
                f"- `{example['source_id']}` [{example['title']}]({example['source_url']}): "
                f"parts={example['part_types']}, variables={example['variable_count']}, "
                f"licence=`{example['licence']}`. Reasons: {reasons}. Snippet: {example['snippet']}"
            )
        lines.append("")

    lines.extend(
        [
            "## Importer / Conversion Plan",
            "",
            "1. Refetch source `.exam` payloads for candidate records and preserve complete question parts, marking schemes, custom part type extensions, variables, functions, rulesets, and resources. The current raw JSON is insufficient for assessed direct import because it keeps only part type names.",
            "2. Apply licence gates before content generation: allow CC BY and CC BY-SA by default; exclude or separately review NC, ND, all-rights-reserved, and unspecified records.",
            "3. Build a Numbas rendering/conversion stage that executes variable generation with deterministic seeds and emits one or more static variants per question. Replace `{var}`, `\\var{...}`, applet placeholders, and generated diagrams with rendered text/assets.",
            "4. Map supported assessed part types first: `numberentry`, `jme`, `patternmatch`, `m_n_2`, `1_n_2`, `matrix`, and simple `gapfill` children into Floe question shapes with generated answer/rationale fields.",
            "5. Quarantine extension/custom part types, spreadsheets, code-marking, GeoGebra/JSXGraph-heavy questions, and multi-part gapfills until there is a dedicated renderer or manual review workflow.",
            "6. Import only generated static variants into app catalog files after separate approval. Keep provenance fields pointing back to Numbas source IDs, licences, contributors, and rendering seed.",
        ]
    )

    REPORT_MD.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main() -> None:
    items = load_items(NUMBAS_JSON, "numbas") + load_items(NUMBAS_EXAMS_JSON, "numbas_exams")
    summary = summarize(items)
    REPORT_JSON.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    write_markdown(summary)
    print(f"Wrote {REPORT_MD}")
    print(f"Wrote {REPORT_JSON}")


if __name__ == "__main__":
    main()
