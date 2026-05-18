---
type: adr
adr_number: 011
title: "aDNA semver discipline — two-track Major.Minor-only versioning policy"
status: accepted
created: 2026-05-18
updated: 2026-05-18
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_06_v7_governance_tag
objective: 1
decision_letter: A
ratification_phase: M06_S2_phase_gate
ratified: 2026-05-18
ratified_session: session_stanley_20260518_183851_adna_v2_m06_s2
tags: [adr, decision, campaign_adna_v2_infrastructure, semver, version_policy, governance_track, standard_track, two_track, major_minor_only, no_patch, m06, v7_0_ratification]
---

# ADR-011: aDNA semver discipline — two-track Major.Minor-only versioning policy

## Status

**Accepted** at the M06 S2 phase gate 2026-05-18 (`session_stanley_20260518_183851_adna_v2_m06_s2`). Drafted at M06 S2 entry by Rosetta per M01 Obj 6 §10 step 1 sequencing, sourced from the M01 Obj 6 ADR recommendation artifact ([[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_semver_discipline_adr.md|m01_obj6_semver_discipline_adr.md]]) — the codify-not-invent precedent. Ratified concurrent with the v7.0 git tag execution; the tag IS the ratification event (first Major Governance bump under the explicit policy).

## Context

aDNA already practices a two-track Major.Minor versioning policy. Until this ADR, only one document encoded it — the [[../../../adna/.adna/CHANGELOG.md|`.adna/CHANGELOG.md`]] "Version Policy" section (lines 9-27). That section reads:

> aDNA tracks **two independent version numbers**:
> | Track | File | Field | What it covers |
> | **Governance** | `CLAUDE.md` | `version` (frontmatter) | Vault structure, agent protocol, safety rules, templates, skills |
> | **Standard** | `what/docs/adna_standard.md` | Document title | Normative specification — triad structure, object schemas, FAIR metadata |
> Both tracks use **Major.Minor** versioning (no patch level)…

The policy is correct, comprehensive, and currently only lives in one place. Six concerns flow from that:

| # | Concern | Today's state | Risk |
|---|---|---|---|
| 1 | **No top-level ADR** documents the policy | CHANGELOG only — easy to overlook, easy to overwrite, easy for a future operator to "fix" by adding patch versions | The convention drifts when contributors don't read the CHANGELOG header |
| 2 | **Bump triggers are stated informally** | One table inside CHANGELOG; no examples | Operators second-guess whether their change is Major or Minor |
| 3 | **No-patch rule is implicit** | Stated once in CHANGELOG; no enforcement; every other versioning system defaults to Major.Minor.Patch | An out-of-band `v6.0.1` hotfix tag could appear and the operator would have no standard to refuse it |
| 4 | **Two-track independence is implicit** | CHANGELOG documents both tracks; commit messages and release notes don't always distinguish | A reader sees "v6.0" and doesn't know whether the Standard moved |
| 5 | **v2 campaign is the first Major Governance bump** since the policy was documented | v5.x → v6.0 in CHANGELOG 2026-04-03 was the first; v6.0 → v7.0 in this campaign is the second | If the policy survives this transition cleanly, it is ready to be ratified into ADR form |
| 6 | **`adna_standard.md` carries a stale "End of" footer** | Line 1483 reads "v2.0" but the document title (line 3) reads "v2.2" | Footer is wrong; title is canonical. Fixed at M06 as a one-line audit fix (this campaign). |

The fix is a top-level ADR that **codifies what's already practiced**, plus the one footer correction.

## Decision

**Promote the existing CHANGELOG Version Policy to top-level ADR-011, ratified at the v7.0 tag (M06).**

Five normative elements:

1. **Two tracks, independent.** Governance (`.adna/CLAUDE.md` frontmatter `version:`) and Standard (`.adna/what/docs/adna_standard.md` document title). The tracks bump independently. CHANGELOG entries are keyed by Governance version (primary heading); Standard track changes are noted as sub-line items within entries when they coincide.

