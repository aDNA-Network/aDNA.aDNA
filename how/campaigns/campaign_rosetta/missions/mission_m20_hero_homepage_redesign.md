---
mission_id: m20
type: mission
title: "Hero & Homepage Redesign"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, website, phase-4.5, hero, homepage]
---

# M20 — Hero & Homepage Redesign

## Mission Brief

Redesign the aDNA documentation site homepage with a visual hero using the existing banner image, and add three new content sections below the feature grid: "How it Works", "Who Uses aDNA", and "The Standard".

## Objectives

### O1: Hero Image Integration

- [x] Copy `what/assets/banner.jpg` to `site/src/assets/banner.jpg`
- [x] Use Astro `<Image>` component for automatic WebP conversion + responsive widths (640/1024/1408)
- [x] Dark gradient overlay for text readability (teal-tinted in light mode, neutral in dark mode)
- [x] Existing headline and CTAs preserved, styled for on-image contrast
- [x] Secondary CTA restyled as frosted-glass button for hero context

### O2: How it Works Section

- [x] 3-step flow: Structure (folder tree) → Orient (compass) → Execute (rocket)
- [x] Each step: number badge, emoji icon, title, description
- [x] Media placeholder per step for future terminal GIFs (dashed border, play icon, "Demo coming soon")
- [x] Cards on `bg-alt` background for visual separation

### O3: Who Uses aDNA Section

- [x] 5 persona cards from Phase 4 adopters: Solo Developer, Enterprise Team, Educator, Startup, Researcher
- [x] Each card: emoji icon, title, 1-line summary, link to use case page
- [x] Hover effect: border highlight, shadow lift, subtle translate

### O4: The Standard Section

- [x] Stats row: "14 Entity Types", "3 Conformance Levels", "v2.2 Current Version", "MIT Licensed"
- [x] Dual CTA: "Read the Specification" (primary) + "View on GitHub" (secondary, external)
- [x] `bg-alt` background matching How it Works section

## Build Verification

- Build: 60 pages, 2.56s, zero errors
- Banner optimization: 355kB JPEG → 3 WebP variants (30kB / 63kB / 103kB)
- All sections render at desktop/tablet/mobile breakpoints
- Dark mode: overlay opacity increases for contrast

## Dependencies

- **Depends on**: M12 (site live), M14 (adopter personas as card data source)

## AAR (After Action Review)

- **Worked**: Astro's `<Image>` component handled responsive WebP generation automatically — 355kB banner became 30-103kB WebP. Gradient overlay approach keeps text readable without modifying the image itself.
- **Didn't**: Had to create `site/src/assets/` directory — it didn't exist in the original scaffold. Minor friction.
- **Finding**: Media placeholder pattern (dashed border + play icon + label) is lightweight and reusable. Worth extracting to a standalone component in M22.
- **Change**: Hero secondary CTA restyled from border/solid to frosted-glass (backdrop-filter + translucent white) — better on-image appearance than the previous solid-background button.
- **Follow-up**: M21 (new content sections), M22 (extract MediaPlaceholder component, add Mermaid diagrams).
