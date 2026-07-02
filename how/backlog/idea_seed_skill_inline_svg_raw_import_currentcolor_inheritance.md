---
type: backlog_idea
status: proposed
priority: medium
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: campaign_champollion M3.2 (Pattern Harvest II — graduation-seed instance check + proper backlog filing)
seed_skill: skill_inline_svg_raw_import_currentColor_inheritance
instance_count: 3/3 (graduated 2026-05-27, v8 STR M5.3 cycle 108)
tags: [backlog, seed, skill_seed, graduation, inline_svg, raw_import, currentcolor, astro, str_m53, g3_ratification_flag, champollion]
---

# Seed: skill_inline_svg_raw_import_currentColor_inheritance (3/3 — graduation ratification owed)

> **Filing note (M3.2)**: this is the *proper backlog filing* the Order of Battle §2 row called for. The seed was previously **STATE-only tracked with no backlog file**. Instance count is **re-derived from primary evidence** (session + AAR artifacts), NOT from STATE summaries. Graduation ratification is gate work → flagged for Champollion **G3**. This filing does **not** author the skill itself.

## The lesson (one paragraph)

To ship theme-inheriting, zero-runtime-JS icons and diagrams in an Astro site, **inline the SVG markup into the DOM** (either via a Vite `?raw` import + `set:html`, or an inline SVG template in the component) and let it **inherit the page's theme through `currentColor`** — rather than referencing SVGs as `<img>` (which can't inherit theme color and adds requests) or rendering them with runtime JS (Mermaid-style). Inlined + `currentColor` gives full a11y control (`aria-hidden` for decorative icons; `role="img"` + `aria-labelledby` for semantic diagrams), automatic dark-mode parity (the glyph re-colors with the surrounding text), and no runtime cost. The pattern family covers *both* forms — the `?raw`-import form and the inline-template form — under one lesson: inline the vector, inherit the color.

## Re-derived instance list (primary evidence — cycle / path)

| # | Cycle | Commit | Evidence (path) | What it did |
|---|-------|--------|-----------------|-------------|
| 1 | 106 | `d72f00c` | `how/sessions/history/2026-05/session_stanley_20260527T041321Z_v8_m53_s2.md` (line ~88) | Vite `?raw` import + `set:html` + `currentColor` inheritance + `aria-hidden`: 6 SVGs wired into SidebarNav (7 groups) + Breadcrumb (12 routes) — "NEW SEED 1/3" |
| 2–3 | 107 + 108 | (S3) | `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d11_visual_identity.md` §Graduations (line ~262) | Inline-template SVG forms (TriadDiagram cycle 107 + ConvergenceFunnel cycle 108) — **3/3 GRADUATES at cycle 108** |

**Lineage note (from the D11 AAR, line ~262):** "**3/3 GRADUATES** at cycle 108 (?raw form cycle 106 + inline-template forms cycles 107+108). Pattern family covers both raw-import and inline-template SVG; upstream-promotion candidate." Margin 1.0× (graduated exactly at threshold). The a11y correctness of the pattern (decorative `aria-hidden` icons vs semantic `role=img` diagrams, per-instance random-suffix marker IDs to prevent collisions) is corroborated by the Accessibility Auditor's D11 APPROVE at 4.5 (AAR line ~302).

## Count discrepancy (the reason this filing exists)

- **Order of Battle §2 row said**: `skill_inline_svg_raw_import_currentColor_inheritance` **(1/3)**.
- **Primary evidence (STATE_archive.md line ~97 + D11 AAR §Graduations)**: **3/3 GRADUATED 2026-05-27** (v8 M5.3 S3, cycle 108).
- **Conclusion**: the OoB count was **stale** (captured the 1/3 state at cycle 106 / S2, never updated after cycles 107+108 completed the climb at S3). The seed has met its graduation threshold since 2026-05-27; **no skill file was ever authored, and no backlog file existed** — this filing closes the tracking gap. The OoB §2 row is annotated in-place at M3.2 to the re-derived truth.

## Graduation ratification — flagged for Champollion G3

Graduation *ratification* (promoting a met-threshold seed to an authored skill, and folding it upstream if it's framework-level) is **gate work**, not build work. Per the M3.2 escalation trigger, this seed's 3/3 status **implies graduation NOW** → **flagged for Champollion G3** (alongside the sibling `skill_documentation_layout_props_additive_extension` seed). G3 decides whether to author the skill and whether it is an upstream-promotion candidate (the D11 AAR marked it "upstream-promotion candidate").

## Related

- Sibling seed (same D11 close, same G3 flag): [[idea_seed_skill_documentation_layout_props_additive_extension]]
- Primary evidence: `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m53_d11_visual_identity.md` + `.../artifacts/aar_decadal_d11_visual_identity.md`
- Session records: `how/sessions/history/2026-05/session_stanley_20260527T041321Z_v8_m53_s2.md` (cycle 106, 1/3) · `session_stanley_20260527T222636Z_v8_m53_s3.md` (cycles 107+108 graduation)
- OoB row annotated in-place: `how/campaigns/campaign_champollion/artifacts/order_of_battle.md` §2
