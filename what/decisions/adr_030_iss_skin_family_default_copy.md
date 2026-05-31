---
type: adr
adr_number: 030
title: "ISS Skin-family-conditional default copy — partner-clean chrome defaults, persona_family resolution, provenance_vault_display + post_submit_reversibility_text override fields, governance decision_significance levels"
status: accepted   # ratified at campaign_siteforge_iss P6.M4 close 2026-05-30; extends ADR-028 architecture (chrome builders + persona/skin/preset system)
created: 2026-05-30
updated: 2026-05-30
last_edited_by: agent_siteforge_native
supersedes:
superseded_by:
campaign: campaign_siteforge_iss
mission: mission_p6_4_partner_copy_layer
ratification_phase: campaign_siteforge_iss_P6_M4_partner_copy_layer
ratified: 2026-05-30
ratified_session: session_stanley_20260530_iss_p6_m4
deciders: [agent_stanley, agent_siteforge_native]
informed: [argus, hermes, hygieia, pygmalion, franklin, panacea, mnemosyne, mentor, berthier, hestia]
related_decisions: [adr_028_iss_architecture, adr_029_iss_standard_touch]
related_skills: [skill_create_iss]
related_guides:
  - SiteForge.aDNA/what/lib/iss/adaptation_guides/framework_orgvault_orggraph_guide.md
tags: [adr, decision, adr_030, campaign_siteforge_iss, operation_loom, iss, siteforge, partner_copy_layer, persona_family, skin_family_conditional_default_copy, provenance_vault_display, post_submit_reversibility_text, governance_decision_significance, clean_by_default, p6_m4, extends_adr_028]
---

# ADR-030 — ISS Skin-family-conditional Default Copy

## Status

`accepted` — ratified 2026-05-30 by agent_siteforge_native at P6.M4 of `campaign_siteforge_iss` ("Operation Loom"). Extends ADR-028 (architecture) along its chrome-builder + persona/skin/preset axis; does not supersede it. Authored *before* P7.2's LIP so the workspace-canonical pattern the LIP ratifies references a fully-ratified partner-copy architecture (operator decision, plan-mode AskUserQuestion 2026-05-30).

## Context

ADR-028 ratified the ISS chrome surfaces an external operator sees — the first-timer hint (AD via D9-C85), the provenance footer (D9-C88), the post-submit explainer (D9-C83), the decision-significance badge (D9-C82) — and the persona/skin/preset system (AD-4; D10-C91/C92/C95) that themes a gate per consumer vault. The `partner_onboarding` preset bundles exactly the right *structure* for an external audience: what is asked, who asks, why now, what happens after.

P6.M3 (the WilhelmAI charter-ratification pilot — the first **partner-facing** ISS gate, 2026-05-29) exposed a gap. The preset wires the right structure but ships **internal-operator default copy**: "This is an **ISS decision gate**…", "An agent in this **vault** requested a structured operator decision via the **ISS subsystem**…", "Authored by **skill_create_iss**…", "the **requesting agent** receives your decision via the **round-trip layer** (`round_trip.js` posts to the **gate receiver**…)", "the agent may **re-gate** depending on follow-up steps in their plan". A partner-clean gate was achievable only by the author overriding every chrome field by hand — and **two residuals had no override field at all**:

1. **The provenance footer's "Vault:" row** — the `vault` field is dual-purpose (output-routing identity consumed by `round_trip.js` + the receiver + the output JSON *and* the provenance display value). They could not differ, so the footer exposed the internal vault id to the partner.
2. **The post-submit reversibility line** — computed from `decision_significance` (whose only levels were the internal "PHASE EXIT"/"ADVISORY"/"REVERSIBLE") or a hardcoded internal fallback ("the agent may re-gate…their plan"). No author override existed; setting `decision_significance` to avoid it would in turn render a non-partner badge.

The pilot scored **4/5** (vs 5/5 for the two prior pilots) precisely because of these residuals. The finding — **CF→ISS-Partner-Copy-Layer** — proposed making partner gates clean *by default* (not by author diligence), plus the two missing override fields and a governance-appropriate significance level. This ADR ratifies that remediation as a substrate-architecture extension.

## Decision

### PC-1: `persona_family` resolution

A gate resolves to a **persona family** during `generate()` (after skin + preset resolution), recorded at `data["persona_family"]`. Precedence (first hit wins; set only when absent so an explicit author value is honored verbatim):

