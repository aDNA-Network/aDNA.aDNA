---
type: idea
status: proposed
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [idea, upstream, spec, platform_ecosystem, hygiene]
---

# Refresh `spec_platform_ecosystem.md` Active-Platforms table (stale)

## Idea

`what/specs/spec_platform_ecosystem.md` carries a stale **Active Platforms** table (v0.1 content, last data-refresh 2026-05-20). It still lists `RareHarness.aDNA`, `LatticeTerminal.aDNA`, `LatticeAgent.aDNA`, `Cmux.aDNA`, `RareHarnessNeo.aDNA` as active — all of which were renamed / archived / superseded / folded in the 2026-06 identity cascade (RareHarness→Harness, Cmux→Terminal, LatticeTerminal/LatticeAgent archived). The spec was extended to **v0.2** with the software/deployment-graph subtype (Operation Keystone P0, 2026-06-20) and the stale table flagged in place, but **not refactored** — out of scope under the Operation Production Tidy freeze.

## Why deferred, not done now

Refactoring the table touches routing-of-record for many vaults; it belongs to a deliberate hygiene pass aligned with Production Tidy, not folded into a paradigm-authoring mission. The authoritative platform routing already lives in the workspace router + each vault's `STATE.md`, so the stale table is documented-stale, not load-bearing.

## Next step

A focused refresh mission: rebuild the Active-Platforms table from current `STATE.md` ground truth; add the new software/deployment-graph cohort members (Bitwarden, Nextcloud, Caddy, …) with their `platform_subtype`. Coordinate with Production Tidy (Hestia) so the refresh and the router stay consistent. Companion: the `spec_framework_ecosystem.md` III consumer-wrapper count is likewise stale (claims 6; ~15 live) — same pass.
