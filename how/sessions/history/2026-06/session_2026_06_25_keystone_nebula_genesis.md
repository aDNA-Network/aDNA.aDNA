---
type: session
session_id: session_2026_06_25_keystone_nebula_genesis
created: 2026-06-25
status: completed
tier: 1
campaign: campaign_keystone
persona: rosetta
last_edited_by: agent_stanley
tags: [session, keystone, cohort_genesis, nebula, context_research]
---

# Session — Operation Keystone cohort genesis: graph 4 (Nebula)

## Intent

Continue the campaign. Execute `skill_context_research` for **`Nebula.aDNA`** (Wave-1 core, graph **4/10** — the final core graph) — the recorded next unit after `Bitwarden` (3/10). Produce the two `context_research` files (operations + interop) under `Nebula.aDNA/what/context/overlay_mesh/` (the lean stub has **no `what/context/` yet** → create it), rubric-passed + independently audited, indexed, committed local-only. Depth-first: fully populate + quality-pass before Wave 2.

## Scope

- **Create** (in `Nebula.aDNA/`, local-only repo — NO push, Rule 4): `what/context/overlay_mesh/context_research_nebula_operations.md` + `..._interop.md` + `overlay_mesh/AGENTS.md`. (Stub has no `what/context/` — create the tree + a library `what/context/AGENTS.md`.)
- **Modify** (Nebula.aDNA): `STATE.md` (intake-log line).
- **Modify** (aDNA.aDNA records): `…/convergence_20260624/convergence_status.md` (3/10→4/10), `STATE.md` (§campaign_keystone + Resume-Here), this session → history.

## Guardrails (load-bearing — Heimdall posture)

