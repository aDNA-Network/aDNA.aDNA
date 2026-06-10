---
type: artifact
artifact_type: smoke_test_results
campaign: campaign_lattice_workspace_ux
mission: mission_lwx_02_lattice_obsidian_vault
session: session_stanley_20260512_221833_mlwx02_s1
status: complete
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
tags: [artifact, smoke_test, mlwx_02, option_c, node_vault_role_expansion]
---

# M-LWX-02 Obj 6 — Smoke Test Results

Verification of the Option-C role expansion deliverables (HOME.md + workspace.json + ADR-001 + README section + CHANGELOG entry) prior to mission close. All checks performed at `session_stanley_20260512_221833_mlwx02_s1` (2026-05-12T22:18Z+).

## Agent-side checks (file presence + content + invariants)

| # | Check | Result |
|---|---|---|
| 1 | `node.aDNA/HOME.md` exists at vault root | ✅ PASS |
| 2 | `node.aDNA/.obsidian/workspace.json` exists | ✅ PASS |
| 3 | `node.aDNA/.obsidian/workspace.json` is valid JSON | ✅ PASS (`python3 -c "import json; json.load(...)"`) |
| 4 | `node.aDNA/.obsidian/workspace.default.json` is valid JSON | ✅ PASS |
| 5 | `workspace.json` references `HOME.md` (file + lastOpenFiles) | ✅ PASS (1 match in each location) |
| 6 | `workspace.default.json` references `HOME.md` (file + lastOpenFiles) | ✅ PASS |
| 7 | `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` exists | ✅ PASS |
| 8 | ADR-001 status: `accepted` | ✅ PASS |
| 9 | ADR-001 captures rename rejection rationale (multi-node + scope-based naming + Hestia hearth/home + cost) | ✅ PASS |
| 10 | ADR-001 captures outer-vault rejection rationale (vault-in-vault + wikilink + clutter) | ✅ PASS |
| 11 | ADR-001 captures 5 alternatives considered (A-E) | ✅ PASS |
| 12 | `node.aDNA/README.md` has new "Opening this vault in Obsidian" section | ✅ PASS |
| 13 | `node.aDNA/CHANGELOG.md` has new `[v0.2] — 2026-05-12` entry | ✅ PASS |
| 14 | No `~/aDNA/.obsidian/` workspace-root directory created | ✅ PASS (`ls ~/aDNA/` shows no `.obsidian`) |
| 15 | No `~/aDNA/HOME.md` workspace-root file created | ✅ PASS |
| 16 | No `~/aDNA/.obsidianignore` workspace-root file created | ✅ PASS |
| 17 | No `~/aDNA/CLAUDE.md` workspace-router mutation | ✅ PASS (unchanged) |
| 18 | No upstream `.adna/` mutation | ✅ PASS (`git -C ~/aDNA/.adna log --oneline -1` still at `e3b3bcc`) |
| 19 | No partner-vault touches | ✅ PASS (only `node.aDNA/` and `aDNA.aDNA/` modified per `git status` in both repos) |
| 20 | M04 audit outputs preserved | ✅ PASS (`aar_m04_node_adna_bootstrap.md` + `m04_obj7_ten_dim_audit.md` exist and unchanged per git) |
| 21 | M04b outputs preserved | ✅ PASS (`m04b_obj1_dynamic_ux_gap_analysis.md` + `m04b_obj2_skill_node_bootstrap_interview_spec.md` + `m04b_obj3_lattice_obsidian_vault_spec.md` + `aar_m04b_workspace_ux_planning.md` unchanged) |
| 22 | `node.aDNA/CLAUDE.md` content unchanged (only additive expansions to this vault) | ✅ PASS (`git diff --name-only` shows CLAUDE.md not in list) |
| 23 | `node.aDNA/MANIFEST.md` content unchanged | ✅ PASS (not in `git diff --name-only`) |
| 24 | `node.aDNA/STATE.md` content unchanged | ✅ PASS (not in `git diff --name-only`) |
| 25 | `node.aDNA/AGENTS.md` content unchanged | ✅ PASS (not in `git diff --name-only`) |

