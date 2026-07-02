---
type: artifact
artifact_class: deconfliction_ledger
created: 2026-06-20
updated: 2026-06-22
status: drafted
campaign_id: campaign_keystone
campaign_phase: 1
status_note: ratified at P1 gate 2026-06-20; §B seeded + recipe-quarry annotated at P3 (M3) 2026-06-22; cohort registered at P4 (M4) cohort manifest 2026-06-22 (campaign completed)
last_edited_by: agent_stanley
tags: [keystone, deployment_graph, ledger, roster, deconfliction]
---

# Operation Keystone — De-confliction Ledger & Implied-Stack Roster

The full implied network-stack with a ruled disposition for each piece of software, from reconnaissance ground truth (Network / Lab / Git / Lighthouse / Home STATE+CLAUDE, 2026-06-20). **Ratified at the P1 gate 2026-06-20.** Paradigm: [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]]; category ruling: [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]]. Cohort scope = **wide** (operator ratification). Disposition vocabulary: **SEED** (net-new graph) · **SCOPE** (overlap; seed only after the owner ratifies the seam) · **ENRICH** (existing vault retrofits the four wrappers) · **DEFER** (reasoned, not now) · **DO-NOT-CREATE** (out of paradigm).

## §A — SEED net-new (proving instances; clean ones FIRST)

