---
type: backlog_idea
idea_id: idea_tool_compliance_checker_hardening
title: "Harden compliance_checker.py — scratch-default output, content-type scoring, documented python3.13 dep"
category: tooling
status: proposed
priority: medium
effort: small  # ~0.5–1 session — argparse default + a type-vocab branch + a docstring/README line
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [backlog, tooling, compliance_checker]
---

# Idea — Harden `compliance_checker.py` (output hygiene · content-type scoring · runtime dep)

> **Plain-language version.** The vault ships a script that grades how well its files follow the aDNA rules. Running it for a *read-only* check quietly littered two report files into the working tree, it silently needs a specific Python version, and it scored our explainer/pattern/glossary files at **0%** — not because they're bad, but because it doesn't know those file types exist. None of that is a scoring bug; it's three rough edges that make a read-only tool feel unsafe to run. This idea files the fixes.

## Problem / Opportunity

`what/lattices/tools/compliance_checker.py` is the automated 10-dimension compliance grader referenced in `CLAUDE.md` §Compliance Dimensions. Running it during the Meridian read-only review (2026-07-06, finding **F-MER-A3**) surfaced three rough edges — all in *ergonomics/observability*, none in the scoring math:

1. **Writes into the working tree by default.** `--outdir` defaults to `.` (cwd) — see `parse_args` (`--outdir default="."`) and `main` (`outdir / "compliance_scorecard.yaml"`, `outdir / "compliance_report.md"`). Neither `compliance_report.md` nor `compliance_scorecard.yaml` is in `.gitignore` (`git check-ignore` returns nothing), so a *read-only audit* run dirties `git status` with two untracked artifacts. On this node the stray files then have to be manually removed before a clean commit — exactly the trap that bit Meridian's read-only pass.
2. **Requires `python3.13` silently.** The tool runs under the vault's `python3.13` (same runtime constraint as `adna_validate.py`), but nothing in its usage/`--help`/module docstring says so. A plain `python3` / `python` invocation fails opaquely instead of printing a clear "needs python3.13" message. (Same undocumented-runtime class already noted for `adna_validate`.)
3. **Scores 0.0% on Rosetta content entity types.** The type vocabulary the grader recognizes does not include this vault's extended-ontology content types — `concept`, `pattern`, `glossary_entry`, `template`, `tutorial` (and siblings). Files of those types score **0.0%** not because they are non-compliant but because the checker has no rubric for them and treats "unknown type" as a floor score. That produces alarming-but-meaningless numbers on the majority of `what/` content and erodes trust in the tool's output.

## Proposed solution

1. **Default output to a scratch / ignored path.** Change the `--outdir` default from `.` to a repo-ignored location (e.g. `./.compliance_out/` added to `.gitignore`, or the OS temp dir), so the default run is side-effect-free on the tree. Keep `--outdir .` available for operators who *want* the reports in place. (Belt-and-suspenders: also add `compliance_report.md` + `compliance_scorecard.yaml` to `.gitignore`.)
2. **Score content types, or say so clearly.** Either (a) extend the type-vocabulary/rubric so the 11 Rosetta extended-ontology content types get a real content-appropriate score, or (b) at minimum, when a type is outside the graded vocabulary, emit an explicit **`unsupported type — not scored`** marker instead of `0.0%`, and exclude it from aggregate percentages so the headline number isn't dragged down by un-rubric'd files.
3. **Document (and guard) the `python3.13` requirement.** State the runtime in the module docstring + `--help` epilog + the tool's README/usage block, and add a startup version guard that prints a one-line "requires python3.13 (yaml dep)" message and exits non-zero on older interpreters — the same treatment the `adna_validate` runtime note already prescribes.

## Reasoning

- **A read-only tool must be read-only.** An audit/measurement utility that dirties the tree by default violates least-surprise and makes it unsafe to run in a review lane; #1 is the highest-signal, lowest-cost fix.
- **Trust follows legible numbers.** A `0.0%` on a well-formed `concept`/`glossary_entry` file is a false negative that trains operators to ignore the tool; #2 restores signal.
- **Silent runtime deps waste a session.** #3 is a one-line guard + three doc lines that convert an opaque failure into a self-explaining one.
- **Cheap + isolated.** All three are additive changes local to one tool module (argparse default, a type-vocab branch, a docstring/guard) — no schema or governance change.

## Acceptance test

1. A default `python3.13 compliance_checker.py <vault>` run leaves `git status` clean (no untracked report files in the tree).
2. Running under a pre-3.13 interpreter prints a clear "requires python3.13" message and exits non-zero (no opaque traceback).
3. A `concept` / `pattern` / `glossary_entry` file either receives a content-appropriate score or is explicitly reported as `unsupported type — not scored` and excluded from the aggregate.

## Related

- [[findings_ledger]] — Operation Meridian findings ledger; this idea files finding **F-MER-A3** (read-only review dirtied the tree).
- [[v8_6_release_candidate]] §2.1 batch **G** — the sibling "validator-docstring currency" tooling-hardening item; this checker-hardening work is the same class (tool ergonomics/observability) and could ride the same validator-touch window.
- `what/lattices/tools/compliance_checker.py` — the tool this idea hardens (see `CLAUDE.md` §Compliance Dimensions for its 10-dimension rubric).

## Self-reference (Standing Order #8)

This idea is the vault grading its own grader: the aDNA standard teaches a 10-dimension compliance rubric, and the tool that measures it lives inside the very vault it measures. The failure mode (0.0% on `concept`/`pattern`/`glossary_entry`) is itself a demonstration of the extended-ontology gap between the *base* 16 entity types the checker was built for and the *11 Rosetta extensions* this vault added — the structure surfaced its own tooling debt.
