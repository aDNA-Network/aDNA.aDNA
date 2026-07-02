---
type: idea
status: deferred
created: 2026-06-20
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_keystone
tags: [idea, keystone, retrofit, deployment_graph, four_wrappers]
deferred_owner: "operator + per-vault personas"
deferred_trigger: "operator greenlight per vault (Lab arm gated on Lab M-L13.6 deploy); Keystone core complete, this is follow-on"
---

# Existing software-surface Platforms — adopt the deployment-graph paradigm (four-wrapper retrofit)

## Idea

Several existing vaults are already **software-surface Platforms** (they install/operate/configure a piece of software) but predate the [[what/patterns/pattern_software_deployment_graph|deployment-graph paradigm]] and carry only some of the four conformance wrappers (`git/` · `feedback/` · `iii/` · Home.aDNA credential routing — [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §2). Retrofit them rather than fork duplicates. **Enumeration only — write into none of these vaults; each adoption is a staged coord memo to that vault's persona (Standing Rule 10), structured as a mission in the target vault's own campaign.**

## Per-vault enumeration (recon-ranked)

| Vault | Current state | Retrofit / mission | Coord-memo target |
|-------|---------------|--------------------|-------------------|
| **Lab.aDNA** (Galileo) | ¾ conformant — has Home.aDNA credential routing + Git-ops doctrine | **Reference implementation — now formally carries M2's scoped-out Objective 6** ([[how/campaigns/campaign_keystone/missions/mission_seed_cohort_m02\|mission_seed_cohort_m02]] close 2026-06-22). Add `feedback/` + `iii/` (+ formalize the `git/` wrapper). **Gated on Lab M-L13.6 live deploy** — spin up a dedicated mission when it fires (touches the Lab tree; not a seed session). | Galileo |
| **Harness.aDNA** (Panacea/Stanley) | Full deploy ladder; `iss/` present | Add `feedback/` (clinical AAR loop fits the argus_loop) + `git/` + credential-routing | Harness persona |
| **ComfyUI.aDNA** (Vulcan) | Mid-re-genesis (M03) | Inject the paradigm + four wrappers **during M03**, before it hardens | Vulcan |
| **Obsidian.aDNA** | Deployment graph by intent (install/config/operate/update Obsidian) | Add the four wrappers; align to the subtype | persona-TBD@P0 |
| **Terminal.aDNA** (Berthier) | Deployable terminal (cmux soft-fork) | Add `feedback/` + `git/` + credential-routing | Berthier |
| **Warp.aDNA** (Escoffier) | Config-overlay; **live genesis (P3b)** | `feedback/` + `iii/` + credential (`git/` N/A). **Operator-cleared staged memo only** — do not write at the live gate | Escoffier |
| **Spacemacs.aDNA** (Daedalus) | v1.0.0 complete | DEFER / light-touch — retrofit only if it re-opens | Daedalus |

## Why now

The paradigm is fresh ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]] P0 ratified 2026-06-20). Retrofitting the existing fleet makes the four wrappers a true fleet standard rather than a net-new-only convention. AWSBootstrap.aDNA is handled separately (it needs a scope-reconciliation ADR, not a simple retrofit — see [[how/backlog/idea_awsbootstrap_lighthouse_cohort_reconciliation|that idea]]).

## Next step

When the operator greenlights, structure each retrofit as a mission in the target vault's campaign via a staged coord memo. Do not batch-write across vaults.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: operator + per-vault personas. Trigger: operator greenlight per vault (Lab arm gated on Lab M-L13.6 deploy); Keystone core complete, this is follow-on. Ratified at Champollion G0 (D2).
