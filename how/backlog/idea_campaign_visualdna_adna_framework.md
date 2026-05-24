---
type: backlog_campaign_seed
backlog_id: idea_campaign_visualdna_adna_framework
title: "VisualDNA.aDNA — Framework.aDNA for visual-DNA-per-entity standard ('any context graph becomes its own cartoon show')"
proposed_by: stanley
proposed_at: 2026-05-23
status: stub_vault_bootstrapped_awaiting_pilot_aar_then_activation
stub_vault_path: ~/lattice/VisualDNA.aDNA/  (lightweight stub bootstrapped 2026-05-23)
stub_vault_persona: Pygmalion
stub_vault_activation_trigger: CanvasForge.aDNA pilot S6 AAR close + Stanley election
priority: high
category: framework_adna_new_project
references_pilot: CanvasForge.aDNA/how/campaigns/campaign_canvasforge_v1_2/missions/mission_m_v1_2_f_visual_dna_pilot.md
references_pilot_consumer: ScienceStanley.aDNA/what/visual_dna/  (created during pilot)
re_merge_rationale: lattice-labs/who/coordination/coord_2026_04_16_forge_split.md
tags: [backlog, campaign_seed, framework_adna, visual_dna, character_dna, location_dna, object_dna, scene_template, cross_vault_pattern, canvas_as_cartoon, hermes_kin]
---

# Backlog campaign seed: VisualDNA.aDNA Framework.aDNA project

## What this is

A **planning seed for a future genesis-planning campaign** that would fork a new `VisualDNA.aDNA` project — a **Framework.aDNA** sibling to `III.aDNA` and `ContextCompass.aDNA`. The framework would standardize the **visual-DNA-per-entity pattern** across all `.aDNA` vaults.

This is NOT a chartered campaign yet — it's a seed that converts to a genesis-planning campaign at Stanley election (per v1.1 CR10 "future review-campaign analog" clause). When Stanley elects to spin up `VisualDNA.aDNA`, this seed becomes the input artifact to that planning campaign.

## Vision

**"Any context graph becomes its own cartoon show by adding a visual descriptive layer to its objects."**

Every meaningful entity in a context graph — character, location, object, scene template — can carry a `visual_dna` bundle:

```yaml
visual_dna:
  id: <entity_id>
  text_prompt: <canonical generation prompt for this entity>
  reference_image_set:
    portraits: [<paths>]
    poses: [<paths>]
    expressions: [<paths>]
    angle_variants: [<paths>]
  palette_anchors:
    portrait_mode: <hex palette block>
    cinematic_mode: <hex palette block>
  composition_templates:
    portrait: <template>
    cinematic: <template>
    custom: [<list>]
  invariants: [<list of canon string-match invariants>]
  federation_ref: VisualDNA.aDNA ~0.1
```

An agent working inside any consuming vault can **compose novel scenes** by mixing 2+ DNAs (character + location → working-shot; character + character → two-shot; character + object → activity-shot). The agent inherits visual consistency across all generations because each entity's DNA carries its own visual canon.

This turns the context graph itself into a **cartoon-show production substrate** — characters have their look-and-feel, locations have their atmosphere, objects have their style, and an agent composes them.

## Why now

The CanvasForge v1.2 sub-campaign `M-V1-2-F-VDP-01` (Visual-DNA pilot) is **proving the pattern in ScienceStanley.aDNA** during 2026-05-23+ sessions. Once that pilot closes with a working integration test (character + location DNA → novel scene with visual consistency), the pattern is empirically validated and ready for framework-ization.

## Project shape (provisional — refined by genesis planning)

| Field | Value |
|-------|-------|
| Project name | `VisualDNA.aDNA` |
| Family | **Framework.aDNA** (5th framework alongside III.aDNA + ContextCompass.aDNA + Spec frameworks) |
| Persona candidates | **Phidias** (sculptor; classical visual canon); **Polykleitos** (canon of human proportions); **Pygmalion** (sculptor whose statue came to life); **Daedalus** (already taken by Spacemacs) |
| Persona pick | TBD at genesis planning P0 — leading candidate: **Phidias** (visual canon authority) |
| Charter | Standardize visual-DNA-per-entity pattern; provide YAML contract + composition rules + reference impl + 5+ pre-built character/location/object templates + federation pattern |
| Day-1 consumers | ScienceStanley.aDNA (via pilot extension); CanvasForge.aDNA applications; any vault with characters/scenes; SiteForge hero illustrations; LP whitepaper character renders |
| Federation pattern | Consumer wrapper at `<vault>/visualdna/` with `federation_ref: VisualDNA.aDNA ~0.1` (mirrors III.aDNA + ContextCompass.aDNA wrapper pattern) |

## Spec dimensions (informed by the pilot)

1. **Entity type taxonomy**: `character`, `location`, `object`, `scene_template`, `style_atmosphere` (the last is a vault-wide aesthetic baseline; e.g., "ScienceStanley pixel-art metaverse style")
2. **Reference image categorization** (per entity): `portraits` (icon/avatar use), `poses` (action), `expressions` (emotion), `angle_variants` (3-quarter views), `establishing` (locations only), `detail` (objects only)
3. **Composition rules** (agent-facing):
   - 2-DNA mix: character + location → scene
   - 2-DNA mix: character + character → two-shot
   - 3-DNA mix: character + location + object → activity shot
   - 4+-DNA: stage scenes for comic panels
