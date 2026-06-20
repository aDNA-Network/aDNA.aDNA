---
campaign_id: campaign_hearthstone
type: campaign
title: "Operation Hearthstone — ship a complete, polished base Home.aDNA into the public template"
owner: stanley
status: active
phase_count: 6
mission_count: 12
estimated_sessions: "8-14"
calibrated_sessions: "8-14"
estimation_class: "governance-broad"
priority: high
created: 2026-06-18
activated: 2026-06-18
updated: 2026-06-19
last_edited_by: agent_hestia
parent_program: campaign_operation_adna
program_track: B
tags: [campaign, hearthstone, home_adna, base_template, node_bootstrap, ontology_v8, upstream, cross_vault_authored, operation_adna_track_b]
---

# Campaign: Operation Hearthstone — ship a complete, polished base Home.aDNA into the public template

> **Track B under [[campaign_operation_adna]] — ACTIVE; P0–P4 CLOSED (P0 2026-06-18; P1–P4 2026-06-19); P5 (release & verify) ACTIVE.** Operation aDNA is the program umbrella; Hearthstone is its base-template / node-bootstrap track. P0 activated + closed 2026-06-18: the operator approved scope/activation (Decision 1) **and ratified the v8.0 ontology-promotion ADR** (`adr_035` → `accepted`: `inventory`+`identity` → base entity types 14→16, standard **v2.3**, defer `network_node_mirror`/`permission_edge`). **P1 (entity-type foundations) closed 2026-06-19** (operator P1 exit gate, Decision 4) — authored in the dev graph; `.adna/` materialization stays gated to **P5** (`skill_template_release`). **P2 (`template_home_claude.md` + Step-0 router) CLOSED 2026-06-19** (operator approved the phase-exit, Decision 4; dev graph — `.adna/` ships at P5). The operator returned to Hearthstone for P2 after running WEBSITE P2 (Track A) earlier the same day. **P3 (exemplar bundle) CLOSED 2026-06-19** (operator Decision 4; Decision 3 ratified = optional-degrade) — both entry gates (CanvasForge→Canvas + PT P5) cleared; bundle upstreamed byte-identical to the dev graph (`smoke_render.py` + `--parity` green). **P4 (exemplar invocation wiring) DELIVERABLES COMPLETE + VERIFIED 2026-06-19** (dev graph `266e046`; `.adna/` ships at P5) — interview Topic 6 + Step-9 `>`-prefix callout-fold branch (on a newly-established dev mirror) + fork `--exemplar-home`/Step 4.5; smoke + `--parity` + Athena-profile materialize all green. **— P4 CLOSED 2026-06-19 (operator approved the phase-exit, Decision 4). P5 (release & verify) ACTIVE — executing the `skill_template_release` dry-run + local verification up to the public-push gate (Decision 5).** See [[mission_hearthstone_p5_release_verify]] · [[mission_hearthstone_p4_exemplar_invocation]] · [[mission_hearthstone_p3_exemplar_bundle]].
>
> **Cross-vault genesis (2026-06-18).** Chartered by **Hestia** from a `Home.aDNA` session after the operator chose **"full polished base"** in response to *"does `Home.aDNA/` have a public base on GitHub usable to seed new nodes, or can the base system bootstrap its own home graph?"* Authored as a **landing pad** — **Rosetta + operator own activation and every gated decision** (idea ratification, the v8.0 ADR, the public release). Handoff memo: [[who/coordination/coord_2026_06_18_hestia_to_rosetta_hearthstone_charter_handoff]]. Origin plan: `~/.claude/plans/does-the-home-dir-adaptive-fern.md`. Home-side record: `Home.aDNA/how/sessions/history/2026-06/session_2026_06_18_hearthstone_upstream_prep.md`.

## Goal

A fresh `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` **detects the absence of a node vault, offers to bootstrap it, and produces a complete, correct, _polished_ Hestia `Home.aDNA/`** out of the box — canonical `inventory`/`identity` entity types, the Hestia governance `CLAUDE.md`, and the themed gallery/topology home — shipped via the gate-fired `skill_template_release` to `.adna/` and the public `aDNA-Network/aDNA` image at standard **v8.0**.

## Context