2. **Major.Minor only — no patch level.** Both tracks use whole-number-dot-whole-number (e.g., `6.0`, `2.2`). The patch-level apparatus (`X.Y.Z`) is forbidden for these two tracks. Hotfixes are Minor bumps with `Fixed` category in CHANGELOG. Future runtime layers (canvas Round-Trip Protocol, latlab CLI, etc.) can adopt Major.Minor.Patch independently; ADR-011's rule scopes only to Governance and Standard.

3. **Bump triggers documented by example.** Major = breaking changes to vault structure / CLAUDE.md format / frontmatter schema (Governance) OR triad structure / object schemas / FAIR envelope (Standard). Minor = additive — new skills, new templates, new patterns, new lattice types, new optional fields, clarifications, prose tightening. The full bump-triggers matrix is at §4 below.

4. **Tags are immutable.** Every Major or Minor bump must accompany (a) a CHANGELOG entry committed in the same git operation, (b) a git tag matching the version (`v6.0`, `v7.0`, etc.), and (c) an annotated tag with release notes — lightweight tags are insufficient. Reverting / superseding a release is done by a new release with incremented version; never rewrite a tagged release's number or content.

5. **CHANGELOG defense-in-depth.** The CHANGELOG "Version Policy" section stays verbatim, as-is. ADR-011 references it and explains the rationale; the CHANGELOG remains the operational quick-reference. Two sources, same content, cross-linked.

## Why Major.Minor only (no patch level)

| Reason | Detail |
|---|---|
| **Pull-based adoption** | Every operator pulls the template at their own cadence. Patch-level urgency ("you must update to v6.0.1 immediately") doesn't fit — there is no push channel to convey urgency. |
| **No deployable runtime** | Software semver communicates *deployability*; aDNA has no deployable runtime at the Governance/Standard layer. There is no binary to drop in. Two granularities (additive vs. breaking) suffice. |
| **CHANGELOG is the contract** | Every entry must be readable without prior context. Patch versions add a third axis without adding decision-relevant signal — the operator still has to read the entry to know whether it affects them. |
| **Bug fixes are Minor** | CHANGELOG entries already discriminate Added / Changed / Deprecated / Removed / Fixed / Security; the *category* communicates urgency, not the version-number suffix. |
| **Aligns with prose conventions** | aDNA is a *standard*, not a *library*. ISO standards version Major.Minor (ISO 8601:2019, ISO 27001:2022); academic specifications use Major.Minor (HTML 5, OpenAPI 3.1). The patch-level apparatus is a software-deployment convention. |
| **Forward-compatibility** | If aDNA ever ships a deployable runtime layer (e.g., the canvas Round-Trip Protocol becomes a binary tool), *that layer* can adopt Major.Minor.Patch independently. ADR-011 limits the Major.Minor-only rule to Governance + Standard. |

## Bump triggers (codified)

### Governance track

| Type | Major (X.0) | Minor (X.Y) |
|---|---|---|
| Vault structure | ✓ Breaking changes (e.g., v2 flatten) | — |
| CLAUDE.md format | ✓ Frontmatter schema changes, standing-order semantics, agent-protocol changes | Prose tightening, new sections that don't change agent behavior |
| Frontmatter schema | ✓ Removing/renaming/changing-meaning of required fields | ✓ Adding optional fields, new tag categories |
| Clone process | ✓ Repo rename, clone-target changes | URL alias additions, redirect setup |
| Skills | — | ✓ New skills, deprecation of skills (deprecation = additive metadata) |
| Patterns | — | ✓ New patterns, new entity types, new templates |
| Prose | — | ✓ Improvements, dead-link fixes, rewordings |

### Standard track

| Type | Major (X.0) | Minor (X.Y) |
|---|---|---|
| Triad structure | ✓ Removing/renaming/repositioning a leg | New leg sub-categorizations |
| Object schemas | ✓ Removing/renaming required fields (module/dataset/lattice) | Adding optional fields, new lattice type values |
| FAIR envelope format | ✓ Changing the flat↔nested interconversion rules | Adding optional FAIR fields |
| Type vocabulary | ✓ Removing canonical I/O type values | Adding new canonical I/O type values |
| RFC 2119 conformance | ✓ Changing what's MUST/SHOULD/MAY in normative sections | Clarifying ambiguous prose, adding examples |
| Sections | — | New sections, federation stubs, factual fixes |

## Exception / edge-case rules

