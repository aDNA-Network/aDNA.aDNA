---
type: mission
mission_id: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
campaign: campaign_adna_v2_infrastructure
campaign_phase: 1
status: in_progress
mission_class: authoring  # M08a authors new artifacts (coord memos, public-announcement workstream); not verification, not implementation
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
opened_at: M02_close_handoff
opened_session: session_stanley_20260509_052916_adna_v2_m08a_s1
spec_completeness: complete  # full Read/Produce blocks + Deliverables + Acceptance criteria authored at session open
estimated_sessions: 2-3  # Session 1 covers spec + Obj 1 (per-vault coord memos); Session 2-3 cover Obj 2-4
prerequisite_missions:
  - mission_adna_infra_planning_01  # M01 produced the upgrade-guide draft + coord-memo template + per-bucket action plan
  - mission_adna_infra_p1_02_ecosystem_matrix  # M02 locked the ecosystem baseline that M08a renders against
prerequisite_adrs:
  - adr_004_campaign_home_stays_in_adna_adna  # accepted
  - adr_005_three_way_vault_boundary  # accepted
  - adr_006_github_repo_rename_to_adna  # accepted at P0 → P1 gate
  - adr_007_outer_adna_claude_md_disposition  # accepted at P0 → P1 gate
  - adr_009_aDNA_naming_convention  # accepted at P0 → P1 gate
ships_to: mission_adna_infra_p1_03_repo_flatten  # M03 consumes M08a's upgrade-guide publication + per-vault memo delivery as the operator-readiness precondition
external_dependencies:
  - WilhelmAI ADR 002 (Apache-2.0 / CC-BY-4.0 + per-surface attribution + first-mention discipline + cross-graph propagation + voice-register interlock)
  - WilhelmAI ADR 010 (publication-timing / embargo rules for WF-affiliated material)
  - WilhelmAI/who/coordination/partner_ecosystem.md (governance-non-over-commit attribution discipline)
tags: [mission, in_progress, adna, infrastructure, p1, m08a, v2_0, upgrade_guide, coord_memos, public_announcement, pre_flatten, multilateral_airlock, authoring]
---

# Mission — M08a: Pre-Flatten Upgrade Guide + Per-Vault Coord Memos + Public-Announcement Coordination

**Phase**: P1 — Ecosystem mapping + upgrade guide ships first + repo flatten + node vault.
**Class**: authoring. M08a renders authored artifacts (per-vault coord memos, finalized
upgrade guide, public-announcement workstream) against the M02 locked ecosystem baseline
and the M01 Obj 8 template + draft inputs. It is the **pre-flatten operator-readiness
mission** — its outputs ship before M03 (repo flatten) lands so existing operators have a
migration path in hand before their `.adna/` structure changes.

> **Spec authored** at the first execution session
> ([[../../../STATE.md|STATE.md]] Last Session block, M08a Session 1). Frontmatter
> `spec_completeness: complete`. Per locked sequencing M02 → **M08a** → M03; M03 row is
> blocked until M08a closes.

---

## Strategic Intent

M01 Obj 8 produced two paired artifacts: the [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|operator-facing v6→v7 upgrade guide draft]]
(13 sections; pre-flatten draft path; M08a destination `.adna/how/docs/upgrade_v6_to_v7.md`)
and the [[artifacts/m01_obj8_per_vault_coord_memo_template.md|per-vault coord memo template]]
(9 sections; 14+ fillable variables; airlock structure inherited from
[[../../../who/coordination/coord_2026_05_08_publish_rewrite.md|the Rosetta ↔ Daedalus
publish-rewrite memo]]). M02 locked the [[artifacts/m02_obj5_ecosystem_baseline_locked.md|operational
ecosystem baseline]] (19-row inventory + naming-convention conformance + per-bucket M05
action plan + §4 handoff manifest enumerating the template variables with sourcing per row).

