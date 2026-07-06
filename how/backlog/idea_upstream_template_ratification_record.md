---
type: backlog_idea
status: completed
priority: medium
created: 2026-05-24
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, templates, ratification_ceremony, contextcompass_origin]
updated: 2026-07-06
fold_batch: champollion_m6_1_rc
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

## Per-ADR ratification block (the level below the ceremony record)

*Added 2026-07-02 (Champollion M1.2, executing G0 D3; normative text from the governance retro package §4 — `how/campaigns/campaign_champollion/artifacts/governance_retro_package.md`). The proposal above covers the **N-ADRs-at-once ceremony record**; the ADR-045 self-ratification incident exposed the gap one level down — **every single ADR's own status block**. The sections below close that gap; the ceremony record above stands as the **N-at-once variant** of the same block schema — one schema, two entry points.*

### Required ratification block, per ADR (§4.1)

Any ADR at `status: accepted` (or `ratified`) MUST carry a structured ratification record containing **all four** of:

1. **Ratifier identity** — the *named human operator/authority* who ratified (e.g. "Stanley, Founding Architect"). An agent/persona (Rosetta, Berthier, …) may be named only as **author/steward**, never as ratifier.
2. **Gate / session reference** — a *verifiable pointer* to the discrete ratification event: the AskUserQuestion lane and/or approved-plan file id, **and** the ratifying `session_id`, **and** the ratifying commit SHA. (For N-at-once ceremonies: the `template_ratification_record.md` artifact id per the proposal above.)
3. **Ratification date** — distinct from the authored/created date.
4. **Scope of authority** — exactly what the ratification authorizes: this ADR only, or a named downstream program; **plus any pending co-signs that keep seams non-operative** (the ADR-043 precedent — the decision binds, seams stay doctrine until co-signs land).

### Statuses an agent may set (§4.2)

- An agent MAY set/keep **`proposed`** (and `draft`, if in the enum) on its own authority, and MAY fully author the ADR body — Context/Decision/Consequences/Alternatives/References all pre-filled.
- An agent MUST NOT unilaterally set **`accepted` / `ratified` / `rejected`** — those require the operator gate of §4.1. A fully-drafted ADR sits at **`proposed`** until the gate; its status is the *only* field the agent may not advance.
- Lifecycle-neutral back-references (e.g. adding `superseded_by` once the superseding ADR is itself ratified) are exempt.
- **This is the rule ADR-045 broke** — authored *and* self-advanced to `accepted` in one motion, with no gate reference. Repaired per G0 D3(b) at Champollion M1.2; the corrected ratification block in `what/decisions/adr_045_wrapper_placement_in_triad.md` is the reference instance of §4.1.

### Enforcement hook — `adna_validate` governance check (SPEC ONLY) (§4.3)

**Specification only — NOT implemented in this mission.** Implementation rides Champollion M2.2/M6.1; M1.2 does not modify `adna_validate.py`.

- **Check:** any ADR with `status: accepted|ratified` MUST have a well-formed ratification block carrying all four §4.1 fields, each present and non-empty. A missing/empty block **fails governance** — same class as the existing template-count/skills-count guards.
- **Boundary:** the check validates *structure* (the four fields present + non-empty), not the *truth* of the gate — truth is the operator's, at the gate.
- **Optional strict mode:** flag any ADR whose git history shows `status: proposed → accepted` in a commit whose message/record carries no gate reference.
- **Rollout:** ship in "warn" mode first (existing `accepted` ADRs pre-date the rule), promote to "fail" after a one-pass backfill of ratification blocks onto already-accepted ADRs — mirroring the frontmatter-conformance arc (502 → 293 → 0).

### Template fold

`template_adr.md` gains a mandatory `## Ratification` block with the four labelled fields (ratifier / gate ref / date / scope + pending co-signs), folded into the public image (`aDNA-Network/aDNA`) at the next `skill_template_release` alongside the ADR-044 §7.2/§5.5 fold already queued. `template_ratification_record.md` (this idea's original proposal) registers at the same pass as the **N-at-once companion**. This file's `fold_batch: champollion_m6_1_rc` frontmatter marks it for the M6.1 release-candidate assembly.

## Discussion

- 2026-05-24 (agent_stanley): Filed at ContextCompass S16 ceremony (R10(a) promotion) per strategic-review artifact §5 R10 + §1.2 gap call-out 2. The template would have been useful to CC P4 had it existed; future Framework.aDNA / Platform.aDNA / Org-Vault.aDNA genesis-planning campaigns would benefit.
- **Precedent**: ContextCompass `what/decisions/p4_ratification.md` (commit `119a013` 2026-05-23) is the first instance. III.aDNA may have analogous artifacts at its DG-* gates (DG-A, DG-B, DG-C, DG-D); pattern across both vaults validates the template.
- **Naming convention check**: existing aDNA-standard templates use `template_*.md` naming. Naming candidates: `template_ratification_record.md`, `template_ratification_ceremony.md`, or `template_constitutional_ratification.md`.
- 2026-07-02 (agent_rosetta, Champollion M1.2): scope extended one level down per G0 D3 — the per-ADR ratification block, the agents-set-`proposed`-only rule, and the `adna_validate` check spec added from the governance retro §4 (ADR-045 self-ratification incident). The original N-at-once ceremony proposal is retained above as the batch variant of the same schema.

## Cross-references

- ContextCompass `what/decisions/p4_ratification.md` (the first instance; 4-ADR-at-once ratification ceremony)
- ContextCompass `how/missions/artifacts/strategic_review_post_planning_2026_05_24.md` §1.2 gap 2 (artifact-type unregistered) + §5 R10 (this upstream)
- III.aDNA Campaign DG-* gate packages (likely-analogous artifacts; would inform template generalization)
- `aDNA.aDNA/how/templates/` (template inventory destination)
- Champollion governance retro package §4 (`how/campaigns/campaign_champollion/artifacts/governance_retro_package.md`) — normative source for the per-ADR block
- `what/decisions/adr_045_wrapper_placement_in_triad.md` — the incident ADR; its corrected ratification block is the §4.1 reference instance

## Origin

ContextCompass post-planning strategic-review S16 ceremony 2026-05-24 — R10(a) promotion per artifact §5 + §1.2 gap call-out 2.

## When to integrate

Operator-discretionary; no execution-campaign dependency. Earliest natural opportunity: when an aDNA template review pass is scheduled; or when III's Campaign DG-* artifacts are mined for template patterns; or when a third Framework.aDNA / Platform.aDNA approaches its first ratification ceremony.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

## Closure (2026-07-06)

**COMPLETED** — both halves discharged: (1) upstream template shipped in the v8.5 image (`aDNA-Network/aDNA`, `.adna/how/templates/template_ratification_record.md`); (2) local project-vault mirror authored at Meridian M1 ([[../templates/template_ratification_record|how/templates/template_ratification_record.md]]) with the per-ADR Entry Point A block (§4.1) added. Residual: Entry-Point-A *upstream* fold → v8.6 RC ([[../campaigns/campaign_meridian/artifacts/v8_6_release_candidate|Meridian M5]]).
