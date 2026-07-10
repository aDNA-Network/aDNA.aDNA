---
type: artifact
artifact_class: cohort_manifest
created: 2026-06-22
updated: 2026-06-22
status: active
campaign_id: campaign_keystone
campaign_phase: 4
last_edited_by: agent_stanley
tags: [keystone, deployment_graph, cohort, manifest, roster, lighthouse, composition]
---

# Operation Keystone — Cohort Manifest

The authoritative register of the **software-deployment-graph cohort** seeded by Operation Keystone: one `<Software>.aDNA` graph per piece of software, each carrying install / operate / configure / update / interoperate context so an agent runs that software seamlessly on a node — for its operator and every other agent on that node. Each graph is a **brick** that `Lighthouse.aDNA` **composes** into a node; it is not a wall.

**Paradigm**: [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]] · **Category ruling**: [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (Platform.aDNA · `platform_subtype: software_deployment_graph`) · **Skeleton**: [[how/templates/template_software_graph_stub|template_software_graph_stub]] · **Disposition source**: [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|keystone_deconfliction_ledger]] (§A/§B).

> **Self-reference (SO#8):** this manifest *is* a worked example of the pattern it registers — it lists ten graphs that each demonstrate the four-wrapper conformance contract, and it federates rather than duplicates (the Lighthouse interlock is a *reference* handoff, not a copy of this roster). The structure is the lesson.

## Cohort roster (10 graphs)

All ten are **genesis-planning stubs** (no install / deploy / service-start / infra), **local `git init` / no remote**, **router row STAGED `#needs-human`** (Operation Production Tidy freeze — never self-inserted), each carrying the **four wrappers** + deployment-gated standing orders. Personas are **working-pins** (each ratified against the fleet registry at that graph's own P0).

### §A — Net-new (proving instances; seeded P2, 2026-06-20→21)

| # | Software | Graph | Persona | Commit | Class | Fork method | Files |
|---|----------|-------|---------|--------|-------|-------------|-------|
| 1 | Nextcloud (file-sync/collab) | `Nextcloud.aDNA` | Atlas | `142c113` | data-bearing (§8) | lean `template_software_graph_stub` | 15 |
| 2 | Reverse-proxy (Caddy fleet-default) | `Caddy.aDNA` | Portunus | `04817c5` | data-bearing (fronts data) | full `skill_project_fork`† | 346 |
| 3 | Secrets (Bitwarden/Vaultwarden) | `Bitwarden.aDNA` | Cerberus | `09ca97c` | data-bearing (secret store §8) | full `skill_project_fork`† | 358 |
| 4 | Object store (MinIO/AIStor) | `Store.aDNA` | Plutus | `77d2e88` | data-bearing (§8) | lean stub | 15 |
| 5 | Groupware (Stalwart JMAP) | `Groupware.aDNA` | Pheme | `85b4531` | data-bearing (§8) | lean stub | 15 |
| 6 | Container runtime (rootless Podman) | `Container.aDNA` | Pandora | `5b248db` | control-plane | lean stub | 15 |
| 7 | Inference (llama.cpp/MLX/vLLM/Ollama) | `Inference.aDNA` | Pythia | `fcf747d` | control-plane | lean stub | 15 |
| 8 | API surface (FastAPI) | `FastAPI.aDNA` | Atalanta | `79bb176` | control-plane | lean stub | 15 |

### §B — Overlap (seam-gated; seeded P3, 2026-06-22, only after seams ratified)

| # | Software | Graph | Persona | Commit | Class | Fork method | Files |
|---|----------|-------|---------|--------|-------|-------------|-------|
| 9 | Forgejo (software install/config only) | `Forgejo.aDNA` | Ilmarinen | `c45046f` | data-bearing (§8) | lean stub | 15 |
| 10 | Nebula (node-side daemon only) | `Nebula.aDNA` | Heimdall | `e457135` | control-plane | lean stub | 15 |

† **Fork-method divergence — documented, not reworked** (see reconciliation below). All remotes: **local-only**. All router rows: **STAGED `#needs-human`**.

## Four-wrapper conformance audit (the conformance contract)

Conformance is defined by ADR-037 as the **four wrappers + deployment-gated standing orders**, *not* file count. Audited 2026-06-22 across all ten graphs (`git/`, `feedback/`, `iii/` directories + credential-routing in CLAUDE.md):

| Graph | `git/` | `feedback/` | `iii/` | credential routing | Deployment-gated SOs | Result |
|-------|:------:|:-----------:|:------:|:------------------:|:--------------------:|:------:|
| Nextcloud.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Caddy.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Bitwarden.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Store.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Groupware.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Container.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Inference.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| FastAPI.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Forgejo.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |
| Nebula.aDNA | ✓ | ✓ | ✓ | ✓ | ✓ | **PASS** |

**10 / 10 conformant.** The wrappers federate (never duplicate) their brokers: `git/` → [[../Git.aDNA/CLAUDE|Git.aDNA]] (Hopper) · `feedback/` → [[what/specs/spec_telemetry_feedback_ecosystem|aDNA.aDNA feedback loop]] (default-OFF, names-only) · `iii/` → [[../III.aDNA/CLAUDE|III.aDNA]] (Argus) · credential routing → [[../Home.aDNA/CLAUDE|Home.aDNA]] (Hestia, names-only).

## Fork-method reconciliation (Caddy + Bitwarden)

Eight graphs are lean 15-file `template_software_graph_stub` forks. **`Caddy.aDNA` (346 files)** and **`Bitwarden.aDNA` (358 files)** were built via the full `skill_project_fork` scaffold rather than the lean stub — Caddy carries a `campaign_adna_workspace_upgrade`; Bitwarden was built out under **WS-B / Operation Keyring** (persona Cerberus). First flagged at M0 (AAR Technical Debt #2), confirmed cohort-wide at M2 close.

**Disposition: acceptable — documented here, not reworked.** Both are legitimately further along on a different work-stream, and **both pass the conformance contract** (four wrappers + deployment-gated SOs). Conformance was deliberately defined as the wrappers, not file count, precisely so a graph can be richer than the lean skeleton without falling out of the fleet. No re-fork is warranted or planned.

## Data-bearing split (ADR-016 §8)

Every **data-bearing** graph carries the control-plane-vs-data-plane discipline: the software runs on a **data-plane node the lighthouse coordinates, never the control-plane lighthouse host**, with placement / storage backing / ingress co-designed with **Venus (`Network.aDNA`)**.

- **Data-bearing → §8 (6):** Nextcloud · Caddy · Bitwarden · Store · Groupware · Forgejo.
- **Control-plane (4):** Container · Inference · FastAPI · Nebula.

## Seam summary (overlap graphs)

The §B graphs own **only the software brick**; the owning persona keeps everything else. Both seams were **ratified 2026-06-22** (operator GO; ground-truth re-read confirmed zero drift). The seam memo *is* the conformance contract for an overlap graph.

| Graph | This graph owns | Owners keep (do NOT author) | Seam memo |
|-------|-----------------|------------------------------|-----------|
| `Forgejo.aDNA` | Forgejo install/version-pin/config/backup/upgrade | **Git.aDNA / Hopper** = provider contract · **Lighthouse** = deployment topology · **Venus** = data-plane placement (§8) | [[who/coordination/coord_2026_06_20_keystone_forgejo_to_hopper|forgejo_to_hopper]] ✅ |
| `Nebula.aDNA` | Nebula node-side daemon install/config/operate (Tailscale folds in, ADR-015) | **Venus** = substrate/topology/membership/CA/ledger · **Home / Hestia** = node-local cert/config (§9) | [[who/coordination/coord_2026_06_20_keystone_nebula_to_venus|nebula_to_venus]] ✅ |

**Recipe-quarry reframe (§B.1, ADR-037 §3):** `Network.aDNA`'s `deployment_recipes/` is a **source-quarry**; the install/operate/configure knowledge for a software now has a **canonical home** in its `<Software>.aDNA` graph (nebula → `Nebula.aDNA`; podman → `Container.aDNA`; ray/jupyter → `Jupyter.aDNA`). Substrate/topology/membership/ledger stay Venus's. Annotated in the ledger §B.1 (our tree only); Venus places the README banner at her discretion.

## Lighthouse composition — proposed node-stack profile mapping

`Lighthouse.aDNA` (the deployable integrated-lighthouse node) **composes** cohort members into a node by **profile**; per its MANIFEST the intended profiles are `core` / `collab` / `inference` / `ops`. The mapping below is a **proposal for Lighthouse to ratify at its own P0** — authoritative profile definitions are Lighthouse's, not this campaign's. Lighthouse composes the cohort; it does not duplicate it.

| Profile | Cohort members (proposed) | Rationale |
|---------|---------------------------|-----------|
| **core** (every node) | `Container` · `Caddy` · `Bitwarden` · `Nebula` | runtime + ingress/TLS + secret-access + mesh daemon — the foundational substrate every profile builds on |
| **collab** | `Nextcloud` · `Groupware` · `Forgejo` · `Store` | files/collab + mail/JMAP + git fabric + object-store backing |
| **inference** | `Inference` · `Container` · `Store` | LLM runtimes on the container runtime; model-weight artifacts in the object store |
| **ops** | `FastAPI` · `Caddy` | service/API surface behind the proxy; observability added by Lighthouse later |

Members recur across profiles by design (`Container` underpins core + inference; `Store` backs collab + inference) — composition is a selection over the roster, not a partition of it. This mapping is carried to Lighthouse via the handoff: [[../Lighthouse.aDNA/who/coordination/coord_2026_06_22_keystone_cohort_to_lighthouse|coord_2026_06_22_keystone_cohort_to_lighthouse]].

## Standing open items (carried past campaign close)

1. **Decision #5 — AWSBootstrap ↔ Lighthouse ↔ cohort reconciliation ADR (OPEN).** `AWSBootstrap.aDNA` installs node software → **triple-overlap** with Lighthouse + the cohort (ledger §C). Needs a reconciling ADR before the cohort proliferates onto AWS nodes. Surfaced, not resolved (separate effort). Backlog: [[how/backlog/idea_awsbootstrap_lighthouse_cohort_reconciliation|idea_awsbootstrap_lighthouse_cohort_reconciliation]].
2. **§C enrichment wave (out of this campaign).** Retrofit the four wrappers into existing deployment-grade graphs — **Lab.aDNA** (reference impl, gated on its M-L13.6 merge) · Harness · ComfyUI · Obsidian · Terminal · Warp · AWSBootstrap. Backlog: [[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]]. **LANDED 2026-07-02 (Corps ⛩ M-C6 retrofit gate; recorded here 2026-07-03):** Lab (reference impl, M-L13.6 SATISFIED) · Warp · ComfyUI four-wrapper-conformant; Obsidian **11/12** (its M06 authors the `iii` wrapper — operator-accepted standing condition); Terminal n/a (already Tier-1). **Harness + AWSBootstrap remain in the §C backlog** (un-chartered). ComfyUI additionally **category-ruled Platform·SDG** at this gate (see [[spec_platform_ecosystem]] §SDG).
3. **Router rows + first remotes are per-graph operator gates.** All 10 rows STAGED `#needs-human` (PT freeze) and all 10 repos local-only; insertion + first-remote are operator/Hestia acts at each graph's own genesis (cf. Lighthouse's first remote via Git.aDNA R2/P6 Wave 1a).

## Provenance

Recon ground truth (Network / Lab / Git / Lighthouse / Home STATE+CLAUDE, 2026-06-20→22) → ledger §A/§B → seeded stubs (P2/P3) → this register (P4). Every disposition here traces to a [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|de-confliction ledger]] row. Campaign master: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]].
