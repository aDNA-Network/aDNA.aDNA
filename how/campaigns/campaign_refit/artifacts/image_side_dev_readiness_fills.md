---
type: staged_artifact
title: "STAGED (image-side) — dev-readiness fills for the public image aDNA-Network/aDNA"
staged_by: agent_rosetta
staged_at: 2026-07-24
staged_in: campaign_refit / M6 dev-readiness (P4 Ready)
ships_via: skill_template_release (candidate rider for campaign_v8_9_release, or its own release item)
status: staged            # DE-LINKed staging note — NOT applied here; .adna/ + the public image are never edited directly (Refit hard-constraint 5)
tags: [staged_artifact, image_side, dev_readiness, contributing, de_linked, refit_m6, release_rider]
---

# STAGED (image-side) — dev-readiness fills for `aDNA-Network/aDNA`

> **This is a staging note, not an applied change.** Per Refit **hard-constraint 5** (Distillery SR1 discipline),
> anything destined for `.adna/` or the public image is authored as a DE-LINKed staged artifact and ships **only**
> via `skill_template_release`. This file enumerates what the released image needs so a would-be contributor
> landing on `github.com/aDNA-Network/aDNA` (the clone-and-run image — the public first-contact repo) finds a
> complete pathway. It is a **candidate rider for `campaign_v8_9_release`** (fold at that campaign's P1, or ship
> as its own small release item); do **not** re-open the ratified v8.9 roadmap batch to add it.

## Why (the gap M6's audit found)

The dev vault (`aDNA-Network/aDNA.aDNA`) has a complete contributor pathway, and M6 filled its 3 defects
dev-side (CODE_OF_CONDUCT · issue templates · repo-name fix). **The public image is materially thinner** — and
the image is what an outside contributor actually clones first. Its `CONTRIBUTING.md` (shipped, identical to the
dev vault's) makes promises the image cannot keep:

- links `how/skills/skill_upstream_contribution.md` — **that skill file is absent from `.adna/how/skills/`**
  (the "Full protocol" link is dead in the image).
- links a `bug_report.md` issue template at `.../aDNA/issues/new?template=bug_report.md` — **no
  `.github/ISSUE_TEMPLATE/` exists in the image repo** (404).
- links `CODE_OF_CONDUCT.md` — **absent from the image** (as it was from the dev vault until M6).
- references the governance/community docs (contribution standards, community processes, roles) that explain the
  participation ladder — **none of `who/community/` and most of `who/governance/` were released into the image.**

## Ship-set (what the release must add to the image)

| # | Item | Source (dev-vault-authored at M6, ready to fold) | Closes |
|---|------|--------------------------------------------------|--------|
| 1 | `CODE_OF_CONDUCT.md` | `aDNA.aDNA/CODE_OF_CONDUCT.md` (Contributor Covenant v2.1) | the CONTRIBUTING + VISION dangling ref |
| 2 | `.github/ISSUE_TEMPLATE/{bug_report.md, change_proposal.md, config.yml}` | `aDNA.aDNA/.github/ISSUE_TEMPLATE/` | the CONTRIBUTING `template=bug_report.md` 404; gives contributors the change-proposal intake |
| 3 | `how/skills/skill_upstream_contribution.md` | `aDNA.aDNA/how/skills/skill_upstream_contribution.md` (repo-name fixed to `aDNA-Network/aDNA`) | the dead "Full protocol" link in the image's CONTRIBUTING |
| 4 | A README **Contributing** section | model on `aDNA.aDNA/README.md` §Contributing (Agent Contribution Mode + quests + VISION pointer) | the image README's near-silent contribution surface (only a badge today) |
| 5 | Minimal governance/community docs the ladder cites | `who/community/community_processes.md` + `community_roles.md` + `who/governance/governance_contribution_standards.md` (DE-LINK private wikilinks before folding) | the participation-ladder claims that dead-end in the image |

## Release cautions (carry into the folding mission)

- **DE-LINK before folding** (the v8.5 21-link near-miss): grep the FULL outbound link set of items 3 + 5 — they
  cite dev-vault-internal paths/wikilinks that must not ship. This is exactly the v8.9 roadmap item
  "release-process leak hardening" (`idea_upstream_dev_vault_name_leak_sweep`) in action.
- **Reporting contact** (`#needs-human`): `CODE_OF_CONDUCT.md` routes enforcement reports through GitHub and flags
  that a **dedicated confidential reporting address is an operator decision** — resolve (publish an address or
  confirm the GitHub route) at or before the release gate.
- **Repo-name canonical** = `aDNA-Network/aDNA`; `LatticeProtocol/Agentic-DNA` and (for *site*/image contributor
  links) `aDNA-Network/aDNA.aDNA` are dead patterns — the image's CONTRIBUTING already uses the canonical, keep it.

## Provenance

Staged at Refit M6 ([[mission_refit_6_dev_readiness]]); evidence base
[[dev_readiness_audit]]. Rides the successor release [[stub_campaign_v8_9_release]] /
[[campaign_v8_9_release]] as a candidate rider. Not applied in Operation Refit (no normative/image surface ships).
