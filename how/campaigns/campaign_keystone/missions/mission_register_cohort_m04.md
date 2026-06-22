---
plan_id: mission_register_cohort_m04
type: plan
title: "Register the Cohort + Wire Lighthouse Composition (campaign close)"
owner: stanley
status: completed
campaign_id: campaign_keystone
campaign_phase: 4
campaign_mission_number: 4
mission_class: closeout
token_budget_estimated: 45
token_budget_actual: 55
created: 2026-06-22
updated: 2026-06-22
last_edited_by: agent_stanley
tags: [plan, campaign, keystone, cohort, manifest, lighthouse, closeout]
---

# Mission: Register the Cohort + Wire Lighthouse Composition

**Campaign**: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]]
**Phase**: 4 — Register Cohort + Wire Composition
**Mission**: 4 of 5 (terminal)

> The cohort is complete: **10 seeded software-deployment-graph stubs** (8 §A net-new + 2 §B overlap), every one a genesis-planning stub, local `git init` / no remote, router row STAGED `#needs-human`, four wrappers verified. This mission **registers** them in a single cohort manifest, **wires the composition interlock** to `Lighthouse.aDNA` (handoff only — its build gate is NOT lifted), runs the context-graduation close gate, and **closes Operation Keystone**.

## Goal

Produce the authoritative **cohort manifest** in `aDNA.aDNA` (every seeded stub listed; every disposition traceable to the de-confliction ledger §A/§B), stage the **Lighthouse composition handoff** in Lighthouse's coordination inbox (Lighthouse composes the cohort; it does not duplicate it), graduate any reusable knowledge, and clear the P4 exit gate to set the campaign `completed`.

## Exit Gate

Cohort AAR filed; `skill_context_graduation` run before close; `aDNA.aDNA/STATE.md` updated; **Lighthouse build gate NOT lifted** (read-only on its CLAUDE/STATE/MANIFEST; the interlock is a staged handoff in its `who/coordination/` inbox only). Commit-only, no push; no `.adna/` writes; no writes into Venus's (`Network.aDNA`) tree.

## Objectives

### 1. Cohort manifest (primary deliverable)
- **Status**: ✅ completed 2026-06-22
- **Description**: Author [[how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest|keystone_cohort_manifest.md]] — the single register of all 10 seeded stubs: roster (software · graph · persona · commit · class · fork-method · ledger row · router-row · remote), four-wrapper conformance audit, fork-method reconciliation (Caddy/Bitwarden), data-bearing / ADR-016 §8 split, seam summary, the Lighthouse node-stack profile mapping (proposal), and standing open items.
- **Acceptance**: 10/10 graphs listed; every disposition traces to a ledger §A/§B row; conformance = the four wrappers (not file count), audited.

