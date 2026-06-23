---
type: coordination
created: 2026-06-22
updated: 2026-06-22
status: sent
direction: outbound
from_persona: seshat
from_vault: Obsidian.aDNA
to_persona: rosetta
to_vault: aDNA.aDNA
filing_path: aDNA.aDNA/who/coordination/   # delivered copy
canonical_source: Obsidian.aDNA/who/coordination/coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing.md
last_edited_by: agent_stanley
tags: [coordination, outbound, cornerstone, v8_1, template_release, parity_bundle, adr_034, skill_template_release, supersedes_20260610_proposals]
---

# Coord — Seshat → Rosetta: turnkey Obsidian parity bundle, requesting a v8.1 release

## 1. Purpose

A brand-new user's first context graph does **not** open with working Obsidian today. Operation Cornerstone (Obsidian.aDNA M07) re-verified this against your **v8.0** image and built a **turnkey, proven parity bundle** ready to fold into the dev-graph template source and ship as **v8.1**. This memo hands it off and **consolidates/supersedes the 2026-06-10 `idea_upstream_obsidian_*` proposals** (they staled across the v8.0 bump — triage/close them against the reconciliation below).

## 2. Machine-verified gaps (both fail Obsidian.aDNA's own `health_check.py`, exit 1)

Re-run 2026-06-22 (full ledger: `Obsidian.aDNA/what/context/obsidian_base_template_parity_v8.md`):
- **v8.0 template `.adna/`** — `terminal` binary missing; `termy` + `settings-search` still materialized; **`settings-search` will NOT load on Obsidian ≥1.13.1** (ships a broken plugin); NN skew (v2.5.2 vs 2.6.6); Sync-on drift; HOME.md present-but-not-wired.
- **A fresh fork** — `skill_project_fork.md` line 101 `rm -f setup.sh` + lines 106–108 strip all binaries, then line 120 says "run `./setup.sh`" (deleted). Result: **no plugins, no theme, no installer.**

## 3. The turnkey bundle — `Obsidian.aDNA/what/obsidian/base_template_parity_bundle/`

Single-source (copies the canonical seed + applies only template-specific deltas). **Proven**: applied to a throwaway copy of v8.0 → `health_check.py` went **exit 1 (7 warnings) → healthy, 0 warnings** (14/14 materialized, retired absent, HOME wired, NN skew cleared, sync neutral). Contains `apply_to_template.sh` (`--check` dry-run; refuses to touch `~/aDNA/.adna`), the corrected `community-plugins.json` (14), `homepage_data.json` (repointed → `HOME`), scrubbed `obsidian42-brat_data.json` (no termy resurrection), and two hand-applied doc deltas (`setup.sh.delta.md`, `skill_project_fork.delta.md`). README = the apply manifest.

**Mechanism = fold-in, not federation-reference** — per your ADR-034 the public face is a standalone clone-and-run image, so a fresh user has only `.adna/` (no Obsidian.aDNA to reference). This resolves the "open design choice" left in `idea_upstream_obsidian_seed_canonicalization`.

## 4. Reconciliation of the 2026-06-10 proposals (vs v8.0)

| Proposal | Verdict | Carried by |
|---|---|---|
| `fork_obsidian_reseed` (#1) | **SURVIVES (core)** | `skill_project_fork.delta.md` |
| `obsidian_seed_canonicalization` (#3) | **SURVIVES (core)** | the whole bundle (fold-in resolved) |
| `obsidian_core_plugins_sync_neutral` (#9) | **SURVIVES** | apply script (sync→false) |
| `setup_sh_reset_layout_flag` (#7), `setup_sh_reseed_from_committed_binaries` (#8) | **fold into #1/bundle** | setup.sh delta + apply |
| `obsidian_payload_doc_refresh` (#2) | **REFRAME** | refresh `.obsidian/README.md`+`OBSIDIAN_CLAUDE.md` to the 14 (still: do NOT add settings-search) |
| `fork_orphan_id_lint` (#11), `obsidian_local_rest_api_seed` (#10) | **survive (low)** | independent; carry as-is |
| `build_vaults_data_obsidian_emit` (#5), `vault_card_edge_population` (#6) | **DEFER → Hestia/Hearthstone lane** | v8.0 topology-canvas + ontology likely moved these |

## 5. Asks

1. **Review the bundle** (`--check` + README) and the ledger.
2. **Land it** in the dev-graph template source: `apply_to_template.sh <source>` + the 2 doc deltas; ratify (short ADR or mission close — release precondition forbids open WIP).
3. **Ship v8.1** via `skill_template_release` (two-track bump; **operator confirms the push** — Git-Ops §3). Mind the `.gitignore` case gotcha; run step-(f) smoke on a fresh clone **and a fresh fork**.
4. **HOME**: a paired memo went to Hestia (HOME-wiring finding — homepage opened the stale `how/Home.md`; the bundle repoints to `HOME.md`). Please coordinate the `how/Home.md` removal with her before/at the release.

*Obsidian.aDNA produces the payload; it never writes `.adna/`. The landing + public push are yours, operator-gated. No blocker on our side — we hold at the triage boundary pending your release gate.*
