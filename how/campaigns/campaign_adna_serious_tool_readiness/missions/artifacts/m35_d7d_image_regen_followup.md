---
type: deferred_sub_task
sub_task_id: m35_d7d_image_regen_followup
parent_mission: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
parent_session_deferred_from: session_stanley_20260525T022725Z_v8_m35_s2b
campaign: campaign_adna_serious_tool_readiness
created: 2026-05-25
updated: 2026-05-25
status: deferred
last_edited_by: agent_stanley
defer_reason: auth_blocker_imagen_4_paid_plan_required_and_gcloud_tokens_stale
defer_decided_at: 2026-05-25T~04:00Z
defer_authority: operator_stanley_via_askuserquestion_2026_05_25_post_phase_4
plan_anticipated_at: please-read-the-claude-md-swift-bentley_md_mid_checkpoint_trigger_phase_5_defer_clause
target_vault_count: 31
target_directory: /Users/stanley/lattice/node.aDNA/who/assets/vault_cards/
tags: [deferred_sub_task, m35_d7d, image_regen, imagen_4_ultra, vertex_ai_paid_plan_required, gcloud_auth_login_required, gemini_api_key_free_tier_quota_zero, hf_spaces_alternative, comfyforge_dispatch_alternative, twenty_six_archived_predecessor_attempts_at_pre_m20_directories, consistent_prompt_template, hestia_lattice_hearth_aesthetic_anchor, pixel_art_16_9_dna_helix_band, scope_expansion_d7d_per_operator_askuserquestion_2026_05_25_post_s2a, defer_per_plan_mid_checkpoint_trigger, rosetta]
---

# Deferred Sub-Task — M3.5 D7d Image Regen (31 vault_cards via Imagen 4)

## Status

**DEFERRED** at S2b mid-Phase-5 entry 2026-05-25T~04:00Z per operator AskUserQuestion. Authority: operator_stanley. Trigger: auth blocker on the chosen Imagen 4 mechanism (gcloud tokens stale + Gemini API key free-tier quota=0). The plan (`please-read-the-claude-md-swift-bentley.md` Phase 5 mid-checkpoint trigger) explicitly anticipated this scenario — *"defer image-gen to S2c or a parallel out-of-band sub-task before S3. Text+structure layer is the value-bearing deliverable; images are visual polish that degrade gracefully without (existing onerror=display:none fallback)"*. Defer-trigger fires; D7d carves out of S2b into this follow-up sub-task; M3.5 main mission shape is preserved (S1 + S2/S2a + S2b + S3 stays 4-session canonical).

## Defer rationale

At Phase 5 entry, three Imagen 4 access paths were probed and all returned access blockers:

1. **Vertex AI Imagen 4 (preferred path per operator AskUserQuestion 2026-05-25 = "Google Imagen 4 via Vertex AI / Gemini API direct call")**: `gcloud auth print-access-token` succeeded but `gcloud projects list` returned `invalid_grant: Bad Request` for both authenticated accounts (`bishop.stanley@mayo.edu` active; `stanley@quantumbiology.org` alt) → tokens stale; needs operator-side `gcloud auth login` interactive re-auth
2. **Gemini API direct (`generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=$GEMINI_API_KEY`)**: returned `Quota exceeded for metric: generate_content_free_tier_requests, limit: 0` for all available image models (`imagen-4.0-generate-001`, `imagen-4.0-ultra-generate-001`, `imagen-4.0-fast-generate-001`, `gemini-2.5-flash-image`, `gemini-3-pro-image-preview`, `gemini-3.1-flash-image-preview`) → free tier; needs paid-plan upgrade
3. **Gemini 2.5 Flash Image + Gemini 3 Pro Image preview**: same RESOURCE_EXHAUSTED with `free_tier_requests` limit=0

Phase 4 (populate-apply pass) is COMPLETE — 31 vault_cards landed at v0.2 schema; HOME.md Gallery section patched; vault_gallery.base landed; Astro `/vaults/` registry surface builds clean (150 pages including 31 vault detail pages + index + graph). The text + structure layer ships at S2b close; vault_card .jpg references in HOME.md gallery degrade gracefully via existing `onerror="this.style.display='none'"` fallback. Defer is the conservative move.

## Sub-task scope

