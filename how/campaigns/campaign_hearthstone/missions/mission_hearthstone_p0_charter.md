---
plan_id: mission_hearthstone_p0_charter
type: plan
title: "P0 — Charter ratification, v8.0 ontology ADR, and release source-map"
owner: stanley
status: in_progress
campaign_id: campaign_hearthstone
campaign_phase: 0
campaign_mission_number: 0
mission_class: reconnaissance
created: 2026-06-18
updated: 2026-06-18
last_edited_by: agent_rosetta
tags: [plan, campaign, hearthstone, p0, ontology_v8, adr, source_map]
---

# Mission: P0 — Charter ratification, v8.0 ontology ADR, and release source-map

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]]
**Phase**: 0 — Charter, ratify, source-map
**Mission**: 0 of ~7

> **Stub authored by Hestia at charter (was status: planning).** This was the first thing a Rosetta session executed to activate the campaign. It makes the gated decisions Hestia deliberately did **not** make.
>
> **Activated 2026-06-18 (Rosetta).** Operator approved campaign scope/activation (Decision 1 — "activate Hearthstone P0"); campaign flipped `planning → active`. Mechanical deliverables landed this session (6 ideas ratified ✅; the v8.0 ontology-promotion ADR authored as `adr_035` — status `proposed`, parallel worker ✅; release source-map pinned ✅). **`status: in_progress` (not `completed`)** — mirrors how the WEBSITE P0/P1 missions held their gate: the exit gate's **ADR-ratification leg (Decision 2) remains an operator checkpoint**, so the mission stays open until the operator ratifies `adr_035`. On ratification → run the AAR and set `completed`.

## Goal

Convert Operation Hearthstone from a planning landing-pad into an executable campaign: ratify the six feeding ideas, ratify the standard-level decision to promote `inventory` + `identity` to base entity types at **v8.0**, and pin the dev→`.adna/` source-map so every later phase knows exactly where it authors and what `skill_template_release` will ship.

## Exit Gate

- ✅ Operator has approved campaign scope/phases/mission-sequence (Decision Point 1) → campaign `status: active` (2026-06-18).
- ⏳ An ADR **exists** promoting `inventory` (WHAT) + `identity` (WHO) to **base** entity types at standard **v8.0**, un-namespaced, `merge: invariant`, with the batching decision vs `network_node_mirror`/`permission_edge` recorded — authored as [[adr_035_inventory_identity_base_entity_types]] (status `proposed`, parallel worker). **Ratification (Decision Point 2) is still an operator checkpoint** — this leg is the one keeping the mission `in_progress`.
- ✅ The six ideas are `accepted` (2026-06-18 — see Objective 1).
- ✅ The release source-map is recorded (below, §Release Source-Map; dev-graph path → `.adna/` path for each artifact class).

## Objectives

### 1. Ratify the six feeding ideas ✅
- **Status**: done (2026-06-18, Rosetta)
- **Description**: Move `proposed → accepted` (or `accepted-with-amendments`) on the 6 ideas; reconcile any overlap (confirm `idea_upstream_lattice_home_pattern` = terminal splash, distinct; rename ideas = name-only — already verified at filing).
- **Outcome**: All 6 flipped `proposed → accepted`; each carries a `> **Ratified 2026-06-18**` body note pointing at [[adr_035_inventory_identity_base_entity_types]] for the promotion decision and naming the Hearthstone landing phase. The 2 entity-type ideas point specifically at `adr_035`. No overlap to reconcile (lattice_home_pattern = terminal splash, out of scope; rename ideas verified name-only at filing).
- **Files**: `how/backlog/idea_upstream_{inventory_entity_type,identity_entity_type,node_exemplar_template,project_fork_exemplar_invocation,home_claude_template,router_node_vault_detection}.md`
- **Depends on**: none

### 2. Author the v8.0 ontology-promotion ADR ✅ (authored; ratification pending)
- **Status**: authored — `adr_035` exists at `status: proposed` (parallel worker, this session); **operator ratification (Decision Point 2) pending**.
- **Description**: Promote `inventory`/`identity` to base entity types; decide whether v8.0 batches the two already-proposed `ontology.md` promotions (`network_node_mirror`, `permission_edge`) into one clean major. Un-namespaced (base types are not namespaced), `merge: invariant`, directory convention `what/inventory/` + `who/identity/`.
- **Outcome**: ADR authored as `adr_035_inventory_identity_base_entity_types` (proposed). The 6 ideas reference it by wikilink. Ratification is an operator checkpoint distinct from Decision 1 (activation) — the mission stays `in_progress` until ratified.
- **Files**: `what/decisions/adr_035_inventory_identity_base_entity_types.md` (new); ref `what/ontology.md`
- **Depends on**: 1

