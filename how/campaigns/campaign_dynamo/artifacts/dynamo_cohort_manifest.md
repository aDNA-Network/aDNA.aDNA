---
type: artifact
artifact_class: cohort_manifest
created: 2026-08-26
updated: 2026-08-28
status: active
status_note: "⛩ GATE 1 RATIFIED 2026-08-26 (operator, in-chat inline ruling table): DP-1 A · DP-2 B (pre-ruled) · DP-3 A · DP-4 B (pre-ruled) · DP-5 A · R1 held open (#needs-human, non-blocking) · R2 read-quarry allowed · R3 as proposed · R4 inline. ⛩ GATE 2 RATIFIED same day: all four genesis campaigns approved as authored; ROUTER COHORT ROW INSERTED under the gate's authority (Home.aDNA commit e751c12; the four per-graph staged memos flipped satisfied). P2/P3 executed — see the Seed register. AAR: ../aar_operation_dynamo_20260826.md."
campaign_id: campaign_dynamo
campaign_phase: 1
last_edited_by: agent_rosetta
tags: [dynamo, compute_cohort, manifest, roster, triage, ray, hardware, kubernetes, argo, jupyterlab, acceleration]
---

# Operation Dynamo — Compute Cohort Manifest

The triage-and-disposition register of the **compute-infrastructure cohort**: Hardware ·
Acceleration · Argo · JupyterLab · Kubernetes · Ray. Operation Dynamo is the **compute sibling of
Operation Keystone** — same paradigm, same disposition discipline, different subject: not the
node-stack software Lighthouse composes, but the compute substrate jobs actually run on.

**Paradigm**: [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]] ·
**Category ruling**: [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (Platform ·
`software_deployment_graph`) + [[what/decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]
(the cross-category lens) · **Wrapper placement**: [[what/decisions/adr_045_wrapper_placement_in_triad|ADR-045]] ·
**Skeleton**: [[how/templates/template_software_graph_stub|template_software_graph_stub]] ·
**Precedent instruments**: [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|keystone_deconfliction_ledger]] +
[[how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest|keystone_cohort_manifest]].

**Disposition vocabulary** (Keystone): **SEED** (net-new graph) · **SCOPE** (overlap; seed only
after the owner ratifies the seam) · **ENRICH** (existing vault retrofits) · **DEFER** (reasoned,
not now) · **DO-NOT-CREATE** (out of paradigm).

**Codename**: "Dynamo" grep-cleared fleet-wide 2026-08-26 (only `torch._dynamo` vendored refs; per
the collision-grep guardrail in `template_campaign.md`, adopted v8.9 M2).

> **Dated-state discipline, from day one:** every roster row carries a `State (YYYY-MM-DD)` column.
> Keystone's 2026-08-19 refresh found **all ten** of its rows stale within two months of seeding —
> this manifest inherits the fix rather than the lesson.

## Recon provenance (Phase 0, 2026-08-26, read-only)

Three parallel sweeps: (1) doctrine + Keystone precedent; (2) six-target evidence sweep across
STATE files, inventories, backlogs, Archive, and the live L2 stack records; (3) codename/persona
collision + strategic frame (`aDNALabs.aDNA` Cadence-era STATE, `Home.aDNA` watch items). Every
claim below carries a path. Unknowns carry `#needs-human` — nothing is invented.

**Cross-cutting find (context, not scope):** all six target names exist as repos on the
`aDNA-Network` GitHub org — **member-authored by Joshua Weg** (job-interview prep; flipped private
2026-08-26), dispositioned at
`aDNALabs.aDNA/how/campaigns/campaign_estafette/artifacts/thirteen_repos_disposition_s254.md`.
`Hardware.aDNA` (14 context files) and `Acceleration.aDNA` (CUDA/ROCm/RAPIDS families) carry real
member-authored content; `Argo/JupyterLab/Kubernetes/Ray.aDNA` are empty template scaffolds
(name-reservations). None are org artifacts; none are workspace graphs. See Gate-1 rider R2.

## Cohort roster (ratified — ⛩ Gate 1, 2026-08-26)

| # | Target | Graph | Disposition (ratified) | Category | Persona pin | Class | State (2026-08-26) |
|---|--------|-------|------------------------|----------|-------------|-------|--------------------|
| 1 | Ray (distributed compute) | `Ray.aDNA` | **SCOPE → SEED** (seam-gated on Galileo) | Platform · SDG, software-named brick | **Helios** | control-plane (compute lanes) + **§8 flag** on the persisted job/model volume — ruled at P0 | absent; software **LIVE on L2, ungoverned** |
| 2 | Hardware (node hardware ontology) | `Hardware.aDNA` | **SEED** (one graph, two legs — see §DP-3) | `tbd_at_p0` (Framework candidate) | **Babbage** | knowledge-only; no runtime; taxonomy generic (per-node fingerprints stay in Home/Network) | absent; facts scattered, one live contradiction (lsu_l2 — ⛩ closed 2026-08-27) |
| 3 | Acceleration (GPU/CUDA/VRAM discipline) | *(leg of `Hardware.aDNA`)* | **FOLD into #2** as `what/context/gpu_acceleration/` (see §DP-3) | — | — | — | absent; constraints scattered across Inference/ComfyUI/LlamaCppForge |
| 4 | JupyterLab | — | **DO-NOT-CREATE** (facet of `Jupyter.aDNA`) — see §DP-1 | — | Galileo (existing) | — | deliberately absent; `Jupyter.aDNA` live v1, Tier-1 conformant |
| 5 | Kubernetes | `Kubernetes.aDNA` | **SEED — forward-planning genesis stub** (⛩ pre-ruled 2026-08-26, see §DP-2) | Platform · SDG (working), software-named brick | **Palinurus** | control-plane; **nothing running** — stub makes no deployment claims | absent; L2 = rootless podman; dormant k8s/helm assets in the lab repo |
| 6 | Argo (Workflows) | `Argo.aDNA` | **SEED — forward-planning genesis stub** (⛩ pre-ruled 2026-08-26, see §DP-4) | Platform · SDG (working), software-named brick | **Jason** | control-plane; **nothing running**; ADR-018 rejection stands | absent; formally rejected in the Operations trade study |

Persona pins are **working-pins** (Keystone convention), each ratified against the fleet registry at
that graph's own P0. All four verified unused 2026-08-26 (router table + 8 non-router personas +
4 reserved names: Haussmann, Lannes, Aeacus, Noctua).