When the operator unblocks image-gen access (one of the 4 paths below), this sub-task executes the **31-vault full regen with consistent prompt template** per the operator's S2a-close AskUserQuestion 2026-05-25 scope expansion. Sub-task does NOT reopen M3.5 main mission shape — it runs as a parallel out-of-band sub-task between S2b close and S3 close, OR as an M3.5.5 interstitial mission post-S3, OR absorbed into a later mission (e.g., M3.7 modular III for Obsidian) depending on operator preference.

Once images land, the only ripple effects are: visual review (operator-side); optional `vault_card` frontmatter `img_path` value confirmation (auto if regen targets stable `who/assets/vault_cards/{vault_slug}.jpg` paths); no Astro rebuild required (vault_cards' `img_path:` field already projected through `build_vaults_data.mjs`).

## Resolution paths (4 documented; operator picks)

### Path A — Vertex AI Imagen 4 Ultra (PREFERRED per operator's original AskUserQuestion)

1. Operator runs `gcloud auth login` interactively to refresh OAuth tokens for `bishop.stanley@mayo.edu` OR `stanley@quantumbiology.org`. If using Claude Code REPL session, the `!` prefix runs interactive: `! gcloud auth login`
2. Operator confirms the active project has Vertex AI API enabled: `gcloud services list --enabled --project=$PROJECT | grep aiplatform` (current project at last probe = `ml-fpt-cpl-hpc-uhm-p-9047`)
3. If enabled, sub-task runs `curl -X POST https://us-central1-aiplatform.googleapis.com/v1/projects/$PROJECT/locations/us-central1/publishers/google/models/imagen-4.0-ultra-generate-001:predict` with `Authorization: Bearer $(gcloud auth print-access-token)` for each of the 31 vaults
4. If Vertex AI API not enabled for that project, operator runs `gcloud services enable aiplatform.googleapis.com --project=$PROJECT`; bill applies per generation

### Path B — Gemini API paid plan upgrade

1. Operator upgrades the API key associated with `$GEMINI_API_KEY` to a paid plan at https://ai.dev/projects
2. Sub-task runs `curl -X POST https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-ultra-generate-001:predict?key=$GEMINI_API_KEY` for each of the 31 vaults; cost per generation per the Gemini API pricing page

### Path C — Hugging Face Space (alternative; not "best Google" but workable)

1. Sub-task uses `mcp__claude_ai_Hugging_Face__dynamic_space` (already authenticated as ScienceStanley) to invoke an Imagen-equivalent or high-quality Stable Diffusion / Flux variant Space
2. Quality may differ from native Imagen 4 — operator pre-confirms via 1-2 test generations before bulk run
3. No GCP creds + no paid-plan required; rate limits apply per HF Space

### Path D — ComfyForge.aDNA dispatch (production-grade existing pipeline)

1. Coord memo `who/coordination/coord_2026_05_25_m35_d7d_image_regen_dispatch_comfyforge.md` (NEW) dispatches to Hermes (CanvasForge persona)
2. ComfyForge.aDNA picks up dispatch + runs its existing Imagen 4 production-grade pipeline (already wired per workspace CLAUDE.md `CanvasForge PresentationBuilder + dual text/mermaid + Imagen 4 per slide + VR1-VR5 gates`)
3. Output 31 JPGs delivered back to `node.aDNA/who/assets/vault_cards/`; operator reviews visually

## Prompt template (consistent across all 31 vaults)

The visual style anchor extracted at S2b Phase 5 entry from 3 existing reference JPGs (`node.aDNA.jpg`, `Spacemacs.aDNA.jpg`, `LAVentureGraph.aDNA.jpg`) is **Hestia's Lattice-Hearth aesthetic** — 16:9 pixel-art cozy scene with DNA-helix decorative band at top, orange-yellow + cyan-purple electric palette, dim ambient warm lighting, per-vault thematic room/workshop, glowing UI panel at lower-right showing vault name.

```
16:9 pixel-art cozy scene representing {vault_display_name}, themed around {persona_archetype}'s domain:
{persona_visual_anchor}.
Lattice aesthetic:
- DNA-helix decorative band at top edge (cyan-purple-magenta neon glow),
- warm ambient palette (orange-yellow lamp/hearth light + electric blue-purple-cyan UI panels),
- single coherent scene, pixel-art illustration style,
- detailed glowing UI panel at lower-right showing the text "{vault_slug}" as label,
- 1-2 small mood objects (e.g., sleeping cat, lantern, scroll, terminal).
No additional text or logos. No watermark.
```

### Per-persona visual anchor table

| Vault | Persona archetype | Visual anchor |
|---|---|---|
| aDNA.aDNA | Rosetta (decoder, multi-script teacher) | A scholar's study with the Rosetta Stone, scrolls in three scripts (hieroglyphic, demotic, Greek), a quill on parchment |
| III.aDNA | Argus (many-eyed observer) | A watcher's room with many monitoring screens, cosmic observatory, all-seeing-eye motif faintly glowing |
| node.aDNA | Hestia (hearth-keeper) | A cozy hearth with crackling fire, sleeping cat, terminal showing inventory (REUSE existing aesthetic verbatim — this is the established anchor) |
| LatticeNetwork.aDNA | Venus (sky-cartographer) | A celestial cartographer's observatory with a network constellation map projected on the wall, node-graph in the sky |
| LatticeLabs.aDNA | Berthier (chief of staff) | A campaign-staff war-room with maps + dispatch tables + a plumed marshal's hat on a stand |
| LatticeAgent.aDNA | Stanley (systems-design agent) | A systems-design lab with multi-monitor harness diagrams + a comfortable thinking chair |
| LatticeTerminal.aDNA | Spock (logical terminal) | A starship-bridge terminal with logical workstations, mission-control panels, single-pointed-ear silhouette ornament |
| CanvasForge.aDNA | Hermes (messenger) | A messenger's workshop with canvases + wax tablets + winged-sandal motif + dual-script slide presentations |
| SiteForge.aDNA | (no persona; site-builder) | A web-architect's studio with Astro-flag banner + component-tree diagrams |
| VideoForge.aDNA | Iris (rainbow messenger) | A film studio with multi-platform video monitors + rainbow color-grading panels |
| MoleculeForge.aDNA | Franklin (Rosalind Franklin) | A molecular biology lab with X-ray diffraction Photo 51 framed on the wall + microscope + DNA helix model |
| RareHarness.aDNA | Asclepius (divine healer) | A clinician's room with rod of Asclepius + medical scrolls + gentle healing atmosphere |
| WilhelmAI.aDNA | Hygieia (health goddess) | A healing-arts sanctum with snake-and-bowl + medicinal plants + four-pillar shrine |
| LAVentureGraph.aDNA | (Cartographer) | (REUSE existing aesthetic — LA map on wall + venture sticky-notes — this is the established anchor) |
| ContextCompass.aDNA | Ariadne (thread-keeper of labyrinth) | A labyrinth-mapper's chamber with thread of glowing yarn winding through corridors + compass rose |
| Spacemacs.aDNA | Daedalus (master craftsman) | A craftsman's workshop with labyrinth blueprints + wings of feather-and-wax + Spacemacs editor on screen (REUSE existing aesthetic) |
| TappInterface.aDNA | Mentor (Odysseus's advisor) | An advisor's hall with Odysseus-era throne + scrolls of strategy + dispatched-courier altar |
| RemoteControl.aDNA | Talos (bronze automaton) | An automaton's forge with bronze-metallic robot + glowing ichor vein + control-panel pedestal |
| SpeechForge.aDNA | Robert Kennedy (Greene-method) | A speech-writer's desk with podium + notepad of speeches + accordion of ideas + microphone |
| ComfyForge.aDNA | (no persona) | A visual-generation studio with ComfyUI node-graph on screen + paint-brush + LoRA training dials |
| TaskForge.aDNA | Berthier (logistics) | A coordination war-room with claim-lease ledger + task-board kanban |
| VAASLattice.aDNA | (no persona) | A verification chamber with cross-checking mirrors + truth-table panels |
| ContextCommons.aDNA | (no persona) | A community plaza with shared notebooks + literacy-circle seating |
| RareArchive.aDNA | Mnemosyne (memory) | A memory archive with stacks of glowing scrolls + river of recollection |
| ScienceStanley.aDNA | (Science Stanley) | A brand-content studio with podcast mic + lab coat + science-stanley signage |
| wga.aDNA | (no persona; WGA) | A genomics academy with double-helix banner + classroom-symphony seating |
| CakeHealth.aDNA | Berthier (Operation CAKE) | A clinical-data war-room with patient-cohort dashboards + cake icon |
| SuperLeague.aDNA | (no persona) | A sports-league command center with team-roster panels + trophy |
| LPWhitepaper.aDNA | (no persona) | A scholar's desk with LaTeX document on screen + III review marginalia |
| zeta.aDNA | (no persona) | A research workspace with abstract zeta-symbol motif |
| ComicForge.aDNA (superseded) | (none) | SKIP — superseded; existing JPG stays |

## Execution checklist (when unblocker resolves)

1. **Auth confirmed** — Path A or B working (paid plan / refreshed tokens / API enabled) OR Path C/D mechanism ready
2. **Archive existing 7 JPGs** — `mkdir -p node.aDNA/who/assets/vault_cards/_pre_m35_s2b/ && mv node.aDNA/who/assets/vault_cards/{ContextCompass.aDNA.jpg,LatticeLabs.aDNA.jpg,LAVentureGraph.aDNA.jpg,node.aDNA.jpg,RemoteControl.aDNA.jpg,Spacemacs.aDNA.jpg,SpeechForge.aDNA.jpg} node.aDNA/who/assets/vault_cards/_pre_m35_s2b/` (preserves provenance per Standing Order #6)
3. **Generate 31 JPGs** — loop over vault_cards; one Imagen 4 call per vault; 16:9 aspect ratio; ~1024px wide; per-vault prompt from the table above + the consistent template
4. **Write JPGs** — to `node.aDNA/who/assets/vault_cards/{vault_slug}.jpg` (uses `vault_slug` like `aDNA.aDNA` not lowercase)
5. **Verification** — `ls node.aDNA/who/assets/vault_cards/*.jpg | wc -l` returns 31; HOME.md gallery render (Bases tier) shows all 31 cards with imagery; `ls node.aDNA/who/assets/vault_cards/_pre_m35_s2b/` shows the 7 archived predecessors
6. **Operator visual review** — `verification_surface: operator` per ADR-014 Clause C; operator visually inspects the regen pass for style consistency + persona accuracy
7. **Commit** — single binary commit isolated for review: `git -C node.aDNA add who/assets/vault_cards/ && git -C node.aDNA commit -m "M3.5 D7d image regen — 31 vault_card images via Imagen 4 (per ADR-023 consumer freshness); pre-regen 7 archived to _pre_m35_s2b/"`. Then `git -C aDNA.aDNA add who/coordination/coord_*.md` if dispatch (Path D) used.

## Acceptance criteria

- All 31 JPG files present at `node.aDNA/who/assets/vault_cards/`
- 7 pre-regen JPGs archived at `node.aDNA/who/assets/vault_cards/_pre_m35_s2b/`
- Visual style consistent (operator-judged) across all 31
- HOME.md gallery render (Bases tier) shows all 31 cards with imagery in Obsidian
- Docs-site `/vaults/` index renders without missing-image errors (existing `onerror=display:none` fallback applies for any failed gen)

## Notes

- This sub-task does NOT reopen M3.5 main mission shape — it is a parallel out-of-band sub-task that can run BEFORE M3.5 S3 (S3 close cascade still fires) OR as M3.5.5 interstitial mission post-S3 OR absorbed into a later mission like M3.7 — operator choice
- The existing archive directories `_m20_attempts/`, `_pre_m20/`, `_pre_m20_v1/` at `node.aDNA/who/assets/vault_cards/` document prior image-gen iteration history; D7d adds `_pre_m35_s2b/` as the 4th archived layer
- ADR-023 Clause C `last_synced:` + `source_inventory_sha:` fields on vault_card frontmatter remain authoritative; image refresh does not affect the text projection contract
- Per `verification_surface: operator` declaration in M3.5 mission frontmatter, the visual review is operator-side qualitative; agent-side smoke is limited to file-count + path-resolution checks

## Cross-references

- [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent mission (Obj 9 populate-apply pass; D7d image-gen was scope-expansion at operator AskUserQuestion 2026-05-25 post-S2a-close)
- [[../../../sessions/active/session_stanley_20260525T022725Z_v8_m35_s2b.md|S2b session file]] — defer decided at this session
- [[m35_obj3_t9_design_spec.md|T9 design spec]] — Bases gallery render references vault_card img paths
- [[m35_obj4_t10_design_spec.md|T10 design spec]] — vault_card schema includes `img_path:` field
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023 (draft)]] — vault_card freshness semantics relate to but don't gate image-gen
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — `verification_surface: operator` declaration; image visual review is operator-side
- `/Users/stanley/lattice/node.aDNA/who/assets/vault_cards/` — target directory
- `/Users/stanley/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical vault list (31)
- Plan: `/Users/stanley/.claude/plans/please-read-the-claude-md-swift-bentley.md` Phase 5 mid-checkpoint defer-trigger
