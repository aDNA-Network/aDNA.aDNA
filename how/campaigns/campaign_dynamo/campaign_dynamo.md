---
campaign_id: campaign_dynamo
type: campaign
title: "Operation Dynamo — Compute Cohort Genesis & Triage"
owner: stanley
status: active
phase_count: 6   # P0-P4 = 5; +P5 refit (mission_refit_m05), added 2026-08-28
mission_count: "5 phase-acts (P0 recon · P1 manifest · P2/P3 genesis+campaigns · P4 consolidation · P5 refit); per-graph missions live in each graph"
estimated_sessions: "1-2 (executed largely in one sitting) + per-graph genesis ladders"
estimation_class: governance-broad
priority: high
parent_campaign:
created: 2026-08-26
updated: 2026-08-28
last_edited_by: agent_rosetta
tags: [campaign, dynamo, compute_cohort, keystone_sibling, ray, hardware, kubernetes, argo]
---

# Campaign: Operation Dynamo — Compute Cohort Genesis & Triage

> **⏭ Phase status (updated 2026-08-28):** P0 (recon) ✅ · P1 (manifest) ✅ · ⛩ **Gate 1 RATIFIED**
> (operator, in-chat — rulings in the manifest `status_note` + §DP blocks) · P2 (genesis: 4 graphs
> seeded) ✅ · P3 (campaigns + adjacent deltas) ✅ · ⛩ **Gate 2 RATIFIED** ✅ · P4 (router `e751c12`
> · HQ `b527a37` · AAR) ✅ · **P5 refit = the live edge.**
>
> *This block read "Gate 2 + P4 = the live edge" for two days after both had fired (audit finding
> **F7**). P5 (`missions/mission_refit_m05.md`) closes 15 findings from the 2026-08-27 fresh-eyes
> audit of the 08-26 seeding — including this one.*

## Commander's Intent (from the operation order, 2026-08-26)

Bring the compute cohort — Hardware · Acceleration · Argo · JupyterLab · Kubernetes · Ray — from
absent/embryonic to **campaign-ready**: each target stood up as a governed graph or formally
disposed, evidence-first, operator-gated at every load-bearing decision. Compute sibling of
Operation Keystone.

## The record

- **P0 recon** (read-only, 3 parallel lanes): doctrine/precedent · six-target evidence sweep ·
  codename+persona collisions + strategic frame. Headline: **Ray LIVE on L2, ungoverned**;
  JupyterLab deliberately absent (Galileo's brick); Argo formally rejected (ADR-018); K8s
  dormant-assets-only; hardware facts owned, vocabulary authorless; all six names squatted as
  member-authored repos on the org (S254).
- **P1**: [[artifacts/dynamo_cohort_manifest|the cohort manifest]] — roster, six target blocks,
  five decision points, riders.
- **⛩ Gate 1** (operator, 2026-08-26): DP-1 **A** (JupyterLab = facet, no graph) · DP-2 **B**
  (K8s stub, pre-ruled at plan review) · DP-3 **A** (Hardware one-graph-two-legs) · DP-4 **B**
  (Argo stub, pre-ruled) · DP-5 **A** (SEED Ray, superseding Keystone §D on its fired trigger) ·
  R1 held open · R2 **read-quarry allowed** (attribution, never verbatim) · R3 Dynamo cohort, no
  composer claim · R4 inline gate.
- **P2/P3**: four graphs seeded (roster + commits in the manifest), each with genesis campaign +
  execution-ready first missions (Ray M00–M3 · Hardware M00–M3 · K8s M00 · Argo M00 — the stub
  M00s are **fable-tier meta-planning** per the operator's plan-review ruling). Seam memo to
  Galileo (ratified, ack invited) · contradiction memo to Venus (lsu_l2) · courtesy memo to
  Pandora (staged sender-side).
- **P4** ✅ (2026-08-26/27): router cohort row inserted under the Gate 2 ruling (`e751c12`) ·
  aDNALabs STATE pointer (`b527a37`) · AAR · commit sweep · SITREP.
- **P5 (refit)** — `missions/mission_refit_m05.md`, executed 2026-08-28. Closes the 15 findings of
  the 2026-08-27 adversarial audit: wrapper schema migration ×11 · Home registration staged ·
  three owed memos delivered · Ray's `data_bearing` string, guarded-lane target and five dead M00
  refs · gitleaks hooks ×4 · Hardware de-templated + M04 authored · router prose · this record.

## Success criterion (from the order)

A fresh session, pointed at any cohort graph, can execute that graph's first mission from the
campaign file alone. Manifest, router, and STATE files agree. Nothing invented; everything gated.
