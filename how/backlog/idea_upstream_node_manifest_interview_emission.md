---
type: backlog_idea
idea_class: upstream_contribution
from_vault: Home.aDNA
from_persona: hestia
created: 2026-07-06
status: proposed
target: skill_node_bootstrap_interview.md (+ the `.adna/` template release train)
origin: "ADR-015 §B3(1) (aDNALabs, accepted ⛩C2 2026-07-02) + Home ADR-006 (node_manifest v0 adopt-with-amendments, Hearthfire P1 2026-07-06)"
tags: [backlog, upstream, node_manifest, interview, bootstrap, adr_015, tier3, hearthfire, hestia]
---

# Upstream idea — the bootstrap interview additionally emits `node_manifest.yaml`

**Ask (Rosetta's file, her cadence):** extend `skill_node_bootstrap_interview.md` so the 19-question interview **additionally emits a machine-readable `what/inventory/node_manifest.{yaml,md}` pair** at bootstrap — the ADR-015 Tier-3 config-of-record (schema `adna-node-manifest/v0`; authoritative shape = **Home ADR-006**, `Home.aDNA/what/decisions/adr_006_node_manifest_v0_adoption.md`).

**Why upstream:** the interview is aDNA.aDNA's artifact, shipped via `skill_template_release` — Home rules the manifest's shape but cannot wire fork-time emission itself. Recon ground truth (Slipway M-S3): today's interview emits 8 surfaces, none machine-readable-for-composition.

**What the emission writes** (all sourced from answers the interview already collects + `identity_node.yaml`): `node:` (hostname/operator/machine_class/workspace_root/shape 0–3) · `profiles:` + `profiles_staged:` · `identity.primary_idp` (+ staged) · `domains: []` (node-front-door only — edge-published sites excluded) · `surfaces: []` · `services:` flags · `provenance: {emitted_by: interview, …}`. The md twin (D9 pair) carries the shape-ladder + field-class law — template text available verbatim from Home's ADR-006.

**Consumers waiting on it:** the Lighthouse installer (ADR-015 §B3.2) reads it to compose profiles; WebForge's `node_home` weaves it (§A8); Venus transmits it at Network join (horizon). Until this ships, new nodes emit manually (Home ADR-006 D4 path 3 — kinn_l1 is the first portable case).

**Sibling idea filed the same session:** `idea_upstream_state_frontmatter_phase_campaign_keys.md`.

## Disposition — Refit M5 vNext triage (2026-07-24) · **DEFER-WITH-TRIGGER** *(proposed; ratifies at G2/DP9)*

DEFER — **trigger: Home ratifies ADR-006 (node_manifest v0) + Hestia hands off the manifest shape.** Home rules the
manifest's shape; aDNA.aDNA can only wire fork-time emission once that shape is ratified (this was the v8.7 "held item 1
→ Hestia" thread). Not blocked on us; not a v8.9 blocker. When the trigger fires, it slots into a later governance batch
as a `skill_node_bootstrap_interview` extension (emit `node_manifest.{yaml,md}`). Owner: Hestia (shape) → Rosetta (fork-emit). Roadmap: [[vnext_roadmap]] §Deferred-with-trigger.
