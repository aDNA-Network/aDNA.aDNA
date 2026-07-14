---
type: artifact
artifact_class: staging_ledger
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
mission_id: mission_v8_8_p1_prune_and_iii
objective: 5
status: complete
tags: [artifact, v8_8_release, distillery, staging_ledger, p3_manifest, version_surfaces]
---

# v8.8 Release Staging Ledger (P3 manifest)

The turnkey manifest for P3 (`skill_template_release` v8.8). **Nothing here ships until the operator rules DP1
per-section (P2) and fires (P3).** A ledger is a hypothesis — **P3 re-verifies every row against disk at fire-time.**

## Ship-set (staged artifacts → P3 destinations)

| Staged artifact (`.../campaign_v8_8_release/artifacts/`) | P3 destination in the image | fold action |
|---|---|---|
| `staged_claude_md_conservative.md` | `.adna/CLAUDE.md` | **CLAUDE.md body** — use if DP1 = conservative (all sections) |
| `staged_claude_md_aggressive.md` | `.adna/CLAUDE.md` | **CLAUDE.md body** — use if DP1 = aggressive (all sections) |
| — (assembled) | `.adna/CLAUDE.md` | if DP1 **mixes** per-section: assemble from the two endpoints per the ruling |
| `staged_extracted_adna_reference.md` | `.adna/what/docs/adna_reference.md` (NEW) | create — only if the Domain-Knowledge / Compliance extractions (E1/E4) are ruled in |
| `staged_extracted_doctrine_visual_inspection.md` | `.adna/what/docs/doctrine_visual_inspection.md` (NEW) | create — only if the Visual-inspection extraction (E3) is ruled in |
| `staged_extracted_example_personalities.md` | `.adna/how/templates/example_personalities.md` (NEW) | create — only if the Personality extraction (E5) is ruled in |
| `staged_inner_readme.md` | `.adna/README.md` | **README body** (the first-contact compression); then bump badge (surface 5) |
| `staged_root_readme.md` | root `README.md` (published repo) | verbatim; only the badge bump (surface 4) is the real change |

> **Extraction interlock**: each `staged_extracted_*` file is created **only if** its matching CLAUDE.md pointer is
> shipped (i.e., the aggressive version of that section is ruled in). If DP1 keeps a section inline (conservative),
> **do not** create its extracted file — that would orphan a doc with no referrer. The aggressive CLAUDE.md's pointers
> and these files are a matched set.

## The 5 version surfaces (v8.7 → v8.8) — hard-check ALL at P3

**Leave every `Standard v2.5` / `standard-v2.5` string ALONE.** Governance bumps only.

| # | Surface | File | Exact change |
|---|---------|------|--------------|
| 1 | frontmatter | `.adna/CLAUDE.md` L3 | `version: "8.7"` → `version: "8.8"` |
| 2 | header comment | `.adna/CLAUDE.md` L10 (top of block) | **prepend** a new `<!-- v8.8 | <fire-date> | Operation Distillery … -->` line (draft below) |
| 3 | CHANGELOG | `.adna/CHANGELOG.md` | add the v8.8 governance-track entry |
| 4 | root badge | root `README.md` L7 | `Governance v8.7`→`v8.8` · `governance-v8.7-663399.svg`→`v8.8` · `/releases/tag/v8.7`→`v8.8` |
| 5 | inner badge | `.adna/README.md` L10 | same 3 spots as surface 4 |

**Draft v8.8 header comment (surface 2 — P3 finalizes wording to the ruled depth):**
```
<!-- v8.8 | <fire-date> | Operation Distillery (template-quality prune; governance 8.7→8.8; standard stays v2.5): .adna/CLAUDE.md pruned (~319 tok conservative / ~2,853 tok if aggressive — depth per P2 DP1) + README first-contact III. [aggressive only:] Domain-Knowledge + Skills-table + Visual-inspection + Compliance-Dimensions + Personality extracted → what/docs/adna_reference.md · what/docs/doctrine_visual_inspection.md · how/templates/example_personalities.md + pointers. No count change (30 templates · 32 skills). Operator release gate <fire-date>. -->
```

## Count safety (P3 `adna_validate --governance` must read zero-drift)
- **30 templates / 32 skills UNCHANGED.** The 3 new files are `what/docs/adna_reference.md`, `what/docs/doctrine_visual_inspection.md`, `how/templates/example_personalities.md` — **none** match `template_*.md` or `skill_*.md`, so neither validated count moves.
- The aggressive CLAUDE.md removes the Skills *table* (→ pointer to `how/skills/AGENTS.md`); the governance validator reads the **header-comment count + MANIFEST rows**, not the table, so this is safe. Still: hand-verify `how/skills/AGENTS.md` is current at P3 (it becomes the sole skills index if aggressive ships).

## Fire sequence (P3 — `skill_template_release` v8.8)
1. **Preconditions gate**: operator release-gate open; every change traces to the P2 ratification; dev tree clean.
2. **Assemble** the delta into a **fresh clone** of `aDNA-Network/aDNA` (baseline = current released tree + these ratified deltas — never reconstruct).
3. **Apply** the ruled CLAUDE.md + README bodies + any ruled-in extracted files; bump the 5 surfaces.
4. **Dry-run leak-scan** (`gitleaks` full) + `adna_validate --governance` (python3.13) → **zero-drift**; `git status` shows **exactly** the intended `.adna/` paths — any extra = **NO-GO**.
5. **PAUSE for a second operator GO** (dry-run-then-pause).
6. **Commit path-scoped** (never `-A`) · **annotated tag `v8.8`** · push branch + tag (**tags-only; never move a pushed tag**).
7. **Step (e)**: rsync `-a -c --delete` the published `.adna/` down into `~/aDNA/.adna`; commit locally (diverges from frozen origin by design); regenerate the install-truth fixture.
8. **7-row fresh-clone smoke test**; a red row **reverts the decision to the operator** (a fix = a follow-up commit, not a tag move).
9. Close campaign + AAR.

## DP recommendations (P1 → operator rules at P2)

**DP2 — extraction destinations**: target existing `what/docs/` (reference home) + `how/templates/`; **do not** create
`what/specs/` or `how/governance/` (absent in the image; new top-level dirs are heavier churn than a gov-only release
warrants). **No new ADR** (documentation refactor; std stays v2.5; image `what/decisions/` holds only adr_001–003).

**DP3 — README scope + gitleaks rider**:
- *README scope*: **ship "inner III + root badge-bump."** The inner first-contact compression is a genuine newcomer
  win; the root needs only the P3 badge bump. Low risk.
- *gitleaks `.obsidian/plugins` rider*: **recommend INCLUDE** — the release touches the repo anyway, and the allowlist
  is names-only config (zero governance risk) that stops 8 pre-existing minified-JS false positives from blocking the
  pre-push scan. **Contingent**: P3 confirms the 8 FPs still fire before adding the allowlist; if they don't, defer.

**DP1 — prune depth per-section (THE pivotal gate, operator-only at P2)**: P1 provides both endpoints as evidence.
The one section flagged for extra scrutiny: **Visual inspection (E3)** — extracting it *reverses a deliberate v8.7
fold*; keeping it inline (conservative) is defensible. Every other aggressive extraction is clean reference/duplication.
