---
type: backlog_idea
status: accepted   # graduation RATIFIED at Champollion G3 (2026-07-02, D2c; record: how/gates/champollion_p3_gate.output.md); skill authoring rides M4.2 (site-UX window) as an in-window rider
priority: medium
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: campaign_champollion M3.2 (Pattern Harvest II — graduation-seed instance check + proper backlog filing)
seed_skill: skill_documentation_layout_props_additive_extension
instance_count: 3/3 (graduated 2026-05-27, v8 STR M5.3 cycle 107)
tags: [backlog, seed, skill_seed, graduation, layout_props, additive_extension, astro, str_m53, g3_ratification_flag, champollion]
---

# Seed: skill_documentation_layout_props_additive_extension (3/3 — graduation ratification owed)

> **Filing note (M3.2)**: this is the *proper backlog filing* the Order of Battle §2 row called for. The seed was previously **STATE-only tracked with no backlog file**. Instance count is **re-derived from primary evidence** (session + AAR artifacts), NOT from STATE summaries. Graduation ratification is gate work → flagged for Champollion **G3**. This filing does **not** author the skill itself.

## The lesson (one paragraph)

When a shared Astro layout component (`DocumentationLayout`) needs to carry new optional content (a hero image, a section icon, a badge) across many consuming pages, extend it via a **purely-additive `Props` field** — an optional prop with a safe default — rather than forking the layout or threading the value through every call site by hand. Consumer pages that don't set the prop are unchanged (zero-diff); pages that want the feature pass it in one line. The extension ships as one prop-shape addition + per-consumer one-line prop-passes, keeping each cycle a small, reviewable, single-binary-commit unit. The pattern is the additive-extension discipline applied to layout props: add optionality, never break existing consumers.

## Re-derived instance list (primary evidence — cycle / path)

| # | Cycle | Commit | Evidence (path) | What it did |
|---|-------|--------|-----------------|-------------|
| 1 | 107 | (S3) | `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d11_visual_identity.md` §Graduations (line ~261) | **3/3 GRADUATES at cycle 107** — the seed's third canonical instance (per the D11 AAR graduation table) |

**Full lineage (the 1/3 → 2/3 → 3/3 climb), from the session records:**
- **1/3** — cycle 104 (`5d135f1`), `how/sessions/history/2026-05/session_stanley_20260527T041321Z_v8_m53_s2.md` (line ~86): hero wiring (learn + how) via a pure-additive `heroImage?: { src: ImageMetadata; alt: string }` Props extension on `DocumentationLayout` — "NEW SEED 1/3."
- **2/3** — cycle 105 (`4b3ff67`), same session (line ~87): hero wiring (patterns + reference), consumer-side prop-pass only, zero further layout changes — "1/3 → 2/3."
- **3/3** — cycle 107, D11 AAR §Graduations (line ~261): "**3/3 GRADUATES** at cycle 107 + 4/3 reinforcement at cycle 108." Margin 1.3×.

## Count discrepancy (the reason this filing exists)

- **Order of Battle §2 row said**: `skill_documentation_layout_props_additive_extension` **(2/3)**.
- **Primary evidence (STATE_archive.md line ~97 + D11 AAR §Graduations)**: **3/3 GRADUATED 2026-05-27** (v8 M5.3 S3, cycle 107).
- **Conclusion**: the OoB count was **stale** (captured the 2/3 state at S2 close, never updated after the S3 graduation). The seed has met its graduation threshold since 2026-05-27; **no skill file was ever authored, and no backlog file existed** — this filing closes the tracking gap. The OoB §2 row is annotated in-place at M3.2 to the re-derived truth.

## Graduation ratification — flagged for Champollion G3

Graduation *ratification* (promoting a met-threshold seed to an authored skill, and folding it upstream if it's framework-level) is **gate work**, not build work. Per the M3.2 escalation trigger, this seed's 3/3 status **implies graduation NOW** → **flagged for Champollion G3** (alongside the sibling `skill_inline_svg_raw_import_currentColor_inheritance` seed). G3 decides whether to author the skill and whether it is an upstream-promotion candidate (the D11 AAR marked it "Promotion candidate for v8 P6 upstream").

## Related

- Sibling seed (same D11 close, same G3 flag): [[idea_seed_skill_inline_svg_raw_import_currentcolor_inheritance]]
- Primary evidence: `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m53_d11_visual_identity.md` + `.../artifacts/aar_decadal_d11_visual_identity.md`
- Session records: `how/sessions/history/2026-05/session_stanley_20260527T041321Z_v8_m53_s2.md` (1/3 + 2/3) · `session_stanley_20260527T222636Z_v8_m53_s3.md` (cycle 107 graduation)
- OoB row annotated in-place: `how/campaigns/campaign_champollion/artifacts/order_of_battle.md` §2