| Software | Graph | Data-bearing (ADR-016 §8)? | Seam / notes | Gate |
|----------|-------|----------------------------|--------------|------|
| Nextcloud | `Nextcloud.aDNA` | **Yes** → data-plane, Venus placement | Clean net-new (verified absent). File-sync/collab. | P2 (first wave) |
| nginx reverse-proxy | `Nginx.aDNA` *(or `ReverseProxy.aDNA`)* | **Yes** (fronts data) | Clean net-new. **Decision #5: nginx vs Caddy** — Lighthouse vision specifies Caddy; recommend graph supports both, **Caddy fleet-default**. Co-design ingress/termination with Venus + Lighthouse. | P2 (first wave) |
| FastAPI | `FastAPI.aDNA` | No (control-plane / service surface) | Operator ruled **SEED** (over defer-to-library). Persona **Atalanta**. Framework-vs-platform category **provisional → first-class P0 decision**; future `Python.aDNA` parent noted-not-seeded. | **P2 ✅ SEEDED 2026-06-21** (`79bb176`, third wave; settles open-decision #1) |
| Store (MinIO/AIStor) | `Store.aDNA` | **Yes** → data-plane, Venus placement | **VERIFIED ABSENT** (MinIO exists only as latlab L3 infra; no vault, no remote). Lattice Storage Federation. Seed net-new. Persona-pin **Plutus**. | **P2 ✅ SEEDED 2026-06-21** (`77d2e88`, second wave) |
| Groupware (Stalwart JMAP) | `Groupware.aDNA` | **Yes** → data-plane, Venus placement | **VERIFIED ABSENT** (no Stalwart/JMAP anywhere). Unified messaging. Seed net-new. Persona-pin **Pheme**. | **P2 ✅ SEEDED 2026-06-21** (`85b4531`, second wave) |
| Bitwarden/Vaultwarden | `Bitwarden.aDNA` | Yes (secret store) → §8 | **In flight (WS-B, Operation Keyring, persona Cerberus).** Secret-ACCESS engine federating Home.aDNA — never a second broker. | WS-B P0 |
| Container runtime | `Container.aDNA` | No (control-plane / foundational substrate) | **Decision #4 RESOLVED → rootless Podman fleet-default** (Docker documented-compat; OCI envelope). Persona **Pandora**. Cross-cutting: every cohort member deploys as a container (high blast-radius execution gate). Workload storage seam → Store.aDNA. | **P2 ✅ SEEDED 2026-06-21** (`5b248db`, third wave; settles decision #4) |
| Inference runtimes | `Inference.aDNA` | No (control-plane / compute) | **Consolidation RESOLVED → one graph**, backends **llama.cpp + MLX + vLLM + Ollama** (selectable; OpenAI-compat envelope). Persona **Pythia**. `llama.cpp` (root, MIT) consumed-not-vendored. Model-weight artifacts → Store.aDNA (size-driven P0 seam). | **P2 ✅ SEEDED 2026-06-21** (`fcf747d`, third wave; settles open-decision #4) |
| Prefect *(scheduler/orchestrator)* | `Prefect.aDNA` | No (control-plane orchestration metadata; **P0 revisit flag** — multi-node run-state may revisit) | **Graduated from §D by Operations (C03/M34 escape-hatch, ruling 2, 2026-07-02; Rosetta notified).** Seam = ADR-018 (`Operations.aDNA/what/adrs/ADR-018-prefect-cross-node-orchestration-seam.md`) — Operations' claim-lease arbitrates ("a flow that cannot acquire a lease does not execute"); the graph owns the software brick. Persona **Kairos** (working-pin; fallback Horae; `ratify_at_p0`). PascalCase (ADR-009 §4). | **C03/M34 ✅ SEEDED 2026-07-02** — the §D "execute only at C2" gate FIRED at the C03 P4 gate; install = Operations' M33 ephemeral pilot, **not this graph's**. Own P0 pending. |
| APScheduler *(in-process scheduler)* | `APScheduler.aDNA` | No (control-plane) | **`element_class: library_element`** — host = operations-bridge; no independent install/health/exercise verbs — runtime verbs delegate to the host; upgrades ride the host venv; authority-envelope rows attach to the host process. Seam = ADR-018 (path above); slots as **t1** of the M35 seam triangle. Persona **Chronos** (working-pin; fallback Aion; `ratify_at_p0`). PascalCase. | **C03/M34 ✅ SEEDED 2026-07-02** (Operations escape-hatch). Own P0 pending. |

> **Cohort conformance (noted at M2 close 2026-06-22).** 6 of the 8 §A stubs are lean 15-file `template_software_graph_stub` forks (Nextcloud · Store · Groupware · Container · Inference · FastAPI). **`Caddy.aDNA` (346 files) and `Bitwarden.aDNA` (358 files) were forked via the full `skill_project_fork` scaffold** (Caddy carries a `campaign_adna_workspace_upgrade`; Bitwarden was built out under WS-B / Operation Keyring) rather than the lean stub. First flagged at M00 (AAR Technical Debt #2 — "Nextcloud built lean vs Caddy/Bitwarden full"), now confirmed cohort-wide. **Disposition: acceptable — document & reconcile at the P4 cohort manifest, not rework** (both are legitimately further along / a different work-stream). Conformance = the four wrappers + deployment-gated SOs (present in all 8), not file count.

> **§A addition (Operation État-Major C03/M34, 2026-07-02 — additive escape-hatch write; Rosetta notified via `who/coordination/`).** The two scheduler graphs `Prefect.aDNA` (Kairos) + `APScheduler.aDNA` (Chronos, `library_element`) were **seeded by Operations.aDNA** and recorded here for de-confliction hygiene — Operations composes the scheduler bricks (ADR-018 seam), it does not own the Keystone cohort. `Prefect.aDNA` **graduated from §D** (the "author now OK; execute only at C2" deferral — the C2 gate fired at the C03 P4 gate 2026-07-02). Both are lean genesis-planning stubs (local `git init`, router rows `#needs-human`, no build). **Cohort accounting note:** whether these join the formal 10-graph Keystone cohort count is **Rosetta's call at her convenience** (the notify memo asks); this row is additive registry hygiene, not a cohort-count assertion.

## §B — SCOPE, don't duplicate (overlap; seam-gated, P3) — ✅ BOTH SEEDED 2026-06-22 (seams ratified)

| Software | Graph (scoped) | Owner keeps | Seam / status |
|----------|----------------|-------------|----------------|
| Forgejo | `Forgejo.aDNA` (software install/config only) | **Git.aDNA / Hopper** = provider contract; **Lighthouse** = deployment topology; **Venus** = data-plane placement (§8) | Seam **ratified 2026-06-22** (operator GO, as-asserted; ground-truth re-read Git.aDNA + Lighthouse). **✅ SEEDED 2026-06-22** (`c45046f`) — lean 15-file stub, persona **Ilmarinen** (working-pin), data-bearing §8; co-sequences Git.aDNA P7b. |
| Nebula | `Nebula.aDNA` (node-side daemon install/config only) | **Network.aDNA / Venus** = substrate, topology, membership, ledger events (`substrate_kind: nebula`, `SUBSTRATE_JOINED/LEFT/CERT_ISSUED/REVOKED`); **Home.aDNA / Hestia** = node-local cert/config | Seam **ratified 2026-06-22** (operator GO, as-asserted; ground-truth re-read Network substrate + Home `inventory_connectivity`). **✅ SEEDED 2026-06-22** (`e457135`) — lean 15-file stub, persona **Heimdall** (working-pin), control-plane; Tailscale folds in (ADR-015); documents-not-disturbs the live `_nebula_pilot_10_43`. |

> **§B status (M3 / P3 close, 2026-06-22):** both overlap graphs forked on ratified seams (memos `coord_2026_06_20_keystone_forgejo_to_hopper` + `coord_2026_06_20_keystone_nebula_to_venus`, flipped `ratified`). **Cohort now 10** (8 §A + 2 §B). Owners' boundaries unchanged — these graphs own the software brick only.

## §B.1 — Recipe-quarry annotation (M3 Obj 3 · ADR-037 §3 · OUR ledger only)

Per the ratified quarry→home reframe ([[who/coordination/coord_2026_06_20_keystone_recipe_quarry_to_venus|recipe-quarry memo]], operator GO 2026-06-22): `Network.aDNA`'s `what/profiles/deployment_recipes/` is a **source-quarry**; the **install/operate/configure knowledge** for a software now has a **canonical home** in its `<Software>.aDNA` graph. **Substrate, topology, membership, and the ledger stay Network.aDNA's** (Venus) — only the software-deployment knowledge routes home. Annotated **here, never in her tree**; Venus places the README banner at her discretion.

| Network.aDNA recipe | Canonical home (software knowledge) | Stays Venus's |
|---|---|---|
| `recipe_sovereign_nebula_subnet.md` | `Nebula.aDNA` (node-side daemon install/operate) | subnet topology / sovereignty design |
| `recipe_nebula_public_lighthouse.md` | `Nebula.aDNA` (daemon + lighthouse-role operate) | lighthouse topology / placement |
| `recipe_edge_wireguard_pi.md` | folds under the mesh graph (`Nebula.aDNA`; WireGuard as a bootstrap-substrate section, cf. Tailscale ADR-015) | edge substrate topology |
| `recipe_l2_podman_ray_jupyterhub.md` | `Container.aDNA` (podman runtime) **+** `Lab.aDNA` (Ray/Jupyter) — already carries `canonical_home: "Lab.aDNA"` | L2 placement |
| `recipe_l1_macos_jupyterhub.md` | `Lab.aDNA` — already carries `canonical_home: "Lab.aDNA"` | L1 placement |
| `recipe_edge_substrate_only.md` · `recipe_edge_pi_reset.md` · `recipe_windows_l2_substrate.md` | *(pure substrate recipes — no software-graph home)* | **stay Venus's** |

**Proposed one-line banner for Venus to place** in `deployment_recipes/README.md` (her edit, her tree — we propose, she places):
> *Source-quarry (Operation Keystone, ADR-037 §3): these recipes are a quarry; the install/operate/configure knowledge for a given software has a canonical home in its `<Software>.aDNA` graph (nebula→`Nebula.aDNA`, podman→`Container.aDNA`, ray/jupyter→`Lab.aDNA`, …). Substrate, topology, membership, and the ledger remain `Network.aDNA`'s. Recipes route to the owning graph as graphs adopt them.*

## §C — ENRICH existing (retrofit the four wrappers; do NOT fork)

| Vault | Why it qualifies | Retrofit / mission |
|-------|------------------|--------------------|
| **Lab.aDNA** (Galileo) | Most mature deployment graph in the fleet — runbooks, doctor, **already has Home.aDNA credential routing**. ¾ conformant. | **Make it the reference implementation.** Add `git/` + `feedback/` + `iii/`. Sequence after the in-flight M-L13.5/13.6 merge. |
| **Harness.aDNA** (Stanley/Panacea) | Real inference stack (MLX/llama.cpp/vLLM/Ollama); full deploy ladder; `iss/` present | Add `feedback/` (clinical AAR loop is a natural fit) + `git/` + credential-routing |
| **ComfyUI.aDNA** (Vulcan) | Textbook software-surface Platform (install + models + LoRA + workflows); mid-re-genesis (M03) | Inject the paradigm + four wrappers **during M03**, before it hardens |
| **Obsidian.aDNA** | Already conceived as "install/configure/operate/update Obsidian across a node" — a deployment graph by intent | Add the four wrappers; align to the subtype |
| **Terminal.aDNA** (Berthier) | Deployable terminal (cmux soft-fork); BYO-LLM provider feeds Inference case | Add `feedback/` + `git/` + credential-routing |
| **Warp.aDNA** (Escoffier) | Config-overlay terminal home base; in active genesis (P3b) | `feedback/` + `iii/` + credential (`git/` N/A). **Operator-cleared staged coord memo only** (live gate) |
| **AWSBootstrap.aDNA** (Hestia) | Installs node software — **triple-overlap with Lighthouse + the cohort** | Not a simple retrofit: needs an **ADR reconciling AWSBootstrap ↔ Lighthouse ↔ cohort** (Lighthouse vision already flags this) |

## §D — DEFER (reasoned)

| Software | Reason | Revisit when |
|----------|--------|--------------|
| Tailscale | Bootstrap substrate, nested under Nebula (ADR-015); not load-bearing for the mesh | Fold as a section of the Nebula/mesh graph |
| Ray | Compute-dispatch; Network recipe already routes to Lab | Fold into Lab; split to `Ray.aDNA` only if a non-Jupyter Ray consumer emerges — **document-not-seed RE-AFFIRMED at C03/M34 (2026-07-02)**: stays fold-into-Lab (ADR-018 D1 keeps Ray = the compute executor; the M33 pilot's dispatch STUB targeted this Ray/latlab seam) |
| JupyterHub | **Already covered** — Lab.aDNA owns it | n/a (it IS the reference deployment graph) |
| Postgres | No standalone fleet use yet; planned Forgejo DB backend | Lighthouse P0 commits Forgejo+Postgres |
| Prefect | Operations C02 gated (ADR-018 `ratified-local`); install forbidden until the C2 gate fires | Author `Prefect.aDNA` now is OK; **execute only at C2** — ✅ **GRADUATED → §A at C03/M34 (2026-07-02)**: the C2 gate fired at the C03 P4 gate; install = Operations' M33 ephemeral pilot, not this graph's |
| Temporal | Durable-execution runner-up to Prefect (ADR-018 trade study); no live fleet use | **document-not-seed** (held in reserve at C03/M34, 2026-07-02); revisit only if Prefect's state-tracked retries prove insufficient cross-node (Phase D) |
| Redis | No live fleet Redis (PercySleep mentions are external) | A real consumer stands one up |
| Cloudflare | SaaS — no self-host install surface | Treat as operate/credential doc in aDNA.aDNA (ADR-031), not a deployment graph |

## §E — DO-NOT-CREATE

| Software | Reason |
|----------|--------|
| SQLite | Embedded library, no install/operate service surface |
| 1Password | Covered by Home.aDNA broker (and being supplemented by Bitwarden.aDNA) |
| Homebrew / `gh` | Node-bootstrap substrate (Home.aDNA / AWSBootstrap) / covered by Git.aDNA |

## Sequencing (operator-ratified order discipline)

Prove the paradigm on the **clean net-new** members (Nextcloud, nginx; rule FastAPI) **before** the overlapping ones (Forgejo, Nebula) and before enriching Store/Groupware. Every fork: local `git init` only, router row STAGED `#needs-human`, genesis-planning stub (no build). **Status: §A done (P2 — 8 graphs); §B done (P3 / M3 — Forgejo + Nebula, 2026-06-22); cohort registered (P4 / M4 — [[how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest|cohort manifest]], 10/10 conformance audited, 2026-06-22). Sequencing discipline satisfied. Campaign `completed`; §C enrichment wave remains (out of campaign → [[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]], gated on Lab M-L13.6).**

## Open decisions surfaced to the operator

1. **FastAPI** — seed a graph, or treat as library / future `Python.aDNA` parent? — **RESOLVED 2026-06-21: SEED `FastAPI.aDNA`** (`79bb176`); framework-vs-platform category deferred to its P0; `Python.aDNA` parent noted-not-seeded.
2. **Container runtime** — `Container.aDNA` Podman-default vs Docker? — **RESOLVED 2026-06-21: SEED `Container.aDNA`, rootless Podman fleet-default** (`5b248db`).
3. **Reverse proxy** — nginx vs **Caddy** (Lighthouse vision); recommend both-with-Caddy-default. — **RESOLVED (first wave): `Caddy.aDNA` seeded Caddy-fleet-default** (`04817c5`).
4. **Inference** — one consolidated `Inference.aDNA` vs per-runtime graphs? — **RESOLVED 2026-06-21: one consolidated `Inference.aDNA`** (`fcf747d`); backends llama.cpp/MLX/vLLM/Ollama.
5. **AWSBootstrap ↔ Lighthouse ↔ cohort** — author the reconciliation ADR before the cohort proliferates? — **OPEN** (backlog `idea_awsbootstrap_lighthouse_cohort_reconciliation`).
