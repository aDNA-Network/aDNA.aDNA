---
type: artifact
artifact_class: convergence_status
created: 2026-06-24
operation: "Operation Keystone — Convergence, Close-out & Cohort Genesis"
executor: agent (Cowork / Berthier for Stanley)
campaign_id: campaign_keystone
status: complete
tags: [keystone, convergence, status, cohort, genesis, exemplar, decision]
---

# Convergence Status — Software-Element Context Graph tier (one page)

## Is the tier converged for launch?

**Scaffold: YES — shipped and conformant.** **Substance: NO, by design — 1/10 populated (the exemplar), 9 pending the operator gate.** One decision outstanding (naming). The cohort-wide genesis pass is specified and ready; it does not run until the operator reviews the exemplar.

## Scaffold (verified 2026-06-24, disk-authoritative)

| Element | State |
|---------|-------|
| Paradigm spine | ADR-039 (umbrella lens) + ADR-037 (deploy subtype) **accepted**; both patterns present; campaign **completed** |
| Cohort (10) | all present; **four-wrapper conformance 10/10** (re-audited, sample-then-confirm); **all local-only**; rows STAGED `#needs-human` |
| Composition graphs | `Lighthouse` (stub, persona TBD, build gate intact, composes by reference) · `Astro` ≡ `SiteForge` (**one graph**, Astro canonical on disk) · `Lab` (Galileo; M-L13.6 deployed) |
| Disposed candidates | `Vercel`/`Ray`/`Jupyter` all **absent**, correctly homed (Astro skills / Lab) |

Two §0 inaccuracies corrected (no halt): symlink direction (Astro is the real dir) → routed to the naming memo; TypeScript phase (P0+P1 ratified, populated) → escalated as the Astro/TS boundary risk.

## Substance (the real gap)

**All 10 cohort graphs carry ZERO five-verb software-ops context.** 8 lean stubs have no `what/context/`; Caddy + Bitwarden carry 28 generic-scaffold md each (no software-ops). Phase 4 is the entire remaining weight.

| Graph | Profile | Populated? |
|-------|---------|-----------|
| **Container** | core | ✅ **EXEMPLAR — populated + rubric-passed + indexed (paused at gate)** |
| Caddy · Bitwarden · Nebula | core | ⏸ pending (Wave 1) |
| Nextcloud · Groupware · Forgejo · Store | collab | ⏸ pending (Wave 2) |
| Inference | inference | ⏸ pending (Wave 3) |
| FastAPI | ops | ⏸ pending (Wave 4) |

## The exemplar result (proving instance)

`Container.aDNA` (rootless Podman, OCI envelope) — two research files (`operations` + `interop`) under `what/context/container_runtime/`, version-pinned (Podman 5.8.3), four-source-type, indexed in topic + library AGENTS.md.

**Quality gate:** independent adversarial audit (subagent, vs. the 6-axis rubric) → **both files composite 4.2, no floor violation, self-scores match axis-for-axis, all version/technical claims verified current** (5.8.3 confirmed via endoflife.date). **Method proven.** **PAUSED at the gate for operator review.**

## The one decision the commander must make

**SiteForge ↔ Astro canonical name.** Memo: `Home.aDNA/who/coordination/coord_2026_06_24_siteforge_astro_naming_decision.md`. The rename to Astro is ~90% executed (FS + GitHub + 10-vault name-sweep). **Option A** (ratify Astro) = minimum waste; only the carved `siteforge/`→`astro/` dir-rename + pt19 regen remain; a mitigated word-collision persists. **Option B** (revert to SiteForge) = honors the standing instinct, cancels the dir-rename, kills the collision — but reverses pt07 + GitHub + 10 consumer vaults. **Hard halt — no rename executed.**

## Cohort-wide genesis order (on operator GO after exemplar review)

