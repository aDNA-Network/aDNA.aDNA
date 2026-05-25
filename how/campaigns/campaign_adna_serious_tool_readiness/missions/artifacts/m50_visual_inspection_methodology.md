---
type: artifact
artifact_class: visual_inspection_methodology
created: 2026-05-25
updated: 2026-05-25
mission: mission_adna_str_p5_m50_p5_entry_planning
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.0
session: session_stanley_20260525T195508Z_v8_m50_s1
persona: rosetta
last_edited_by: agent_stanley
status: ratified
related_decadal_theme_set: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md
related_persona_bench: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md
gemini_integration: CanvasForge.aDNA/canvas_core/image_generation.py   # substrate-neutral ImageRequest Protocol; Imagen 4 Ultra adapter
iii_integration: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m37_modular_iii_design_spec.md   # ADR-025 + ADR-026 contracts; modular III primitives P3 + P6
ledger_observation_contract: aDNA.aDNA/what/decisions/adr_026_ledger_observation_shared_primitive.md
decadal_coord_contract: aDNA.aDNA/what/decisions/adr_025_iii_decadal_coordination.md
tags: [visual_inspection_methodology, m50, v8, p5, public_readiness, 5_question_q_and_a_protocol, gemini_imagen_4_ultra_integration, canvas_forge_image_generation_py_consumption, iii_modular_system_adr_025_026_integration, per_cycle_7_step_structure, iii_result_persistence_what_measurement_iii_results]
---

# M5.0 D5 — Visual Inspection Methodology

> Per-cycle methodology for the D11-D20 decadal cycles. Specifies the 5-question Q&A protocol, persona engagement, Gemini integration, III system integration, and per-cycle 7-step structure. Filed at M5.0 close 2026-05-25.

## §1 Methodology Overview

Each of the 100 cycles (D11-D20) executes a **7-step per-cycle structure** with:
- **3-5 personas drawn** from per-decadal allocation per D4 bench expansion design
- **5-question Q&A protocol** per persona (~5 min per persona; 15-25 min total Q&A per cycle)
- **Gemini Imagen 4 Ultra integration** for image generation/regeneration (when cycle involves visual asset creation)
- **III system integration** for cycle result persistence + cross-vault coord per ADR-025 + ADR-026 contracts
- **Playwright visual regression + accessibility validation** per cycle
- **Per-cycle binary commit** preferred; multi-file allowed if changes tightly coupled

**Cycle cadence**: 30-60 min per cycle × 100 cycles = 50-100 hours total execution time. At 2-4 sessions per decadal × 10 decadals = 20-40 sessions.

## §2 5-Question Q&A Protocol

Each persona answers 5 questions per cycle (~1 min per question = ~5 min per persona):

### Q1 — Visual Style

> *"What strikes you visually about this page? What's clear? What's confusing? How would you rate the color palette + spacing + visual hierarchy? Is the page polished or does it look amateurish?"*

**Primary dimensions assessed**: Visual Clarity + Delight + Cognitive Load

**Persona-specific framings**:
- Design Critic: focus on brand identity + visual rhythm + typography quality
- Visual Designer: focus on color theory + layout hierarchy + spacing
- Newcomer: focus on first-impression overwhelm/comfort
- Accessibility Auditor: focus on color contrast + visual focus indicators + text readability

### Q2 — Clarity

> *"Could you understand the core message of this page in under 10 seconds? Where did you get lost? What did you have to re-read to grasp? Where would a beginner stumble?"*

**Primary dimensions assessed**: Comprehension + Cognitive Load + Findability

**Persona-specific framings**:
- Educator: focus on pedagogical flow + scaffolding + assumption check
- Newcomer: focus on jargon density + assumed context
- Framework Docs Expert: focus on API reference clarity + tutorial-vs-reference distinction
- Content Strategist: focus on narrative arc + tone consistency

### Q3 — Conciseness

> *"Does this page contain content that doesn't belong? Which sections feel padded or redundant? What could you remove without losing meaning? Is every word earning its place?"*