- **Control-plane / NOT data-bearing** — no ADR-016 §8. The **three-way §B seam**: Venus (`Network.aDNA`) owns substrate/topology/membership/**CA**/ledger-events; Hestia (`Home.aDNA`) owns node-local config-of-record (§9: cert paths/config/launch-unit/ports); **this graph owns only the node-side daemon brick** (install/place-certs/launch-unit/join-leave/diagnose-restore). Emits no ledger events; defines no topology.
- **CA signing key is Venus's — NEVER on the node** (node holds only host cert/key + public `ca.crt`). Credentials names-only via Home; redact any key.
- **Documents-not-disturbs the LIVE mesh** — two live daemons (10.42 primary lighthouse + sovereign 10.43 `stanley-1043`, nebula 1.10.3; pilot `_nebula_pilot_10_43`). Observe-only; no install/config-change/restart (SO#1/#2). Tailscale folds in as a section (ADR-015).
- **Local-only, no push** for Nebula.aDNA. Explicit-path git staging (never `git add -A`). aDNA.aDNA records: commit-only (local). Nebula git verified clean (no fork-bridge `core.worktree`, unlike Bitwarden).
- **Stubs only** — context authoring; no deploy.

## Method

`skill_context_research` (official-docs-bound; Context7 not wired). Version pin verified ≥2 official feeds (`slackhq/nebula` releases + endoflife/Docker) — **never guess** (node runs 1.10.3; confirm/supersede as current-latest). Independent adversarial audit (separate subagent) before filing.

## Files touched

**Nebula.aDNA (local-only repo; commit `689a5c5`, no push):**
- (created) `what/context/overlay_mesh/context_research_nebula_operations.md`
- (created) `what/context/overlay_mesh/context_research_nebula_interop.md`
- (created) `what/context/overlay_mesh/AGENTS.md` (topic index)
- (created) `what/context/AGENTS.md` (library index — the stub had none)
- (modified) `STATE.md` — intake-log entry

**aDNA.aDNA (records; commit-only, no push):**
- (created) `how/sessions/history/2026-06/session_2026_06_25_keystone_nebula_genesis.md` (this file)
- (modified) `how/campaigns/campaign_keystone/artifacts/convergence_20260624/convergence_status.md` — graph-4 update (3/10→4/10, Wave-1 core COMPLETE)
- (modified) `STATE.md` — §campaign_keystone + activity log + Resume-Here + frontmatter changelog (4/10, next = Nextcloud)

## SITREP

**Completed** — Operation Keystone cohort genesis **graph 4 (Nebula)** via `skill_context_research` → **Wave-1 `core` COMPLETE (4/4)**. Two `context_research` files (operations [Nebula 1.10.3; five verbs + Decision Posture] + interop [the three-way §B seam: Venus substrate/CA · Hestia node-config §9 · this graph's daemon brick; CA key-separation; overlay-as-substrate-for-services]) + topic index + a fresh library index (the lean stub had no `what/context/`). **Independent adversarial audit: operations PASS-AS-IS (4.2; auditor independently 4.4 — no inflation); interop PASS-WITH-FIXES** — the audit caught one inflated axis (an overstated `Caddy` overlay reciprocity; Caddy is the public ingress, not an overlay-only service), which I **corrected in the content and honored in the score** (`cross_topic_coherence` 5→4, composite 4.0 — not re-inflated; `Bitwarden` reciprocity verified to hold). All version/technical claims re-verified current (Nebula 1.10.3 + CVE-2026-25793 floor; cert-v2 + `default_local_cidr_any` 1.10 transitions); secret-hygiene clean (`ca.key` correctly substrate-side only).

**Process note (the gate working)** — this is the first cohort graph where the adversarial audit found genuine self-score inflation. Resolved by correcting the content + accepting the auditor's lower score rather than re-arguing up — the proving-instance discipline functioning as designed.

**Repo note** — Nebula's `.git` was clean (no stale `core.worktree` fork-bridge artifact, unlike Bitwarden — proactively checked). The fork-bridge risk is specific to the **full-`skill_project_fork`ed** stubs (Caddy, Bitwarden); lean template stubs (Nebula) were clean. Wave-2 stubs should still be checked.

**Next up** — **Wave 2 `collab`: `Nextcloud` → `Groupware` → `Forgejo` → `Store`** (all data-bearing → ADR-016 §8 Venus co-design). Start with `Nextcloud.aDNA` (persona Atlas; file-sync/collaboration suite). Depth-first: fully populate + audit-pass before the next.

**Blockers** — none. (Operator-gated items untouched: SiteForge/Astro naming, §C retrofits, AWSBootstrap ADR, Astro/TS boundary; each graph's own P0.)

**Push status** — Nebula.aDNA local-only (no push, Rule 4/SO). aDNA.aDNA records **commit-only by me**; a concurrent peer had pushed the prior Keystone records (my Bitwarden `d3079ee`) + an obsidian commit (`be28334`) to origin/main, briefly syncing it (ahead 0) — this turn's records commit sits one ahead, local. Operator/peer may push (`git fetch` + verify fast-forward first; shared `main` takes concurrent peer commits).

## Next Session Prompt

Continue Operation Keystone cohort genesis (Rosetta, in `aDNA.aDNA`). **Wave-1 `core` is COMPLETE — 4/10 done** (Container exemplar · Caddy · Bitwarden · Nebula; all adversarial-audit PASS, indexed). **Next = Wave 2 `collab`, graph 5 = `Nextcloud.aDNA`** (persona Atlas; the file-sync/collaboration suite; **data-bearing → ADR-016 §8**, so the interop file carries the data-plane placement anchor + Venus co-design like Caddy/Bitwarden did). Run `aDNA.aDNA/how/skills/skill_context_research.md`: read `Nextcloud.aDNA/CLAUDE.md` + `adr_000` first; pin the current stable Nextcloud server version (verify ≥2 official feeds — Nextcloud releases + endoflife.date/Docker; **never guess**); author `Nextcloud.aDNA/what/context/<topic>/context_research_nextcloud_operations.md` (five verbs: install/configure/operate/update/observe — the server, the data dir, occ, apps, DB/Redis, reverse-proxy + `.well-known`/`trusted_proxies` seam to Caddy) + `context_research_nextcloud_interop.md` (seams: Caddy ingress [reciprocal — Caddy's interop already names the Nextcloud `.well-known`/long-timeout seam], Container runtime, the data-bearing store → ADR-016 §8 Venus placement, the DB/object-store backends, Home credential routing). The lean stub likely has **no `what/context/`** → create the tree + a library `AGENTS.md` (model on Nebula's). Mirror the Caddy/Bitwarden/Nebula exemplars exactly. Self-score 6 axes → run an **independent adversarial subagent audit** (re-score + version-verify; it earns its keep — it caught real inflation on Nebula) before filing; gate = composite ≥ 3.5, no axis ≤ 2, source_diversity ≥ 3 types. **Before the first git op in `Nextcloud.aDNA`, check `.git/config` for a stale `core.worktree=/sessions/…` fork-bridge artifact + a dead `index.lock`** (Bitwarden had one; fix under a `pgrep -x git` guard if present). Commit local-only (no push, Rule 4); explicit-path staging (never `git add -A`); then update records (convergence_status.md 4/10→5/10, STATE.md §campaign_keystone + activity log + Resume-Here + frontmatter, this session's history file). Operator-gated items (naming, §C retrofits, AWSBootstrap ADR, Astro/TS, each graph's own P0) stay untouched. Plan: `~/.claude/plans/please-read-the-claude-md-snoopy-nova.md`.
