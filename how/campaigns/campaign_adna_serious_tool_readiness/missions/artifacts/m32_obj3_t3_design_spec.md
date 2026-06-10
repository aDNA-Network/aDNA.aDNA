---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m32_obsidian_stabilization_extension
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.2
obj: 3
track: T3
finding_id: F-S2-2
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395)"
upstream_state_at_authoring: v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit)
created: 2026-05-21
updated: 2026-05-21
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_2, obj_3, t3, plugin_binary_install_validation, silent_failure_closure, v8_p6_propagation_queue, setup_sh, skill_node_health_check, skill_project_fork, six_section_structure, sixth_or_bundled_additive_upstream_candidate, rosetta]
---

# T3 Design Spec — Plugin-binary install validation (`setup.sh --verify` + health-check integration + fork-time gate)

> **What this is**: a proposed-patch artifact for `.adna/setup.sh` (new `--verify` mode), `.adna/how/skills/skill_node_health_check.md` (verify sub-check integration), and optionally `.adna/how/skills/skill_project_fork.md` (fork-time gate after end-of-fork onboarding offer). The fix closes the **silent-failure mode** where `community-plugins.json` enables plugins but the corresponding `.obsidian/plugins/<id>/main.js` binaries are absent, causing Obsidian to render empty navigation without any warning. Operator cannot distinguish "plugin broken" from "plugin not installed" from the UI.
>
> **Design-at-P3, propagation-at-P6**: this spec ships as an aDNA.aDNA-resident artifact under `missions/artifacts/`; v8 P6 owns the upstream cycle that lands the patches on `LatticeProtocol/aDNA`. The 3 patches may land as a single bundled commit OR as separate commits (v8 P6 operator decision; §6 propagation contract enumerates both paths).
>
> **Bundle vs. separate v8 P6 candidacy**: T3's primary patch (`--verify` mode) is the **6th-instance additive-upstream candidate** after T1's 5th. Alternative bundle: T1 + T3 land together as a single "setup.sh hardening" commit (still single-commit additive-upstream from the *commit count* perspective; the pattern is about logical-commit minimalism, not file-count). v8 P6 decision at entry-gate per Campaign SO #5 (absorbed-campaign) lineage.
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/aDNA/.adna/`. All patch text is literal diff content for v8 P6 to apply.

## 1. Finding statement (F-S2-2)

> Obsidian's `community-plugins.json` lists ENABLED plugins, but Obsidian does NOT auto-download from this list. If `.obsidian/plugins/<plugin-id>/` is missing for an entry, Obsidian silently shows empty navigation — no error toast, no warning. Operator can't tell whether plugins are "broken" or "not installed" from the UI.
>
> — [[../../../../how/backlog/backlog_F_S2_2_config_binary_asymmetry.md|backlog_F_S2_2_config_binary_asymmetry.md]] §Summary (2026-05-13; M-LWX-03 S2 surfaced; symptom: operator's first-open reported "doesn't seem to have Notebook Navigator installed" with no error toast)

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z; inherited by M3.2 per mission spec §Current State)**: confirmed via static analysis of `.adna/setup.sh:97-145` + `.adna/.obsidian/community-plugins.json`. The setup.sh script downloads 15 plugins from GitHub releases-latest endpoint; failure modes are reported per-plugin via colored `[FAIL]` lines in the Verification block (lines 186-202). Two gaps:

1. **No standalone verify mode**: `setup.sh` only validates plugin presence as a side effect of running install. There is no way to ask "are the currently enabled plugins all installed?" without re-running install (which redownloads, wasting bandwidth) or grepping the filesystem manually.
2. **No skill-level integration**: `skill_node_health_check.md` Step 5 (line 102-108) checks for the 4 node-skill files but does NOT cross-check `community-plugins.json` against `.obsidian/plugins/<id>/main.js`. A vault could pass health check with broken Obsidian navigation.

## 2. Root cause

Three layered causes that compound:

1. **Obsidian's security-conscious design** — `community-plugins.json` is a post-install enable manifest; binaries must already exist in `.obsidian/plugins/<id>/` for Obsidian to load them. There is no auto-fetch from GitHub releases on first sight of an enabled-but-missing plugin. This is sensible (no auto-downloads of arbitrary code) but creates a silent failure mode when `setup.sh` hasn't run or has failed partially.

2. **`setup.sh`'s OK/MISSING table is run-time only** — the verification block at lines 186-202 of setup.sh prints a table during install execution. After install, the verification state is lost: nothing on disk records "these plugins were verified at time T." A subsequent agent or operator session cannot ask "is this vault's plugin-binary state consistent with `community-plugins.json`?" without re-running setup.

3. **Health check skipped plugin-binary validation** — `skill_node_health_check.md` was authored for `node.aDNA/` operational governance (Step 1-12 cover top-level files, scaffolds, inventory, identity, federation, frontmatter, etc.) but Obsidian plugin-binary state was scoped out at v0.1 graduation. The skill is the natural integration point for cross-cutting "is this vault healthy" checks; T3 extends it.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **`setup.sh --verify` primitive** (read-only mode; new flag). Read `community-plugins.json`, check each enabled plugin has populated `.obsidian/plugins/<id>/main.js` + `manifest.json`. Report mismatch via colored output + exit code (0 = healthy, 1 = mismatch). | `.adna/setup.sh` ~25-35 LOC (arg parser extension + new verify code path that short-circuits before install loop) | New operator-facing flag; explicit; read-only | Verify-only mode adds; existing modes unchanged | Pure read; idempotent; safe to run anytime. Fall-through if `community-plugins.json` missing (skips check; not failure) |
| 2 | **`skill_node_health_check.md` sub-check** (integration). Add a new Step (Step 5b or Step 12 successor) that invokes `setup.sh --verify` (or implements check inline) and surfaces result as a health-check item. | `.adna/how/skills/skill_node_health_check.md` ~20-30 LOC (new step + exit-code mapping) | Surfaces via existing `skill_node_health_check` invocation pattern; no new operator command | Health check exit code extends to include plugin-binary state | Depends on Option 1's `--verify` flag landing first (or implements check inline; redundant code path) |
| 3 | **`skill_project_fork.md` fork-time gate** (optional; one-shot). At end-of-fork (Step 5 "Offer Immediate Onboarding"), invoke `setup.sh --verify` automatically + warn operator before declaring fork complete. | `.adna/how/skills/skill_project_fork.md` ~5-10 LOC (Step 5 augmentation) | Operator sees verify output as part of post-fork message | Fork operations gain explicit verify step | Fresh forks always start with NO plugins (binaries absent); verify will report ALL plugins missing — so the gate must be informational ("run ./setup.sh to install"), not a hard fail |
| 4 | **All 3 layered** (F-S2-2's recommendation). Option 1 = primitive; Option 2 = ongoing-health integration; Option 3 = fork-time gate. | Sum of Options 1+2+3 (~55-75 LOC across 3 files) | All three operator surfaces simultaneously: standalone `--verify` flag, health-check integration, fork-time gate | All three behaviors land together | All three options' trade-offs apply; defensive depth at the cost of more diff surface |

## 4. Recommendation

**Option 4 — all 3 layered** — is recommended, matching F-S2-2's `## Proposed approaches` line 33 ("Recommend implementing all 3 — they layer (verify primitive → health check integration → fork-time gate)") verbatim.

