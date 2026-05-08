# Campaign CLAUDE.md — aDNA v2 Infrastructure

This file governs agent behavior within `campaign_adna_v2_infrastructure`. The vault's
project-level CLAUDE.md is canonical; this file adds campaign-specific direction.

## Campaign master

- **Master file**: `campaign_adna_v2_infrastructure.md` (this directory)
- **Status**: planning → execution after M01
- **Vault context**: aDNA.aDNA — self-referential aDNA documentation vault (Operation Rosetta)
- **Predecessor campaigns**: campaign_rosetta (Phases 0-7 complete, Phase 8 queued separately)

## Operating direction

### Dual-audience discipline

Every deliverable from this campaign must pass the dual-audience test (Standing Order #1 of
aDNA.aDNA): technically precise for developers, genuinely clear for newcomers. This applies to
rewritten skills, new vault templates, and documentation.

### Self-reference mandatory

Changes to the `adna` repo affect ALL vaults. When drafting a fix or new pattern, verify that
the change is consistent with how aDNA.aDNA itself is organized. Self-reference is not optional
(Standing Order #2).

### Upstream-first mindset

Issues identified in specific vaults (Spacemacs, etc.) that trace to the aDNA template
should be fixed at the template level, not patched in place. This campaign is the vehicle for
those upstream fixes.

### Simplify discipline

When modifying any existing file — skill, template, runbook, or governance doc — apply the
`/simplify` discipline: remove redundancy, improve naming, eliminate dead references, tighten
prose. Do not add complexity. Do not extend scope beyond what the mission requires.

## Mission tracking

Missions live at `missions/mission_adna_infra_<phase>_<NN>_<slug>.md`.

## AAR discipline

Every mission ends with an AAR per Standing Order #5. AARs land at `missions/artifacts/`.
