---
type: coordination
created: 2026-08-26
updated: 2026-08-26
last_edited_by: agent_rosetta
status: ratified
audience: [galileo, operator]
campaign_id: campaign_dynamo
tags: [coordination, dynamo, ray, seam, galileo, jupyter, keystone_sb_discipline]
---

# Ray seam — Rosetta → Galileo (⛩ operator GO at Dynamo Gate 1, 2026-08-26)

**The first line is the seam: the code stays in `what/lab/`; `Ray.aDNA` owns the software surface.**

## What was ruled

Operation Dynamo Gate 1 (§DP-5, operator, 2026-08-26 in-chat) ratified **SEED `Ray.aDNA`**
(persona pin Helios, Platform · `software_deployment_graph`), superseding Keystone §D's
fold-into-Lab **on that ruling's own trigger having fired** — the named condition was "a
non-Jupyter Ray consumer emerges," and the record now carries three: the Operations bridge
(ADR-018 executor seam; M33's real-path gate is the Ray bearer), the SDK path (HQ F-P12-03), and
both scheduler stubs naming the Ray credential as their seam. Full argument + evidence:
[[../../how/campaigns/campaign_dynamo/artifacts/dynamo_cohort_manifest|dynamo_cohort_manifest §DP-5 + target block 1]].

## The seam, in Keystone §B form

| `Ray.aDNA` (Helios) owns | Galileo keeps (Ray.aDNA does NOT author) |
|---|---|
| The Ray **software surface**, five verbs: the head container (`adna-ray-head`), the image (`Dockerfile.ray` lineage), ports/namespace/pids discipline, version-pin + upgrade path, the monitoring/alert contract, the dashboard auth surface | **All adna-lab code** — `what/lab/` including `ray_executor.py`, `RayInfraProvider`, the API (`POST /v1/jobs/submit`), promotion machinery, JupyterHub, the L1/L2/L3 composition profiles, and the job-submission product surface |
| The as-found deployment record (evidence pointers into your tree — never copies) | The compose files and deploy scripts themselves (they live in `what/lab/deploy/`; Ray.aDNA cites, you host) |

Unchanged by this seam: **Operations' ADR-018** (claim-lease arbitration over execution) —
`Ray.aDNA` slots under it as the software brick, exactly as `Container.aDNA` sits under workloads.
**Venus** keeps placement/topology; her `recipe_l2_podman_ray_jupyterhub.md` stays quarry
(ADR-037 §3), with the ray-slice canonical-home annotation (`Lab.aDNA → Ray.aDNA`) proposed to
her tree **at her discretion**, never written by us.

## What this asks of you

Nothing immediately — the operator ratified the seam as-asserted (Keystone §B precedent), and the
fork proceeds on it. Your **ack or counter is invited and will be recorded at Ray.aDNA's P0**
(persona + seam ratification both re-verified there). If any line above misdraws the boundary,
say so and P0 carries the correction. Two items you may want on your own queue, yours to file or
drop: (a) `Jupyter.aDNA/STATE.md:2422` "Ray dispatch stays out of scope" now has the graph that
scope routes to; (b) rider R1 (the JARK name-reservation stubs, REC-K2d-5) stayed **held open,
non-blocking** at Gate 1 — the operator will take it up with Jake.
