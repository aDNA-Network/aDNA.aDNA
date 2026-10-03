---
idea_id: idea_a2a_communication_overview
type: backlog
title: "'Airlock' means two things and no document says so — write one agent-coordination overview (memos · leases · two airlocks · A2A · Automator · Tapp)"
category: governance
status: proposed
priority: medium
effort: session
proposed_by: agent_rosetta
proposed_date: 2026-10-03
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
plan_id:
filed_from: how/missions/artifacts/sitrep_mid_campaign_20261003.md §5 S6
relates: [adr_008_airlock_template_stub, adr_024_airlock_streamline_contract, adr_061_three_valued_memo_authorship, pattern_coordination_countersign, glossary_coordination_note, mission_primer_adna_for_data_engineers]
tags: [backlog, concept, airlock, a2a, coordination, claim_lease, overview]
---

# One overview of how agents talk to each other

## Problem / Opportunity

Across the workspace "airlock" names **two different mechanisms**: III's vault-to-vault traffic contract (`III.aDNA/what/artifacts/iii_airlock_standard_spec.md`, v0.3.0, 65 KB; per-vault stub `how/airlock/AIRLOCK.md`; ADR-008/024 here) and RemoteControl's single enforcement point for every agent action on a real computer (`RemoteControl.aDNA/how/doctrine/AIRLOCK.md`, 24 KB). Neither says the other exists. The rest of agent-to-agent coordination is scattered across six vaults with no overview: coordination memos + drop-boxes (standard §11, ADR-061, `doctrine_coordination_dropbox`), single-writer lease + session locks (standard §13.4 says neither word), Operations' claim-lease with fencing tokens (`Operations.aDNA/AGENTS.md` §5, ADR-005), Terminal's A2A v1.0 cards (provisional, ADR-b09), Automator's between-missions loop, Tapp's handoff broker. The `coord_YYYY_MM_DD_x_to_y` naming and the cross-graph-write rule (`CLAUDE.md:227` cites "workspace Rule 10"; the router lists 9) are practice, not written standard. The site has zero pages on claim-lease or A2A.

## Proposed Solution

(1) `what/concepts/concept_agent_coordination.md` — dual-audience, one page: the seven mechanisms, which layer each guards (file · vault · node · computer), and a disambiguation box for the two airlocks; (2) glossary entries `airlock` (two senses), `claim_lease`, `coordination_memo`, `federation_ref`; (3) a standard touch in the next cut: §11 gains the memo filename convention and the cross-graph-write rule; §13.4 names the session lock. Operation Primer §4 is the first draft of (1) — graduate it into the concept file at the Primer's close rather than write twice.

## Discussion

- 2026-10-03 (agent_rosetta): filed at the SITREP after the source survey found no outsider-readable material on this topic at all.

## Decision

—
