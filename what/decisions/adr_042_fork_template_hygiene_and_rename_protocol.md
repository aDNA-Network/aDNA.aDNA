---
type: adr
adr_number: "042"
title: "Fork-template hygiene & rename protocol — upstream fixes for three template-rooted fleet-defect classes (Operation Drydock M03)"
status: accepted
created: 2026-06-29
updated: 2026-06-29
last_edited_by: agent_stanley
campaign_id:
supersedes:
superseded_by:
tags: [adr, decision, standard_touch, fork_template, rename_protocol, harness_injection, template_clutter, fleet_defect, drydock, m03]
---

# ADR-042: Fork-template hygiene & rename protocol (Drydock M03 upstream fixes)

## Status

Accepted — 2026-06-29 (operator greenlight: **all three classes, upstream-only**). Ratifies the staged inbound proposal [[who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects|coord_2026_06_27_inbound_from_berthier_fleet_defects]] from Berthier (aDNALabs.aDNA); durable finding-of-record paired with that memo: `aDNALabs.aDNA/how/backlog/idea_upstream_fleet_defects.md`. Implemented by [[how/missions/mission_fleet_defects_upstream|mission_fleet_defects_upstream]].

## Context

Three defect classes recurred **fleet-wide** across the `campaign_graph_tidy` waves (2026-06-14) and were re-confirmed at Operation Drydock M00 recon. All three are **template-rooted** — they originate in the `.adna` fork template or in how renames propagate, not in any single vault's local hygiene. A vault cannot durably fix them from its own context: a per-vault strip just gets re-inherited on the next fork. That puts the **upstream pattern + the template/standard files in Rosetta's lane** as standard owner (workspace Rule 1; aDLabs wrote zero bytes into `aDNA.aDNA`/`.adna`).

| Class | Defect | Magnitude (probed 2026-06-25) |
|-------|--------|-------------------------------|
| 1 — Template-clutter | Every fork ships a *completed* `campaign_adna_workspace_upgrade` (a `~/lattice`→v6.0 migration, foreign the moment the fork lands); the default persona string is inherited non-parameterized | 45 live vaults |
| 2 — Harness-injection | Harness context boundaries (`# userEmail` / `# currentDate`) accidentally committed at EOF of a governance file | 2 surfaced paths = 1 logical vault (Oration / its SpeechForge shim) |
| 3 — OBE rename-residue | A renamed vault's own live-routing files (`CLAUDE.md`/`STATE.md`/`AGENTS.md`) self-reference its OLD name; masked because `Archive.aDNA/*` shims keep the stale refs resolving | true-defect subset = live-routing self-refs only (raw grep over-counts: most hits are legitimate SO-7 provenance prose) |

**The upstream fix stops the bleeding for all future forks/renames; retro-cleanup of the existing instances is a separate, deeper-than-tidy operator decision (SO-7-keep-historical) — deferred here, not asserted.**

## Decision

### 1. Class 1 — template-clutter: stop shipping the stale campaign; parameterize the persona (STAGED release delta)

The shipped fork template (`.adna/`) MUST NOT ship the pre-completed `campaign_adna_workspace_upgrade` (it is `completed` 2026-04-04; its reusable procedure already graduated to `skill_workspace_upgrade.md`, so removal is lossless) — and the fork-produced project `CLAUDE.md` MUST parameterize the default persona token (substituted at fork/onboarding time) rather than hard-coding a name.