**Primary dimensions assessed**: Conciseness + Cognitive Load

**Persona-specific framings**:
- Anti-Bloat Editor: focus on redundancy + word economy + ruthless cuts
- UX Writer: focus on microcopy + tone calibration + scan-affordance
- Indie Hacker: focus on "just tell me how to ship" filter
- Content Strategist: focus on narrative density + paragraph cohesion

### Q4 — Bloat (Anti-Bloat / Length Audit)

> *"Could this be 30% shorter without losing meaning? Where would you cut? Are sections too long? Does the page exceed your attention span? Is there obvious componentization opportunity?"*

**Primary dimensions assessed**: Conciseness + Cognitive Load + Visual Clarity

**Persona-specific framings**:
- Anti-Bloat Editor: focus on aggressive cuts + componentization + redundancy
- Solo Dev: focus on "just need the essentials" filter
- Indie Hacker: focus on "show me the code/example" filter
- Newcomer: focus on attention-span overflow

### Q5 — Explanation Quality

> *"What did you wish was explained better? Where do you need an example, diagram, or analogy? What concepts are introduced without sufficient scaffolding? Where would a diagram make this 10× clearer?"*

**Primary dimensions assessed**: Explanation Quality + Comprehension

**Persona-specific framings**:
- Educator: focus on pedagogical scaffolding + example quality + analogy use
- Infographic Specialist: focus on where a diagram would clarify text-heavy content
- Diagram Reviewer: focus on existing diagram quality + semantic precision + legibility
- Researcher: focus on spec-citation depth + rigor + accuracy

## §3 Per-Cycle 7-Step Structure

Each cycle follows this canonical structure (~30-60 min total):

### Step 1 — Capture State (3-5 min)

**Actions**:
1. Playwright screenshot of target page (current pre-change baseline) at 1280×800 desktop + 375×812 mobile
2. Inventory current images/assets touched (file list + sizes + last modified)
3. Note current line count (if applicable; `wc -l target_page.{astro,md,mdx}`)
4. Record cycle metadata: cycle_id (101+ for v8 P5), decadal (D11-D20), target_page, target_assets

**Outputs**: pre-change baseline screenshots + asset inventory + line count + cycle metadata

### Step 2 — Persona Q&A (15-25 min)

**Actions**:
1. Draw 3-5 personas from per-decadal allocation per D4 bench expansion design
2. Each persona answers the 5-question Q&A protocol (§2 above)
3. Record per-persona observations + per-dimension scores (10 dimensions × 0.00-5.00)

**Outputs**: persona Q&A transcript + per-persona-per-dimension scores

### Step 3 — Generate or Regenerate Images (5-10 min; only when cycle involves visual asset creation)

**Actions** (when cycle is image-gen scope):
1. Identify image generation need (from Q&A findings — e.g., "need infographic for lattice composition" or "OG card stale")
2. Compose `ImageRequest` per CanvasForge `canvas_core/image_generation.py` substrate-neutral Protocol:
   ```python
   from canvas_core.image_generation import ImageRequest, generate_image
   request = ImageRequest(
       prompt="...",
       aspect_ratio="16:9",  # or "1:1", "9:16", etc.
       style_hints=["aDNA-brand-identity", "pixel-art" if pixel_aesthetic else None],
       register="brand_visual",  # "diagram" | "infographic" | "icon" | "brand_visual"
       application="aDNA.aDNA-site-d{N}-cycle{NNN}",
       budget_resolved="imagen-4-ultra",
   )
   response = generate_image(request)  # invokes Gemini via SS_GEMINI_API_KEY from Keychain
   # response includes: image_path, cost_usd, vr_scores (verification scores), request_id
   ```
3. Image cost: $0.04/call at Imagen 4 Ultra
4. Auto-log to ADR-003 training corpus at `CanvasForge.aDNA/what/artifacts/image_gen_dataset/{YYYY-MM}/`

**Outputs**: generated image file(s) + cost tracking + corpus log entry

