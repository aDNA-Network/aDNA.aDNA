---
session_id: session_stanley_20260629_143408_fleet_defects_upstream
type: session
intent: "Author the upstream/template + standard fixes for Berthier's 3 fleet-defect classes (Operation Drydock M03), all 3 classes UPSTREAM-ONLY; defer retro-cleanup of existing instances."
status: completed
created: 2026-06-29
tier: 2
mission: mission_fleet_defects_upstream
last_edited_by: agent_stanley
tags: [session, fleet_defects, drydock, m03, standard_maintenance, upstream, adr_042]
---

# Session — Fleet-defects upstream standard-maintenance (Drydock M03)

**Operator greenlight (this session):** all 3 classes, **upstream-only**. Defer retro-cleanup of existing instances (45 template-clutter vaults; OBE rename-residue sweep; the 2 Oration/SpeechForge EOF strips) as separate operator calls.

## Scope (Tier 2 — declares shared-config edits)

Files this session will create/modify (path-scoped):
- **Create**: `how/missions/mission_fleet_defects_upstream.md` · `what/decisions/adr_042_fork_template_hygiene_and_rename_protocol.md` · `how/skills/skill_project_rename.md` · `who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip.md` · `how/backlog/idea_fleet_defects_retro_cleanup.md`
- **Modify**: `what/docs/adna_standard.md` (v2.3→v2.4: new §6.5 + §13.2 item) · `what/lattices/tools/adna_validate.py` (harness-injection governance check) · `CLAUDE.md` (skills table: register `skill_project_rename`) · `STATE.md` (python3 patch) · `who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects.md` (disposition update)

**Two-gate discipline:** Class-1 template/`.adna` changes are STAGED as a ratified release delta (ADR-042) — NOT applied to `.adna/` or the public face this session; that is a separate operator-gated `skill_template_release` event (Standing Order #1). Workspace Rule 1 preserved (never edit `.adna/`).

## SITREP

**Completed** — `mission_fleet_defects_upstream` (status: completed + AAR). Operator greenlit all 3 fleet-defect classes, upstream-only. Landed:
- **ADR-042** accepted (fork-template hygiene & rename protocol).
- **Standard v2.3→v2.4**: `adna_standard.md` §6.5 Rename Protocol (Class 3) + §13.2 Tier-1 "no harness-injected context" safeguard + mermaid A4 (Class 2).
- **`skill_project_rename.md`** (Class 3 keep/strip classifier) + CLAUDE.md skills-table registration.
- **`adna_validate.py --governance`** harness-injection guard (Class 2) — verified: fires on `Oration.aDNA/CLAUDE.md:295,297`, clean on aDNA.aDNA.
- **`coord_2026_06_29_rosetta_to_oration_harness_strip`** (deferred 2 strips → Oration subagent) + **`idea_fleet_defects_retro_cleanup`** (3 deferred retro arms) + Berthier inbound memo → `resolved` + STATE.md (changelog + line-199).
- **Class 1 STAGED** (not live): release delta recorded for the next `skill_template_release` gate.
- Validation: `npx astro build` 179pp/0err; `npm run test:gates` **304/304**; root-router Berthier untouched; diff scope clean (no `.pyc`).

**In progress** — none.

**Next up** — commit (path-scoped, no `.pyc`) + `git fetch`/ff-verify/`gitleaks` + push the dev graph. Then the operator-gated follow-ups (NOT this session): fire `skill_template_release` to propagate the v2.4 batch + Class-1 delta to `.adna/`/public; the 3 retro arms in `idea_fleet_defects_retro_cleanup`; Oration's subagent lands the 2 strips.

**Blockers** — none.

**Files touched** — created: mission, ADR-042, skill_project_rename, Oration coord memo, idea_fleet_defects_retro_cleanup, this session. Modified: `adna_standard.md`, `adna_validate.py`, `CLAUDE.md`, `STATE.md`, the Berthier inbound coord memo.

## Next Session Prompt

Fleet-defects upstream mission (`mission_fleet_defects_upstream`, Drydock M03, ADR-042) is COMPLETE + committed — all 3 classes upstream-only. Classes 2 & 3 landed live in the dev graph (standard v2.4 §6.5 + §13.2; `skill_project_rename.md`; `adna_validate.py --governance` guard); Class 1 staged as a ratified release delta. **No remaining in-mission work.** The next executable items are all operator-gated and OUTSIDE this mission: (1) open a `skill_template_release` gate to propagate the v2.4 batch + the Class-1 template delta (drop `campaign_adna_workspace_upgrade` + parameterize the fork persona) to `.adna/` + the public `aDNA-Network/aDNA` image — the release smoke-test (step f) MUST confirm the root workspace-router still reads Berthier while new forks get a substituted persona; (2) the 3 deferred retro arms in `idea_fleet_defects_retro_cleanup` (45-vault campaign strip; OBE rename-residue sweep via `skill_project_rename`; each SO-7-weighed, operator-gated); (3) Oration's own subagent lands the 2 harness strips per `coord_2026_06_29_rosetta_to_oration_harness_strip`. GOTCHAS: `what/lattices/tools/*.py` need PyYAML — run with `python3.13` (default `python3` is 3.14, no yaml); STATE.md is the 60K-token giant-changelog-line file → python3 exact-replace, never Read/Edit; `npx astro build` not `npm run build`; never co-run Lighthouse with the gate preview server.
