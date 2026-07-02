---
type: backlog_idea
created: 2026-06-09
updated: 2026-07-02
status: accepted
priority: high
source: campaign_adna_network_audit (P1-S1 fix → pattern)
tags: [backlog, idea, upstream, adr_023, registry_generator, privacy, sanitizer]
last_edited_by: agent_rosetta
champollion_mission: M1.2
---

# Idea (upstream) — public-projection sanitizer in the ADR-023 registry generator

## Problem
The ADR-023 registry generator (`scripts/build_vaults_data.mjs`) projects vault facts from **Home.aDNA inventory** (local-by-default, Rule 4 — may carry sensitive node/partner/client identity) into the **public** `vaults.json` that renders on adna.network. The `note` field flowed through **verbatim**, so internal/private editorial prose reached public surfaces — most seriously a **named external client + their employer + a private repo** on the public CakeHealth vault page (plus campaign jargon, dates, credential/infra details, internal `NOTE:` annotations across ~18 vaults). The generator had **no boundary** between private inventory and public projection.

## Fix shipped (this instance)
P1-S1 added a `publicNote()` sanitizer to `build_vaults_data.mjs`: truncate at internal/private markers (campaign/phase/genesis/ADR/dates/credentials/`Private`/`NOTE:`), redact `for <Named person/org>` client clauses, drop sub-meaningful fragments. Result: 36 notes cleaned at the source, 0 residual leaks, fixed in the committed data + all three render sites (RegistryCard, vault-detail body, meta).

## Upstream proposal
This is a **framework-level** gap, not just an aDNA.aDNA one: any vault running the registry generator to publish a public site has the same private→public leak risk. Upstream the **public-projection boundary** into the standard's generator:
- A required sanitize/allowlist step for any inventory field projected to a public artifact (not just `note`).
- Prefer an **explicit public field** (a curated `tagline`) over sanitizing private prose — the sanitizer is a safety net, not the primary path.
- Document the private-by-default → public-projection contract (Rule 4 boundary) in the registry-generator spec.

## Disposition
File via `how/skills/skill_upstream_contribution.md` at the audit campaign's **P2** (or sooner if the operator approves). Pattern owner: the ADR-023 registry generator. Related: [[project_adnalabs_brand_pivot]] (aDNA.aDNA = the ADR-023 generator), Home.aDNA local-by-default (Rule 4).


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M1.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).
