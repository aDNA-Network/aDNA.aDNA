---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → VideoForge.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: VideoForge.aDNA
receiving_persona: iris
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-VideoForge.aDNA-v7-migration
audit_id: adna_v2_m08a_videoforge_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/VideoForge.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, iris, videoforge, m08a, m08b, airlock_pattern, lp_internal_no_remote, first_time_remote_setup]
---

# VideoForge.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (10 of 17). **No-remote variant** — first-time GitHub remote configuration via `skill_git_remote_setup` (M05 NEW skill).

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**VideoForge.aDNA** is a **Forge** — composable video-production forge governed by **Iris** (messenger goddess; carries narrative across boundaries — formats, platforms, consumer graphs). Genesis planning; sibling code repo at `~/lattice/videoforge/`.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking — workspace flatten (M03) + publish-skill rewrite (M05). For VideoForge: M05 includes **first-time remote setup** via the new `skill_git_remote_setup` skill, since VideoForge has no GitHub origin yet. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What VideoForge.aDNA specifically needs to do

### Current state of VideoForge.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Forge |
| Persona | Iris |
| Operator class | LatticeProtocol-internal |
| Current git remote | **(none)** — no remote configured |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (no remote yet; canonical name `VideoForge.aDNA.git` adopts when remote added) |
| Airlock-eligible | Y (Forge category default; sibling code repo coordination via airlock) |
| Maturity | Genesis planning |

### Required actions (breaking changes — one-time)

| # | Action | When | Where |
|---|---|---|---|
| 1 | **Workspace flatten** | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **First-time remote setup**: Run `~/.adna/how/skills/skill_git_remote_setup.md` to wire up your GitHub origin (per ADR-009 naming convention — canonical `VideoForge.aDNA.git`) — the new skill creates the GitHub repo if it doesn't exist — then run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md|skill_git_remote_setup spec]] + [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Forge with sibling code-repo coordination + cross-forge traffic (CanvasForge worked example pattern). Iris (messenger persona) maps naturally to airlock-pattern role. | Defer until VideoForge Phase 1 close. |
| 4 | `node.aDNA/` | GPU + render-farm operators benefit from per-machine inventory. | Skip if single-machine. |
| 5 | n/a | Naming auto-conformant when remote added. | n/a |

### VideoForge.aDNA-specific notes

- **Sibling code repo**: VideoForge pairs with `~/lattice/videoforge/` (renamed from `lattice-video-forge/` at M_1_01 2026-05-08). The vault and the code repo have separate v7.0 considerations — the **vault** does v7.0 adoption; the code repo follows its own conventions. Coordinated PRs may sequence the vault and code-repo migrations.
- **Genesis planning**: VideoForge is mid-genesis; v7.0 adoption can sequence into the genesis Phase 1 work (P0–P3 seeded 2026-04-30).
- **Day-1 consumers**: SS (`videoforge/` production-validated) + CC (`videoforge/` placeholder). v7.0 adoption in VideoForge does not require consumer-wrapper updates.
- **First-time remote**: M05's new `skill_git_remote_setup` is designed for exactly this case — creates `github.com/LatticeProtocol/VideoForge.aDNA.git` (canonical name per ADR-009) if it doesn't already exist; configures origin in one step.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | First-time remote setup + skill_deploy. | 10–15 min |
| Verification | After Steps 1–2 | Run validation runbook. | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption (Y eligible). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 | n/a | Naming auto-conformant. | n/a |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed` (M08b verifies post-flatten + remote setup + pre-push hook). Trigger: §6 co-sign.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 changes captured; first-time remote setup via M05 NEW skill; canonical name `VideoForge.aDNA.git` per ADR-009. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### Iris — VideoForge.aDNA

Iris confirms (mirror artifact pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge.aDNA's own airlock]] (the **reference Forge airlock** — VideoForge defines the canonical Forge airlock pattern for cross-forge requests, and is now itself a multilateral-airlock receiver). 1 of 17 instances; first-time-remote variant.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern; references VideoForge's own canonical airlock as receiver. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks; sibling code-repo flag. |

---

## §9 Status

**Ready for delivery.** First-time remote setup via M05 NEW skill; canonical name auto-adopted.