Common seeding conditions (all SEEDs): genesis-planning stubs — **no install, no deploy, no service
start, no infra**; local `git init`, no remote; router rows **STAGED `#needs-human`** (never
self-inserted); four wrappers per ADR-037/045 (`how/federation/{git,feedback,iii}/` + Home
credential-routing snippet, names-only) — **three where `feedback/` is deferred-by-design; see the
conformance audit table** (Hardware deploys nothing, so the deploy-signal loop has no signal to
carry, and its wrapper count is two-plus-routing, not three-plus-routing); deployment-gated
standing orders.

### Seed register (P2 executed 2026-08-26, same-day as Gate 1)

| Graph | Persona | Commit | Fork method | Files | First mission | State (2026-08-26) |
|---|---|---|---|---|---|---|
| `Ray.aDNA` | Helios | `57af121` | lean stub (Keystone-pattern) | 21 | `mission_charter_m00` (P0: §8 ruling + seam ack), then M1–M3 execution-ready | seeded; as-found L2 record in `what/context/distributed_compute/`; Galileo seam memo delivered (ack invited) |
| `Hardware.aDNA` | Babbage | `fb71b91` | **full `skill_project_fork`**† | 373 | `mission_charter_m00` (P0: category ruling), then M1–M3 execution-ready | seeded; two evidence-base legs; Venus contradiction memo delivered |
| `Kubernetes.aDNA` | Palinurus | `b0f57a9` | lean stub | 18 | `mission_00_plan_the_genesis_planning` (**fable** meta-planning) | seeded; NOTHING RUNNING (by design); Pandora courtesy memo staged sender-side |
| `Argo.aDNA` | Jason | `d58adbe` | lean stub | 18 | `mission_00_plan_the_genesis_planning` (**fable** meta-planning) | seeded; ADR-018 rejection memorialized as ground truth |

† Fork-method divergence documented, not reworked (Keystone reconciliation precedent — the
operation order specified the full scaffold for the non-SDG Hardware graph; conformance is
wrappers, not file count). `Fork method` is a historical fact and does not age; the dated `State`
column is what ages — refresh it from each vault's HEAD, never from this table.

### Four-wrapper conformance audit (at seed, 2026-08-26)

| Graph | `git/` | `feedback/` | `iii/` | credential routing | Deployment-gated SOs | Result |
|-------|:------:|:-----------:|:------:|:------------------:|:--------------------:|:------:|
| Ray.aDNA | ✓ | ✓ | ✓ | ✓ (named rows incl. the pending-ceremony bearer) | ✓ (live-head read-only) | **PASS** |
| Hardware.aDNA | ✓ | **deferred-to-P0 by design** (nothing deploys; recorded in CLAUDE + ADR-000 §5) | ✓ | ✓ (none needed; names-only) | ✓ (n/a-runtime) | **PASS with recorded deferral** |
| Kubernetes.aDNA | ✓ | ✓ (doubly inert) | ✓ | ✓ | ✓ (no-claims SO) | **PASS** |
| Argo.aDNA | ✓ | ✓ (doubly inert) | ✓ | ✓ | ✓ (ADR-018-stands SO) | **PASS** |

---

## Target blocks

### 1 · Ray — `Ray.aDNA` (SCOPE → SEED, priority one)

**State: absent / lives-ungoverned.** The software is **LIVE on L2** with no owning graph:

