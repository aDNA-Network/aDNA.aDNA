---
type: backlog_idea
idea_id: idea_tinycast_fleet_adoption_pattern
title: "A fleet-adoption pattern for Tinycast (OQ-15): consumer graphs carry how/federation/tinycast/ + a federation_ref and DECLARE palette entries under the Palette Contract — never write Tinycast's stores"
created: 2026-10-03
updated: 2026-10-03
status: proposed
priority: low
last_edited_by: agent_rosetta
source: "Ariel (Tinycast.aDNA) — who/coordination/inbox/coord_2026_09_26_ariel_to_rosetta_fleet_adoption_and_oip_shelf.md, item 1 (OQ-15)"
relates: [pattern_software_element_context_graph, adr_039_software_element_context_graph_umbrella, adr_045_federation_wrapper_placement, idea_campaign_operator_interaction_patterns_unification]
tags: [backlog, idea, tinycast, federation, palette_contract, oq_15, proposed]
---

# Idea: a fleet-adoption pattern for Tinycast (OQ-15)

**Source.** Ariel's 2026-09-26 memo, filed at Rosetta's reply sitting 2026-10-03 (operator accept-all on the rulings packet, row C4). No action is needed now; this records the shape so it is not re-derived.

**Shape (Ariel's, under ADR-039/045):** a consumer graph (a) carries `how/federation/tinycast/` with a `federation_ref` to `Tinycast.aDNA`; (b) **declares** its palette entries under the Palette Contract (`Tinycast.aDNA/what/specs/spec_palette_contract.md`) and never writes Tinycast's stores; (c) drives the node, if it must, through RemoteControl's policy (proposed to Talos the same day). Existing adopters at filing: Zen (Hyper chords) · Automator (C30 "Duty officer" row) · Socials (Stream Deck deep links).

**Trigger.** Fires together with Tinycast's standing `idea_palette_contract_lift_to_adna.md` — when a **second carrier** consumes the Palette Contract, the contract lifts into the standard and this pattern is written as its consumer side. Until then it is a Tinycast-local practice with three adopters.

**Not** a new category and not a release row; it is the software-element pattern applied to one more software.
