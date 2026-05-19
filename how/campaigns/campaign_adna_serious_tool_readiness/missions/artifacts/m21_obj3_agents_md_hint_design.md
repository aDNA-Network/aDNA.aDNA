---
type: design_spec
artifact_id: m21_obj3_agents_md_hint_design
mission: mission_adna_str_p2_m21_context_audit_split
campaign: campaign_adna_serious_tool_readiness
phase: 2
session: 1
created: 2026-05-19
updated: 2026-05-19
status: complete  # S1 design artifact; S2 executes verbatim
last_edited_by: agent_stanley
tags: [design_spec, m21, op_2, agents_md_hint, offset_limit_convention, memory_md_companion, upstream_backlog]
---

# M2.1 Obj 3 — Op 2 AGENTS.md Hint Design

> **Specifies the offset+limit convention text** that lands at `aDNA.aDNA/AGENTS.md` at S2. Plus a companion `MEMORY.md` line for cold-start persistence. Plus the upstream-contribution backlog placeholder that propagates the convention to `.adna/AGENTS.md` at v8 P6.
>
> **Self-reference**: This Rosetta loaded `aDNA.aDNA/AGENTS.md` at session-start and STILL paid the full STATE.md read tax — because the hint doesn't exist yet. The convention exists in M1.3 + M1.4 prep notes as "top-3 queue Op 2" but has no physical landing place in the vault until S2. M2.1 closes that gap.

## §1 — Why the hint exists

Empirical signal (this very M2.1 S1 session, 2026-05-19T19:33Z):

- Read tool on `aDNA.aDNA/STATE.md` (no offset/limit) returned `File content (339.2KB) exceeds maximum allowed size (256KB). Use offset and limit parameters...`.
- Even after M2.1 Op 1 splits STATE.md into router (≤ 20 kT) + archive (≤ 50 kT), the same risk exists for any file growing past 50 kT — campaign masters, large mission files, AAR aggregates, eventually `lattice-labs/STATE.md` and others.

The hint generalizes the lesson: **for any file ≥ ~ 50 kT content-load OR ≥ 200 KB byte size, default to `offset+limit` Read; the full file likely isn't needed for the live question**. Even for the router (post-split STATE.md ≤ 20 kT), partial Reads stay cheaper when only the top-bullet is needed.

## §2 — Hint text (lands in `aDNA.aDNA/AGENTS.md`)

**Location**: top-level `aDNA.aDNA/AGENTS.md` — appended as a new top-level section between existing "Safety Rules" and "Priority Hierarchy" sections.

**Section heading**: `## Heavy-File Read Convention`

**Hint text** (verbatim; ≤ 5 lines body):

```markdown
## Heavy-File Read Convention

For any file ≥ ~ 50 kT content-load OR ≥ 200 KB byte size, default to `offset` + `limit` parameters on Read. Typical heavy files: `STATE.md` (this vault and others), campaign masters, mission files at S3 close, large AAR aggregates. The router-vs-archive pattern (see [[STATE_archive.md|STATE_archive.md]] for the canonical instance) splits heavy files into a live router + an audit archive; even the router benefits from partial Reads when only the top bullet is needed. See `node.aDNA/what/context/token_baselines.md` v0.1.1 for measured costs.

**Rule of thumb**: if Read returns `File content exceeds maximum`, that's a router-vs-archive split candidate — flag for backlog if not already split.
```

**Total addition**: 1 heading + 1 paragraph + 1 rule-of-thumb line + 2 blank-line separators = 6–7 lines net.

**Why this location**: between Safety Rules (which mentions "Read before write") and Priority Hierarchy. The Heavy-File Read Convention is a *cost* discipline, not a *safety* discipline; sits naturally as the operating tail of safety rules. (Alternative: under "Agent Startup" step 2 "STATE.md — operational snapshot" — but that anchors the rule to STATE.md specifically; the generalized form is better at top level.)

## §3 — Companion `MEMORY.md` line (cold-start persistence)

**Location**: `aDNA.aDNA/MEMORY.md` (the persistent auto-memory index for this project — currently 2 entries: `project_operation_rosetta.md` + `project_adna_lattice_ux_goal.md`).

**Line to add** (≤ 150 char — index entry per memory protocol):

