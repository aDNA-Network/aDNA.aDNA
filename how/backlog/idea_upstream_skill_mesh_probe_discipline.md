---
type: backlog_idea
status: proposed
priority: medium
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
filed_from: Network.aDNA/who/coordination/coord_2026_08_03_venus_to_rosetta_upstream_four_operational_patterns.md (read at the source 2026-10-04; the memo never reached this tree — its 2026-10-04 nudge did)
filing_authorization: skill_upstream_contribution (operator plan-time ruling 2026-10-03 PDT — adopt #1 as a node-vault skill candidate)
upstream_target: aDNA-Network/aDNA
source_skill: Network.aDNA/how/skills/skill_mesh_probe_discipline.md (status active, updated 2026-08-18, eight rules)
disposition: "v8.13 lane — skill-to-template — ⛩ ruled 2026-10-04 (Stanley, plan-time AskUserQuestion, session_stanley_20261004_041949_garnier_g_inbox_primer_o4_s21b); status stays proposed until the release gate executes it; Network's copy is canonical until then"
tags: [backlog, upstream, skill, mesh, probe, reachability, network_operations, v8_13]
---

# Idea: `skill_mesh_probe_discipline` as a base template skill (node-vault class)

## Problem

Every node vault whose agent probes a peer over a private mesh re-learns the same two failure modes — the cold-tunnel false negative (the first probe to an idle peer fails while the tunnel warms) and the unnamed vantage (a DOWN recorded without saying from where). Network.aDNA paid for the rule at least three times (its F-S315 · F-S324-01 · F-S337-01 · F-S382-01 precedents) and consolidated it into one process skill with eight rules: warm-then-measure; name the vantage; cross-check before DOWN; re-probe others' claims; bound with `timeout`; only the far side proves access; recovery claims bounded + close re-read; an expected-intermittent posture declared, not discovered. None of it is Network-specific.

## Proposed shape

A base template skill at `how/skills/skill_mesh_probe_discipline.md` (`skill_type: process`), carrying Network's eight rules verbatim in substance, with the mesh specifics (the overlay's name, the address block, the named vantages) **parameterized** as `{{MESH_NAME}}` / `{{MESH_CIDR}}`-class tokens the fork step fills, and the Network precedents kept as a *provenance* section, not as rules. It composes with [[../../what/patterns/pattern_channel_proof|pattern_channel_proof]] (proposed the same day): the skill is the *probe* half (how to ask whether a peer is up), the pattern is the *proof* half (who gets to say a channel works).

## Why upstream

Rule 6 of the skill — *only the far side proves access* — is the same sentence as the channel-proof pattern's rule 1; shipping the skill without the pattern (or the reverse) leaves a node with half the discipline. Natural home: the node-vault skill set beside `skill_node_health_check`, referenced from `Home.aDNA`'s mesh inventory. Fold rides the v8.13 release (`skill_template_release`), Network re-points on landing.
