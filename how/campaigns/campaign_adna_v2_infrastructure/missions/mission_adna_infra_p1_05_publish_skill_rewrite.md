---
type: mission
mission_id: mission_adna_infra_p1_05_publish_skill_rewrite
campaign: campaign_adna_v2_infrastructure
phase: 1
mission_number: 5
slug: publish_skill_rewrite
created: 2026-05-18
updated: 2026-05-18
status: completed
opens_at: 2026-05-18T04:55:58Z
opened_session: session_stanley_20260518_045558_adna_v2_m05_s1
closed_at: 2026-05-18T15:19:07Z+
closed_session: session_stanley_20260518_151907_adna_v2_m05_s3
estimated_sessions: 6-8
actual_sessions: 3   # efficient verification-class path; well within budget
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete
tags: [mission, m05, publish_skill, v7_0, pre_push_hook, adr_010, vault_publish, git_remote_setup, daedalus_airlock_first_instance]
prerequisite_missions:
  - mission_adna_infra_planning_01    # M01 — produced the 4 spec artifacts
  - mission_adna_infra_p1_03_repo_flatten   # M03 — repo-flatten landed
  - mission_adna_infra_p1_04_node_adna_bootstrap   # M04
  - mission_adna_infra_p1_04b_workspace_ux_planning   # M04b
  - mini_campaign_lattice_workspace_ux   # LWX mini-campaign closed 2026-05-13 (soft gate)
prerequisite_artifacts:
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_lattice_publish_rewrite_spec.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/pre_push_hook_spec.md
  - who/coordination/coord_2026_05_08_publish_rewrite.md
target_adr: adr_010_publish_skill_naming
cross_vault_partners:
  - Spacemacs.aDNA (Daedalus — coord memo co-signed 2026-05-08; Steps 1-4 of migration begin post-M05 ship)
fires_v8_checkpoint: M1.1 (campaign_adna_serious_tool_readiness)
unblocks_missions:
  - mission_adna_infra_p1_06_v7_tag    # M06 v7.0 tag execution (requires M05 close)
deliverables_count: 7
---

# M05 — Publish-Skill Family Rewrite

> **Mission opens** the v7.0 publish-skill family rewrite. M01 Obj 4 produced 4 sibling spec artifacts and the Daedalus coord memo was co-signed 2026-05-08; M05 is **implementation, not design**. Closes the long-standing publish-skill bug surfaced by Spacemacs.aDNA (`idea_skill_publish_lattice_git_fix.md`) at the standard level. Critical-path to v7.0 tag (M06) and the v8 M1.1 coord checkpoint.

## Mission scope

Implement the v7.0 publish-skill family per the four sibling spec artifacts:

1. **Ratify** ADR-010 (publish-naming: "Keep + Add" — `skill_lattice_publish.md` unchanged + `skill_vault_publish.md` NEW) at session start (hard gate per naming-adr §8).
2. **Author** formal ADR-010 from `m01_obj4_publish_naming_adr.md` §2 (drafted from the recommendation; `status: accepted` on operator ratification).
3. **Light-edit** existing `skill_lattice_publish.md` per rewrite-spec §2 (cross-link, path-drift check, frontmatter `updated:` + tag, Related block).
4. **Author** new `skill_vault_publish.md` per rewrite-spec §3 (vault → GitHub `git push`; pre-push hook integration; receipt at `who/peers/published/<UTC>.md`).
5. **Author** new `skill_git_remote_setup.md` per git-remote spec §6 (first-time `git remote add origin` + `gh repo create`; idempotent; naming-lint informational until ADR-009 lands at M07).
6. **Author** new `.adna/how/standard/hooks/pre-push-sanitize.sh` per hook spec §3+§4 (R1-R7 rules; LAYER_CONTRACT_VERSION=4.0.1).
7. **Author** new `skill_deploy.md` per rewrite-spec §6 sketch (~30-line Bash installer; idempotent self-test).
8. **(Optional)** `skill_publish_tarball.md` sketch — defer to S2/M07 if S1 budget exhausted.

## Objectives

### Obj 1: Operator gate — ADR-010 ratification

**Hard gate per `m01_obj4_publish_naming_adr.md` §8**: no skill files written until operator ratifies.

**Recommendation**: ACCEPT — Keep `skill_lattice_publish.md` as-is, add `skill_vault_publish.md` as NEW. Reasoning: naming-stability precedent (ADR-009 codifies post-M07); avoids silent semantic changes for vaults inheriting the existing skill.

**Status**: pending operator decision at S1.

### Obj 2: Formal ADR-010 authored