- Service: `adna-ray-head` — `Jupyter.aDNA/what/lab/deploy/docker/docker-compose.l2.yaml:24-70`
  (Ray 2.54.0, GCS :6379 / dashboard :8265 / client :10001, namespace `adna-lab`,
  `pids_limit: 32768` per FU-03, healthcheck `ray status`, no workers by design).
- Image: `deploy/docker/Dockerfile.ray` — `rayproject/ray:2.54.0-py311-gpu` + RFdiffusion +
  ProteinMPNN at pinned SHAs (a protein-design inference image, not generic Ray).
- Stack health: 11/11 rootless-podman containers healthy, **8× V100 GPU passthrough proven
  end-to-end** — `Network.aDNA/what/network/nodes/lsu_l2.aDNA/STATE.md:58` (F-S107-01).
- Dispatch code: `Jupyter.aDNA/what/lab/adna_lab/{api,core,infra,promotion}/` — `RayExecutor`,
  `RayInfraProvider`, `POST /v1/jobs/submit`, L1→L2 promotion probes.
- Ops: `deploy/docker/runbook.md` (podman inspect lanes, `RayHeadPidsApproachingLimit` alert);
  nginx bearer-token proxy on the dashboard; Prometheus scrape.
- Credential: `LATLAB_RAY_BEARER_TOKEN` **pending-ceremony since 2026-07-06**
  (`Home.aDNA/what/inventory/inventory_credentials.yaml:1056`); Operations M33 ran **STUB
  dispatch** for want of it (`Operations.aDNA/STATE.md:29`).
- Open defect: **F-P12-03** — the SDK path bypasses quota entirely
  (`sdk.submit_job → ray_executor → Ray JobSubmissionClient`, 0 quota tokens under a control
  firing at 28) — `aDNALabs.aDNA/STATE.md:135`.
- Governance gap stated by the owner itself: `Jupyter.aDNA/STATE.md:2422` "Ray dispatch stays out
  of scope"; `STATE.md:666` no `ray` in the repo venv or lean CI (path CI-untested).

