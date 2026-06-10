---
type: backlog_idea
status: open
priority: high
finding_id: OBS-UP-3   # Obsidian.aDNA P1 synthesis §5 #3
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (.obsidian/ payload + fork-time materialization)
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_seshat
tags: [backlog, idea_upstream, obsidian, seed, canonicalization, batteries_included, rich_canonical, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/backlog_F_S2_6_nn_data_json_not_shipped.md       # NN data.json gap this seed closes
  - aDNA.aDNA/how/backlog/backlog_F_S2_2_config_binary_asymmetry.md        # the binary-stripped pattern this fixes at fork-time
  - aDNA.aDNA/how/backlog/idea_upstream_fork_obsidian_reseed.md            # the fork-time strip defect (apply mechanism)
  - aDNA.aDNA/how/backlog/idea_upstream_obsidian_payload_doc_refresh.md    # the doc sweep that rides this
---

# idea_upstream — adopt the proven rich-canonical Obsidian seed into `.adna`, so every fork is batteries-included by default

**Filed by Obsidian.aDNA** (P1 synthesis §5 #3; routed per ADR-007, operator-gated at M06). This is the **biggest-value** upstream move: it makes the fork-time default match what the fleet now runs.

## The proposal

Promote a canonical, batteries-included `.obsidian/` seed into the `.adna` template (fold-in or federation-reference), so `skill_project_fork` produces vaults that **open working** — plugins materialized, lovely defaults, HOME landing — instead of declaratively-configured-but-binary-stripped shells.

## What exists to adopt (2026-06-10 — all fleet-proven, not a paper design)

Obsidian.aDNA's `what/obsidian/seed/` is the ratified payload-of-record (ADR-002/006; spec `spec_config_baseline_seed` + `spec_plugin_tier_roster`):

- **14-plugin rich-canonical roster** (`community-plugins.json`; 7-core + 6 promoted + `terminal`; retired: `termy` · orphan `advanced-canvas` · `settings-search` per ADR-006 Am.2 — 1.13-incompatible). Minimal 7-core stays the documented partner opt-down.
- **Lovely defaults**: Tokyo Night + `#663399`; NN **full-schema** dual-pane-vertical `data.json` (hand-built minimal configs get treated as legacy and reset — M02 finding); `core_theme` + `editor_polish` snippets carrying the operator-approved M2.5 polish (color/typography/semantic-coloring/content-blocks, III-scored 86/100); terminal v3.25.0 CLI profiles; `graph-colorgroups.json` (who/what/how palette); `workspace.default.json` reset layout.
- **Apply + verify machinery**: `skill_obsidian_seed` + `reseed_runner.py` (backup-first · declarative-only · donor-copy binary-materializing · override-preserving · idempotent; R10-verified across the 8-vault fleet) and `health_check.py` (read-only HC1–HC9 conformance + loadability gate, `--fleet`).
- **Per-vault override discipline**: `obsidian_adna_overrides.yaml` declared-divergence manifest (ADR-008) — the template can carry the schema so per-vault identity never fights the seed.

## Open design choice (for the template owner)

Fold-in (copy the payload into `.adna/.obsidian/`) vs **federation-reference** (template points at the Obsidian.aDNA seed as the living source). Fold-in is simpler; reference avoids a second drift surface. Obsidian.aDNA recommends **reference-with-pinned-version**, mirroring how forges federate.

## Trace

- Obsidian.aDNA `what/context/obsidian_template_delta.md` §8.2 (p1_03) · synthesis §5 #3 · `seed/seed.md` (payload manifest)
- Fleet proof: Operation Open Stacks M02–M05 (8/8 healthy, `health_check.py --fleet`)