1. explicit `data["persona_family"]`;
2. the active skin descriptor's `persona_family:` field;
3. the active skin descriptor's `recommended_persona == "partner"`;
4. the resolved `data["preset"]` mapped via `PERSONA_FAMILY_BY_PRESET` (`partner_onboarding → partner`, `clinician_evaluation → clinician`, `enterprise_decision → enterprise`).

Keyed off the **skin descriptor + resolved preset — NOT the bare `persona` argument** — so existing `persona="partner"` renders without a partner skin/preset stay byte-identical. Only `"partner"` is consumed by the copy layer today; `"clinician"`/`"enterprise"` are reserved so future families can opt into family-appropriate copy without a new ADR. Reference: `generator.py` `_resolve_persona_family()`.

### PC-2: Skin-family-conditional default copy

A `PARTNER_CLEAN_COPY` table (canonical in `generator.py`; re-exported via `controlled_vocabularies.py`) supplies partner-clean defaults for `first_timer_hint_message`, `provenance_why`, `provenance_skill_version`, `post_submit_reviewer_text`, `post_submit_output_text`, `post_submit_reversibility_text`. The chrome builders resolve each copy string via `_resolve_chrome_copy(data, field, internal_default)` with precedence: **explicit author value > partner-clean default (when `persona_family == "partner"`) > internal-operator default**. When `persona_family != "partner"`, the internal-default path is taken unchanged — non-partner renders are byte-identical to pre-P6.M4 output. This is the "clean-by-default, not clean-by-author-diligence" guarantee.

### PC-3: `provenance_vault_display` override field

The provenance footer's vault row renders `data.get("provenance_vault_display") or data.get("vault")`. The optional `provenance_vault_display` lets the footer show a program/display name (e.g. "AI4U — Wilhelm AI Initiative for the Undiagnosed") while the routing `vault` id stays canonical (still consumed by `round_trip.js` + the receiver + the output JSON). Resolves residual #1. Absent → behavior unchanged.

### PC-4: `post_submit_reversibility_text` override field

The post-submit explainer's reversibility line resolves with precedence: **explicit `post_submit_reversibility_text` > `decision_significance` hint (existing) > partner-clean default (partner family) > internal-operator fallback**. Resolves residual #2 — both by giving authors an explicit override and by serving a partner-clean default for partner-family gates that set neither override nor `decision_significance`.

### PC-5: Governance `decision_significance` levels

`DECISION_SIGNIFICANCE_LEVELS` gains two governance-grade entries — `"binding"` ("BINDING" — *a formal commitment recorded in governance; revisited only through the same process*) and `"constitutional"` ("CONSTITUTIONAL" — *amends a charter or founding document; highest deliberative weight*) — so a partner / charter-class decision can carry an appropriate significance badge without resorting to the internal-operator "PHASE EXIT" label. Additive to the controlled set; the three pre-existing levels are unchanged.

## Consequences

### Positive

- **Partner gates clean by default** — a `partner`-family gate (wilhelmai / zenzachary skins, or any vault declaring `persona_family: partner`) renders zero internal aDNA jargon in visible chrome with no author scrubbing. Verified: re-rendering P6.M3's exact shipped gate data now auto-fixes residual #2; residual #1 fixes with the single new field. Full visible-text jargon scan clean.
- **Additive + gated** — all behavior is conditioned on `persona_family == "partner"` or an explicit new field; the 310 pre-P6.M4 tests stay green, proving non-partner renders are byte-identical. Mirrors P5.M6's additive-opt-in precedent.
- **Two residual seams closed** — the dual-purpose vault id (PC-3) and the override-less reversibility line (PC-4) are the exact two non-overridable residuals the pilot surfaced.
- **Extensible to future families** — `clinician`/`enterprise` families are reserved in `PERSONA_FAMILY_BY_PRESET`; a future clinician-clean or enterprise-clean copy table slots in without a new ADR.
- **LIP references a settled architecture** — authoring this before P7.2 means the workspace-canonical ISS pattern the LIP ratifies includes the partner-copy layer, not a known gap.

### Negative