**API key access** (per recon §1 + §3):
- Primary: `SS_GEMINI_API_KEY` from macOS Keychain via `security find-generic-password -a "$USER" -s SS_GEMINI_API_KEY -w` (ACL grants in place; non-TTY safe)
- Fallback: `~/.zshrc` exports `SS_GEMINI_API_KEY` at shell startup
- Fallback: `op://Personal/Google AI Studio Image Generation` (1Password secure note; 1Password CLI required)
- Future: node credential broker per `node.aDNA/how/campaigns/campaign_node_credentials/` M06 close (post-campaign)

### Step 4 — Implement Changes (5-15 min)

**Actions**:
1. Apply code/content/asset changes to target page(s) based on Q&A findings + Step 3 image generation
2. Commit at end of cycle (single binary commit per cycle preferred; multi-file allowed if changes tightly coupled)
3. Commit message format:
   ```
   campaign_adna_serious_tool_readiness: v8 P5 D{N} cycle {NNN} — {decadal_theme} — {short_description}
   
   - Q&A finding: {key finding from Step 2}
   - Change: {brief change description}
   - Persona scores: {summary of dimension changes}
   - Image generated: {N} via Imagen 4 (cost ${X}) if applicable
   ```

**Outputs**: code/content/asset changes committed

### Step 5 — Re-Capture (3-5 min)

**Actions**:
1. Playwright screenshot of target page (post-change) at same breakpoints as Step 1
2. Visual diff against pre-change baseline (auto-generated by Playwright `toMatchSnapshot()`)
3. Note line count delta if applicable

**Outputs**: post-change screenshots + visual diff + line count delta

### Step 6 — Validate (5 min)

**Actions**:
1. Playwright tests pass: visual regression + accessibility (WCAG 2.1 AA) + responsive (no layout breaks at 375/768/1024/1280)
2. Persona scoring: 3-5 personas score the page on the 10 dimensions (post-change scores)
3. Compute per-dimension delta + cycle aggregate score

**Outputs**: Playwright validation status + persona post-change scores + per-dimension deltas

### Step 7 — Record III Result (2-5 min)

**Actions**:
1. Persist cycle result at `aDNA.aDNA/what/measurement/iii_results/{YYYY-MM}/cycle_{NNN}_{decadal}_{slug}.json`:
   ```json
   {
     "cycle_id": 101,
     "decadal": "D11",
     "decadal_theme": "Visual Identity v2 + Image Regen",
     "target_page": "site/src/pages/learn/what-is-adna.astro",
     "target_assets": ["site/public/images/og-learn.png"],
     "personas_engaged": ["Design Critic", "Visual Designer", "Newcomer", "Accessibility Auditor"],
     "pre_change_scores": {
       "Findability": 4.50,
       "Comprehension": 4.80,
       "...": "..."
     },
     "post_change_scores": {
       "Findability": 4.65,
       "Comprehension": 4.85,
       "...": "..."
     },
     "image_gen": {
       "count": 1,
       "cost_usd": 0.04,
       "request_ids": ["..."]
     },
     "playwright_status": "PASS",
     "commit_sha": "abc123...",
     "completed_at": "2026-MM-DDTHH:MM:SSZ"
   }
   ```
2. Update per-decadal cycle log (running aggregate for decadal AAR)
3. If cycle is cycle-10 of decadal (decadal close): trigger decadal AAR authoring (separate ~30-min activity)

**Outputs**: III result JSON persisted + per-decadal cycle log updated + decadal AAR triggered (cycle-10 only)

## §4 Gemini Integration Detail

### CanvasForge Substrate Consumption

aDNA.aDNA cycles consume `CanvasForge.aDNA/canvas_core/image_generation.py` (substrate-neutral `ImageRequest` Protocol; Imagen 4 Ultra adapter). The Protocol abstracts the Imagen 4 specifics so future provider swaps (Imagen 5, DALL-E 4, Stable Diffusion 4, etc.) don't require code changes at consumer side.

