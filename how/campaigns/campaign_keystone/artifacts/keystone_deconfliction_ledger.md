---
type: artifact
artifact_class: deconfliction_ledger
created: 2026-06-20
updated: 2026-06-21
status: drafted
campaign_id: campaign_keystone
campaign_phase: 1
status_note: ratified at P1 gate 2026-06-20
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

## §B — SCOPE, don't duplicate (overlap; seam-gated, P3)

| Software | Graph (scoped) | Owner keeps | Seam to ratify |
|----------|----------------|-------------|----------------|
| Forgejo | `Forgejo.aDNA` (software install/config only) | **Git.aDNA / Hopper** = provider contract; **Lighthouse** = deployment topology; **Venus** = data-plane placement (§8) | Coord memo to Hopper + Lighthouse; seed only on ratified seam |
| Nebula | `Nebula.aDNA` (node-side daemon install/config only) | **Network.aDNA / Venus** = substrate, topology, membership, ledger events (`substrate_kind: nebula`, `SUBSTRATE_JOINED/LEFT/CERT_ISSUED/REVOKED`); **Home.aDNA / Hestia** = node-local cert/config | Coord memo to Venus; reconcile vs `_nebula_pilot_10_43` (= `lattice_lab_pi` 10.43.0.4, live); seed only on ratified seam |

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
| Ray | Compute-dispatch; Network recipe already routes to Lab | Fold into Lab; split to `Ray.aDNA` only if a non-Jupyter Ray consumer emerges |
| JupyterHub | **Already covered** — Lab.aDNA owns it | n/a (it IS the reference deployment graph) |
| Postgres | No standalone fleet use yet; planned Forgejo DB backend | Lighthouse P0 commits Forgejo+Postgres |
| Prefect | Operations C02 gated (ADR-018 `ratified-local`); install forbidden until the C2 gate fires | Author `Prefect.aDNA` now is OK; **execute only at C2** |
| Redis | No live fleet Redis (PercySleep mentions are external) | A real consumer stands one up |
| Cloudflare | SaaS — no self-host install surface | Treat as operate/credential doc in aDNA.aDNA (ADR-031), not a deployment graph |

## §E — DO-NOT-CREATE

| Software | Reason |
|----------|--------|
| SQLite | Embedded library, no install/operate service surface |
| 1Password | Covered by Home.aDNA broker (and being supplemented by Bitwarden.aDNA) |
| Homebrew / `gh` | Node-bootstrap substrate (Home.aDNA / AWSBootstrap) / covered by Git.aDNA |

## Sequencing (operator-ratified order discipline)

Prove the paradigm on the **clean net-new** members (Nextcloud, nginx; rule FastAPI) **before** the overlapping ones (Forgejo, Nebula) and before enriching Store/Groupware. Every fork: local `git init` only, router row STAGED `#needs-human`, genesis-planning stub (no build).

## Open decisions surfaced to the operator

1. **FastAPI** — seed a graph, or treat as library / future `Python.aDNA` parent? — **RESOLVED 2026-06-21: SEED `FastAPI.aDNA`** (`79bb176`); framework-vs-platform category deferred to its P0; `Python.aDNA` parent noted-not-seeded.
2. **Container runtime** — `Container.aDNA` Podman-default vs Docker? — **RESOLVED 2026-06-21: SEED `Container.aDNA`, rootless Podman fleet-default** (`5b248db`).
3. **Reverse proxy** — nginx vs **Caddy** (Lighthouse vision); recommend both-with-Caddy-default. — **RESOLVED (first wave): `Caddy.aDNA` seeded Caddy-fleet-default** (`04817c5`).
4. **Inference** — one consolidated `Inference.aDNA` vs per-runtime graphs? — **RESOLVED 2026-06-21: one consolidated `Inference.aDNA`** (`fcf747d`); backends llama.cpp/MLX/vLLM/Ollama.
5. **AWSBootstrap ↔ Lighthouse ↔ cohort** — author the reconciliation ADR before the cohort proliferates? — **OPEN** (backlog `idea_awsbootstrap_lighthouse_cohort_reconciliation`).
