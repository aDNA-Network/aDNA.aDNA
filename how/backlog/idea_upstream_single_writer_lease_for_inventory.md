---
type: backlog_idea
idea_id: idea_upstream_single_writer_lease_for_inventory
title: "Codify single-writer-lease as an inventory-edit discipline in the `.adna/` template (v8.0+)"
category: doctrine
status: resolved
priority: medium
effort: small  # ~0.5 session — one section in CLAUDE.md template + 1 short skill update + 1 AGENTS.md hint
proposed_by: agent_stanley
proposed_date: 2026-05-26
updated: 2026-07-06
upstream: true
target_version: "v8.0"
filed_from: node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m06_documentation_sweep.md
filing_authorization: skill_upstream_contribution
last_edited_by: agent_rosetta
tags: [backlog, upstream, doctrine, claude_md, single_writer_lease, concurrency, inventory_entity_type, credentials, node_adna, hestia, dual_session_handoff, collision_prevention]
created: 2026-05-26
fold_batch: champollion_m6_1_rc
---

# Upstream Contribution — Single-writer-lease for inventory + credential edits (v8.0+)

## Problem

`campaign_node_credentials` M05 (2026-05-25 → 2026-05-26) ran as **two parallel agent sessions writing concurrently** to the same canonical inventory + doctrine surface:

- `mossy-badger` — workspace-wide credential audit (NAMES-ONLY); writes to `inventory_credentials.{md,yaml}`
- `expressive-sunset` — C06 anthropic_api_key migration + doctrine reconciliation; writes to `inventory_credentials.{md,yaml}` + `doctrine_credential_handling.md` + campaign master

The two sessions both passed the `node.aDNA` Startup Checklist step 3 (`how/sessions/active/` scan) at session entry, but neither **created its own session file** as the discipline expects, so the collision was invisible. The conflict surfaced as Edit-tool "File modified since read" warnings mid-write. Reconciliation cost: one mistaken speculative-content revert (`mossy-badger` reverted a `C06` row, suspecting speculative content; it was the live `expressive-sunset` migration); several minutes of operator-mediated bridging; one cross-vault coord memo to memorialize the process (`node.aDNA/who/coordination/coord_2026_05_25_m05_dual_session_handoff.md`).

**The credential + inventory + doctrine surface is a small-fan-in shared resource** (one broker per node; one inventory; one doctrine) where concurrent writes don't naturally merge. The same dynamic applies to **any** node-local inventory entity type (`inventory_vaults`, `inventory_system`, `inventory_memberships`, `inventory_credentials`) and identity entity type (`identity_node`, `identity_lattice_protocol`). The standard treats `how/sessions/active/` scan as a "polite suggestion" Startup Checklist item rather than a load-bearing requirement; M05 proved it must be the latter for the inventory-edit surface.

M06 of `campaign_node_credentials` codifies the rule **locally** at `/Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md §8` (2026-05-26). This backlog proposes lifting the rule into the `.adna/` template so every aDNA vault inherits the discipline — not just `node.aDNA/` consumers of credential-broker work.

## Proposed solution

Three additive changes to the `.adna/` template (no removals, no rewrites):

### Change 1 — `.adna/CLAUDE.md` template Safety Rules section

Add a new safety rule after the existing "Read before write" / "Check `updated` field" rules:

```markdown
| Critical (inventory/credentials/identity entity types) | Pre-flight scan `how/sessions/active/` for ANY concurrent session whose mission_id touches the same entity type. If present → abort + escalate to operator. **Single-writer lease is mandatory, not advisory, for these entity types.** |
```

### Change 2 — `.adna/AGENTS.md` template

Add a one-paragraph section under `## Safety Rules` (or wherever the safety convention is documented for that template version):