**Result**: 25/25 PASS on agent-side checks.

## Modifications inventory

Files changed in `node.aDNA/` (per `git diff --name-only` + new untracked files):

| File | Status | Purpose |
|---|---|---|
| `node.aDNA/.obsidian/workspace.default.json` | modified | `home-leaf` file ref + `lastOpenFiles` updated from `Home.md` → `HOME.md` |
| `node.aDNA/.obsidian/workspace.json` | new (gitignored per .gitignore) | Per-device live state; references `HOME.md` so first launch opens HOME.md |
| `node.aDNA/HOME.md` | new | Operator-facing lattice-home gallery |
| `node.aDNA/CHANGELOG.md` | modified | New `[v0.2] — 2026-05-12` entry documents the role expansion |
| `node.aDNA/README.md` | modified | New "Opening this vault in Obsidian" section + Origin note about 2026-05-12 expansion |
| `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` | new | First node-scope ADR; status `accepted` |

Files changed in `aDNA.aDNA/`:

| File | Status | Purpose |
|---|---|---|
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md` | modified | Mini-campaign opened (phase: -1 → 1; status: planned → executing); M-LWX-02 row flipped; scope_reframe block added |
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_02_lattice_obsidian_vault.md` | modified | Frontmatter status flipped to `in_progress`; body rewritten under Option C scope (no rename); 8 deliverables + acceptance criteria |
| `aDNA.aDNA/how/sessions/active/session_stanley_20260512_221833_mlwx02_s1.md` | new | This session's tracking file |
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/mlwx_02_obj6_smoke_results.md` | new (this file) | Smoke test results |
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md` | new (next) | M-LWX-02 AAR (authored after this artifact) |
| `aDNA.aDNA/STATE.md` | modified (next) | Next-session prompt update |

## Operator-side manual smoke (deferred to operator)

These checks require launching Obsidian — the agent cannot perform them. Operator should run these on next opportunity:

| # | Check | Method | Expected |
|---|---|---|---|
| O1 | Obsidian opens `node.aDNA/` cleanly | File → Open Vault → `~/aDNA/node.aDNA/` (or `obsidian://open?vault=node.aDNA`) | Vault opens; HOME.md visible in preview mode as the default open file; no error toasts |
| O2 | HOME.md renders | Visual inspection on open | Header + 6 vault-class tables + Named Projects table + Drift table + Marketplace link + Tools & quick nav |
| O3 | Markdown tables enumerate correctly | Compare HOME.md vault count to inventory_vaults.yaml | 21 `.aDNA` vaults + 11 named projects + 3 drift entries — all present |
| O4 | Within-vault wikilinks navigate | Click `[[CLAUDE]]` in HOME.md | Opens `node.aDNA/CLAUDE.md` |
| O5 | Cross-vault markdown links open | Click `[CanvasForge.aDNA](../CanvasForge.aDNA/)` | Opens file manager at `~/aDNA/CanvasForge.aDNA/`; right-click → "Open with Obsidian" enters that vault as a separate session |
| O6 | Marketplace link clickable | Click marketplace link | Browser opens to `https://lattice-protocol.com/marketplace` (or 404 if not live — placeholder note acknowledges this) |
| O7 | Theme + accent applied | Visual inspection | Tokyo Night theme + Rebecca Purple accent (per existing `.obsidian/appearance.json`) |

If any operator-side check fails, a follow-on session under M-LWX-02 (S2) re-opens the mission to address — most likely a markdown-table regeneration or a fallback note.

## Conclusion

**Agent-side checks**: 25/25 PASS. All deliverables present with correct content; all hard constraints honored (no workspace-root mutations, no upstream mutations, no partner-vault touches, no M04/M04b output mutations, no node.aDNA governance-file mutations beyond additive CHANGELOG + README sections).

**Operator-side checks**: deferred; 7 manual checks defined for first Obsidian launch.

Mission ready for close — proceeding to AAR.
