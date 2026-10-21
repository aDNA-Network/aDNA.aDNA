---
type: backlog
idea_id: idea_upstream_standard_naming_and_mission_type_errata
title: "Two self-contradictions in the shipped standard: §3.5 directory names (SHOULD PascalCase, MUST lowercase) and the mission `type` value (Appendix B `mission`, templates `plan`)"
category: standard
status: proposed
priority: high
effort: session
proposed_by: agent_rosetta
created: 2026-10-21
updated: 2026-10-21
last_edited_by: agent_rosetta
upstream_target: aDNA-Network/aDNA (adna_standard.md §3.5 + Appendix B; ADR-009 §1; skill_project_fork validator)
release_window: v2.7   # standard-window queue — how/missions/artifacts/v8_14/v8_14_release_ledger.md §2e W3 + W4 (S2-R5 · S2-R6)
filed_from: v8.14 ledger §4 review, session_stanley_20261021_040841_v8_14_rulings_and_rows (operator-requested review of the Q5 and Q6 recommendations)
relates: [adr_009_aDNA_naming_convention, adr_063_standard_errata_v2_6, skill_project_fork, v8_14_release_ledger]
tags: [backlog, upstream, standard, errata, naming, mission_type, v2_7]
---

# Two self-contradictions in the shipped standard

Found while reviewing two v8.14 rulings. Each is an erratum in the sense of [[adr_063_standard_errata_v2_6]]: the
standard disagrees with itself, so it needs its own §7.7 line at a standard window. A template release cannot fix
it. All evidence below was read first-hand on 2026-10-21 `[D]`.

Plain version: the rulebook says two different things in two places. People follow whichever one they read first,
and the fleet now does both.

## E-3 · Directory names (§3.5)

- §3.5 says forked projects "SHOULD use the pattern `ProjectName.aDNA/`", and two lines later says the name
  "MUST match `[a-z][a-z0-9_]{0,63}`".
- On this node, **124 of 133** vault directories are PascalCase and 5 are snake_case. `Home.aDNA`, which the image's
  own fork skill creates, fails the MUST, and so does `aDNA.aDNA`.
- ADR-009 §1 says snake_case and names `ScienceStanley.aDNA` as the wrong form. The image's
  `skill_project_fork.md:66` enforces the lowercase rule.
- Four vaults have filed per-vault override records. The latest, Harness.aDNA, asked that its exception be
  recorded in ADR-009 §3. That was declined (S2-R5), because a fifth row on a list that covers 93% of the fleet
  would make the list longer, not right.
- **Proposed:** the MUST becomes `[A-Za-z][A-Za-z0-9_]{0,63}` (PascalCase allowed; hyphens still barred). ADR-009
  §1 and the fork validator are amended in the same fold. Until it folds, the skill's existing "SHOULD document an
  override" rule stands.

## E-4 · Mission `type` (Appendix B)

- Appendix B (`adna_standard.md:1519`) queries "files where `type: mission`"; so did `tool_setup_guide.md:59`
  (fixed at v8.14 to accept both values).
- `context_adna_core_entity_definitions.md:142`, `template_mission.md` and `template_campaign_mission.md` all write
  `type: plan`.
- Fleet mission files: 3,025 `plan` · 2,349 `mission` · plus `campaign_mission` 151 · `execution_mission` 92 ·
  `mission_plan` 30. No code consumer keys on either value.
- **Proposed:** Appendix B accepts both `plan` and `mission`. Renaming either set would touch thousands of files to
  settle a word.

## Related

- [[v8_14_release_ledger]] §2e W3 + W4.
- [[adr_009_aDNA_naming_convention]] §1 and §3.
- [[adr_063_standard_errata_v2_6]]: the precedent for errata riding a standard window.
