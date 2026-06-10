---
type: spec
kind: ecosystem_spec
name: forge_ecosystem
created: 2026-05-20
updated: 2026-06-10
version: "0.1"
status: active
last_edited_by: agent_stanley
tags: [spec, ecosystem, forge, aDNA_pattern]
extraction_source: ~/aDNA/CLAUDE.md lines 161-176 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
---

# Forge Ecosystem

Authoritative reference for the **Forge.aDNA** aDNA pattern category. Workspace router (`~/aDNA/CLAUDE.md`) carries only a pointer to this spec.

## Definition

**Forges** are standalone aDNA projects that produce artifacts for other vaults. They follow a shared consumption pattern: consumer vaults create lightweight wrapper directories (`<forge_name>/`) with `federation_ref:` blocks pinning forge lattice versions, voice mappings, and optionally adapted reviewers. Forges are never embedded or merged into consumer vaults.

## Active Forges

| Forge | Persona | Produces | Maturity | Consumers |
|-------|---------|----------|----------|-----------|
| `SiteForge.aDNA` | — | Astro 6 websites | **Production** (v1.0, [GitHub](https://github.com/LatticeProtocol/SiteForge.aDNA)) | SS, CC, WGA |
| `ComfyForge.aDNA` | Vulcan | ComfyUI visual generation | **Phase 1** (~60%) | SS (planned) |
| `CanvasForge.aDNA` | Hermes | Decks + comics on canvas substrate (VR1-VR5, character invariance, print CMYK) | **Production** (v1.0, Phase 7 closed 2026-05-04) | SS (`presentationforge/` + `graphicnovelforge/`), CC (`presentationforge/`) |
| `Videos.aDNA` (display "Videos") | Iris | Multi-platform video (narrative + transcript-driven + III-validated; intermediate-artifact checkpoints + revision loops + platform multiplexing). Single-repo per ADR 000 Amendment 1 (code at `Videos.aDNA/videoforge/` — in-vault code-dir rename to `videos/` approved but pending its own mission; do not cite a `videos/` path yet). Renamed from `VideoForge.aDNA` 2026-06-10 (ADR 000 Amendment 2; org-migration wave). | **Phase 4 active** (Herb in plan-approval seat) | SS (production-validated), CC (placeholder) |
| `MoleculeForge.aDNA` | Franklin | Modular open-source molecular-search workflows + models + pipelines + configuration patterns (ComfyUI-analog for molecular AI; federation-native via Lattice Protocol compute-topology memoralization + FAIR + smart-contract + compliance). Persona-canonical-artifact: Photo 51 (evidence + method + reproducibility compressed in one visible output). | **Genesis Phase 0** (forked 2026-05-19; persona Franklin pinned at bootstrap by operator FA-pick; meta-planning mission queued for operator-driven deep-context-gathering before Phase-1 recon opens) | Day-1 plausible (sharpened at meta-planning): AutoimmuneBinder.aDNA (forthcoming), RareHarness.aDNA, WilhelmAI.aDNA |
| `SpeechForge.aDNA` | Robert Kennedy | Greene-methodology speech packages (8-stage pipeline: Raw Material → Authentic Core → Accordion → Four Languages → Instrument → Sixty Mirrors → Conversation → Forge; 3 human gates; rework discipline; Voice-Bible compliance ≥0.75). | **Genesis Phase 0 closed** (forked 2026-05-19 via LL.aDNA E1 cascading-genesis; v0.2.0 content extracted at C7; Phase-1 recon stubs seeded; Phase-1+ awaits SpeechForge operator gate) | SS (`speechforge/`, re-pinned 2026-05-19 at C8) |

## Canonical Spec

`SiteForge.aDNA/what/artifacts/sf_forge_pattern_spec.md` — the reference implementation of the standalone forge pattern. All forges follow this spec for consumer wrappers, federation, context grafting, and version policy.

## Cross-Forge Composition

A single consumer vault can use multiple forges independently. Each wrapper is self-contained. Forges do not coordinate with each other — the consumer vault is the integration point.

## Provenance

Extracted from `~/aDNA/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Forge Ecosystem (lines 161-176). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
