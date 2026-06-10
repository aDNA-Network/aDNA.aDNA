---
type: artifact
artifact_type: campaign_amendment_log
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
session: session_stanley_20260508_193509_adna_v2_m01_amendment
amendment_label: "Stage 2 Session 2.5 — Campaign Amendment Session"
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, amendment_log, m01, campaign_amendment, airlock, naming_convention, successor_campaign, governance]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md
  - m01_obj1_current_state.md
  - m01_obj2_migration_runbook.md
  - m01_obj3_node_adna_design.md
  - m01_refinement_log.md  # Stage 1 antecedent
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md
  - adr_005_three_way_vault_boundary.md
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
related_campaigns:
  - campaign_adna_v3_ecosystem_compliance  # successor stub seeded by this amendment
---

# M01 Campaign Amendment Log — Stage 2 Session 2.5

> **Amendment artifact** — analogous to `m01_refinement_log.md` (Stage 1 refinement
> output) but applied at the campaign-master + mission-spec level rather than the
> deliverable level. Records the rationale, scope, and outcomes of the **Campaign
> Amendment Session** that ran 2026-05-08 between Stage 2 Session 2 (commit `441f6b9`)
> and Stage 2 Session 3 (the next M01 execution session).

---

## §1 Why amendment was needed

Stage 2 Session 2 (S2 S2) closed cleanly with deliverables 3–6 of M01 landed (ADR-006,
ADR-007 drafted as `proposed`; `m01_obj2_migration_runbook.md` + `m01_obj3_node_adna_design.md`
landed). The wind-down review surfaced **two integration concerns** that the campaign's
existing mission tree did not yet account for:

### Concern 1: Airlock pattern

A v0.1 cross-vault coordination pattern exists in three vaults:
- `III.aDNA/how/airlock/AIRLOCK.md` (canonical, 5 entry paths: A-Text, B-Web/Visual, C-Code, D-Video, E-Vault Maintenance)
- `VideoForge.aDNA/how/airlock/AIRLOCK.md` (Forge.aDNA reference, 4 entry paths)
- `CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md` (worked example — VideoForge → CanvasForge cross-forge request)

Plus a v0.2 standardization input artifact:
- `III.aDNA/who/coordination/coord_2026_05_08_airlock_v0_2_videoforge_findings.md` (5-gap analysis, filed for III.aDNA Campaign C)