Because both are **template-tree changes**, they are **STAGED as a ratified release delta** applied at the next operator-gated `skill_template_release` (two-gate discipline, below) — Workspace Rule 1 forbids editing `.adna/` directly. The exact mechanical delta is recorded in [[how/missions/mission_fleet_defects_upstream|the mission]] §"Staged release delta". Retro-strip of the campaign from the 45 live vaults (incl. aDNA.aDNA's own inherited copy) is **deferred** ([[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]]).

> The persona-parameterization is the memo's "fold-in if convenient" sibling; it is **specified but staged** (not live-edited this session) because the project-fork `CLAUDE.md`, the root workspace-router (`template_workspace_claude.md`, legitimately "Berthier"), and the fork copy interleave — a wrong edit breaks the router. The release smoke-test (`skill_template_release` step f) is the correct place to verify the root router still reads Berthier while new forks get a substituted persona.

### 2. Class 2 — harness-injection: standard safeguard + lint guard (LANDED); strips deferred

- **Standard (LANDED):** [[what/docs/adna_standard|adna_standard.md]] §13.2 Tier-1 Universal gains a fourth safeguard — never commit harness-injected context boundaries (`# userEmail`, `# currentDate`, `# currentDate (Today's date is …)`) into governance files (`CLAUDE.md`/`STATE.md`/`AGENTS.md`); they are session context the harness injects, not governance, and carry no information once committed.
- **Guard (LANDED):** `what/lattices/tools/adna_validate.py --governance` flags any governance file carrying a committed `^#\s*(userEmail|currentDate)` line as a MUST violation.
- **Strips (DEFERRED):** the 2 existing EOF strips (Oration / SpeechForge shim) route via **Oration's (R. Kennedy's) own subagent** under Oration's governance — aDLabs/Rosetta do not reach in. Staged memo: [[who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip|coord_2026_06_29_rosetta_to_oration_harness_strip]].

### 3. Class 3 — OBE rename-residue: rename protocol + sweep recipe (LANDED); sweep execution deferred

- **Standard (LANDED):** [[what/docs/adna_standard|adna_standard.md]] §6.5 "Rename Protocol" — a rename of a vault MUST, at rename-time, sweep its own live-routing files (`CLAUDE.md`/`STATE.md`/`AGENTS.md`) of self-references to the old name. This closes the class going forward.
- **Recipe (LANDED):** new skill [[how/skills/skill_project_rename|skill_project_rename.md]] encodes the scoped sweep — isolate the **true-defect subset = live-routing self-references only**, with a **keep/strip classifier** that excludes legitimate historical cross-refs (SO-7 provenance prose, session history, ADR lineage), avoiding the raw-grep over-count.
- **Sweep execution (DEFERRED):** running the scoped sweep over existing residue (SpeechForge, TappInterface, …) is the cleanup arm — deferred ([[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]]).

### 4. Two-gate discipline + version bump

Authoring upstream fixes in the **aDNA.aDNA dev graph** (this session) and **propagating template changes to `.adna/` + the public `aDNA-Network/aDNA` image** are two distinct gates. This ADR + the mission are the *ratification* gate; `skill_template_release` (operator-opened) is the *propagation* gate. The standard-doc edits bump the **standard track** v2.3 → **v2.4** (ADR-011 two-track policy); the image tag bumps later, at the release gate, when the Class-1 delta also lands.

## Consequences

### Positive
- Future forks no longer inherit a foreign completed campaign or a hard-coded persona; future renames sweep their own self-routing at rename-time; harness boundaries committed into governance are caught by a validator gate. The three classes stop propagating.
- The keep/strip classifier (Class 3) is reusable by the deferred cleanup arm and by Berthier's `idea_upstream_fleet_defects` finding-of-record.

### Negative / follow-ups (named, not executed here)
- **Staged release delta (Class 1)** — the `.adna/` + public-image changes await the next operator-gated `skill_template_release`. Until then, new forks still inherit the clutter (the *content-level* sibling of this drift was just fixed by the currency sweep; Classes 1 & 3 are its structural siblings).
- **Deferred retro-cleanup** — 45-vault campaign strip + OBE residue sweep execution: [[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]] (separate operator calls, SO-7-keep-historical weighed per vault).
- **Deferred 2 strips** — routed to Oration's subagent via the staged memo (aDLabs/Rosetta do not reach in).

### Neutral
- Adds `skill_project_rename` to the skills inventory; adds one `--governance` check to `adna_validate.py`; adds §6.5 + a §13.2 list item to the standard.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-27 | Drydock M03 (Berthier) | Proposed via the staged inbound memo (3 fleet-defect classes), operator-gated. |
| 2026-06-29 | mission_fleet_defects_upstream (Rosetta) | Operator greenlit all 3, upstream-only. Authored + ratified `proposed → accepted`. Classes 2 & 3 standard/tooling LANDED; Class 1 staged as a release delta; retro-cleanup + strips deferred. |
