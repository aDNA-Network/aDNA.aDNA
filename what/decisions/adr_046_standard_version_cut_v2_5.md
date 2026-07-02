---
type: adr
adr_number: "046"
title: "Standard version cut v2.4 → v2.5 — ADR-044 fold, ratification-record discipline, federation-wrapper scope decision, version-metadata hygiene"
status: accepted
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_champollion
supersedes:
superseded_by:
tags: [adr, decision, standard, version_cut, v2_5, semver, conformance, ratification, federation, champollion, p2]
---

# ADR-046: Standard version cut v2.4 → v2.5

## Status

**Accepted** — ratified at Champollion **G2** with all arms resolved: **D2a = v2.5** · **D2b = Arm A** (absorb — §5.3 gains the `federation/` row) · **D2c = C6 deferred** (model-tier fields wait for the pattern's 3rd-instance trigger). Authored at Champollion M2.2 ([[../../how/campaigns/campaign_champollion/missions/mission_champollion_m2_2_version_cut_adr|brief]], fable tier) from the M2.1 divergence ledger ([[../../how/campaigns/campaign_champollion/artifacts/standard_currency_audit|standard_currency_audit]], F-CHM-201..206); held at `proposed` until the gate per the ratification-record discipline this ADR itself folds (§Decision C3) — making it the **first ADR ratified under its own discipline**. The cut executed 2026-07-02 in `what/docs/adna_standard.md` (C1–C5 + Arm A, §Consequences order); the public image picks it up at M6.1's release candidate via `skill_template_release` (separately operator-gated).

## Ratification

- **Ratifier:** Stanley, Founding Architect (operator). Personas (Rosetta — author/steward of this record) are author/steward only, never ratifier.
- **Gate / reference:** Champollion **G2** — `how/gates/champollion_p2_gate.md` + record `how/gates/champollion_p2_gate.output.md` (operator in-chat: "Your reccomendations are good! Let's move forward.", 2026-07-02; decision D2, arms D2a/D2b/D2c); ratifying session `session_stanley_20260702T154214Z_champollion_g2_ratification`.
- **Ratification date:** 2026-07-02 (same day as authoring — G2 followed M2.2 within the P2 execution day; the discrete gate event is the reference above).
- **Scope:** the **v2.5 cut, change-set C1–C5 with D2b = Arm A**, executed in this vault's `what/docs/adna_standard.md`; **C6 deferred** (not part of the cut; re-arises at the pattern's 3rd instance or a later gate); the image-side fold is **not** authorized here — it rides M6.1's RC through `skill_template_release` at its own operator gate. No pending co-signs.

## Context

The aDNA Universal Standard sits at **v2.4** (2026-06-29, ADR-042 fold). Since that cut, the ratified decision corpus has moved ahead of the written text, and the Champollion M2.1 audit (2026-07-02) measured the gap precisely — the standard-touching surface of the 40-ADR corpus is 8 ADRs, of which 6 are folded, **one is pending-fold (ADR-044)** and **one is unfolded (ADR-045)**, plus two version-metadata defects and one scope question:

