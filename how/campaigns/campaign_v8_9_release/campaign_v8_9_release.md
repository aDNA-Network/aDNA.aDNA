---
campaign_id: campaign_v8_9_release
type: campaign
title: "v8.9 governance release (Operation Palimpsest) — ship the Refit-M5 vNext batch to the public template image"
codename: "Operation Palimpsest"
owner: stanley
persona: rosetta
status: active           # OPENED 2026-07-24 (P0 Charter, session_2026-07-24_palimpsest_p0_charter) — operator election "continue the campaign" post-Refit-close; codename Palimpsest chosen. Fires via skill_template_release at P3.
phase: P0/3              # P0 Charter (active) → P1 Author → P2 Ratify (operator) → P3 Fire
opened_when: "2026-07-24 — operator opened post-Operation-Refit-close; P0 charter session minted CLAUDE + P1 missions + codename Palimpsest"
governance_bump: "8.8 → 8.9"
standard_version: "v2.5 (held — no normative change)"
seeded_by: campaign_refit / M5 vNext triage
source_roadmap: how/campaigns/campaign_refit/artifacts/vnext_roadmap.md
ratified_at: "Refit G2 / DP9 (2026-07-24) — how/campaigns/campaign_refit/artifacts/ratification_record_refit_g2.md"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [campaign, v8_9, palimpsest, release, template_release, governance, active, successor]
---

# Campaign: v8.9 governance release — Operation Palimpsest

> **`status: active` — OPENED 2026-07-24 (P0 Charter).** Materialized at **Refit G2 / DP9** (signed 2026-07-24)
> from the staged stub `how/campaigns/campaign_refit/artifacts/stub_campaign_v8_9_release.md`, and **opened** the
> same day on the operator's "continue the campaign" election after Operation Refit closed (G3). Codename
> **Operation Palimpsest** (operator-chosen — the STATE-graduation anchor: overwrite the live surface, preserve
> every earlier layer verbatim; renameable at this campaign's own G1). It ships via `skill_template_release`, per
> the v8.6/8.7/8.8 lineage — governance **8.8 → 8.9**, standard **v2.5 held**. Full ship-set + phase shape +
> release mechanics: the roadmap `how/campaigns/campaign_refit/artifacts/vnext_roadmap.md` §v8.9 + the stub.
>
> **Phase pointer:** **P0 Charter COMPLETE** (this file + CLAUDE + P1 missions minted). **⏭ Next = P1 Author**
> — M1 anchor first (`mission_v8_9_1_anchor_state_graduation`), then M2 convention+machinery batch
> (`mission_v8_9_2_convention_machinery_batch`). Both are dev-side authoring; **nothing ships to `.adna/` until
> P3**, and P2 ratification + the P3 dry-run GO are operator gates.

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

## Phase shape (v8.7/v8.8 lineage — opened at P0, 2026-07-24)

`P0 Charter (✅ done) → P1 Author riders → P2 Ratify (OPERATOR GATE) → P3 Fire (the push IS the release: 5
version surfaces, DE-LINK grep, dry-run-then-pause, tags-only v8.9, fresh-clone smoke).` Mechanics: the stub
§"Release mechanics" + `how/skills/skill_template_release.md`. **Two hard operator gates** — P2 ratification
(§7.7) and the P3 dry-run-then-pause GO. Agents author + stage; the operator rules and signs.

## Missions (P1 — Author riders)

| # | Mission | Ship-set items | Tier · est | Status |
|---|---------|----------------|-----------|--------|
| M1 | [[mission_v8_9_1_anchor_state_graduation]] — **ANCHOR** | 1 (STATE.md graduation: skill + template + tripwire + doctrine) | opus · ~80 kT | planned |
| M2 | [[mission_v8_9_2_convention_machinery_batch]] | 2–7 (STATE-convention family · path doctrine · fork-kit · codename note · leak-sweep · compliance_checker) | opus · ~90 kT | planned |

**Sequencing:** M1 anchor first (it is load-bearing + realizes the 32 → 33 skill count); M2's convention touches
co-land, machinery hardening (items 6–7) can trail. M2 may split at the convention/machinery seam. On both
missions' close → **P2 ratification gate** (operator), then **P3 fire**.

## Provenance

Seeded by [[mission_refit_5_vnext_triage]]; ratified at [[ratification_record_refit_g2]] (DP9). **Opened
2026-07-24** (P0 Charter, `session_2026-07-24_palimpsest_p0_charter`) on the operator's post-Refit-close
"continue the campaign" election; codename **Operation Palimpsest** chosen (AskUserQuestion).