- **Partner-family renders intentionally change** — wilhelmai / zenzachary gates without copy overrides now render partner-clean copy instead of internal defaults. This is the intended improvement, but it means those two skins' default output is not byte-identical to pre-P6.M4. Mitigated: author overrides still win verbatim; the change is strictly toward jargon-free copy.
- **`provenance_vault_display` is opt-in, not auto-derived** — residual #1 is *fixable*, not auto-fixed, because no generic clean source for the display name exists (the skin `display_name` is itself internal-ish). Authors of partner gates must set it. Acceptable: it is one field, documented in the skill + this ADR.
- **Campaign ADR count moves 2 → 3** — first new ADR since P5.M2; breaks the "ADR count frozen at 2" streak. Deliberate operator choice (formal ratification of a net-new resolution mechanism before the LIP) over the alternative zero-new-ADR slotting under ADR-028.

### Neutral

- **No template changes** — all nine templates already carry `{{provenance_footer_html}}` + `{{post_submit_explainer_html}}` + `{{decision_significance_html}}` placeholders; PC-1..PC-5 are entirely generator-side.
- **`persona_family` composes with persona + skin + preset** — it is a fourth orthogonal classification layer, not a replacement for any of the three.
- **`PARTNER_CLEAN_COPY` rides the controlled-vocabulary re-export pattern** — same single-import-surface shape as `PROVENANCE_DEFAULT_COPY` / `TIER_LABELS_DEFAULT` (D10-C96); not a new mechanism.

## Alternatives Considered

| Alternative | Rejected because |
|---|---|
| **Override fields only (no clean-by-default layer)** | Closes the literal two-residual gap but leaves partner gates internal-by-default; authors must still scrub four other chrome fields per gate. The finding's core value is clean-by-default. |
| **Zero new ADR (slot under ADR-028 + D-cycle ratifications)** | Defensible (matches P5.M6) and was the recommended option, but the operator chose formal ratification: `persona_family` is a net-new resolution layer (not just a new flag/string), and it lands immediately before the LIP seals the pattern canonical. |
| **Key the partner layer off the bare `persona == "partner"` argument** | Would change existing `persona="partner"` renders that have no partner skin/preset (e.g. `TestD9CrossTemplateSweep`), breaking byte-stability. Keying off skin descriptor + resolved preset is conservative and finding-aligned ("partner-family skins"). |
| **Auto-derive `provenance_vault_display` from the skin `display_name`** | The skin display names are themselves internal-ish (`WilhelmAI.aDNA`); no clean generic source exists. An explicit opt-in field is the honest fix. |
| **Reuse "REVERSIBLE" for partner significance** | Semantically wrong for a charter co-sign (a binding/constitutional act is the opposite of "selection can be re-gated"); governance-grade levels are needed. |
| **Per-vault copy overrides in each `iss/` wrapper** | Drift risk; the wrapper contract (ADR-029 ST-3) is intentionally narrow. A substrate-level family default keeps one source of truth; vaults still override per-gate when needed. |

## Cross-References

- **Parent architecture ADR**: `aDNA.aDNA/what/decisions/adr_028_iss_architecture.md` (chrome builders + persona/skin/preset system this extends)
- **Standard-touch twin**: `aDNA.aDNA/what/decisions/adr_029_iss_standard_touch.md` (consumer wrapper contract; persona_family declarable in the skin descriptor)
- **Originating finding**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/aar_p6_3_wilhelmai_pilot.md` (CF→ISS-Partner-Copy-Layer)
- **Mission**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/mission_p6_4_partner_copy_layer.md`
- **Substrate**: `SiteForge.aDNA/what/lib/iss/runtime/generator.py` (`_resolve_persona_family`, `PARTNER_CLEAN_COPY`, `_resolve_chrome_copy`, `DECISION_SIGNIFICANCE_LEVELS`, `PERSONA_FAMILY_BY_PRESET`)
- **Partner skins**: `SiteForge.aDNA/what/lib/iss/skins/wilhelmai/skin.yaml` + `skins/zenzachary/skin.yaml` (declare `persona_family: partner`)
- **Tests**: `SiteForge.aDNA/what/lib/iss/tests/test_generator.py` `TestPartnerCopyLayer` (18 cases)
- **Campaign master**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/campaign_siteforge_iss.md`
- **Originating plan**: `~/.claude/plans/please-read-the-claude-md-enchanted-hinton.md` (P6.M4 plan; operator-approved 2026-05-30)

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-05-30 | mission_p6_4_partner_copy_layer | Initial authoring + ratified (PC-1..PC-5; extends ADR-028) |
