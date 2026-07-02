---
type: backlog_idea
status: accepted
priority: high
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, visual, readme, onboarding]
updated: 2026-07-02
champollion_mission: M4.3
---

# Idea: Demo GIF for README

## Problem
The root README says "run claude and it handles the rest" but provides no visual proof. Top GitHub repos (uv, Fiber, DVC) all show the tool working via GIF, benchmark, or screenshot.

## Proposed Solution
Record a 30-second terminal GIF showing: `git clone` → `cd ~/aDNA` → `claude` → conversational onboarding. Embed in root README after the Getting Started code block.

## Origin
campaign_adna_polish V-05 (deferred). Identified as strongest single remaining visual addition by 5-reader III panel.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.3` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## M4.3 disposition — RE-ROUTED (not executable in a docs pass), 2026-07-02

**Status: unchanged (`accepted`) — NOT executed.** M4.3 is a documentation/learning-path mission (README + tutorials + workshops + community text); recording a 30-second terminal GIF is **asset/recording production** — it requires running a live `git clone → cd → claude` session and screen-capturing it (asciinema/terminalizer → GIF), which is outside a docs pass's capability and guardrails (this mission writes Markdown, does not produce media binaries). The README's newcomer on-ramp *was* strengthened here (new "Your First 10 Minutes" section + Quick Start already present), so the "no visual proof of the promise" gap is partially mitigated in text; the GIF itself remains the right visual addition.

**Fable ruling (M4.3 review, 2026-07-02): DEFER → post-launch launch-assets pass.** Reroute accepted as reasoned. Trigger: the post-launch asset moment (P7-close era, alongside the registry-exercise OoB row). Candidate execution lane: **Videos.aDNA (Iris)** — media production is literally that forge's charter; a one-item coord ask beats teaching a docs vault to screen-record. Recorded for G4 housekeeping; no further M4.x venue.

**Recommended venue**: a media-capable pass — either the M4.4 content/product-story mission if it takes on asset production, or a dedicated post-launch asset task (sibling to `idea_image_newcomer_currency_fixes` in spirit). Note the target file is the **root `README.md`** of the docs vault (here), which now has the on-ramp block the GIF would sit beside; if the GIF is meant for the *image* front door (`aDNA-Network/aDNA` root README, 86 lines), that is image-side and rides the `skill_template_release` RC, not a dev-vault edit. Escalated to orchestrator for G4 venue assignment.