**Consumer pattern** (Python; runs in aDNA.aDNA execution context):
```python
import sys
sys.path.insert(0, "/Users/stanley/lattice/CanvasForge.aDNA")
from canvas_core.image_generation import ImageRequest, generate_image

# Cycle 101 example: OG card regen for learn section
request = ImageRequest(
    prompt="Open Graph card for aDNA Learn section: 'Learn aDNA — Foundations of agentic context graphs'. Style: aDNA brand identity (subdued earth tones + bold typography + minimal iconography). Aspect: 1200×630. Include subtle aDNA hexagonal pattern accent.",
    aspect_ratio="1.91:1",   # 1200×630 OG dimensions
    style_hints=["aDNA-brand-identity", "minimal-iconography", "earth-tones"],
    register="brand_visual",
    application="aDNA.aDNA-site-d11-cycle101-og-learn",
    budget_resolved="imagen-4-ultra",
)
response = generate_image(request)
# response.image_path → Use in cycle Step 4 implement
# response.cost_usd → Track against $50 budget
# response.request_id → Log to ADR-003 corpus
```

### Imagen 4 Ultra Cost + Budget

- **Per-call cost**: $0.04 USD
- **Total budget**: $50 USD prepaid
- **Estimated total v8 P5 spend**:
  - D11 (Visual Identity + Image Regen): ~20 images (6 OG + 4-6 hero + 6 icons + 2-4 diagram components) × $0.04 = $0.80
  - D13 (Infographic Generation): ~15 images (5-8 infographics + thumbnails) × $0.04 = $0.60
  - D18 (Visual Hierarchy + Typography v2): ~15 images (icons + callouts) × $0.04 = $0.60
  - D19 (Mobile + Responsive v2): ~30 responsive variants × $0.04 = $1.20 (if variants generated; may use existing image resize instead)
  - D20 (Performance + Hardening): minimal new image gen
  - **Total estimated**: ~$3.20 actual; **$46.80 buffer** under budget
- **Auto-logging**: every Imagen call logs to CanvasForge ADR-003 training corpus at `CanvasForge.aDNA/what/artifacts/image_gen_dataset/{YYYY-MM}/` (request_id + timestamp + register + prompt + VR scores + cost_usd + human_selected)

### Image Quality Verification

Each generated image is reviewed by:
1. **Automated**: VR scores (Visual Recognition) from Imagen API (e.g., text legibility + composition quality)
2. **Persona**: Cycle Q&A personas score the generated image on Visual Clarity + Delight + Explanation Quality (for infographics)
3. **Operator**: Final operator visual review at decadal AAR (cycle-10 batch)

## §5 III System Integration Detail

### ADR-025 III-Decadal Coordination

**Clause A (Distributed-but-coordinated cycle location)**:
- aDNA.aDNA hosts operator-side cycles for `persona_growth_v0` + `research_context_generation_v0` dimensions
- III.aDNA hosts framework-side cycles for `cross_vault_relationship_fidelity` + `vault_card_completeness` + `registry_freshness` dimensions
- v8 P5's D11-D20 cycles fall under aDNA.aDNA-operator-side per Clause A

**Clause B (Dimension definition ownership)**:
- Argus @ III.aDNA owns canonical dimension definitions
- T12 5-dimension schema (defined at M3.5 obj 6 T12 design spec) + v0 suffix for early-stage iteration
- v8 P5's 4 NEW secondary dimensions (Visual_Clarity + Cognitive_Load + Conciseness + Explanation_Quality) are **consumer-side namespace extensions** per Sub-clause B.2 (NOT supersession of canonical dimensions; additive extension)

**Clause C (Ack-debt protocol)**:
- Cycle results emit coord memos to III.aDNA when cross-vault relevance applies
- Ack-window: ≤ 24h non-urgent + ≤ 4h load-bearing
- Privacy-preserving aggregation per Sub-clause C.2 (only aggregated scores cross vault boundaries; raw persona Q&A stays in aDNA.aDNA)
- v8 P5 cycles default to **no cross-vault coord memo** (purely operator-side per Clause A); coord memo only if decadal AAR surfaces cross-vault learning (e.g., new doctrine for III.aDNA framework)

