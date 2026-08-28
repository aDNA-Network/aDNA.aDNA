---
type: governance
subtype: campaign
campaign_id: campaign_dynamo
created: 2026-08-26
updated: 2026-08-26
last_edited_by: agent_rosetta
status: active
tags: [governance, campaign, dynamo, compute_cohort, keystone_sibling]
---

# CLAUDE.md — Campaign: Operation Dynamo

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_dynamo` |
| Owner | stanley |
| Status | ⛩ completed 2026-08-28 (operator close-ruling, bundled at the Ray M00 P0 gate; per-graph ladders continue under their own governance) |
| Persona | Rosetta (this vault triages the cohort; each seeded graph carries its own persona) |

## Quick Start

1. Read this file.
2. Read [[artifacts/dynamo_cohort_manifest|dynamo_cohort_manifest.md]] — the triage register and
   the ⛩ Gate 1 ruling record (frontmatter `status_note` carries the rulings).
3. Read [[campaign_dynamo|campaign_dynamo.md]] — master.
4. Per-graph work happens **in each graph** under its own CLAUDE.md (workspace Rule 2), starting
   from its `Resume-Here`.

## Standing Orders (campaign-specific — Keystone lineage)

1. **Ground truth before write.** Re-read the owning vault's STATE/CLAUDE at the object; never
   rule from a snapshot (every Dynamo evidence file carries a `snapshot_date` for this reason).
2. **Federate, never duplicate.** Seeded graphs point into owners' trees (Galileo's lab code,
   Venus's node-mirrors, Operations' ADR-018); they copy nothing.
3. **Stubs claim nothing.** The two forward-planning stubs (Kubernetes, Argo) state "nothing is
   running" in their own first lines; any deployment claim is a defect.
4. **Seams are ratified, not assumed.** Ray's Galileo seam was operator-GO'd at Gate 1
   as-asserted; his ack/counter is invited and recorded at Ray P0.
5. **Router rows STAGED `#needs-human`** — insertion is an operator act (put to the operator at
   Gate 2).
6. **Local git only** — no remotes, nothing pushed, in any cohort graph.