### 3. Establish the release source-map ✅
- **Status**: done (2026-06-18, Rosetta) — see §Release Source-Map below.
- **Description**: Record, per `skill_template_release` step (b), which dev-graph file becomes which `.adna/` path. Confirm the dev home for the new entity-scaffold `AGENTS.md` files and for skill edits; resolve the router source-of-truth (`what/docs/templates/workspace_claude_md.template` → released `.adna/how/templates/template_workspace_claude.md`).
- **Outcome**: Source-map table pinned (§Release Source-Map). Router source-of-truth resolved per the idea-file evidence + charter §Notes (`what/docs/templates/workspace_claude_md.template` → `.adna/how/templates/template_workspace_claude.md`); to be reconfirmed against `skill_template_release.md` step (b) at P5 assembly.
- **Files**: this mission (§Release Source-Map); ref `how/skills/skill_template_release.md`
- **Depends on**: 1

## Release Source-Map (Objective 3 deliverable)

Per `skill_template_release` step (b): each Hearthstone deliverable's **dev/source path** (authored in `aDNA.aDNA/` or genericized from the `Home.aDNA/` reference) → its **destination `.adna/` path** that the gate-fired `skill_template_release` ships at **P5**. Standing Rule 1: `.adna/` is never hand-edited; it is assembled by the release skill from these dev sources.

| # | Deliverable | Lands | Dev / source path | → `.adna/` destination | Reference (genericize from) |
|---|---|---|---|---|---|
| 1 | `inventory` entity-type scaffold `AGENTS.md` | P1 | `aDNA.aDNA/what/inventory/AGENTS.md` *(authored P1)* | `.adna/what/inventory/AGENTS.md` | `Home.aDNA/what/inventory/AGENTS.md` |
| 2 | `identity` entity-type scaffold `AGENTS.md` | P1 | `aDNA.aDNA/who/identity/AGENTS.md` *(authored P1)* | `.adna/who/identity/AGENTS.md` | `Home.aDNA/who/identity/AGENTS.md` |
| 3 | `template_inventory_entry.md` | P1 | `aDNA.aDNA/how/templates/template_inventory_entry.md` *(authored P1)* | `.adna/how/templates/template_inventory_entry.md` | `Home.aDNA/what/inventory/inventory_*.md` + `.yaml` (D9 companion pattern) |
| 4 | `template_identity_entry.md` | P1 | `aDNA.aDNA/how/templates/template_identity_entry.md` *(authored P1)* | `.adna/how/templates/template_identity_entry.md` | `Home.aDNA/who/identity/identity_*.md` + `.yaml` |
| 5 | Base-ontology rows 15/16 + ontology prose | P1 | `aDNA.aDNA/what/ontology.md` (+ ADR `adr_035`) | `.adna/CLAUDE.md` §Base Ontology table (14→16) + `.adna/MANIFEST.md` ontology description | the `adr_035` declaration (canonical, un-namespaced, `merge: invariant`) |
| 6 | `template_home_claude.md` (Hestia/Home governance CLAUDE.md, genericized) | P2 | `aDNA.aDNA/how/templates/template_home_claude.md` *(authored P2)* | `.adna/how/templates/template_home_claude.md` | `Home.aDNA/CLAUDE.md` (parametrize `{{persona}}`/`{{node_hostname}}`/`{{operator}}`/`{{workspace_root}}`) |
| 7 | Router **Step-0 "Node Vault Detection / offer to bootstrap Home"** block | P2 | `aDNA.aDNA/what/docs/templates/workspace_claude_md.template` (Step 0 edit) | `.adna/how/templates/template_workspace_claude.md` (the workspace `CLAUDE.md` template) | this node's `~/aDNA/CLAUDE.md` Step 0.1–0.4 skeleton (strip site-specific Step-0a/banner/vault list) |
| 8 | Node exemplar bundle `template_node_adna_exemplar/` | P3 | `Home.aDNA/how/templates/template_node_adna_exemplar/` *(genericize in-place / stage in `aDNA.aDNA`)* | `.adna/how/templates/template_node_adna_exemplar/` | the bundle itself (`README.md` + `SUBSTITUTIONS.md` + generators + seed YAMLs) — **repoint CanvasForge→Canvas.aDNA first (watch item below)** |
| 9 | Exemplar-invocation skill wiring (`--exemplar-home` + interview theming vars / Step-9 `>`-prefix callout-fold profile) | P4 | edits to `.adna/how/skills/skill_project_fork.md` + `skill_node_bootstrap_interview.md` *(authored in dev, released to `.adna/`)* | `.adna/how/skills/skill_project_fork.md` + `.adna/how/skills/skill_node_bootstrap_interview.md` | worked `--exemplar-home` Step 4.5 in `Home.aDNA/how/skills/skill_project_fork.md` |

