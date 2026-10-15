---
type: session
session_id: session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep
created: 2026-10-15
updated: 2026-10-15
last_edited_by: agent_rosetta
status: completed
user: stanley
started: 2026-10-15T22:40:15Z
heartbeat: 2026-10-15T23:20:00Z
ended: 2026-10-15T23:20:00Z
token_budget_estimated: 70
token_budget_uncertainty: 25
token_budget_unit: kT_content_load
token_budget_actual: "≈60 executor (content-load, rough: plan-time reads + SHA/tense verification ≈25 · spec v0.2 ≈15 · spec v0.4 ≈8 · sweep + notes + memo ≈7 · close ≈5); inside 70 ± 25; no lenses, no subagents"
executor_runtime: claude
executor_tier: fable          # the card declares opus; executed fable at the operator's session (recorded, as A1.1)
executor_lane: hosted
tier: 2
mission: mission_arcade_a1_2_terminal_platform_specs
intent: "ARCADE A1.2 — spec_terminal_harness_contract v0.1 → v0.2 (path-only re-anchor to the in-Harness contract copies, the Terminal protocol-seam binding, the adoption table at today's names), spec_platform_ecosystem v0.3 → v0.4 (§Access points: Exchange + Terminal with tense labels; the recommended-default paper note), and the dead-CLI sweep re-derived at the object (the ~19 did not reproduce: most hits are this vault's own live `lattice home` script, the live latlab CLI, or the live `aDNA terminal` launcher name). G1 NOT ruled — every delta `proposed`."
plan: ~/.claude/plans/please-read-the-claude-md-cheeky-peacock.md (operator-approved 2026-10-15; two plan-time rulings R5 push-at-close · R6 sweep = live-routing-dead set only)
scope:
  - what/specs/spec_terminal_harness_contract.md · what/specs/spec_platform_ecosystem.md
  - how/configs/bin/{install,uninstall}.sh · how/configs/runbooks/runbook_lattice_home_install.md · how/skills/skill_lattice_home_install.md · what/patterns/pattern_lattice_home.md · how/backlog/idea_upstream_lattice_home_pattern.md
  - how/backlog/idea_terminal_harness_contract_reanchor.md · how/backlog/idea_default_terminal_harness_standard_touch.md (disposition lines)
  - how/campaigns/campaign_arcade/{campaign_arcade.md, missions/mission_arcade_a1_2_terminal_platform_specs.md, missions/session_prompts_arcade.md}
  - who/coordination/coord_2026_10_15_rosetta_to_panacea_*.md (NEW, outbound_ready)
  - STATE.md · CHANGELOG.md