M08a converts these inputs into **delivered artifacts**. It (a) finalizes the v6→v7 upgrade
guide for publication so external operators discover it via `adna-docs.vercel.app/learn/upgrade-v6-to-v7`,
(b) renders the coord-memo template for ~17 active ecosystem vaults using §4 handoff
manifest variable values, and (c) drives the public-announcement workstream — GitHub release
notes draft for the v7.0 tag (M06), README badge spec, social/comms post draft pointing at
the docs-site upgrade-guide page.

The mission is **multilateral airlock**: the Rosetta ↔ Daedalus publish-rewrite memo was a
*bilateral* cross-graph airlock exercise (one relationship, one mirror); M08a renders **17
parallel airlock relationships** with per-bucket variant clauses. This is the
second-generation cross-graph airlock pattern from `aDNA.aDNA/`, and is itself a self-
referential demonstration of Standing Order #2 (the campaign documents the v7.0 change while
exercising the v7.0 airlock pattern it codifies).

The mission is **non-coercive**: every memo respects each vault's operator schedule. The
guide makes explicit that existing operators can stay on v6 indefinitely; the memos describe
required actions (workspace flatten, publish-skill adoption) and optional actions (airlock
adoption, `node.aDNA/` bootstrap, ADR-009 rename consideration) without imposing deadlines.
ADR 010 embargo timing for Wilhelm-affiliated material is honored — drafts may be authored
locally; delivery is operator-gated.

---

## Hard constraints

- **No outbound partner contact**. All partner-affiliated memos (Wilhelm Foundation × 2,
  TAPP, Super League) are drafted in-vault at `aDNA.aDNA/who/coordination/`. Mirroring into
  partner vaults follows operator approval per memo. Honor WilhelmAI ADR 010 publication-
  timing rules; flag drafts with `delivery_held_until: ADR-010-window` frontmatter.
- **No partner-vault content mutation**. M08a reads partner-vault context (ADRs, prior coord
  memos, AGENTS.md) but does not modify any partner-vault file in this mission. Mirror
  operations into partner vaults are M08b and v3-EC scope.
- **Non-coercive policy**. Memos describe required and optional actions with no enforcement
  language. Existing operators staying on v6 is a valid choice; v3-EC (the ecosystem-
  compliance successor campaign) handles per-vault application at each operator's pace.
- **Airlock structure preserved**. Every per-vault memo inherits the 5-section airlock
  pattern (header → request → handshake → response → co-sign) from the publish-rewrite
  ancestor memo. Per-bucket variant clauses adapt content; structure is invariant.
- **ADR-002 attribution + license discipline**. Wilhelm-affiliated memos preserve Apache-2.0
  + CC-BY-4.0 license bundle and per-surface attribution per WilhelmAI ADR 002 + first-
  mention discipline + governance-non-over-commit attribution discipline (per
  `WilhelmAI.aDNA/who/coordination/partner_ecosystem.md`).
- **Pre-flatten timing**. M08a must close before M03 opens. M03 is blocked until M08a's AAR
  lands and STATE.md flips M03 to `next`.

---

## Objectives

### Obj 1 — Per-vault coord memo authoring (~17 instances)

Render the [[artifacts/m01_obj8_per_vault_coord_memo_template.md|per-vault coord memo
template]] for each of the 17 active ecosystem vaults that need a memo (19 active total
minus `aDNA.aDNA` itself which IS the producer minus `Spacemacs.aDNA` whose coord memo is
already complete via the publish-rewrite ancestor — wait: re-read template §9 says ~17 =
19 - 2 = aDNA + Spacemacs already-handled; verify against M02 §4). Authoring path for all
new instances this session: `aDNA.aDNA/who/coordination/coord_2026_05_09_v7_<vault_name_snake>.md`.

