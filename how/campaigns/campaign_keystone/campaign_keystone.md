---
campaign_id: campaign_keystone
type: campaign
title: "Operation Keystone — Software-Deployment-Graph Tier"
owner: stanley
status: completed
phase_count: 5
mission_count: 5
estimated_sessions: "8-14"
calibrated_sessions: "8-14"
estimation_class: governance-broad
priority: high
created: 2026-06-20
updated: 2026-06-22
last_edited_by: agent_stanley
strategic_compass: who/governance/VISION.md
depends_on: campaign_feedback_loop
tags: [campaign, keystone, deployment_graph, platform, federation]
---

# Campaign: Operation Keystone

## Goal

Stand up the **software-deployment-graph tier**: context-graph-native forked deployment graphs — one per piece of software — each installing / operating / configuring / updating / interoperating a single piece of software so it integrates into the aDNA network lattice. These are the reusable units `Lighthouse.aDNA` **composes** into a node and that `Network.aDNA` / `Git.aDNA` reference. When complete, an operator adds (e.g.) `Nebula.aDNA` to a node and an agent sets it up and operates it — for the operator and for every other agent on that node — from then on. The paradigm is authored **before** any graph is seeded.

## Context

The operator's framing (verbatim intent): *all the software we use on and to build the aDNA network gets a `<Name>.aDNA` "stack-component" graph carrying the install / context / documentation / processes / aDNA-integration to make operating that software fully seamless and agentic.* Composable node stacks are then built by **sharing context graphs**, and agents are empowered to operate software for their users.

This campaign defines the tier and seeds its first members. It depends on [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|Operation Feedback Loop]] (WS-A) for the `feedback/` wrapper each graph carries. Cohort scope is **wide** (operator ratification, 2026-06-20) — the full implied network-stack, not only the originally-named set. Reconciliation with the pre-existing `Network.aDNA` deployment-recipe library is settled: **recipes = source-quarry, graph = canonical home** (operator ratification; recorded in [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]]).

## Scope

### In Scope

- The `pattern_software_deployment_graph` aDNA pattern (enshrines "context-graph-native forked deployment graph").
- The `spec_platform_ecosystem` **software/deployment-graph subtype** extension (NOT a new category — operator-ratified category ruling).
- `template_software_graph_stub` — the uniform cohort skeleton (four wrappers: `git/`, `feedback/`, `iii/`, Home.aDNA credential routing; deployment-gated standing orders).
- [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|The de-confliction ledger / implied-stack roster]] — every candidate graph with its disposition + seam.
- Genesis-planning stubs (no build/deploy/infra) for the clean net-new graphs; staged coord memos for overlapping + existing graphs.
- P4 cohort manifest + interlock into the Lighthouse composition-manifest stub.

### Out of Scope

- Any actual install, deploy, service start, or infra action (these are genesis-planning stubs; live work is per-graph P-gated).
- Forking any graph an owning persona already governs (Jupyter → Lab/Galileo; Forgejo provider contract → Git/Hopper; Nebula substrate → Network/Venus) — these are SCOPED or ROUTED, never duplicated.
- Editing the `Network.aDNA` recipe library (coord memo to Venus proposes the quarry reframe; we do not write into her tree).

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| — (net-new campaign) | — | — |

## Phases & Missions

### Phase 0: Author the Paradigm

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 0 | Pattern + spec subtype + template + roster (+ ADR-037 accepted) | 1-2 | campaign_feedback_loop P1 | completed |

**Phase exit gate**: ✅ **CLEARED 2026-06-20** — operator ratified the `template_software_graph_stub` shape + the campaign name (Operation Keystone) + the ledger. AAR: [[how/missions/artifacts/campaign_keystone_m00_aar|campaign_keystone_m00_aar]].

### Phase 1: De-confliction Ledger

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 1 | De-confliction ledger from ground truth (Network/Lab/Git/Lighthouse) | 1 | M0 | ratified |

**Phase exit gate**: ✅ **CLEARED 2026-06-20** — operator ratified the ledger, incl. the **Store.aDNA / Groupware.aDNA verify result** (both verified ABSENT → seed-net-new).

### Phase 2: Seed Net-New + Enrich Existing (proving instances)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 2 | Seed clean net-new FIRST; then Store/Groupware; enrich Lab as reference impl | 2-3 | M1 | completed |

**Seeded 2026-06-20→21 — 8 genesis-planning stubs** (local git, no remote): Nextcloud (Atlas, `142c113`) · Caddy (Portunus, `04817c5`) · Bitwarden (Cerberus, `09ca97c`) · Store (Plutus, `77d2e88`) · Groupware (Pheme, `85b4531`) · Container (Pandora, `5b248db`) · Inference (Pythia, `fcf747d`) · FastAPI (Atalanta, `79bb176`). **M2 closed 2026-06-22** — Objective 6 (enrich Lab as reference impl) **scoped out** → §C enrichment wave / [[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]] (gated on Lab M-L13.6). AAR: [[how/missions/artifacts/campaign_keystone_m02_aar|campaign_keystone_m02_aar]].

