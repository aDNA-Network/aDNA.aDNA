---
type: reference
title: "v8.4 Consumer-Facing Doctrine — Per-Vault Adoption Checklist"
created: 2026-07-05
updated: 2026-07-05
status: active
last_edited_by: agent_rosetta
campaign: campaign_w4_governance_doctrine
tags: [reference, w4, governance_doctrine, checklist, applicability, instrument]
---

# v8.4 Consumer-Facing Doctrine — Per-Vault Adoption Checklist

The canonical instrument for **Operation Concord** (`campaign_w4_governance_doctrine`). It turns the v8.4 consumer-facing
governance set (shipped in `.adna/CHANGELOG.md`, current template gov v8.5) into a **per-vault checklist**. This is a
*doctrine* adoption, **not** a version-number migration — a vault adopts the concrete items below regardless of what (if
any) version string it carries.

**In one line:** governance *posture* should be coherent across the fleet even where version *numbers* differ. This
checklist is that posture, itemized.

## Why an applicability model

The v8.4 set was written at three altitudes — the **workspace router** (`~/aDNA/CLAUDE.md`), a **node vault**
(`Home.aDNA`), and an ordinary **project vault** (e.g. `Molecules.aDNA`). Not every item belongs at every altitude.
Applying a router-level rule to a project vault is as wrong as omitting a universal one. So each item below is tagged with
where it applies. **The most common W4 target is a project vault**, so the "Project-vault adoption recipe" at the bottom
is the mechanical path for ~all of Tier-A.

Legend: **✅ adopt** · **ref** = reference/point-to only (the doctrine lives at another altitude) · **n/a** = does not apply here.

## The checklist

| # | Doctrine item | What "adopted" looks like (concrete) | project-vault | node-vault | workspace-router |
|---|---------------|--------------------------------------|:---:|:---:|:---:|
| 1 | **§7.7 ratification discipline** | A section stating: agents *author* decisions/ADRs, operators *ratify*; a 4-field ratification block (decision · ratified-by · date · status); cite `how/templates/template_ratification_record.md`. | ✅ | ✅ | ✅ |
| 2 | **Standing Rule 5 — agentic sudo** | Point to `skill_agentic_sudo` (osascript GUI-dialog pattern; never `sudo -S` with an inline password). Node-level doctrine; project vaults *reference* it. | ref | ✅ | ✅ |
| 3 | **Standing Rule 6 — credential broker = Home.aDNA** | The broker *home* is Home.aDNA (Keychain-primary + 1P-backup). Node-vault owns the broker; project vaults carry the *routing snippet* (item 4). | ref | ✅ | ✅ |
| 4 | **Credential-routing snippet** | A standalone `### Credential routing (broker = Home.aDNA)` section: names-only, env-var/URI pattern, tokens never in-conversation. This is the **consumer-side** of item 3 — the thing a project vault actually writes. | ✅ | ✅ | — |
| 5 | **Standing Rule 7 — router-row discipline** | Router rows carry routing identity only; operational state lives in each project's `STATE.md`. Governs the **root router** table only. | n/a | n/a | ✅ |
| 6 | **AskUserQuestion discipline** | A rule to surface load-bearing decisions to the operator (default-with-escape; record the resolution), rather than guessing or burying them. | ✅ | ✅ | ✅ |
| 7 | **single-writer-lease** | One writer at a time for any shared config / high-collision entity (mandatory for `inventory` / `credentials` / `identity` types); read-before-write + `updated`/`last_edited_by` stamp. | ✅ | ✅ | ✅ |
| 8 | **`executor_tier` fields** | Mission/plan frontmatter carries `executor_tier: fable\|opus\|sonnet` (planned model-routing) alongside `token_budget_estimated/actual`; cite `pattern_model_tiered_campaign_execution`. | ✅ | ✅ | ✅ |

> Items 2/3/5 are the "Standing Rules 5–7" of the W4 stub, split to their true altitudes. **The load-bearing finding:**
> at a project vault you adopt items **1, 4, 6, 7, 8** and only *reference* 2/3 (node-level) — and you **drop 5 entirely**
> (router-only). That five-item core is the project-vault recipe.

## Project-vault adoption recipe (the Tier-A common case)

For a typical Tier-A project vault, apply exactly these to its `CLAUDE.md` (host persona owns the edit; per-vault local commit):

1. **§7.7 ratification** — add a `## Decision Ratification (§7.7)` section (author-vs-ratify; 4-field block).
2. **Credential routing** — add a `### Credential routing (broker = Home.aDNA)` section (names-only; env-var pattern).
3. **AskUserQuestion discipline** — add a short rule in the agent-protocol / safety area.
4. **single-writer-lease** — add a rule in the file-safety / collision-prevention area.
5. **`executor_tier`** — ensure the vault's mission template carries the field + a one-line doctrine note in CLAUDE.md.
6. *Reference (don't inline):* agentic-sudo (`skill_agentic_sudo`) + the broker home (Home.aDNA). **Skip** router-row discipline.
7. Optionally record `governance_doctrine: v8.4` in frontmatter where the vault uses aDNA gov-versioning (many carry
   project-local version lines instead — see DP3; adopt the *items*, not the *number*).

## Related v8.4 items (secondary — adopt where relevant)

- **Heavy-File Read convention** (AGENTS.md doctrine) — default offset+limit reads for files ≥ 50 kT / ≥ 200 KB (e.g. this
  vault's own `STATE.md`).
- **Health-check allowlist-census rule** — node-vault (`skill_node_health_check`) scope; not a project-vault item.
- **Lattice Home splash** (`pattern_lattice_home` + `skill_lattice_home_install`) — opt-in operator surface, not core doctrine.

## Provenance

Derived at Operation Concord P1 (the aDNA.aDNA dogfood, `mission_w4_p1_dogfood_self_drift`) from `.adna/CHANGELOG.md`
(v8.4 entry) and the W4 readiness stub `idea_fleet_reseed_w4_governance_doctrine`. The applicability model is the finding
the dogfood surfaced: see [[campaign_w4_governance_doctrine]] and `../campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md` (F7).
