---
type: session
session_id: session_stanley_20260611T235006Z_v72_release_home_naming_fix
created: 2026-06-11
updated: 2026-06-11
status: completed
tier: 2
agent: agent_stanley
persona: rosetta
mission: none (dispatched release leg — Berthier/aDNALabs operator-approved plan 2026-06-11, recorded at aDNALabs session_stanley_20260611_delegated_unblockers_release_cascade; inbound memo coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment)
campaign: none (out-of-campaign gate-fired release; campaign_adna_serious_tool_readiness E5 untouched)
tags: [session, template_release, v7_2, home_naming_fix, latticehome, adr_013_amendment, adr_034, skill_template_release, public_face]
last_edited_by: agent_stanley
---

# Session — v7.2 gate-fired template release: Home-fork naming fix + ADR-013 amendment

## Intent

Execute the second gate-fired `skill_template_release` run (v7.1 → **v7.2**). Payload: the Home-vault
fork naming defect fix (`project_name = LatticeHome` → `Home`; live-prose `LatticeHome.aDNA` →
`Home.aDNA` across the standard tree + the image's pre-instantiated root router) + an ADR-013
§Exception amendment documenting the completed rename chain
`node.aDNA → LatticeHome.aDNA (2026-05-28, transient) → Home.aDNA (2026-05-30, canonical)`.
Release gate: OPEN (operator-approved plan, SO-1 satisfied — recorded in the aDNALabs dispatch).
Defect observed live on a partner onboarding (Jake's node, pre-bootstrap catch; no damage).

## Scope declaration (Tier 2)

- **Dev-graph edits (this vault)**: `what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md`
  (§Exception amendment, annotate-forward) · `how/skills/skill_lattice_home_install.md` (live example
  refs) · `how/templates/template_lattice_home_render.md` (badge example, cosmetic) ·
  `what/decisions/adr_031_cloudflare_dns_site_publishing_standard.md` (live credential-broker ref) ·
  `what/patterns/pattern_upstream_drift_watch.md` (live policy pointer) ·
  `how/backlog/idea_upstream_node_vault_bare_role_rename.md` (disposition close — this release executes it) ·
  `CHANGELOG.md` · `STATE.md` (live rows only, SO-7) · NEW outbound coordination ack memo · this session file.
- **Release-repo edits (work clone of aDNA-Network/aDNA)**: `.adna/` tree LatticeHome live-ref sweep
  (skill_node_bootstrap_interview · skill_node_health_check · HOME.md · skill_update_all_vaults ·
  skills AGENTS.md · CLAUDE.md routing notes · skill_node_credentials_audit · skill_inventory_refresh) ·
  `.adna/CHANGELOG.md` + `.adna/CLAUDE.md` version bump · `.adna/README.md` (embed note + badge) ·
  root `CLAUDE.md` (router Step 0.3 — root_surfaces_changed = TRUE).
- **Step (e)**: rsync `~/aDNA/.adna` from released tree + local commit (origin frozen at adna-legacy) +
  install-truth fixture regen if moved.
- **PRESERVE (SO-7, no edits)**: lineage pins (`graduated_from: ...@411660e`), STATE.md historical
  narrative, coordination memos, campaign/mission/AAR records, session history, iii measurement records,
  `idea_upstream_latticehome_rename_pattern.md` (historical), `site/src/data/vaults.json` rename-chain note.
- **No edits**: `~/aDNA/.adna/` outside step (e) · site deploy (NOT part of this release) · E5 lane artifacts.

## Assembly map (release-run-specific, per skill step b)

Baseline = current released tree (fresh clone of `aDNA-Network/aDNA` @ v7.1). Delta = the ratified
LatticeHome→Home live-ref sweep (`sed '/@411660e/!s/LatticeHome\.aDNA/Home.aDNA/g'` + bare-parameter
fixes, hand-verified per file) + version/CHANGELOG bumps. No reconstruction from scratch.

## Log

- 23:50Z — session open; preflight: tree clean, no active sessions, gate confirmed open via dispatch + inbound memo.
- 23:5xZ — dev-graph fixes committed `e7934ee`; release executed (clone → sweep → bump → commit `f06454c` → tag `v7.2` → push); step (e) local `.adna` sync `4bf5369`; smoke 7/7; gate-12 7/7; bookkeeping + close.

## SITREP

- **Completed**:
  - **Release `v7.2` SHIPPED**: `aDNA-Network/aDNA` commit **`f06454c`**, annotated tag **`v7.2`**, branch + tag pushed (the push = the release; gate was open per the operator-approved plan, SO-1). Second `skill_template_release` run; first under the codified skill — steps (a)–(f) all green.
  - **Standard-tree sweep** (work clone `.adna/`, lineage-pin-preserving `sed '/@411660e/!…'`): `skill_node_bootstrap_interview.md` 18 refs · `skill_node_health_check.md` 9 · `HOME.md` 7 · `skill_update_all_vaults.md` 3 · `how/skills/AGENTS.md` 3 · `CLAUDE.md` routing rules 3 → `Home.aDNA`. Preserved: 5 `@411660e` lineage pins. No bare `LatticeHome` (without `.aDNA`) existed anywhere.
  - **Version bump**: standard-tree governance `7.0 → 7.2` (`.adna/CLAUDE.md` frontmatter + header); tree CHANGELOG: `[Unreleased]` formalized as `[v7.1] — 2026-06-10` (packaging release note) + new `[v7.2] — 2026-06-11` entry; `.adna/README.md` governance badge → v7.2 @ `aDNA-Network/aDNA` (+ standard-badge slug re-pointed); root `README.md` badge v7.1 → v7.2. Standard track unchanged (v2.2).
  - **Smoke test (throwaway clone): 7/7 PASS** — (1) router present, pre-instantiated, zero `{{VARS}}` ✅ (2) `role: template` intact ✅ (3) key skills + workspace template resolve ✅ (4) dummy `Test.aDNA/` ignored AND `.adna/CLAUDE.md` not ignored (check-ignore exit 1; `/?*.aDNA/` + `!/.adna/` intact) ✅ (5) embed note present, no legacy banner ✅ (6) old-URL redirect `LatticeProtocol/aDNA` → 301 → `aDNA-Network/adna-legacy` → 200 ✅ (7) tag `v7.2` visible on remote + 1-command flow green ✅. **LatticeHome grep on throwaway** = 5 lineage pins + the CHANGELOG's own fix record ONLY; **zero live bootstrap-path refs**.
  - **Gate-12 (install-truth): 7/7 PASS** (`npm run test:gates -- gate-12-install-truth.spec.ts`; note: there is no plain `npm test` script — `test:gates` is the runner).
  - **Step (e)**: `~/aDNA/.adna` rsynced from the released tree; local commit `4bf5369` (origin stays frozen at adna-legacy `74cb761` by design — embed-note README now reflected locally too). Install-truth fixture **unchanged** (`build_install_truth.mjs` idempotency guard — only `generated`/`template_sha` would churn; no commit needed).
  - **ADR-013 amended (Ask 2)**: Amendment 2 / **§Exception.5** — completed chain `node.aDNA → LatticeHome.aDNA (2026-05-28, transient) → Home.aDNA (2026-05-30, canonical)`; forward-note at §Exception head; §Exception.2 body untouched; R1–R4 unchanged; status stays `amended`.
  - **Dev-graph live-ref fixes**: `skill_lattice_home_install.md` example set (`HOME_LATTICE`/`Home.aDNA`/`🌙 Home / Hestia`) · `template_lattice_home_render.md` badge example · `adr_031` broker ref (annotated, history preserved) · `pattern_upstream_drift_watch.md` policy pointer · `idea_upstream_node_vault_bare_role_rename.md` → **resolved** (executed by v7.2).
  - **Bookkeeping**: dev CHANGELOG `[Unreleased]` ×2 entries · STATE.md (head + Current Phase + Last Session) · ack memo `coord_2026_06_11_rosetta_to_berthier_v72_home_naming_fix_ack.md` (closes the Berthier memo asks 1+2).
- **In progress**: none.
- **Next up**: nothing carries from this leg. Live campaign prompt = E5 c166–168 (untouched). Distribution leg of this release (sovereign subnet + wga_l1 first per the context-distribution-testnet designation) is aDNALabs/Venus-side.
- **Blockers**: none.
- **Deviations / findings (3)**:
  1. **The memo's surface table overstated two surfaces**: `how/templates/template_workspace_claude.md` carries NO Step 0.3 / `LatticeHome` ref, and the image's pre-instantiated root router likewise greps clean — the `project_name = LatticeHome` defect line lives only in **operator-evolved routers** (this node's: already fixed by aDNALabs; partner kits: Venus leg). Image-side, the defect was entirely in the `.adna/` chain. `root_surfaces_changed` reduced to the README governance badge.
  2. **Step-(e) rsync deleted `how/standard/hooks/test_fixtures/dirty/config/.env`** from local `.adna` — that fixture is tracked in the legacy clone but absent from the released image (the image's `.gitignore` `.env` rule excluded it at v7.1 assembly). Faithful mirror, pre-existing v7.1 gap, not introduced here. Candidate upstream fix: rename the fixture (e.g. `dot_env.fixture`) or force-add at a future release.
  3. **Governance-version alignment decision**: bumped 7.0 → **7.2** (not 7.1) so the governance track re-aligns with the image tag line; the tree CHANGELOG documents that v7.1 was packaging-only. Recorded in the `[v7.2]` entry.
- **Files touched (dev graph)**: `what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md` · `what/decisions/adr_031_cloudflare_dns_site_publishing_standard.md` · `what/patterns/pattern_upstream_drift_watch.md` · `how/skills/skill_lattice_home_install.md` · `how/templates/template_lattice_home_render.md` · `how/backlog/idea_upstream_node_vault_bare_role_rename.md` · `CHANGELOG.md` · `STATE.md` · `who/coordination/coord_2026_06_11_rosetta_to_berthier_v72_home_naming_fix_ack.md` (NEW) · this session file. **(release repo)**: 9 files @ `f06454c`. **(local .adna)**: sync commit `4bf5369`.

> **Next Session Prompt** — This release leg is complete and closed (v7.2 live, smoke 7/7, gate-12 7/7, memo acked). Nothing carries. Resume the live campaign per the E5 c166–168 prompt in `STATE.md` §Last Session (second block). If a partner node still mis-forks `LatticeHome.aDNA/`, it is on a pre-v7.2 clone or an unpatched partner kit — point it at `git pull` / the Venus kit patch, not at a new release.
