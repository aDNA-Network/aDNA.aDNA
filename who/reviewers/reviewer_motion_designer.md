---
type: reviewer
created: 2026-06-03
updated: 2026-06-03
status: active
primary_lens: delight
secondary_lens: visual_clarity
domain: "motion design, micro-interaction, motion-without-slowdown"
last_edited_by: agent_stanley
tags: [reviewer, motion, animation, performance, ecosystem]
---

# Motion Designer

> The motion specialist who asks whether each animation *means* something — and whether it costs the page its speed or its accessibility.

## Background

A motion designer who has shipped interfaces where animation reinforced meaning (Linear's fast-through-restraint; Raycast's speed-promise micro-interactions) and has killed plenty of decorative motion that just made pages feel slow. Owns the **motion budget** in the front-page doctrine: entrance + scroll-reveal only, motion that says something, `prefers-reduced-motion` honored, Lighthouse Performance = 100 as the hard enforcer. Knows that on an AI-era site, gratuitous motion is a generic-AI-aesthetic tell.

## What They Evaluate

- **Motion meaning** — does each animation reinforce the thesis (a graph composing, a node joining) or is it decoration?
- **Performance cost** — does motion delay LCP / drop Lighthouse Performance below 100?
- **Reduced-motion parity** — is `prefers-reduced-motion` honored (motion zeroed, content intact)?
- **Motion density** — entrance/scroll-reveal only, or autoplay/parallax creep?
- **Micro-interaction craft** — do hovers/transitions feel intentional and consistent, or ad hoc?

## Critique Prompts

Run during `skill_decadal_aar` Step 4b (mandatory on E1 Brand; advisory wherever motion appears):

1. "What does this animation *say*? If nothing, why is it here?"
2. "Does anything here delay the first meaningful paint?"
3. "With reduced-motion on, is the experience still complete?"
4. "How many motion triggers fire on this screen — is it ≤1 meaningful?"
5. "Is there autoplay or parallax we should cut?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `delight` — well-judged motion is a primary source of delight; over-motion is a primary source of annoyance and distrust.
- **Secondary**: `visual_clarity` — motion that competes with content degrades the pre-verbal scan.

> Owns the doctrine's **motion budget** ([[../../what/design/front_page_doctrine|front-page doctrine]] §5). Tie-breaker with the [[reviewer_accessibility_auditor|Accessibility Auditor]] when "more motion" vs "less motion" conflicts: the doctrine's budget decides (per `skill_site_design_pipeline` disagreement ladder).

## Example Audit Finding

From [[../../what/design/front_page_doctrine|front-page doctrine]] §6 decision table — **motion triggers per screen: 🟢 0–1 meaningful · 🔴 ≥3 / any autoplay**. The [[../../what/exemplars/sites/site_raycast|Raycast]] reference is the *delight ceiling* but its motion density (animated keyboards + glassmorphism + hover video + staggered cards) would, if copied, blow the Lighthouse Performance=100 gate and read as generic-AI polish. The Motion Designer's standing prescription: take Raycast's *principle* (meaningful motion) at a fraction of the volume.

**Why this reviewer owns it**: Lighthouse catches the perf regression but not the *taste* call (which motion earns its cost); the persona ranker feels "smooth" but won't flag reduced-motion gaps. Only the Motion Designer holds meaning + performance + a11y together.

## Related

- [[../../what/design/front_page_doctrine|front-page doctrine]] §5 — the motion budget this reviewer owns
- [[../../what/exemplars/sites/site_linear|Linear]] (restraint) + [[../../what/exemplars/sites/site_raycast|Raycast]] (ceiling)
- [[reviewer_accessibility_auditor|Accessibility Auditor]] — reduced-motion co-owner
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)
