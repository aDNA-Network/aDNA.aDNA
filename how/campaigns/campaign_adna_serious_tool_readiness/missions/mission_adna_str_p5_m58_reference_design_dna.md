---
type: mission
mission_id: mission_adna_str_p5_m58_reference_design_dna
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.8
slug: reference_design_dna
created: 2026-06-03
updated: 2026-06-03
opens_at: 2026-06-03
opened_session: session_stanley_20260604T002544Z_v8_m57_m58_foundation
closed_at: 2026-06-03
closed_session: session_stanley_20260604T002544Z_v8_m57_m58_foundation
estimated_sessions: 1   # ran inside the M5.7/M5.8 foundation session
actual_sessions: 1
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: research   # evidence-gathering + synthesis; no executable site code
verification_surface: agent   # parse/section/cross-reference + provenance checks; no build artifact
token_budget_estimated: "60-100 kT (10 WebFetch inspections + NN/g + synthesis + doctrine + 2 skills authoring)"
token_budget_actual: "~70-90 kT (within band)"
prerequisite_missions:
  - mission_adna_str_p5_m51_research_oss_visual   # research-class precedent (8 OSS dossiers + cross-target synthesis)
sibling_mission: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub   # M5.8 feeds M5.7's O3 IA + O4 exit gate
tags: [mission, m5_8, v8, p5, research, reference_inspection, design_dna, front_page_doctrine, ecosystem_site, design_foundation]
status: completed   # was 'active' (dangling); flipped 2026-07-01 at the STR resume-reconciliation gate — mission was functionally closed 2026-06-03 (closed_at + O1-O4 all ✅ + Lightweight AAR present), the status field just never flipped
closeout_note: "Dangling-done cleanup — status correction only (no new work). All objectives ✅ and closed_at:2026-06-03 predate this flip. Ref: missions/artifacts/str_resume_reconciliation_ledger.md"
---

# Mission M5.8 — Reference Inspection & Design-DNA Doctrine

> **Research-class foundation mission** under the operator-approved "charter + design foundation" push (plan: `please-read-the-claude-md-iterative-pebble.md`). Runs concurrently with M5.7 and **feeds M5.7's O3 (IA) + O4 (exit gate)**. Grounds the ecosystem-site re-scope in *real reference inspection + research-backed front-page discipline*, per the operator's explicit ask ("actually inspect [exemplars]... how much is too much for the front page? what is good process/guide?").

## Mission identity

- **Class:** research (evidence-gathering + synthesis; **no `site/` code**).
- **Trigger:** operator vision at M5.7 open — evolve aDNA.network into an Agentic Context Democracy ecosystem site; named **Hermes (Nous Research)** as the tonal exemplar.
- **Precedent:** M5.1 (research-class; 8 OSS dossiers + cross-target synthesis; `skill_subagent_dispatch` graduated). M5.8 is a tighter, design-focused analog.

## Objectives

1. **O1 — Curate + inspect the reference set.** ~10 sites across the tonal (sleek↔revolutionary) × functional (docs/registry/community/movement/protocol/product) axes. One per-site artifact each. **AC:** ≥6 artifacts with Tier-A countable fields populated; both tonal poles + functional spread covered. ✅ (10 inspected.)
2. **O2 — Synthesize → front-page design-DNA doctrine.** Above-fold law, section budget, density bands, sleek↔revolutionary dial, motion budget, "how much is too much" decision table, provenance appendix, worked example. **AC:** every numeric rule cites a reference site +/or NN/g finding. ✅
3. **O3 — Author the method skill.** `skill_reference_inspection.md` (repeatable curate→inspect→synthesize, incl. the operator-screenshot seam). **AC:** runnable steps + gates. ✅
4. **O4 — Author the pipeline skill.** `skill_site_design_pipeline.md` (8-stage loop; Stages 5–8 = the existing III cycle + decadal AAR; track→persona routing; disagreement ladder; tools inventory). **AC:** explicitly extends, does not fork, `skill_iii_cycle`/`skill_decadal_aar`. ✅

## Deliverables (all LIVE this session)

- `what/exemplars/sites/_reference_set.md` — manifest + cross-site synthesis distributions + NN/g grounding.
- `what/exemplars/sites/site_{hermes,huggingface,ethereum,linear,vercel,anthropic,replicate,valtown,raycast,stripe_docs}.md` — 10 per-site captures.
- `what/design/front_page_doctrine.md` — the design-DNA doctrine (third companion to visual-identity-v2 + writing-guidelines; graduates into `site/src/content/reference/` at build time).
- `how/skills/skill_reference_inspection.md` + `how/skills/skill_site_design_pipeline.md`.

## Hard constraints (honored)

- No `site/` edits (doctrine authored under `what/design/`, graduates to `site/` at build time). No image-gen. No cross-vault writes. `skill_iii_cycle`/`skill_decadal_aar`/`visual-identity-v2`/`writing-guidelines` unedited (extended via new peers). Archive-never-delete.

## Lightweight AAR (per Project SO #5; research-class, non-RLP)

- **Worked:** WebFetch inspection to a fixed rubric produced directly comparable captures; the cross-site *distribution* (not average) gave defensible numeric rules; pairing each site with explicit Lift/Avoid (esp. for AVOID-list sites Vercel/Stripe) kept the doctrine honest. NN/g supplied hard provenance numbers (57% above-fold; 52% typical wasted space).
- **Didn't:** dark-mode/motion/live-registry fields can't be captured by WebFetch (static markdown only) → marked `needs_operator_capture` (structured screenshot request seam, deferred to operator/build phase).
- **Finding:** aDNA's young-network scale makes HF's "registry-as-hero + scale-as-proof" a *partial* fit; the **Val Town who-not-how-many** pattern is the right bridge until scale arrives — a non-obvious result that directly shapes the homepage worked example.
- **Change:** the doctrine sets the house sleek↔revolutionary dial at **~55/45** (calmer than Hermes 65/35) to preserve docs credibility — operator confirms the value at the ratification gate.
- **Follow-up:** at build time, port `front_page_doctrine.md` → `site/src/content/reference/front-page-doctrine.mdx`; collect the operator screenshots for the `needs_operator_capture` fields; exercise `skill_reference_inspection` to expand any thin captures into full per-site files as surfaces are built.

## Related

- [[mission_adna_str_p5_m57_adnalabs_expansion_planning_stub]] — sibling charter/re-scope mission (consumes this)
- [[_reference_set]] · [[front_page_doctrine]] · [[skill_reference_inspection]] · [[skill_site_design_pipeline]]
