---
type: backlog_idea
status: proposed
priority: medium
created: 2026-05-24
last_edited_by: agent_stanley
tags: [backlog, idea, upstream, templates, ratification_ceremony, contextcompass_origin]
---

# Idea — Upstream `template_ratification_record.md` to aDNA Standard Templates

## Problem / Opportunity

ContextCompass's P4 → P5 gate (2026-05-23) produced a new artifact type: `p4_ratification.md` — a **ratification ceremony record** listing all ADRs approved in dependency order, the cross-phase invariants discovered, and constitutional carry-forward language. This was the **first 4-ADR-at-once ratification ceremony** in the ContextCompass campaign; ceremony commit was `119a013`.

Per CC strategic-review artifact §1.2 gap call-out 2 (2026-05-24): *"The `p4_ratification.md` artifact type is unregistered in the workspace template inventory."* No `template_*.md` in `aDNA.aDNA/how/templates/` (or the equivalent location in the .adna standard) matches the multi-ADR-at-once ratification pattern. Future Framework.aDNA + Platform.aDNA + Org-Vault.aDNA genesis campaigns that conclude with an N-ADR-at-once ratification ceremony would benefit from a canonical template.

## Proposed Solution

Author `template_ratification_record.md` at the aDNA template path (likely `.adna/how/templates/template_ratification_record.md` or equivalent path per the .adna standalone clone structure). Based on `p4_ratification.md`. Generalizable sections:

1. **Ceremony header** — date, gate (e.g., P4 → P5), ratifier (operator), commit SHA.
2. **ADR roster** — all ADRs covered by this ceremony, in dependency order; each with `status: proposed → ratified` + `signed_by` + `ratified_date`.
3. **No-contradiction invariants discovered** — cross-phase invariants surfaced at ratification (a class of "late constitutional invariants" per CC strategic-review §1.2 gap 3).
4. **Constitutional carry-forward** — explicit language for how the ratified constitution propagates into subsequent phases / campaigns.
5. **Persona ratification status** — confirms the campaign's persona survives all falsification tests through ratification.

## Discussion

- 2026-05-24 (agent_stanley): Filed at ContextCompass S16 ceremony (R10(a) promotion) per strategic-review artifact §5 R10 + §1.2 gap call-out 2. The template would have been useful to CC P4 had it existed; future Framework.aDNA / Platform.aDNA / Org-Vault.aDNA genesis-planning campaigns would benefit.
- **Precedent**: ContextCompass `what/decisions/p4_ratification.md` (commit `119a013` 2026-05-23) is the first instance. III.aDNA may have analogous artifacts at its DG-* gates (DG-A, DG-B, DG-C, DG-D); pattern across both vaults validates the template.
- **Naming convention check**: existing aDNA-standard templates use `template_*.md` naming. Naming candidates: `template_ratification_record.md`, `template_ratification_ceremony.md`, or `template_constitutional_ratification.md`.

## Cross-references

- ContextCompass `what/decisions/p4_ratification.md` (the first instance; 4-ADR-at-once ratification ceremony)
- ContextCompass `how/missions/artifacts/strategic_review_post_planning_2026_05_24.md` §1.2 gap 2 (artifact-type unregistered) + §5 R10 (this upstream)
- III.aDNA Campaign DG-* gate packages (likely-analogous artifacts; would inform template generalization)
- `aDNA.aDNA/how/templates/` (template inventory destination)

## Origin

ContextCompass post-planning strategic-review S16 ceremony 2026-05-24 — R10(a) promotion per artifact §5 + §1.2 gap call-out 2.

## When to integrate

Operator-discretionary; no execution-campaign dependency. Earliest natural opportunity: when an aDNA template review pass is scheduled; or when III's Campaign DG-* artifacts are mined for template patterns; or when a third Framework.aDNA / Platform.aDNA approaches its first ratification ceremony.
