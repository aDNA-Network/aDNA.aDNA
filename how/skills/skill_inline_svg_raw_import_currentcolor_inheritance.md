---
type: skill
skill_type: agent
category: design
status: active
version: 1.0.0
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
graduated_from: campaign_adna_serious_tool_readiness M5.3 D11 (cycle 108, 3/3; ratified Champollion G3 2026-07-02 D2c)
first_consumer: site/src/components/sections/SidebarNav.astro (?raw icon imports, cycle 106)
token_estimate: ~1300
trigger: "You need to ship theme-inheriting, zero-runtime-JS icons or diagrams in an Astro site and you are reaching for <img src=…svg> (can't inherit theme color, adds a request) or a runtime-JS renderer (Mermaid-style). Use this instead: inline the SVG into the DOM and let it inherit the page's theme through currentColor."
tags: [skill, agent, design, astro, svg, raw_import, currentcolor, dark_mode, accessibility, zero_runtime_js, str_m53, champollion_g3_graduation]
---

# Skill: Inline SVG (`?raw` import or inline template) with `currentColor` inheritance

## Overview

To ship theme-inheriting, zero-runtime-JS icons and diagrams in an Astro site, **inline the SVG markup into the DOM** and let it **inherit the page's theme through `currentColor`** — rather than referencing SVGs as `<img>` (which can't inherit theme color and adds a request) or rendering them with runtime JS (Mermaid-style). The pattern family covers **two forms under one lesson**:

- **`?raw` import form** — for **static** assets (icons): `import icon from '…/icon.svg?raw'` then embed via `set:html`. Vite resolves the `.svg?raw` query at build to the raw string.
- **inline-template form** — for SVG whose **labels or geometry depend on Props** (diagrams): write the `<svg>` directly in the Astro template so dynamic values interpolate.

Both inherit color from the surrounding text via `currentColor` (so the glyph re-colors automatically in dark mode), give full a11y control, and cost nothing at runtime. **Inline the vector, inherit the color.**

