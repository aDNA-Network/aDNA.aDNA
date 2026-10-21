---
type: backlog
idea_id: idea_upstream_executor_lane_and_gate_vocabulary_drift
title: "Mission `executor_lane` values and the meaning of `gate:` have drifted from the template definitions (finding; not fixed at v8.14)"
category: vault_infra
status: idea
priority: low
effort: quick
proposed_by: agent_rosetta
created: 2026-10-21
updated: 2026-10-21
last_edited_by: agent_rosetta
upstream_target: aDNA-Network/aDNA (template_mission.md + template_campaign_mission.md field comments)
release_window: unassigned   # a vocabulary ruling, not a v8.14 row (S2-R1)
filed_from: v8.14 ledger §4 Q1 review, session_stanley_20261021_040841_v8_14_rulings_and_rows
relates: [template_mission, template_campaign_mission, pattern_model_tiered_campaign_execution, v8_14_release_ledger]
tags: [backlog, upstream, templates, executor_lane, gate, vocabulary, finding]
---

# `executor_lane` and `gate:` mean different things in different vaults

Counted 2026-10-21 `[D]` across `~/aDNA/*/how/**/mission_*.md` frontmatter (shim directories double-count).

- **`executor_lane`** (155 files, about 9 vaults). The template enum is `oauth | key | local`. Values in use:
  `oauth` (~110 counting quoted variants) · `claude_code_mac` (21) · `hosted` (15, **this vault's own ARCADE
  missions**) · `claude_desktop_via_summons` (5) · `claude_desktop` · `subscription` · a two-stage
  `claude_code_s1_then_claude_desktop_s2`. The template names the *route* (how the executor is reached); the fleet
  also writes the *client* (which app).
- **`gate:`** (366 files, about 20 vaults). `template_mission.md` defines it as a *pointer to the gate the mission
  is waiting on*, set with `awaiting_operator` / `escalated`. Most of the fleet writes **exit-criteria prose** in it
  instead ("X5 green — …").

Plain version: two fields have one meaning in the starter kit and two or more in practice, so a tool reading them
across vaults can't trust what they say.

## Why not fixed at v8.14

S2-R1 added both fields to `template_campaign_mission.md` verbatim from `template_mission.md`, so the two
templates match. Choosing what the fields *should* mean is a vocabulary ruling, and this vault is one of the
drifters. Options for that ruling: widen `executor_lane` to route + client, or add a separate `executor_client:`;
split `gate:` into `gate:` (pointer) + the existing `## Exit Gate` section (prose).

## Related

- [[v8_14_release_ledger]] §4 S2-R1.
- [[pattern_model_tiered_campaign_execution]]: where tier vs lane is defined.
