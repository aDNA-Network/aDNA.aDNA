---
type: artifact
artifact_class: cohort_manifest
created: 2026-06-22
updated: 2026-08-19   # DP-16 RULED (operator) — shape A conditioned: Inference splits, control-plane for serving lanes + a declared §8 row for human chat surfaces. Prior same-day: roster re-verified against every vault's HEAD on disk (all 10 rows were stale)
status: active
campaign_id: campaign_keystone
campaign_phase: 4
last_edited_by: agent_rosetta
tags: [keystone, deployment_graph, cohort, manifest, roster, lighthouse, composition]
---

# Operation Keystone — Cohort Manifest

The authoritative register of the **software-deployment-graph cohort** seeded by Operation Keystone: one `<Software>.aDNA` graph per piece of software, each carrying install / operate / configure / update / interoperate context so an agent runs that software seamlessly on a node — for its operator and every other agent on that node. Each graph is a **brick** that `Lighthouse.aDNA` **composes** into a node; it is not a wall.

**Paradigm**: [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]] · **Category ruling**: [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (Platform.aDNA · `platform_subtype: software_deployment_graph`) · **Skeleton**: [[how/templates/template_software_graph_stub|template_software_graph_stub]] · **Disposition source**: [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|keystone_deconfliction_ledger]] (§A/§B).

