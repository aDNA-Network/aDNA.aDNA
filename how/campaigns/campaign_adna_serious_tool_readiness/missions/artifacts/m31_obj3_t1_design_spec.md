---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m31_obsidian_stabilization_core
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.1
obj: 3
track: T1
finding_id: F-S2-1
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395)"
upstream_state_at_authoring: v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit)
created: 2026-05-21
updated: 2026-05-21
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_1, obj_3, t1, fork_propagation, fifth_additive_upstream_candidate, v8_p6_propagation_queue, skill_project_fork, setup_sh, rosetta]
---

# T1 Design Spec — `setup.sh` fork propagation (5th-instance additive-upstream candidate)

> **What this is**: a proposed-patch artifact for `.adna/how/skills/skill_project_fork.md` (the v7.0 fork procedure) that closes the F-S2-1 finding. The fix removes the `R5: rm -f setup.sh` line from the post-fork cleanup block so newly-forked `<project>.aDNA/` vaults retain the universal Obsidian-bootstrap script. **Design-at-P3, propagation-at-P6**: this spec ships as an aDNA.aDNA-resident artifact under `missions/artifacts/`; v8 P6 owns the upstream cycle that lands the patch on `LatticeProtocol/aDNA` as the 5th instance in the single-commit additive-upstream pattern.
>
> **Why this is a 5th-instance candidate**: it satisfies all three criteria of the single-commit additive-upstream pattern — (1) one logical commit in `.adna/`; (2) additive (no behavior change for existing forks; only future forks gain the fix); (3) verifiable post-landing via a single smoke test (fresh fork retains `./setup.sh` at vault root). Lineage of 4 prior instances: ADR-008 (M03 airlock template stub) + commit `e3b3bcc` (v7.0 M04 S2 cross-project routing hook) + commit `8673383` (v7.x skill_node_bootstrap_interview) + commit `202c9ec` (v7.x HOME.md inline-comment plain-prose rephrase — its own commit message explicitly names "4th instance of single-commit additive-upstream pattern").
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/aDNA/.adna/`. All patch text is literal diff content for v8 P6 to apply.

## 1. Finding statement (F-S2-1)

> `skill_project_fork.md` creates a forked `.aDNA/` vault but does NOT propagate `.adna/setup.sh` into the new vault. The bootstrap script that installs Obsidian plugin binaries + theme files is absent from forked vaults, breaking the plugin-deployment chain from day one.
>
> — [[../../../../how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md|backlog_F_S2_1_setup_sh_fork_propagation.md]] §Summary (2026-05-13; M-LWX-03 S2 surfaced)

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z)**: confirmed. Read of `.adna/how/skills/skill_project_fork.md` Step 3 (lines 86-103) shows the offending `R5: rm -f setup.sh` line still present at v7.0 frozen state `27e6395`. Self-instruction in Step 3 lines 112-113 ("Run `./setup.sh` to download plugins and theme") is internally inconsistent with R5: the script is being deleted at the very point the user is told to run it.

## 2. Root cause

Three layered causes that compound:

1. **R-list inheritance from a stale model.** The R2-R7 exclusion list was authored in M01-M03 of `campaign_adna_v2_infrastructure` to handle the post-`adna` rename + repo-flatten transition. At that time the operator-facing rationale was "the template carries its own CI / README / LICENSE which the forked project shouldn't inherit." `R5: rm -f setup.sh` was added under the assumption that "setup.sh is template-only Obsidian bootstrap; project doesn't need" — an assumption that was already false at authoring (Obsidian configs persist into the fork; plugins are explicitly removed by Step 3's `rm -rf .obsidian/plugins/ .obsidian/themes/`; the operator MUST run setup.sh in the fork to re-populate them).

2. **`cp -r` post-fork behavior was misread.** Step 3 line 84 (`cp -r .adna/ <project>.aDNA/`) brings every file under `.adna/` into the new vault — INCLUDING `setup.sh`. The R5 line therefore actively *removes* something `cp -r` had correctly propagated. The intent of R5 was "don't propagate this" — but `cp -r` already propagates it, and the fix should have been "don't remove what `cp -r` propagated" instead of "remove what `cp -r` propagated."

3. **`setup.sh` is already self-locating** — line 11 reads `VAULT_DIR="$(cd "$(dirname "$0")" && pwd)"`. The script determines its target vault directory from its own location. When `setup.sh` sits at `<project>.aDNA/setup.sh`, it bootstraps `<project>.aDNA/.obsidian/`. No additional copy / chmod / refactor is required — `cp -r` already does the right thing.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes |
|---|---|---|---|---|---|
| 1 | **Simple R5 removal** (no `cp` / no `chmod`). Delete the `rm -f setup.sh` line + update the R-list comment. `cp -r` already propagated `setup.sh`; the existing self-locating logic at line 11 of setup.sh handles the rest. | `.adna/how/skills/skill_project_fork.md` 1 line removed + 1 comment updated (= ~3 lines net diff) | None | New forks gain setup.sh at vault root; existing forks unchanged | None expected; smoke test = fresh fork has `setup.sh` + executable bit preserved by `cp -r` |
| 2 | **Explicit `cp` + `chmod`** (per F-S2-1 §Proposed approaches Option 1 literal). Remove the `rm -f setup.sh` line AND add `cp .adna/setup.sh <project>.aDNA/setup.sh; chmod +x setup.sh` after the R-list block. | `.adna/how/skills/skill_project_fork.md` 1 line removed + ~3 lines added | None | Same as Option 1; the explicit `cp` is redundant with `cp -r` but defensive against future refactors that might shrink `cp -r`'s scope | None expected; same smoke test as Option 1 |
| 3 | **Self-locating refactor** (per F-S2-1 §Proposed approaches Option 2). Refactor `setup.sh` to accept `--vault <path>` so operators can run `~/aDNA/.adna/setup.sh --vault <name>.aDNA` from anywhere; deprecate per-fork copies of setup.sh. Keep R5 (remove from fork) since the central template script is the single source of truth. | `.adna/setup.sh` heavy refactor (add arg parser; replace `VAULT_DIR=$(cd ...)` with arg-aware logic; add help text) + `.adna/how/skills/skill_project_fork.md` 1 comment updated; setup.sh stops propagating | Operator-facing: must remember the central script invocation pattern; loses self-locating convenience | Existing forks that already have a copy of setup.sh diverge from the new central one; need a one-time deprecation memo | Central template upgrades silently propagate to all vaults (good); offline operation requires `.adna/` to be present (acceptable per workspace contract) |

## 4. Recommendation

**Option 1** — simple R5 removal — is recommended.

### Rationale

- **Minimal diff surface** (~3 lines). The single-commit additive-upstream pattern explicitly values minimal commits for ecosystem-wide propagation auditability.
- **Zero operator-facing surface change.** No new flags, no new invocation patterns; the existing operator instruction "Run `./setup.sh`" in Step 3 line 112-113 becomes truthful for the first time.
- **No redundant `cp` step.** `cp -r .adna/ <project>.aDNA/` (Step 3 line 84) already propagates `setup.sh`; an explicit `cp` after the R-list is redundant unless we anticipate a future refactor of Step 3's `cp -r` to a narrower selector (no such refactor is planned in the v8 roadmap).
- **Self-locating logic already handles target-vault resolution** (`setup.sh:11` `VAULT_DIR="$(cd "$(dirname "$0")" && pwd)"`). No additional plumbing required.
- **Fifth-instance pattern fit.** Aligns with ADR-008 (single ADR + single template file) + `e3b3bcc` (single hook addition) + `8673383` (single skill addition) + `202c9ec` (single rephrase). T1 = single line removal + single comment update.
- **Option 2 is acceptable as a defensive variant** — choose if v8 P6 prefers to harden against future `cp -r` refactors. Option 3 is deferred indefinitely (heavier refactor; no operator demand surfaced; loses offline-fork ergonomics).

### Acceptance smoke test (post-P6 landing)

```bash
# Fresh fork via skill_project_fork.md, then:
cd ~/aDNA/<test_project>.aDNA/
[ -f setup.sh ] && echo "PASS: setup.sh present" || echo "FAIL: setup.sh missing"
[ -x setup.sh ] && echo "PASS: setup.sh executable" || echo "FAIL: setup.sh not executable"
./setup.sh --force 2>&1 | tail -5  # should report plugin install attempts
```

Expected: PASS × 2 + plugin-install report (non-zero exits acceptable if offline).

## 5. Literal patch text

### Patch A — `.adna/how/skills/skill_project_fork.md`

```diff
--- a/how/skills/skill_project_fork.md
+++ b/how/skills/skill_project_fork.md
@@ -86,11 +86,12 @@ cp -r .adna/ <project_name>.aDNA/
 cd <project_name>.aDNA/

 # Post-v7.0 (M03 flatten) exclusions: .adna/ IS the cloned repo, so the cp -r
 # carries through the template's repo-level files. Remove them so the new project
