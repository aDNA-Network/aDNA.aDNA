---
type: mission
mission_id: mission_adna_infra_p1_06_v7_governance_tag
campaign: campaign_adna_v2_infrastructure
phase: 1
mission_number: 6
slug: v7_governance_tag
created: 2026-05-18
updated: 2026-05-18
status: in_progress
opens_at: 2026-05-18T16:40:42Z
opened_session: session_stanley_20260518_164042_adna_v2_m06_s1
closed_at:
closed_session:
estimated_sessions: 3   # S1 spec authoring + S2 destructive execution + S3 close
actual_sessions:
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete
mission_class: implementation   # 4th implementation-class instance (after M03 + M04 + M05)
prerequisite_missions:
  - mission_adna_infra_planning_01           # M01 — produced M01 Obj 6 runbook + Obj 7 repo rename plan + 4 spec artifacts
  - mission_adna_infra_p1_02_ecosystem_matrix  # M02 — locked baseline (M08a primary input)
  - mission_adna_infra_p1_03_repo_flatten      # M03 — flatten + ADR-008 + V1-V13 harness; deploy_manifest already moved (B3 commit 2fe9938)
  - mission_adna_infra_p1_04_node_adna_bootstrap   # M04 — node.aDNA bootstrap + cross-project routing hook commit e3b3bcc
  - mission_adna_infra_p1_04b_workspace_ux_planning  # M04b — workspace UX planning (mini-campaign LWX planning)
  - mini_campaign_lattice_workspace_ux        # LWX mini-campaign closed 2026-05-13 (3 missions; 2 successor campaigns seeded)
  - mission_adna_infra_p1_05_publish_skill_rewrite  # M05 — publish-skill family shipped to .adna at dfced67
  - mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos  # M08a — upgrade guide + 17 coord memos + 3 public-announcement drafts
prerequisite_artifacts:
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md   # the M06 execution runbook
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj7_repo_rename_plan.md          # ADR-006 §Migration mechanics source
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m03_obj5_verification_harness_results.md  # V1-V13 baseline
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_github_release_notes_v7.md       # release notes (delivery_held_until: M06-tag-ship)
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_readme_badge_spec.md             # readme badge spec (delivery_held_until: M06-tag-ship)
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_social_comms_post_draft.md       # social comms post (delivery_held_until: M06-tag-ship)
  - who/coordination/coord_2026_05_18_publish_rewrite_shipped_daedalus.md  # Daedalus shipped-memo (delivery_held_until: operator-approval)
prerequisite_adrs:
  - adr_006_github_repo_rename_to_adna       # accepted 2026-05-08; M06 executes §Migration mechanics
  - adr_007_outer_adna_claude_md_disposition  # accepted 2026-05-08
  - adr_008_airlock_template_stub             # accepted 2026-05-11 (M03 phase gate)
  - adr_009_lattice_naming                    # accepted 2026-05-08
  - adr_010_publish_skill_naming              # accepted 2026-05-18 (M05 S1)
  - adr_011_semver_discipline                 # M06's primary ratification target (per M01 Obj 6 §10 step 1)
target_adr: adr_011_semver_discipline   # ratify proposed → accepted at S2 phase gate
adr_006_amendment_candidate: true       # operator decides at S2 entry D1 (Rosetta recommendation: amend to canonicalize mixed-case `aDNA`)
cross_vault_partners:
  - 17 partner vaults                         # all `coord_2026_05_09_v7_*.md` memos; passive pre-pull on v7.0 (D5)
  - Spacemacs.aDNA / Daedalus                 # shipped-memo flip per D3 (recommended pre-tag)
  - Wilhelm Foundation                        # 2 memos still ADR-010-window embargo (RareArchive + WilhelmAI)
  - SuperLeague                               # 1 memo still operator-approval embargo
  - Strategic Interface Protocol              # 1 memo still operator-approval embargo