### Rationale

- **Layering matches the operator's failure-detection latency need.** Option 1 catches "I just ran setup.sh and want to confirm" (immediate). Option 2 catches "this vault has been around for weeks; is the plugin state still consistent?" (ongoing). Option 3 catches "I just forked and want to know what's next" (one-shot). Each layer has a different failure-detection window; closing all three is what reduces the silent-failure rate to zero.
- **Option 1 is the load-bearing primitive.** Options 2 and 3 depend on Option 1's `--verify` flag (or would need to re-implement the check inline, duplicating logic across files). Land Option 1 first; Options 2+3 consume it as a subprocess invocation.
- **Option 3's "always reports missing on fresh fork" is by design.** Fresh forks legitimately have zero plugins (setup.sh hasn't run); verify reports MISSING for all 15. The fork-time gate is INFORMATIONAL — it tells the operator "you have 15 enabled-but-missing plugins; run `./setup.sh` to install them." This is what the operator SHOULD see at end-of-fork, replacing the current silent state.
- **Cross-cut with T1**: T1 (M3.1) preserves `setup.sh` in the forked vault (removes `R5: rm -f setup.sh`). T3 adds `--verify` mode to setup.sh. Without T1, the fork has no setup.sh to invoke `--verify` against. **T1 and T3 are paired**; v8 P6 may bundle them.
- **Cross-cut with T4 + Obj 5 (`skill_obsidian_canonicalize.md`)**: T4 design (this mission) introduces a unified canonicalize/reset-layout/verify skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md`. The skill's `--verify` mode invokes `setup.sh --verify` as the underlying primitive. T3 lands the primitive in `.adna/setup.sh`; the new skill at `aDNA.aDNA/` consumes it. **T3's `--verify` is the single source of truth for plugin-binary state; the new canonicalize skill orchestrates broader checks but delegates plugin-binary truth to `setup.sh --verify`.**

### Acceptance smoke test (post-P6 landing)

```bash
# Scenario A: fresh fork → all enabled plugins should report MISSING
cd ~/aDNA/<test_project>.aDNA/
./setup.sh --verify
# Expect: exit 1 + "15 plugins enabled, 0 installed" report