-# starts clean per regression-test R2-R7 (M01 Obj 2 runbook §6):
+# starts clean per regression-test R2-R7 (M01 Obj 2 runbook §6). Note: setup.sh
+# is PRESERVED (T1 fix per M3.1; setup.sh is universal Obsidian bootstrap and
+# is self-locating via $(cd "$(dirname "$0")" && pwd) at line 11):
 rm -rf .git              # R1: discard template git history (skill_project_fork installs fresh below)
 rm -rf .github           # R2: no CI configs leaked into forked project
 rm -f README.md          # R3: no template README at fork root (project authors own)
 rm -f LICENSE            # R4: no template LICENSE (project picks own license)
-rm -f setup.sh           # R5: setup.sh is template-only Obsidian bootstrap; project doesn't need
+# R5 REMOVED in v8 P6 propagation cycle (M3.1 T1 fix; F-S2-1):
+# setup.sh is preserved so the forked project can run `./setup.sh` per Step 3 below.
 # R6 prepare_for_onboarding.sh is no-op at fork root (moved to how/skills/l1_upgrade/ in v7.0 M03 B2)
 # R7 deploy_manifest.yaml is no-op at fork root (moved to .github/ in v7.0 M03 B3 — covered by rm -rf .github above)
```

### Patch B — defensive `chmod +x` (optional; Option 2 variant)

Append immediately after the R-list block (before the `rm -rf .obsidian/plugins/...` line):

```diff
+# Defensive: ensure setup.sh is executable post-fork (cp -r preserves mode,
+# but file managers / archive extractions sometimes strip it). T1 fix per M3.1.
+chmod +x setup.sh
+
 # Preserve portable Obsidian config (settings, appearance, snippets)
 # but remove plugin binaries (15MB+) — user runs setup.sh to install them
 rm -rf .obsidian/plugins/ .obsidian/themes/
