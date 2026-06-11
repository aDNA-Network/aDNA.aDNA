---
type: session
session_id: session_stanley_20260611T235006Z_v72_release_home_naming_fix
created: 2026-06-11
updated: 2026-06-11
status: active
tier: 2
agent: agent_stanley
persona: rosetta
mission: none (dispatched release leg — Berthier/aDNALabs operator-approved plan 2026-06-11, recorded at aDNALabs session_stanley_20260611_delegated_unblockers_release_cascade; inbound memo coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment)
campaign: none (out-of-campaign gate-fired release; campaign_adna_serious_tool_readiness E5 untouched)
tags: [session, template_release, v7_2, home_naming_fix, latticehome, adr_013_amendment, adr_034, skill_template_release, public_face]
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

## SITREP

(to be completed at close)