Convert `m01_obj4_publish_naming_adr.md` §2 into formal ADR at `what/decisions/adr_010_publish_skill_naming.md` with `status: accepted`. Reference Daedalus coord memo (already co-signed 2026-05-08) as supporting evidence.

### Obj 3: skill_lattice_publish.md light-edits

5 small edits per `skill_lattice_publish_rewrite_spec.md` §2:
- Overview cross-link to `skill_vault_publish.md` ("Note: ... To publish a *vault* to its GitHub remote, see `skill_vault_publish.md`.")
- Path-drift check (`cd ~/aDNA/lattice-protocol-repo` line 62 — verify)
- Frontmatter `updated: 2026-05-18`
- Frontmatter `tags:` add `lattice_object`
- `Related` block: add `skill_vault_publish.md`, `skill_git_remote_setup.md`, `skill_publish_tarball.md` cross-links

**No content rewrites.** Scope preserved verbatim.

### Obj 4: skill_vault_publish.md (NEW)

Full content from `skill_lattice_publish_rewrite_spec.md` §3:
- Frontmatter (target form §3.frontmatter)
- Overview (vault IS the git repo; cross-link to skill_lattice_publish.md as disambiguation)
- Trigger (when to invoke; pre-requisites)
- Parameters (tag, tag_message, dry_run, force_unsafe)
- Requirements (tools, context files, permissions)
- Implementation (5 steps: pre-flight → hook → push → tag → receipt)
- Outputs + Error Handling
- Related cross-links

### Obj 5: skill_git_remote_setup.md (NEW)

Full content from `skill_git_remote_setup_spec.md` §6:
- Frontmatter (target form §2)
- Trigger + Pre-requisites
- Parameters (org, repo_name, description, homepage, visibility, branch, dry_run)
- Implementation (8 steps: idempotency check → naming-lint → gh auth → gh repo create → git remote add → branch rename → push -u → receipt)
- §9 special cases (template repo exception, 4 grandfathered hyphen-flat vaults, 7 no-remote vaults, LP path-style exception)
- Outputs + Error Handling

**Naming-lint TODO**: Add `# TODO(M07/ADR-009): enable lint-default-on after ratification` comment per spec §6 Step 2.

### Obj 6: pre-push-sanitize.sh hook script (NEW)

At `.adna/how/standard/hooks/pre-push-sanitize.sh`. Full ~130-line bash script per `pre_push_hook_spec.md` §3+§4:
- LAYER_CONTRACT_VERSION=4.0.1 marker comment
- R1: Local/private directory leakage (FAIL)
- R2: Secret-pattern matches (FAIL; redact when reporting)
- R3: Filename patterns (FAIL)
- R4: Large binary files (WARN; configurable via SANITIZE_MAX_BYTES)
- R5: Frontmatter `confidential: true` / `private: true` (FAIL)
- R6: Frontmatter `status: draft` (WARN)
- R7: Operator-defined deny list (FAIL; reads `.adna/sanitize_deny.txt` + vault-local `sanitize_deny.txt`)
- Exit semantics: 0=clean, 1=FAIL/abort, 2=WARN/prompt
- Self-test mode (`--self-test`) — runs against fixtures in `.adna/how/standard/hooks/test_fixtures/{clean,dirty}/`

**Test fixtures**: deferred to S2 (creating fixture content + verifying self-test passes is its own task).

### Obj 7: skill_deploy.md (NEW; installer)

~30-line Bash skill per `skill_lattice_publish_rewrite_spec.md` §6 sketch:
- Verifies hook source exists at `.adna/how/standard/hooks/pre-push-sanitize.sh`
- Copies to `.git/hooks/pre-push` with `chmod +x`
- Runs hook in `--self-test` mode (gated on fixtures existing; warn if not)
- Records install receipt at `who/peers/deployed/<UTC>.md`
- Idempotent

### Obj 8: (Optional) skill_publish_tarball.md sketch

Per spec §6 sketch — defer to S2 or M07 if S1 budget exhausted. Minimal sketch: `git archive` + sha256 manifest sidecar.

## Exit gate (mission close)

