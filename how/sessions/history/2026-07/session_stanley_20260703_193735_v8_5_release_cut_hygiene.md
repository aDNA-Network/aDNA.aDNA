---
type: session
session_id: session_stanley_20260703_193735_v8_5_release_cut_hygiene
tier: 2
intent: "Fire the v8.5 release-cut hygiene release via skill_template_release (F-CHM-216 + F-CHM-217 + doc-currency; D-1 resolved = de-link)"
created: 2026-07-03
updated: 2026-07-03
status: completed
last_edited_by: agent_rosetta
persona: rosetta
mission: mission_v8_5_release_cut_hygiene
tags: [session, release, v8_5, skill_template_release, f_chm_216, f_chm_217, tier2, shipped]
---

# Session — v8.5 release-cut hygiene release

## Intent
Execute `skill_template_release` version **v8.5** per `mission_v8_5_release_cut_hygiene.md` §10. **SHIPPED.**

## Outcome — SHIPPED v8.5
- Commit `05be58e` + annotated tag `v8.5` pushed to public `aDNA-Network/aDNA` (fast-forward `4e3bf38..05be58e`; **v8.4 tag untouched**).
- Governance **8.4→8.5**; **standard stays v2.5**. `root_surfaces_changed`: only the version badge (root + `.adna/` READMEs).
- Local `~/aDNA/.adna` synced (`e38a8f0`); `install_truth.json` unchanged (4 install-flow paths verified).
- **D-1 decided = de-link** (reversed the prep's ship-5 rec — a recon sweep found the 5 ADRs would inject 21 private dev-graph wikilinks into the public image). De-linked the 6 clickable citations instead.

## Execution log
- Preconditions (§a): tree clean ✓; release gate = plan-approval + operator GO ✓.
- Fresh clone @ v8.4 → applied 13-file delta set via exact-string asserted script (25 edits, all asserted); reverted an over-reach (row-6 half-genericization of `skill_iii_setup.md`) — kept only the dangling-link fix, deferred the full pass.
- Dry-run gate: full diff + H1–H5 + smoke 1–5 all green → operator GO.
- Fire: staged 13 explicit paths → commit → annotated tag → fetch-verify fast-forward guard → push main + tag (token via `gh`, redacted, non-persistent).
- Step (e): rsync `.adna/`→`~/aDNA/.adna` + commit; install_truth regen = unchanged.
- Step (f): fresh-clone smoke of the pushed tag — rows 1–7 + H1–H5 all **GREEN**; old-URL redirect 200.
- Dev-graph SRC currency: `what/docs/AGENTS.md` v2.3→v2.5, `what/docs/agent_first_guide.md` anchor.

## Files touched
- **Image (`aDNA-Network/aDNA`, pushed):** `.adna/{CHANGELOG.md,CLAUDE.md,README.md}` · `.adna/how/skills/{skill_iii_setup,skill_project_fork,skill_workspace_init,skill_workspace_upgrade}.md` · `.adna/how/templates/template_home_claude.md` · `.adna/what/context/adna_core/context_adna_core_entity_definitions.md` · `.adna/what/docs/{AGENTS,aDNA_overview,agent_first_guide}.md` · root `README.md` (13).
- **Local node (`~/aDNA/.adna`, committed `e38a8f0`):** the 12 `.adna/` files.
- **Dev graph (`aDNA.aDNA`, this batch):** `what/docs/AGENTS.md`, `what/docs/agent_first_guide.md`, `how/missions/mission_v8_5_release_cut_hygiene.md`, `STATE.md`, this session file, backlog idea for the deferred sweep.

## SITREP
- **Completed:** v8.5 shipped + verified live; mission closed with AAR; local `.adna` synced; dev copies curried.
- **In progress:** none.
- **Next up:** (1) dev-graph push (`aDNA.aDNA` local commits → public, operator-gated); (2) **fleet re-seed** (Rosetta+Hestia; v8.4/v8.5 baseline across ~19 vaults); (3) v8.5-queue follow-ups (full `skill_iii_setup` genericize + broader dev-vault-name sweep).
- **Blockers:** none.
- **Files touched:** see above.

## Next Session Prompt
v8.5 is SHIPPED (image `aDNA-Network/aDNA` @ `05be58e`/tag v8.5; local `.adna` @ `e38a8f0`). The teed-up next step is the **fleet re-seed** (Rosetta+Hestia) — apply the v8.4/v8.5 baseline across the ~19 ecosystem vaults. Secondary: push the `aDNA.aDNA` dev-graph local commits to the public dev repo (operator-gated). v8.5-queue follow-ups: full consistent genericization of `.adna/how/skills/skill_iii_setup.md` (incl. the wrapper census table) + a broader dev-vault-name sweep across other shipped surfaces. The v8.4 AND v8.5 tags are immutable — any new finding → v8.6, never a retag.