conflict_scan: how/sessions/active/ empty at open; HEAD 152b55b; no index.lock; no git process; .obsidian/* dirty (not ours, not staged); untracked how/backlog/idea_upstream_version_key_normalisation.md + capture_report.json left as found
read_graphs: [Harness.aDNA, Terminal.aDNA, Archive.aDNA/LatticeTerminal.aDNA, Archive.aDNA/LatticeAgent.aDNA, Archive.aDNA/TerminalGo.aDNA]
files_modified: [what/specs/spec_terminal_harness_contract.md, what/specs/spec_platform_ecosystem.md, how/configs/bin/install.sh, how/configs/bin/uninstall.sh, how/configs/runbooks/runbook_lattice_home_install.md, how/skills/skill_lattice_home_install.md, what/patterns/pattern_lattice_home.md, how/backlog/idea_upstream_lattice_home_pattern.md, how/backlog/idea_terminal_harness_contract_reanchor.md, how/backlog/idea_default_terminal_harness_standard_touch.md, how/campaigns/campaign_arcade/campaign_arcade.md, how/campaigns/campaign_arcade/missions/mission_arcade_a1_2_terminal_platform_specs.md, how/campaigns/campaign_arcade/missions/session_prompts_arcade.md, STATE.md, CHANGELOG.md]
files_created: [who/coordination/coord_2026_10_15_rosetta_to_panacea_adr_027_accepted_since_07_02_repin_after_g1.md]
completed: [A1.2 O1 spec_terminal_harness_contract v0.2 proposed, A1.2 O2 spec_platform_ecosystem v0.4 proposed, A1.2 O3 dead-CLI sweep (6 live-routing files; counts derived), backlog dispositions ×2, Panacea notice staged, card + charter + CURRENT + STATE + CHANGELOG, validator zero drift, commit + push (R5)]
---

# Session log

- 22:40Z open. Plan approved at plan time; two rulings by AskUserQuestion: **R5** push at close (R4 standing for ARCADE sittings) · **R6** sweep scope = live-routing-dead set only, records untouched.
- Probes: branch `vitrine/design`, HEAD `152b55b`, no lock, no git process, `active/` empty. Validator baseline Zero drift (plan time).
- **SHAs at the sitting** (`git hash-object`, both trees):
  - PROVIDER-CONTRACT.md — Harness `14b651d3d0d7aebfe648ac61e3fd83339dcc3f72` = Archive/LatticeTerminal `14b651d3…` ✔
  - HARNESS-CONTRACT.md — Harness `7f2508f0113b70682f36c5dd939d6f072c7e2e13` = Archive/LatticeTerminal `7f2508f0…` ✔
  - spec_latticeterminal_adna_interop_contract.md — Archive/LatticeAgent `a640076e70be0931e7e0f18fd72acc22749b6385` ≠ Harness snapshot `98cf8b3748d4950f3bf657beb17360905ba5592d`; `diff` = the 2026-06-07 pin-rehome annotation (tag · `pin_rehome:` · banner · table header · one path) — no clause text differs.
- **Tense at the object (Terminal.aDNA):** Claude Code hosted over A2A v1.0 — Bastide s1 exit item (5) MET live 2026-09-23 (`mission_s1_slice1.md:93`); ACP hosting — Enceinte e2 Postern claims 1–3 **held** 2026-10-12 (`reports/enceinte/e2.md:54`), scope F-V-E2-4 (neither live adapter routes its commands through `terminal/*` yet); ADR-B09 `accepted` 2026-09-29. Enceinte e5 Faubourg `planned` 2026-10-15; e6 Drawbridge = launch (`TAUGHT-AS-DESIGN`).
- **ADR-027 (ours) is `accepted`** since 2026-07-02 (Champollion G0) — the card's "bundled or own ceremony" is moot. Harness's `rh_provider_conformance_ref.md:14` still reads `canonical_adr_status: proposed` (theirs; notice staged).

## Record (converted from intent at each verified step)

- **The sweep grep, verbatim, before the first edit** (md/yaml/yml/py/sh/zsh; excluding `how/sessions/history|_archive|/site/|node_modules|.astro|STATE_archive|.playwright|/dist/|/evidence/`):
  `grep -rlE '(`|\s|^|/)(lattice|aDNA) (terminal|task|campaign|mission|surfaces|station|panel|hud|splash|agent|init|doctor|status|install|uninstall|reap|worktree|session|dash|graph|intro|cmux|home|list|show|open)\b|~/\.local/bin/(lattice|aDNA)\b|C[Mm]ux\.aDNA/how/configs/bin/lattice|bin/lattice\b'` → **42** files; per-file hits of a retired form (`~/.local/bin/{lattice,aDNA}` · `C[Mm]ux.aDNA/…/bin/lattice` · `lattice|aDNA <Go verb>` · `Terminal.aDNA/how/configs/bin/lattice`) → **15**; false positives **2** (`campaign_execution.lattice.yaml:95` "aDNA campaign", `projects_folder_pattern.md:26` "lattice intro"); records kept **7** (`mission_lhp_m1/m2/m3` · `coord_2026_07_11_berthier_to_exchange_rosetta_*` · `coord_2026_09_24_rosetta_to_vauban_*` · inbox vauban 09-21 · inbox vauban 10-06); **live-routing annotated 6**. The Go CLI's verb list was read from `Archive.aDNA/TerminalGo.aDNA/how/configs/bin/lattice` (`cmd_*` functions, 20,485 lines); `lattice home` here = this vault's `how/configs/bin/lattice` (7.3 KB, single subcommand); `latlab` = `/opt/anaconda3/bin/latlab`; `~/.local/bin/` holds `adnaterm · terminald · terminal-mcp · adna-exchange*`, no `lattice`/`aDNA`.
- O1: `spec_terminal_harness_contract.md` rewritten whole to v0.2 (`version_status` proposed; `status: active` kept because v0.1 is in force); one self-catch — a licence citation to Terminal ADR-B14 (which is extensions/forks, `proposed`) replaced by the graph's own `pyproject.toml` `Apache-2.0`.
- O2: `spec_platform_ecosystem.md` v0.4 by anchored edits (§Terminal ↔ Harness Contract · new §Access points · stale-table line · §7.7 · provenance).
- O3: six files annotated (Python anchored replaces; `bash -n` ×2 OK); two backlog disposition sections appended.
- Memo to Panacea staged `outbound_ready`, send-after-G1; its claim checked: Harness §6 row 2 pins `b89ca9a0…` `proposed`, the ADR blob is now `25e20827…`.
- Card `completed` (summary · AAR · `token_budget_actual`); charter row + Execution Log; CURRENT → A1.3 (+3 rows); STATE ⏭ (b) · campaigns row (3 completed · 12 queued, derived from the charter table) · pending row; CHANGELOG `[Unreleased]` (b).
- Gates: `adna_validate.py --governance .` **Zero drift**; `git diff --stat -- site/` empty (R2); archived names in the two specs only inside `Archive.aDNA/` pointers or "was"/historical annotations; bare `ADR-027/064/066` in new text vault-qualified (one pass + re-grep).

## SITREP

**Completed**: A1.2 — `spec_terminal_harness_contract.md` v0.2 and `spec_platform_ecosystem.md` v0.4, both `proposed` with empty §7.7 (G1 now holds three specs + aDNA.aDNA ADR-064); dead-CLI sweep derived at the object and the six live-routing files annotated; two backlog dispositions; Panacea re-pin notice staged (send after G1); card · charter · CURRENT · STATE · CHANGELOG; validator zero drift; pushed (R5).
**In progress**: nothing agent-side.
**Next up**: A1.3 (Vauban's 13 asks + the three rows found here) → A1.4 (registry truth) → G1.
**Blockers**: human-owed — G1 (four signatures); send GO for the Berthier/triad reply; the Panacea notice after G1; the Lister Gate-1 reply `#needs-human`; three readers → DP3; "publication" (lifts R2).
**Files touched**: see frontmatter `files_modified` / `files_created`; no `site/`, no `.adna/`, no cross-vault write, no inbox memo touched, no completed record touched.

## Next Session Prompt

Run from ~/aDNA/aDNA.aDNA. Read root CLAUDE.md, STATE.md ⏭ QUEUED (b), how/sessions/active/, who/coordination/inbox/, git status; then how/campaigns/campaign_arcade/CLAUDE.md and missions/session_prompts_arcade.md (CURRENT: A1.3). G1 is NOT ruled — nothing standard-side is signed; A1.3 and A1.4 may run before it. A1.3 = Vauban's thirteen asks (inbox memos 10-06 ×9, 10-07 ×4) → artifacts/p1/vauban_rulings_packet.md (13 rows + the three A1.2 rows: Python-Terminal pointer-spec; the archived threat-model trigger; the 'aDNA 19' correction) → operator rulings (AskUserQuestion if ≤4 bounded groups, else skill_create_iss) → proposed amendments to how/templates/* + pattern_iss_operator_gate.md → reply to Vauban outbound_ready (send on GO; note ROADMAP row 17). Open a Tier-2 session at the open; close with SITREP, five-line AAR, STATE ⏭, CHANGELOG, validator zero drift; commit explicit paths; push per the standing R4/R5 ruling.