**All deliverables landed**:
- [x] ADR-010 ratified + formal file `accepted` (S1)
- [x] `skill_lattice_publish.md` light-edits complete (S1)
- [x] `skill_vault_publish.md` shipped (S1)
- [x] `skill_git_remote_setup.md` shipped (S1)
- [x] `pre-push-sanitize.sh` shipped (LAYER_CONTRACT_VERSION=4.0.1) (S1) — self-test upgraded warn-to-validate at S2 + 2 in-session defect fixes (skill-path mismatch + R2 quote-class) upstream-committed at `.adna` `dfced67`
- [x] `skill_deploy.md` shipped (S1)
- [x] (Optional) `skill_publish_tarball.md` shipped — *sketch* shipped S1 per Obj 8 framing; full content deferred to M07 / v3-EC per AAR §Items deferred #3
- [x] **Test-vault end-to-end verification PASSED** (S2: 5/5 gates — `skill_git_remote_setup` 8 steps + `skill_deploy` 5 steps + `skill_vault_publish` clean-path push + hook FAIL path on R1 violation + cleanup; ran against `ScienceStanley/m05-test` scratch repo)
- [ ] CHANGELOG v7.0 entry updated — *deferred to M06* per AAR §Items deferred #8 (M06 fills the `YYYY-MM-DD` placeholder in `.adna/CHANGELOG.md` v7.0 entry at tag execution; M05 close does NOT fill the placeholder)
- [x] Mission AAR landed at `missions/artifacts/aar_m05_publish_skill_rewrite.md` (S3) — lightweight 5-line + 4-category extended findings; load-bearing finding: **verification-as-first-class deliverable**
- [x] Daedalus / Spacemacs migration Steps 1-4 acknowledged (post-ship; not S1 blocker) — shipped-memo authored S3 at `who/coordination/coord_2026_05_18_publish_rewrite_shipped_daedalus.md` (status `draft`, `delivery_held_until: operator-approval`; additive to predecessor `coord_2026_05_08_publish_rewrite.md` which stays `status: completed`); Steps 1-4 trigger on operator-approved delivery
- [x] **v8 M1.1 coord checkpoint fired** (notify in `campaign_adna_serious_tool_readiness`) — amendments append S3 to v8 master frontmatter naming M05 ship-before complete + M06 still gating
- [x] M06 unblocked (v7.0 tag execution can proceed) — M05 closure clears M06's `blocked_by` constraint per campaign master mission tree; M06 opens at operator discretion per Standing Order #1

## Out-of-scope (deferred)

- **M06 v7.0 tag execution** — separate mission; opens at M05 close.
- **Ecosystem propagation receipts** (M08b) — informational coord memos to 19 vaults; runs in parallel post-M05 ship.
- **Spacemacs migration Steps 5-8** (delete .publish-clone, retire local rsync skill) — covered by `campaign_adna_v3_ecosystem_compliance` M05-EC.

## Cross-vault touch points

- **Spacemacs.aDNA / Daedalus**: coord memo `who/coordination/coord_2026_05_08_publish_rewrite.md` co-signed 2026-05-08; Steps 1-4 of migration begin post-M05 ship announcement.
- **All 19 vaults carrying `skill_lattice_publish.md`**: inherit light cross-link edits at next `git -C .adna pull`; informational only.
- **7 no-remote vaults**: optional opt-in to `skill_git_remote_setup` (Spacemacs, VideoForge, III, VAASLattice, zeta, RareHarness, strategic_interface_protocol).

## Session log

