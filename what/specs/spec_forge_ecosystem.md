---
type: spec
kind: ecosystem_spec
name: forge_ecosystem
created: 2026-05-20
updated: 2026-06-30
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

**Forges** are standalone aDNA projects that produce artifacts for other vaults. They follow a shared consumption pattern: consumer vaults create lightweight wrapper directories (`how/federation/<forge_name>/`) with `federation_ref:` blocks pinning forge lattice versions, voice mappings, and optionally adapted reviewers. Forges are never embedded or merged into consumer vaults.

> **Wrapper location (pinned — [[../decisions/adr_045_wrapper_placement_in_triad|ADR-045]]):** a consumer's forge wrapper lives at `<consumer>.aDNA/how/federation/<forge_name>/`, not at graph root — it is an operation the consumer *invokes*, so it belongs under `how/`. ("Federation" here = the `federation_ref` consumer-wrapper layer; distinct from network/node federation, owned by `Network.aDNA` / Venus.)

> **Umbrella:** a Forge is the *build-with → produce* face of the [[pattern_software_element_context_graph|software-element context graph]] lens ([[../decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]) — software exposed as a context graph that consumers reach via a `how/federation/<forge>/` wrapper + `federation_ref`, composed alongside other software graphs (a site pulls a Forge *and* a Framework).

## Active Forges

| Forge | Persona | Produces | Maturity | Consumers |
|-------|---------|----------|----------|-----------|
| `Astro.aDNA` | — | Astro 6 websites | **Production** (v1.0, [GitHub](https://github.com/LatticeProtocol/SiteForge.aDNA) — repo unchanged) | SS, CC, WGA |
| `ComfyUI.aDNA` | Vulcan | ComfyUI visual generation | **Phase 1** (~60%) | SS (planned) |
| ~~`CanvasForge.aDNA`~~ | Hermes→Mondrian | Decks + comics on canvas substrate (VR1-VR5, character invariance, print CMYK) | **MERGED → `Canvas.aDNA`** (PT pt09, 2026-06-17 — production absorbed by the standard-bearer; reverses E3.4; Hermes merged into Mondrian; code + consumer wrappers relocate/refederate at PT P5) | SS (`presentationforge/` + `graphicnovelforge/`), CC (`presentationforge/`) — refederate to Canvas at P5 |
| `Videos.aDNA` (display "Videos") | Iris | Multi-platform video (narrative + transcript-driven + III-validated; intermediate-artifact checkpoints + revision loops + platform multiplexing). Single-repo per ADR 000 Amendment 1 (code at `Videos.aDNA/videoforge/` — in-vault code-dir rename to `videos/` approved but pending its own mission; do not cite a `videos/` path yet). Renamed from `VideoForge.aDNA` 2026-06-10 (ADR 000 Amendment 2; org-migration wave). | **Phase 4 active** (Herb in plan-approval seat) | SS (production-validated), CC (placeholder) |
| `Molecules.aDNA` | Franklin | Modular open-source molecular-search workflows + models + pipelines + configuration patterns (ComfyUI-analog for molecular AI; federation-native via Lattice Protocol compute-topology memoralization + FAIR + smart-contract + compliance). Persona-canonical-artifact: Photo 51 (evidence + method + reproducibility compressed in one visible output). | **Genesis Phase 0** (forked 2026-05-19; persona Franklin pinned at bootstrap by operator FA-pick; meta-planning mission queued for operator-driven deep-context-gathering before Phase-1 recon opens) | Day-1 plausible (sharpened at meta-planning): AutoimmuneBinder.aDNA (forthcoming), RareHarness.aDNA, WilhelmAI.aDNA |
| `Oration.aDNA` | Robert Kennedy | Greene-methodology speech packages (8-stage pipeline: Raw Material → Authentic Core → Accordion → Four Languages → Instrument → Sixty Mirrors → Conversation → Forge; 3 human gates; rework discipline; Voice-Bible compliance ≥0.75). | **Genesis Phase 0 closed** (forked 2026-05-19 via LL.aDNA E1 cascading-genesis; v0.2.0 content extracted at C7; Phase-1 recon stubs seeded; Phase-1+ awaits SpeechForge operator gate) | SS (`speechforge/`, re-pinned 2026-05-19 at C8) |

> **Rename wave (2026-06-15, PT pt05–pt07; `VideoForge→Videos` landed 2026-06-10):** display names updated above — `SiteForge→Astro`, `ComfyForge→ComfyUI`, `MoleculeForge→Molecules`, `SpeechForge→Oration`. Back-compat symlinks active; **GitHub remotes unchanged** (e.g. `LatticeProtocol/SiteForge.aDNA`). Per-vault maturity/persona/consumer detail lives in each vault's own `STATE.md`.

## Canonical Spec

`Astro.aDNA/what/artifacts/sf_forge_pattern_spec.md` — the reference implementation of the standalone forge pattern. All forges follow this spec for consumer wrappers, federation, context grafting, and version policy.

## Cross-Forge Composition

A single consumer vault can use multiple forges independently. Each wrapper is self-contained. Forges do not coordinate with each other — the consumer vault is the integration point.

## Provenance

Extracted from `~/aDNA/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Forge Ecosystem (lines 161-176). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
