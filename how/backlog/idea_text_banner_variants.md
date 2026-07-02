---
type: backlog_idea
status: accepted
priority: low
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, visual, social-media]
updated: 2026-07-02
champollion_mission: M4.2
---

# Idea: Text-on-Banner Variants for Social Media

## Problem
The repo banner (C6-A) has no text. Social media shares (Twitter cards, LinkedIn, HuggingFace) benefit from having the project name visible in the image.

## Proposed Solution
Generate "aDNA" text overlay variants (C11-D/E/F were strong candidates). Use for: Open Graph image, social preview, HuggingFace Space banner.

## Origin
campaign_adna_polish Cycle 11 text experiments — C11-D and C11-E scored well but weren't selected for the repo banner.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## Champollion M4.2 disposition — REROUTE (image generation, out of window, 2026-07-02)

**REROUTE → visual-asset generation venue (ComfyUI.aDNA / VisualDNA.aDNA) + image-side social-preview RC.** Same class as `idea_custom_logo`: M4.2 cannot generate images in source. This idea's Proposed Solution is to **generate "aDNA" text-overlay banner variants** (Open Graph / social-preview / HuggingFace banner) — a forge image-gen job, not a site-source edit. Sibling to the custom-logo reroute; both are social-preview / brand-mark asset generation that should be produced together at the image forge, then wired into the site's OG image + the M6.1 social-preview line. Status held `accepted`; effective venue = ComfyUI/VisualDNA generation → M6.1 social-preview.