The vault demonstrates both forms: `SidebarNav.astro` + `Breadcrumb.astro` use `?raw` icon imports (static); `TriadDiagram.astro` + `ConvergenceFunnel.astro` use inline-template SVG (dynamic labels). The structure is the lesson (Standing Order #8).

## When to use

- **Icons** that must re-color with the theme (light/dark) and add no network request → `?raw` import form.
- **Diagrams** whose labels/geometry come from Props and must theme-match → inline-template form.
- Anywhere you want **zero runtime JS** for a vector (no Mermaid-style client render for a static or build-known shape).

## When NOT to use

- The SVG is a **large, purely-decorative raster-like illustration** (a hero image) — use Astro's `<Image>`/`<Picture>` asset pipeline; inlining bloats the HTML.
- The diagram is **genuinely data-driven at runtime** (interactive, client-updated) — then a runtime renderer is the right tool; this skill is for build-time-known vectors.
- The SVG must be **cached as a shared asset across many pages** and is large — an inlined copy repeats in every page's HTML; weigh the per-page bytes against the saved request.

## Recipe

### Step 1 — Author the SVG so it inherits color
Use `fill="currentColor"` / `stroke="currentColor"` (not a hardcoded hex). The glyph then takes the color of the surrounding text — automatic dark-mode parity, no per-theme asset.

### Step 2a — Static asset ⇒ `?raw` import + `set:html`
```astro
---
import iconLearn from '../../assets/icons/icon_learn.svg?raw';
---
<span class="group-icon" aria-hidden="true" set:html={iconLearn} />
```
Vite's `?raw` query returns the file as a string at build; `set:html` inlines it. No `<img>`, no request, theme-inherited.

### Step 2b — Dynamic labels/geometry ⇒ inline `<svg>` in the template
```astro
---
const titleId = `triad-title-${Math.random().toString(36).slice(2, 9)}`;
---
<svg role="img" aria-labelledby={titleId} ...>
  <title id={titleId}>{computedLabel}</title>
  {legs.map((l) => <text fill="currentColor">{l.label}</text>)}
</svg>
```
Write the vector directly so Props interpolate.

### Step 3 — Set a11y semantics by role
- **Decorative** icon (label is adjacent text): `aria-hidden="true"` — hide it from the a11y tree.
- **Semantic** diagram (the SVG *is* the content): `role="img"` + `aria-labelledby` pointing at an inline `<title>` (and `<desc>` if needed).

### Step 4 — Make marker IDs collision-safe
If the SVG uses internal IDs (`<title>`, `<desc>`, `<linearGradient>`, `clipPath`) and the component renders more than once per page, suffix each ID with a **per-instance random token** so two instances don't collide (`triad-title-${Math.random().toString(36).slice(2, 9)}`).

### Step 5 — Verify theme parity + zero runtime cost
Build (`npx astro build`); confirm the glyph re-colors in both light and dark (it should, via `currentColor`) and that no runtime script was added for it. Run the a11y gate (decorative = hidden; semantic = labelled).

## Instance citations (3/3 — the graduated lineage)

| # | Cycle | Commit | Instance (path) | Form / what it did |
|---|-------|--------|-----------------|--------------------|
| 1/3 | 106 | `d72f00c` | `site/src/components/sections/SidebarNav.astro` + `Breadcrumb.astro` | **`?raw` form** — 6 icons via `?raw` + `set:html` + `currentColor` + `aria-hidden`, wired into SidebarNav (7 groups) + Breadcrumb (12 routes). "NEW SEED 1/3" |
| 2/3 | 107 | (S3) | `site/src/components/diagrams/TriadDiagram.astro` | **inline-template form** — dynamic-label SVG, `role="img"` + `aria-labelledby`, per-instance random marker IDs |
| 3/3 | 108 | (S3) | `site/src/components/diagrams/ConvergenceFunnel.astro` | **inline-template form** — **3/3 GRADUATES at cycle 108**. Margin 1.0× (exactly at threshold). |

Primary evidence: `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d11_visual_identity.md` §Graduations (line ~262: "Pattern family covers both raw-import and inline-template SVG; upstream-promotion candidate"). The a11y correctness (decorative `aria-hidden` vs semantic `role=img`, random-suffix IDs) is corroborated by the Accessibility Auditor's D11 APPROVE at 4.5. Canonical write-up: `site/src/content/reference/visual-identity-v2.mdx` §§201–232.

## Anti-patterns

| What | Why it breaks |
|---|---|
| `<img src="icon.svg">` for a theme-colored icon | An `<img>` can't inherit `currentColor` — the glyph won't re-color in dark mode — and it adds a network request. |
| Runtime-JS render (Mermaid-style) for a **static** shape | Ships JS + a paint delay for something knowable at build; inline it instead. |
| Hardcoded hex `fill="#7dcfff"` in the SVG | Defeats theme inheritance; you'd need one asset per theme. Use `currentColor`. |
| `?raw` form for a **dynamic-label** diagram | A `?raw` string is static — Props can't interpolate. Use the inline-template form when labels/geometry depend on Props. |
| Shared marker IDs across repeated instances | Two SVGs with the same `id` collide (a11y label points at the wrong node; gradients bleed). Suffix IDs per instance. |

## Related

- [[skill_documentation_layout_props_additive_extension]] — sibling seed graduated the same D11 close (same G3 ratification, D2c); together they cover the site's component-craft.
- [[skill_site_design_pipeline]] — the pipeline whose Stage 5 (Build) this skill serves.
- Seed record: [[../backlog/idea_seed_skill_inline_svg_raw_import_currentcolor_inheritance]] — the graduation-tracking backlog file this skill was authored from.
- Reference companion: `site/src/content/reference/visual-identity-v2.mdx` §§201–232 (the canonical raw-import-vs-inline-template rule).
