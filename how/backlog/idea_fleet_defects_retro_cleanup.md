---
type: idea
status: deferred
created: 2026-06-29
updated: 2026-07-02
last_edited_by: agent_rosetta
priority: medium
source: operation_drydock_m03 (ADR-042)
tags: [idea, fleet_defects, retro_cleanup, deferred, drydock, m03, adr_042]
deferred_owner: "operator (per-vault)"
deferred_trigger: "post-launch standard-maintenance mission (arms B/C; each an SO-7-weighted call; touches 45 vaults)"
---

# Idea — Fleet-defects retro-cleanup (deferred arms of Drydock M03)

**Parking lot for the existing-instance cleanup arms** deferred from [[how/missions/mission_fleet_defects_upstream|mission_fleet_defects_upstream]] / [[what/decisions/adr_042_fork_template_hygiene_and_rename_protocol|ADR-042]]. The mission landed the **upstream** fixes (stop future propagation); these are the **deeper-than-tidy** retro-cleanups of instances that already exist — each a **separate operator call** (SO-7-keep-historical weighed per vault). Flag-not-fix, deliberately.

## Deferred arms

### A. Class-1 staged release delta (operator-gated release) — ✅ LANDED in v8.2 (2026-06-29)
The template-tree change — drop `campaign_adna_workspace_upgrade` from the shipped `.adna/` + parameterize the fork persona token — was **ratified (ADR-042 §1) and staged** as a release delta in the mission §"Staged release delta". **Shipped at the `skill_template_release` gate as image tag `v8.2` (`366fbc9`, 2026-06-29)** — base `.adna/CLAUDE.md` persona → `{{persona}}` (resolved at fork/onboarding via `skill_project_fork` Step 4 + `skill_onboarding` Step 8; root workspace-router stays Berthier — smoke-verified) + stale `campaign_adna_workspace_upgrade` dropped; carried the v2.4 standard batch + tooling v2.3 too. Local `~/aDNA/.adna` synced (`125ac3b`). *New forks no longer inherit the clutter or the Berthier persona.* Session: `session_stanley_20260630T000420Z_template_release_v8_2`.

### B. Class-1 retro-strip of the 45 live vaults
The 45 vaults that already carry the completed `campaign_adna_workspace_upgrade` (incl. **aDNA.aDNA's own** inherited copy) are not touched by the upstream fix. Retro-strip is a separate operator decision — the campaign is `completed`/historical (SO-7-keep-historical), so this is a judgment call per vault, not an automatic sweep. Reuse the currency sweep's denominator-honest FIX/KEEP discipline.

### C. Class-3 execute the OBE self-routing sweep over existing residue
Run [[how/skills/skill_project_rename|skill_project_rename.md]]'s keep/strip classifier over vaults with known live-routing residue — evidenced at SpeechForge (LatticeHome→Home, LatticeNetwork→Network, VideoForge→Videos) + TappInterface (LatticeAgent→Harness, LatticeTerminal→Terminal); raw-grep also lit MoleculeForge 28 / ComfyForge 28 / VAASLattice 11 (mostly historical — the classifier separates the true-defect strip subset). One vault at a time, dry-run → operator-confirm → strip.

## Not here
- The **2 Oration/SpeechForge harness strips** are tracked separately in [[who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip|the Oration memo]] (route via Oration's own subagent).
- The **content-level** sibling of this drift (stale version stamps / old org names) was already swept by [[how/missions/mission_vault_wide_currency_sweep|the currency sweep]] — Classes 1 & 3 here are its *structural* siblings.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: operator (per-vault). Trigger: post-launch standard-maintenance mission (arms B/C; each an SO-7-weighted call; touches 45 vaults). Ratified at Champollion G0 (D2).
