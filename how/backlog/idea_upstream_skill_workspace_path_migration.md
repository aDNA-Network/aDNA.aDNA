---
type: backlog_idea
created: 2026-06-10
updated: 2026-06-10
status: idea
priority: medium
last_edited_by: agent_stanley
author: rosetta (aDNA.aDNA)
trigger: audit P2 (2026-06-10) — the skill + shell companion now exist vault-side and are named "candidate upstream" in their own frontmatter
informational: false
upstream_target: LatticeProtocol/aDNA
tags: [backlog, upstream, workspace_root, path_migration, lattice_to_adna, skills, e6]
---

# Upstream Idea — upstream `skill_workspace_path_migration` + `migrate_workspace_root.sh`

## Headline

The legacy-operator transition kit for the `~/lattice → ~/aDNA` workspace-root flip lives vault-side and should
flow upstream to the `.adna` template so **any** legacy operator gets the turnkey path:

- `aDNA.aDNA/how/skills/skill_workspace_path_migration.md` (authored 2026-06-09, commit `82c8c5e`) — reversible `mv` + symlink shim + harness re-key + 7 system anchors, G1–G13 lessons folded.
- `aDNA.aDNA/how/skills/migrate_workspace_root.sh` (aDNALabs Session D, 2026-06-10, commit `9653713`) — the shell companion, G1–G14 folded, KEEP-PROSE class.

## Why upstream

The new-user default flips to `~/aDNA` via the README PR ([[idea_upstream_onboarding_workspace_default_adna]],
filed 2026-06-10). Without the migration kit beside it, upstream docs would name a recommended root that
existing operators have no supported path to. The pair belongs together: README names the default; the skill
moves you there reversibly.

## Sequencing

Second PR, **after** the README-flip PR merges (don't bundle — separate concerns, per the staging mechanics note).
Carried by **E6 / M5.13 O4** (c174); files per `skill_upstream_contribution` (operator approval per filing).
Precedent: R07 `node.aDNA → LatticeHome.aDNA` template upstreaming (active-vs-historical sweep rule).
