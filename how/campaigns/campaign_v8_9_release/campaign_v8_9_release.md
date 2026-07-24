---
campaign_id: campaign_v8_9_release
type: campaign
title: "v8.9 governance release — ship the Refit-M5 vNext batch to the public template image"
owner: stanley
persona: rosetta
status: planned          # materialized at Refit G2 (DP9 signed 2026-07-24); OPENS as its own campaign post-Refit, fired via skill_template_release
opens_when: "operator opens it post-Operation-Refit (a P0 charter session mints CLAUDE + P1 mission + codename)"
governance_bump: "8.8 → 8.9"
standard_version: "v2.5 (held — no normative change)"
seeded_by: campaign_refit / M5 vNext triage
source_roadmap: how/campaigns/campaign_refit/artifacts/vnext_roadmap.md
ratified_at: "Refit G2 / DP9 (2026-07-24) — how/campaigns/campaign_refit/artifacts/ratification_record_refit_g2.md"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [campaign, v8_9, release, template_release, governance, planned, successor]
---

# Campaign: v8.9 governance release

> **`status: planned` — not yet open.** Materialized at **Refit G2 / DP9** (signed 2026-07-24) from the staged
> stub `how/campaigns/campaign_refit/artifacts/stub_campaign_v8_9_release.md`. It **opens as its own campaign
> after Operation Refit closes** (a P0 charter session picks the codename, mints `CLAUDE.md` + a P1 mission).
> It ships via `skill_template_release`, per the v8.6/8.7/8.8 lineage — governance **8.8 → 8.9**, standard
> **v2.5 held**. Full ship-set + phase shape + release mechanics: the roadmap
> `how/campaigns/campaign_refit/artifacts/vnext_roadmap.md` §v8.9 + the stub.

## Goal

Ship the **v8.9 governance batch** ratified at Refit G2 to the public clone-and-run image `aDNA-Network/aDNA`:
the STATE.md graduation doctrine (anchor), the STATE-convention family, the path-convention doctrine, the
fork-kit AGENTS enforcement, the codename-collision note, the release-process leak hardening, and the
`compliance_checker.py` hardening. No normative change.

## Ship-set (7 items — from the ratified roadmap)

1. **STATE.md graduation** *(ANCHOR)* — new `skill_state_graduation` (+1 skill) + `STATE_history.md` seed +
   `state_history:` pointer + >100 KB auto-graduate tripwire + frontmatter-as-a-graduation-class. Source:
   `how/backlog/idea_upstream_state_history_graduation.md`.
2. **STATE-convention family** — `mission:` frontmatter key + `P<n>[/<count>]` phase-display grammar +
   `+adna-normalize-phase`. Sources: `idea_upstream_mission_frontmatter_key.md` ·
   `idea_upstream_phase_display_grammar.md`.
3. **Path-convention doctrine** — `~/aDNA/`-in-prose / absolute-in-execution. Source:
   `idea_upstream_path_convention_doctrine.md`.
4. **Fork-kit AGENTS enforcement** — `skill_project_fork` 4-file-kit gate + AGENTS seed + genesis carve-out.
   Source: `idea_upstream_fork_kit_agents_enforcement.md`.
5. **Codename-collision authoring note** — order/campaign templates. Source:
   `idea_upstream_codename_collision_grep_order_templates.md`.
6. **Release-process leak hardening** — into `skill_template_release`. Source:
   `idea_upstream_dev_vault_name_leak_sweep.md`.
7. **`compliance_checker.py` hardening**. Source: `idea_tool_compliance_checker_hardening.md`.

**Count impact:** +1 skill (32 → 33); possibly +1 template (`STATE_history.md` seed) — confirm at P1.
**Explicitly NOT carried:** the v2.6 candidates (`task` entity · `surface_composition_graph` subtype),
node-manifest fork-emission (Home-ADR-gated), and the Storyweave in-person deferred items.

## Phase shape (v8.7/v8.8 lineage — filled at open)

`P0 Charter → P1 Author riders → P2 Ratify (operator) → P3 Fire (the push IS the release: 5 version surfaces,
DE-LINK grep, dry-run-then-pause, tags-only v8.9, fresh-clone smoke).` Mechanics: the stub §"Release mechanics"
+ `how/skills/skill_template_release.md`.

## Provenance

Seeded by [[mission_refit_5_vnext_triage]]; ratified at [[ratification_record_refit_g2]] (DP9). Do not open
until Operation Refit closes.