# Scenario B: fork + setup.sh → all enabled plugins should report OK
./setup.sh
./setup.sh --verify
# Expect: exit 0 + "15 plugins enabled, 15 installed" report

# Scenario C: simulate broken state → drop one plugin binary + verify
rm -rf .obsidian/plugins/notebook-navigator/main.js
./setup.sh --verify
# Expect: exit 1 + "1 plugin enabled but missing binary: notebook-navigator"

# Scenario D: health-check integration → run skill_node_health_check at the node level
# (assumes node.aDNA/ governance loaded; T3 extends skill_node_health_check)
# (For aDNA.aDNA / non-node vaults, T3's plugin-binary check is a separate sub-step or N/A)
node.aDNA/how/skills/skill_node_health_check.md --vault <test_project>.aDNA
# Expect: report includes plugin-binary state for each .aDNA vault touched

# Scenario E: idempotency + read-only
./setup.sh --verify; ./setup.sh --verify; ./setup.sh --verify
# Expect: identical output each time; no file system mutations
git status .obsidian/  # should show clean
```

Expected: PASS on all five scenarios; status messages clearly identify count of enabled vs. installed plugins + per-plugin verdict.

## 5. Literal patch text

### Patch A — `.adna/setup.sh` Usage line + arg parser extension

```diff
@@ -2,7 +2,7 @@
 # setup.sh — Bootstrap Obsidian plugins and theme for adna
 # Downloads 15 community plugins + Tokyo Night theme.
 # Requires: curl (ships with macOS/Linux)
-# Usage: ./setup.sh [--force]
+# Usage: ./setup.sh [--force] [--verify]
```

```diff
@@ -14,11 +14,21 @@ OBSIDIAN_DIR="$VAULT_DIR/.obsidian"
 PLUGINS_DIR="$OBSIDIAN_DIR/plugins"
 THEMES_DIR="$OBSIDIAN_DIR/themes"

-FORCE=0
-if [ "${1:-}" = "--force" ]; then
-    FORCE=1
-fi
+FORCE=0
+VERIFY=0
+for arg in "$@"; do
+    case "$arg" in
+        --force)        FORCE=1 ;;
+        --verify)       VERIFY=1 ;;
+        --help|-h)      echo "Usage: ./setup.sh [--force] [--verify]"; exit 0 ;;
+        *)              echo "Unknown flag: $arg (see ./setup.sh --help)"; exit 1 ;;
+    esac
+done
```

**Cross-cut note**: this arg-parser refactor is the SAME shape as the T2 (M3.1) refactor proposed in `m31_obj4_t2_design_spec.md` Patch B (for `--reset-layout`). v8 P6 may land both refactors as a single arg-parser unification commit. If T2 lands first, T3 Patch A adds only the `--verify) VERIFY=1 ;;` arm.

### Patch B — `.adna/setup.sh` new `--verify` code path (insert before main install loop, ~line 108 — after `mkdir -p $PLUGINS_DIR` / `mkdir -p $THEMES_DIR`)

```bash
# --- Verify-only mode (read-only; short-circuits before install loop) ---

