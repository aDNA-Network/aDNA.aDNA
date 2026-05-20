---
type: spec
kind: ecosystem_spec
name: platform_ecosystem
created: 2026-05-20
updated: 2026-05-20
version: "0.1"
status: active
last_edited_by: agent_stanley
tags: [spec, ecosystem, platform, aDNA_pattern]
extraction_source: ~/lattice/CLAUDE.md lines 178-190 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
---

# Platform Ecosystem

Authoritative reference for the **Platform.aDNA** aDNA pattern category. Workspace router (`~/lattice/CLAUDE.md`) carries only a pointer to this spec.

## Definition

**Platforms** are a separate aDNA category (new as of 2026-04-17 per `RareHarness.aDNA/what/decisions/adr_000_project_identity.md`). A Platform.aDNA project governs a **deployable software system** with accompanying domain knowledge, safety framework, and partner-deployment topology. Unlike forges, platforms produce a *running service* at partner institutions — not generated artifacts.

## Vault + Code Split

Each platform pairs a governance vault (`<Name>.aDNA/`) with a sibling code repo (peer to `latlab/`, `lattice-protocol/`). The vault owns design, safety, clinical context, deployment topology, partner profiles, ADRs; the code repo owns the runtime implementation. Coordinated PRs keep the two in sync.

**Variant**: VideoForge Amendment 1 (2026-05-12) introduces the **single-repo per VideoForge Amendment 1** pattern — code lives inside the vault as a `what/<platform>/` directory (code-as-WHAT-object), standalone-deployable. Adopted by `LatticeTerminal.aDNA` + `LatticeAgent.aDNA`.

## Active Platforms

| Platform | Persona | Runtime focus | Vault | Code repo | Maturity | Partners |
|----------|---------|---------------|-------|-----------|----------|----------|
| `RareHarness.aDNA` | Asclepius | Rare-disease clinical agentic runtime (model + tools + context + approval-gate composition + chat surface) | `RareHarness.aDNA/` | `rareharness/` | **P2 active** (MP2-CHAT + `campaign_rareharness_argus_loop` tracks; Stanley's L1 canonical clinician-MBP template; framework v0.2). See `RareHarness.aDNA/STATE.md` for mission queue + commit pins. | Wilhelm (anchor), KINN L1, UCLA DOM, WGA |
| `LatticeTerminal.aDNA` | Spock | Cross-OS **harness-agnostic** agentic terminal substrate (Ghostty + tmux + provider-generic agent stack + agent-orchestration sidebar + splash/home-agent launcher MC-LAUNCH); renamed from `terminal.aDNA` 2026-05-15; foundation for the in-house modular context harness with telemetry + A/B testing across Lattice nodes | `LatticeTerminal.aDNA/` (single-repo per VideoForge Amendment 1; **code-as-WHAT-object** `LatticeTerminal.aDNA/what/latticeterminal/` per ADR-005, standalone-deployable) | — | **Genesis planning** (M0.2/M0.3 closed; M0.4 MC-LAUNCH next; MC-VIS + MC-LAUNCH seeded) | Day-1: self-host. Future: any Lattice node, any partner harness deployment. |
| `LatticeAgent.aDNA` | Stanley | aDNA-native agentically-tunable telemetry-driven context harness; **default-partner provider** for harness-agnostic `LatticeTerminal.aDNA` (renamed from `terminal.aDNA` 2026-05-15; CC/OpenCode co-providers of the provider-generic PROVIDER-CONTRACT); co-developed/co-optimized; Lattice Network = A/B test fleet | `LatticeAgent.aDNA/` (single-repo; **code-as-WHAT-object** `what/latticeagent/`, standalone-deployable — ADR-001) | — | **Genesis complete; `campaign_latticeagent_cartograph` PLANNED** (9 phases / 39 missions; F7–F12 hardened 2026-05-17; awaiting human review) | Day-1: default-partner of LatticeTerminal. Future: any Lattice node |

## Canonical Spec (pending)

`RareHarness.aDNA/what/artifacts/rh_platform_pattern_spec.md` — authored MP0-2; promotes to workspace-canonical once a second platform emerges (likely at LatticeTerminal Phase-Architect close or LatticeAgent cartograph campaign close).

## Provenance

Extracted from `~/lattice/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Platform Ecosystem (lines 178-190). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
