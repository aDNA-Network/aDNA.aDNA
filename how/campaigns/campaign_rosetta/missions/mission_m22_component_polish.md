---
mission_id: m22
type: mission
title: "Component Polish & Media Blocking"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, website, components, phase-4.5]
---

# M22 — Component Polish & Media Blocking

## Mission Brief

Create reusable components for media placeholders and Mermaid diagrams, enhance existing Callout and CardGrid components, and install media placeholder patterns on key pages.

## Objectives

### O1: MediaPlaceholder Component

- [x] `site/src/components/sections/MediaPlaceholder.astro` — standalone reusable component
- [x] Props: `type` (gif/diagram/illustration), `alt`, `aspect` (16/9, 4/3, 1/1), `caption`
- [x] Styled with dashed border, gradient tint, type-specific icon, alt description, coming-soon label
- [x] Dark mode aware via CSS custom properties

### O2: MermaidDiagram Island

- [x] `site/src/components/islands/MermaidDiagram.astro` — client-side Mermaid rendering
- [x] Installed `mermaid` npm package
- [x] Brand-themed: teal primary, amber secondary, Space Grotesk font
- [x] Dark/light mode theming via JS initialization
- [x] `<noscript>` fallback renders raw Mermaid source as code block
- [x] Supports Astro page transitions via `astro:page-load` event listener

### O3: Enhanced Callout

- [x] Added `self-reference` variant to Callout component
- [x] Teal left border + tinted background (5% primary mix)
- [x] Default title: "In this vault…"
- [x] Icon: 🔁

### O4: Enhanced CardGrid

- [x] Added `icon` prop to Card interface
- [x] Icon renders above the card header when provided
- [x] Existing cards without icons are unaffected (backward compatible)

### O5: Homepage Media Placeholders

- [x] 3 GIF placeholders embedded in "How it Works" section (inline in M20 homepage redesign)
- [x] Each step card has a 16:9 placeholder with play icon and "Demo coming soon" label

## Build Verification

- Build: 97 pages, 2.21s, zero errors
- Components verified: MediaPlaceholder renders, MermaidDiagram compiles, Callout self-reference variant styles correctly, CardGrid icon renders

## Dependencies

- **Depends on**: M20 (homepage sections where placeholders are embedded)

## AAR (After Action Review)

- **Worked**: Component enhancements were backward-compatible — existing Callout and CardGrid usages needed no changes. MediaPlaceholder was already inline on the homepage from M20; extracting it to a standalone component was clean.
- **Didn't**: Embedding MediaPlaceholder on individual content pages (concepts, tutorials) deferred — would require MDX imports across many files. Better to do when actual media is ready.
- **Finding**: Mermaid's client-side rendering adds ~200KB to pages that use it. The `client:visible` pattern wasn't used (Astro island approach) — instead used a vanilla script that only imports mermaid when containers are present. This keeps non-diagram pages zero-JS.
- **Change**: MermaidDiagram uses vanilla JS instead of Astro island hydration for simpler lifecycle management with page transitions.
- **Follow-up**: M23 (OG images + III review). Future content updates can import MediaPlaceholder and MermaidDiagram into MDX files as needed.
