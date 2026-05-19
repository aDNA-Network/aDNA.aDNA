---
type: design_spec
artifact_id: m21_obj4_archive_convention_design
mission: mission_adna_str_p2_m21_context_audit_split
campaign: campaign_adna_serious_tool_readiness
phase: 2
session: 1
created: 2026-05-19
updated: 2026-05-19
status: complete  # S1 design artifact; doctrine-as-design-memo, NOT ADR text
last_edited_by: agent_stanley
tags: [design_spec, m21, op_3, auto_archive_convention, router_archive_pattern, skill_graduation_candidate, doctrine_seed, defer_to_m3x]
---

# M2.1 Obj 3 — Op 3 Auto-Archive Convention Design

> **Documents the convention** for splitting accumulator files into router + archive at the moment of natural rotation (campaign close, mission close, decadal AAR, etc.). Convention-as-doctrine; **NOT** an ADR (per Campaign S.O. #14, no new ADRs at M2.1). Skill graduation deferred to M3.x earliest. Retroactive application to existing campaign masters deferred to M3.x (D4 default A).
>
> **Self-reference**: The Op 3 convention says "when a campaign closes, rotate verbose Amendments content into a sibling archive". M2.1 itself opens P2 — it will close at some future S3, and when it closes, this convention applies to *this very mission*'s campaign master. The convention designs its own future application.

## §1 — The accumulator pattern

Several aDNA file shapes naturally accumulate audit content over time, eventually exceeding the Read tool's 256 KB limit OR crossing the M1.4 API-billing forecast threshold (per-session cache_read > 10 M):

| File shape | Accumulator content | Observed instances | Current size status |
|---|---|---|---|
| **Vault-level STATE.md** | `## Last Session` blocks rotating into `## Last Session DEPRECATED-marker` blocks | `aDNA.aDNA/STATE.md` (this M2.1 target); `lattice-labs/STATE.md` (heavy too); future `LatticeNetwork.aDNA/STATE.md` + others | aDNA.aDNA hit 347 KB at M2.1 trigger; others approaching |
| **Campaign master** | `## Amendments` entries rotating per mission close (one bullet per S1/S2/S3 close) | `campaign_adna_serious_tool_readiness.md` (this campaign — 62 KB and growing); `campaign_adna_v2_infrastructure.md` (closed at v7.0 tag); `campaign_lattice_workspace_ux.md` (closed 2026-05-13); `campaign_rosetta` archive | v8 master at 62 KB after 6 missions; v2 master closed at similar size |
| **Mission file** | `## Completion summary` + `## Status` updates per session close | M1.4 file 41 KB; M1.3 file 25 KB | Within Read limit but trending up |
| **Decadal AAR** | Persona ranker reviews per decadal cycle | Rosetta D1-D8 AARs at `campaign_rosetta/missions/artifacts/aar_*_decadal_*.md` | Per-decade files small; corpus-level grows |

**Pattern**: accumulator content lives in a section that grows monotonically. At a natural rotation point, that section (or its older portion) belongs in a sibling archive file.

## §2 — The convention (canonical statement)

**Rule**: When an accumulator file reaches a natural rotation point (campaign close, mission close, phase exit, or operator-triggered threshold), the verbose audit content rotates into a sibling `<source>_archive.md` file. The router stays compact and operationally live; the archive preserves history verbatim (immortal-spine per project Standing Order #6).

**Trigger** (per file type):

| File type | Rotation trigger | Archive filename pattern |
|---|---|---|
| Vault-level STATE.md | (a) byte size > 200 KB OR (b) operator-discretionary OR (c) at v8.0 tag / major release | `STATE_archive.md` (single-file) OR `how/state_archive/state_archive_<YYYY>_q<N>.md` (quarterly rotation if archive > 200 KB) |
| Campaign master | At `status: completed` (campaign close) | `<campaign-slug>_archive.md` (sibling at `how/campaigns/<campaign-name>/`) |
| Mission file | Generally NO archive needed (mission files are bounded); but if mission file > 100 KB at close, split status-history into `mission_<id>_status_archive.md` | `mission_<id>_status_archive.md` |
| Decadal AAR aggregate | At every 10-AAR boundary (D1-D10, D11-D20, etc.) | `aar_<phase>_decadal_<range>_archive.md` |

**Forward-reference preservation**: archive file inherits the anchor names of the moved sections; cross-link audit at split-time updates any internal references that point to the moved sections.

**Frontmatter convention** (archive files):

```yaml
---
type: <source-type>_archive  # e.g., state_archive, campaign_archive, mission_status_archive, aar_decadal_archive
created: <split-date>
updated: <split-date>
status: append_only  # immortal-spine; new entries land at the top of the most-recent rotation; existing entries never edited
last_edited_by: agent_<persona>
canonical_router: <path-to-the-router-file>
split_origin_mission: <mission-id>
split_origin_session: <session-id>
tags: [<source-type>_archive, immortal_spine, historical_audit]
---
```

**Rollback safety**: every archive split is a 2-commit operation (archive-create commit + router-trim commit) per the M2.1 Op 1 §4 execution sequence. `git reset --hard <pre-split-sha>` recovers in <1 min.

## §3 — STATE.md as the first canonical instance (this M2.1 mission)

M2.1 Op 1 implements the convention for `aDNA.aDNA/STATE.md` → `aDNA.aDNA/STATE_archive.md`. Design at [[m21_obj2_state_split_design.md|m21_obj2_state_split_design.md]]. The convention's first invocation.

**What M2.1 proves**:
- The 4-phase commit sequence (Archive create → Router rewrite → Cross-link audit → Verification snapshot) is mechanical.
- Forward-reference preservation works (anchor names survive moves; 5-wikilink sample at S3 confirms).
- Rollback works (<1 min recovery).
- Result: ≥ 4× content-load reduction on the router; archive remains under 256 KB Read limit.

**What M2.1 does NOT prove** (deferred to later instances):
- Quarterly rotation of an over-sized archive (M2.1 archive stays single-file; rotation triggers at archive > 200 KB; M3.x or later operator discretion).
- Campaign-master archive (deferred per D4 default A; v2 + LWX campaign masters retroactively split at M3.x).
- Per-mission status-archive (rare; only triggers when mission file > 100 KB — not observed in current campaign).
- Decadal AAR rotation (will trigger at v8 P5 Rosetta-Phase-8 absorbed work).

## §4 — Skill graduation candidate

**Candidate skill**: `aDNA.aDNA/how/skills/skill_campaign_close_archive.md` (NOT authored at M2.1; queued for M2.2 or M3.x).

**Graduation rubric**: The convention promotes to a skill when **≥ 3 distinct accumulator-file rotations** have run successfully under the convention. M2.1 is instance #1 (STATE.md). Instances #2 and #3 are required before skill authoring is justified — otherwise the skill risks over-fitting to STATE.md specifics.

**Likely instances #2 + #3**:
- Instance #2 (M3.x retroactive): `campaign_adna_v2_infrastructure.md` → `campaign_adna_v2_infrastructure_archive.md` at the same time as v2 master cleanup.
- Instance #3 (campaign_adna_serious_tool_readiness close at v8 P6 close): `campaign_adna_serious_tool_readiness.md` → `campaign_adna_serious_tool_readiness_archive.md` at v8.0 tag.

**At #3 (v8 P6)**: graduate the convention to `skill_campaign_close_archive.md`. The skill specifies: (a) when to trigger; (b) which sections to rotate (the boilerplate vs the audit-only content); (c) frontmatter shape; (d) commit sequence; (e) cross-link audit pattern; (f) rollback path.

**Why not earlier**: graduating after only one instance (M2.1) over-fits to STATE.md. The skill needs the campaign-master shape AND a mission-status-archive shape (if ever needed) to factor out the common pattern. Premature graduation produces a brittle skill.

## §5 — Retroactive scope at M2.1 (D4 default A — defer to M3.x)

**Decision at plan approval (2026-05-19)**: do NOT retroactively split existing closed campaign masters at M2.1. Specifically:

| File | M2.1 action | Future action |
|---|---|---|
| `campaign_adna_v2_infrastructure.md` (closed 2026-05-18) | NO action | M3.x retroactive split |
| `campaign_lattice_workspace_ux.md` (closed 2026-05-13) | NO action | M3.x retroactive split |
| `campaign_rosetta/campaign_rosetta.md` (closed 2026-04-26) | NO action | Optional retroactive split at M3.x or v8 P5 |
| `campaign_obsidian_deployment_stabilization` (absorbed into v8 P3) | NO action | At v8 P3 close per absorption |
| Current open campaigns | NO action | At their respective closes per convention |

**Rationale**: M2.1's primary value is STATE.md (the daily-traveled file). Retroactive splits of closed campaign masters have zero blocking-impact on M2.x cohort or P2 exit; they're nice-to-have cleanups; queue them for M3.x where forge-ecosystem hardening already touches multiple campaign masters.

**Re-evaluation gate at M2.1 close**: if M2.1 S3 verification shows the convention worked smoothly AND M2.x cohort entry doesn't pressure backlog space, operator may authorize a small interstitial M2.1.5 to retroactively split v2 + LWX masters. Default: defer.

## §6 — Other vault scope (cross-vault propagation)

The convention is a doctrine that any aDNA vault can adopt. Vault-by-vault adoption is operator-discretionary; M2.1 only documents the convention.

| Vault | Likely first accumulator | Status |
|---|---|---|
| `lattice-labs/STATE.md` | `## Last Session` blocks (heavy; lattice-labs/STATE.md is large) | Adoption deferred to LatticeLabs.aDNA Phase-6 cutover OR per-vault operator decision |
| `LatticeNetwork.aDNA/STATE.md` | Currently small (vault new); will accumulate | Adoption when crosses threshold per convention |
| `RareHarness.aDNA/STATE.md` | Currently small | Adoption when crosses threshold per convention |
| `CanvasForge.aDNA/STATE.md` | At Phase 7 close (2026-05-04); may have accumulator | Adoption per vault operator decision |
| Other peer vaults | Various | Vault-by-vault |

**Upstream propagation**: like Op 2 (AGENTS.md hint), the convention promotes to the `.adna/` template at v8 P6 — likely as a `template_state_archive.md` template file under `.adna/how/templates/` + a section in `.adna/CLAUDE.md` referencing the convention. Backlog placeholder optional (lower priority than Op 2 hint; doctrine generally lands via skill rather than template at v8 P6 close).

## §7 — Decision rubric (operator-facing summary)

When a future agent or operator faces an accumulator file:

1. **Is the file ≥ 200 KB byte size OR ≥ 50 kT content-load?** If yes, split is a candidate.
2. **Is there a natural rotation point coming up** (campaign close, mission close, phase exit, major tag)? If yes, schedule split at that point.
3. **Is the file in active live use** (router-shaped already)? If no — it's an accumulator — split now per the convention.
4. **Is there a sibling archive already?** If yes, append new audit content to the existing archive at the next rotation.
5. **Is the archive itself > 200 KB?** If yes, rotate the archive (quarterly or per the convention's rotation pattern).

**Skill candidate (after #3 instance)**: factor steps 1-5 into `skill_campaign_close_archive.md` (or more generally `skill_accumulator_split.md`).

## §8 — Cross-references

- [[../mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] §Objective 4 — this artifact discharges Obj 4
- [[m21_obj2_state_split_design.md|m21_obj2_state_split_design.md]] — Op 1 sibling (canonical first instance: STATE.md split)
- [[m21_obj3_agents_md_hint_design.md|m21_obj3_agents_md_hint_design.md]] — Op 2 sibling (Heavy-File Read Convention applies to the SAME files this convention rotates)
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — top-3 M2.1 queue (Op 3 originates here)
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §7 — queue confirmation
- [[../../../how/templates/template_campaign_master.md|template_campaign_master.md]] — current campaign master template (no archive convention yet; will add at v8 P6 upstream propagation)
- [[../../../how/templates/template_state.md|template_state.md]] — current STATE template (will adopt the router shape at v8 P6 upstream propagation)
- [[../../../what/decisions/|what/decisions/]] — ADR directory (no ADR for this convention at M2.1; Standing Order #14 honored)
- `aDNA.aDNA/how/skills/skill_campaign_close_archive.md` — FUTURE skill candidate (NOT authored at M2.1)

## §9 — Notes for S2 + S3 + later execution agents

**S2 (M2.1)**: NO destructive execution from this artifact at S2. Op 3 is doctrine-as-design-memo; S2 destructive work happens in Op 1 (STATE.md split per Obj 2 design) + Op 2 (AGENTS.md hint per Obj 3 design). Op 3 lives entirely in this design artifact at M2.1.

**S3 (M2.1)**: Reference this design in the AAR §(c) doctrine-seed bucket as a campaign-level doctrine seed. Note the convention's first canonical instance (STATE.md) succeeded.

**M3.x (forge ecosystem hardening)**: If retroactive split of v2 + LWX masters is authorized, follow Obj 2 §4 execution sequence per file. After M3.x, the convention has 3 instances and graduates to `skill_campaign_close_archive.md`.

**v8 P6 (campaign close + v8.0 tag)**: (a) auto-archive `campaign_adna_serious_tool_readiness.md` as the canonical campaign-master instance of the convention; (b) propagate the convention upstream to `.adna/` (likely via skill + template); (c) close the doctrine loop by referencing this design artifact in the v8.0 tag release notes.

**Forever-after**: every campaign close at every vault following the convention contributes evidence; convention stays a working doctrine, not a calcified ADR (Campaign S.O. #14 honored).
