---
type: backlog_idea
status: accepted
priority: medium
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, visual, branding]
updated: 2026-07-02
champollion_mission: M4.2
---

# Idea: Custom Logo & Favicon

## Problem
aDNA has a banner but no logo/favicon. Needed for: GitHub social preview, npm badge, favicon, brand mark distinct from banner.

## Proposed Solution
III-driven logo generation using project brand constraints (color palette, style TBD). Deploy as repo social preview image and favicon.

## Origin
campaign_adna_polish Gemini evaluation feedback — "no distinctive brand identity beyond the banner."


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## Champollion M4.2 disposition — REROUTE (design-asset generation, out of window, 2026-07-02)

**REROUTE → visual-asset generation venue (ComfyUI.aDNA / VisualDNA.aDNA) + image-side social-preview RC.** M4.2 fixes site *source* only and explicitly cannot create design assets it can't draw in source (mission guardrail: "Do NOT execute anything requiring design-asset creation… e.g. drawing logos → reroute those"). This idea's Proposed Solution is III-driven **logo/favicon image generation** — a forge job, not a source edit. Note: a text-based logo mark already renders in `site/src/components/common/Header.astro` (`.logo-mark`/`.logo-text`) and a `site/public/favicon.svg` already ships; the outstanding work is a *distinctive generated brand mark* + social-preview image, which needs the image forge. Status held `accepted`; effective venue = ComfyUI/VisualDNA generation → then the M6.1 image social-preview line.