Wave 1 **core**: Container (done) → **Caddy → Bitwarden → Nebula**; Wave 2 **collab**: Nextcloud → Groupware → Forgejo → Store; Wave 3 **inference**: Inference; Wave 4 **ops**: FastAPI. **One graph fully populated + quality-passed before the next.** Method: Context7-bound (memo to Rosetta) / official-docs-bound, rubric-gated. Plan: `cohort_genesis_research_plan.md` (this dir).

## What stays gated, and why

| Gated item | Gate | Why |
|------------|------|-----|
| Cohort-wide genesis (9 graphs) | operator review of the exemplar | proving-instance discipline — prove method once, then replicate |
| Naming freeze | operator A/B decision | the one live decision; freeze in one sweep |
| Lab §C retrofit | Galileo + operator (gate **lifted** — M-L13.6 deployed) | staged memo to Galileo; touches Lab tree |
| Other six §C retrofits | per-vault gates (ComfyUI=M03, Obsidian=P0, Warp=live P3b, …) | staged plan; no batch-write |
| AWSBootstrap reconciliation ADR | operator greenlight | scope memo staged; ADR not authored |
| Astro/TS boundary | settle before TS P2/M2 | escalated; boundary memo staged to Milner |
| `skill_context_research` / Context7 wiring | Rosetta | new standard material; proposal staged |
| Every cohort install/deploy | per-graph execution gate | genesis-planning stubs only — nothing runs |

**No new campaign opened.** This convergence executed within the completed Operation Keystone's artifact set; no gap warranted a fresh campaign.

---

## Update 2026-06-24 — graph 2 (`Caddy`) populated → cohort **2/10**

Operator authorized replication and scoped the next graph to **`Caddy`** (Wave-1 core). Executed the genesis pass as the **2nd proving instance**, sequentially (method now twice-proven):