The base template today is **partial** for the per-node `Home.aDNA/` vault. Verified against `.adna/` (= the public image source): it **ships** the `HOME.md` landing-page template and all 6 node-skills (`project_fork`, `node_bootstrap_interview`, `inventory_refresh`, `node_health_check`, `update_all_vaults`, `node_credentials_audit`), so it can *generate* a functional home on the fly (the ADR-034 "generate, don't ship a fat skeleton" posture). It is **missing**: the `what/inventory/` + `who/identity/` entity-type scaffolds (proposed, not canonical); a Hestia governance `CLAUDE.md` template (a Home fork inherits the generic **Berthier** `.adna/CLAUDE.md`); the Step-0 router "offer to bootstrap Home" flow (public `workspace_claude_md.template` Step 0 = legacy-root detection only); and the polished exemplar bundle. Net: a fresh node never gets *offered* a proper Home, and what it could assemble is plain and Berthier-governed.

This is standard-evolution work → it runs here (Rosetta), authored in the dev graph and released to `.adna/` + public via `skill_template_release` (Standing Rule 1: never hand-edit `.adna/`). `Home.aDNA` (Hestia) supplies the reference artifacts that already exist on the node and validates via `skill_node_health_check`.

**Feeds this campaign — 6 upstream ideas** (`how/backlog/`, all `proposed`): `idea_upstream_inventory_entity_type`, `idea_upstream_identity_entity_type`, `idea_upstream_node_exemplar_template`, `idea_upstream_project_fork_exemplar_invocation`, `idea_upstream_home_claude_template` (filed 2026-06-18), `idea_upstream_router_node_vault_detection` (filed 2026-06-18).

## Scope

### In Scope
- Promote `inventory` (WHAT) + `identity` (WHO) to **base** entity types at standard **v8.0** (un-namespaced, `merge: invariant`) — ontology + `.adna/CLAUDE.md` table + `MANIFEST.md` + entry templates + scaffold `AGENTS.md`.
- Ship **`template_home_claude.md`** (genericized Hestia/Home governance CLAUDE.md; persona-portable) + wire `skill_project_fork.md` to install it for Home-class forks.
- Add the **Step-0 "Node Vault Detection / offer to bootstrap Home"** flow to the workspace-router template.
- Upstream the **exemplar bundle** (`template_node_adna_exemplar/`) + fix the **CanvasForge→Canvas.aDNA** drift; document plugin prereqs.
- Wire the **exemplar invocation** (interview theming vars + the callout-fold `>`-prefix profile in Step 9 + `--exemplar-home` post-fork overlay; opt-in).
- **Release** at v8.0 via `skill_template_release` + end-to-end verification.

### Out of Scope
- Non-Home vault CLAUDE.md templates / other personas' governance files.
- The terminal cold-start ASCII splash (separate `idea_upstream_lattice_home_pattern`).
- Retroactive re-bootstrap of existing nodes (forks inherit at fork-time only).
- Multi-node / partner rollout of the new bootstrap (a Network/Venus concern).

### Subsumes

| Backlog idea | Status | Lands in |
|---|---|---|
| [[idea_upstream_inventory_entity_type]] | accepted (2026-06-18, P0) | P1 |
| [[idea_upstream_identity_entity_type]] | accepted (2026-06-18, P0) | P1 |
| [[idea_upstream_home_claude_template]] | accepted (2026-06-18, P0) | P2 |
| [[idea_upstream_router_node_vault_detection]] | accepted (2026-06-18, P0) | P2 |
| [[idea_upstream_node_exemplar_template]] | accepted (2026-06-18, P0) | P3 |
| [[idea_upstream_project_fork_exemplar_invocation]] | accepted (2026-06-18, P0) | P4 |

## Phases & Missions

> Mission rows are planned anchors; concrete mission files are created in `missions/` at **activation** (lifecycle §Activation). Only the P0 mission stub exists at charter.

### Phase 0: Charter, ratify, source-map
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 0 | Ratify the 6 ideas (`proposed→accepted`) · draft the inventory+identity→base-v8.0 ADR · establish the `skill_template_release` source-map · confirm router source-of-truth path | 1-2 | — | **completed 2026-06-18** (Decision 2 ADR ratified) |

**Phase exit gate**: operator approves scope/phases/mission-sequence ✅ (Decision 1, 2026-06-18); the v8.0 ADR is ratified ✅ (`adr_035` → `accepted`, Decision 2, 2026-06-18); the source-map (dev path → `.adna/` path) is recorded ✅. **— P0 CLOSED 2026-06-18.**

### Phase 1: Entity-type foundations (inventory + identity)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 1 | Promote `inventory` + `identity` to base types — genericized scaffold `AGENTS.md`, `template_inventory_entry.md`/`template_identity_entry.md`, `ontology.md` rows 15/16, dev-graph `CLAUDE.md` table + `MANIFEST.md` (`.adna/` ships at P5) | 1-2 | P0 | **completed 2026-06-19** (`mission_hearthstone_p1_entity_foundations`; deliverables 2026-06-18, exit gate Decision 4 2026-06-19) |

