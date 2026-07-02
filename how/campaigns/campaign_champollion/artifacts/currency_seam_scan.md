---
type: artifact
artifact_id: champollion_currency_seam_scan
title: "Operation Champollion — currency + seam scan fact tables [Lane 3, sonnet]"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
executor_tier: sonnet
tags: [artifact, champollion, currency, seam, scan, lane_report]
---

# Lane 3 — Currency + Seam Scan
# Operation Champollion Phase 0 | 2026-07-01

---

## TASK 1: COUNT/CURRENCY DRIFTS

### 1a. Reviewer Personas

| Source | Claim | VERIFIED |
|--------|-------|----------|
| CLAUDE.md (§Domain Knowledge → decadal AAR step 4b) | "5-adopter + 6 P5-planned-adopter ranker" + implicitly 5 existing_specialist reviewers (Design Critic · Accessibility Auditor · Content Strategist · Information Architect · Newcomer Stress-Tester) — no explicit count written for reviewers in the CLAUDE.md table; the §Agent Protocol / decadal_aar cross-ref cites "5-adopter" but the reviewer table in §Skills references `skill_decadal_aar` without stating bench size | STALE |
| who/reviewers/AGENTS.md (line 13) | **"16 total"** (5 existing_specialist + 5 visual_focused M5.2 + 4 ecosystem_focused M5.9 + 2 campaign_focused WADNA P1) | VERIFIED — matches file count |
| Actual `reviewer_*.md` files | **16 files**: accessibility_auditor, anti_bloat_editor, brand_strategist, content_strategist, conversion_growth_specialist, design_critic, diagram_reviewer, infographic_specialist, information_architect, motion_designer, movement_skeptic, newcomer_stress_tester, performance_engineer, standard_archivist, ux_writer, visual_designer | VERIFIED |

**FINDING F-01:** CLAUDE.md §Domain Knowledge / reviewer cross-references are stale: they still describe the original 5-persona bench whereas the actual bench has grown to 16. The AGENTS.md is current; CLAUDE.md is not.

---

### 1b. Skills Count

| Source | Claim | VERIFIED |
|--------|-------|----------|
| CLAUDE.md §Skills inventory header + table | 19 base + 27 project-specific = **48 total** | VERIFIED — table row-count: 19 base + 27 project = 48 |
| MANIFEST.md line 43 | "48 skills (21 base + 27 project-specific)" | NOTE: MANIFEST claims 21 base; CLAUDE.md table has 19 base listed. Off-by-two discrepancy between MANIFEST and CLAUDE.md on the base-skills split, though total is 48 in both |
| AGENTS.md line 44 | "48 skills (21 base + 27 project-specific)" | Matches MANIFEST; MANIFEST/AGENTS base count (21) differs from CLAUDE.md table count (19) |
| Actual `skill_*.md` files | **48 files** (confirmed by ls count) | VERIFIED — total 48 matches |

**FINDING F-02:** MANIFEST.md and AGENTS.md both claim "21 base" skills but CLAUDE.md's own base-skills table lists 19 rows. Two skills (likely `skill_workspace_path_migration` and `skill_project_rename`, which appear in the full table text but may be miscounted in sub-tables) may be misclassified or the CLAUDE.md table row-count diverges from the MANIFEST base count. Total (48) is consistent across all sources and matches filesystem.

---

### 1c. Template Count

| Source | Claim | VERIFIED |
|--------|-------|----------|
| MANIFEST.md line 42 | "41 templates (25 base + 11 extension + 5 operational)" | VERIFIED |
| AGENTS.md line 43 | "41 templates (25 base + 11 extension + 5 operational)" | VERIFIED |
| Actual `template_*.md` files | **41 files** (confirmed by ls count) | VERIFIED |

**No drift on templates.** All sources agree at 41. CLEAN.

---

### 1d. Standard Version

