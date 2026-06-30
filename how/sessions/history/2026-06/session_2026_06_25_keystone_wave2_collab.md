---
type: session
session_id: session_2026_06_25_keystone_wave2_collab
created: 2026-06-25
status: completed
tier: 2
campaign: campaign_keystone
persona: rosetta
last_edited_by: agent_stanley
tags: [session, keystone, cohort_genesis, wave2, collab, nextcloud, groupware, forgejo, store, context_research]
updated: 2026-06-26
---

# Session — Operation Keystone cohort genesis: Wave-2 `collab` (graphs 5–8)

## Intent

Continue the campaign. Operator scope this session = **all of Wave-2 `collab`** — execute `skill_context_research` for **`Nextcloud` (5/10) → `Groupware` (6/10) → `Forgejo` (7/10) → `Store` (8/10)**, depth-first, **one graph fully populated + independently-audited + indexed + committed before the next starts** (campaign §3 / SO#6 — never parallelize the graphs). All four are **data-bearing → ADR-016 §8** anchors. Wave-1 `core` (Container/Caddy/Bitwarden/Nebula) is complete (4/10).

## Scope

- **Create** (in each `<Name>.aDNA/`, local-only repos — NO push, Rule 4): `what/context/<topic>/context_research_<sw>_operations.md` + `..._interop.md` + `<topic>/AGENTS.md` + (if stub has none) library `what/context/AGENTS.md`.
- **Modify** (each `<Name>.aDNA`): `STATE.md` intake-log line.
- **Modify** (aDNA.aDNA records): `…/convergence_20260624/convergence_status.md` (4/10→8/10, per-graph sections), `STATE.md` (§campaign_keystone + activity log + Resume-Here + frontmatter — at close), this session → history.

## Guardrails (load-bearing)

- **All four are data-bearing → ADR-016 §8** — each runs on a **data-plane node the lighthouse coordinates, never the control-plane host**; placement/storage/ingress co-designed with Venus (`Network.aDNA`). Interop carries the §8 anchor (like Caddy/Bitwarden).
- **Federate, never duplicate.** `Forgejo` especially: governs the Forgejo **software surface** only — `Git.aDNA` (Hopper) owns git-ops doctrine / provider abstraction; `Lighthouse.aDNA` owns the deployable forge node. Interop points TO those owners.
- **Local-only, no push** for each sibling vault. **Explicit-path git staging** (never `git add -A`). Before the first git op in each repo, check `.git/config` for a stale `core.worktree` fork-bridge artifact + dead `*.lock` (fix under a `pgrep -x git` guard). aDNA.aDNA records: **commit-only** (no push).
- **Stubs only** — context authoring; **NOT** a per-graph P0 advance (each graph's P0 charter stays operator-gated, SO#1).
- **Method:** `skill_context_research` (official-docs-bound; Context7 not wired). Version pin verified ≥2 official feeds — **never guess**. **Independent adversarial audit** (separate subagent: re-score 6 axes + version-verify) before filing; gate = composite ≥ 3.5, no axis ≤ 2, source_diversity ≥ 3 types.

## Progress log

### ✅ Graph 5/10 — `Nextcloud.aDNA` (Atlas) — DONE, audit PASS
- Topic `file_collaboration/`; **Nextcloud Server 34.0.1** (Hub 26 Spring). Files: operations (5 verbs + Decision Posture, volatile) + interop (4-wrapper + neighbour seams + §8 anchor + §C data-placement/backup + reciprocal Caddy seam, stable) + topic `AGENTS.md` + library `AGENTS.md` (stub had none).
- **Audit: both PASS composite 4.2**, no floor, source ≥3 types, version verified ≥2 feeds, Caddy reciprocity confirmed real, secrets clean. 2 trivial non-gating nits folded in.
- Repo: `.git/config` clean; cleared 2 stale 0-byte locks (`HEAD.lock`/`index.lock` from fork) under `pgrep` guard. Branch `master`; local-only commit. convergence_status → **5/10**.

### ✅ Graph 6/10 — `Groupware.aDNA` (Pheme) — DONE, audit PASS-WITH-FIXES
- Topic `mail_groupware/`; **Stalwart 0.16.11** (pre-1.0, AGPL/SELv2). Files: operations (5 verbs + deliverability + 0.15→0.16 migration runbook, volatile) + interop (4-wrapper + §8 + §C DKIM-keys-in-datastore backup + the **HTTPS-vs-mail-port** boundary [Caddy HTTPS-only; mail L4/direct], stable) + indexes.
- **Audit: both PASS-WITH-FIXES composite 4.0** (auditor docked ops-actionability + interop-source_diversity; honored, not re-inflated). Caught+fixed a material error (**third-party OIDC is Community, not Enterprise** — 6 places) + bootstrap-pw wording. Version 0.16.11 verified to the day; reverse-proxy boundary correct + un-inflated; no false Caddy reciprocity; secrets clean.
- Repo clean (no fork-bridge/locks); local-only commit. convergence_status → **6/10**.
### ✅ Graph 7/10 — `Forgejo.aDNA` (Ilmarinen) — DONE, audit PASS (§B overlap)
- Topic `git_forge/`; **Forgejo 15.0.3 LTS** (latest stable AND current LTS). Files: operations (5 verbs + track-the-LTS-line + v15 breaking changes, volatile) + interop (4-wrapper [`git/` doubly load-bearing] + the **§B overlap boundary** [Git.aDNA=provider contract · Lighthouse=topology · Venus=§8 · this=brick] + HTTP-vs-git-over-SSH + repos-on-disk-vs-blobs-to-S3, stable) + indexes.
- **Audit: both PASS composite 4.0** (auditor docked ops-actionability + interop-source_diversity; honored). Version 15.0.3 LTS verified to the day; v15 breaking changes verbatim; §B seam matches governance no-drift; **Caddy reciprocity confirmed real**; secrets clean. Fixed a rootless-path framing nit + added a practitioner source.
- Research done in main loop (transient subagent 529). Repo clean; local-only commit. convergence_status → **7/10**.
### ✅ Graph 8/10 — `Store.aDNA` (Plutus) — DONE, audit PASS → **Wave-2 collab COMPLETE**
- Topic `object_store/`; **S3 API envelope** (backend-swappable). Files: operations (5 verbs + the **MinIO-archived Apr 25 2026 / pgsty-SILO `RELEASE.2026-06-18` / AIStor-proprietary / Garage / Ceph** landscape + erasure-coding + `mc` runbook, volatile) + interop (Store as the **shared backing substrate** — reciprocal seams to Nextcloud/Forgejo[LFS-not-repos]/Groupware/Inference + per-app-scoped-creds + §8, stable) + indexes.
- **Audit: both PASS composite 4.0** (auditor docked source_diversity on both; honored). MinIO-archived/pgsty-SILO currency thesis judged "real, current, correctly sourced." 3 currency fixes folded in (archive Apr 25; pgsty → 2026-06-18; Prom v2 legacy-not-deprecated); reciprocal backing seams verified; secrets clean.
- Repo clean; local-only commit. convergence_status → **8/10 — Wave-2 COMPLETE**.

## SITREP

**Completed** — **Operation Keystone Wave-2 `collab` COMPLETE (graphs 5–8 → cohort 8/10).** All four collab graphs populated via `skill_context_research`, each with operations + interop `context_research` files + topic & library `AGENTS.md`, **independently adversarial-audited PASS**, indexed, committed **local-only**:
- **Nextcloud** (Atlas) — `file_collaboration/`; Nextcloud Server **34.0.1**; composite **4.2**. Sibling `7396758`.
- **Groupware** (Pheme) — `mail_groupware/`; **Stalwart 0.16.11**; composite **4.0**; audit caught **third-party-OIDC-is-Community** (was mis-gated Enterprise). Sibling `e724929`.
- **Forgejo** (Ilmarinen) — `git_forge/`; **Forgejo 15.0.3 LTS**; composite **4.0**; the **§B overlap** graph (provider-contract→Git.aDNA, topology→Lighthouse, §8 placement→Venus); Caddy reciprocity verified real. Sibling `a23475d`.
- **Store** (Plutus) — `object_store/`; **S3 API envelope**; composite **4.0**; caught **`minio/minio` ARCHIVED Apr 2026** → reference pgsty-SILO `RELEASE.2026-06-18` / AIStor; the shared backing substrate (reciprocal seams to Nextcloud/Forgejo/Groupware/Inference). Sibling `7630c45`.
- **Records (aDNA.aDNA, commit-only ahead-of-origin):** `convergence_status.md` 4/10→**8/10** (per-graph sections) — `54b7eeb`·`757c441`·`15cd450`·`3a32042`; `STATE.md` (frontmatter changelog + §campaign_keystone header+body + activity-log entry) + this session — close-out commit.

**In progress** — none. Wave-2 complete; both waves (core + collab) done.

**Next up** — **Wave 3 `inference`** (`Inference.aDNA`, Pythia — control-plane, **no §8**; revisits Container + Store) → **Wave 4 `ops`** (`FastAPI.aDNA`, Atalanta) → cohort **10/10**.

**Blockers** — none. Operator-gated items untouched (SiteForge/Astro naming · §C existing-graph retrofits · AWSBootstrap↔Lighthouse↔cohort ADR · Astro/TS boundary · each graph's own P0).

**Files touched** — created `what/context/**` (ops + interop + 2 `AGENTS.md`) in `Nextcloud.aDNA` · `Groupware.aDNA` · `Forgejo.aDNA` · `Store.aDNA` + each sibling `STATE.md` intake line; modified `aDNA.aDNA` `convergence_status.md` + `STATE.md` + this session file.

**Push status** — all 4 sibling vaults **local-only, no remote, no push** (Rule 4). `aDNA.aDNA` records **commit-only, ahead-of-origin** (no push this session — operator/peer may push after `git fetch` + fast-forward verify; shared `main` takes concurrent peer commits).

## AAR (5-line)

- **Worked:** depth-first, one-graph-at-a-time + a separate **independent adversarial audit per graph** caught real factual errors *before* filing (4 graphs, 0 errors shipped); the generic-canonical "envelope" framing (S3 / OCI / JMAP — contract-not-product) absorbed volatile-backend churn cleanly.
- **Didn't:** subagent spawns hit a transient **529 overload** (Forgejo research, both attempts) → detoured to main-loop WebSearch/WebFetch; Wave-2 composites landed at **4.0** not 4.2 (interop `source_diversity` is the persistent weak axis — original-fleet-analysis dominates the seams).
- **Finding:** the deployment landscape **moved under the cohort** — Stalwart OIDC-edition gating, **MinIO community archived (Apr 2026)**, Forgejo LTS cadence — vindicating the version-pinned + adversarial-audit discipline; a graph survives its upstream dying *because* it commits to the API envelope, not the product (Store is the proof).
- **Change:** when subagents 529, fall back to **main-loop web research** (works fine); keep the **independent audit as a subagent** (non-negotiable for the gate). Record the auditor's re-score, never re-inflate after applying its fixes.
- **Follow-up:** Wave 3 (Inference) + Wave 4 (FastAPI) finish the cohort 10/10; the **"no dedicated `Database.aDNA`"** open seam recurs across Nextcloud/Groupware/Forgejo (candidate future graph); consider an upstream note that interop-file `source_diversity` is structurally ~3 (rubric may merit an interop-specific calibration).

## Next Session Prompt

Continue Operation Keystone cohort genesis (Rosetta, in `aDNA.aDNA`). **Wave-1 core + Wave-2 collab COMPLETE — 8/10 done** (Container exemplar · Caddy · Bitwarden · Nebula · Nextcloud · Groupware · Forgejo · Store; all independent-adversarial-audit PASS, indexed, local-only). **Next = Wave 3 `inference`, graph 9 = `Inference.aDNA`** (persona Pythia; local LLM inference serving — backends **llama.cpp / MLX / vLLM / Ollama** per the consolidation ruling; **control-plane/compute, NOT data-bearing → NO ADR-016 §8 anchor** [contrast every Wave-2 graph]; **revisits `Container`** [runs as containers on the runtime] **+ `Store`** [pulls model weights from the S3 object store — cross-reference Store's interop, research the seam once]). Run `aDNA.aDNA/how/skills/skill_context_research.md`: read `Inference.aDNA/CLAUDE.md` + `adr_000_project_identity` first; **pin current stable backend versions (verify ≥2 official feeds — llama.cpp / Ollama / vLLM / MLX releases; never guess)**; author `Inference.aDNA/what/context/<topic>/context_research_inference_operations.md` (five verbs install/configure/operate/update/observe; **backend-selection Decision Posture**; GPU/Metal/CPU; model formats GGUF/safetensors; OpenAI-compatible serving APIs) + `..._interop.md` (seams: Container runtime [runs-on], **Store** [model-weights backend — reciprocal], Caddy [API ingress/TLS], FastAPI [may front/compose], Home credentials; **control-plane posture — no §8**). Lean stub likely has **no `what/context/`** → create the tree + a library `AGENTS.md` (model on the Wave-2 graphs). **Before the first git op in `Inference.aDNA`, check `.git/config` for a stale `core.worktree` fork-bridge + dead `*.lock`** (clear under a `pgrep -x git` guard if present; lean stubs have been clean, only Bitwarden/Nextcloud carried locks). Self-score 6 axes → run an **independent adversarial subagent audit** (re-score + version-verify) before filing; gate = composite ≥ 3.5, no axis ≤ 2, source_diversity ≥ 3 types; **honor the re-score, fold fixes in, do not re-inflate**. Commit local-only (no push, Rule 4); **explicit-path staging (never `git add -A`)**; then update records (convergence_status.md 8/10→9/10, STATE.md §campaign_keystone header+body + activity-log entry + frontmatter changelog, this session's history file). Then **Wave 4 `ops` = `FastAPI.aDNA`** (Atalanta; revisits Caddy) → cohort **10/10**. Operator-gated items (naming, §C retrofits, AWSBootstrap ADR, Astro/TS, each graph's own P0) stay untouched. **Gotcha:** subagent spawns may transiently **529** — fall back to main-loop `WebSearch`/`WebFetch` for research, but keep the audit as a separate subagent. Plan: `~/.claude/plans/please-read-the-claude-md-noble-origami.md`.