fires_v8_checkpoint: M1.2   # campaign_adna_serious_tool_readiness; fires at S3 close per M05 S3 M1.1 precedent
closes_campaign: campaign_adna_v2_infrastructure   # last v2 mission per 2026-05-17 v8 amendment (M08b parallel; M07 partial-absorbed; M08c/M09/M10/M11 fully absorbed by v8)
unblocks_missions:
  - v8 P0 → P1 transition                     # Standing Order #16 hard dependency (v7.0 tag exists at LatticeProtocol/adna)
  - 17 partner-vault v7.0 migrations          # all `delivery_held_until: pre-<vault>-v7-migration` constraints unblocked
  - mission_adna_infra_p3_08c_standalone_installer  # absorbed into v8 Phase 4; v7.0 tag is its hard prereq
deliverables_count: 22   # ~22 across 7 objectives + 18 acceptance criteria
tags: [mission, m06, v7_governance_tag, github_repo_rename, adr_006_executor, adr_011_target, public_announcement_trigger, campaign_close, v8_p1_unblock, partner_unfreeze, verification_as_first_class]
---

# M06 — GitHub Minimalism + Governance v7.0 Tag

> **Final v2 mission.** Ships the `v7.0` annotated tag at `LatticeProtocol/adna`, executes the GitHub repo rename per [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]], ratifies ADR-011 (semver discipline), and unfreezes the 17 partner-vault migration cohort + v8 P0 → P1 transition. M06 close = `campaign_adna_v2_infrastructure` close (per 2026-05-17 v8 amendment; M07 partial-absorbed; M08c/M09/M10/M11 fully absorbed). The runbook is [[artifacts/m01_obj6_version_bump_checklist.md|`m01_obj6_version_bump_checklist.md`]] — this mission executes it.

## §0 Strategic intent