**Disposition: SCOPE → SEED.** Fork `Ray.aDNA` **only after** the Galileo seam memo is ratified
(Keystone §B discipline). Note the standing counter-precedent honestly: Keystone §D ruled Ray
**fold-into-Lab**, re-affirmed document-not-seed at C03/M34 (2026-07-02), with the split trigger
"a non-Jupyter Ray consumer emerges." **The trigger condition has since been met on the record:**
the Operations bridge is a named non-Jupyter consumer (ADR-018 seam; M33's real-path gate), the
SDK path is a second (F-P12-03), and both scheduler stubs name the Ray bearer as *their* seam
credential. See §DP-5 for the formal reversal argument and the ENRICH alternative.

**Category**: Platform · `software_deployment_graph` (deploy-and-run face; software-named brick per
naming rule P-3 — Ray IS the identity). **Persona pin**: Helios. **Purpose (one line)**: govern the
Ray software surface — install · operate · configure · update · interoperate — for every node that
runs a Ray head or client, starting from the live L2 deployment as found.

**Seam (proposed, to Galileo)**: `Ray.aDNA` owns the five verbs on the Ray software surface (head
container, image, ports, namespace, pids discipline, upgrade path, monitoring contract).
**Galileo keeps**: the adna-lab code (`what/lab/` including `ray_executor.py`, the API, the
promotion machinery), JupyterHub, the L1/L2/L3 composition profiles, and the job-submission
product surface. The ADR-018 orchestration seam (Operations arbitrates claim-lease; Ray executes)
is **unchanged** — this graph slots under it as the software brick, exactly as `Container.aDNA`
slots under workloads. **Venus keeps** placement/topology; her `recipe_l2_podman_ray_jupyterhub.md`
stays quarry (ADR-037 §3) with the ray-slice canonical home moving `Lab.aDNA → Ray.aDNA` only if
this seam ratifies.

**Composition edges**: composed by `Jupyter.aDNA` (Lab profiles) and `Operations.aDNA`
(ADR-018 executor seam); composes-on `Container.aDNA` (runs as a podman container) and
`Store.aDNA`-adjacent volumes (job data + model weights, §8 flag below). **Wrappers**: full four
(`git/`, `feedback/`, `iii/`, Home credential routing — the Ray bearer is already a named broker
row).

**Class**: control-plane for the compute lanes (a job is processed and forgotten) — but the head
persists job data and model weights at `/data/stanley-lattice/latlab/ray/`
(`exxact3.lattice.yaml:97-98`). Per the DP-16 lesson (a label is the reason nobody goes looking),
the persisted volume is **flagged for a §8 ruling at P0**, not silently classed away.

**Live reality to memorialize (M1 scope)**: everything in the State block above, as pointers into
`Jupyter.aDNA/what/lab/` — **never copies** (anti-pattern: copy-instead-of-federate).

**Open questions**: `#needs-human` seam ratification (Galileo + operator) · §8 ruling on the data
volume at P0 · whether F-P12-03 remediation is coordinated from this graph or HQ (proposed: this
graph coordinates, code lands in Galileo's tree — see campaign M3).

### 2+3 · Hardware + Acceleration — `Hardware.aDNA` (SEED, one graph, two legs)

**State: absent / scattered.** No hardware *ontology* exists; per-node hardware *facts* do:

- L1 (Dyrnwyn): `Home.aDNA/what/inventory/inventory_system.yaml` — M4 Max, 16C/40GPU, 128 GiB
  (Delphi probe 2026-08-04); `node_manifest.yaml` (`machine_class: apple_silicon_mac`).
- L2 (exxact3): richest record at `Jupyter.aDNA/what/lab/deploy/l2-seed/exxact3.lattice.yaml:18-37`
  — Supermicro SYS-4029GP-TVRT, 8× V100-SXM2-32GB NVLink, CUDA 12.8, 7.3 TB RAID,
  rootless-podman 4.9.3.
- **~~Live contradiction~~ → ⛩ CLOSED 2026-08-27, and narrower than we reported.** As found:
  `Network.aDNA/what/network/nodes/lsu_l2.aDNA/STATE.md:32` (2× Xeon Silver 4216, 1007 GiB —
  corrected S258) vs the same graph's `MANIFEST.md:20,84` (AMD EPYC, 1024 GB). Reported to Venus by
  memo (Phase 2), never an edit in her tree — and she **ruled it from the node**, not from the three
  secondary records, per SO-7: a contradiction *inside* the mirror cannot be settled by a majority
  vote among mirrors. Read-only mesh probe from `stanley_l1`, 2026-08-27: `Xeon Silver 4216`,
  `Socket(s): 2`, `Core(s) per socket: 16`, `CPU(s): 64`, `free -g total: 1007`, 8× V100-SXM2-32GB.
  ⇒ `STATE.md:32` **correct**; `MANIFEST.md:84` **corrected in her tree with the probe recorded
  inline as `hardware_provenance`**.

  ⚠ **Her narrowing — this manifest named two false strings and only one was false.** `MANIFEST:20`
  carries **no vendor at all**, and its `64` is the *thread* count in `lscpu`'s own `CPU(s)`
  vocabulary: a **coarser** row than `:32`, not a contradicting one. She left it alone. **And the RAM
  figures were never a third contradiction**, though they read like one — `1024` is nominal installed
  capacity, `1007 GiB` is what the OS reports after firmware reservation. Advertised vs usable:
  `exxact3.lattice.yaml` (`memory_gb: 1024`) and `STATE.md` (`1007 GiB`) are **both right about
  different things**, and ruling from the three records would very likely have "corrected" one true
  value into another.

  **Both halves went into the vocabulary requirement**, which is the point of the exercise: the
  machine-class schema must express **advertised-vs-usable** as distinct capability statements, and
  must say which of `CPU(s)` / cores / sockets a bare integer denotes. Recorded at
  `Hardware.aDNA/what/context/node_hardware/context_evidence_base_20260826.md` §"Dated note".
  Neither desk could have closed this alone — the contradiction was visible only from a cohort-wide
  vantage, the resolution only from a mesh vantage.
- Fleet index: 15 node-mirror graphs under `Network.aDNA/what/network/nodes/` are the de-facto
  inventory; `Lighthouse.aDNA` composes by software brick, never by hardware class (zero hardware
  mentions in its STATE).
- Recon negatives, recorded so they stay dead: "Fujitsu" — zero fleet hits; "rare-care-centre" —
  the Perth Children's Hospital rare-disease partner (`RareGraph.aDNA/CLAUDE.md:24,109`), not a
  hardware node.
- Acceleration facts, scattered: `ComfyUI.aDNA/STATE.md:148,170` (VRAM ceiling as specification,
  MPS-vs-CUDA dual-hardware amendment) · `Inference.aDNA/CLAUDE.md:39,41` (GPU/Metal observation
  un-gated, placement routed to Venus) · `LlamaCppForge.aDNA/CLAUDE.md:35-44` (quantization as
  declared intent, `what/` empty) · GPU probe telemetry in `LatticeProtocol.aDNA/CHANGELOG.md:94`.

**Disposition: SEED one graph** — `Hardware.aDNA` with two topic-named legs (W-2 convention:
`what/context/node_hardware/` + `what/context/gpu_acceleration/`). Adjudication in §DP-3.

**Category**: `tbd_at_p0` — Framework candidate (a taxonomy other vaults federate against; no
artifact, no runtime), with the caveat named: the Framework category is **provisional at n=1**
(III.aDNA), so a Framework call is a category-promotion event. Domain-stub precedent
(`tbd_at_p0`) defers the call to P0 where it belongs. **Persona pin**: Babbage. **Purpose (one
line)**: the fleet's hardware ontology — machine classes, GPU/accelerator taxonomy, VRAM/compute
capability discipline — that node graphs cite instead of re-deriving.

**Boundary (anti-duplication guard)**: per-node hardware *facts* stay where they live — Home owns
this node's inventory, Venus owns the fleet's node-mirrors. `Hardware.aDNA` owns the *vocabulary
and discipline* those facts are stated in (the `machine_class` enum is the existence proof — it
already wants an owner). Federation, never duplication.

**Composition edges**: cited by `Home.aDNA` (node manifests), `Network.aDNA` (node-mirror hardware
rows), `Inference.aDNA`/`ComfyUI.aDNA`/`LlamaCppForge.aDNA` (acceleration constraints),
`Container.aDNA` (node-class designations). **Wrappers**: `git/` + `iii/` + Home credential routing;
`feedback/` n/a-until-P0 (nothing deploys). **Class**: knowledge-only. The graph carries **generic**
taxonomy; node-identifying fingerprints stay in Home (Rule 4 posture unaffected).

**Open questions**: `#needs-human` quarry Joshua's `Hardware.aDNA`/`Acceleration.aDNA` repo content
(real, member-authored, unreleased — IP/consent question is the operator's; see rider R2) ·
category at P0 · whether the graph also carries the L2 chassis record as canonical (proposed: no —
that record is Venus's node-mirror; this graph defines the schema it should conform to).

### 4 · JupyterLab — DO-NOT-CREATE (facet of `Jupyter.aDNA`)

**State: deliberately absent.** `Jupyter.aDNA` (Galileo) IS the Jupyter brick — Tier-1
four-wrapper conformant, genesis P0–P4 closed, v1 LIVE (hub :8081 / API :8002 / proxy :8000),
6,538-line STATE. Its CLAUDE.md declares the two-faced identity explicitly: brick-face (the
Jupyter software surface) + composer aspect (Jupyter + JupyterHub + Ray + IAM as composition
profiles, **not graphs** — pattern ruling P-1). "Jupyter-out-of-Lab" is a **named non-firing
precedent** of the P-3 split-out rule. Adjudication in §DP-1.

**Adjacent items surfaced (filed, not scoped here)**: REC-K2d-5 (rule the JARK name-reservation
stubs' disposition against `Jupyter.aDNA`: subsume / keep-thin / archive — filed 2026-08-08,
**unruled**; rider R1) · `idea_upstream_jupyterlab_theme_reads_branding_json` (deferred, owner
Galileo, trigger "first non-purple partner Lab deployment") · `Lab.aDNA` shim window lapsed
~2026-08-09 but ruled load-bearing (Home §C; WI-11 — Home's row, not ours).

### 5 · Kubernetes — `Kubernetes.aDNA` (SEED forward-planning stub, ⛩ pre-ruled)

**State: absent; nothing runs.** L2 reality is **rootless podman 4.9.3** (11 containers;
`exxact3.lattice.yaml:36-37`, `lsu_l2.aDNA/STATE.md:58`). The only K8s artifacts in the fleet are
dormant and unexercised: `Jupyter.aDNA/what/lab/deploy/k8s/` (namespace/rbac/ingress/
network-policy/storage + `ray/ray-cluster.yaml`, `jupyterhub/`, `postgres/`, `redis/`, `minio/`)
and `deploy/helm/` (chart + per-env values); the provider ABC names "K8s namespace" as an intended
provider (`adna_lab/infra/base.py:4`). `Container.aDNA` (Pandora, built P0–P4) scopes itself to
the runtime surface, **explicitly not orchestration**, and its ADR-004 carries the un-fired
**revisit trigger T1: K8s**.

**Disposition: SEED as a forward-planning genesis stub** — ⛩ operator-ruled 2026-08-26 (plan
review, in-chat), upgrading the recon recommendation (DEFER). The stub's WHAT leg is
evidence-pointer-only: the dormant k8s/helm assets (the revival quarry), the provider ABC, the
podman-first present, the ADR-004 T1 seam. **No deployment claims** — the stub says "nothing is
running" in its own STATE. First mission = fable-tier meta-planning (design the mission that
designs the genesis campaign); adjudication §DP-2.

**Category**: Platform · SDG (working) — software-named brick. **Persona pin**: Palinurus (the
helmsman — κυβερνήτης). **Purpose (one line)**: the forward-planning home for Kubernetes-the-
orchestrator — dormant assets, adoption triggers, and the seam with Pandora's runtime surface —
so the T1 conversation starts from a graph instead of a grep. **Composition edges**: seam with
`Container.aDNA` (runtime vs orchestration; ADR-004 T1), quarry in `Jupyter.aDNA/what/lab/deploy/`,
prospective composer `Lighthouse.aDNA` (only if a k8s node-profile ever ratifies). **Wrappers**:
four, stubbed. **Class**: control-plane; nothing running.

### 6 · Argo — `Argo.aDNA` (SEED forward-planning stub, ⛩ pre-ruled)

**State: absent; formally rejected.** Operations' ADR-018 trade study ruled **"Argo (K8s-only)
rejected on substrate fit"**; Prefect chosen, Temporal runner-up
(`Operations.aDNA/what/adrs/ADR-018-prefect-cross-node-orchestration-seam.md`,
`STATE_history.md:384`, re-verified at C1). Argo appears as a live *design source* exactly once:
`Molecules.aDNA/what/specs/spec_nodegraph_configurator.md` (workflow-IR patterns — `withParam`
DAGs, artifact-by-reference, resource-affinity descriptors). The JARK aspiration ("Jupyter + Argo
+ Ray + K8s for production L3") lives only in dead `_build/` seed artifacts under
`Jupyter.aDNA/what/lab/deploy/l2-seed/`.

**Disposition: SEED as a forward-planning genesis stub** — ⛩ operator-ruled 2026-08-26 (plan
review, in-chat), upgrading the recon recommendation (DO-NOT-CREATE). The stub **memorializes the
ADR-018 rejection as standing ground truth** — this operation does not overturn an Operations
ruling; scope-vs-ADR-018 is the stub's own first question. First mission = fable-tier
meta-planning; it must adjudicate the graph's face (reference/design-source now; deploy face gated
behind the K8s T1 trigger, since Argo is K8s-only by ADR-018's own finding). Adjudication §DP-4.

**Category**: Platform · SDG (working) — software-named brick, with the honest note that if the
planning mission lands on reference-face-only, the category may re-ruled at P0. **Persona pin**:
Jason (leader of the Argonauts — the ship is the namesake). **Purpose (one line)**: the
forward-planning home for Argo Workflows — the rejection record, the design-source thread, and
the conditions under which the lane re-opens. **Composition edges**: subordinate to
`Operations.aDNA` (ADR-018 owner — orchestration lane assignments are Operations', full stop);
design-source consumer `Molecules.aDNA`; hard dependency edge on `Kubernetes.aDNA` (T1).
**Wrappers**: four, stubbed. **Class**: control-plane; nothing running.

---

## Adjudications (the four required decision points)

### §DP-1 — JupyterLab ↔ `Jupyter.aDNA`: distinct SDG or facet?

| | Shape | What it means |
|---|---|---|
| **A** | **Facet — DO-NOT-CREATE** | `Jupyter.aDNA` remains the brick; JupyterLab/Hub/IAM stay composition profiles (P-1). The JARK name-reservation repo stays a third-party stub. |
| **B** | Split `JupyterLab.aDNA` out | Fires the P-3 split-out trigger against its own named non-firing precedent ("Jupyter-out-of-Lab"); requires an independent consumer needing JupyterLab *without* the Lab role. None exists. |
| **C** | Rename/alias only | Registers `JupyterLab` as a shim to `Jupyter.aDNA` (R9 ledger row). Solves a search problem nobody has reported. |

**Recommendation: A.** No independent consumer needs JupyterLab without the Lab; the precedent is
named in the pattern itself. **Failure mode of A**: the K2d confusion recurs — an outside reader
wires `JupyterLab.aDNA` because the org repo exists. Mitigation: rider R1 asks the operator to
rule REC-K2d-5 (subsume / keep-thin / archive the JARK stubs), which closes the confusion at its
source.

**Ratification**: Decision: ⛩ **A — JupyterLab remains a facet of `Jupyter.aDNA`; no graph, no shim.** Rider R1 (REC-K2d-5) held open, non-blocking. · Ratified-by: Stanley (operator) · Date: 2026-08-26 (in-chat, Gate 1 inline ruling table) · Status: **ruled**

### §DP-2 — Kubernetes ↔ `Container.aDNA` and the podman-first present

| | Shape | What it means |
|---|---|---|
| **A** | DEFER, keyed to ADR-004 T1 | No graph until the trigger fires. Recon's original recommendation. |
| **B** | **Forward-planning genesis stub now** | A governed home for the dormant assets + trigger conditions; no deployment claims; planning mission designs the real campaign. |
| **C** | Fold into `Container.aDNA` | Violates Pandora's own scope declaration ("not the orchestration role") — would need her seam consent and muddies a clean boundary. |

**Recommendation was A; ⛩ the operator ruled B (2026-08-26, plan review).** Failure mode of B,
named so it is watched: a stub with no live substrate can drift into aspiration — mitigated by the
stub's evidence-pointer-only WHAT leg and by making scope adjudication the planning mission's
explicit first deliverable. Pandora's boundary is respected: the stub composes *beside* Container
(runtime vs orchestration), touching nothing of hers; a courtesy pointer memo to Pandora rides
Phase 2 **staged, not written into her tree**.

**Ratification**: Decision: **B — SEED forward-planning genesis stub `Kubernetes.aDNA`**, persona
pin Palinurus, fable-tier meta-planning M00 · Ratified-by: Stanley (operator) · Date: 2026-08-26
(in-chat, plan review) · Status: **ruled** (Gate 1 confirms; does not re-ask)

### §DP-3 — Hardware ↔ Acceleration: two graphs, or one graph with two legs?

| | Shape | What it means |
|---|---|---|
| **A** | **One graph, two legs** — `Hardware.aDNA` with `node_hardware` + `gpu_acceleration` context dirs | One owner for the taxonomy; acceleration is hardware-capability discipline, not a separate subject. Splits later only if an independent consumer needs acceleration *without* the hardware ontology (P-3 logic, applied by analogy). |
| **B** | Two graphs | Two personas, two P0s, and a seam between "the GPU" and "what the GPU can do" that every consumer would have to straddle. No consumer asked for it. |
| **C** | DEFER both | Leaves the lsu_l2 contradiction unowned and the `machine_class` enum authorless; the cheapest option and the one that changes nothing. |

**Recommendation: A.** The evidence is one subject: every acceleration fact found (VRAM ceilings,
MPS-vs-CUDA, quantization targets) is a statement *about hardware capability*. **Failure mode of
A**: the graph tries to become the fleet inventory and collides with Home/Venus — mitigated by the
boundary paragraph in block 2+3 (vocabulary, never facts) being written into the seed CLAUDE.md
verbatim.

**Ratification**: Decision: ⛩ **A — SEED one graph `Hardware.aDNA`** (persona pin Babbage), legs `node_hardware` + `gpu_acceleration`, category `tbd_at_p0`; vocabulary-never-facts boundary written into the seed CLAUDE.md verbatim. · Ratified-by: Stanley (operator) · Date: 2026-08-26 (in-chat, Gate 1 inline ruling table) · Status: **ruled**

### §DP-4 — Argo ↔ Prefect ↔ APScheduler: orchestration lane assignments

| | Shape | What it means |
|---|---|---|
| **A** | Lanes stand as ruled: Prefect (Kairos) = cross-node flows, APScheduler (Chronos) = in-process triggers, both under Operations' ADR-018 claim-lease arbitration; Argo = rejected | The recon recommendation (DO-NOT-CREATE for Argo). |
| **B** | **A + forward-planning stub for Argo** | Lane assignments unchanged; Argo gets a governed parking orbit that records *why* it lost and *what would re-open it* (K8s T1), instead of the answer living in a trade-study line. |
| **C** | Re-open the trade study | Operations' call, not this cohort's. Out of scope. |

**Recommendation was A; ⛩ the operator ruled B (2026-08-26, plan review).** The lane table itself
is **not touched**: Prefect and APScheduler keep their seams, Operations keeps arbitration, and
`Argo.aDNA`'s stub CLAUDE.md states in its first screen that ADR-018 stands. Failure mode of B: a
future session reads the stub's existence as a live lane — mitigated by the stub's status line
("rejected on substrate fit; re-opens on K8s T1") and by the planning mission owning the face
question. Cohort-accounting note (Keystone precedent, Rosetta's 2026-07-03 ruling): whether these
stubs are *cohort members* or *adjacent instances* is defined by the composer — recorded at Gate 1.

**Ratification**: Decision: **B — SEED forward-planning genesis stub `Argo.aDNA`**, persona pin
Jason, fable-tier meta-planning M00; ADR-018 lane assignments unchanged · Ratified-by: Stanley
(operator) · Date: 2026-08-26 (in-chat, plan review) · Status: **ruled** (Gate 1 confirms)

### §DP-5 — Ray: SEED (reversing Keystone §D's fold-into-Lab) or ENRICH into `Jupyter.aDNA`?

The one adjudication with a standing contrary ruling. Keystone §D (2026-06-20, re-affirmed
C03/M34 2026-07-02): *"Fold into Lab; split to `Ray.aDNA` only if a non-Jupyter Ray consumer
emerges — document-not-seed."*

| | Shape | What it means |
|---|---|---|
| **A** | **SEED `Ray.aDNA`** (seam-gated) | The §D trigger has fired on the record: Operations bridge (ADR-018 executor seam; M33 blocked on the Ray bearer), the SDK path (F-P12-03), and both scheduler stubs naming the Ray credential. Galileo's own STATE declares Ray dispatch out of scope and out of CI. The brick gets an owner; Galileo keeps the Lab. |
| **B** | ENRICH into `Jupyter.aDNA` | Memorialize the deployment inside the owning graph — a `what/context/ray/` topic + missions in Galileo's own campaign. No new graph; but it asks a 6,538-line-STATE graph that just declared Ray out-of-scope to take more scope, and leaves the Operations/SDK consumers reaching *through* the Lab for a surface the Lab disclaims. |
| **C** | Document-not-seed again | Re-affirms §D against its own trigger condition having been met. Preserves the status quo that produced an ungoverned live GPU service. |

**Recommendation: A — SEED, gated on the Galileo seam memo** (fork only after ratification;
Keystone §B discipline exactly). **Failure mode of A**: seam drawn wrong and two graphs co-author
the dispatch code — mitigated by the seam sentence "code stays in `what/lab/`, this graph owns the
software surface" being the memo's first line. **If the operator prefers B**, the cost is bounded
and named: Ray governance lands as Galileo missions, this manifest's Ray block becomes his intake
packet, and the Operations token ceremony still needs an owner — it would be his.

**Ratification**: Decision: ⛩ **A — SEED `Ray.aDNA`** (persona pin Helios), gated on the Galileo seam memo per Keystone §B discipline; seam first line: code stays in `what/lab/`, the graph owns the software surface; §8 flag on the persisted data volume ruled at P0. Keystone §D fold-into-Lab superseded on its own trigger having fired. · Ratified-by: Stanley (operator) · Date: 2026-08-26 (in-chat, Gate 1 inline ruling table) · Status: **ruled**

---

## Cohort dependency sketch & execution order

```
Ray.aDNA ──gated-on──▶ Galileo seam ratification (coord memo, Phase 2 first act)
Hardware.aDNA ──(none blocking)── Venus coord memo (lsu_l2 contradiction) rides alongside
Kubernetes.aDNA ──seam-informational──▶ Container.aDNA ADR-004 T1 (courtesy memo to Pandora, staged)
Argo.aDNA ──subordinate-to──▶ Operations ADR-018 (standing) ──dependency──▶ Kubernetes T1
JupyterLab ──▶ no artifact (ruling recorded here only)
```

**Execution order (proposed): Ray → Hardware → Kubernetes → Argo → JupyterLab closure.** Ray first
because it is the only target where absence-of-governance is a live operational fact; the two
pre-ruled stubs are mechanical once the template is warm; JupyterLab needs only this manifest.

## Gate-1 riders (operator questions beyond the dispositions)

- **R1 — REC-K2d-5**: rule the JARK name-reservation stubs' disposition against `Jupyter.aDNA`
  (subsume / keep-thin / archive) — filed 2026-08-08 in `operations_jake.aDNA` K2d, unruled.
  Riding here because §DP-1's failure mode is exactly the confusion those stubs cause.
  `#needs-human`
- **R2 — Joshua-repo quarry**: `Hardware.aDNA`/`Acceleration.aDNA` (org repos, now private) carry
  real member-authored content. May Phase 2/3 treat them as a read-quarry for the Hardware graph,
  or is that content off-limits pending the author's consent? (S254 classed them member-authored,
  not org artifacts.) Default if unruled: **off-limits** — seed from workspace evidence only.
  `#needs-human`
- **R3 — cohort accounting**: are the four seeded graphs a *Dynamo cohort* (this campaign's
  register, composer TBD) or *adjacent instances* (Keystone's scheduler precedent)? Proposed:
  Dynamo cohort with **no composer claim** — compute composition is `Jupyter.aDNA`'s and
  `Operations.aDNA`'s live business, and this campaign does not create a composer graph.
- **R4 — gate format** (this gate): inline ruling table (default) vs generated ISS surface.

## Provenance

Operation order (2026-08-26, operator) → Phase 0 three-lane recon (same day, read-only) → this
manifest (P1 sole artifact) → Gate 1 rulings recorded in the blocks above → Phase 2 execution
strictly per ruling. Campaign master: [[../campaign_dynamo|campaign_dynamo]], authored at Phase 3
alongside the per-graph campaigns (the campaign dir is born with this artifact; charter follows the
rulings it must encode).

### Dated refresh — 2026-08-28 (P5 refit, `missions/mission_refit_m05.md`)

Per the Keystone dated-refresh pattern: this artifact is **not** rewritten to look as though it were
always right. What changed, and why:

| Was | Now | Finding |
|-----|-----|---------|
| Title carried "(DRAFT)"; roster "(proposed)"; column "Disposition (proposed)" | De-DRAFTed; roster and column marked **ratified** | **F11** — both gates fired 2026-08-26; the labels had outlived the ruling by two days |
| Seeding conditions said "four wrappers" flatly | Notes the **three where `feedback/` is deferred-by-design**, pointing at the conformance audit table | **F15a** — the sentence contradicted this manifest's *own* audit table |
| lsu_l2 recorded as a live contradiction | ⛩ **CLOSED**, with Venus's narrowing of our over-claim stated in full | **F1-adjacent** — the fix and the *lesson* both recorded, per this manifest's own §"inherits the fix rather than the lesson" warning |
| Provenance line unlinked | Wikilinked to the campaign master | **F11** |

⚠ **On dating, stated because this manifest asks others to state it:** the P4 artifacts were authored
on the morning of 2026-08-27 and stamped to the 2026-08-26 sitting. This refresh was executed
2026-08-28 and is dated 2026-08-28.