```

**v8 P6 default**: ship Patch A only (Option 1). Patch B (Option 2 variant) is optional and operator-discretionary at P6 ratification.

### Patch C — Step 3 narrative paragraph (line 108-113) update

```diff
@@ -108,11 +108,12 @@ This gives the new project:
 - The full `who/what/how/` triad structure
 - All templates, skills, context library, and lattice tools
 - A fresh git repository with no history
-- Portable Obsidian config (app settings, appearance, CSS snippets, hotkeys, plugin list)
+- Portable Obsidian config (app settings, appearance, CSS snippets, hotkeys, plugin list, `setup.sh` bootstrap script)
 - Run `./setup.sh` to download plugins and theme (~15MB, requires network)
+- If first-open in Obsidian clobbers the layout (NN tab not loaded yet), run `./setup.sh --reset-layout` to restore (T2; see m31_obj4 design spec)
```

### Patch D — Step 5 "Offer Immediate Onboarding" (line 137-148) augmentation

```diff
@@ -137,13 +137,17 @@ Ask the user:
 > "Your project is ready at `<path>`. Would you like to run the onboarding interview now to customize it for your domain? Or you can open it later — the setup will trigger automatically on first run."

+**Before any Obsidian interaction**:
+- Instruct the user to run `./setup.sh` from the project root to download plugins + theme (~15MB; requires network).
+- If the operator opens the vault in Obsidian BEFORE running `./setup.sh --reset-layout`, the curated layout (NN pinned in left sidebar) may be clobbered on first save — see T2 design spec for the recovery path.
+
 **If now:**
 - Instruct the user to open a new Claude Code session in the project directory: `cd <project_path>` then run `claude`