**Phase exit gate**: clean net-new stubs prove the template before any overlapping graph; each carries the four wrappers + deployment-gated SOs; router rows STAGED `#needs-human`; local `git init`, no remote.

### Phase 3: Overlapping Graphs (seam-gated)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 3 | Forgejo → Hopper/Lighthouse seam; Nebula → Venus seam — coord memos, then seed only on ratified seam | 1-2 | M2 | completed |

**M3 ✅ COMPLETED 2026-06-22** ([[how/campaigns/campaign_keystone/missions/mission_overlap_graphs_m03|mission_overlap_graphs_m03]]). The 3 staged seam memos were **ratified** (operator GO, as-asserted; ground-truth re-read of Git.aDNA/Lighthouse/Network/Home confirmed each seam unchanged): `coord_2026_06_20_keystone_forgejo_to_hopper`, `coord_2026_06_20_keystone_nebula_to_venus`, `coord_2026_06_20_keystone_recipe_quarry_to_venus` → all flipped `ratified`. **2 §B overlap stubs seeded** (lean 15-file, local git/no remote, router rows STAGED `#needs-human`, four wrappers): **Forgejo.aDNA** (Ilmarinen, `c45046f`, data-bearing §8; co-sequences Git.aDNA P7b) · **Nebula.aDNA** (Heimdall, `e457135`, control-plane; Tailscale folds in ADR-015; documents-not-disturbs live `_nebula_pilot_10_43`). Ledger §B → ✅ SEEDED + §B.1 recipe-quarry annotation (Obj 3). **Cohort 8→10.** AAR: [[how/missions/artifacts/campaign_keystone_m03_aar|campaign_keystone_m03_aar]].

**Phase exit gate**: ✅ **CLEARED 2026-06-22** — each stub seeded only after its seam was ratified (operator GO, as-asserted); coord memos flipped `ratified`, no silent writes; ground-truth re-read before fork.

### Phase 4: Register Cohort + Wire Composition

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 4 | Cohort manifest in aDNA.aDNA + populate Lighthouse composition-manifest stub (WS-C interlock) | 1 | M2, M3 | completed |

**M4 ✅ COMPLETED 2026-06-22** ([[how/campaigns/campaign_keystone/missions/mission_register_cohort_m04|mission_register_cohort_m04]]). [[how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest|Cohort manifest]] authored — all **10** seeded stubs registered (8 §A + 2 §B), every disposition traceable to the ledger; **four-wrapper conformance audited 10/10 PASS** (the Caddy/Bitwarden file-count divergence documented, not reworked — conformance = the wrappers); 6 data-bearing (§8) / 4 control-plane split; seam summary; proposed `core/collab/inference/ops` node-stack profile mapping. **Lighthouse composition handoff staged** in `Lighthouse.aDNA/who/coordination/coord_2026_06_22_keystone_cohort_to_lighthouse.md` (`3d840e8`) — references the manifest (does not duplicate), proposes the profile mapping for ratification at Lighthouse's own P0, surfaces Decision #5; **Lighthouse build gate NOT lifted** (CLAUDE/STATE/MANIFEST untouched). Context graduation run (report in the M4 AAR — no new context files: durable knowledge front-loaded at P0). AAR: [[how/missions/artifacts/campaign_keystone_m04_aar|campaign_keystone_m04_aar]].

**Phase exit gate**: ✅ **CLEARED 2026-06-22** — cohort AAR filed; `skill_context_graduation` run before close; STATE.md updated; Lighthouse build gate NOT lifted (interlock = a staged inbox handoff only). **Operation Keystone `completed`.**

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | End of M0 (P0 gate) | Template shape + Operation Keystone name | **resolved 2026-06-20** — ratified as written |
| 2 | End of M1 (P1 gate) | De-confliction ledger, esp. Store/Groupware verify | **resolved 2026-06-20** — ratified; both ABSENT → seed |
| 3 | M3 | Forgejo seam (Hopper/Lighthouse/Venus) + Nebula seam (Venus) ratification | **resolved 2026-06-22** — all 3 seams ratified (operator GO, as-asserted); `Forgejo.aDNA` `c45046f` + `Nebula.aDNA` `e457135` seeded |
| 4 | M2 | Container runtime: Podman-as-default vs Docker (fleet standard = rootless Podman) | **resolved 2026-06-21** — rootless Podman fleet-default (`Container.aDNA`, `5b248db`); Docker documented-compat |
| 5 | M2 | Reverse proxy: nginx vs Caddy (Lighthouse vision specifies Caddy; order named nginx) | **resolved 2026-06-20** — Caddy fleet-default (`Caddy.aDNA`, `04817c5`) |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Cohort graphs collide with the Network.aDNA recipe library (parallel truth) | High | ADR-037 ratifies recipes=quarry, graph=home; coord memo to Venus; recipes reframed as source-quarry |
| Data-bearing member deployed on the control-plane lighthouse host | Critical | ADR-016 §8 carried by every data-bearing stub; placement co-designed with Venus |
| Forking a graph an owning persona already governs | High | P1 ledger rules SCOPE/ROUTE vs CREATE from ground truth; overlap graphs seam-gated (P3) |
| Template drift → bespoke forks instead of a fleet | Medium | `template_software_graph_stub` is the single skeleton; conformance = the four wrappers |
| Premature build/deploy | High | All P2/P3 outputs are genesis-planning stubs; live work is per-graph P-gated |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure | Yes |
| AAR produced | 5-step scorecard → `how/missions/artifacts/` | Yes |
| Ground-truth-before-fork | Re-read owning vault STATE/CLAUDE; never from memory | Yes (P1) |
| Dual-audience + self-reference | SO#7 / SO#8 skills | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| Cohort manifest coherent | Every seeded stub listed; every disposition traceable to the ledger |
| Context graduation | `skill_context_graduation` before close |
| STATE.md updated | `aDNA.aDNA/STATE.md` reflects status |

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| Phase 0 | M0 | 1-2 |
| Phase 1 | M1 | 1 |
| Phase 2 | M2 | 2-3 |
| Phase 3 | M3 | 1-2 |
| Phase 4 | M4 | 1 |
| **Total** | **5 missions** | **8-14 sessions** |