| Edge case | Rule |
|---|---|
| **Pre-1.0 development** | Not applicable — both tracks already past 1.0. Reserved for any future track that opens at <1.0. |
| **Hotfix urgency** | Minor bump + `Fixed` category in CHANGELOG entry + "Recommended immediate pull" emphasis in the entry header. No patch-level apparatus. |
| **Coordinated bump across tracks** | Both tracks bump in the same release event; CHANGELOG entry header shows both (e.g., `## [v8.0 / Standard v3.0] — YYYY-MM-DD`). Independence preserved; coordination noted. |
| **Reverting / superseding a release** | New release with incremented version + CHANGELOG entry explaining the supersession. **Never** rewrite a tagged release's number or content. Pre-announcement tag deletion is permitted (e.g., to fix a tag pushed before its commit landed); once a release is publicly announced, supersede only. |
| **Out-of-band bump** | Forbidden. Every Major or Minor bump must accompany a CHANGELOG entry committed in the same git operation, plus a git tag matching the version. |
| **Pre-release / RC tags** | Permitted but advisory only. Format: `v7.0-rc1`, `v7.0-beta`. Operators should not pull pre-release tags expecting stability. The next stable Minor/Major bump replaces them. |

## v7.0 = First Major Governance bump under ADR-011

| Change | Class | Evidence |
|---|---|---|
| Repo flatten (`adna/.adna/` → `.adna/`) | **Breaking vault structure** | M03 changes the clone target. Existing operators must run a one-time three-command migration. **Major.** |
| `skill_lattice_publish` family rewrite | **Additive** (existing skill preserved; new skills added) | New skills `skill_vault_publish` + `skill_git_remote_setup` + `skill_deploy` + `skill_publish_tarball`. Pre-existing rsync-pattern operators (Spacemacs) deprecate locally at their own cadence. **Minor for the rewrite alone.** |
| `node.aDNA/` opt-in | **Additive** | Pure additive pattern. No vault is forced to adopt. **Minor.** |
| GitHub repo rename `Agentic-DNA` → `aDNA` | **Breaking clone process** | URLs change. GitHub redirects preserve old clones, but new clones use the new URL. **Major.** |
| `LatticeScope.aDNA` planning campaign seed | **Additive** | Campaign doc only; no template structure changes. Absorbed into v8 P1 (Standing Order #6 — archive, never delete; campaign seed deferred). **Minor.** |
| Naming-convention codification (ADR-009) | **Additive** | Codifies practice already followed in template. Adds enforcement to skills going forward. Per-vault application is the v3 successor's scope. **Minor.** |
| Airlock pattern surface (ADR-008 stub) | **Additive** | M03 ships an `.adna/how/airlock/AIRLOCK.md` stub. **Minor.** |

**Rollup**: Two Major-class changes (flatten + repo rename) + several Minor-class changes = **Major Governance bump v6.0 → v7.0**. Standard track stays at **v2.2** (none of the campaign's changes touch normative spec sections; the v1483-footer correction is editorial).

## Consequences

### Positive

- **Self-consistency restored**: the two-track policy graduates from CHANGELOG-only to ADR-codified, eliminating drift risk.
- **Operator expectation alignment**: future contributors see the policy as a first-class governance document, not an easy-to-overlook CHANGELOG header.
- **v8 and beyond have a clean baseline**: every subsequent bump cites ADR-011; the policy is now load-bearing for the whole release cadence.
- **Patch-level "fix" temptation eliminated**: a future operator considering `v6.0.1` has explicit ADR refusal to point at.

### Negative

- **One additional governance file to maintain.** Mitigation: the CHANGELOG stays the operational quick-reference; ADR-011 is the durable rationale. Cross-link discipline keeps them in sync (Standing Order #10).
- **Marginal increase in onboarding-doc surface area** for new contributors. Mitigation: ADR-011 lives in `what/decisions/` where all governance ADRs live; no special discovery required.

### Neutral

- **No CHANGELOG content changes.** The Version Policy section stays verbatim.
- **No v6.x or earlier bump re-classification.** ADR-011 applies forward from v7.0; historical entries are not re-litigated.
- **Aligns with practice; does not invent new rules.** This is a codification ADR, not a policy change.

## Alternatives considered

| Alternative | Rationale to reject |
|---|---|
| **Adopt Major.Minor.Patch** | Misaligned with pull-based adoption (no push channel for "urgent patch" signal); software-deployment convention does not fit a knowledge-architecture standard. The CHANGELOG category system (Added/Changed/Deprecated/Removed/Fixed/Security) already communicates urgency at a finer grain than a third version-number digit. |
| **Single-track combined version** | Conflates two genuinely independent concerns: operational governance (how vaults are organized + how agents behave) vs. normative specification (what counts as a valid object). The tracks already moved at different cadences (Standard bumped at v5.1 to add federation stubs; Governance bumped at v6.0 for identity rename without Standard motion). A single version would obscure this. |
| **Calendar-based versioning (e.g., `2026.05`)** | Loses the additive-vs-breaking signal in the version number itself. Useful for software-as-a-service shipping schedules; not for a pull-based standard. |
| **Defer ADR-011 to v8 campaign** | v7.0 IS the first Major Governance bump since the policy was documented. Codifying *at* the v7.0 tag (rather than after) prevents one more cycle of CHANGELOG-only governance. |
| **Codify in CHANGELOG only (no ADR)** | The CHANGELOG is operational; the ADR is durable rationale. A future contributor reading governance ADRs without reading the CHANGELOG header would see no version policy at all. Defense-in-depth is cheap; the cost is one file. |

## Forward-references

- **CHANGELOG.md v7.0 entry** ([[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md|paired companion artifact]] §1) — first release governed by ADR-011; cites this ADR in the entry header.
- **`adna_standard.md` line 1483 footer fix** — M06 applies the one-line correction (v2.0 → v2.2) as part of the v7.0 pre-tag commit (this campaign).
- **CLAUDE.md v6.0 → v7.0 frontmatter flip** — M06 executes per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md|version bump checklist]] §2.
- **v8.0 future bump** — uses ADR-011's bump-trigger matrix at §Bump triggers; cites this ADR in the v8.0 CHANGELOG entry header.
- **Future Standard track bumps** — same: cite ADR-011 in entry header.
- **Future runtime-layer versioning** — runtime layers (canvas Round-Trip Protocol, latlab CLI) explicitly opt-out of ADR-011's no-patch rule per §Decision element 2.

## Companion

- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_semver_discipline_adr.md|m01_obj6_semver_discipline_adr.md]] — the M01 Obj 6 ADR-recommendation artifact that produced this ADR. The recommendation is the design memo; this ADR is the ratified decision.
- [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md|m01_obj6_version_bump_checklist.md]] — the M06 executable runbook this ADR ratifies under.
- [[adr_006_github_repo_rename_to_adna.md|ADR-006]] — concurrent v7.0 ratification (URL slug rename). ADR-006 and ADR-011 are both Major-class triggers for v7.0; together they discharge the campaign's "v7.0 ratification cohort" (006, 007, 008, 009, 010, 011).

## Standing Order discharge

| Standing Order | Discharge |
|---|---|
| **#1 Phase gates are human gates** | M06 S2 phase gate ratification; tag follows operator approval (this S2 session) |
| **#5 Every mission gets an AAR** | M06 AAR (Obj 7) records ratification + tag firing |
| **#6 Archive, never delete** | ADR-011 supersedes nothing; CHANGELOG Version Policy section stays verbatim |
| **#7 Dual-audience test** | Developer reads §Decision + §Bump triggers + §Exception rules; newcomer reads §Context + §Why Major.Minor only + §v7.0 = First Major Governance bump |
| **#8 Self-reference mandatory** | This ADR IS produced under the policy it codifies; the v7.0 tag IS its ratification event; the campaign's own v7.0 classification (two Major-class changes → Major Governance bump) demonstrates the rule |
| **#9 Upstream spec is source of truth** | Cites the upstream CHANGELOG "Version Policy" section verbatim; no contradiction; same content cross-linked for defense-in-depth |
| **#10 Cross-link aggressively** | Cross-links to 4 ADRs (006, 008, 009, 010), 2 M01 artifacts (recommendation + runbook), CHANGELOG, adna_standard footer fix — ≥7 wikilinks ✓ |