```markdown
- [Heavy-file Read convention](feedback_heavy_file_read.md) — default offset+limit Reads for any file ≥ 50 kT or ≥ 200 KB; STATE.md is canonical instance (router+archive split at M2.1).
```

**Companion file** (`feedback_heavy_file_read.md`) follows the memory protocol's two-step process (index entry + content file):

```markdown
---
name: heavy_file_read_convention
description: Default to offset+limit Read parameters on files ≥ 50 kT content-load or ≥ 200 KB byte size; STATE.md is the canonical router+archive instance.
type: feedback
---

For any file ≥ 50 kT content-load or ≥ 200 KB byte size, default to `offset` + `limit` Read parameters; the full file is rarely needed for a single question.

**Why**: STATE.md and similar accumulator files cross the Read tool's 256 KB limit when they accumulate audit history (M2.1 S1 2026-05-19: Read STATE.md returned `File content (339.2KB) exceeds maximum allowed size (256KB)` — pre-split). API-billing impact compounds: cache_creation tax per session entry ~ 300–500 kT, scaling with per-file content-load (per `node.aDNA/what/context/token_baselines.md` v0.1.1 §3).

**How to apply**: when you see a file that looks like an accumulator (`STATE.md`, campaign masters, long mission files, AAR aggregates), grep for section headers first to get the navigational shape, then targeted Read with offset+limit. Full-file Read only when the file is small (< 20 kT) or you genuinely need the whole thing (rare).
```

**Where it lives**: `/Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/feedback_heavy_file_read.md` (per the auto-memory directory structure documented in the project CLAUDE.md / system prompt).

**S2 action**: Write both the MEMORY.md index update + the companion `feedback_heavy_file_read.md` file. Two-file write per memory protocol.

## §4 — Upstream-contribution backlog placeholder

**Location**: `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md`

**Purpose**: at v8 P6 close (when `.adna/` upstream propagation lands), this convention promotes to the template-level `AGENTS.md` so all forks inherit it. Until then, the hint stays vault-local at `aDNA.aDNA/AGENTS.md` only.

**Frontmatter** (follows `idea_upstream_*.md` precedent):

```yaml
---
type: backlog_idea
idea_id: idea_upstream_state_md_read_hint
title: "Add Heavy-File Read Convention to v8.0+ AGENTS.md template"
category: doctrine
status: proposed
priority: medium
effort: tiny  # < 0.5 session — single-section insert in upstream AGENTS.md template
proposed_by: agent_stanley
proposed_date: 2026-05-19
updated: 2026-05-19
upstream: true
target_version: "v8.0"
last_edited_by: agent_stanley
tags: [backlog, upstream, doctrine, agents_md, heavy_file_read, offset_limit_convention, context_budget]
---
```

**Body sections**: Problem (STATE.md and similar files cross the 256 KB Read limit; agents pay full content-load cost without realizing) · Proposed solution (4-line section text per §2 above) · Reasoning (M2.1 evidence; M1.3 + M1.4 measurements; convergence-model Mid-magnitude verdict) · Compatibility (purely additive doctrine; no existing files break) · Acceptance test (post-merge: clone a fresh `.adna/` template; confirm AGENTS.md carries the convention) · Cross-references (this M2.1 mission file + design artifacts + node.aDNA token_baselines.md).

**Why not edit `.adna/` directly at M2.1 S2**: per Campaign Standing Order #14 + ADR-005 rule 3, upstream propagation gates at the v8 P6 phase entry; mid-phase upstream edits violate the hard freeze on v7.0 tag. The backlog placeholder seeds the v8 P6 work without breaking the freeze.

## §5 — Cross-vault propagation scope (at M2.1 S2)