### ADR-026 Ledger-Observation-as-Shared-Primitive

**Clause A (Canonical poller location)**: III.aDNA-side canonical poller (4-mode advertisement: live / advisory / degraded / offline; pre-implementation offline baseline at this ratify)
- v8 P5 cycles **observe** III.aDNA poller mode when persisting results
- If III.aDNA poller offline: fall back to M3.6 P3 skeleton per Clause B

**Clause B (Consumer fallback pattern)**: M3.6 P3 ledger-observation skeleton activates as fallback
- v8 P5 cycles use M3.6 P3 fallback if III.aDNA poller unreachable
- Transparency flag `cycle_observation_source: fallback` in III result JSON (Step 7)

**Clause C (Federation transport)**: airlock cross-vault request contract OR direct file-read via federation channels
- v8 P5 cycles use **direct file-read** for III.aDNA dimension definitions (Clause B canonical)
- v8 P5 cycles use **airlock cross-vault request** if cross-vault coord memo emitted (Clause A of ADR-025 Clause C trigger)

### III Result Persistence

**Layout** (per modular III P6 contract):
```
aDNA.aDNA/what/measurement/iii_results/{YYYY-MM}/
├── cycle_101_d11_og_card_learn_regen.json
├── cycle_102_d11_og_card_how_regen.json
├── cycle_103_d11_hero_variant_learn.json
├── ...
├── cycle_110_d11_close_aar_seed.json
├── d11_decadal_aar_aggregate.json   # decadal close
├── cycle_111_d12_readme_streamline.json
├── ...
```

**Retention**: indefinite (per modular III P6 contract; no rotation policy at v8 P5)

**Projection rules** (per modular III P2 vault_card contract):
- vault_card score ← latest per-vault per-cycle JSONL aggregation
- HOME.md gallery ← computed from P1 contract
- v8 P5's aDNA.aDNA vault_card updates per D11-D20 close (decadal AAR feeds into vault_card scoring)

## §6 Per-Decadal AAR Cadence

Every 10 cycles produces a **decadal AAR** at:
```
aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d{N}_{slug}.md
```

**AAR shape** (inherits Rosetta D1-D10 AAR):

1. **Ranker scorecard** — 10 dimensions × 2 baselines (prior decadal + close) + delta per dimension
2. **Persona ranker matrix** — 3-5 per-decadal personas (per D4 allocation) × 10 dimensions + averages
3. **Cycle log summary** — 10 rows (one per cycle in decadal) with item descriptions + gate status + commit SHA + image-gen counts + cost
4. **Reviewer Lens Pass** (mandatory at D11/D14/D17/D20; every 3rd decadal + final):
   - Design Critic verdict (visual_clarity primary lens): grade A-F + 3-5 observations + 2-3 priority recommendations
   - Accessibility Auditor verdict (comprehension + cognitive_load): WCAG 2.1 AA compliance + 3-5 observations + recommendations
   - Content Strategist verdict (comprehension + findability): narrative arc + 3-5 observations + recommendations
   - Information Architect verdict (onboarding_scent): persona-journey + 3-5 observations + recommendations
   - Newcomer Stress-Tester verdict (cognitive_load): first-30-seconds + 3-5 observations + recommendations
   - **NEW visual personas verdicts at D11/D18** (Visual Designer + Infographic Specialist + Diagram Reviewer per allocation)
5. **Priority queue** — P1-P5 findings ranked by severity; seeded for next decadal
6. **What Worked / What Didn't / Finding / Change / Follow-up** — lightweight 5-line retrospective per project SO #5
7. **Image-gen summary** — total images generated this decadal + total cost USD + cumulative spend vs budget
8. **III result aggregate** — per-dimension decadal-close score (mean across 10 cycles) + per-persona decadal-close score (mean across cycles persona participated in)

**At D11/D14/D17/D20** (4 Reviewer Lens Pass decadals): AAR includes deeper Reviewer Lens Pass structure per §6.4 above.