> **Self-reference (SO#8):** this manifest *is* a worked example of the pattern it registers — it lists ten graphs that each demonstrate the four-wrapper conformance contract, and it federates rather than duplicates (the Lighthouse interlock is a *reference* handoff, not a copy of this roster). The structure is the lesson.

## Cohort roster (10 graphs)

All ten were seeded as **genesis-planning stubs** (no install / deploy / service-start / infra), **local `git init` / no remote**, **router row STAGED `#needs-human`** (Operation Production Tidy freeze — never self-inserted), each carrying the **four wrappers** + deployment-gated standing orders. Personas are **working-pins** (each ratified against the fleet registry at that graph's own P0).

> **Roster refreshed 2026-08-19** — pins and file counts re-read from each vault's HEAD on disk, not
> copied from a report. **Every one of the ten was stale**: the table below had described the cohort as
> it stood at seeding on 2026-06-22, roughly two months and many missions earlier. Three graphs are no
> longer stubs in any meaningful sense (`Inference` 165 files, `Container` 139, `Forgejo` 116).
>
> The refresh was prompted by **one** row — Pandora's 2026-08-09 memo reporting that row 6 read
> "lean stub" at a thirteen-mission-stale pin. Checking the other nine before editing hers found all
> nine equally stale. *Fixing only the row someone complained about would have left eight known-wrong
> rows in a file whose first line calls itself "the authoritative register."*
>
> **`Fork method` is a historical fact and does not age** — it records how a graph was *created*, and
> `Caddy`/`Bitwarden`'s divergence (below) is still the reconciliation it always was. The columns that
> aged are the pin, the file count, and the state a reader infers from them; **`State` is now its own
> column** so nobody has to read growth out of a file count again.

### §A — Net-new (proving instances; seeded P2, 2026-06-20→21)

| # | Software | Graph | Persona | Commit | Class | Fork method | Files | State (2026-08-19) |
|---|----------|-------|---------|--------|-------|-------------|-------|--------------------|
| 1 | Nextcloud (file-sync/collab) | `Nextcloud.aDNA` | Atlas | `2b8c0f3` | data-bearing (§8) | lean `template_software_graph_stub` | 29 | genesis stub |
| 2 | Reverse-proxy (Caddy fleet-default) | `Caddy.aDNA` | Portunus | `7708cd1` | data-bearing (fronts data) | full `skill_project_fork`† | 390 | built out (own work-stream) |
| 3 | Secrets (Bitwarden/Vaultwarden) | `Bitwarden.aDNA` | Cerberus | `5e37f8a` | data-bearing (secret store §8) | full `skill_project_fork`† | 399 | built out (WS-B / Keyring) |
| 4 | Object store (MinIO/AIStor) | `Store.aDNA` | Plutus | `f66fb72` | data-bearing (§8) | lean stub | 27 | genesis stub |
| 5 | Groupware (Stalwart JMAP) | `Groupware.aDNA` | Pheme | `d6bf3a8` | data-bearing (§8) | lean stub | 29 | genesis stub |
| 6 | Container runtime (**dual-runtime by node class** ‡) | `Container.aDNA` | Pandora | `80e29f7` | control-plane | lean stub | 139 | **P0–P4 CLOSED; five-verb design set complete; P5 open-partial (blocked on D-9 registry)** |
| 7 | Inference (llama.cpp/MLX/vLLM/Ollama) | `Inference.aDNA` | Pythia | `22b1bd2` | **split by ⛩ DP-16 (ruled)** — control-plane for the serving lanes; human chat surfaces are data-bearing (§8). See §DP-16 | lean stub | 165 | substantially built out; classification **ruled** 2026-08-19 (split) |
| 8 | API surface (FastAPI) | `FastAPI.aDNA` | Atalanta | `4833507` | control-plane | lean stub | 27 | genesis stub |

### §B — Overlap (seam-gated; seeded P3, 2026-06-22, only after seams ratified)

| # | Software | Graph | Persona | Commit | Class | Fork method | Files | State (2026-08-19) |
|---|----------|-------|---------|--------|-------|-------------|-------|--------------------|
| 9 | Forgejo (software install/config only) | `Forgejo.aDNA` | Ilmarinen | `69ec5c4` | data-bearing (§8) | lean stub | 116 | substantially built out |
| 10 | Nebula (node-side daemon only) | `Nebula.aDNA` | Heimdall | `bd66aa1` | control-plane | lean stub | 28 | genesis stub |

† **Fork-method divergence — documented, not reworked** (see reconciliation below). All remotes: **local-only**. All router rows: **STAGED `#needs-human`**.

‡ **Row 6 scope, per Pandora (2026-08-09):** rootless Podman on Keystone-profile nodes, Docker sanctioned on designated brownfield. **ADR-001 scopes Keystone Decision #4; it does not reverse it.** Since the `5b248db` pin: P0 closed 2026-07-02 (Pandora ratified, ADR-000 accepted); estate censused; 5 consumer `container/` wrappers seeded; P2 seam ADRs (storage tiers T0/T1/T2, placement + node-class register) `proposed` awaiting counter-signature; P3 wrapper-conformance audit + install/configure design; **two node designations executed** (`adna_rd_l1` 2026-08-08 — the fleet's first — and `L1` 2026-08-09); P4 operate/update/interoperate design closed 2026-08-09; Decision #8 ruled (OCI-native signing, digest-pin floor); feedback loop live. *Her file to report, this vault's file to write — the staged text was adopted with the pin and file count re-read rather than copied, because both had moved again in the ten days since she wrote it.*

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

- **Data-bearing → §8 (7):** Nextcloud · Caddy · Bitwarden · Store · Groupware · Forgejo ·
  **`Inference` — human chat surfaces only** (see the split row below).
- **Control-plane (4):** Container · **`Inference` — serving lanes only** · FastAPI · Nebula.

**`Inference.aDNA` is split, by ruling (⛩ DP-16, operator 2026-08-19 — shape A conditioned).** The
split is stated here in both columns rather than left to a footnote, because that is the whole
condition of the ruling:

| Lane | Class | Discipline |
|---|---|---|
| **Serving lanes** — a prompt is processed and forgotten (llama.cpp / MLX / vLLM / Ollama inference endpoints) | **control-plane** | ADR-000 §3 applies, narrowed to these lanes |
| **Human chat surfaces** — a transcript is kept (the OpenWebUI instance and any successor) | **data-bearing → §8** | Full ADR-016 §8: data-plane placement, storage backing, and ingress co-designed with **Venus** like any other §8 member |

**Why the row exists rather than an understanding.** An OpenWebUI instance persisted prompt and
response payloads on this node from **2026-04-10**, for four months, on a node whose ports register
listed `:3000` as an unidentified squatter — inside a graph whose manifest label said
control-plane. *The label is the reason nobody went looking.* Adopting shape A without writing the
data-bearing lane down as its own row would leave exactly the condition that produced those four
months in place, with the added disadvantage of now being deliberate.

## §DP-16 — Inference's classification, with a live instance attached (✅ RULED 2026-08-19 — shape A, conditioned)

**Status: RULED — operator, 2026-08-19, shape A conditioned.** Agents author, operators ratify
(§7.7); this section was authored on 2026-08-19 and signed the same day. **The split section above
now carries the ruling**: `Inference` appears in both columns, control-plane for its serving lanes
and data-bearing/§8 for its human chat surfaces, with the reason written beside it.

The question, the evidence, and the option set are left below **as they were put to the operator** —
an argument rewritten to agree with its own outcome is no longer an argument. See §Ratification for
what the signature covers.

### The collision

`Inference.aDNA` is classed **control-plane** here, and its own **ADR-000 §3** says the graph never
persists payloads. Pythia reports (2026-08-18, process-table sweep) that an **OpenWebUI instance has
been running on this node since 2026-04-10** — launchd `com.latticelabs.openwebui`, loopback
`127.0.0.1:3000`, consuming Ollama `:11434` directly, and **persisting prompt/response payloads to
`~/.open-webui/webui.db`**. No register anywhere carried it; the node ports register listed `:3000`
as an unidentified squatter. Both statements cannot stand.

Two process facts belong on the record with it. The 2026-08-07 memo that first raised DP-16 as a
*hypothetical* was **staged and never dispatched**, while Inference's own STATE read "awaiting
inbound: Rosetta on DP-16" for eleven days — Pythia records the delay as hers, and it is. And the
credential half was found and remediated same-day (C76 ⚠HIGH, secret inline in a world-readable
plist → rotated, Keychain-brokered, plist secretless + 0600). The history DB is untouched
(archive-never-delete). None of that settles the classification, which is this vault's to hold.

### The options

| | Shape | What it means |
|---|---|---|
| **A** | **Narrow ADR-000 §3 to the serving lanes** | The lanes and gateway never persist payloads; a governed human surface may, under its own declared row. Pythia's recommendation. |
| **B** | **Reclassify `Inference.aDNA` data-bearing** | The whole graph takes ADR-016 §8: data-plane placement, storage backing and ingress co-designed with Venus. |
| **C** | **Don't run the surface** | With a live instance this is a *removal* decision, not an abstention — the operator's, not Pythia's and not mine. |

### Recommendation — A, but not as written

**A is right on the merits.** Classification should track what software does, and the two things
inside this graph do different things: a serving lane processes a prompt and forgets it, while a
chat UI keeps a transcript. B over-applies §8 to lanes that hold nothing and would make the
discipline cheaper to ignore everywhere it *is* needed. C is a real option but not a classification
answer.

**A as stated has a failure mode, and this node just ran it for four months.** If the graph is
labelled control-plane while one of its surfaces persists, then the label stops answering the only
question it exists to answer — *does §8 apply to what is actually running here?* The OpenWebUI
instance survived unregistered precisely because the graph's label said there was nothing to
register.

So: **A, conditional on the human surface becoming a declared row rather than a footnote** — its
own line in this manifest, carrying data-bearing/§8 discipline, with placement and storage backing
co-designed with Venus like any other §8 row. The graph stays control-plane *for its serving lanes*
and the manifest says so in those words. A split classification that is written down is honest; one
that is inferred is how this happened.

**If the operator prefers B**, the cost is bounded and worth naming plainly: `Inference` moves to
the §8 column, the "Control-plane (4)" line becomes three, and Venus acquires a placement
co-design she has not been asked for yet.

### Ratification

- **Decision:** **shape A, conditioned** — `Inference.aDNA` stays **control-plane for its serving
  lanes**, stated in those words, **and its human chat surfaces become a declared data-bearing/§8
  row** in the split section above, with placement and storage backing co-designed with Venus like
  any other §8 member · **Ratified-by:** Stanley (operator) · **Date:** 2026-08-19 (in-chat, at the
  P2.4 session gate) · **Status:** **ruled**. Raised by Pythia (`Inference.aDNA`), 2026-08-07 +
  2026-08-18; authored here 2026-08-19, ruled same day. Reply delivered at
  [[who/coordination/coord_2026_08_19_rosetta_to_pythia_dp16_ruling|coord_2026_08_19_rosetta_to_pythia_dp16_ruling]].

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

## First live instances (per-graph execution gates)

| Date | Graph | Instance | Evidence |
|------|-------|----------|----------|
| 2026-08-08 | `Forgejo.aDNA` (Ilmarinen) | **aDNA-Labs R&D Node forge LIVE** — Forgejo 15.0.6 LTS compose on the R&D node (`jake_l1` membership row, Nebula `10.43.0.28`, mesh-only), §8-compliant per Venus's Shape-A scoped-R&D ruling; Git.aDNA **P7b spike instance**. Smoke: healthz + OIDC discovery over mesh, SSH+HTTP clone/push, restore drill PASSED, runner CI green. 8 graph replicas seeded to the `aDNA-Network` org (gitleaks-gated). | `Forgejo.aDNA/how/campaigns/campaign_forgejo_genesis/missions/mission_execute_rd_install_m05.md` (exit gate) — *registered here per that mission's exit-gate deliverable; edit by the Ilmarinen lane 2026-08-08* |

## Provenance

Recon ground truth (Network / Lab / Git / Lighthouse / Home STATE+CLAUDE, 2026-06-20→22) → ledger §A/§B → seeded stubs (P2/P3) → this register (P4). Every disposition here traces to a [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|de-confliction ledger]] row. Campaign master: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]].