| Vault | Action at M2.1 S2 | Reason |
|---|---|---|
| `aDNA.aDNA/AGENTS.md` (this vault, root) | **Insert hint** | Canonical instance; lives here first |
| `aDNA.aDNA/MEMORY.md` + `memory/feedback_heavy_file_read.md` | **Insert + create** | Cold-start persistence for future Rosetta sessions |
| `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` | **Create** | v8 P6 upstream propagation seed |
| `aDNA.aDNA/what/AGENTS.md` + `how/AGENTS.md` + `who/AGENTS.md` | NO action | Local convention; root AGENTS.md inherits to subdirs by precedent |
| `node.aDNA/AGENTS.md` (or equivalent) | NO action at M2.1 | Operator-discretionary follow-on; M2.1 does not touch node.aDNA agent guides |
| `.adna/AGENTS.md` (upstream template) | NO action at M2.1 | Hard freeze on v7.0 tag; backlog placeholder waits for v8 P6 |
| Partner vaults (CanvasForge, ComfyForge, etc.) | NO action at M2.1 | Embargo-bound (4 memos preserved); convention propagates organically via v8.0 tag + upstream `.adna/` updates |
| Other peer vaults (lattice-labs, LatticeNetwork, LatticeLabs, RareHarness, etc.) | NO action at M2.1 | Each peer vault can adopt the convention in its own backlog/mission; M2.1 only docs the convention + seeds upstream |

**Scope discipline**: M2.1 S2 touches exactly 3–4 files in this vault for Op 2 (AGENTS.md + MEMORY.md + new memory file + new backlog placeholder). Single-vault, single-mission scope.

## §6 — Idempotency + safe re-application

- Hint text in AGENTS.md is idempotent: if a future skill or agent attempts to re-add the same section, the existing section short-circuits with no-op. (Agents read AGENTS.md before edit per project SO; collision check on first heading match.)
- MEMORY.md index entry is idempotent: the link is keyed by file path; re-adding the same line is a no-op.
- `feedback_heavy_file_read.md` write is idempotent: same content yields same file.
- Backlog placeholder is idempotent: file path is unique to this contribution.

**Re-running the S2 phase that handles Op 2 produces no diff** after first successful run. Operator confirms by `git status` clean after second invocation.

## §7 — Verification (run at S3)

| Check | Method | Pass condition |
|---|---|---|
| AGENTS.md hint present | `grep -c "Heavy-File Read Convention" aDNA.aDNA/AGENTS.md` | 1 (single insertion) |
| Hint section is ≤ 7 net lines | `awk` on section boundary | ≤ 7 lines |
| MEMORY.md index entry present | `grep -c "heavy_file_read" aDNA.aDNA/MEMORY.md` OR equivalent at the memory directory | 1 |
| `feedback_heavy_file_read.md` exists at the memory directory | `ls /Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/feedback_heavy_file_read.md` | exists |
| Backlog placeholder exists | `ls aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` | exists |
| Backlog frontmatter validates | `head -20 ...` matches `idea_upstream_*` precedent | valid |
| No `.adna/` files modified | `git status .adna/ | wc -l` | 0 |
| No partner-vault files modified | `git status` across CanvasForge/ComfyForge/RareHarness/etc. | 0 |
| Hint readable at cold-start | A fresh agent session loads AGENTS.md, sees the convention | manual test S3 |

## §8 — Cross-references

- [[../mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] §Objective 3 — this artifact discharges Obj 3
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — top-3 M2.1 queue (Op 2 originates here)
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §7 — queue confirmation
- [[m21_obj2_state_split_design.md|m21_obj2_state_split_design.md]] — Op 1 sibling (router+archive split)
- [[m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] — Op 3 sibling (auto-archive convention)
- `aDNA.aDNA/AGENTS.md` — hint target (root)
- `aDNA.aDNA/MEMORY.md` — companion index target
- `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/feedback_heavy_file_read.md` — companion content target (NEW at S2)
- `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` — upstream propagation seed (NEW at S2)
- `node.aDNA/what/context/token_baselines.md` v0.1.1 — measured costs (§3 Mid-magnitude verdict + §2.1 API-billing aggregate)

## §9 — Notes for S2 execution agent

- Write `aDNA.aDNA/AGENTS.md` with the §2 hint section inserted between Safety Rules and Priority Hierarchy.
- Write `aDNA.aDNA/MEMORY.md` with the §3 companion line appended (one line; preserve existing 2 entries; `Today's date` block is auto-managed).
- Write `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/feedback_heavy_file_read.md` (NEW) per §3 frontmatter + body.
- Write `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` (NEW) per §4 frontmatter + body.
- All 4 file writes idempotent — re-running yields no diff.
- Single git commit at end of Op 2 destructive phase (S2 phase parallel to Op 1 phase A/B).
- No `.adna/` touches; no partner-vault touches; no settings.json touches.
