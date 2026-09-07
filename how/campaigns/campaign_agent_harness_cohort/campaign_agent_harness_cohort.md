---
campaign_id: campaign_agent_harness_cohort
type: campaign
title: "Operation Polyglot — agent-harness cohort: Codex.aDNA + ClaudeCode.aDNA seeded as software-element context graphs"
owner: stanley
status: active
phase_count: 2
mission_count: 2
estimated_sessions: "1 (charter+seed, done this sitting) + the graphs' own M00s (1-2 each, run in-graph)"
estimation_class: governance
priority: high
parent_campaign: null   # peer-in-method to campaign_dynamo / campaign_keystone, not a child
created: 2026-09-07
updated: 2026-09-07
last_edited_by: agent_fable_polyglot
tags: [campaign, agent_harness, codex, claude_code, software_element_graph, polyglot]
---

# Campaign: Operation Polyglot — the agent-harness cohort

> Codename grep-clearance: `grep -ril "Operation Polyglot" ~/aDNA` returned zero hits
> before adoption (2026-09-07, this sitting; template_campaign.md discipline).

## Goal

Diversify the network's agentic substrate beyond a single harness by giving each vendor
agent CLI the network operates with a governed software-element context graph (ADR-039):
**`Codex.aDNA`** (GPT Codex — installed and logging on this node since ≥2026-09-06, account
`science.stanley@stanley.science`, CLI/Desktop 0.153.4) and **`ClaudeCode.aDNA`**
(Claude Code — the network's primary harness, `claude` 2.1.185, whose operating knowledge
is currently scattered across ~57 template context copies). Each graph's M00 then designs
the genesis campaign that develops it into the complete operational center + knowledge hub
for its software. Open-harness local agents are named as a successor cohort candidate, not
chartered here.

## Context

⛩ Operator-ruled this sitting (2026-09-06 plan review, four rulings of record — see the
manifest §Rulings): fork now with seams at P0 · full build depth (stubs + missions + the
Canvas OpenAI backend + the Context codex source, built same-sitting in their owning
vaults) · SS OpenAI-lane GO · OpenAI credentials brokered as the Home C07 refresh.
Method precedent: Dynamo (cohort manifest + per-graph lean stubs + M00 fable missions);
anti-precedent: Hardware's full-scaffold fork (needed a de-template mission — the lean
Kubernetes-style stub is the model here).

## Phases & Missions

### Phase 1 (P1): Charter + seed (this sitting)
| Mission | Title | Tier | Sessions | Status |
|---------|-------|------|----------|--------|
| M1 | Cohort manifest + both stubs seeded + seam memos + staged router rows | fable | 1 | **done 2026-09-07** |

### Phase 2 (P2): The graphs' own M00s (run in-graph, not here)
| Mission | Where | Tier | Status |
|---------|-------|------|--------|
| Codex M00 | `Codex.aDNA/how/campaigns/campaign_codex_genesis/missions/` | fable | planned |
| ClaudeCode M00 | `ClaudeCode.aDNA/how/campaigns/campaign_claudecode_genesis/missions/` | fable | planned |

**Exit gate**: both M00s operator-accepted (ADR-000s ratified, seams ratified or
explicitly deferred with named triggers, genesis campaign designs accepted). This campaign
then closes with an AAR; the graphs carry their own campaigns forward.

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Parallel truth vs the 57 template `claude_code/` copies | High | ClaudeCode ADR-000 names the canonicalization path (through Rosetta/`skill_template_release`, never editing `.adna/` directly); until it runs, the template is the quarry and the graph claims nothing canonical |
| Seam collision with RareAnthropic (Anthropic-as-vendor vs Claude-Code-as-software) | High | Seam memo staged; drawn in ADR-000; ratify at P0 — patient-safety-class stakes named |
| Stubs accrete config-mutation aspiration before P0 | Medium | Standing order: describe, don't operate; no `~/.codex`/`~/.claude` writes until P0+ rules them |
| Cohort asymmetry papered over | Medium | Manifest §Asymmetry is a standing section; the two M00s are told they will NOT produce symmetric campaigns |