## Notes

- Interlock: **WS-A P1 → this campaign** (the `feedback/` wrapper); **this campaign P4 → the Lighthouse composition-manifest stub** (WS-C §Step 3). Lighthouse composes the cohort; it does not duplicate it.
- The category ruling is settled by the order and recorded in [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]]: deployment graphs are **Platform.aDNA with a software/deployment-graph designation**, not a new category (Warp / Obsidian / Lab are already software-surface Platforms).

## Completion Summary

**Completed 2026-06-22** (5 phases / 5 missions; within the 8-14 session calibration). Operation Keystone stood up the **software-deployment-graph tier** end to end: the paradigm was authored *before* any graph was seeded, then 10 conformant genesis-planning stubs were seeded, registered, and handed to Lighthouse for composition.

### Deliverables
- **Paradigm (P0):** [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]] + [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (Platform.aDNA software/deployment-graph subtype; recipes=quarry/graph=home) + [[how/templates/template_software_graph_stub|template_software_graph_stub]] (four-wrapper conformance).
- **Ledger (P1):** [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|de-confliction ledger]] — full implied-stack roster, ratified; Store/Groupware verified ABSENT→seed.
- **Cohort (P2+P3): 10 seeded `<Software>.aDNA` stubs** — §A net-new (8): Nextcloud · Caddy · Bitwarden · Store · Groupware · Container · Inference · FastAPI; §B overlap (2, seam-ratified): Forgejo · Nebula. All local-git/no-remote, router rows STAGED `#needs-human`, four wrappers each.
- **Register + interlock (P4):** [[how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest|cohort manifest]] (10/10 conformance audited) + the Lighthouse composition handoff (staged in its inbox, gate intact).

### Descoped
- **Objective 6 (enrich Lab as reference impl)** → §C enrichment wave / [[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]] (gated on Lab M-L13.6).
- **Decision #5 (AWSBootstrap ↔ Lighthouse ↔ cohort ADR)** → surfaced, not resolved; [[how/backlog/idea_awsbootstrap_lighthouse_cohort_reconciliation|own ADR session]].

### Key Findings
- Authoring the paradigm before seeding (M0) turned every fork into substitution + spine-population, and made close-time context graduation a no-op (durable knowledge was never trapped in ephemeral artifacts).
- Defining conformance as a **contract** (the four wrappers), not a **shape** (file count), let richer forks (Caddy/Bitwarden) coexist in the fleet without rework.
- The §B seam memo *is* the conformance contract for an overlap graph — promoting "what this graph does NOT author" to a first-class CLAUDE.md section keeps overlap stubs as clean as net-new ones.

### Scope Changes
- Cohort scope ruled **wide** at P1 (operator) — the full implied stack, not just the originally-named set. Inference consolidated to one graph (not per-runtime). Reverse-proxy → Caddy fleet-default; container runtime → rootless Podman fleet-default.

## Campaign AAR

Campaign-level AAR (patterns across all 5 missions; see `how/templates/template_aar_lightweight.md`).

- **Worked**: front-loading the paradigm (pattern + ADR + template) before any seed — every subsequent mission (8 net-new, 2 overlap, 1 register) reduced to mechanical application of a settled contract; the operator's "wide cohort" ruling at P1 prevented a second pass.
- **Didn't**: two graphs (Caddy/Bitwarden) were full-`skill_project_fork`ed off-stream before the lean stub existed — a harmless divergence, but it took until P4 to formally reconcile; seeding the template first would have avoided the asymmetry.
- **Finding**: a deployment-graph tier is governable as a *fleet* only if conformance is a contract you can audit (four wrappers) rather than a shape you must enforce — this single decision (M0) carried the whole campaign.
- **Change**: for future tier campaigns, seed the lean template as instance #1 *before* any parallel work-stream forks members, so the whole cohort shares one skeleton from day one.
- **Follow-up**: Decision #5 ADR (AWSBootstrap overlap); §C enrichment wave (Lab M-L13.6 gate); Lighthouse consumes the handoff at its own P0; per-graph router-row insertion + first-remotes stay operator-gated under the PT freeze.