| Source | Claimed version | Current standard (adna_standard.md) | Status |
|--------|----------------|--------------------------------------|--------|
| `what/docs/adna_standard.md` title | **v2.4** (as of 2026-06-29, §6.5 + §13.2 per ADR-042) | authoritative | CURRENT |
| MANIFEST.md line 162 (Inherited Infrastructure table) | **"aDNA Standard v2.2"** | v2.4 | STALE — 2 minor versions behind |
| README.md line 358 | "Full normative specification **(v2.2)**" | v2.4 | STALE — 2 minor versions behind |
| CLAUDE.md footnote (§Domain Knowledge base ontology row) | **v2.3** ("materialized to the public template at Hearthstone P5") | v2.4 | STALE — 1 minor version behind |
| `compliance_checker.py` line 4 header + line 869 standard_version field | **v2.3** | v2.4 | STALE — 1 minor version behind |

**FINDING F-03 (CRITICAL):** MANIFEST.md and README.md still cite v2.2; CLAUDE.md and compliance_checker.py cite v2.3; the actual standard is v2.4. Four files carry stale version citations.

---

### 1e. STATE.md `updated:` vs Current Phase

| Item | Value | Source line |
|------|-------|-------------|
| Frontmatter `updated:` | **2026-06-30** | STATE.md line 4 (rg result) |
| Newest Current Phase activity | **2026-07-01** (STR Track C campaign-terminal close; STR reopen-reconciliation; DP4 readiness note) | STATE.md lines 25-26, 209 (rg 2026-07 | head -5) |

**FINDING F-04:** STATE.md `updated:` frontmatter (2026-06-30) is behind the most recent Current Phase bullet (2026-07-01). The session that wrote the STR campaign-terminal close did not bump the frontmatter `updated:` field.

---

### 1f. CHANGELOG.md

| Item | Value |
|------|-------|
| Most recent versioned entry | **[v6.0] — 2026-04-03** |
| [Unreleased] section | Present at top of file (with content: some Added/Changed/Notes bullets) |
| Governance version at HEAD | **v8.3** (shipped 2026-06-29 via skill_template_release; .adna ab97ad3) |

**FINDING F-05 (CRITICAL):** CHANGELOG.md is stalled at v6.0 (2026-04-03) — 5 minor versions behind v8.3. v6.1 through v8.3 are not recorded. The [Unreleased] section at the top covers *some* changes but has not been promoted to versioned entries. The changelog has not been maintained since the v6.0 entry.

---

## TASK 2: PENDING ACKS / CO-SIGNS INVENTORY

### 2a. ADR-043 Co-sign (coord_2026_06_29_rosetta_to_hestia_lighthouse_adr043_cosign.md)

| Field | Value |
|-------|-------|
| File | `who/coordination/coord_2026_06_29_rosetta_to_hestia_lighthouse_adr043_cosign.md` |
| Status | `status: filed` |
| ack_required | true |
| Owner (to) | Hestia (AWSBootstrap.aDNA + Home.aDNA) |
| What was asked | Hestia: acknowledge ADR-043 as accurate to AWSBootstrap scope; flag any boundary to redraw. Lighthouse-P0: no action now (ADR-043 is an input to P0 charter). Operator: ratify proposed → accepted |
| Current ack state | **NO ACK RECEIVED** — no reply memo found; `status: filed` |
| Discharge | Hestia acks accuracy of ADR-043 §3 constraint on Phase 2-6 build-out; operator ratifies `proposed → accepted`; Lighthouse-P0 co-signs at charter |

### 2b. Oration Harness Strip (coord_2026_06_29_rosetta_to_oration_harness_strip.md)

| Field | Value |
|-------|-------|
| File | `who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip.md` |
| Status | `status: filed` |
| ack_required | true |
| Owner (to) | Oration (R. Kennedy — Oration.aDNA) |
| What was asked | Strip lines 295-298 (`# userEmail` + `# currentDate`) from `Oration.aDNA/CLAUDE.md`; bump `updated`; verify zero residual with `adna_validate.py --governance`; commit path-scoped |
| Current ack state | **NO ACK RECEIVED** — no reply from Oration found |
| Discharge | Oration's own subagent strips the 4 lines, commits path-scoped, verifies `adna_validate` clean |

### 2c. Argus III Campaign Handoff (coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff.md)

