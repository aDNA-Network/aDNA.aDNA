---
type: backlog_idea
idea_id: idea_upstream_credential_broker_template_inheritance
title: "Fold the `### Credential routing (broker = node.aDNA)` snippet into `.adna/CLAUDE.md` for new-vault forward-inheritance"
category: doctrine
status: proposed
priority: medium
effort: small  # ~0.5 session — single-section insert in upstream template + 1 ADR-touch
proposed_by: agent_stanley
proposed_date: 2026-05-26
updated: 2026-05-26
upstream: true
target_version: "v8.0"
filed_from: node.aDNA/how/campaigns/campaign_node_credentials/missions/mission_node_creds_m06_documentation_sweep.md
filing_authorization: skill_upstream_contribution
last_edited_by: agent_stanley
tags: [backlog, upstream, doctrine, claude_md, template_inheritance, credentials, credential_broker, node_adna, hestia, cross_vault_routing, latlab_lp_genesis_dependency]
created: 2026-05-26
---

# Upstream Contribution — Credential-broker snippet in `.adna/CLAUDE.md` (v8.0+)

## Problem

`campaign_node_credentials` (M00–M06, closed 2026-05-26 on this node) established `node.aDNA/` (Hestia) as the canonical credential broker on Keychain-primary + 1P-backup substrate. The cross-vault routing rule that consumer vaults need lives in `/Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md §7` — a 15-line `### Credential routing (broker = node.aDNA)` snippet that names discovery / access / discipline / rotation pointers.

M06 manually swept the snippet into two day-1 vaults' `CLAUDE.md`:

- `LatticeLabs.aDNA/CLAUDE.md:206` (landed at M05 O3 2026-05-26)
- `ScienceStanley.aDNA/CLAUDE.md` (landed at M06 O2 2026-05-26)

Two further day-1 candidates (`latlab/` + `lattice-protocol/`) were **deferred** to their future Platform.aDNA forks (`LatLab.aDNA/` + `LatticeProtocol.aDNA/`; Vault Fork Queue in `node.aDNA/STATE.md`) because the current code-repo READMEs aren't full aDNA vault governance files. ~25 other `<name>.aDNA/` vaults on this node receive no snippet today and would each need a per-vault manual edit if the broker pattern is to spread.

**Each new `<name>.aDNA/` fork via `skill_project_fork.md` is a fresh missed-coverage event** — without an upstream template line, agents discover the broker pattern by reading other vaults rather than by reading their own fresh `CLAUDE.md`. Same dynamic that motivated `idea_upstream_inventory_entity_type.md` + `idea_upstream_identity_entity_type.md`: per-node patterns that have proven their worth deserve to be the default, not the discovery.

## Proposed solution

Fold the `### Credential routing (broker = node.aDNA)` snippet into `.adna/CLAUDE.md` (the upstream template), conditionally rendered when `node.aDNA/` is present at the workspace root. The snippet text is the **verbatim copy** from `doctrine_credential_handling.md §7` (already canonical, already mirrored in two day-1 vault `CLAUDE.md` files — confirmed identical at M06 verification).

Two implementation shapes:

1. **Inline section (simpler)** — add the snippet as a new `### Credential routing (broker = node.aDNA)` subsection in `.adna/CLAUDE.md`, following the existing "Cross-project routing hook" pattern (already in v7.0). New vaults inherit the snippet at fork time. Vaults without a `node.aDNA/` peer get a degraded-but-coherent snippet (pointers don't resolve but the routing principle is documented).
2. **Conditional include (cleaner)** — `.adna/CLAUDE.md` gains a `{{#if node_adna_present}}…{{/if}}` block (or equivalent Jinja-style hook in `skill_project_fork.md`). Requires templating support in the fork skill, which doesn't currently exist; would need template substitution discipline to be added in tandem. Defer to a future template-engine pass.

**Recommendation**: Ship the inline section (option 1) at v8.0; defer conditional include to v8.1+ when a broader template-substitution facility lands.

## Verbatim snippet to insert

Add immediately after the existing v7.0 "Cross-project routing hook" subsection in `.adna/CLAUDE.md`:

```markdown
### Credential routing (broker = `node.aDNA`)

This vault's credentials are brokered by `node.aDNA/` (Hestia). When you need a credential value:

1. **Discovery** — read `node.aDNA/what/inventory/inventory_credentials.md` to find the credential by name and resolve its env-var name + canonical 1P URI (`op://...`) or file path.
2. **Access** — read the credential's **env-var** (exported at shell init by a `~/.zshrc` Keychain-export block, per the inventory `env_var` field; Keychain entry carries a `/usr/bin/security` ACL grant — no biometric prompt, no TTY requirement). If the env-var is unset and you are in a real terminal, fall back to `op read "<uri>"` (this surfaces a biometric prompt — TTY only).
3. **Discipline** — NEVER write a credential value into this vault's files (SO D4=A NAMES ONLY). Vault references use the URI or env-var name only. Apply `~/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` §6 in full (URI-not-value · `head -c N` ≤ 6 · Keychain-export preference · backup-exclusion).
4. **Rotation / onboarding** — direct any rotation request or new-credential provisioning to the broker pattern: open a coord memo to `node.aDNA/who/coordination/` and/or invoke `node.aDNA/how/skills/skill_credential_provision_via_op.md` (first-time onboarding uses the ISS paste surface; rotation uses Pattern A §4.3 — touch both Keychain + 1P).

Broker docs:
- Inventory: `node.aDNA/what/inventory/inventory_credentials.md`
- Pattern ADR: `node.aDNA/what/decisions/adr_002_credential_broker_pattern.md` (§G2.1 = Keychain-primary + 1P-backup)
- Onboarding-surface ADR: `node.aDNA/what/decisions/adr_003_credential_onboarding_surfaces.md`
- Provisioning skill: `node.aDNA/how/skills/skill_credential_provision_via_op.md`
- Workspace doctrine: `/Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md`
```

The forking skill should NOT add an `Adoption coord` pointer line — that's a per-vault customization the operator adds when the vault actually starts brokering specific credentials (LL pattern, SS pattern; both filed manually).

## Reasoning

- **Existing precedent**: the v7.0 "Cross-project routing hook" already routes inventory / health / membership / credentials queries to `node.aDNA/`. The credential-broker snippet operationalizes the **credentials** clause of that existing hook — additive, not novel.
- **Three coverage events in flight that would benefit from this immediately**:
  - `LatLab.aDNA/` genesis fork (Vault Fork Queue; pre-fork right now)
  - `LatticeProtocol.aDNA/` genesis fork (Vault Fork Queue; partial-transition in progress)
  - Any future `<name>.aDNA/` fork (~25 sibling vaults on this node today; n+1 ecosystem growth ongoing)
- **Snippet is stable**: M02 G1 Keychain pivot + M05 F9 `load_secrets.sh` resolution + M05 O3 LL adoption + M06 O2 SS adoption all converged on the same §7 wording. Two day-1 production uses confirm the snippet's shape; no further iteration needed before v8.0 freeze.
- **Additive, not breaking**: same character as the v7.0 cross-project routing hook addition. Vaults inheriting the snippet but with no broker peer get a documented-pointer-block that no agent will action — degraded gracefully.
- **Doctrine canonical-source preserved**: `doctrine_credential_handling.md §7` remains the single source of truth; the template carries a copy that's regenerated from the doctrine at template-version cut-time. Standard maintainer's responsibility on each template version bump.

## Compatibility

- **Upstream `.adna/CLAUDE.md`**: ~17-line additive section; no removal or rewrite of existing rules. Same shape as the v7.0 "Cross-project routing hook" subsection added in that release.
- **Forks inheriting the template**: receive the snippet on next clone of `.adna/`. Existing forks continue working without change (no force-update on existing CLAUDE.md files; per-vault adoption remains manual for the pre-v8.0 cohort).
- **Vaults without a `node.aDNA/` peer**: snippet pointers don't resolve; routing principle is documented but unactionable. Acceptable degradation — these vaults can elide the snippet at fork time (per-operator discretion) or leave it as forward-aspiration.
- **No `.claude/settings.json` impact**: pure documentation addition.

## Acceptance test

1. Fresh `<name>.aDNA/` fork via `skill_project_fork.md` produces a `CLAUDE.md` containing the `### Credential routing (broker = node.aDNA)` subsection verbatim.
2. The snippet's text matches `doctrine_credential_handling.md §7` to the byte (template-cut tooling preserves verbatim copy).
3. Existing LL + SS adopters: their CLAUDE.md snippets remain unchanged (no force-merge from the template).

## Related

- `idea_upstream_inventory_entity_type.md` — same upstream-promotion pattern (node-local entity type → standard)
- `idea_upstream_identity_entity_type.md` — same upstream-promotion pattern
- `idea_upstream_single_writer_lease_for_inventory.md` — sibling M06 carry-forward (filed same date)
- `idea_upstream_planning_light_substrate_recon.md` — sibling M06 carry-forward (filed same date)
- `node.aDNA/how/campaigns/campaign_node_credentials/aar_campaign.md` — campaign-level rollup citing this as exit-gate item
- `node.aDNA/what/decisions/adr_002_credential_broker_pattern.md` §G2.1 — Keychain pivot ratification
- `node.aDNA/what/decisions/adr_003_credential_onboarding_surfaces.md` — Pattern A + Pattern B
- `LatticeLabs.aDNA/CLAUDE.md:206` — day-1 reference implementation
- `ScienceStanley.aDNA/CLAUDE.md` `### Credential routing` subsection — day-1 reference implementation (added 2026-05-26)
