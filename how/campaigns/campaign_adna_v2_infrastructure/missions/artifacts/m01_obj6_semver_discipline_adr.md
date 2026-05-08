---
type: artifact
artifact_type: adr_recommendation
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 6
target_mission: M06  # M06 ratifies + tags v7.0; the formal top-level ADR (ADR-011) is drafted at M06 start
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj6, adr_recommendation, semver, version_policy, governance_track, standard_track, m06, v7_0, adr_011_forward_ref]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # source: 19-vault inventory; v7.0 bump blast radius
  - m01_obj1_current_state.md              # source: Governance v6.0 + Standard v2.2 baseline
  - m01_obj4_publish_naming_adr.md         # pattern source for this recommendation artifact
  - m01_obj5_github_minimalism_audit.md    # source: M03/M06 actions feeding the v7.0 changelog entry
  - m01_obj6_version_bump_checklist.md     # paired sibling — the executable runbook for M06
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md
  - adr_005_three_way_vault_boundary.md
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-008 (airlock template stub, M03), ADR-009 (naming convention, M07), ADR-010
  # (publish-naming, M05), ADR-011 (semver discipline + v7.0 ratification, M06) are
  # forward-references — slots only at this stage.
---

# M01 Obj 6 — Semver Discipline ADR Recommendation (M06-bound)

> **Deliverable 11a of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 11). Recommends the codification of aDNA's two-track Major.Minor versioning policy as a top-level ADR (ADR-011), to be drafted at M06 execution start and ratified at the v7.0 tag. Companion to [[m01_obj6_version_bump_checklist.md|m01_obj6_version_bump_checklist.md]] (the executable runbook M06 uses).

This is an **ADR-recommendation artifact** — *not* a top-level ADR. It records the campaign's preferred resolution and supplies M06 with the analysis needed to draft the formal ADR-011. The pattern matches [[m01_obj4_publish_naming_adr.md|m01_obj4_publish_naming_adr.md]] (which recommended ADR-010 to M05) and the S2 S2 ADR-006/007 drafts (which were authored against [[m01_obj2_migration_runbook.md|m01_obj2_migration_runbook.md]]).

---

## §1 The semver problem

aDNA already practices a two-track Major.Minor versioning policy — but only one document encodes it: the [[../../../../../adna/.adna/CHANGELOG.md|`adna/.adna/CHANGELOG.md`]] "Version Policy" section (lines 9-27). That section reads:

> aDNA tracks **two independent version numbers**:
> | Track | File | Field | What it covers |
> | **Governance** | `CLAUDE.md` | `version` (frontmatter) | Vault structure, agent protocol, safety rules, templates, skills |
> | **Standard** | `what/docs/adna_standard.md` | Document title | Normative specification — triad structure, object schemas, FAIR metadata |
> Both tracks use **Major.Minor** versioning (no patch level)…

The policy is correct, comprehensive, and currently **only** lives in one place. Six concerns flow from this:

| # | Concern | Today's state | Risk |
|---|---|---|---|
| 1 | **No top-level ADR** documents the policy | CHANGELOG only — easy to overlook, easy to overwrite, easy for a future operator to "fix" by adding patch versions | The convention drifts when contributors don't read the CHANGELOG header |
| 2 | **Bump triggers are stated informally** | One table inside CHANGELOG; no examples | Operators second-guess whether their change is Major or Minor; v6.0 entries (e.g., AAR mandate, frontmatter schema additions) may have crossed the line either way |
| 3 | **No-patch rule is implicit** | Stated once in CHANGELOG; no enforcement; every other versioning system (npm, pip, GitHub releases) defaults to Major.Minor.Patch | A v6.0.1 hotfix tag could appear out-of-band and the operator would have no documented standard to refuse it |
| 4 | **Two-track independence is implicit** | CHANGELOG documents both tracks; commit messages and release notes don't always distinguish | A reader sees "v6.0" and doesn't know whether the Standard moved (it didn't from v5.0 → v6.0; it moved in v5.1) |
| 5 | **v2 campaign is the first Major Governance bump** since the policy was documented | v5.x → v6.0 in CHANGELOG entry 2026-04-03 was Major Governance (identity rename + vault-detection changes); v6.0 → v7.0 in this campaign is the second | v7.0 is the right test: if the policy survives this transition cleanly, it's ready to be ratified into ADR form |
| 6 | **`adna_standard.md` carries a stale "End of" footer** | Line 1483: "*End of aDNA Universal Standard v2.0*" — but the document title (line 3) reads "v2.2" | Surfaced during S2 S4 reading pass (M01 Obj 1 §3). Footer is wrong; title is canonical. M07 audit fixes the footer. |

The fix (recommendation §2) is a top-level ADR that **codifies what's already practiced**, plus one footer correction.

---

## §2 Recommendation

**Promote the existing CHANGELOG Version Policy to top-level ADR-011, drafted at M06 execution start, ratified to `accepted` at the v7.0 tag.**

| Element | Disposition | Owner |
|---|---|---|
| **A** | **Draft ADR-011** at `what/decisions/adr_011_aDNA_semver_discipline.md` (`status: proposed`) at M06 execution start. Codifies two-track Major.Minor-only policy verbatim from CHANGELOG lines 9-27, expanded with examples, bump triggers, and exception rules. | M06 (Rosetta) |
| **B** | **Ratify ADR-011 to `accepted`** when the v7.0 git tag lands (`git tag v7.0`). The tag IS the ratification event — the policy must be in force at the moment its first ADR-codified Major bump executes. | M06 phase gate (operator) |
| **C** | **CHANGELOG Version Policy section stays** — verbatim, as-is. ADR-011 references it and explains the rationale; CHANGELOG remains the operational quick-reference. Defense-in-depth: two sources, same content, cross-linked. | M06 |
| **D** | **Fix the stale "End of" footer** in [[../../../../../adna/.adna/what/docs/adna_standard.md|`adna/.adna/what/docs/adna_standard.md`]] line 1483 (`*End of aDNA Universal Standard v2.0*` → `*End of aDNA Universal Standard v2.2*`). One-line audit-pass fix. | M07 (Obj 7) |
| **E** | **Standard track stays at v2.2** — no change in this campaign. The v7.0 CHANGELOG entry explicitly notes "Standard track: no change." | M06 |
| **F** | **Governance bumps to v7.0** — ratifies the campaign's M02-M11 changes (flatten + node.aDNA + publish-skill rewrite + LatticeScope.aDNA + minimalism + naming-convention). | M06 |

The recommendation is **codify-not-invent**. ADR-011 documents what the CHANGELOG header has stated since v5.2 (when the CHANGELOG itself was added). The ADR adds: (a) durable top-level document type, (b) bump-trigger examples, (c) exception/edge-case rules.

---

## §3 Why Major.Minor only (no patch level)

| Reason | Detail |
|---|---|
| **Pull-based adoption** | Every operator pulls the template at their own cadence ([[../mission_adna_infra_planning_01.md|mission §Obj 6]] §Upgrade signal: *"The template CHANGELOG is the canonical upgrade signal. Vault operators who `git pull` their `.adna/` clone will see the CHANGELOG entry. No push mechanism is needed."*). Patch-level urgency ("you must update to v6.0.1 immediately") doesn't fit the model — there is no push channel to convey urgency. |
| **No deployable runtime** | Software semver communicates *deployability* — patch = drop-in compatible binary; minor = additive API; major = breaking API. aDNA has **no deployable runtime** at the Governance/Standard layer. There is no binary to drop in. The thing that gets "deployed" is operator attention to a CHANGELOG entry. Two granularities (additive vs. breaking) suffice. |
| **CHANGELOG is the contract** | Every entry must be readable without prior context. Patch versions add a third axis (Major / Minor / Patch) without adding decision-relevant signal — the operator still has to read the entry to know whether it affects them. |
| **Bug fixes are Minor** | The natural temptation for a third level is "what if I just need to fix a typo?" — that's Minor. CHANGELOG entries already discriminate Added / Changed / Deprecated / Removed / Fixed / Security; the *category* communicates urgency, not the version-number suffix. v5.7's "Fixed: `validate_lattice.py` → `lattice_validate.py` (correct script name)" is a Fixed-class Minor bump example. |
| **Aligns with prose conventions** | aDNA is a *standard*, not a *library*. ISO standards version Major.Minor (ISO 8601:2019, ISO 27001:2022); RFCs increment integers (RFC 9110); academic specifications use Major.Minor (HTML 5, OpenAPI 3.1). The patch-level apparatus is a software-deployment convention; aDNA inherits the standards convention. |
| **Forward-compatibility** | If aDNA ever ships a deployable runtime layer (e.g., the canvas Round-Trip Protocol becomes a binary tool), *that layer* can adopt Major.Minor.Patch independently. ADR-011 limits the Major.Minor-only rule to the Governance and Standard tracks specifically, leaving runtime libraries free to use the convention they need. |

Concretely: a hotfix to the template that operators should pull immediately is announced via a Minor bump + a `Fixed` CHANGELOG entry + a Standing-Order-#3-style emphasis line in the entry header (not a third version-number digit).

---

## §4 Two-track policy details (codified in ADR-011)

### Tracks

| Track | Canonical location | Field | What it covers | Currently at |
|---|---|---|---|---|
| **Governance** | `adna/.adna/CLAUDE.md` | `version:` (frontmatter) | Vault structure, agent protocol, safety rules, templates, skills, ontology, the meta-machinery | **v6.0** (verified S2 S4 2026-05-08) |
| **Standard** | `adna/.adna/what/docs/adna_standard.md` | Document title (`title:` field + first-line H1) | Normative specification — triad structure, object schemas, FAIR metadata, RFC 2119 conformance rules | **v2.2** (verified S2 S4 2026-05-08; line 3 title canonical; line 1483 stale footer fixed by recommendation §2-D) |

### Bump triggers

| Type | Governance Major (X.0) | Governance Minor (X.Y) |
|---|---|---|
| Vault structure | ✓ Breaking changes (e.g., the v2 flatten) | — |
| CLAUDE.md format | ✓ Frontmatter schema changes, standing-order semantics, agent-protocol changes | Prose tightening, new sections that don't change agent behavior |
| Frontmatter schema | ✓ Removing/renaming/changing-meaning of required fields | ✓ Adding optional fields, new tag categories |
| Clone process | ✓ Repo rename, clone-target changes (e.g., v2's symlink removal) | URL alias additions, redirect setup |
| Skills | — | ✓ New skills, deprecation of skills (deprecation = additive metadata) |
| Patterns | — | ✓ New patterns, new entity types, new templates |
| Prose | — | ✓ Improvements, dead-link fixes, rewordings |

| Type | Standard Major (X.0) | Standard Minor (X.Y) |
|---|---|---|
| Triad structure | ✓ Removing/renaming/repositioning a leg | New leg sub-categorizations |
| Object schemas | ✓ Removing/renaming required fields (module/dataset/lattice) | Adding optional fields, new lattice type values |
| FAIR envelope format | ✓ Changing the flat↔nested interconversion rules | Adding optional FAIR fields |
| Type vocabulary | ✓ Removing canonical I/O type values | Adding new canonical I/O type values |
| RFC 2119 conformance | ✓ Changing what's MUST/SHOULD/MAY in normative sections | Clarifying ambiguous prose, adding examples |
| Sections | — | New sections, federation stubs, factual fixes |

### Independence

The two tracks bump independently. Per CHANGELOG line 27 (verbatim):

> Changelog entries are organized by **governance version** (primary heading). Standard version changes are noted within entries when they coincide.

ADR-011 retains this convention: every CHANGELOG entry is keyed by Governance version; Standard track changes are sub-line items within the entry.

Examples from history:

| CHANGELOG entry | Governance | Standard |
|---|---|---|
| v5.1 (2026-03-18) | Bumped 5.0→5.1 | Bumped 2.1→2.2 (federation stubs) — noted in §Standard sub-line |
| v5.2 (2026-03-19) | Bumped 5.1→5.2 (CHANGELOG added) | unchanged |
| v6.0 (2026-04-03) | **Bumped 5.7→6.0** (identity rename, vault-detection changes) | unchanged |
| v7.0 (this campaign, 2026-05-XX) | **Bumped 6.0→7.0** (flatten + node.aDNA + publish family + minimalism + naming convention) | unchanged |

### Exception / edge-case rules

| Edge case | Rule |
|---|---|
| **Pre-1.0 development** | Not applicable — both tracks already past 1.0. Reserved for any future track that opens at <1.0. |
| **Hotfix urgency** | Minor bump + `Fixed` category in CHANGELOG entry + "Recommended immediate pull" tag in the entry header. No patch-level apparatus. |
| **Coordinated bump across tracks** | Both tracks bump in the same release event; CHANGELOG entry header shows both (e.g., `## [v8.0 / Standard v3.0] — YYYY-MM-DD`). Independence preserved; coordination noted. |
| **Reverting / superseding a release** | New release with incremented version + CHANGELOG entry explaining the supersession. **Never** rewrite a tagged release's number or content. Tags are immutable per Standing Order #6 (archive, never delete). |
| **Out-of-band bump** | Forbidden. Every Major or Minor bump must accompany a CHANGELOG entry committed in the same git operation, plus a git tag matching the version (`v6.0`, `v7.0`, etc.). |
| **Pre-release / RC tags** | Permitted but advisory only. Format: `v7.0-rc1`, `v7.0-beta`. Operators should not pull pre-release tags expecting stability. The next stable Minor/Major bump replaces them. |

---

## §5 v2 campaign = Major Governance bump → v7.0

| Change | Class | v7.0 evidence |
|---|---|---|
| Repo flatten (`adna/.adna/` → `.adna/`) | **Breaking vault structure** | M03 changes the clone target. Existing operators must run a one-time three-command migration (per [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §2). Major. |
| `skill_lattice_publish` family rewrite | Mostly **additive** (existing skill kept; new skills added) — but the *expected publishing flow* changes from rsync to git push | Borderline. The existing skill is preserved (per ADR-010 recommendation). Operators who never used the rsync pattern see only additions. Operators who did (Spacemacs) deprecate their local skill at their own pace per the v3 successor. **Net classification: Minor for the rewrite itself, Major for the campaign as a whole** because of the flatten. |
| `node.aDNA/` opt-in | Additive | Pure additive pattern. No vault is forced to adopt. Minor. |
| GitHub repo rename `Agentic-DNA` → `adna` | Breaking clone process | URLs change. GitHub redirects preserve old clones, but new clones use the new URL. Major. |
| `LatticeScope.aDNA` planning campaign seed | Additive | M10 produces a campaign doc; no template structure changes here. Minor. |
| Naming-convention codification (ADR-009) | Additive — codifies practice already followed in template | Existing template files already follow `<name>.aDNA/` form ([[m01_obj5_github_minimalism_audit.md|Obj 5 §7]] N-1). ADR-009 adds enforcement to skills going forward. Minor for the ADR; the per-vault application is the v3 successor's scope (operator-discretionary). |
| Airlock pattern surface (ADR-008 stub) | Additive | M03 ships a `.adna/how/airlock/AIRLOCK.md` stub. Minor. |

**Rollup**: Two Major-class changes (flatten + repo rename) + several Minor-class changes = **Major Governance bump v6.0 → v7.0**. Standard track unchanged (none of the campaign's changes touch normative spec sections — confirmed Stage 1 review per [[../mission_adna_infra_planning_01.md|mission §Obj 6]] locked decision 2026-05-07).

---

## §6 Migration narrative (operator-facing, dual-audience)

**Developer reads**: ADR-011 codifies aDNA's two-track Major.Minor versioning. Major = breaking change to vault structure / CLAUDE.md format / frontmatter schema (Governance) or triad / object schemas / FAIR envelope (Standard). Minor = additive. No patch level. CHANGELOG entries are keyed by Governance version; Standard sub-lines when coincident. Tags are immutable. Hotfixes are Minor + `Fixed` category. The v2 campaign is a Major Governance bump (v6.0 → v7.0); Standard stays at v2.2.

**Newcomer reads**: The aDNA standard has two version numbers. One says "the way you organize your project changed" (Governance). The other says "the rules for what counts as a valid project changed" (Standard). They move independently. Both use whole-number-dot-whole-number (like 6.0 or 2.2). There's no third dot — if it's worth a new version number, it's worth at least a 0.1 jump. When you see a new version, read the CHANGELOG entry: it tells you whether you need to do anything. Most of the time you just `git pull` your `.adna/` clone and the new entry shows up.

The migration from v6.0 to v7.0 is a Governance bump only. The Standard stays at v2.2. The CHANGELOG entry M06 writes will tell you which of your projects (if any) need attention, what to do, and how to verify success. The detailed runbook is at [[upgrade_v6_to_v7.md|`upgrade_v6_to_v7.md`]] (M08a publishes — pre-flatten so you have it before your structure breaks).

---

## §7 Forward-references

- **ADR-011** (`what/decisions/adr_011_aDNA_semver_discipline.md`) — top-level ADR drafted at M06 execution start (`status: proposed`); ratified to `accepted` when the v7.0 git tag lands. M06 carries the draft; the operator approves at the M06 → M07 phase gate.
- **CHANGELOG.md v7.0 entry** ([[m01_obj6_version_bump_checklist.md|paired companion artifact]] §1) — uses the policy from ADR-011; includes "Standard track: no change" line per recommendation §2-E.
- **`adna_standard.md` line 1483 footer fix** — M07 absorbs the one-line correction (recommendation §2-D); flagged as a finding in [[m01_obj7_repo_review_audit_findings.md|the M01 Obj 7 audit]] §(c) template-completeness sub-check.
- **CLAUDE.md v6.0 → v7.0 frontmatter flip** ([[m01_obj6_version_bump_checklist.md|version bump checklist]] §2) — M06 executes; this recommendation is the design.
- **M11 final review** — verifies ADR-011 is `accepted` and CHANGELOG entry is consistent with the bump triggers ADR-011 codified.

---

## §8 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference check**: This ADR-recommendation IS produced under the policy it recommends. The campaign's own structure (Major bump = v7.0 because of vault-structure breaking change) demonstrates the rule the ADR codifies. If the campaign's classification were ambiguous under ADR-011 (e.g., a campaign that did *only* additive work but called itself a Major bump), the recommendation would be inconsistent with itself.

The campaign's classification is unambiguous:
- v2 has at least two Major-class changes (repo flatten + repo rename). ✓ Major.
- v2's Major-class changes are **breaking** (operators must take action — re-clone or migrate). ✓ Major (not just additive).
- v2 does not change Standard-track normative content. ✓ Standard track unchanged.

The recommendation IS the campaign's own self-classification audit, formalized.

**Dual-audience test**:

- **Developer**: §3 (no-patch reasoning), §4 (bump triggers + edge cases), §5 (campaign classification matrix), §7 (forward-references). All actionable.
- **Newcomer**: §1 (the problem framing), §2 (one-paragraph recommendation), §6 (migration narrative). All clear without prior context.

§3 (no-patch reasoning) deliberately includes the rationale (ISO standards convention, RFC convention) to address the most common "but every other versioning system has Patch" objection upfront. This is the section where a developer with prior software-versioning intuition will pause; addressing the objection inline keeps the dual-audience contract.

---

## §9 Ratification

**Path to ratification**: M06 drafts ADR-011 (`status: proposed`) at execution start. The operator reviews ADR-011 against this recommendation at the M06 phase gate; on approval, ADR-011 flips to `status: accepted` and the v7.0 git tag is created. The two events are coupled — the tag IS the ratification act. M06 cannot proceed past the tag without `accepted` status; ADR-011 has no operational meaning until the tag exists.

**Standing-Order discharge**:

| Standing Order | Discharge |
|---|---|
| **#1 Phase gates are human gates** | M06 phase gate ratifies ADR-011; tag follows operator approval |
| **#2 Self-reference mandatory** | §8 above; campaign IS its own classification example |
| **#5 Every mission gets an AAR** | M01 AAR (S2 S6 or S2 S7) carries this recommendation as a deliverable; M06 AAR ratifies + records the tag |
| **#6 Archive, never delete** | ADR-011 supersedes nothing; CHANGELOG Version Policy section stays as-is for defense-in-depth |
| **#7 Dual-audience test** | §8 above; both audiences served |
| **#8 Self-reference is mandatory** | §8 above |
| **#9 Upstream spec is source of truth** | This recommendation cites the upstream CHANGELOG verbatim (lines 9-27); ADR-011 references it; no contradiction |
| **#10 Cross-link aggressively** | This file links to: 5 related artifacts, 4 related ADRs, the CHANGELOG, the Standard, and the M06/M07/M08a/M11 forward references. ≥10 cross-links ✓ |

**Status**: Complete. Recommendation ready for M06 ADR-011 drafting. Companion runbook is the paired [[m01_obj6_version_bump_checklist.md|version bump checklist]] (deliverable 11b).