After M05 S3 close 2026-05-18, M06 is the only remaining v2 mission. The v7.0 tag is the baseline event for three downstream cohorts: (a) v8 Phase 1 entry (Standing Order #16 hard dependency); (b) 17 partner-vault `git -C .adna pull` migrations to v7.0 (all M08a coord memos sit at `delivery_held_until: pre-<vault>-v7-migration` and unfreeze when the tag exists); (c) 3 public-announcement workstream drafts at `delivery_held_until: M06-tag-ship`. M06 also ratifies ADR-011 (semver discipline) — the first release under the explicit two-track Major.Minor-only policy.

The **load-bearing finding from M05** propagates to M06: *verification-as-first-class deliverable* ([[artifacts/aar_m05_publish_skill_rewrite.md|M05 AAR]] §Conceptual contributions #1). M06 includes a dedicated post-tag verification phase (Obj 5; M01 Obj 6 §7 ten-check harness) BEFORE announcing the release publicly. Failure at any §7 check aborts announcement and routes to §8 recovery. M06's destructive operations (GitHub UI rename + annotated tag push) are reversible-pre-announcement only; post-announcement, supersession is the only path (ADR-011 §Reverting / superseding rule).

## §1 Mission scope

Execute the M01 Obj 6 runbook against the post-M05 template at HEAD `dfced67`. Seven deliverables:

1. **Pre-flight verification + operator-decision surfacing** — M01 Obj 6 §0 P-1..P-6 + 5 operator decisions D1-D5 + ADR-011 ratification gate.
2. **CHANGELOG v7.0 entry final review** — line-by-line verification of `.adna/CHANGELOG.md:31-88` against M02-M11 actual outputs; reconcile drift candidates.
3. **GitHub repo rename execution** per ADR-006 §Migration mechanics 5 steps.
4. **Annotated v7.0 tag execution** — frontmatter flip + CHANGELOG date fill + `adna_standard.md` line 1483 footer fix + `git tag -a v7.0` + push + GitHub release form publish.
5. **Post-tag verification harness** — [[artifacts/m01_obj6_version_bump_checklist.md|M01 Obj 6 §7]] 10 checks (tag exists local+remote; annotated type; CHANGELOG consistency; frontmatter flipped; Standard footer fixed; fresh-clone smoke; legacy URL 301; no new repo at old slug).
6. **Delivery cascade** — 3 announcement drafts + Daedalus memo + 4 partner-affiliated embargo memos handled per their gates.
7. **Mission close + campaign close + AAR** — M06 row flip + `campaign_adna_v2_infrastructure` status flip + v8 M1.2 amendments fire + STATE.md rewrite for v8 P0 → P1 handoff + AAR at `missions/artifacts/aar_m06_v7_governance_tag.md`.

## §2 Objectives

### Obj 1 — Pre-flight verification + Operator-Decision surfacing

Verify M01 Obj 6 §0 P-1..P-6 satisfied; verify `.adna/.github/deploy_manifest.yaml` already in place (M03 B3 commit `2fe9938`; campaign master M06 row wording is stale — "Move `deploy_manifest`" is already complete); confirm ADR-011 ready for ratification (`status: proposed` → `accepted` at S2 phase gate). Surface 5 operator decisions D1-D5 (see §4) for explicit operator green-light before S2 destructive execution. Standing Order #1 (phase gates are human gates) governs the S1 → S2 transition.

### Obj 2 — CHANGELOG v7.0 entry final review + drift reconciliation

Verify `.adna/CHANGELOG.md:31-88` against M02-M11 actual outputs (line-by-line). Pre-drafted at M01 Obj 6 §1 (2026-05-08); the campaign has since amended in ways the pre-draft does not reflect. Drift candidates to verify at S2 (9):

1. M04b LWX mini-campaign (3 missions; HOME.md template + workspace UX) — likely "Added" entry needed
2. Cross-project routing hook commit `e3b3bcc` (M04 S2; `.adna/CLAUDE.md` §Startup Checklist) — "Added"
3. 4 node_operations skills graduated to `.adna/` (commit `03198f8`) — "Added"
4. HOME.md inline `{{TOKEN}}` comment rephrase (commit `202c9ec`; substitution-source-bloat fix) — "Fixed"
5. 8 self-test fixtures + hook `--self-test` upgrade + 2 in-session defect fixes (M05 S2 commit `dfced67`) — "Added" / "Fixed"
6. ADR-010 ratified at M05 S1 (not M06) — line 62 attribution clarification
7. ADR-009 status: pre-draft says "(M07)" but M07 is partial-absorbed into v8 — re-attribute
8. `LatticeScope.aDNA` planning campaign seed (M10) absorbed into v8 — re-attribute or remove
9. CHANGELOG date placeholder `YYYY-MM-DD` (line 31) — filled at Obj 4 tag execution

Outputs of Obj 2: a drift-reconciliation appendix (S2 artifact at `missions/artifacts/m06_obj2_changelog_drift_reconciliation.md`) + the final CHANGELOG diff. Drift reconciliation lands in `.adna/CHANGELOG.md` as a single commit pre-tag.

### Obj 3 — GitHub repo rename per ADR-006 (Stage A)

Execute ADR-006 [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md#decision|§Decision]] [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md#migration-mechanics|§Migration mechanics]] 5 steps:

1. Operator UI action: `LatticeProtocol/Agentic-DNA` → `<D1 resolved slug>` (Settings → General → Repository name → Save)
2. Verify GitHub URL forwarding (301 on legacy URL via `curl -sI`)
3. Operator-optional remote URL update: `git -C ~/lattice/.adna remote set-url origin https://github.com/<D1 resolved slug>.git`
4. Documentation grep+update sweep (M03 already covered most; verify residual references)
5. Reservation: do NOT create a new repository at `LatticeProtocol/Agentic-DNA` post-rename (would invalidate the redirect)

**D1 resolution** (operator decision at S2 entry; see §4): strict lowercase `adna` per ADR-006 verbatim, OR mixed-case `aDNA` per ADR-006 amendment (Rosetta-recommended — matches GitHub auto-canonicalization observed at M03 S2 + already-flagged M07 deferred item).

### Obj 4 — Annotated v7.0 tag execution (Stage B)

Pre-tag prep (single commit; lands in `.adna` HEAD pre-tag):
- `.adna/CLAUDE.md` frontmatter flip (M01 Obj 6 §2): `version: "6.0"` → `"7.0"`; `updated: 2026-04-03` → `<M06 execution date>`; `last_edited_by: agent_init` → `agent_stanley`; line 10 HTML comment `<!-- v6.0 | 2026-04-03 -->` → `<!-- v7.0 | <M06 date> -->`
- `.adna/CHANGELOG.md:31` date placeholder fill: `YYYY-MM-DD` → `<M06 execution date>`
- `.adna/what/docs/adna_standard.md` line 1483 footer fix: `*End of aDNA Universal Standard v2.0*` → `*End of aDNA Universal Standard v2.2*` (M01 Obj 6 §3; one-line audit fix; Standard track itself does not bump)

Tag command (M01 Obj 6 §5 verbatim):
```bash
git -C ~/lattice/.adna tag -a v7.0 -m "aDNA v7.0 (Governance) — flat repo, node.aDNA, publish-skill rewrite, LatticeScope.aDNA seed.

Major Governance bump. Standard track unchanged (stays at v2.2).

ADRs ratified at this tag: 006 (repo rename), 007 (outer wrapper → template), 008 (airlock stub), 009 (naming convention), 010 (publish-naming), 011 (semver discipline).

Migration: see how/docs/upgrade_v6_to_v7.md (M08a).

Coordinated rollout: per-vault memos delivered to ~17 vaults; external partners notified (Wilhelm Foundation, TAPP, Super League)."
git -C ~/lattice/.adna push origin v7.0
```

D2 (S2 entry) decides any wording amendments to the annotation message. Rosetta recommendation: use M01 Obj 6 §5 baseline verbatim + append 2026-05-18 close-date footer.

GitHub release form publish: target `https://github.com/<D1 resolved slug>/releases/new?tag=v7.0` + paste body from M01 Obj 6 §6 (release notes template) + replace `YYYY-MM-DD` placeholders + click "Publish release."

### Obj 5 — Post-tag verification harness

M01 Obj 6 §7 ten checks (verbatim commands):
1. Local tag exists: `git tag --list "v7.0"` → expect `v7.0`
2. Remote tag exists: `git ls-remote --tags origin v7.0` → expect `<sha>\trefs/tags/v7.0`
3. `git describe --tags HEAD` → expect `v7.0` (if HEAD is the tagged commit)
4. Annotated tag type: `git for-each-ref --format='%(objecttype)' refs/tags/v7.0` → expect `tag` (not `commit`)
5. CHANGELOG date consistent with tag date
6. `.adna/CLAUDE.md` frontmatter `version: "7.0"`
7. `adna_standard.md:1483` reads `v2.2`
8. Fresh-clone smoke test in `/tmp/.adna-smoke-test-v7` (per M01 Obj 6 §7 script): layout matches v7.0 (HOME.md + airlock stub + .gitignore + template_workspace_claude.md + skill_vault_publish.md + upgrade_v6_to_v7.md all present)
9. Legacy URL redirect: `curl -sI https://github.com/LatticeProtocol/Agentic-DNA` → 301
10. No new repo at old slug: `gh repo view LatticeProtocol/Agentic-DNA` → redirect or 404 (no new repo)

Any failure → STOP. Diagnose per M01 Obj 6 §8 failure-recovery table BEFORE the announcement workstream activates. Generalizes M05 AAR §Conceptual contributions #1 (verification-as-first-class-deliverable) to tag execution.

### Obj 6 — Delivery cascade

3 public-announcement drafts (per D4 timing):
- `m08a_github_release_notes_v7.md` — pasted into GitHub release form at Obj 4 (concurrent with tag); flip `status: draft → delivered`
- `m08a_readme_badge_spec.md` — diff applied to `.adna/README.md` + `aDNA.aDNA/README.md` (S2 commit); flip `status: draft → delivered`
- `m08a_social_comms_post_draft.md` — published within 24h post-tag; flip `status: draft → delivered`

Daedalus shipped-memo at `who/coordination/coord_2026_05_18_publish_rewrite_shipped_daedalus.md` (per D3 timing): operator-approved flip `status: draft → ready` (then `delivered` at delivery); Spacemacs Migration Steps 1-4 trigger on delivery. Rosetta recommendation: deliver pre-tag (decouples from tag mechanics).

4 partner-affiliated embargo memos handled per their `delivery_held_until` gates:
- Wilhelm Foundation × 2 (RareArchive + WilhelmAI) — still ADR-010-window; tag firing does not auto-flip; operator decides
- SuperLeague — still operator-approval; tag firing does not auto-flip
- Strategic Interface Protocol — still operator-approval; tag firing does not auto-flip

17 partner-vault coord-ack handling (per D5): passive — multilateral airlock pattern already deployed at M08a; vaults pull v7.0 at their next `git -C .adna pull` on operator-discretionary cadence.

### Obj 7 — Mission close + campaign close + AAR

S3 deliverables:
- M06 mission frontmatter `status: in_progress → completed`; populate `closed_at` + `closed_session` + `actual_sessions`
- M06 row in campaign master mission tree flipped `planned → completed`
- `campaign_adna_v2_infrastructure` master `status: executing → completed` (last v2 mission; per 2026-05-17 v8 amendment scope)
- AAR at `missions/artifacts/aar_m06_v7_governance_tag.md` — lightweight 5-line + 4-category extended findings (Successful patterns / Surprises and friction / Conceptual contributions / Items deferred); style precedent M03 + M04 + M05; load-bearing finding TBD at S3 (candidate: *campaign-close as a distinct mission class* — first instance of a mission that doubles as campaign close)
- v8 M1.2 amendments fire — append to `campaign_adna_serious_tool_readiness.md` frontmatter naming M06 v7.0 tag complete + M1.2 closed + P0 → P1 transition unblocked
- STATE.md rewrite — Last Session block for M06 S3 close; archive M06 S2 block per Standing Order #6; Current Phase + Next Steps + Next Session Prompt route to v8 P1 entry
- Operation Rosetta Phase 8 status confirmation — Phase 8 was absorbed into v8 Phase 5 per 2026-05-17 amendment; ensure no orphaned Rosetta phase references

## §3 Exit gate (S3 mission close)

| # | Box | Source |
|---|---|---|
| 1 | All M01 Obj 6 §0 P-1..P-6 pre-flight checks passed | §5 |
| 2 | ADR-011 ratified `proposed → accepted` (M06 phase gate) | Obj 1 |
| 3 | ADR-006 D1 resolution applied (strict lowercase OR mixed-case decision) | Obj 1 + Obj 3 |
| 4 | CHANGELOG drift reconciled (9 candidates all resolved) | Obj 2 |
| 5 | `m06_obj2_changelog_drift_reconciliation.md` landed at `missions/artifacts/` | Obj 2 |
| 6 | GitHub repo renamed; legacy URL redirect 301 verified | Obj 3 |
| 7 | `adna_standard.md:1483` footer fix applied (v2.0 → v2.2) | Obj 4 |
| 8 | `.adna/CLAUDE.md` frontmatter version 6.0 → 7.0 + line 10 HTML comment | Obj 4 |
| 9 | CHANGELOG date placeholder filled | Obj 4 |
| 10 | Annotated `v7.0` tag created + pushed to `LatticeProtocol/<D1 slug>` | Obj 4 |
| 11 | GitHub release published at `/releases/v7.0` | Obj 4 |
| 12 | Post-tag M01 Obj 6 §7 10 checks all PASS | Obj 5 |
| 13 | 3 public-announcement drafts flipped per D4 | Obj 6 |
| 14 | Daedalus shipped-memo flipped per D3 | Obj 6 |
| 15 | AAR landed at `missions/artifacts/aar_m06_v7_governance_tag.md` | Obj 7 |
| 16 | Campaign master M06 row flipped `completed` | Obj 7 |
| 17 | `campaign_adna_v2_infrastructure` status flipped `executing → completed` | Obj 7 |
| 18 | v8 M1.2 amendments fire executed; STATE.md rewritten for v8 P0 → P1 handoff | Obj 7 |

## §4 Operator decisions required at S2 entry

| # | Decision | Rosetta recommendation | Why |
|---|---|---|---|
| **D1** | ADR-006 lowercase-vs-mixed-case URL slug | **Option A**: amend ADR-006 to canonicalize mixed-case `aDNA` as authoritative URL slug (matches GitHub auto-canonicalization observed at M03 S2; matches `.aDNA` directory-name suffix convention). Option B: enforce strict lowercase `adna` per ADR-006 verbatim (rename at GitHub from current canonical `aDNA` to `adna`). Option C: defer to M07 (but M07 is partial-absorbed into v8). | Removes M03 AAR §Items deferred #1; functionally inert either way (case-insensitive routing); operator's observed UX already accommodates mixed-case |
| **D2** | Tag annotation message wording | Use M01 Obj 6 §5 baseline verbatim + append 2026-05-18 close-date footer + cite ratified ADRs 006-011 list | Verifiable against CHANGELOG entry; reusable template for v8.0 tag |
| **D3** | Daedalus shipped-memo delivery timing | **Pre-tag**: deliver immediately on operator approval (no v7.0 dependency on Daedalus side; Spacemacs Migration Steps 1-4 begin pre-tag) | Decouples Spacemacs unblock from tag mechanics; reduces Daedalus's idle wait |
| **D4** | 3 public-announcement drafts delivery timing | Release notes concurrent with tag push (paste body into GitHub release form); social/comms post within 24h post-tag; readme badge applied to `.adna/README.md` + `aDNA.aDNA/README.md` as part of S2 single pre-tag commit | Sequencing matches M08a publication-log plan |
| **D5** | 17 partner-vault coord-ack — passive vs active | **Passive**: multilateral airlock pattern already deployed at M08a 2026-05-09; vaults pull v7.0 at next `git -C .adna pull` on operator-discretionary cadence | M08a deliverable was the comms; M06 is the tag-firing trigger, not a re-notification |

## §5 Pre-flight gates (M01 Obj 6 §0 verbatim)

| # | Check | Command | Expected | Action if failed |
|---|---|---|---|---|
| P-1 | All M01 ADRs `accepted` (006-011) | `for n in 006 007 008 009 010 011; do grep -l "status: accepted" .adna/what/decisions/adr_${n}_*.md; done` | All 6 paths printed | Resolve open ADRs (ADR-011 at M06 phase gate; others should already be `accepted`) |
| P-2 | M03 flatten shipped | `test -d ~/lattice/.adna && test -f ~/lattice/.adna/.gitignore && ! test -d ~/lattice/adna` | All pass | M03 already complete (2026-05-11); reverify only |
| P-3 | M05 publish-skill family shipped | `ls ~/lattice/.adna/how/skills/skill_{vault_publish,git_remote_setup,deploy}.md` | All three exist | M05 already complete (2026-05-18 S3); reverify only |
| P-4 | M08a upgrade guide shipped | `test -f ~/lattice/.adna/how/docs/upgrade_v6_to_v7.md` | Exists | M08a already complete (2026-05-11); reverify only |
| P-5 | Working tree clean on `main` | `cd ~/lattice/.adna && git status --short && git rev-parse --abbrev-ref HEAD` | Empty + `main` | Commit/stash/checkout as needed; HEAD should be `dfced67` (M05 S2) or later M06 prep |
| P-6 | No pending v7.0 RC tags | `cd ~/lattice/.adna && git tag --list "v7.0*"` | Empty | Investigate provenance with operator if stale tag exists |

## §6 Risk mitigations

| # | Risk | Mitigation |
|---|---|---|
| R1 | GitHub repo rename redirect fails for downstream operators | ADR-006 §Migration mechanics provides indefinite redirect as long as no new repo at old slug; reservation in CHANGELOG entry's "Removed" section; M08a coord memos cover existing-operator remote-URL-update |
| R2 | CI workflow / deploy_manifest hardcoded `Agentic-DNA` slug breaks post-rename | M03 B4 already updated 3 reusable workflows (commit per S2 amendments); Explore Agent 2 confirmed no hardcoded `Agentic-DNA` refs remain in `.adna/.github/`; reverify at Obj 1 P-1..P-6 |
| R3 | CHANGELOG drift undetected; v7.0 release notes diverge from actual outputs | Obj 2 enumerates 9 drift candidates as a verification checklist; S2 drift-reconciliation appendix at [[artifacts/m06_obj2_changelog_drift_reconciliation.md|`m06_obj2_changelog_drift_reconciliation.md`]] is the auditable record (authored in S2) |
| R4 | Tag pushed before CHANGELOG/frontmatter commit lands; orphan tag with stale content | M01 Obj 6 §8 failure-recovery table covers; pre-announcement deletion is allowed (`git tag -d v7.0 && git push origin :refs/tags/v7.0`); post-announcement supersession required per ADR-011 |
| R5 | Partner-vault pre-pull race (vault pulls between rename and tag, gets inconsistent state) | Sequence locked: rename (Obj 3) precedes tag prep + push (Obj 4); inconsistency window is minutes, not hours; passive D5 mitigates (vaults pull at their own cadence anyway) |
| R6 | Pre-push sanitization hook (M05) blocks M06's own commits | Verify M06's commits don't carry secrets, large binaries, or restricted paths; `--no-verify` bypass only as last resort with operator approval + immediate post-push audit (M01 Obj 6 §8 row 6) |

## §7 Standing Orders honored

| Standing Order | Discharge |
|---|---|
| #1 (phase gates are human gates) | S1 → S2 transition requires explicit operator approval at S2 entry; D1-D5 surfaced for explicit decision |
| #2 (destructive actions require confirmation) | Obj 3 GitHub UI rename + Obj 4 tag push are explicitly destructive; both gated on §4 operator decisions |
| #5 (every mission gets an AAR) | Obj 7 ships AAR at `missions/artifacts/aar_m06_v7_governance_tag.md` (lightweight 5-line + 4-category extended; M03/M04/M05 precedent) |
| #6 (archive, never delete) | Pre-announcement tag deletion allowed only per ADR-011 §Reverting rule; post-announcement supersession only; M05 S3 STATE.md block flips to `DEPRECATED-marker` not deleted; partner memos remain `status: draft` if not delivered |
| #7 (dual-audience test) | Developer reads §2 Obj 3-5 commands + §5 pre-flight gates + §6 risks; newcomer reads §0 strategic intent + §1 mission scope + §4 operator decisions (decisions table is dual-audience by construction) |
| #8 (self-reference mandatory) | M06 IS the v7.0 ratification event for ADR-011 (semver discipline); this mission file's structure (7 obj + pre-flight + risks + Standing Order discharge) is the canonical pattern any future Major-or-Minor tag mission reuses (v8.0; v7.1) |
| #9 (upstream spec is source of truth) | M06 cites `.adna/CHANGELOG.md` v7.0 entry (line 31-88) as authoritative; this spec does not duplicate the entry's content |
| #10 (cross-link aggressively) | ≥8 wikilinks: M01 Obj 6 runbook + ADR-006 + 7 partner-prerequisite-artifacts + campaign master + M05 spec + M05 AAR + Daedalus memo + 3 announcement drafts |
| #16 (v7.0 tag dependency hard for v8) | M06 close fires v8 M1.2 checkpoint (per M05 S3 M1.1 precedent); v8 P0 → P1 transition unblocked at this firing |

## §8 Out-of-scope (deferred)

- **M07** (general review + simplify) — partial-absorbed into v8 (review/simplify discipline distributed across v8 phases as adversarial-review track; M07 items 1+4 from M03 AAR + M07 cosmetic items from M04 AAR all absorbed)
- **M08b** (post-flatten ecosystem propagation receipts) — informational; parallel post-M06 ship; no v8 dependency (M05 AAR Items deferred #11)
- **M08c** (standalone installer) — absorbed into v8 Phase 4; v7.0 tag is its hard prereq (2026-05-17 v8 amendment)
- **M09** (token audit) — absorbed into v8 Phase 1 (v8 M1.3)
- **M10** (LatticeScope.aDNA planning) — absorbed into v8 Phase 1 (v8 M1.4)
- **M11** (final review + next campaign seed) — absorbed into v8 Phase 6 (v8 M6.4)
- **Spacemacs Migration Steps 5-8** (delete `.publish-clone/` + retire local rsync skill + close backlog idea) — `campaign_adna_v3_ecosystem_compliance` M05-EC owns (v3-EC opens at v8 P6 close per 2026-05-17 amendment)

## §9 Cross-vault touch points

- **17 partner vaults** carrying `.adna/` template — inherit v7.0 at next `git -C .adna pull` (passive per D5; all `coord_2026_05_09_v7_*.md` memos unfreeze at tag firing)
- **Spacemacs.aDNA / Daedalus** — Daedalus shipped-memo at [[../../../../who/coordination/coord_2026_05_18_publish_rewrite_shipped_daedalus.md|`coord_2026_05_18_publish_rewrite_shipped_daedalus.md`]] flipped per D3 (recommended pre-tag); additive to predecessor bilateral co-sign [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] which stays `status: completed`; Spacemacs Migration Steps 1-4 trigger on delivery
- **Wilhelm Foundation × 2 vaults** (RareArchive + WilhelmAI) — partner-affiliated embargo memos still ADR-010-window; tag firing does not auto-flip; operator decides
- **SuperLeague + Strategic Interface Protocol** — partner-affiliated embargo memos still operator-approval; tag firing does not auto-flip
- **v8 campaign** (`campaign_adna_serious_tool_readiness`) — P0 → P1 transition unblocked at M06 close (Standing Order #16 hard dependency satisfied); v8 M1.2 amendments-entry fires per Obj 7

## §10 Session log

- **S1** (2026-05-18T16:40:42Z, `session_stanley_20260518_164042_adna_v2_m06_s1`) — open + spec authoring; 7 objectives + 5 operator decisions + pre-flight gates + risk mitigations + Standing Order discharge + 18 exit-gate boxes; non-destructive; zero `.adna/` touches; zero partner-vault touches; zero memo deliveries; zero status-flip on announcement drafts (those wait for S2). **S2 entry requires explicit operator approval at S2 entry per Standing Order #1.**

## §11 Self-reference (Standing Order #8)

This mission file IS the v7.0 ratification event for ADR-011 (semver discipline) — the policy this mission applies. The spec structure (frontmatter → strategic intent → mission scope → 7 obj → exit gate → 5 operator decisions → pre-flight gates → risks → Standing Order discharge → out-of-scope → cross-vault touch points → session log → self-reference → dual-audience → forward-references) is the canonical pattern any future Major-or-Minor tag-execution mission will reuse: v8.0 at v8 P6 close; future v7.1 minor bump; future Standard v2.3 bump. M06 doesn't formalize this as `template_tag_execution_mission.md`; if v8.0 + one more tag mission reuse the shape, the next campaign extracts it.

## §12 Dual-audience test (Standing Order #7)

- **Developer**: reads §2 Obj 3 + Obj 4 + Obj 5 (copy-pasteable commands from M01 Obj 6 runbook); §5 pre-flight verification commands; §6 risk mitigations (verification methods); §3 exit-gate checklist
- **Newcomer**: reads §0 strategic intent (why M06 matters now: v8 P1 entry + 17 partner vaults + 3 announcement drafts unfrozen); §1 mission scope (7 deliverables in plain language); §4 operator decisions table (decision rationale is dual-audience by construction); §9 cross-vault touch points (the ecosystem-wide impact narrative)

## §13 Forward-references

- **v8 P1 entry** — unblocked at M06 close per Standing Order #16; M1.2 amendments-entry fires at S3 against [[../../campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|`campaign_adna_serious_tool_readiness.md`]] master
- **Standalone installer (v8 Phase 4)** — depends on v7.0 tag existing at `LatticeProtocol/<D1 slug>`
- **17 partner-vault v7.0 migrations** — vaults pull at next `git -C .adna pull` on operator-discretionary cadence
- **`campaign_adna_v3_ecosystem_compliance`** — opens at v8 P6 close per 2026-05-17 amendment; consumes M06's tag baseline + M08b receipts
- **Operation Rosetta Phase 8** — absorbed into v8 Phase 5 per 2026-05-17 amendment; status confirmation at S3 (no orphaned Rosetta phase references)
