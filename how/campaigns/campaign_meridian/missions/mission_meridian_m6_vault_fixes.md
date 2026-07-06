---
type: mission
mission_id: mission_meridian_m6_vault_fixes
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 70
token_budget_actual: ~62
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p2, vault_fixes]
---

# Mission M6 — DP1-ratified vault fix set (4 items)

> Operation Meridian P2 · the DP1-ratified bounded-set of vault-currency + hygiene fixes. EDIT/WRITE only — the
> orchestrator verified + committed. `site/` untouched (owned by [[mission_meridian_m7_site_fixes]]).

## Objectives (the 4 DP1 items)

1. **Count-surface sync** — templates `41 → 42` (the 42nd, `template_ratification_record.md`, was added M1 today) + skills `50` re-verified across every live claim surface. **Landed:** `README.md` tree-block (`26 base templates` → `42 templates (25 base + 11 extension + 6 operational)`; `26 agent recipes` → `50`; `27 subtopics` left correct) · `CLAUDE.md` Project Map (`41 → 42 reusable templates`, `5 → 6 operational`) · `MANIFEST.md` (tree line + `### Templates (41→42)` + `5→6 operational / 16→17 Rosetta-local` + a new `template_ratification_record` table row) · `glossary_template.md` (`41→42`) · `template_ratification_record.md` frontmatter comment (`upstream-shipped at v8.5` → `v8.4`). `how/templates/AGENTS.md` verified already-42 (M1), left as-is. `updated:` bumped to 2026-07-06 on every edited file that carries the field.
2. **STATE.md re-diet** (the M-effort item; python3-only, exact-match anchored, assert-count==1, SO-6 archive-shift). **Landed:** `115,866 → 75,934 B` (−39,932). QUEUED banners `24 → 13` (kept everything dated 2026-07-05/06 — the live Concord+Meridian arc; moved 2026-07-04-and-older + the Champollion-closed block → `STATE_archive.md`). 7 completed campaigns (`operation_adna` · `feedback_loop` · `keystone` · `looking_glass` · `adna_serious_tool_readiness` · `adna_network_audit` · `adna_v2_infrastructure`) compacted heading+body → one-line pointers; `campaign_meridian` (active) + `campaign_rosetta` (watch-item) kept full-length. Archive gained a convention-matched `## ═══ Shifted 2026-07-06 — Meridian M6 re-diet ═══` section holding all moved content byte-for-byte (+42,733 B). All required sections (QUEUED · Current Phase · Active Blockers · Pending Manual Actions · Active Campaigns) re-asserted present. **≤60,000 B target NOT met** (missed by 15,934) — see Finding.
3. **Backlog batch status-flip** (per [[v8_6_release_candidate]] §5). **Landed:** 23 Class-1 `idea_*` files `accepted → resolved` (v8.4 image / Champollion RC IN-set close-out that never ran), each `updated: 2026-07-06` + a one-line resolution note. `idea_upstream_template_ratification_record` verified already `completed` (skipped). Class-2: `idea_state_prompt_shed_on_close` `fold_batch v8_5_next_release → v8_6` (+note; status stays `accepted`) · `idea_upstream_planning_light_substrate_recon` PARTIAL note (recon half shipped I10 / planning-light half deferred; status left `accepted`) · `idea_plugin_trimming` `→ deferred` (routed to Obsidian-stabilization). **26 files changed.**
4. **File the tool-hardening idea** — wrote [[idea_tool_compliance_checker_hardening]] (`status: proposed`): `compliance_checker.py` defaults `--outdir .` (dirties the tree on a read-only run — F-MER-A3), needs `python3.13` silently, and scores 0.0% on Rosetta content types (no `concept`/`pattern`/`glossary_entry`/`template`/`tutorial` rubric). Proposal: scratch-default output + content-type scoring-or-clear-marker + documented runtime guard.

## AAR

- **Worked:** python3-only STATE surgery with per-boundary content asserts + a loss/gain integrity check (every removed span proven byte-for-byte in the archive appendix) + a dry-run to scratch before the real write — zero data loss on a 116 KB file with 300-char lines; idempotent backlog flip survived a mid-run abort cleanly.
- **Didn't:** the STATE ≤60,000 B target was unreachable **in scope** — landed 75,934 B. The out-of-scope `## Current Phase` section (29 KB, must-stay-present) + the mandated-keep 13× 2026-07-05/06 banners (17.7 KB) alone exceed 60 KB, so no combination of the two authorized levers reaches it.
- **Finding:** the `~7/~8` banner-keep estimate undercounted the live arc — there are **13** banners dated 2026-07-05/06 (the 2026-07-05 Concord-P2 sub-step arc has 10). The crisp "move 2026-07-04-and-older" rule is the reproducible boundary; the count estimate was off. Separately, `compliance_checker.py` is not read-only-safe (F-MER-A3) and `status: accepted` had drifted as a shipped-but-never-closed state across ~24 backlog files.
- **Change:** to actually clear the ≤60 KB Read-tool threshold, a **follow-up must diet `## Current Phase`** (the remaining 29 KB elephant) or archive the completed 2026-07-05 Concord-P2 sub-step banners — both touch operative/live-arc content and need an operator gate; out of M6's authorized scope.
- **Follow-up:** (1) Current-Phase diet decision (operator-gated). (2) [[idea_tool_compliance_checker_hardening]] → the v8.6 batch-G tooling-hardening window. (3) MANIFEST/README pre-existing count-drift on *other* adopted vaults remains an out-of-scope fleet-hygiene item (noted, not fixed here).
