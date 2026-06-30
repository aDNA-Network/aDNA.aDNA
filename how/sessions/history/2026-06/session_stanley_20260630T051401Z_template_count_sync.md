---
type: session
session_id: session_stanley_20260630T051401Z_template_count_sync
created: 2026-06-29
status: completed
tier: 2
last_edited_by: agent_rosetta
tags: [session, governance, drift-sync]
updated: 2026-06-29
---

# Session — Template-count governance sync

## Intent

"Continue the campaign" resolved to: Operation Keystone is converged (campaign + cohort genesis complete; ADR-043 frontier discharged at `5a3eb71`). Operator picked the one un-gated, self-contained thread surfaced — the `#needs-human` template-count drift flagged by the prior session: governance docs state "32 templates (22 base + 10 extensions)" but `adna_validate.py` counts **41 actual**.

Goal: bring every stated count to ground truth + make the backing enumerations coherent, so the governance-sync validator reports zero template drift.

## Verified ground truth (read-only)

- **41** `template_*.md` in `how/templates/` (validator `os.listdir`+`startswith` count).
- **41 = 25 base + 11 extension + 5 operational.**
  - 25 base = inherited (present in `.adna/how/templates/`) = 12 auto-triggered + 13 manual-apply.
  - 11 extension = ontology `[EXT]` entity-type templates (incl. `template_reviewer`, the +1 the stale "10" missed).
  - 5 operational = local: `campaign_open_splash`, `campaign_close_splash`, `drift_report`, `lattice_home_render`, `software_graph_stub`.
- Validator scans only MANIFEST/CLAUDE/README via regex `(\d+)\s*templates|Templates?\s*\((\d+)\)` — only a number *immediately* before "templates" matches. Validator-critical: `MANIFEST.md:42`, `MANIFEST.md:108`, `README.md:258`.

## Scope declaration (Tier 2 — shared config edits)

Files: `MANIFEST.md`, `CLAUDE.md`, `AGENTS.md`, `README.md`, `how/templates/AGENTS.md`, `CHANGELOG.md`. No code, no cross-vault writes. No push (held-commit discipline — repo already carries `98bb488`+`5a3eb71` unpushed).

- A. Headline counts → `41 templates (25 base + 11 extension + 5 operational)` (MANIFEST/CLAUDE/AGENTS); README "What's Inside" describes the *generic* vault → `26 base templates (12 auto-triggering)` (accurate + validator-safe).
- B. MANIFEST `### Templates` enumeration → reconcile to the 16 Rosetta-local (11 ext + 5 ops).
- C. `how/templates/AGENTS.md` index → add 2 quest templates to Manual-Apply (→13, matches header) + new Operational (5) section → sums to 41.
- D. Frontmatter bumps + CHANGELOG `[Unreleased]` entry (no version bump).
- E. Adjacent same-root-cause (reviewer): MANIFEST "10 ontology extensions / 10 Rosetta types" → 11 (+reviewer row +who/reviewers/ tree line); AGENTS.md:20 "10 extension entity types" → 11.

Out of scope (flagged, not fixed): skills-count drift (MANIFEST 15 vs 17 vs 13+4; not template, not validated).

## Activity log

- Explore ×3 → Keystone converged; no un-gated thread; operator chose drift fix.
- Verified 41/25/11/5 against `.adna` diff; read validator regex; categorized 7 index-missing templates.

## SITREP

**Completed** — Template-count governance drift resolved. `adna_validate.py --governance` now reports **GOVERNANCE SYNC: Zero drift** (was: "MANIFEST says 32 templates, actual 41"). Trued **41 = 25 base + 11 extension + 5 operational** across:
- **MANIFEST.md** — headline (L42); `### Templates (41)` enumeration restructured to the 16 Rosetta-local (11 ext + 5 ops); L157 inherited row → 25; + adjacent reviewer/11th-extension reconciliation (L23 "11 ontology extensions", L61 "(11 Rosetta types)", reviewer ontology row, `who/reviewers/` tree line); frontmatter bumped.
- **CLAUDE.md** — project-map L66 → 41; frontmatter bumped.
- **AGENTS.md** — L43 → 41; L20 entity-types "10 → 11 extension"; frontmatter bumped.
- **README.md** — "What's Inside" (generic-vault scope) L258 → "26 base templates (12 auto-triggering)" — accurate for a fresh vault *and* validator-safe ("base" breaks the `\d+ templates` regex).
- **how/templates/AGENTS.md** — index reconciled to 41: total-note + 2 quest templates → Manual-Apply (13, now matches header) + new Operational §(5); frontmatter bumped.
- **CHANGELOG.md** — `[Unreleased] → ### Changed` entry (no governance version bump — a correction).
- **STATE.md** — closed the `#needs-human` template-drift flag (forward-annotation → RESOLVED).

**Verification** — `python3.13 adna_validate.py . --governance` → Zero drift, EXIT 0; versions consistent (CLAUDE 6.0 = CHANGELOG 6.0); zero stale tokens (`32 templates`/`22 base`/`10 extension`) across the 5 governance files; diff scoped to 6 files + this session record.

**In progress** — none.

**Next up** — Commit locally by explicit path; **HOLD the push** (repo already carries unpushed `98bb488` + `5a3eb71` under the operator's standing "don't push"). Operator decides when to push the 3-commit stack.

**Blockers** — none.

**Discovered-adjacent (flagged, NOT fixed — out of scope):** skills-count drift — MANIFEST.md L43 "15 skills (13 base + 2 project-specific)" vs L125 "### Skills (17)" vs L127 "13 base + 4 project-specific", and the CLAUDE.md skills inventory (~20 listed). Same pattern, un-gated, in-vault, but skills are **not** validated by `adna_validate`. Candidate next housekeeping thread.

**Files touched** — MANIFEST.md, CLAUDE.md, AGENTS.md, README.md, how/templates/AGENTS.md, CHANGELOG.md, STATE.md (flag close), + this session file.

## Next Session Prompt

Template-count governance drift is **RESOLVED** (docs synced 32→41 = 25 base + 11 extension + 5 operational; `adna_validate --governance` zero-drift; commit held-not-pushed atop `5a3eb71`). Operation Keystone remains **converged** (no un-gated Rosetta work). If continuing governance hygiene, the next ready un-gated thread is the **skills-count drift** (MANIFEST 15 vs 17 vs 13+4; CLAUDE skills inventory ~20 vs stated) — same pattern, in-vault, though not validator-checked. Otherwise the live frontier is operator/cross-vault gated (ADR-043 ratify + co-sign; the six §C retrofits; Lighthouse P0; staged memos to Argus/Hestia/Oration). To push the held 3-commit stack (`98bb488` + `5a3eb71` + this governance-sync), get explicit operator GO first (`git fetch` + verify fast-forward before any push — shared `main` takes concurrent peer commits).