```

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19 (phase exit = human gate). v8 P6 propagation queue includes T1 (this spec) alongside 7+ prior P2 doctrinal additions (AGENTS.md invariants + ADR-022 + ADR-016 amendment + Project SO #11 + Heavy-File Read Convention + T1 + T2 + …). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run the smoke test (§4 Acceptance) against the *current* `.adna/` HEAD at P6 entry. The patch text in §5 was authored against `27e6395`. If `.adna/` HEAD has advanced (e.g., v7.1 patch release), refresh the patch against the new HEAD before commit. | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches the upstream_state_at_authoring frontmatter OR refresh memo lands in `missions/artifacts/` |
| **P6 commit** | Single additive commit to `.adna/` with message: `v7.x: preserve setup.sh in skill_project_fork.md (T1 fix per M3.1; F-S2-1; 5th instance of single-commit additive-upstream pattern)`. Patch A applied; Patch B optional; Patch C + D applied if Step 3/5 narrative updates are accepted. | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; commit message names "5th instance" explicitly |
| **P6 post-commit smoke** | Run §4 acceptance smoke test on a fresh fork created via the updated `skill_project_fork.md`. | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS × 2 + plugin-install report |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T1 fix; for forks made between v7.0 and v7.x, document one-time recovery (`cp .adna/setup.sh <forked-vault>/setup.sh && chmod +x setup.sh`). | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 fork behavior (existing forks unaffected); first new fork after the upstream commit lands with setup.sh present + executable + functional.

**P6 rollback path**: if smoke test fails or partner vaults report a regression, revert Patch A via `git revert` (single-commit revert; trivially reversible — that's the core advantage of single-commit additive-upstream pattern).

## Cross-references

- [[../mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] — parent mission
- [[../../../../how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md|F-S2-1 backlog]] — finding source + 3-option matrix substrate
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T1 track substrate
- [[m31_obj4_t2_design_spec.md|T2 design spec]] — companion (`--reset-layout` flag adds to setup.sh; T1 makes setup.sh available to consume the flag)
- [[../../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008]] — 1st instance of single-commit additive-upstream pattern (airlock template stub at `.adna/how/airlock/AIRLOCK.md`)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership

## Prior-instance citation table (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1 | ADR-008 — airlock template stub at `.adna/how/airlock/AIRLOCK.md` | M03 S3 ratified 2026-05-11; commit `6f1822a` landed template-stub | ADR + single template file | M03 (campaign_adna_v2_infrastructure) |
| 2 | `e3b3bcc` — cross-project routing hook for node.aDNA-aware forks | v7.0 M04 S2 commit | Single hook addition | M04 |
| 3 | `8673383` — `skill_node_bootstrap_interview` skill (hybrid bootstrap UX) | v7.x commit | Single skill file addition | campaign_lattice_workspace_ux M-LWX-01 |
| 4 | `202c9ec` — HOME.md inline-comment plain-prose rephrase | v7.x commit (self-names "4th instance" in commit message body) | Single content rephrase | campaign_lattice_workspace_ux M-LWX-03 Finding 1 |
| **5** | **T1 — preserve setup.sh in skill_project_fork.md** | **v8 P6 candidate (this spec)** | **Single line removal + comment update** | **M3.1 (this mission)** |

## Notes

- **Patch A is the load-bearing change**; Patches B-D are operator-discretionary refinements at P6 ratification.
- **F-S2-1's literal "Option 1" wording** ("add `cp .adna/setup.sh <project>.aDNA/setup.sh` + `chmod +x`") is acceptable as the Option 2 variant in §3 above. The Option 1 wording in this spec (simple R5 removal) reaches the same end-state with smaller diff surface; either choice satisfies F-S2-1's acceptance.
- **Dual-audience note**: a newcomer reading Step 3 of `skill_project_fork.md` previously saw setup.sh deleted at R5 and then was told to run setup.sh five lines later — a learnability dead-end. Patch A removes that contradiction; Patch C narrative makes the resolution explicit. Developer-facing: the `diff` text is directly applicable via `git apply` once the patch surface is verified against the then-current `.adna/` HEAD.
- **Self-reference (Standing Order #8 — 10th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The spec uses the hardened routing-layer discoverability re-frame to surface itself to the v8 P6 propagation cycle.