4. **Image conditioning approaches** (hybrid):
   - **Imagen Ultra text-only**: deterministic generation from canonical prompt + variant axis
   - **Gemini 2.5 Flash Image edit**: edit existing reference image with prompt instruction (preserves face)
   - **Multi-image composition**: future capability (when stack supports it; placeholder in v0.1 spec)
5. **Invariants validation**: per-entity string-match invariants (like CanvasForge's `invariants.json`) enforced at prompt-construction time
6. **Federation contract**: minor-bump backward-compatible; consumer wrappers pin to `~0.1`
7. **Discovery mechanism**: vault-level `visualdna/index.yaml` enumerates all entity DNAs; agents query this to compose scenes
8. **Wrapper template generator**: `skill_create_visualdna_wrapper.md` — like SiteForge's wrapper-creation skill

## Pre-genesis-planning checklist (UPDATED 2026-05-23)

**Update 2026-05-23**: Pilot scope expanded 3 → 6 sessions; stub vault bootstrapped at `~/lattice/VisualDNA.aDNA/` (persona Pygmalion); 5-consumer integration matrix documented.

Items that must be true before genesis planning opens:

- [x] **Stub vault bootstrapped** 2026-05-23 (lightweight; 7 files); persona = Pygmalion; campaign-planning mission stub at `VisualDNA.aDNA/how/campaigns/campaign_visualdna_genesis_planning/missions/mission_p0_meta_planning_stub.md` tagged `populate_after: CanvasForge pilot`
- [x] **First consumer bundle pre-landed** at `ScienceStanley.aDNA/what/visual_dna/characters/stanley/` (5 canonical references: anchor + vars 1-4)
- [ ] CanvasForge.aDNA `M-V1-2-F-VDP-01` pilot CLOSES (6 sessions; S1 schema v0.2 → S2 SS character validate → S3 location DNA → S4 ComfyForge LoRA → S5 VideoForge consumer → S6 social + metaverse + AAR)
- [ ] ScienceStanley.aDNA `what/visual_dna/` populated with: ≥1 character bundle (✓ stanley.yaml at S2 close); ≥1 location bundle (lab_interior at S3); LoRA refs (S4); social-content samples (S6)
- [ ] Pilot AAR captures: schema decisions (S1); composition rules (S3); LoRA-as-visual-DNA-component pattern (S4); VideoForge consumer pattern (S5); social + metaverse hookup (S6); 5-consumer integration matrix learnings
- [ ] Pilot S6 populates `mission_p0_meta_planning_stub.md` with AAR content
- [ ] Stanley elects activation → full `skill_project_fork.md` flow runs → stub vault becomes complete vault → genesis-planning campaign executes

## 5-consumer integration matrix (informed by pilot scope)

| Consumer | Validates at | Pattern |
|----------|-------------|---------|
| **Gemini** (via CanvasForge canonical) | Already validated (anchor + 4 vars 2026-05-23) | text-to-image (Imagen Ultra) + image-edit (Flash Image) consume `text_prompt` + `reference_image_set` |
| **ComfyForge LoRAs** | Pilot S4 | trains LoRA on `reference_image_set`; LoRA path → `lora_refs` field; downstream consumers opt into LoRA-augmented gen |
| **VideoForge (Iris)** | Pilot S5 | reads character DNA + `lora_refs` for character-consistent video frames |
| **Social content generator** | Pilot S6 | topic + visual_dna → auto-generated in-context character image |
| **Metaverse character spec** | Pilot S6 (doc) + future metaverse-side campaign | character DNA → 3D / avatar / pixel-art derivatives all canon-consistent |

## Cross-vault coord memos filed 2026-05-23

- ScienceStanley.aDNA — inbound visual_dna bundle pre-landing (✓)
- ComfyForge.aDNA — LoRA consumer pattern (✓)
- VideoForge.aDNA — video consumer pattern (✓)
- VisualDNA.aDNA — stub bootstrap notice (✓)

## Predecessor / contextual inputs

- `CanvasForge.aDNA/how/campaigns/campaign_canvasforge_v1_2/missions/mission_m_v1_2_f_visual_dna_pilot.md` — pilot mission
- `CanvasForge.aDNA/what/artifacts/style_registry/ss_character/optimization_v2/final_prompt.md` — v2 100-cycle final prompt (early-30s SS character; 12-persona; 2241 chars)
- `CanvasForge.aDNA/what/artifacts/style_registry/ss_character/references/reference_dna_2026_05_23_real_photos.md` — real-photo references + age-down rationale
- `III.aDNA/CLAUDE.md` + wrapper pattern — Framework.aDNA reference shape
- `ContextCompass.aDNA/CLAUDE.md` — second Framework.aDNA reference
- `aDNA.aDNA/what/specs/spec_framework_ecosystem.md` — Framework.aDNA spec to conform to

## Re-merge rationale

This backlog item is a cross-vault seed informed by CanvasForge.aDNA Pillar F work. The 2026-04-16 re-merge rationale at `lattice-labs/who/coordination/coord_2026_04_16_forge_split.md` underpins CanvasForge as the canvas-substrate; VisualDNA.aDNA extends that canvas-as-message identity into a per-entity visual-DNA standard. Citation maintained per CR7+SO7.

## Authority

Seeded 2026-05-23 by Stanley four-thread expansion request in CanvasForge.aDNA v1.2 Pillar F session. Becomes chartered when Stanley elects to fork `VisualDNA.aDNA` via `.adna/how/skills/skill_project_fork.md`.