```markdown
### Single-writer lease for inventory + identity entity types

Before editing **any** file in `what/inventory/*` or `what/identity/*`, scan `how/sessions/active/`. If a concurrent session is in flight on the same entity type, abort and surface to the operator. Reason: these files are small-fan-in shared resources where concurrent writes don't naturally merge. The cost of pausing to confirm is low; the cost of an unwanted speculative revert (the M05 root cause; see `node.aDNA/who/coordination/coord_2026_05_25_m05_dual_session_handoff.md`) is high.
```

### Change 3 — `.adna/how/skills/skill_inventory_refresh.md` + sibling inventory skills

Each canonical inventory-touching skill gains a `## Pre-flight` section with the explicit lease check (`ls how/sessions/active/ | grep -v '^\.gitkeep$'`) before its main work. Skills that don't currently scan should be updated to do so.

The three changes work together:
- CLAUDE.md template makes the rule visible at vault open
- AGENTS.md template makes the rule discoverable when an agent walks down to `what/inventory/`
- Skill update makes the rule **automatically enforced** for the most common inventory-mutation path

## Reasoning

- **Direct empirical evidence (M05 dual-session 2026-05-25 → 2026-05-26)**: two sessions wrote to the same inventory + doctrine surface; collision was real, reconciliation was non-trivial, and the rule's absence was load-bearing in the failure. Full process narrative + AAR finding at `coord_2026_05_25_m05_dual_session_handoff.md`.
- **Applies to entire entity-type family** — the M05 collision was on `inventory_credentials.*` + `doctrine_credential_handling.md` specifically, but the same shape applies to `inventory_vaults.*` (skill_inventory_refresh sessions concurrent with vault-fork sessions could collide), `inventory_system.*` (system-recon sessions concurrent with audit sessions), `inventory_memberships.*` (federation-config sessions concurrent with network-state sessions). Single-writer-lease is the lightest discipline that prevents the failure mode without real locks.
- **Sibling-doctrine alignment**: this mirrors the `.adna/how/skills/skill_agentic_sudo.md` discipline (canonical at `aDNA.aDNA/how/skills/`) — load-bearing operational rules that prevent specific known failure modes deserve template-level codification, not per-vault rediscovery.
- **Cheap enforcement**: a single `ls how/sessions/active/` + grep is ~1ms; the cost-to-correctness ratio is unbeatable.
- **Composable with the inventory entity type promotion**: `idea_upstream_inventory_entity_type.md` (sibling backlog, proposed for v8.0) elevates `inventory` to a canonical WHAT entity type. The single-writer-lease rule is the **operational discipline** that goes with the **structural** addition.

## Compatibility

- **Upstream `.adna/CLAUDE.md`**: 1-line additive row in the Safety Rules table.
- **Upstream `.adna/AGENTS.md`**: 1-paragraph additive section.
- **Upstream `.adna/how/skills/skill_inventory_refresh.md`**: ~5-line additive Pre-flight section.
- **Forks inheriting the template**: receive the rule on next clone of `.adna/`. Existing forks continue working without change; per-vault adoption can be retrofitted on operator discretion.
- **Vaults that don't use the `inventory` or `identity` entity types**: rule is inactive (no files in scope); no behavioral change.
- **Skill harness with multiple-agent orchestration** (sub-agents, parallel Task tools): rule covers this transparently — each agent files its own session record; collision detection works the same way.

## Acceptance test

1. Fresh `<name>.aDNA/` fork via `skill_project_fork.md` produces a `CLAUDE.md` containing the Safety Rules row about single-writer-lease.
2. A test agent attempting to edit `what/inventory/inventory_*.md` with an active sibling session file in `how/sessions/active/` correctly aborts and surfaces the lease-conflict to operator.
3. `skill_inventory_refresh` no longer races a concurrent inventory-mutation session — confirmed by replaying the M05 scenario in a sandboxed test vault.

## Related

- `node.aDNA/who/coordination/coord_2026_05_25_m05_dual_session_handoff.md` — M05 root-cause incident report
- `node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m05_second_vault_pilot.md` AAR — Finding documents the dual-session learning
- `node.aDNA/how/campaigns/campaign_node_credentials/aar_campaign.md` — campaign-level rollup citing this rule as load-bearing
- `/Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` §8 — local codification (2026-05-26)
- `idea_upstream_credential_broker_template_inheritance.md` — sibling M06 carry-forward (filed same date)
- `idea_upstream_planning_light_substrate_recon.md` — sibling M06 carry-forward (filed same date)
- `idea_upstream_inventory_entity_type.md` — structural addition this rule operationalizes
- `idea_upstream_identity_entity_type.md` — same entity-family that the rule covers
- `.adna/how/skills/skill_agentic_sudo.md` — analogous load-bearing template-level discipline


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.