Airlock is **vault-agnostic** (any vault can adopt it) and **orthogonal to v2 mission
scope** (it doesn't depend on the flatten, the publish-skill rewrite, or the v7.0 tag).
But its **template-level integration is small** (one stub file at
`/.adna/how/airlock/AIRLOCK.md` mirroring III canonical + a `skill_project_fork.md`
update to copy the airlock dir into new project forks) and **lands cheapest with M03**
(when the template is being touched anyway, rather than as a separate after-the-fact
churn).

Without an amendment, M03 would ship the v7.0 flatten without airlock awareness, and
adding airlock to the template later would force a 7.1 governance bump for a change
that costs ~30 minutes if folded in now.

### Concern 2: Naming / repo / usage convention

`m01_obj0_ecosystem_matrix.md` (Stage 2 Session 1) inventoried 19 active vaults and
surfaced non-uniform repo naming:
- 4 hyphen-flat names: `science-stanley-adna`, `wga-adna`, `context-commons-adna`,
  `LAStartupLattice`
- 7 vaults with no remote at all
- 1 with non-standard local-path remote (LPWhitepaper → `/Users/stanley/aDNA/whitepaper`)
- Conformant: `aDNA.aDNA.git`, `SiteForge.aDNA.git`, `CanvasForge.aDNA.git`,
  `ComfyForge.aDNA.git`, `SuperLeague.aDNA.git`, `WilhelmAI.git` (external),
  `rare-archive-vault.git` (external)

The v7.0 governance bump is the natural inflection to **codify** the convention
`<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo. **Per-vault rename application
is too big for v2** (touches 19 vaults; many external-org-owned), but the convention
itself can be codified now via an ADR-009 slot in M07. The application work moves to
the post-campaign successor.

### Concern 3 (implicit): Successor campaign visibility

Without a seeded stub, the successor work would land as an after-the-fact M11
deliverable — visible only at v2 close. Operator preference (confirmed via plan-mode
AskUserQuestion 2026-05-08) was to seed the stub **now** so the per-vault application
scope is visible / queued during v2 execution rather than a surprise at v2 close.

---

## §2 What changed (diff summary)

### Files edited

#### `campaign_adna_v2_infrastructure.md` (campaign master) — 6 edits

1. **Frontmatter**: `title` updated to add "Airlock + Naming Convention" suffix; `updated: 2026-05-07 → 2026-05-08`; new `amendments:` field with this session's note; `tags:` extended with `airlock` + `naming_convention`.
2. **Strategic Intent**: appended "Amended scope" paragraph noting airlock + naming convention as template-level additions, with per-vault adoption deferred to successor.
3. **Scope table**: added 2 new rows — "Airlock template stub" + "Repo naming convention codification" with their triggers + ecosystem impacts.
4. **ADRs section**: restructured into 3 buckets (Accepted / Drafted as proposed / Drafted in remaining objectives); added ADR-006 + ADR-007 to "drafted as proposed"; added ADR-008 + ADR-009 slots to "drafted in remaining objectives" with their mission anchors.
5. **Cross-vault references**: added 4 airlock pointers (III canonical, VideoForge reference, CanvasForge worked example, III v0.2 findings memo) + 1 successor pointer.
6. **New projects seeded table**: added row for `campaign_adna_v3_ecosystem_compliance/` (the successor stub).

#### `mission_adna_infra_planning_01.md` (M01 mission spec) — 9 edits

1. **Frontmatter**: `updated: 2026-05-07 → 2026-05-08`; new `amendments:` field; `tags:` extended.
2. **Obj 2 §Decisions** (preface): added amendment note that ADR-006/007 are now drafted (proposed) and ADR-008 (airlock template stub) is added as a third ADR slot for M03.
3. **Obj 4 §Cross-graph coordination**: appended note that the publish-rewrite coord memo doubles as the first cross-graph airlock-pattern exercise from `aDNA.aDNA/`, with cross-links to III canonical and VideoForge reference.
4. **Obj 5 §Audit checklist**: added subsection (b.1) for naming-convention audit — verify references in `.adna/CLAUDE.md`, `README.md`, `CHANGELOG.md`, `MANIFEST.md` follow `<name>.aDNA/` form; document grandfathered exceptions.
5. **Obj 7 §Audit checklist**: added subsection (g) for naming/repo convention codification (ADR-009 draft) and subsection (h) for airlock-presence audit (D7 Federation extension to the 10-dim audit).
6. **Obj 8 §External users question**: marked the question as resolved (yes — Wilhelm/TAPP/Super League); added the "Optional: adopt airlock pattern" + "Naming convention going forward" upgrade-guide sections.
7. **Obj 11 §Next campaign planning doc**: rewrote to "Next campaign planning doc(s)" with multi-campaign successor seeding — explicit seed of `campaign_adna_v3_ecosystem_compliance` as the primary successor; LatticeScope.aDNA execution + Op Rosetta Phase 8 as parallel queues.
8. **§Estimated effort**: recalibrated 5–6 → **6–7 sessions** with rationale; noted this Campaign Amendment Session as a separate half-session covered by this log.
9. **§Deliverables table**: added rows 20 (ADR-008 draft, Obj 2 / M03), 21 (ADR-009 draft, Obj 7 / M07), 22 (successor campaign stub, Obj 11 — *seeded in S2 S2.5, finalized in M11*).

#### `aDNA.aDNA/STATE.md` — 5 edits

(See §6 below for the STATE.md-specific changes; they're called out separately because
STATE.md edits are operator-visible session-tracking artifacts.)

### Files created

| File | Purpose |
|---|---|
| `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md` | Successor campaign master (status: planned; phase: -1) |
| `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/CLAUDE.md` | Successor campaign-specific governance |
| `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/missions/.gitkeep` | Placeholder; mission files seeded by M01-EC at v2 P3 |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_amendment_log.md` | This file |
| `aDNA.aDNA/how/sessions/active/session_stanley_20260508_193509_adna_v2_m01_amendment.md` | Session record (archived to history at session close) |

---

## §3 New ADR slots

| ADR | Title | Drafted by | Ratified at | Source decision |
|---|---|---|---|---|
| ADR-008 | Airlock template stub integration | M03 | M03 phase gate (alongside ADR-006/007) | Mission §Obj 2 amendment (this session) |
| ADR-009 | `<name>.aDNA/` ↔ `<name>.aDNA.git` naming convention | M07 | M07 close | Mission §Obj 7 amendment (this session) |

Both are **slots only** — this session adds the slots to the campaign master + mission
spec; the actual ADR drafts are produced when M03 / M07 execute. This preserves the
phase-gate-as-human-gate rule (Standing Order #1).

---

## §4 Successor campaign seeded

`campaign_adna_v3_ecosystem_compliance/` — see the seeded files for full detail. Key
attributes:

- **Status**: `planned`. Frontmatter `phase: -1` indicates "not yet open"; the campaign
  opens at v2's P3 phase gate.
- **Predecessor**: `campaign_adna_v2_infrastructure` (this campaign, hard dependency).
- **Mission tree (preliminary)**: M01-EC through M07-EC across 5 phases. Finalized by
  v2's M11 mission, not by this amendment.
- **Persona**: Rosetta continues (per ADR-004 — aDNA-development-scoped campaigns live
  in `aDNA.aDNA/`).
- **Estimated sessions**: 12–20 (rough; recalibrated at M01-EC).
- **Goal**: bring the 19 active aDNA ecosystem vaults into full v7.0 compliance.

The seeded stub is **deliberately preliminary** — it captures intent + dependency +
preliminary mission outline so the work is queued and visible during v2, but defers
calibration to M11 of v2 when on-the-ground evidence is in.

---

## §5 Effort recalibration

| Step | Estimate | Source |
|---|---|---|
| Initial (Stage 1 Session 0) | 4 sessions for M01 | Original mission file |
| Stage 1 refinement (2026-05-07) | 5–6 sessions for M01 | `m01_refinement_log.md` |
| **Stage 2 Session 2.5 amendment (this session)** | **6–7 sessions for M01** + 0.5-session amendment session | This file |

Rationale: amendment adds ADR-008 work to S2 S3 / Obj 4 zone (~+10% of S2 S3 effort);
ADR-009 drafting + airlock-presence audit to S2 S4 / Obj 7 zone (~+10%); successor-aware
output framing to S2 S6 / Obj 11 (~+5%). Sessions 1–2 are sunk cost.

The 0.5-session amendment session itself is this session — runs ~60 minutes of
spec-amendment work without new deliverable production. Logged separately because
M01's session-by-session table covers M01 execution sessions, not meta-amendment
sessions.

---

## §6 STATE.md changes summary

| Section | Change |
|---|---|
| Header note (line 9) | Updated to reflect Stage 2 Session 2.5 close + amendment outputs |
| Active Campaigns block (line 20) | Updated to reference 7 of 11 M01 objectives complete (Obj 2 + Obj 3 from S2 S2 + amendment-induced scope notes); ecosystem-compliance successor noted |
| Campaign-detail block (lines 25–32) | Added Stage 2 Session 2.5 paragraph referencing this log + the successor stub seeding |
| Pending Campaigns subsection (NEW) | Added `campaign_adna_v3_ecosystem_compliance` as planned successor with opens-at criterion |
| Last Session paragraph (line 141) | Replaced with amendment-session prose |
| Next Session Prompt (line 145) | Rewritten to reflect S2 S3 with amendment-aware context — flagging ADR-008 slot in M03 + ADR-009 slot in M07 + successor campaign awareness |

---

## §7 Surprises / deferred items

| Item | Status |
|---|---|
| ADR-008 + ADR-009 drafting | **Deferred to M03 + M07** by design (this session adds slots, not documents). |
| M01-EC through M07-EC mission file seeding | **Deferred to M01-EC of successor** by design (only the campaign master + CLAUDE.md exist after this session). |
| `wga.aDNA` missing `how/skills/` directory backfill | **Deferred to M02-EC of successor**. M07 of v2 may flag it again as a finding. |
| LPWhitepaper non-standard remote resolution | **Deferred to M03-EC of successor**. M05 of v2 may produce a per-vault recommendation; the *application* is v3. |
| Per-vault repo renames (4 hyphen-flat + 1 LP variant) | **Deferred to M04-EC of successor**. ADR-009 codifies the convention; application is operator-discretionary. |
| Per-vault airlock adoption | **Deferred to M05-EC of successor**. M03 of v2 ships the template stub; vault-by-vault propagation is v3. |

No blockers. No items requiring escalation.

---

## §8 Self-reference notes (Standing Order #2)

This amendment session demonstrates the standard's evolution **using** the standard, in
three ways:

1. **The amendment uses the campaign-amendment pattern itself.** This session is the
   second use of the "mid-mission spec amendment" pattern (Stage 1 refinement, 2026-05-07,
   was the first; that produced `m01_refinement_log.md`). Both share the artifact form:
   record what changed, why, what's deferred. The pattern is reinforced by being applied
   to itself.

2. **The successor campaign is seeded using the standard's own templates.** The
   successor stub's `campaign_adna_v3_ecosystem_compliance.md` follows
   `aDNA.aDNA/how/templates/template_campaign.md`; its `CLAUDE.md` follows
   `aDNA.aDNA/how/templates/template_campaign_claude.md`. The standard's tooling is
   sufficient to bootstrap a successor that will apply the standard.

3. **The naming/repo convention amendment surfaces a gap that the convention applies
   to itself.** ADR-009 codifies `<name>.aDNA/` ↔ `<name>.aDNA.git`. The aDNA standard
   repo (the template) is currently `Agentic-DNA.git`. ADR-006 (already drafted) renames
   it to `adna.git` — which is **not** `<name>.aDNA.git` form. The template repo is the
   exception that proves the rule: it predates the convention. ADR-009 documents this
   exception explicitly (template repo = `<base>.git`, where `<base>` is the standard's
   own short name; consumer vaults = `<name>.aDNA.git`).

---

## §9 Cross-references

| Reference | Direction |
|---|---|
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] | edited by this amendment |
| [[../../campaign_adna_v2_infrastructure.md|campaign_adna_v2_infrastructure.md]] | edited by this amendment |
| [[m01_refinement_log.md|m01_refinement_log.md]] | Stage 1 antecedent (same artifact form, applied at deliverable level) |
| [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] | source for naming-convention surface (the 19-vault inventory + non-uniform repo names) |
| [[m01_obj1_current_state.md|m01_obj1_current_state.md]] | source for issue list (I-1, I-3, I-4, I-5, I-7, I-11) absorbed by successor campaign |
| [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] | drafted in S2 S2; cross-cuts ADR-009 |
| [[../../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] | drafted in S2 S2; companion |
| [[../../../campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|campaign_adna_v3_ecosystem_compliance.md]] | seeded by this amendment (the successor stub) |
| `III.aDNA/how/airlock/AIRLOCK.md` | canonical airlock spec (referenced for ADR-008) |
| `VideoForge.aDNA/how/airlock/AIRLOCK.md` | Forge.aDNA reference impl (referenced for ADR-008) |

---

**Status**: Complete. Amendment closed cleanly with single commit + push per Git
Coordination standing rule. Stage 2 Session 3 opens against the amended specs.