**Phase exit gate**: both entity types declared canonical (un-namespaced, invariant); D9 companion + D7 federation patterns verified; ADR ratified. **— CLOSED: criteria met + verified 2026-06-18; operator approved the phase-exit (Decision 4) 2026-06-19 → mission `completed`. P2 ready (not activated; the operator ran WEBSITE P2 instead).**

### Phase 2: Base Home self-sufficiency (minimal-correct core)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 2 | `template_home_claude.md` (genericized Hestia CLAUDE.md) | 1-2 | P1 | **completed ✅ 2026-06-19** ([[mission_hearthstone_p2_home_claude_template]]) |
| 3 | Step-0 router "offer to bootstrap Home" + wire `skill_project_fork.md` Home-class install | 1 | P1 | **completed ✅ 2026-06-19** ([[mission_hearthstone_p2_step0_router_fork_wiring]]) |

**Phase exit gate**: a fresh Home-class fork yields a complete, correct (plain) Hestia Home, and the router *offers* it unprompted.

**— DELIVERABLES COMPLETE + VERIFIED 2026-06-19** ([[mission_hearthstone_p2_home_claude_template]] + [[mission_hearthstone_p2_step0_router_fork_wiring]]; dev-graph only, `.adna/` ships at P5). Scratch-fork sim: 0 leftover `{{` · Hestia present / Berthier absent · `what/inventory`+`who/identity` resolve · skeleton-parity vs reference = 3 intentional genericizations. Router Step 0.1–0.5 (+ Lab opt-in offer per Lab ADR-006 D2) with 0 site-leakage; fork Step 3.5 installs the template. **— P2 CLOSED 2026-06-19: operator approved the phase-exit (Decision 4). Next ready arc = P3 (exemplar bundle; gated on CanvasForge→Canvas + PT P5).**

### Phase 3: Exemplar template bundle
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 4 | Upstream `template_node_adna_exemplar/`; **fix CanvasForge→Canvas.aDNA drift**; decide ship-with-dep vs optional-degrade; document plugin prereqs | 2 | P1 | **completed ✅ 2026-06-19** ([[mission_hearthstone_p3_exemplar_bundle]]; operator P3 exit Decision 4) |

**Phase exit gate**: `smoke_render.py --parity` passes; no leftover `{{`; topology dependency resolves to Canvas.aDNA (or degrades cleanly).

**— DELIVERABLES COMPLETE 2026-06-19** ([[mission_hearthstone_p3_exemplar_bundle]]; cross-lane Hestia session per operator "Full M4"): LIVE Home generator repointed `canvasforge→Canvas.aDNA` (Home `2ccda9f`; resolver already staged at `4592eab`/Mondrian ADR-004); bundle copied → `aDNA.aDNA/how/templates/template_node_adna_exemplar/` **byte-identical** to the reference. Source `smoke_render.py` ✅ (0 leftover `{{`) + `--parity` ✅; copy default-smoke ✅; `canvas_std` prereq documented (ADR-004 §4 silent-render trap); all CanvasForge refs read as interim-archive (owner Canvas.aDNA). **M4 scope = CanvasForge→Canvas only**; the other wrapper renames (SiteForge→Astro, etc.) stay for the **pt19** refresh. **— P3 CLOSED 2026-06-19: operator approved the phase-exit (Decision 4); Decision 3 ratified = optional-degrade. Next ready arc = P4 (exemplar invocation wiring).**

### Phase 4: Exemplar invocation wiring
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 5 | Interview theming vars + **callout-fold `>`-prefix profile in Step 9** + `--exemplar-home` post-fork overlay (opt-in) | 2 | P3 | **completed ✅ 2026-06-19** ([[mission_hearthstone_p4_exemplar_invocation]]; `266e046`; actual 1 session; operator P4 exit Decision 4) |

**Phase exit gate**: opt-in exemplar fork renders the themed home (Bases §Gallery · §Topology · 4 folds); decline → plain base HOME.

**— DELIVERABLES COMPLETE + VERIFIED 2026-06-19** ([[mission_hearthstone_p4_exemplar_invocation]]; cross-lane Hestia; dev graph only, `.adna/` ships at P5). Resolved the `.adna/`-only blocker by establishing the interview-skill **dev mirror** (Path A). Wired: interview **Topic 6** (theming, T1-T5, optional/exemplar-only — base 19 unchanged), the **Step-9 base/exemplar branch** with the load-bearing **`>`-prefix callout-fold profile**, and `skill_project_fork` **`--exemplar-home` + Step 4.5** overlay. Verified: `smoke_render.py` PASS (dev + reference copies) · `--parity` PASS (reference node) · `--materialize` with a non-Hestia (Athena) profile → 0 leftover `{{` + the `> [!abstract]-`/`> [!note]-` folds render `>`-prefixed callout-body bullets · base `.adna/HOME.md` decline-target intact. **— P4 CLOSED 2026-06-19: operator approved the phase-exit (Decision 4) → mission `completed`. P5 (release & verify) ACTIVE.**