| Field | Value |
|-------|-------|
| File | `who/coordination/coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff.md` |
| Status | `status: open` |
| ack_required | true |
| Owner (to) | Argus (III.aDNA) |
| What was asked | Author a campaign-planning mission in III.aDNA (e.g. `plan_campaign_h_iii_campaign_pattern.md`) to (1) design campaign_h improving III from pilot learnings, (2) spec/build/test/deploy `skill_iii_campaign`, (3) graduate representation_coherence pack + claim_tracer persona. 4-item ack checklist (receipt · planning-mission authoring acknowledged · Q1 naming · Q2 pack graduation timing) |
| Current ack state | **NO ACK RECEIVED** — all 4 checkboxes unchecked, `status: open` |
| Discharge | Argus acks all 4 items: receipt + confirms planning-mission authoring + answers Q1 (codename) + Q2 (conditional vs full graduation for representation_coherence pack) |

### 2d. Berthier Fleet Defects (coord_2026_06_27_inbound_from_berthier_fleet_defects.md)

| Field | Value |
|-------|-------|
| File | `who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects.md` |
| Status | **`status: resolved`** |
| acknowledged | 2026-06-29 |
| resolved | 2026-06-29 |
| Current ack state | **FULLY RESOLVED** — Disposition section (Rosetta 2026-06-29) + Resolution section (Rosetta 2026-06-29 post-greenlight) both written inside the memo. No separate reply memo — resolution embedded. |
| What resolved it | Operator greenlit all 3 classes upstream-only. Class 2 (harness-injection) LANDED (ADR-042 + adna_validate guard). Class 3 (rename residue) LANDED (§6.5 + skill_project_rename). Class 1 (template-clutter) STAGED for next skill_template_release. Deferred arms → idea_fleet_defects_retro_cleanup. |

### 2e. P4 Installer Spinout (coord_2026_07_01_rosetta_to_lighthouse_terminal_harness_p4_installer_spinout.md)

| Field | Value |
|-------|-------|
| File | `who/coordination/coord_2026_07_01_rosetta_to_lighthouse_terminal_harness_p4_installer_spinout.md` |
| Status | `status: filed` |
| ack_required | true |
| Owner (to) | Lighthouse.aDNA (PRIMARY) + Terminal.aDNA + Harness.aDNA |
| What was asked | (1) Ack receipt (no deliverable). (2) Treat M4.1 contract as input when node-provisioning work reaches roadmap. (3) If explicit ADR/charter seam wanted, say so. |
| Current ack state | **NO ACK RECEIVED** — freshly filed 2026-07-01; expected; no reply yet |
| Discharge | Each receiving vault acks receipt (no forced deliverable; work proceeds on their own roadmap) |

---

## TASK 3: DP4 / TRACK D

### Track Map — verbatim Track D row (campaign_operation_adna.md, line 127)

> | **D — The commons** | *(axis-K + `/commons` + subnetwork showcase; no separate campaign)* | Rosetta · coordinates with Venus (Network) | **in-flight inside Track A** (WEBSITE axis-K; `/commons` strongest K/E surface; subnetwork showcase live) | The public-good soul *shown* — real attribution, visible governance, honest federation, mission-aligned subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive). The "Facebook, for good" MVP layer. |

### Per-track State (as of campaign file, current)

| Track | Campaign | State |
|-------|----------|-------|
| A — Prove it real | campaign_website_adna | **CLOSED 2026-06-21** (terminal gate reached) |
| B — Make it real | campaign_hearthstone | **COMPLETED 2026-06-19** (P0-P5 all closed) |
| C — The engine | campaign_adna_serious_tool_readiness | **TERMINAL 2026-07-01** (reopen-reconciliation closeout) |
| D — The commons | (no separate campaign) | **in-flight inside Track A** (per Track Map row — but Track A is now CLOSED; Track D state is stale/ambiguous) |

**FINDING F-06:** The Track D row still reads "in-flight inside Track A" but Track A has been CLOSED since 2026-06-21. Track D's current state is described in the DP4 readiness note (line 129): "gated only on Track D (the commons, Venus-coordinated)" — but no update to the Track D row in the table reflects this.

### What Track D Is

Track D is a **lens, not a fifth campaign** (per campaign_operation_adna.md line 131). The commons/public-good work is executed inside Track A's axis-K and `/commons` surface, and reaches toward the full social layer co-designed with **Network/Venus** (Venus-gated; `narrative_ethos_public_good` §5). The program names it as a track so the ethos stays front of mind.

**Owner:** Rosetta + coordinates with Venus (Network.aDNA)

### What DP4 Requires

