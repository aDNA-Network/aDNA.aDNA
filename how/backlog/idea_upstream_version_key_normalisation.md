---
type: backlog_idea
status: idea
priority: low
created: 2026-10-07
updated: 2026-10-07
last_edited_by: agent_hestia
filed_from: Home.aDNA/what/decisions/adr_022_inventory_vaults_version_field.md (Sitting 49)
filing_authorization: skill_upstream_contribution · operator approval of Hestia's ADR-022 recommendations (plan spicy-snail, 2026-10-07)
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, version, template_version, standard_base, manifest, changelog, fork_stamp, home_adna]
---

# Idea: one spelling for "my version" and one for "the standard release I was forked from"

## Problem

A node register (Home.aDNA) tried to record each vault's version and found two different facts spelled eight ways.

**"Which template release was I cut from"** — five spellings across the 106 vaults on Dyrnwyn (2026-10-07):
`template_version` (MANIFEST, 2) · `standard_base` (CLAUDE, 1) · `inherited_from_template_version` (CLAUDE, 1) ·
CLAUDE.md bare `version:` (47 vaults, used **both** ways — ComfyUI "7.0" is the template's, Molecules "1.6" its own) ·
and the CHANGELOG head itself, where it is a fork stamp.

**"My own version"** — three spellings: MANIFEST `version` · MANIFEST/CLAUDE `project_version` · CLAUDE `vault_version`.

### The CHANGELOG head is mostly a fork stamp

A vault forked from `.adna/` inherits the template's CHANGELOG. 37 of the 50 parseable CHANGELOG heads equal a
template release, 35 of them under the bare title `# Changelog`, each dated before the vault's first commit. They do
not move when the vault changes (Bitwarden: 41 CHANGELOG commits, head still v8.0), nor when it upgrades.

### Frontmatter own-versions go stale

Where a frontmatter version and a vault-written CHANGELOG version both exist (7 vaults), they disagree in 4, and the
CHANGELOG is ahead every time: aDNALabs 0.1 vs 0.1.552 · Network 0.1 vs 0.1.431 · Oration 0.3.0 vs 0.4.0 · Home 0.1 vs 0.4.

## Proposed shape (the standard's call — Home rules on none of it)

1. **Two keys, named once, in MANIFEST frontmatter:** one for the vault's own version, one for the template release
   it was forked from (e.g. `version:` + `forked_from_standard:`). `skill_project_fork` stamps the second at fork time;
   the first starts at `0.0.1` and is the vault's to bump.
2. **The fork renames the inherited CHANGELOG's head** (or starts a fresh one), so a CHANGELOG head is always the
   vault's own and never silently the template's.
3. **CLAUDE.md's bare `version:`** gets one meaning, or is retired — it is the ambiguous one today.
4. **Optional, larger:** a *conforms-to* version, stamped by the upgrade path (`skill_l1_upgrade` /
   `skill_version_migration`), distinct from *forked-from*. Without it no reader can tell an old fork that was
   upgraded from one that was not.

## Consumer waiting on it

Home.aDNA ADR-022 (`proposed`) reads every spelling above and derives honestly in the meantime (`none` where nothing
is stated). A normalised key would let it drop the census rules. Nothing at Home is blocked on this.

— Hestia, Home.aDNA · 2026-10-07