- **Skill canonicalized:** `aDNA.aDNA/how/skills/skill_context_research.md` authored + registered (the upstream research-pass skill the cohort inherits — official-docs-bound, Context7-preferred-when-wired, rubric-bound). The Context7 proposal (`coord_2026_06_24_context7_research_instrument`) is **dispositioned `resolved`** (greenlit official-docs-bound; MCP wiring deferred).
- **`Caddy.aDNA/what/context/reverse_proxy/`** populated: `context_research_caddy_operations.md` (five verbs + Decision Posture; **Caddy 2.11.4**, volatile) + `context_research_caddy_interop.md` (composition seams + **ADR-016 §8** data-bearing anchor, stable) + topic `AGENTS.md`; library `what/context/AGENTS.md` row added.
- **Quality gate — independent adversarial audit: both files PASS.** Operations composite **4.2**; interop axes **4/4/4/4/5** (composite 4.2); no floor; `source_diversity` 4–5 types; every version/technical claim fact-checked current (**Caddy 2.11.4 confirmed latest stable, no-LTS support model**); cross-topic seam with the `Container` exemplar verified reciprocal. *(Auditor's one suggested change — bump interop `quality_score` to 4.4 — declined: (4+4+4+4+5)/5 = 4.2, an auditor arithmetic slip; the frontmatter is internally consistent at 4.2.)*

**Substance now 2/10** (Container exemplar + Caddy). **Next = `Bitwarden` → `Nebula`** (finish Wave-1 core), one graph fully populated + quality-passed before the next. Naming freeze + the §C / AWSBootstrap / Astro-TS items remain operator-gated (`recommendations_for_review.md`). Caddy is **local-only (no push)**.

---

## Update 2026-06-24 — graph 3 (`Bitwarden`) populated → cohort **3/10**

Continued the campaign on operator instruction; ran the genesis pass on **`Bitwarden`** (Wave-1 core, graph 3) as the **3rd proving instance** (method now thrice-proven), depth-first after Caddy:

- **`Bitwarden.aDNA/what/context/secret_store/`** populated: `context_research_bitwarden_operations.md` (five verbs + Decision Posture; **Vaultwarden 1.36.0 · `bw` 2026.5.0 · `bws` 2.1.0**, official self-host = "lite"; volatile) + `context_research_bitwarden_interop.md` (composition seams + the **never-a-second-broker** `Home.aDNA` seam + **ADR-016 §8** data-bearing anchor + per-graph scoping contract; stable) + topic `AGENTS.md`; library `what/context/AGENTS.md` row added. Official-docs-bound (Context7 not wired).
- **Quality gate — independent adversarial audit: both files PASS, zero inflation.** Operations composite **4.2** (4/5/4/4/4); interop composite **4.2** (4/4/4/4/5); no floor; `source_diversity` 4–5 types. Every version/technical claim re-verified current independently — Vaultwarden **1.36.0** latest stable + a security release (icon-SSRF GHSA-72vh-x5jq-m82g fixed); the **WebSocket-on-HTTP-port-since-1.29.0 / port-3012-removed-1.31.0** version trap confirmed precisely; **secret-hygiene clean (no values — doubly load-bearing surface)**; the `Caddy` `core`-profile reciprocity confirmed real. The auditor's one non-blocking enrichment (the `@bitwarden/cli` npm **2026.4.0** supply-chain compromise caveat) was **incorporated** into the install posture + anti-patterns.
- **Repo-state fix (fork-bridge artifact, discovered + resolved):** `Bitwarden.aDNA/.git` carried a stale `core.worktree = /sessions/…/mnt/…` (baked in by the VM↔host-bridge fork) + a dead `index.lock` — together breaking every git op with `fatal: Invalid path '/sessions'`. Both cleared (worktree override removed; lock cleared under a `pgrep -x git` guard) so the local repo is operable. Bitwarden commit `70e6f8a`, **local-only (no push)** — secret-surface identity (Rule 4).

**Substance now 3/10** (Container exemplar + Caddy + Bitwarden). **Next = `Nebula`** (finish Wave-1 core; its lean stub has no `what/context/` yet → create `overlay_mesh/`), one graph fully populated + quality-passed before the next. This is **Keystone context authoring into the vault — NOT a Bitwarden-genesis (Operation Keyring) P0 advance**, which stays operator-gated. Naming freeze + the §C / AWSBootstrap / Astro-TS items remain operator-gated (`recommendations_for_review.md`).

---

## Update 2026-06-25 — graph 4 (`Nebula`) populated → cohort **4/10**; **Wave-1 `core` COMPLETE**

Continued the campaign on operator instruction ("please continue"); ran the genesis pass on **`Nebula`** (Wave-1 core, graph 4 — the final core graph) as the **4th proving instance**, depth-first after Bitwarden:

- **`Nebula.aDNA/what/context/overlay_mesh/`** populated (the lean stub had **no `what/context/`** — created the tree + a fresh library `AGENTS.md`): `context_research_nebula_operations.md` (five verbs + Decision Posture; **Nebula 1.10.3**, volatile) + `context_research_nebula_interop.md` (the **three-way §B seam** [Venus substrate/CA · Hestia node-config §9 · this graph's daemon brick] + CA **key-separation** + overlay-as-substrate-for-services; stable) + topic `AGENTS.md`. Official-docs-bound (Context7 not wired).
- **Quality gate — independent adversarial audit:** operations **PASS-AS-IS** (composite **4.2**; the auditor independently scored it **4.4** — under-scored, not inflated); interop **PASS-WITH-FIXES** — the audit **caught one inflated axis** (an overstated `Caddy` "reachable on the Nebula overlay" reciprocity — `Caddy` is the public ingress, not a mesh-only-overlay service) → **content corrected + `cross_topic_coherence` 5→4, composite 4.0** (honored the independent re-score, did **not** re-inflate; `Bitwarden` reciprocity verified to hold). Every version/technical claim re-verified current — **Nebula 1.10.3** latest stable + the **CVE-2026-25793** security floor; the cert-v2 + `default_local_cidr_any` 1.10 transitions confirmed; **secret-hygiene clean** (no key/cert bodies; `ca.key` correctly substrate-side only). Nebula commit `689a5c5`, **local-only (no push)**; Nebula's `.git` was clean (no stale `core.worktree` fork-bridge artifact, unlike Bitwarden).

**Substance now 4/10** (Container exemplar + Caddy + Bitwarden + Nebula) — **Wave-1 `core` COMPLETE**. **Next = Wave 2 `collab`: `Nextcloud` → `Groupware` → `Forgejo` → `Store`** (data-bearing → ADR-016 §8 anchors), one graph fully populated + quality-passed before the next; then Wave 3 `inference` (`Inference`), Wave 4 `ops` (`FastAPI`). This is **Keystone context authoring — NOT a Nebula-genesis P0 advance** (operator-gated, SO#1; documents-not-disturbs the live mesh). Naming freeze + the §C / AWSBootstrap / Astro-TS items remain operator-gated.

---

## Update 2026-06-25 — graph 5 (`Nextcloud`) populated → cohort **5/10**; **Wave-2 `collab` STARTED**

Continued the campaign on operator instruction (scope = **all of Wave-2 collab** this session). Ran the genesis pass on **`Nextcloud`** (Wave-2 collab, graph 5 — the first collab member, the clean net-new proving instance for the wave), depth-first after Nebula:

- **`Nextcloud.aDNA/what/context/file_collaboration/`** populated (lean stub had **no `what/context/`** → created the tree + a fresh library `AGENTS.md`): `context_research_nextcloud_operations.md` (five verbs + Decision Posture; **Nextcloud Server 34.0.1** "Hub 26 Spring"; 3-majors-maintained / no-LTS / 32 EOL 2026-09-30; volatile) + `context_research_nextcloud_interop.md` (four-wrapper brokers + profile-neighbour seams + the **ADR-016 §8** data-plane/Venus anchor + a §C data-placement/backup distinctive + the **reciprocal Caddy seam** [`.well-known/{carddav,caldav}` redirects + long timeouts + `trusted_proxies`/`overwrite*` agreement]; stable) + topic `AGENTS.md`. Official-docs-bound (Context7 not wired).
- **Quality gate — independent adversarial audit: both files PASS, no inflation.** Operations composite **4.2** (4/5/4/4/4); interop composite **4.2** (4/4/4/4/5); no floor; `source_diversity` ≥3 types both. Every version/technical claim independently re-verified current vs ≥2 official feeds — **Nextcloud 34.0.1** confirmed latest stable (endoflife.date + GitHub releases + changelog), the 3-majors/no-LTS/32-EOL-2026-09-30 model, PHP 8.5-recommended, PostgreSQL-recommended (AIO ships PG18), the skip-major-unsupported rule, the **S3-primary-new-install-only** rule (exact-quote match), and the **`user_oidc ≥ 8.2.2` (CVE-2026-45278)** floor. The **Caddy reciprocity verified genuinely bidirectional** (both interop files name the same three artifacts — no Nebula-style false claim); the Bitwarden "no direct seam" entry correctly *refuses* an inflated reciprocity; **secret-hygiene clean** (names-only). Two trivial non-gating nits folded in (PHP-8.2 "deprecated at 33, dropped at 34"; de-pinned the unverifiable AIO app tag).
- **Repo note:** `Nextcloud.aDNA/.git/config` was **clean** (no fork-bridge `core.worktree`, unlike Bitwarden) but carried **two stale 0-byte locks** (`HEAD.lock` + `index.lock` from the 2026-06-20 fork) — cleared under a `pgrep -x git` guard before the first commit. Nextcloud on branch `master`; **local-only (no push)**.

**Substance now 5/10** (Wave-1 core + Nextcloud). **Next = `Groupware` → `Forgejo` → `Store`** (finish Wave-2 collab), one graph fully populated + quality-passed before the next. Operator-gated items (naming, §C, AWSBootstrap ADR, Astro-TS, each graph's own P0) untouched.

---

## Update 2026-06-25 — graph 6 (`Groupware`) populated → cohort **6/10**

Ran the genesis pass on **`Groupware`** (Wave-2 collab, graph 6 — backend **Stalwart**), depth-first after Nextcloud:

- **`Groupware.aDNA/what/context/mail_groupware/`** populated (lean stub had no `what/context/` → created the tree + library `AGENTS.md`): operations (five verbs + Decision Posture; **Stalwart 0.16.11**, pre-1.0, AGPL/SELv2; **deliverability the dominant risk** — SPF/DKIM/DMARC/MTA-STS/PTR + port-25 egress; the **0.15→0.16 breaking-config migration** runbook; volatile) + interop (four-wrapper + neighbour seams + **ADR-016 §8** anchor + §C data-placement/backup [DKIM keys live in the datastore] + the **HTTPS-vs-mail-port reverse-proxy boundary** — Caddy fronts the HTTPS surface only; mail ports go L4/direct; stable) + topic `AGENTS.md`. Official-docs-bound (Context7 not wired).
- **Quality gate — independent adversarial audit: both PASS-WITH-FIXES, composite 4.0.** The auditor independently re-scored **4.0/4.0** (docked ops `actionability` 5→4 and interop `source_diversity` 4→3) — **honored, not re-inflated** (Nebula discipline). It caught **one material recurring factual error: third-party OIDC was mis-gated as Enterprise — it is Community; only per-domain directory backends are Enterprise** — corrected in 6 places; plus a bootstrap-password wording fix (it IS in the service log, printed once per bootstrap), the migrate-flow intermediates named, and a practitioner source added to the interop. Version pin **0.16.11 verified to the day** (GitHub releases + stalw.art); the **reverse-proxy boundary verified correct and NOT overstated** (names `caddy-l4` as the L4 escape hatch); **no false Caddy reciprocity** (Caddy's interop confirmed not to mention Groupware — the asymmetry honestly marked as a NON-seam); **secret-hygiene clean** (DKIM/TLS/etc. names-only).
- **Repo note:** `Groupware.aDNA/.git` clean (no fork-bridge `core.worktree`, no locks); initial commit `85b4531`. **Local-only (no push).**

**Substance now 6/10** (Wave-1 core + Nextcloud + Groupware). **Next = `Forgejo` → `Store`** (finish Wave-2 collab). Operator-gated items untouched.

---

## Update 2026-06-26 — graph 7 (`Forgejo`) populated → cohort **7/10**

Ran the genesis pass on **`Forgejo`** (Wave-2 collab, graph 7 — the **§B overlap** member, seam ratified 2026-06-22), depth-first after Groupware:

- **`Forgejo.aDNA/what/context/git_forge/`** populated (lean stub had no `what/context/` → created tree + library `AGENTS.md`): operations (five verbs + Decision Posture; **Forgejo 15.0.3 LTS** — latest stable AND current LTS; **track the LTS line**; v15 breaking changes [cookie rename → mass re-login; rootless config-path back-compat removed; public-token authz]; volatile) + interop (four-wrapper [`git/` doubly load-bearing] + the **§B overlap boundary** [Git.aDNA = provider contract · Lighthouse = deployment topology · Venus = §8 placement · this graph = software brick only] + the **HTTP-vs-git-over-SSH** boundary + the **repos-on-disk vs blobs-to-S3** distinction; stable) + topic `AGENTS.md`. Official-docs-bound (Context7 not wired; researched in the main loop after a transient subagent 529).
- **Quality gate — independent adversarial audit: both PASS, composite 4.0** (auditor re-scored 4.0/4.0 — docked ops `actionability` 5→4 + interop `source_diversity` 4→3; **honored, not re-inflated**). Version pin **15.0.3 LTS verified to the day** (endoflife.date + forgejo.org + the v15 release notes); all three v15 breaking changes verbatim; the **repos-stay-on-filesystem / blobs-to-S3** boundary confirmed (codeberg #2664); the **Caddy reciprocity confirmed genuinely real** (Caddy's interop names Forgejo + marks the git-over-SSH bypass — no Nebula-style fabrication); the **§B seam matches `CLAUDE.md` + ADR-000 verbatim with no re-authoring drift**; secret-hygiene clean. One framing nit fixed (rootless config path moved in v8.0.0; v15 removed the legacy back-compat) + a practitioner source added.
- **Repo note:** `Forgejo.aDNA/.git` clean (no fork-bridge `core.worktree`, no locks); initial commit `c45046f`. **Local-only (no push).**

**Substance now 7/10** (Wave-1 core + Nextcloud + Groupware + Forgejo). **Next = `Store`** (the final Wave-2 collab graph → Wave-2 COMPLETE). Operator-gated items untouched.

---

## Update 2026-06-26 — graph 8 (`Store`) populated → cohort **8/10**; **Wave-2 `collab` COMPLETE**

Ran the genesis pass on **`Store`** (Wave-2 collab, graph 8 — the wave's final member; the object-storage substrate the other data-bearing members back against), depth-first after Forgejo:

- **`Store.aDNA/what/context/object_store/`** populated (lean stub had no `what/context/` → created tree + library `AGENTS.md`): operations (five verbs + Decision Posture; **S3 API envelope** — generic-canonical, backend-swappable; the **decisive currency finding: community `minio/minio` ARCHIVED Apr 25 2026**, live options = **pgsty/minio "SILO"** [AGPL fork, `RELEASE.2026-06-18`, CVE-patched, console restored] / **AIStor** [proprietary; Free = single-node] / Garage / Ceph-RGW / RustFS; erasure coding ≥4 drives + the `mc` runbook; volatile) + interop (Store as the **shared backing substrate** — reciprocal seams to **Nextcloud** primary-storage, **Forgejo** LFS/packages [**not** git repos], **Groupware** blobs, **Inference** model-weights [Wave-3 cross-ref] + the per-app-policy-scoped-credential discipline + **ADR-016 §8** data-plane placement; stable) + topic `AGENTS.md`. Official-docs-bound (Context7 not wired).
- **Quality gate — independent adversarial audit: both PASS, composite 4.0** (auditor re-scored 4.0/4.0 — docked ops + interop `source_diversity`; **honored, not re-inflated**). The auditor judged the **MinIO-archived / pgsty-SILO / AIStor-proprietary currency thesis "real, current, correctly sourced — impressive for a fast-moving 2026 landscape."** Three currency fixes folded in: **archive date Apr 25 2026** (not ~Feb); **pgsty pin bumped to `RELEASE.2026-06-18`** (a newer release existed); **Prometheus v2 = legacy-but-supported, not formally deprecated** (the older `/minio/prometheus/metrics` is the deprecated path). **Reciprocal backing seams verified real** against the Nextcloud / Forgejo / Caddy interop files (no fabrication); the Caddy seam reframed bidirectional (Caddy fronts the S3 API ↔ Caddy uses Store as a cert-storage backend). **Secret-hygiene clean** (per-app policy-scoped keys mandated; never the root credential).
- **Repo note:** `Store.aDNA/.git` clean (no fork-bridge `core.worktree`, no locks); initial commit `77d2e88`. **Local-only (no push).**

**Substance now 8/10 — Wave-2 `collab` COMPLETE** (Nextcloud + Groupware + Forgejo + Store, atop Wave-1 core). **Next = Wave 3 `inference` (`Inference`** — revisits `Container` + `Store`), then **Wave 4 `ops` (`FastAPI`** — revisits `Caddy`). One graph fully populated + quality-passed before the next. Operator-gated items (naming, §C retrofits, AWSBootstrap ADR, Astro-TS, each graph's own P0) untouched.
