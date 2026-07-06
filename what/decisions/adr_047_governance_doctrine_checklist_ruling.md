---
type: adr
adr_number: "047"
title: "Operation Concord F1 + DP3 ruling — governance-doctrine adoption is checklist-only (no v6→v8 tooling); consumer vaults adopt the doctrine items, not a version number"
status: accepted
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
campaign_id: campaign_w4_governance_doctrine
supersedes:
superseded_by:
tags: [adr, decision, governance_doctrine, concord, w4, f1, dp3, versioning, checklist, accepted]
---

# ADR-047: Governance-doctrine adoption is checklist-only; adopt the items, not a version number

## Status

**Accepted** — ratified by the operator at Operation Concord **DP3** (2026-07-06, AskUserQuestion: "Ratify ADR-047").
Rules the two findings the campaign carried open: **F1** (governance-version fragmentation — no v6→v8 migration
tooling exists) and **DP3** (whether project-local-versioned vaults adopt aDNA gov-versioning at all). Authored at
`proposed` and held until the gate per the §7.7 ratification discipline this campaign itself rolled out — an
author-vs-ratify record about the doctrine, produced under that doctrine, ratified under it.

## Ratification

- **Ratifier:** Stanley, Founding Architect (operator). Rosetta (author/steward of this record) is never the ratifier.
- **Gate / reference:** Operation Concord **DP3** — ratified via `AskUserQuestion` at the P3 close, 2026-07-06 (operator selected "Ratify ADR-047"; the paired DP2 gate ratified Tier-A-rollout-complete after the operator-directed Obsidian+Lab sweep).
- **Ratification date:** 2026-07-06.
- **Scope:** the **F1 tooling decision** + the **gov-versioning ruling** for consumer vaults. Does **not** touch the
  `.adna/` base template (Standing Rule 1; the doctrine already ships there at v8.5), nor the aDNA Universal Standard
  version (that is ADR-046's lane).
- **4-field block:** decision = *checklist-only + items-not-number* · ratified-by = *Stanley (operator)* · date =
  *2026-07-06* · status = **accepted**.

## Context

Operation Concord (`campaign_w4_governance_doctrine`) adopted the **v8.4 consumer-facing governance doctrine** across
the fleet as a **per-vault checklist** — five project-vault items (§7.7 decision-ratification · credential-broker
routing · AskUserQuestion discipline · single-writer-lease · `executor_tier` budgeting) — rather than a
version-number migration. Two findings from Fleet Re-Seed were carried into this campaign's close:

- **F1** — governance-version fragmentation. **No v6→v8 migration scripts exist** (only v5→v6). A version bump would
  require tooling that does not exist, for a fleet whose vaults carry heterogeneous version tracks.
- **DP3** — many Tier-A vaults carry a project-local version line (`1.6`, `0.17`, `7.0`), a `1.0-genesis` string, or
  **no frontmatter/version at all** (named-projects; `AGENTS.md`-governed vaults). Whether they should ever take aDNA
  gov-versioning was left open.

**The evidence is now in.** The checklist was applied across **30 vaults** — the full template-and-tailor Tier-A body
— spanning every structural case: standard versioned vaults, product-local-versioned vaults, no-frontmatter
named-projects (body-only adoption), `## Credential routing`-already-present (skip-don't-duplicate), an
`AGENTS.md`-pointer vault (`Operations`, adopted in its canonical `AGENTS.md`), and a mesh-only local vault
(`ComfyUI`). `adna_validate --governance` showed **zero new drift** on every adoption; the only errors were
pre-existing MANIFEST/README count drift, orthogonal to the doctrine edit. The instrument is
`artifacts/v8_4_adoption_checklist.md`; the per-vault record is `artifacts/p2_adoption_ledger.md`.

## Decision

**D1 (F1) — checklist-only. Do not build v6→v8 migration tooling.** The per-vault adoption checklist
(`v8_4_adoption_checklist.md`) is the canonical mechanism for propagating the v8.4 consumer-facing doctrine, at
fork-time and for retrofits. Version-bump migration scripts are **not** built: they would encode a number the fleet
does not share, for no behavioural gain the checklist does not already deliver (proven ×30). F1 is **closed** by this
ruling.

**D2 (DP3) — adopt the doctrine items, not a version number.** Consumer vaults keep their existing version track —
aDNA-governance-versioned, vault-local (`1.6`/`0.17`/…), genesis (`1.0-genesis`), or none/no-frontmatter. The
governance-*posture* is what must be coherent, and it is carried by the concrete items, not a string. The **adoption
marker** is:

- a `governance_doctrine: v8.4` frontmatter field **where a YAML block exists** (added alongside, never replacing, the
  vault's own `version`); or
- for **no-frontmatter** vaults (named-projects; `AGENTS.md`-governed), the `## Governance Doctrine (v8.4)` **section
  itself** is the marker — no `---` block is synthesized just to hold a field.

**No forced `version` bump** anywhere. A future decision may reconcile the numbers if the fleet ever wants a single
gov-version axis; this ADR deliberately does not.

## Consequences

- **F1 + F7 closed** in `../../how/campaigns/campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md` (F7 was
  closed at P1; F1 closes here). Operation Concord's P3 exit gate is met.
- The **checklist becomes the fork-time instrument** — every future `<name>.aDNA` inherits the doctrine via the
  checklist, not a migration script. (Upstreaming the checklist into `.adna/` fork-base is a separate release-lane
  item, `skill_template_release`.)
- `adna_validate --governance` continues to **tolerate mixed version tracks** — the CLAUDE-vs-CHANGELOG "versions
  differ" note stays a *warning*, not an error, consistent with items-not-number.
- Pre-existing MANIFEST/README count drift observed across several adopted vaults is a **separate vault-hygiene
  follow-up**, not a governance-doctrine gap.
- A local `template_ratification_record` instrument (ships in the v8.4 set in `.adna/`) is still un-mirrored into
  aDNA.aDNA — a tracked follow-up (P1 AAR), independent of this ruling.
