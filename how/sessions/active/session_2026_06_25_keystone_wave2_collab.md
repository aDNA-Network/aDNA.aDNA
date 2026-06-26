---
type: session
session_id: session_2026_06_25_keystone_wave2_collab
created: 2026-06-25
status: active
tier: 2
campaign: campaign_keystone
persona: rosetta
last_edited_by: agent_stanley
tags: [session, keystone, cohort_genesis, wave2, collab, nextcloud, groupware, forgejo, store, context_research]
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

_(finalized at close)_

## Next Session Prompt

_(finalized at close)_