if [ "$VERIFY" -eq 1 ]; then
    echo ""
    echo "Verify mode (read-only)"
    echo "-----------------------"
    enabled_count=0
    installed_count=0
    missing_count=0
    missing_list=()

    # Read community-plugins.json (Obsidian's enable list — JSON array of plugin IDs)
    if [ ! -f "$OBSIDIAN_DIR/community-plugins.json" ]; then
        skip "No community-plugins.json — vault has no enabled plugins"
        exit 0
    fi

    # Parse JSON array (bash-portable; uses grep + sed to extract quoted IDs)
    while IFS= read -r enabled_id; do
        enabled_count=$((enabled_count + 1))
        if [ -f "$PLUGINS_DIR/$enabled_id/main.js" ] && [ -f "$PLUGINS_DIR/$enabled_id/manifest.json" ]; then
            installed_count=$((installed_count + 1))
            ok "$enabled_id"
        else
            missing_count=$((missing_count + 1))
            missing_list+=("$enabled_id")
            fail "$enabled_id (MISSING)"
        fi
    done < <(grep -oE '"[^"]+"' "$OBSIDIAN_DIR/community-plugins.json" | sed 's/"//g')

    echo ""
    echo "Verify summary"
    echo "--------------"
    printf "Enabled plugins:   %d\n" "$enabled_count"
    printf "Installed:         %d\n" "$installed_count"
    printf "Missing binaries:  %d\n" "$missing_count"

    if [ "$missing_count" -gt 0 ]; then
        echo ""
        echo "Action: run ./setup.sh to install missing plugin binaries"
        exit 1
    fi
    exit 0
fi
```

**Behavior notes**:
- Read-only: only reads `community-plugins.json` + `.obsidian/plugins/<id>/`. No writes; no network.
- Idempotent: re-running produces identical output (modulo filesystem state changes between runs).
- Exit code: 0 if all enabled plugins have binaries; 1 if any missing; 0 + skip if `community-plugins.json` absent.
- Uses existing `ok` / `fail` / `skip` helpers (lines 62-65) for consistent visual styling.
- JSON parsing uses bash-portable grep/sed (no `jq` dependency). Acceptable for the simple flat-array shape of `community-plugins.json`; if `jq` becomes a workspace-standard dep in a future v7.x, this can be tightened.

### Patch C — `.adna/how/skills/skill_node_health_check.md` add Step 5b (between current Step 5 and Step 6)

```diff
@@ -102,6 +102,17 @@ Required files (exit 5 if any missing):
 - `how/skills/skill_inventory_refresh.md`
 - `how/skills/skill_node_credentials_audit.md`