**At D20 (final)**: AAR includes Phase 5 exit gate readiness assessment + P6 entry-gate criteria check.

## §7 Verification Per-Cycle

| Check | Method | Gate? |
|---|---|---|
| Playwright visual regression PASS | Playwright `toMatchSnapshot()` | YES (Step 6) |
| Playwright accessibility (WCAG 2.1 AA) | Playwright axe-core | YES (Step 6) |
| Playwright responsive (no layout breaks at 375/768/1024/1280) | Playwright multi-viewport | YES (Step 6) |
| Persona scoring complete (3-5 personas × 10 dimensions) | Manual record in III result JSON | YES (Step 7) |
| III result JSON persisted at `what/measurement/iii_results/{YYYY-MM}/` | File exists | YES (Step 7) |
| Cycle commit SHA recorded in III result JSON | grep commit_sha | YES (Step 7) |
| Image-gen cost auto-logged to CanvasForge corpus (if applicable) | File exists in `image_gen_dataset/{YYYY-MM}/` | YES if Step 3 fired |
| Decadal close cycle (cycle-10) triggers decadal AAR authoring | AAR file exists at decadal close | YES (cycle-10 only) |

## §8 Risks + Mitigations

| Risk | Likelihood | Severity | Mitigation |
|---|---|---|---|
| Gemini API key expires or rate limits | Low | Medium | Fallback to 1Password CLI; alternative: ComfyForge.aDNA dispatch path; alternative: HF Spaces |
| Image generation produces low-quality output (text legibility issues; off-brand) | Medium | Low | VR scores + persona review at Step 3; regenerate with prompt refinement if VR < 4.0 or persona Visual_Clarity < 3.5 |
| Persona Q&A fatigue (operator gets tired of structured Q&A) | High | Medium | Batch similar cycles in single session; allow persona-pair reuse across cycles in same decadal; pre-templated Q&A sheets per persona type |
| Playwright visual regression false positives (anti-aliasing differences) | Medium | Low | Configure `toMatchSnapshot()` with `maxDiffPixelRatio: 0.02` tolerance |
| III result schema drift from M3.7 design spec | Low | Medium | Validate JSON against schema at Step 7; fail-fast on schema mismatch |
| Cumulative image-gen cost exceeds $50 budget | Very Low | Low | Auto-tracking at CanvasForge corpus; budget alerts at 50% + 75% + 90% spend; estimated total spend $3-5 = 6-10% of budget |
| Cross-vault coord memo backpressure to III.aDNA (Argus) | Low | Low | v8 P5 cycles default to no outbound coord memo; only emit if decadal AAR surfaces cross-vault learning |

## Notes

- **Methodology preserves Rosetta D1-D10 cycle pattern verbatim** with additions: (a) Step 3 explicit Gemini integration; (b) Step 7 III result persistence per ADR-025+026; (c) 5-question Q&A protocol formalized (was ad-hoc in Rosetta); (d) 21-persona bench (was 5 + 5 specialist in Rosetta).
- **Decadal AAR inherits Rosetta D1-D10 AAR shape verbatim** with additions: (a) Image-gen summary (§6.7); (b) III result aggregate (§6.8); (c) Reviewer Lens Pass at D11/D14/D17/D20 (Rosetta had it at D4/D7/D10 — same cadence, shifted by D-numbering continuity).
- **Per-cycle time budget**: 30-60 min per cycle = comfortable single-day execution at 8-15 cycles/day = 7-12 working days for 100 cycles (within v8 P5 estimate).
- **Per-cycle image gen is optional**: only D11 + D13 + D18 + D19 cycles routinely involve image generation; D12 + D14 + D15 + D16 + D17 + D20 cycles primarily text/structure changes.

---

**Methodology status**: ratified at M5.0 close 2026-05-25. First execution at M3.5.5 D7d warm-up (next session; pre-validates Gemini pipeline). First decadal cycle at D11 (M5.3) cycle 101 (post-M5.1 + M5.2 close).