> **Router source-of-truth note (resolves Objective 3's open question):** the dev source is `aDNA.aDNA/what/docs/templates/workspace_claude_md.template`; the released artifact is `.adna/how/templates/template_workspace_claude.md`. Edit the dev source only; `skill_template_release` renders the `.adna/` copy (per ADR-034 + each idea's "edit one" risk note). Reconfirm against `skill_template_release.md` step (b) at P5 assembly before the v8.0 bump.

## Step-0 plan — fold the Lab ADR-006 per-node-default offer

The router's "offer to bootstrap Home" flow (deliverable #7, the new Step-0.3 MISSING branch) must **coordinate the Lab per-node-default offer** rather than emit a second, separate bootstrap prompt. Per **Lab's ADR-006** (Galileo, `Lab.aDNA`) the Lab is a per-node-default offering; on a fresh node both the Home-vault offer and the Lab offer should surface **together as one coordinated bootstrap moment**, not duplicated or sequential prompts that nag the operator twice. P2 (deliverable #7) authors the Step-0.3 branch so it presents Home + Lab as a single opt-in choice (decline → proceed, no re-ask, per the existing no-nag discipline).

> **Coord-memo status (2026-06-18):** no Galileo/Lab ADR-006 bootstrap-offer memo is present in `aDNA.aDNA/who/coordination/` (only the two 2026-06-18 memos — the Hestia→Rosetta Hearthstone handoff and the WEBSITE pt19 dependency — exist here). The Galileo coord memo is **expected Home-side / Lab-side**; surface it before P2 authors deliverable #7, and link it here when it arrives (`coord_2026_06_18_galileo_*` was the anticipated name). Track as a P2 inbound dependency.

## Watch item — CanvasForge → Canvas.aDNA exemplar drift (blocks P3)

The node exemplar bundle (deliverable #8, `template_node_adna_exemplar/`, last updated 2026-06-10) still references the **merged-away `CanvasForge`** — its §Topology generator consumes `CanvasForge canvas_core` via `$CANVASFORGE_CODE`, and it carries a `what/canvasforge/CLAUDE.md.template`. `CanvasForge` **merged → `Canvas.aDNA` at PT pt09 (2026-06-17)** (production absorbed by the standard-bearer; source archived → `Archive.aDNA/CanvasForge.aDNA/`). The bundle **must be repointed to `Canvas.aDNA`** (`$CANVASFORGE_CODE` → the Canvas code path, `canvasforge/` wrapper → `canvas/`, topology generator dependency) **before P3 exemplar assembly** — or §Topology degrades cleanly to §Gallery-only (Decision Point 3: ship-with-dep vs optional-degrade). This is the campaign's High-severity risk-register row; carry it into the P3 mission spec.

## Campaign Context

### Previous Mission Outputs
- Charter landing-pad (this campaign master) + 6 filed ideas + the Hestia→Rosetta handoff memo.

### Next Mission Inputs
- P1 (entity-type foundations) needs Objectives 2 + 3 done: the ratified ADR (what to declare) and the source-map (where to author / what ships).

## Notes

Reference artifacts to genericize across P1–P4 live in `Home.aDNA/` (see campaign master §Notes). Hestia (Home.aDNA) is the pair for supplying/validating those + running `skill_node_health_check`.

### Decision status (2026-06-18)

- **Decision 1 (scope / activation) — APPROVED 2026-06-18.** Operator: "activate Hearthstone P0." Campaign flipped `planning → active`; this mission `planning → in_progress`.
- **Decision 2 (v8.0 ontology-promotion ADR ratification) — PENDING (distinct operator checkpoint).** `adr_035` is authored at `status: proposed`; operator ratification is a separate gate and is the open leg of this mission's exit gate. Do **not** treat Decision 1 (activation) as ratifying the ADR.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
### Descoped
### Key Findings
### Scope Changes

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