1. **F-CHM-202 (HIGH)** — ADR-044 (per-class frontmatter profiles, ratified 2026-06-30) makes `status` optional for `type: directory_index` + `type: coordination` and excludes two nested-instance trees from the conformance walk; the written §7.2/§5.5 still demand the strict base-6 everywhere. The written standard is *stricter than ratified law*: a fork obeying the text over-flags its own template-conformant files. ADR-044's own status block records "the reference instance leads the written standard … (as designed)" — the fold was always queued for the next cut.
2. **Ratification-record discipline (G0-ratified, spec at [[../../how/backlog/idea_upstream_template_ratification_record|idea_upstream_template_ratification_record]] §4)** — the ADR-045 self-ratification incident produced a normative rule set (per-ADR 4-field ratification block; *agents set `proposed` only*; validator check spec) that is decided law in this vault but absent from the standard text. Champollion M1.2 installed it spec-only; folding it normatively is explicitly this ADR's remit.
3. **F-CHM-203 (MED) / escalation E1** — ADR-045 pins `how/federation/<wrapper>/` as "a structural convention of the aDNA Universal Standard," yet `adna_standard.md` never uses the word "federation" (§5.3's optional-subdirectory table has no such row). Either the universal doc absorbs the rule, or ADR-045's wording overreaches. **A scope-boundary decision about what the universal standard defines — the operator's call, posed as arms at G2** (see C4).
4. **F-CHM-201 (HIGH) + F-CHM-205 (LOW)** — the document's end-line still reads "*End of aDNA Universal Standard v2.3*" under the v2.4 title (shipped byte-identical in the public v8.3 image; a recurring defect class — the footer has lagged the title across multiple bumps), and §15.4's version-cut process has no footer==title check to prevent recurrence.
5. **F-CHM-013 residual** — [[../../how/backlog/idea_upstream_model_tier_mission_fields|idea_upstream_model_tier_mission_fields]] (`executor_tier` + ADR-016 budget fields into the mission/session templates) sits at `proposed` with an explicit trigger: "fold ratifies at the 3rd instance **or earlier by operator decision at a Champollion gate**." The model-tiering pattern is at 2/3 instances (Carnot, Champollion) — **not graduated** (see C6).

§15.4 governs the cut mechanics: the standard follows semver on its own track (distinct from the governance version, which stays untouched at 6.0 per the P1/M1.4 F-CHM-008 ruling); **minor versions MUST NOT invalidate conformant instances; major versions MAY break, with migration guidance**.

## Decision (proposed)

Cut **aDNA Universal Standard v2.4 → v2.5** carrying change-set **C1–C5** (C6 = default-out rider). Standard-text edits execute **only after G2 ratifies**, in this vault's `what/docs/adna_standard.md`; the public image ships the same via the next `skill_template_release` (M6.1 release-candidate assembly), preserving the two-gate discipline.

- **C1 — §7.2 per-class frontmatter profile (ADR-044 fold, part 1).** §7.2 gains the ratified refinement: the base-6 fields remain required for content + session entities; **`status` becomes optional for `type: directory_index` and `type: coordination`** (their canonical templates omit it — an index/correspondence record has no lifecycle state). Wording sourced from ADR-044 §1.
- **C2 — §5.5 conformance-walk refinement (ADR-044 fold, part 2).** §5.5 Level-1(4) references the §7.2 profile (instead of restating unconditional base-6), and the conformance-walk definition gains the ratified exclusion: **embedded standalone instance trees are not recursed** (`what/docs/examples/`, `how/templates/template_node_adna_exemplar/`); each such instance validates standalone. Wording sourced from ADR-044 §2.
- **C3 — new §7.7 "Decision-record ratification discipline."** Folds the G0-ratified rule set (idea file §4.1–§4.3), compatibility-split to honor §15.4:
  - **Forward MUST (effective v2.5):** an ADR moving beyond `proposed` MUST carry the 4-field ratification record (ratifier — a named human authority, never an agent/persona · gate/session reference · ratification date · scope of authority incl. pending co-signs). **Agents MAY author fully and set `proposed`; agents MUST NOT set `accepted`/`ratified`/`rejected`.** Lifecycle-neutral back-references exempt.
  - **Retroactive SHOULD:** ADRs accepted before v2.5 SHOULD be backfilled with ratification records; a pre-v2.5 accepted ADR without one is **not** rendered non-conformant (this is what keeps the cut minor — see §Semver rationale).
  - **Validator hook (spec):** the `adna_validate` governance check per idea §4.3 — structure-only (four fields present + non-empty), **warn mode first, promote to fail after backfill**. Implementation rides the G2-close cascade or M6.1, not this authoring mission.
- **C4 — federation-wrapper scope boundary (E1) — TWO ARMS, G2 picks:**
  - **Arm A — absorb (fold ADR-045 into the universal doc):** §5.3's optional-subdirectory table gains one row — `federation/` · "Consumer federation wrappers — one `<wrapper>/` per federated software-element/service graph (ADR-045)" — making the universal standard name the convention its ecosystem already enforces. Minimal: one optional-directory row + the ADR cite; the wrapper *schema* (`federation_ref`) stays in the ecosystem spec corpus.
  - **Arm B — narrow (keep the universal doc apparatus-free):** no standard change; instead ADR-045's Status wording amends "a structural convention of the aDNA Universal Standard" → "a structural convention of the aDNA **ecosystem spec corpus**" (a lifecycle-neutral wording amendment with an Amendment-History row, not a re-ratification). The universal doc stays silent on federation by design; the apparatus remains spec-corpus-only.
  - **Recommendation: Arm A.** The rule governs *where a directory sits in the triad* — exactly §5.3's subject matter — and ~208–216 wrappers fleet-wide already conform (ADR-045 reported range); an optional-row fold is additive and truthful. Arm B is coherent but leaves the standard blind to a convention the whole network builds on, and F-CHM-204's register overload gets worse, not better. *(Either arm also benefits from the M2.3 glossary disambiguation of the "standard" registers, F-CHM-204.)*
- **C5 — version-metadata hygiene.** At cut execution: end-line footer → "*End of aDNA Universal Standard v2.5*" (F-CHM-201; also fixes the shipped-public v2.3 footer at the next image release); changelog comment line added at the top block; **§15.4 gains a version-cut checklist** — title, frontmatter `updated`, changelog line, and end-line footer MUST agree on every bump (F-CHM-205; kills the recurrence vector).
- **C6 — model-tier mission fields (rider, default OUT — recommend defer).** The `executor_tier` + `token_budget_*` template fields are **not graduated** (pattern at 2/3 instances). Default disposition: **defer to the pattern's own 3rd-instance trigger**, keeping this cut clean of not-yet-graduated material. The idea's trigger explicitly allows the operator to **early-ratify at G2** — if exercised, the fields fold as **optional** type-specific frontmatter (§7.5 class, additive, still minor-safe) and ride the same M6.1 template batch. This ADR takes no position beyond the default; the arm exists so G2 can exercise it without a second ADR.

## Semver rationale — why v2.5 (recommended), and the honest v3.0 arm

**Recommendation: v2.5 (minor).** The §15.4 test is instance-invalidation, and every change-set item passes it:

| Item | Compatibility effect on a conformant v2.4 instance |
|------|-----------------------------------------------------|
| C1 (§7.2 profile) | **Relaxes** — files conformant under strict v2.4 remain conformant; previously over-flagged index/coord files *become* conformant. Nothing breaks. |
| C2 (§5.5 walk exclusions) | **Relaxes** — instances failing only inside embedded example trees become conformant; passing instances unaffected. |
| C3 (§7.7 ratification) | **Forward MUST / retro SHOULD** — binds new status transitions only; existing accepted ADRs without blocks stay conformant (backfill recommended, warn-mode validator). No instance invalidated. |
| C4 Arm A (§5.3 `federation/` row) | **Additive optional directory** — no instance required to have it; instances that already do become standard-named. Arm B touches no standard text at all. |
| C5 (metadata hygiene) | **Editorial + process** — no conformance surface. |
| C6 (if exercised) | **Additive optional fields** (§7.5 class) — minor-safe even if early-ratified. |

**The v3.0 arm, stated honestly (not a dodge — the brief's escalation trigger demands the hard call be surfaced):** a major cut is warranted only if G2 wants the ratification-record rule **retroactively mandatory** — i.e. a pre-v2.5 accepted ADR *without* a 4-field block is non-conformant. That genuinely invalidates conformant instances (this vault itself would have been non-conformant until M1.2's repairs) and would trigger §15.4's migration-guidance obligation (a documented backfill pass, essentially the frontmatter-conformance arc rerun for ADRs). **Not recommended:** the SHOULD-backfill + warn→fail validator rollout reaches the identical end-state without a breaking cut, and the M2.1 audit found **zero** breaking-class divergences to bundle with it — a v3.0 now would spend the major number on process discipline alone. Reserve v3.0 for a genuinely structural break.

## Consequences

- **On G2 ratify (execution order):** (1) this ADR's Ratification block filled + `status: accepted` *by the operator gate record*; (2) slug stays `adr_046_standard_version_cut_v2_5.md` (renames only if G2 resolves v3.0); (3) standard-text edits C1/C2/C3/C5 + the C4 resolved arm execute in `what/docs/adna_standard.md` (single explicit-path commit, validator full-pass); (4) `adr_index` regenerates (tally returns to 0 proposed); (5) the image-side fold rides M6.1's release candidate through `skill_template_release` (operator-gated separately, two-gate discipline) — until then the reference instance leads the written public image, exactly as the ADR-044 status block described.
- **Validator:** the C3 §4.3 governance check ships warn-mode at cut execution or M6.1 (implementation deliberately not part of this authoring mission); promote to fail after the retro-backfill pass.
- **Not ratifying (or deferring the cut)** leaves the written standard stricter than ratified law (F-CHM-202) and the shipped image carrying a wrong version footer (F-CHM-201) through launch — both visible to exactly the audience the launch targets.
- **Governance version is untouched** — CLAUDE.md `version: 6.0` and the CHANGELOG's `[Unreleased]` accumulation are the *other* track (§15.4; F-CHM-008 operator ruling stands).

## Alternatives considered

1. **v3.0 now** — rejected as default (no breaking-class content in the audit; see the honest arm above, which G2 can still choose).
2. **Fold without a version bump** ("just fix the text") — rejected: normative changes without a version increment violate the §15.4 discipline the standard imposes on everyone else; the self-referential vault must not exempt itself (SO-8).
3. **Defer the whole cut to launch/P6** — rejected: F-CHM-202 actively misleads forks *today*, and M2.3 + the P3 pattern work want a stable version to write against; deferral compounds the drift the campaign exists to clear.
4. **Split C3 into its own ADR** — considered; rejected for cohesion: the ratification discipline is precisely the kind of governance change a version cut exists to consolidate, and G0 already ratified its substance (only the standard-fold is new here).

## References

- [[../../how/campaigns/campaign_champollion/artifacts/standard_currency_audit|M2.1 standard currency audit]] (F-CHM-201..206 + E1) · [[../../how/campaigns/campaign_champollion/artifacts/findings_ledger|findings ledger]]
- [[adr_044_per_class_frontmatter_profiles|ADR-044]] (fold source for C1/C2) · [[adr_045_wrapper_placement_in_triad|ADR-045]] (C4 subject; ratification-block reference instance)
- [[../../how/backlog/idea_upstream_template_ratification_record|idea_upstream_template_ratification_record]] §4 (C3 normative source, G0-ratified) · [[../../how/backlog/idea_upstream_model_tier_mission_fields|idea_upstream_model_tier_mission_fields]] (C6)
- `what/docs/adna_standard.md` §5.3 · §5.5 · §7.2 · §15.4 (targets) · [[adr_011_adna_semver_discipline|ADR-011]] (two-track versioning)
- Gate: `how/gates/champollion_p2_gate.md` (G2 — pending)