- **S1** (2026-05-18T04:55:58Z, `session_stanley_20260518_045558_adna_v2_m05_s1`) — open + ADR-010 ratify + author all v7.0 publish family deliverables; defer test-vault verification + tarball sketch to S2
- **S2** (2026-05-18T05:49:24Z, `session_stanley_20260518_054924_adna_v2_m05_s2`) — test-vault end-to-end verification PASSED (5/5 gates: skill_git_remote_setup → skill_deploy → skill_vault_publish clean-path → hook FAIL path on intentional R1 violation → scratch dir cleanup; scratch repo deletion deferred to operator post-session per `delete_repo` gh-scope gap); 8 self-test fixtures authored (2 clean + 5 dirty covering R1/R2/R3/R4/R6 + fixture README); hook `--self-test` upgraded from warn-and-skip stub to real validation (PASSED 7/7); **2 in-session defect fixes** — (a) skill path mismatch with post-M03-flatten layout (4 files now check `how/standard/hooks/...` vault-local first, fallback to `.adna/how/...` legacy), (b) R2 secret-pattern quote-class bug (`[\x27\x22]?` was treated literally by POSIX `grep -E`; ANSI-C quoting `$'...'` applied to all 7 secret_patterns so they now correctly catch quoted secrets). M05 stays `in_progress`; S3 = AAR + status flips + v8 M1.1 coord checkpoint fire.
- **S3** (2026-05-18T15:19:07Z, `session_stanley_20260518_151907_adna_v2_m05_s3`) — mission close. AAR landed at `missions/artifacts/aar_m05_publish_skill_rewrite.md` (lightweight 5-line + 4-category extended findings; **load-bearing finding: verification-as-first-class deliverable** — S2 ran the full publish path against a real GitHub remote, surfacing 2 defect classes that spec-only review missed; defects fixed in-session). 7 Successful patterns + 4 Surprises and friction + 5 Conceptual contributions + 12 Items deferred. Mission frontmatter `status: in_progress → completed`; `closed_at` + `closed_session` + `actual_sessions: 3` populated. All exit-gate boxes ticked except CHANGELOG v7.0 entry box (deferred to M06 tag execution per AAR §Items deferred #8) and `skill_publish_tarball.md` full content (sketch sufficient per Obj 8; full content M07 / v3-EC). Campaign master `amendments:` appended with M05-close entry; M05 mission tree row flipped to `completed`. **v8 M1.1 coord checkpoint fired** — amendments append to `campaign_adna_serious_tool_readiness.md` frontmatter naming M05 ship-before complete + M06 still gating + forward-ref to this AAR. **Daedalus shipped-memo authored** at `who/coordination/coord_2026_05_18_publish_rewrite_shipped_daedalus.md` (additive to predecessor `coord_2026_05_08_publish_rewrite.md`; status `draft`, `delivery_held_until: operator-approval`; v7.0 commit pins to `.adna` S1 `f9c49ea` + S2 `dfced67`; Migration Steps 1-4 trigger on delivery). STATE.md rewritten: M05 S2 "Last Session" block flipped to `## Last Session DEPRECATED-marker` per Standing Order #6 archive-not-delete; new "Last Session" block for M05 S3 close; Current Phase + Active Campaigns v2 row + Next Steps + Next Session Prompt all updated to route at M06 entry. **Hard constraints honored throughout 3-session arc**: M08a + M03 + M04 + M04b + LWX outputs untouched; ADRs 004/005/006/007/008/009/010/013 all stay `accepted`; 4 partner-affiliated memos still `status: draft` + `delivery_held_until` preserved; 3 public-announcement drafts still `delivery_held_until: M06-tag-ship`; finalized upgrade guide stays `status: finalized`; node.aDNA/ untouched; workspace router untouched; no v7.0 tag execution (M06's job); no GitHub repo rename (M06 / ADR-006); upstream `LatticeProtocol/adna` at HEAD `dfced67` (M05 S2; not modified at S3). M06 unblocks at this S3 close; opens at operator discretion per Standing Order #1 (phase gates are human gates).

## Self-reference (Standing Order #2)

This mission file IS the v7.0 publish-skill model in working form:
- Names the existing `skill_lattice_publish.md` as preserved (not renamed) — the campaign's first action under M07's not-yet-codified ADR-009 naming convention
- Cross-links 4 spec artifacts + 1 coord memo + 1 ADR — graph density per Standing Order #10
- Dual-audience: developers find implementation steps (Objectives); newcomers find the why (mission scope §)

## Dual-audience test (Standing Order #7)

- **Developer**: reads Objectives → finds copy-pasteable spec references; can implement Obj 2-7 from the 4 spec artifacts without further context loading
- **Newcomer**: reads mission scope → understands this is the publish-skill rewrite that resolved a Spacemacs-surfaced bug at the standard level, shipping the v7.0 publish family

## Risks

| Risk | Mitigation |
|---|---|
| ADR-010 ratification kicks back | Hard gate at S1; prevents wasted skill-file authoring |
| S1 budget exhausted before all skills land | Defer tarball sketch + (worst case) skill_deploy to S2; ensure ADR-010 + vault_publish + git_remote_setup + hook script land as minimum-viable S1 |
| Test-vault verification reveals spec gaps | S2 surfaces; either patch in-session or open M05 sub-objective for spec amendment |
| Hook regex false positives | R2 supports `# pragma: allowlist secret` override; ship with conservative regex set |

## Forward-references

- **M06** (v7.0 tag execution) — opens at M05 close; depends on M05 deliverables being in the template
- **M07** (general review + simplify) — runs §Obj 7 (a) skill-freshness audit on new skills; codifies ADR-009 naming convention
- **M08a** (upgrade guide) — already shipped; references v7.0 publish-skill family per `m01_obj4_publish_naming_adr.md` §5 narrative
- **M08b** (ecosystem propagation receipts) — informational coord memos post-M05 ship
- **v8 M1.1** (coord checkpoint in `campaign_adna_serious_tool_readiness`) — fires at M05 close
- **`campaign_adna_v3_ecosystem_compliance` M05-EC** — Spacemacs migration Steps 5-8