+### Step 5b: Per-Vault Obsidian Plugin-Binary State (T3 per M3.2; F-S2-2)
+
+For each `.aDNA` vault in `inventory_vaults.yaml` with `obsidian_managed: true`, invoke `./setup.sh --verify` (T3 primitive landed in `.adna/setup.sh` per M3.2 T3 design spec) from the vault root. The verify mode reports per-plugin presence based on `community-plugins.json` ∩ `.obsidian/plugins/<id>/main.js`.
+
+Failure (exit 5b) if any vault reports `missing_count > 0` AND the vault is operator-marked as `expected_obsidian_ready: true` (see `inventory_vaults.yaml` schema; new boolean field). Fresh-fork vaults with `expected_obsidian_ready: false` are skipped (correct that plugins aren't installed yet).
+
+Surfaces plugin-binary state as a health dimension; closes the F-S2-2 silent-failure mode at the cross-vault auditing layer.
+
+**Dependencies**:
+- T1 (M3.1) preserves `setup.sh` in the forked vault (otherwise `--verify` has no script to invoke).
+- T3 (M3.2) lands the `--verify` mode in upstream `.adna/setup.sh`.
+
 ### Step 6: Frontmatter Validity (yaml.safe_load)
```

```diff
@@ -195,6 +206,7 @@ Required files (exit 5 if any missing):
 | 2-5 | Scaffold/skill missing | Re-run M04 Session 2 bootstrap (or just re-create the missing file) |
+| 5b | Plugin-binary MISSING for `expected_obsidian_ready` vault | Run `./setup.sh` in the affected vault to install binaries |
 | 6 | Frontmatter invalid | Inspect the failing file; fix YAML; re-run check |
```

**Schema-extension note**: this patch implies a new boolean field `expected_obsidian_ready` on the `inventory_vaults.yaml` per-vault entry. Default `false` for backward compatibility; operator sets `true` post-`setup.sh`. If v8 P6 prefers minimal-schema-change, the field is operator-discretionary at first introduction; the `--verify` integration falls through with `SKIP` when the field is absent.

### Patch D — `.adna/how/skills/skill_project_fork.md` Step 5 augmentation (fork-time gate; optional per Option 4 layered)

```diff
@@ -135,7 +135,17 @@ Edit the forked project's governance files to set up first-run detection:

 ### Step 5: Offer Immediate Onboarding

-Ask the user:
+**Plugin-binary verify gate (T3 per M3.2; F-S2-2)**:
+- After the fork is created, run `./setup.sh --verify` from the forked vault root.
+- This reports `community-plugins.json` ∩ `.obsidian/plugins/<id>/main.js` mismatch.
+- A fresh fork will report ALL 15 plugins as MISSING — this is correct (binaries haven't been downloaded yet); the verify gate is informational.
+- Display the verify summary to the user:
+  > "Your vault has 15 enabled plugins but 0 installed binaries. Run `./setup.sh` from the vault root to install (~15MB; requires network)."
+- Closes the F-S2-2 silent-failure mode at fork time: operator now knows binaries are needed BEFORE opening Obsidian (avoiding the workspace-clobber chain documented in T2 / M3.1).
+
+**Then ask the user**:
 > "Your project is ready at `<path>`. Would you like to run the onboarding interview now to customize it for your domain? Or you can open it later — the setup will trigger automatically on first run."
```

**Composability with T2's Patch D**: M3.1 T2's Patch D also augments Step 5 with the `--reset-layout` recovery runbook. v8 P6 may merge T2 + T3 Patch D edits into a single Step 5 narrative block ordered: (a) plugin-binary verify gate (T3) → (b) "run setup.sh" instruction → (c) first-open recovery runbook (T2).

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T3 (this spec) alongside T1 + T2 + T4 + 7+ prior P2 doctrinal additions (post-M3.2 queue = 9-10). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §4 acceptance smoke test scenarios A-E against the current `.adna/` HEAD at P6 entry. Patch text was authored against `27e6395`. If `.adna/` HEAD has advanced (e.g., v7.1), refresh the patches against the new HEAD before commit. **Special attention to Patch A arg-parser**: if T2 already landed via M3.1 cycle, the arg-parser refactor is in place and T3 only needs the `--verify) VERIFY=1 ;;` arm + the new code block (Patch B). If T2 has NOT landed, T3 needs the full arg-parser refactor too. | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches the `upstream_state_at_authoring` frontmatter OR refresh memo lands in `missions/artifacts/` |
| **P6 commit decision: bundle vs. separate** | Choose: (a) single commit "setup.sh hardening (T1+T2+T3)" combining 3 design specs into one logical commit; (b) per-track commits (T1 + T2 + T3 + T4 each own commit); (c) per-patch commits (Patch A + B + C + D each own commit; rare). **Default**: option (b) per-track — preserves audit trail mapping design-spec ↔ commit. Single-commit additive-upstream pattern values minimal commits, but per-track preserves traceability. | Operator decision at P6 entry; Rosetta drafts commit messages | Commit message names T3 + F-S2-2 + cites this spec path |
| **P6 commit** | Apply Patches A+B+C+D. Commit message template: `v7.x: add --verify mode to setup.sh + skill_node_health_check Step 5b + skill_project_fork Step 5 fork-time gate (T3 per M3.2; F-S2-2; Nth instance of single-commit additive-upstream pattern)` where N is determined at P6 bundle-vs-separate decision (6th instance if T3 stands alone after T1=5th; 5th instance if T1+T3 bundled). | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§4) passes |
| **P6 post-commit smoke** | Run §4 acceptance smoke test scenarios A-E on a fresh fork created via the updated `skill_project_fork.md`. | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-E |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T3 fix; for existing forks made between v7.0 and v7.x, operators can opt-in to verify mode by running `./setup.sh --verify` (T3 is read-only — no destructive migration). | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 setup.sh behavior (existing `--force` continues unchanged; existing install code path unchanged); fresh forks gain the verify mode + fork-time gate + health-check integration; F-S2-2 silent-failure mode closed at three layers.

**P6 rollback path**: if smoke test fails, revert via `git revert` of the single P6 commit (or per-track commits). Patches A-D are all additive — rollback restores v7.0 setup.sh behavior with zero data loss. Patch C's `inventory_vaults.yaml` schema extension (`expected_obsidian_ready` boolean) is backward-compatible by default (absent = `false` = skip).

## Cross-references

- [[../mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — parent mission (Objective 3)
- [[../../../../how/backlog/backlog_F_S2_2_config_binary_asymmetry.md|F-S2-2 backlog]] — finding source + 3-option matrix substrate
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T3 track substrate (Track 3)
- [[m31_obj3_t1_design_spec.md|M3.1 T1 design spec]] — companion (T1 preserves setup.sh in fork; T3 adds --verify mode to setup.sh; paired patches)
- [[m31_obj4_t2_design_spec.md|M3.1 T2 design spec]] — companion (T2 arg-parser refactor pattern; T3 reuses or extends; T2 + T3 are arg-parser composability test)
- [[m32_obj4_t4_design_spec.md|T4 design spec]] — sibling (T4's `skill_obsidian_canonicalize.md` invokes T3's `--verify` primitive as the plugin-binary truth-source within the broader canonicalize workflow)
- [[../../../../how/skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — Obj 5 deliverable (consumes T3's `--verify` primitive via `--verify` sub-mode of the new skill)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — token budget two-metric + Heavy-File Read Convention

## Prior-instance + bundle citation (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1 | ADR-008 — airlock template stub at `.adna/how/airlock/AIRLOCK.md` | M03 S3 ratified 2026-05-11; commit `6f1822a` | ADR + single template file | M03 (campaign_adna_v2_infrastructure) |
| 2 | `e3b3bcc` — cross-project routing hook for node.aDNA-aware forks | v7.0 M04 S2 commit | Single hook addition | M04 |
| 3 | `8673383` — `skill_node_bootstrap_interview` skill | v7.x commit | Single skill file addition | campaign_lattice_workspace_ux M-LWX-01 |
| 4 | `202c9ec` — HOME.md inline-comment plain-prose rephrase | v7.x commit (self-names "4th instance") | Single content rephrase | M-LWX-03 Finding 1 |
| 5 | **T1 — preserve setup.sh in skill_project_fork.md** | v8 P6 candidate (M3.1 T1 design spec) | Single line removal + comment update | M3.1 |
| **6 (or bundled w/ T1=5)** | **T3 — `setup.sh --verify` mode + health-check + fork-time gate** | **v8 P6 candidate (this spec)** | **3-file additive: arg parser extension + new code block + skill step + Step-5 augmentation** | **M3.2 (this mission)** |

**Bundle alternative**: if T1 + T3 land as a single "setup.sh hardening" commit at v8 P6, the pair counts as the 5th instance (single logical commit; multi-file diff). If T1 + T3 land as separate commits, T3 is the 6th instance. Operator decision at v8 P6 entry; Campaign SO #5 (absorbed-campaign) lineage applies either way.

## Notes

- **Patches A + B are the load-bearing changes** to `setup.sh`. Patch C (`skill_node_health_check.md` Step 5b) is the ongoing-health integration. Patch D (`skill_project_fork.md` Step 5) is the fork-time gate. v8 P6 may ship A+B alone (Option 1 minimal) or A+B+C+D (Option 4 layered); §4 Recommendation prefers Option 4.
- **JSON parsing portability**: Patch B's `grep -oE '"[^"]+"' | sed 's/"//g'` extracts plugin IDs from the flat-array JSON shape of `community-plugins.json`. This is bash-portable (no `jq` dependency). If a future v7.x adds `jq` as a workspace dep (e.g., via `node.aDNA/` requirements), the verify code path may tighten to `jq -r '.[]'`. Either is acceptable.
- **Health-check schema extension** (Patch C `expected_obsidian_ready: true`): backward-compatible default `false` skips the check; operator-discretionary opt-in to enable for known-stabilized vaults. v8 P6 may defer the schema extension if minimal-change preference is stronger; the `--verify` invocation in Step 5b can run unconditionally and just SKIP on absent field.
- **Cross-cut composability with T2**: Patch A's arg parser is the SAME refactor shape as T2's Patch B. v8 P6 commit ordering matters: if T2 lands first, T3 reuses the parser; if T3 lands first, T2 reuses the parser. Either order is acceptable; both flags coexist cleanly (`./setup.sh --force --verify` does plugin re-download then verifies state).
- **Cross-cut composability with Obj 5 (`skill_obsidian_canonicalize.md`)**: The new skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (M3.2 Obj 5) has a `--verify` mode. That mode invokes `setup.sh --verify` (T3 primitive) as the underlying truth-source. **T3 is the single source of truth for plugin-binary state across the M3.2 deliverable triple.** The canonicalize skill does NOT re-implement binary-state checking; it delegates to `setup.sh --verify`.
- **Dual-audience note**: a newcomer reading F-S2-2's "Obsidian silently shows empty navigation" finds it disorienting; §4 acceptance scenarios A-E translate it into concrete commands with predictable expected outputs. A developer can apply Patches A-D via `git apply` once the upstream HEAD is verified.
- **Self-reference (Standing Order #8 — 13th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The spec uses the hardened routing-layer discoverability re-frame to surface itself to the v8 P6 propagation cycle. T3's `--verify` mode + the new skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (Obj 5) form the FIRST behavioral test of whether the M2.4.5-hardened `how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops (vs cold deep-file loads). Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