### 2. Lighthouse composition handoff (WS-C interlock)
- **Status**: ✅ completed 2026-06-22
- **Description**: Stage [[../Lighthouse.aDNA/who/coordination/coord_2026_06_22_keystone_cohort_to_lighthouse|coord_2026_06_22_keystone_cohort_to_lighthouse.md]] in `Lighthouse.aDNA/who/coordination/` — registers the 10-graph roster (by reference to the manifest, never duplicated), proposes the `core/collab/inference/ops` node-stack profile mapping for ratification at **Lighthouse's own P0**, and surfaces Decision #5. Explicitly **does not lift Lighthouse's build gate** (gated on Git.aDNA's Integration-Architecture mission + P7).
- **Discipline**: read-only on `Lighthouse.aDNA/{CLAUDE,STATE,MANIFEST}.md`; the only write into Lighthouse's tree is the new coordination memo (mirrors the "Git.aDNA staged on the Git side" precedent).

### 3. Decision #5 surfaced (not resolved)
- **Status**: ✅ completed 2026-06-22 (surfaced in manifest §Open + handoff)
- **Description**: Name the open **AWSBootstrap ↔ Lighthouse ↔ cohort reconciliation ADR** (backlog [[how/backlog/idea_awsbootstrap_lighthouse_cohort_reconciliation|idea]]) as the campaign's standing open item. Resolving it is a separate ADR effort — out of scope for this manifest mission.

### 4. Context graduation (close gate)
- **Status**: ✅ completed 2026-06-22
- **Description**: Run [[how/skills/skill_context_graduation|skill_context_graduation]] against the campaign's deliverables; record the graduation report in the M4 AAR. The durable paradigm knowledge already graduated to permanent homes at P0 (pattern + ADR-037 + template); apply the criteria strictly (anti-pattern: graduating everything).

### 5. Campaign close
- **Status**: ✅ completed 2026-06-22
- **Description**: File the M4 AAR ([[how/missions/artifacts/campaign_keystone_m04_aar|campaign_keystone_m04_aar]]); fill the campaign master Completion Summary + Campaign AAR; set M4 → `completed` and `campaign_keystone` → `completed`; ledger sequencing note → "P4 cohort manifest done"; update `STATE.md` §campaign_keystone.

## Campaign Context

### Previous Mission Outputs
- M2 (`mission_seed_cohort_m02`) — 8 net-new §A stubs (the proven `template_software_graph_stub`).
- M3 (`mission_overlap_graphs_m03`) — 2 overlap §B stubs (Forgejo + Nebula) on ratified seams.

### Next Mission Inputs
- None — M4 is the terminal mission. The cohort manifest is consumed by `Lighthouse.aDNA` at **its** P0 (gated separately) and by the §C enrichment wave ([[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]], gated on Lab M-L13.6).

## Notes

- **Federate, never duplicate** holds at the manifest layer too: the roster lives once in `aDNA.aDNA`; Lighthouse gets a *reference* handoff, not a copy.
- **Conformance is the four wrappers**, audited 10/10 PASS — the Caddy/Bitwarden file-count divergence (346/358 vs lean-15) is documented and reconciled, never reworked.
- The cohort stays **genesis-planning stubs**: no install/deploy/infra is implied by registration. Live per-graph work remains each graph's own P-gated genesis.

## Completion Summary

**Completed 2026-06-22.** All five objectives delivered in one session (closeout cadence). Deliverables: the cohort manifest (`keystone_cohort_manifest.md`, 10/10 registered + conformance audit + profile mapping), the Lighthouse handoff (`coord_2026_06_22_keystone_cohort_to_lighthouse.md`, staged in Lighthouse's inbox, gate intact), the context-graduation report (in the M4 AAR), and the campaign close (master Completion Summary + Campaign AAR + STATE update). Operation Keystone is `completed`.

### Deliverables
- `how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest.md`
- `Lighthouse.aDNA/who/coordination/coord_2026_06_22_keystone_cohort_to_lighthouse.md`
- `how/missions/artifacts/campaign_keystone_m04_aar.md`
- campaign master + ledger + STATE updates

### Descoped
- **Decision #5 resolution** (AWSBootstrap ADR) — surfaced, not resolved (separate ADR effort).
- **§C enrichment wave** — out of campaign (gated on Lab M-L13.6; backlog-tracked).

### Key Findings
- The cohort was already 100% conformant on the real contract (four wrappers); the manifest is a *register*, not a remediation. The only "divergence" (file count) was a non-issue by design.

### Scope Changes
- None. M4 executed as authored in the campaign master.

## AAR

5-line AAR (SO#5); full report → [[how/missions/artifacts/campaign_keystone_m04_aar|campaign_keystone_m04_aar]].

- **Worked**: the manifest authored itself from ground-truth — a single scripted audit confirmed 10/10 four-wrapper conformance, so registration was mechanical and the close gate cleared first pass.
- **Didn't**: nothing blocking; the "cohort manifest" deliverable initially read as new design but is genuinely a register of already-settled facts.
- **Finding**: defining conformance as the four wrappers (not file count) at P0 is what let Caddy/Bitwarden diverge harmlessly — the manifest just records it, no rework needed.
- **Change**: none — the author-paradigm-before-seeding discipline (M0) paid its final dividend here; carry it to any future tier campaign.
- **Follow-up**: Lighthouse consumes the handoff at its P0 (gated); Decision #5 ADR open; §C enrichment wave gated on Lab M-L13.6.
