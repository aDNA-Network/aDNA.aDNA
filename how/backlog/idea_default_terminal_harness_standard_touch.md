---
type: backlog
idea_id: idea_default_terminal_harness_standard_touch
title: "Recommended-default terminal + harness — spec_platform_ecosystem note, node-bootstrap hook, and a 'recommended default entry' doc"
status: deferred
proposed_by: agent_berthier (Terminal.aDNA, Operation Gateway gw_p0)
created: 2026-06-11
updated: 2026-07-02
last_edited_by: agent_rosetta
source_review: Terminal.aDNA/what/context/review_ecosystem_positioning_20260611.md (E5)
posture_ref: Terminal.aDNA/what/context/gateway_access_point_posture.md (§1, §4)
tags: [backlog, idea, standard_touch, platform_ecosystem, default_access_point, node_bootstrap, onboarding, proposed, cross_vault_proposal]
deferred_owner: "Terminal.aDNA (Berthier) + Rosetta"
deferred_trigger: "Terminal EP5 missions ex_20/ex_23 + the access-point threat-model mission (only the paper spec note can land pre-trigger)"
---

# Idea — Recommended-default terminal/harness standard-touch (proposal; your standard, your gate)

## Problem

The operator directed (2026-06-11) that Terminal.aDNA × Harness.aDNA become the network's **default access point** — but the standard has no concept of a recommended default: the new-user path (`git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`) names no terminal/harness; `skill_node_bootstrap_interview` (19 questions) has no terminal hook; no "what should I install to work this way" doc exists. "Default" without a hook is a wish.

## Proposal (3 pieces, separable)

1. **`spec_platform_ecosystem.md` — recommended-defaults note.** One short subsection (or a column on the active-platform table): Terminal.aDNA = recommended default terminal; Harness.aDNA = recommended default harness; **explicitly recommended-not-required** — `spec_terminal_harness_contract.md` stays any-terminal × any-harness; the default is an onboarding kindness, never a coupling. (Keeps the §5 provider-generic constraint honest.)
2. **Node-bootstrap hook.** `skill_node_bootstrap_interview` gains ONE optional question ("Install the recommended terminal — Terminal.aDNA — on this node?") routing to Terminal's onboarding runbook (`ex_20`) / first-run wizard (`ex_23`). **Sequencing guard: do not land this hook until those Terminal missions exist (their EP5)** — a hook pointing at nothing teaches nothing. Hestia (Home.aDNA) consulted as install/inventory + Rule-6 credential owner.
3. **"Recommended default entry" doc.** Lives in aDNA.aDNA (the standard teaches the path; suggested `what/guides/` or beside the workspace README). **Terminal authors the draft → aDNA.aDNA owns placement + final text → ContextCommons consumes it for curriculum.** Contents: what the pair gives you · platform-tier table (full macOS / SSH-remote / Linux-substrate / WSL2 — drafted at `gateway_access_point_posture.md` §4) · install path · the not-required clause.

## Binding caveat carried from the Terminal-side posture

Paper rows (1, 3-draft) may land at your convenience; **network-facing promotion** (hook live + curriculum pointing at the entry doc) waits on Terminal's access-point **threat-model mission** (`Terminal.aDNA/how/backlog/idea_access_point_threat_model.md`) — recommending a default multiplies unscoped credential/permission/ingestion surfaces by every user who follows it.

## Who does what

aDNA.aDNA rules on all three (your spec, your skill, your shelf). Terminal pre-commits: entry-doc draft on request; onboarding missions (`ex_20`/`ex_23`) remain Wheelhouse EP5 scope. Chase row open at `Terminal.aDNA/who/coordination/coord_log_p4c_crossvault_chase.md`.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Terminal.aDNA (Berthier) + Rosetta. Trigger: Terminal EP5 missions ex_20/ex_23 + the access-point threat-model mission (only the paper spec note can land pre-trigger). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — trigger: operator elects the recommended-default terminal/harness standard-touch (explicitly operator-gated). Owner: operator + Terminal/Warp. See [[vnext_roadmap]] §Deferred-with-trigger.