**Read:**
1. [[artifacts/m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] §1 (19-row
   inventory + naming-conformance column) + §3 (locked external-operators answer per
   partner) + §4 (M08a handoff manifest with 10 template variable mappings + per-bucket M05
   action plan)
2. [[artifacts/m01_obj8_per_vault_coord_memo_template.md|M01 Obj 8 per-vault coord memo
   template]] (full) — 9 sections + variable enumeration + per-bucket variant guidance
3. [[../../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor
   memo]] — airlock-pattern source + Spacemacs precedent
4. [[artifacts/m02_obj4_external_operator_readiness.md|M02 Obj 4 external-operator
   readiness note]] — partner-readiness verdicts + ADR 010 embargo flag + per-partner
   authoring constraints
5. `WilhelmAI.aDNA/what/decisions/adr_002_*.md` (per-surface attribution + license bundle —
   read for variant clause; do not mutate)
6. `WilhelmAI.aDNA/what/decisions/adr_010_*.md` (publication-timing embargo — read for variant
   clause; do not mutate)
7. `WilhelmAI.aDNA/who/coordination/partner_ecosystem.md` (governance-non-over-commit
   discipline — read for variant clause; do not mutate)

**Produce:** 17 coord-memo instances at `aDNA.aDNA/who/coordination/coord_2026_05_09_v7_<vault_name_snake>.md`.

**Per-bucket render distribution** (from M02 locked baseline §4 + §1):

| Bucket | Count | Vaults | Memo treatment |
|---|---|---|---|
| LP-internal, conformant | 4 | SiteForge, ComfyForge, CanvasForge, SuperLeague | Standard memo; `{{remote_setup_action}} = noop`; aDNA itself is the producer (no memo) |
| LP-internal, hyphen-flat | 4 | science_stanley, wga, context_commons, la_startup | Standard memo + naming-discretion note (rename is operator-discretionary; v3-EC tracks); wga skips publish-skill block (no `how/skills/`) |
| LP-internal, path-style | 1 | LPWhitepaper | Memo + M05 ADR forward-reference (origin-whitepaper retain-or-convert decision deferred to M05) |
| LP-internal, no remote | 5 | VideoForge, III, VAASLattice, zeta, RareHarness | Memo + first-time-remote-setup invocation; Spacemacs already-handled excluded |
| Joint-venture, no remote | 1 | strategic_interface_protocol | Memo + cross-federation attribution clause (Strategos identity); operator class `joint-venture` |
| External-partner namespaced (Wilhelm) | 2 | RareArchive, WilhelmAI | Drafts only — Apache-2.0 + CC-BY-4.0 license + per-surface attribution per WilhelmAI ADR 002 + governance-non-over-commit discipline + ADR 010 embargo timing; **status: draft, delivery_held_until: ADR-010-window** |

**Total: 17 memos.** Spacemacs already-handled via publish-rewrite memo (excluded). aDNA.aDNA
is the producer (no memo).

**Per-memo mechanical work**:
1. Copy template to target path
2. Replace 14+ `{{VARIABLES}}` from M02 §4 manifest values
3. Apply per-bucket variant clauses (see distribution table above)
4. Set `status: draft` for partner-affiliated memos (Wilhelm × 2 + TAPP + SuperLeague);
   `status: ready` for the 13 LP-internal memos
5. Set `delivery_held_until: ADR-010-window` frontmatter for Wilhelm-affiliated drafts
6. Cross-link to (a) M01 Obj 8 upgrade guide draft, (b) M02 locked baseline, (c) ADRs
   006/007/009 (where relevant), (d) publish-rewrite ancestor memo

**Self-reference (Standing Order #2)**: Each memo is itself a v7.0 airlock-pattern instance
that the v7.0 airlock-pattern stub (ADR-008, M03) ratifies. M08a authors the memos using
the pattern v7.0 codifies — the campaign documents what it does by doing it.

### Obj 2 — Upgrade guide finalization for publication

Finalize the [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|M01 Obj 8 v6→v7 upgrade guide
draft]] for publication. The draft is 13 sections complete; finalization adds: (a) the
actual v7.0 tag date placeholder (left as `YYYY-MM-DD` until M06 fires the tag — M08b will
update post-tag), (b) cross-reference closure with the per-vault coord memos rendered in
Obj 1, (c) docs-site frontmatter for `adna-docs.vercel.app/learn/upgrade-v6-to-v7`
publication, (d) one final dual-audience pass (Standing Order #7) with skill_dual_audience_review.

Pre-flatten initial path: stays at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md`
with finalization edits in place. Post-flatten path (M03+M08b): `.adna/how/docs/upgrade_v6_to_v7.md`.
Docs-site path: `adna-docs/site/src/content/learn/upgrade-v6-to-v7.mdx` (Operation Rosetta
Phase 8 collaboration may sequence the actual MDX authoring; M08a delivers the prose-final
draft).

**Read:**
1. [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide draft]] (full) — 13
   sections; status: draft
2. All 17 per-vault coord memos rendered in Obj 1 — for cross-reference closure
3. [[../../../how/skills/skill_dual_audience_review.md|skill_dual_audience_review.md]] — for
   final audience-pass

**Produce:**
- Finalized [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] with `status:
  finalized` (was `draft`) and §13 status section updated
- New artifact `m08a_upgrade_guide_publication_log.md` documenting the finalization edits +
  dual-audience review verdict + docs-site publication-readiness check

**Defer to Session 2 or later**: actual MDX page authoring at `adna-docs/site/src/content/learn/upgrade-v6-to-v7.mdx`
(Operation Rosetta Phase 8 may be the host for this; coordinate with Phase 8 reopen).

### Obj 3 — Public-announcement workstream

Author the public-announcement artifacts for the v7.0 tag. These do not ship at M08a close
(the tag fires at M06); M08a produces drafts that M06 references and M08b actually publishes.

**Read:**
1. [[artifacts/m01_obj6_version_bump_checklist.md|M01 Obj 6 version-bump checklist]] §6 (GH
   release notes template) + §7 (post-tag verification scripts)
2. [[artifacts/m02_obj5_ecosystem_baseline_locked.md|M02 locked baseline]] §4 (public-
   announcement workstream items)
3. `aDNA.aDNA/README.md` (current state; for badge spec)

**Produce:**
- `m08a_github_release_notes_v7.md` — annotated tag `v7.0` release notes draft (sections:
  Breaking changes / New patterns / Pull-based / Standard track unchanged / Migration
  pointer to upgrade guide / Acknowledgments)
- `m08a_readme_badge_spec.md` — README badge update spec for the Governance v7.0 version
  (adds/updates badge near the top of `README.md`); includes the MD snippet to apply at M06
- `m08a_social_comms_post_draft.md` — short-form (≤280 char + thread) and long-form (blog
  post / mailing list) drafts pointing at `adna-docs.vercel.app/learn/upgrade-v6-to-v7`;
  Wilhelm-affiliated mention honors ADR 010 embargo timing
- Wilhelm Foundation co-announcement coordination note (read-only audit of WilhelmAI
  publication-readiness; flag any WilhelmAI-side announcement integration points)

### Obj 4 — Mission close + AAR + handoff to M03

Per Standing Order #5 (mandatory AAR before mission `completed`), produce
`aar_m08a_upgrade_guide_and_coord_memos.md` (lightweight format). Update mission file
frontmatter `status: in_progress → completed`. Update campaign master M08a row status `next`
→ `completed`; flag M03 row as next. Update STATE.md Last Session block + Next Session
Prompt for M03 opening. Move session file from `sessions/active/` to `sessions/history/2026-05/`.
Commit + push.

**Read:**
1. [[../../../how/templates/template_aar_lightweight.md|template_aar_lightweight.md]] — AAR format
2. [[artifacts/aar_m02_ecosystem_matrix.md|M02 AAR]] — most-recent style precedent

**Produce:** `aar_m08a_upgrade_guide_and_coord_memos.md` + campaign master M08a row update
+ STATE.md updates + session-file close + commit message.

**Hand off to M03**: With upgrade guide finalized + 17 per-vault coord memos delivered (LP-
internal) or drafted (partner-held) + public-announcement workstream queued, M03 (repo
flatten) can land without surprising operators. Locked sequencing: M08a closes → M03 opens.

---

## Inputs from M01 + M02

| Input | Source artifact | Use |
|---|---|---|
| 19-vault locked inventory + naming-conformance + validated_on | `artifacts/m02_obj5_ecosystem_baseline_locked.md` §1 | Obj 1 variable values per memo |
| Per-bucket M05 action plan | `artifacts/m02_obj5_ecosystem_baseline_locked.md` §4 | Obj 1 `{{remote_setup_action}}` mapping |
| Public-announcement workstream items | `artifacts/m02_obj5_ecosystem_baseline_locked.md` §4 | Obj 3 input |
| Partner readiness verdicts + ADR 010 embargo flag | `artifacts/m02_obj4_external_operator_readiness.md` §4 | Obj 1 partner-memo constraints |
| Per-vault coord-memo template (9 sections + 14+ vars) | `artifacts/m01_obj8_per_vault_coord_memo_template.md` | Obj 1 template to render |
| v6→v7 upgrade guide draft (13 sections) | `artifacts/m01_obj8_upgrade_guide_v6_to_v7.md` | Obj 2 input |
| Pre-populated CHANGELOG v7.0 entry skeleton | `artifacts/m01_obj6_version_bump_checklist.md` §6 | Obj 3 release-notes scaffold |
| Airlock-pattern ancestor memo (Spacemacs precedent) | `who/coordination/coord_2026_05_08_publish_rewrite.md` | Obj 1 structural inheritance |
| WilhelmAI ADR 002 (attribution + license) | `WilhelmAI.aDNA/what/decisions/adr_002_*.md` | Obj 1 Wilhelm-affiliated variant clauses (read-only) |
| WilhelmAI ADR 010 (embargo / timing) | `WilhelmAI.aDNA/what/decisions/adr_010_*.md` | Obj 1 + Obj 3 Wilhelm-affiliated timing constraints (read-only) |
| WilhelmAI partner_ecosystem.md (governance-non-over-commit) | `WilhelmAI.aDNA/who/coordination/partner_ecosystem.md` | Obj 1 Wilhelm-affiliated attribution discipline (read-only) |

---

## Deliverables

| # | Deliverable | Obj | Artifact path (relative to vault root) |
|---|---|---|---|
| 1.01-1.13 | 13 LP-internal per-vault coord memos | 1 | `who/coordination/coord_2026_05_09_v7_<vault>.md` × 13 |
| 1.14-1.16 | 3 partner-affiliated coord memo drafts (Wilhelm × 2 + TAPP) | 1 | `who/coordination/coord_2026_05_09_v7_<vault>.md` × 3 (`status: draft`) |
| 1.17 | Engagement-variant memo (SuperLeague via Smarter With Science LLC) | 1 | `who/coordination/coord_2026_05_09_v7_superleague.md` (`status: draft`) |
| 2 | Finalized v6→v7 upgrade guide | 2 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md` (in-place finalization) |
| 2b | Upgrade-guide publication log | 2 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_upgrade_guide_publication_log.md` |
| 3a | GitHub release notes v7.0 draft | 3 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_github_release_notes_v7.md` |
| 3b | README badge spec | 3 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_readme_badge_spec.md` |
| 3c | Social/comms post draft | 3 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_social_comms_post_draft.md` |
| 4 | Mission AAR | 4 | `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m08a_upgrade_guide_and_coord_memos.md` |

**Total: 17 coord memos + 5 campaign artifacts + 1 AAR = 23 deliverables.** This session
(Session 1) executes Obj 1 (deliverables 1.01-1.17). Sessions 2-3 execute Obj 2-4
(deliverables 2, 2b, 3a, 3b, 3c, 4).

---

## Acceptance criteria

- [ ] 17 per-vault coord memos rendered with all 14+ `{{VARIABLES}}` substituted (zero
      `grep '{{' <memo>` matches across all 17 instances)
- [ ] Per-bucket variant clauses applied correctly: 4 hyphen-flat memos include naming-
      discretion note + wga variant skips publish-skill block; LPWhitepaper memo includes
      M05 ADR forward-reference; 5 no-remote memos include `skill_git_remote_setup`
      invocation; SuperLeague memo includes engagement-vehicle clause; SIP memo includes
      cross-federation attribution clause
- [ ] All 4 partner-affiliated memos (Wilhelm × 2 + TAPP + SuperLeague engagement-variant)
      have `status: draft` + `delivery_held_until: ADR-010-window` (or
      `delivery_held_until: operator-approval` for non-Wilhelm) frontmatter; none mirrored
      into partner vaults this mission
- [ ] All 13 LP-internal memos have `status: ready` (delivery operator-discretionary post-
      M08a-close)
- [ ] Each memo inherits the 5-section airlock pattern (header → request → handshake →
      response → co-sign) from `coord_2026_05_08_publish_rewrite.md`
- [ ] Upgrade guide finalized with `status: finalized`; dual-audience pass verdict recorded
      in `m08a_upgrade_guide_publication_log.md`
- [ ] GitHub release notes draft, README badge spec, social/comms post draft authored;
      Wilhelm-affiliated mention in social/comms honors ADR 010 embargo timing
- [ ] `aar_m08a_upgrade_guide_and_coord_memos.md` landed in lightweight format (Standing
      Order #5)
- [ ] Mission file frontmatter `status: in_progress → completed`
- [ ] Campaign master M08a row flipped `next → completed`; M03 row noted as next
- [ ] STATE.md Last Session block + Next Session Prompt updated for M03 opening
- [ ] Session file moved to `sessions/history/2026-05/`; commit + push
- [ ] No outbound partner contact, no partner-vault mutation, no premature delivery of
      embargo-held memos (per Hard constraints §)

---

## Cross-references

- [[../campaign_adna_v2_infrastructure.md|Campaign master]] — mission tree; M08a row
- [[mission_adna_infra_planning_01.md|M01 mission spec]] — predecessor (closed; Obj 8 produced template + draft inputs)
- [[mission_adna_infra_p1_02_ecosystem_matrix.md|M02 mission spec]] — predecessor (closed; locked the baseline this mission renders against)
- [[artifacts/m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] — primary input
- [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|M01 Obj 8 upgrade guide draft]] — Obj 2 input
- [[artifacts/m01_obj8_per_vault_coord_memo_template.md|M01 Obj 8 coord memo template]] — Obj 1 template
- [[artifacts/m02_obj4_external_operator_readiness.md|M02 Obj 4 readiness note]] — Obj 1 partner constraints
- [[../../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor memo]] — airlock structure source
- [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — repo rename context
- [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — outer-wrapper retirement context
- [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — naming convention authority for memo per-bucket variants
- [[../../../STATE.md|STATE.md]] — operational snapshot (updated at Obj 4)
- [[../../../how/templates/template_aar_lightweight.md|template_aar_lightweight.md]] — Obj 4 AAR format
- [[../../../how/skills/skill_dual_audience_review.md|skill_dual_audience_review.md]] — Obj 2 finalization aid

## Status

**Mission in progress.** Spec authored at session open
(`session_stanley_20260509_052916_adna_v2_m08a_s1`, 2026-05-09). Frontmatter
`spec_completeness: complete`; `status: in_progress`. Session 1 scope: Obj 1 (per-vault
coord memo authoring; 17 instances). Sessions 2-3 will close Obj 2 (upgrade guide
finalization), Obj 3 (public-announcement workstream), Obj 4 (mission close).

**Self-reference (Standing Order #2)**: This spec demonstrates the authoring-mission class
working as designed: prior planning + verification missions (M01 + M02) produced template +
locked baseline; M08a is the rendering pass that converts those inputs into delivered
artifacts. The spec also exercises Standing Order #7 (dual-audience): §Strategic Intent
reads naturally for any operator unfamiliar with the campaign; §Hard constraints + §
Acceptance criteria are technically precise enough that a session-level checklist can
mechanically discharge them.