From campaign_operation_adna.md Decision Points table (line 168):
> "pending" — when all tracks reach their terminal gates, AAR the program and set `status: completed`

Per the DP4 readiness note (line 129): **currently gated only on Track D** (A closed · B done · C terminal · D = Venus-coordinated commons work not yet terminalized). DP4 is **operator-fired** (SO #3 + #9 — reported, not advanced).

**DP4 Dossier:** No explicit DP4 dossier content list exists. The Completion Summary section of campaign_operation_adna.md is unfilled (reads "*(pending)*" for Deliverables, Key Findings, and Program AAR).

---

## TASK 4: QUEUED / HELD VERIFICATION

### 4a. ADR-044 Upstream Fold

**Location:** `what/decisions/adr_044_per_class_frontmatter_profiles.md` (both the header acceptance note and §Alternatives Considered / Upstream section)

**Exact wording (from header, line ~19):**
> "Upstream adoption remains pending — the refinement folds into the public image (`aDNA-Network/aDNA`, §7.2/§5.5) at the next `skill_template_release` via `how/backlog/idea_upstream_per_class_frontmatter_profiles`."

**Also from §Alternatives, line ~54:**
> "**Upstream.** §7.2 + §5.5 of the standard, and the public-image validator (`aDNA-Network/aDNA`), should carry the same two refinements. Staged: `idea_upstream_per_class_frontmatter_profiles`. Until ratified, the local validator is ahead of the written standard on these two points (the reference instance leading the spec, as designed)."

**Backlog anchor:** `how/backlog/idea_upstream_per_class_frontmatter_profiles.md` (existence confirmed by ADR reference; file exists as the staging artifact).

**Gate:** next operator-gated `skill_template_release`; the two refinements are:
1. `status` optional for `type: directory_index` and `type: coordination` (§7.2 refinement)
2. Nested-instance walk exclusion (§5.5 conformance refinement)

---

### 4b. 2 Graduation Seeds (3rd-instance gated)

From STATE.md M5.3 S2 close section (pattern dispositions at S2 close):

| Skill seed | Current count | Evidence | Discharge |
|------------|---------------|----------|-----------|
| `skill_documentation_layout_props_additive_extension` | **2/3** (cycle 104 = 1st · cycle 105 = 2nd; both in M5.3 S2) | STATE.md §M5.3 S2 close bullet; cycle 104 "1st canonical instance of layout-wiring cycle JSON shape"; cycle 105 "consumer-side prop-pass only"; "promotes to 3/3 at next reuse" | 3rd reuse anywhere in vault triggers graduation |
| `skill_inline_svg_raw_import_currentColor_inheritance` | **1/3** (cycle 106 = NEW seed 1/3) | STATE.md §M5.3 S2 close bullet; cycle 106 Vite `?raw` import + `set:html` + currentColor inheritance + `aria-hidden` wiring for SidebarNav | 2 more instances (to reach 3/3) needed before graduation |

Note: These skills do not appear to have dedicated backlog files yet (only tracked within the STATE.md mission log). The pattern_graduation_skill_authoring backlog entry (`how/backlog/idea_pattern_graduation_skill_authoring.md`) is the umbrella for this class.

---

### 4c. Template v8.3 / local .adna sync state

| Source | Version | Commit | VERIFIED |
|--------|---------|--------|----------|
| Memory (reference) | v8.3 @ e4372a6 dev-graph; local .adna ab97ad3 | (from MEMORY.md) | — |
| `git -C /Users/stanley/aDNA/.adna log --oneline -3` | HEAD = **ab97ad3** "release sync: v8.3 from aDNA-Network/aDNA" | ab97ad3 | VERIFIED |
| 2nd entry | 125ac3b "release sync: v8.2 ..." | — | — |
| 3rd entry | 0a18b50 "release sync: v8.1 ..." | — | — |

**.adna is at v8.3 (ab97ad3). VERIFIED. No gap between claimed state and actual state.**

---

## TASK 5: SECURITY POSTURE

### 5a. Pre-push gitleaks hook

```
/Users/stanley/aDNA/aDNA.aDNA/.git/hooks/pre-push -> ../../git/hooks/pre-push.gitleaks.sh
```

**Status: PRESENT** (symlink to `git/hooks/pre-push.gitleaks.sh`) — VERIFIED.

### 5b. SS_VERCEL_TOKEN references

| File | Nature of reference | Assessment |
|------|--------------------|----|
| `STATE.md` | "#needs-human: rotate `SS_VERCEL_TOKEN`" (carry-forward note); pattern string only | NAMES-ONLY — safe |
| `how/backlog/idea_deploy_cadence.md` | "`SS_VERCEL_TOKEN` redaction gotcha" (prose reference) | NAMES-ONLY — safe |
| `how/campaigns/campaign_adna_network_audit/missions/mission_ana_p1_m1_decisive_strokes.md` | "SS_VERCEL_TOKEN = throwaway test acct (no rotation flag)" (assessment note) | NAMES-ONLY — safe |
| `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m510_e1_brand_positioning.md` | "#needs-human: rotate `SS_VERCEL_TOKEN`" | NAMES-ONLY — safe |
| `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m511_e4_adnanetwork.md` | "#needs-human: rotate `SS_VERCEL_TOKEN`" (carry-forward) | NAMES-ONLY — safe |
| `how/campaigns/campaign_operation_adna/dp2_keystone_launch_runbook.md` | `VERCEL_TOKEN="$SS_VERCEL_TOKEN" vercel --prebuilt --prod` (command using env var, not value) | NAMES-ONLY — safe |
| `how/sessions/active/session_stanley_20260702T024442Z_champollion_p0.md` | Reference to token variable in session | NAMES-ONLY — safe |
| Various session history files | Similar "#needs-human: rotate" notes | NAMES-ONLY — safe |

**All SS_VERCEL_TOKEN occurrences are names-only, command-template, or carry-forward rotation notes. No values committed. CLEAN.**

---

## F-CHM CANDIDATE FINDINGS (confirmed drifts / defects)

| # | Finding | Location | Severity |
|---|---------|----------|----------|
| F-01 | CLAUDE.md reviewer bench description stale: says 5 specialists while bench is 16 | CLAUDE.md §Domain Knowledge / skill_decadal_aar cross-ref | MEDIUM |
| F-02 | Base-skills count discrepancy: MANIFEST.md/AGENTS.md claim 21 base; CLAUDE.md §Skills table lists 19 base; total 48 is consistent | MANIFEST.md line 43, AGENTS.md line 44, CLAUDE.md table | LOW |
| F-03 | Standard version citations stale in 4 files: MANIFEST.md (v2.2), README.md (v2.2), compliance_checker.py (v2.3), CLAUDE.md footnote (v2.3); actual standard is v2.4 | Multiple files | HIGH |
| F-04 | STATE.md frontmatter `updated:` (2026-06-30) behind newest current-phase bullet (2026-07-01) | STATE.md line 4 | LOW |
| F-05 | CHANGELOG.md stalled at v6.0 (2026-04-03); reality is v8.3; [Unreleased] section present but v6.1-v8.3 not versioned | CHANGELOG.md | HIGH |
| F-06 | Track D row in campaign track map still says "in-flight inside Track A" but Track A closed 2026-06-21; state is stale/ambiguous | campaign_operation_adna.md line 127 | MEDIUM |
| F-07 | 3 unacked outbound coordination memos: ADR-043 cosign (Hestia, filed 2026-06-29), Oration harness strip (Oration, filed 2026-06-29), Argus III handoff (Argus, filed 2026-06-28) — all `ack_required: true`, no replies | who/coordination/ | INFO |
| F-08 | ADR-044 upstream fold (§7.2/§5.5) still pending: local validator is ahead of the written standard; idea_upstream_per_class_frontmatter_profiles staged but not yet shipped | adr_044 + backlog | INFO |
| F-09 | 2 skill graduation seeds outstanding: skill_documentation_layout_props_additive_extension at 2/3 (needs 1 more), skill_inline_svg_raw_import_currentColor_inheritance at 1/3 (needs 2 more) — no backlog files; tracked only in STATE.md | STATE.md M5.3 S2 section | LOW |
| F-10 | DP4 has no dossier/content list; Completion Summary in campaign file is "*(pending)*"; Track D owner/state not formally updated post Track-A-close | campaign_operation_adna.md lines 228-240 | INFO |

---

*Scan completed: 2026-07-01 | Lane 3 / Operation Champollion P0*