### Phase 5: Release & verify (outward publish)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 6 | `skill_template_release` (assemble · embed-note · v8.0 two-track bump · tag · **push**) + fresh-clone smoke + real bootstrap dry-run | 1-2 | P2,P4 | **active 2026-06-19** ([[mission_hearthstone_p5_release_verify]]; session 1 = dry-run + local verify, stops at the public-push gate Decision 5) |

**Phase exit gate**: 7-gate fresh-clone smoke + end-to-end bootstrap dry-run pass; `skill_node_health_check` exits 0; operator approves the public push.

**— P5 SESSION-1 DRY-RUN ✅ 2026-06-19** (cross-lane Hestia; `skill_template_release` dry_run — fresh clone of `aDNA-Network/aDNA`, assemble, diff; NO push). **Hearthstone deliverables verify GREEN**: 7/7 smoke gates (incl. gitignore case-sensitivity + old-URL redirect) · bootstrap a–d (router offers Home · inventory/identity scaffolds · Hestia home CLAUDE · `smoke_render.py` 0 leftover `{{`) · `--parity` ✓ at the reference node. **⚠ KEY FINDING — release-scope decision required before the push:** the public image (`.adna/` @ v7.2) is **~40 ratified files behind** the dev graph (of 215 shipping files: 158 identical · 17 Hearthstone · **40 out-of-batch** ratified-but-unreleased — `/lattice→/aDNA` path sweep [⚠ public-image correctness], AGENTS top-12 edits, doc streamlines, v7.0 publish-skill family, ADR-034 public-face). A wholesale `cp` smuggles the drift; 6 "Hearthstone" files commingle a tiny HS delta with large out-of-batch drift. **Operator must rule SCOPE before session-2: (A) surgical Hearthstone-only v8.0** (per-file delta-extract the 6 contaminated; leave 40 stale) **vs (B) catch-up v8.0** (ship HS + the 40 ratified after confirm-each; fixes the `/lattice` staleness). Record + drift table: `Home.aDNA/how/sessions/history/2026-06/session_2026_06_19_hearthstone_p5_release_dryrun.md`. **Did NOT touch** `aDNA.aDNA/STATE.md`, `site/`, or the live `~/aDNA/.adna/`.

## Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| 1 | P0 | Approve campaign scope/phases/mission-sequence; activate (`planning→active`) | **approved 2026-06-18** (operator "activate Hearthstone P0") |
| 2 | P0/P1 | Ratify the inventory+identity→base **v8.0** ADR ([[adr_035_inventory_identity_base_entity_types]]; + batching with `network_node_mirror`/`permission_edge`) | **approved 2026-06-18** (`adr_035` → `accepted`; batched 2-now / defer-2) |
| 3 | P3 | CanvasForge→Canvas exemplar dependency: ship-with-dep vs optional-degrade | **recommended: optional-degrade** (the topology resolver already degrades cleanly — falls through path candidates, the `ImportError` guard skips the *optional* canvas; a fresh public clone has neither Canvas.aDNA nor the archive → topology skipped, rest of the home renders) — **ratified optional-degrade 2026-06-19** (operator, at the P3 exit) |
| 4 | each phase | Phase exit gate (human gate — never auto-advance) | P0 exit ✅ 2026-06-18 · P1 exit ✅ 2026-06-19 · P2 exit ✅ 2026-06-19 · P3 exit ✅ 2026-06-19 · **P4 exit ✅ 2026-06-19**; P5 exit pending (Decision 5) |
| 5 | P5 | **Approve the public push** to `aDNA-Network/aDNA` (outward release) | **pending** — dry-run ✅ GREEN 2026-06-19; scope ruled (Decision 6 = C); now gated on **session-2** producing the scope-C release + operator push confirm + version confirm (v8.0 vs v7.3) |
| 6 | P5 | **Release SCOPE** (surfaced by the P5 dry-run): A = surgical Hearthstone-only · B = full catch-up (40 out-of-batch) · C = Hearthstone + user-facing correctness sweep | **operator chose C 2026-06-19** — ship HS + new artifacts + the `/lattice→/aDNA` correctness fixes; per-file delta-extract the 6 contaminated; defer cosmetic drift (AGENTS top-12 / doc streamlines / v7.0 publish-family). **Nuance (verified):** the released image has **~56 `~/lattice` refs**, but **some are intentional** (migration tooling references the old path on purpose) — session-2 scopes the sweep **per-file from the `776d724` canonical sweep**, NOT a blind replace |

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Exemplar bundle references merged-away **CanvasForge** (pt09, 2026-06-17) | High | Repoint `CANVASFORGE_CODE` / `what/canvasforge/CLAUDE.md.template` / topology generator to Canvas.aDNA before release (P3) — **RESOLVED 2026-06-19 (M4)**: bundle + LIVE generator name Canvas.aDNA as owner; CanvasForge retained only as the interim archive shim + the (P5-repointed) wrapper-dir name |
| **Callout-fold `>`-prefix profile** not taught to interview Step 9 (load-bearing) | High | Joint P3↔P4 requirement; `SUBSTITUTIONS.md` parity test gates it — **RESOLVED 2026-06-19 (P4/M5)**: Step 9(b) teaches the `>`-prefix callout-body profile (+ the fork Step 4.5 mirror); `smoke_render.py --parity` `BLOCK_VARS` logic + the Athena-profile `--materialize` verify it renders inside the folds |
| v8.0 ontology cut not coordinated with the other proposed base promotions | Medium | Batch inventory/identity with `network_node_mirror`/`permission_edge` into one clean major (P0 ADR) |
| Template parity drift vs the evolving `Home.aDNA` reference | Medium | Skeleton-parity invariant + check (the bundle's `SUBSTITUTIONS.md` discipline) |
| Persona hard-coding (Hestia) in the CLAUDE template | Medium | Parametrize `{{persona}}`; persona-accent/greeting lookup |
| Public push is irreversible/outward | High | Explicit operator gate at P5; gate-fired `skill_template_release` only |
| **Public image ~40 ratified files behind dev** (surfaced P5 dry-run 2026-06-19) — a `cp`-style assemble smuggles unratified out-of-batch drift; a Hearthstone-only release leaves the image stale (incl. `/lattice` paths) | High | **Operator SCOPE ruling (Decision 6)** before the push: A surgical (per-file Hearthstone-delta extraction for the 6 contaminated files) vs B catch-up (confirm-each of the 40, ship current). Drift table in the P5 dry-run session record |

## Verification Strategy

Per-mission / per-phase / campaign checks per `template_campaign.md` defaults (SITREP · AAR · deliverables validated · git clean · all-AARs-GO · exit-criteria · STATE updated). Campaign-specific end-to-end (P5):
1. `python smoke_render.py --parity` on the upstreamed bundle → reference-node byte-parity; grep clean of leftover `{{`.
2. `skill_template_release` fresh-clone smoke (7 gates: router present · `role: template` · skills resolve · `*.aDNA/` ignored but `.adna/` tracked · embed-note · old-URL redirect · 1-command flow).
3. Real bootstrap dry-run — clone the public image to a scratch dir → `claude` → assert: (a) Step 0 *offers* Home; (b) `Home.aDNA/{what/inventory,who/identity}` present with `AGENTS.md`; (c) CLAUDE.md is **Hestia** (not Berthier); (d) exemplar HOME renders with no leftover `{{`; (e) `skill_node_health_check` exits 0.

## Timeline

| Phase | Missions | Sessions |
|---|---|---|
| P0 Charter | 0 | 1-2 |
| P1 Entity types | 1 | 1-2 |
| P2 Self-sufficiency | 2-3 | 2-3 |
| P3 Exemplar bundle | 4 | 2 |
| P4 Invocation wiring | 5 | 2 |
| P5 Release & verify | 6 | 1-2 |
| **Total** | **~7 anchor missions** | **8-14 sessions** |

## Notes

- **Cross-vault authorship**: scaffolded by Hestia from `Home.aDNA`; the substantive build is Rosetta's. Coordinate alongside the active `campaign_website_adna` (both can be active per lifecycle; operator gates phase advancement).
- **Reference artifacts to genericize** live in `Home.aDNA/`: `what/inventory/*`, `who/identity/*`, `CLAUDE.md`, `HOME.md`, `how/templates/template_node_adna_exemplar/*`, `how/skills/skill_project_fork.md` (worked `--exemplar-home` Step 4.5).
- **Router source-of-truth**: dev = `what/docs/templates/workspace_claude_md.template`; released = `.adna/how/templates/template_workspace_claude.md` (confirm at P0).

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
### Descoped
### Key Findings
### Scope Changes
### Follow-Up Campaigns

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
