---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m31_obsidian_stabilization_core
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.1
obj: 4
track: T2
finding_id: F-S2-4
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395)"
upstream_state_at_authoring: v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit)
created: 2026-05-21
updated: 2026-05-21
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_1, obj_4, t2, workspace_idempotency, reset_layout_flag, v8_p6_propagation_queue, setup_sh, skill_onboarding, skill_project_fork, t4_cross_cut_hook, m3_2_canonicalize_substrate, rosetta]
---

# T2 Design Spec — `setup.sh --reset-layout` workspace idempotency

> **What this is**: a proposed-patch artifact for `.adna/setup.sh` (workspace-copy block at lines 175-184) + supporting documentation patches for `.adna/how/skills/skill_onboarding.md` + `.adna/how/skills/skill_project_fork.md`. The fix adds a `--reset-layout` flag to setup.sh that force-copies `workspace.default.json` over `workspace.json`, restoring the curated layout that Obsidian's first-open save-on-close destructively clobbers. **Design-at-P3, propagation-at-P6**: this spec ships as an aDNA.aDNA-resident artifact; v8 P6 owns the upstream commit on `LatticeProtocol/aDNA`.
>
> **Cross-cut hook**: this spec defines the `--reset-layout` flag as a substrate primitive that the future `skill_obsidian_canonicalize.md` (T4 / M3.2 scope) will consume as one step of a broader "rehydrate vault to canonical state" workflow. T2 lands the primitive; T4 builds the canonicalization skill atop it.
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/lattice/.adna/`. All patch text is literal diff content for v8 P6 to apply.

## 1. Finding statement + root cause (F-S2-4)

### Finding statement

> When operator first opens a vault in Obsidian, Obsidian saves a stripped `workspace.json` that overwrites the M-LWX-02-shipped layout (NN pinned as first left-pane tab). Within seconds of open, the intended layout is GONE — replaced with whatever Obsidian's default-on-startup decided. `workspace.default.json` (the template) is untouched but Obsidian prefers `workspace.json` on subsequent opens.
>
> — [[../../../../how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|backlog_F_S2_4_obsidian_workspace_clobber.md]] §Summary (2026-05-13; M-LWX-03 S2 surfaced)

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z)**: confirmed via static analysis of `.adna/setup.sh:175-184`. The conditional `if [ ! -f "$OBSIDIAN_DIR/workspace.json" ]` short-circuits if `workspace.json` already exists — which it does after Obsidian's first save-on-close. No code path currently exists to *replace* an existing `workspace.json`. `--force` (line 17-19) only re-downloads plugins; it does NOT trigger the workspace block.

### Root cause (3-layer compounding)

1. **Obsidian save-on-close is unconditional.** Obsidian writes `workspace.json` on every layout change AND on app shutdown. It has no awareness of "this is a template-derived initial layout that the vault author wants preserved." From Obsidian's perspective, the behavior is correct: `workspace.json` is live state.

2. **Plugin not-yet-loaded race window.** If the operator opens the vault in Obsidian BEFORE running `./setup.sh`, the Notebook Navigator (NN) plugin binary isn't installed. Obsidian tries to instantiate the NN tab from `workspace.json`, fails (plugin missing), compacts the layout removing the NN tab, and saves the compacted version. Even running `./setup.sh` afterward only installs the plugin binary — it doesn't restore the layout because the conditional-copy block at lines 175-184 sees `workspace.json` already exists and skips.

3. **`workspace.default.json` is preserved but unreachable.** The template ships `workspace.default.json` correctly (M-LWX-02 work) and `cp -r` propagates it correctly through fork (T1 fix or current state, both work for this file). The asset is on disk, accessible, and never used post-first-open. No code path exists to consume it for restoration.

## 2. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **`--reset-layout` flag** (new). Add a dedicated `RESET_LAYOUT` arg parser + extend the workspace-copy conditional to `! -f workspace.json OR --reset-layout`. Orthogonal to `--force` (which stays plugin-only). | `.adna/setup.sh` ~12 lines (arg parser refactor + conditional extension + status message branch) | New operator-facing flag; explicit; recoverable | New flag activates a force-copy of `workspace.default.json` → `workspace.json` | Idempotent; if `workspace.default.json` is missing, falls through to existing `skip` branch (no destruction); operator can run repeatedly with no harm |
| 2 | **`--force` extension** (make `--force` ALSO reset workspace.json). Single bit-flag overload. | `.adna/setup.sh` ~3 lines (one condition added) | No new flag; `--force` semantics widened | `--force` triggers plugin re-download (existing) PLUS workspace.json reset (new) | Loses orthogonality: operator can't refresh plugins without nuking layout (or vice versa). Surprises operators who run `--force` for plugin refresh and lose customized layout. |
| 3 | **First-open runbook documentation** (no setup.sh change at all). Update `skill_project_fork.md` end-of-fork message + `skill_onboarding.md` Step 10 to instruct: "Run `./setup.sh` BEFORE first opening Obsidian. If Obsidian opened the vault before setup, you'll need to manually `cp .obsidian/workspace.default.json .obsidian/workspace.json` and reopen." | 2 narrative paragraphs across 2 skill files | Heavier operator surface (manual `cp` recovery) | No setup.sh behavior change; documentation-only fix | Doesn't solve the problem mechanically; relies on operator discipline. Operator-error rate doesn't drop to zero. |
| 4 | **T4 `skill_obsidian_canonicalize.md` cross-cut** (defer entirely to M3.2). Author a broader "rehydrate vault to canonical state" skill in M3.2 that includes workspace.json restoration as one step. | New skill file in M3.2 (not in M3.1) | New skill invocation; broader scope (templates + workspace + hotkeys + …) | Workspace reset becomes one of many canonicalization steps | Adds M3.2 mission complexity; delays workspace fix; doesn't deliver a substrate primitive for the canonicalize skill to consume |

## 3. Recommendation

**Option 1 + Option 3** — `--reset-layout` flag (mechanical fix) + documentation update (operator-discipline reinforcement). The combination matches F-S2-4 §Proposed approaches §recommendation exactly.

### Rationale

- **Option 1 (mechanical fix) is the load-bearing change.** A standalone, orthogonal flag with idempotent semantics. Operator surface is minimal and recoverable. Restoration becomes a single command rather than manual file copy.
- **Option 3 (documentation) reduces operator-error rate.** Most fork-recipients won't read F-S2-4 backlog; they need the runbook embedded in the skill files they DO read (`skill_project_fork.md` Step 5 + `skill_onboarding.md` Step 10).
- **Orthogonality with `--force`** is intentional. `--force` = plugin re-download. `--reset-layout` = workspace reset. Both are bit-flags that can combine (`./setup.sh --force --reset-layout`) for "nuke everything to canonical state." This naming + semantic separation makes the operator surface predictable.
- **T4 cross-cut hook explicit** (§6 below): the future `skill_obsidian_canonicalize.md` invokes `./setup.sh --reset-layout` as one step. The primitive lives in setup.sh (single source of truth); the canonicalize skill orchestrates the broader rehydration. T2 lands the primitive; T4 builds the orchestrator.
- **Option 2 rejected**: `--force` semantic overload creates surprise for operators wanting plugin-only refresh.
- **Option 4 rejected**: defers fix indefinitely without delivering a substrate; the canonicalize skill needs a flag to invoke, so even M3.2 needs T2's primitive landed first.

### Acceptance smoke test (post-P6 landing)

```bash
# Scenario A: fresh fork + run setup.sh + verify layout
cd ~/lattice/<test_project>.aDNA/
./setup.sh
grep -c "notebook-navigator" .obsidian/workspace.json  # expect ≥ 1

# Scenario B: simulate Obsidian first-open clobber + recovery
# (Manually edit workspace.json to strip NN tab, OR open in Obsidian briefly then close)
./setup.sh --reset-layout
grep -c "notebook-navigator" .obsidian/workspace.json  # expect ≥ 1 again (recovered)

# Scenario C: orthogonality verification
./setup.sh --force                              # plugins refresh; workspace.json untouched if exists
./setup.sh --reset-layout                       # workspace reset; plugins skipped if installed
./setup.sh --force --reset-layout               # nuke everything to canonical state

# Scenario D: idempotency
./setup.sh --reset-layout
./setup.sh --reset-layout                       # re-running is safe (no error, no destruction beyond expected reset)
```

Expected: PASS on all four scenarios; status messages clearly identify which path was taken (`Workspace layout (reset to default)` vs `Workspace layout (clean sidebar)` vs `skip (already exists; use --reset-layout to overwrite)`).

## 4. Literal patch text

### Patch A — `.adna/setup.sh` Usage line (line 5)

```diff
@@ -2,7 +2,7 @@
 # setup.sh — Bootstrap Obsidian plugins and theme for adna
 # Downloads 15 community plugins + Tokyo Night theme.
 # Requires: curl (ships with macOS/Linux)
-# Usage: ./setup.sh [--force]
+# Usage: ./setup.sh [--force] [--reset-layout]
```

### Patch B — `.adna/setup.sh` arg parser (lines 16-19)

```diff
@@ -14,11 +14,18 @@ OBSIDIAN_DIR="$VAULT_DIR/.obsidian"
 PLUGINS_DIR="$OBSIDIAN_DIR/plugins"
 THEMES_DIR="$OBSIDIAN_DIR/themes"

-FORCE=0
-if [ "${1:-}" = "--force" ]; then
-    FORCE=1
-fi
+FORCE=0
+RESET_LAYOUT=0
+for arg in "$@"; do
+    case "$arg" in
+        --force)        FORCE=1 ;;
+        --reset-layout) RESET_LAYOUT=1 ;;
+        --help|-h)      echo "Usage: ./setup.sh [--force] [--reset-layout]"; exit 0 ;;
+        *)              echo "Unknown flag: $arg (see ./setup.sh --help)"; exit 1 ;;
+    esac
+done
```

**Note**: the arg parser refactor also adds `--help` (zero-cost) + unknown-flag rejection (defensive; prevents silent typo eating). v8 P6 may opt to drop the `--help` + unknown-flag lines if minimal-diff preference is stronger.

### Patch C — `.adna/setup.sh` workspace-copy block (lines 173-184)

```diff
@@ -173,12 +180,16 @@
 # --- Ship curated workspace layout (clean ribbon, NN as primary sidebar) ---

-if [ ! -f "$OBSIDIAN_DIR/workspace.json" ]; then
+if [ ! -f "$OBSIDIAN_DIR/workspace.json" ] || [ "$RESET_LAYOUT" -eq 1 ]; then
     if [ -f "$OBSIDIAN_DIR/workspace.default.json" ]; then
         cp "$OBSIDIAN_DIR/workspace.default.json" "$OBSIDIAN_DIR/workspace.json"
-        ok "Workspace layout (clean sidebar)"
+        if [ "$RESET_LAYOUT" -eq 1 ]; then
+            ok "Workspace layout (reset to default)"
+        else
+            ok "Workspace layout (clean sidebar)"
+        fi
     else
         skip "Workspace layout (workspace.default.json missing)"
     fi
 else
-    skip "Workspace layout (already exists)"
+    skip "Workspace layout (already exists; use --reset-layout to overwrite)"
 fi
```

### Patch D — `.adna/how/skills/skill_project_fork.md` Step 5 (line 137-148) augmentation

```diff
@@ -135,7 +135,15 @@ Edit the forked project's governance files to set up first-run detection:

 ### Step 5: Offer Immediate Onboarding

-Ask the user:
+**First-open recovery runbook (T2 per M3.1)**:
+- If the operator opens the vault in Obsidian BEFORE running `./setup.sh`, plugin binaries aren't loaded yet, Obsidian compacts the layout to a default, and saves the compacted form to `workspace.json` — clobbering the curated NN-pinned layout shipped in `workspace.default.json`.
+- Recovery: from the vault root, run `./setup.sh --reset-layout`. This force-copies `workspace.default.json` over `workspace.json`. Close + reopen Obsidian to load the restored layout.
+- Operators can run `./setup.sh --reset-layout` repeatedly without harm (idempotent).
+- For a full canonical reset (plugins + workspace), use `./setup.sh --force --reset-layout`.
+
+**Then ask the user**:
 > "Your project is ready at `<path>`. Would you like to run the onboarding interview now to customize it for your domain? Or you can open it later — the setup will trigger automatically on first run."
```

### Patch E — `.adna/how/skills/skill_onboarding.md` Step 10 (around line 230) augmentation

```diff
@@ -228,6 +228,15 @@ Offer branching guidance based on the user's interests:
 | Coordinating a team or multi-session work | Start a mission in `how/missions/` |
 | Visual-first exploration | Open `what/lattices/examples/hello_world.canvas` in Obsidian |

+### First-open Obsidian recovery
+
+If the operator opens the vault in Obsidian and finds:
+- The Notebook Navigator (NN) sidebar tab missing
+- The layout looks like a default Obsidian setup instead of the curated triad-organized layout
+
+...then Obsidian's first-open save-on-close clobbered `workspace.json` before `setup.sh` had a chance to install the NN plugin binary. **Recovery**: from the vault root, run `./setup.sh --reset-layout` (or `./setup.sh --force --reset-layout` for a full canonical reset). Close + reopen Obsidian to load the restored layout. The `--reset-layout` flag is idempotent — operators can run it as many times as needed.
+
 This session IS the onboarding session — create the session file (or update if already created), log all files touched, close with a standard SITREP.
```

## 5. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T2 (this spec) alongside T1 + 7+ prior P2 doctrinal additions. | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §3 acceptance smoke test against the *current* `.adna/` HEAD at P6 entry. Patch text was authored against `27e6395`. If `.adna/` HEAD has advanced (e.g., v7.1), refresh the patch against the new HEAD before commit. Special attention to the arg parser (Patch B): if other v7.x commits added flags via the old `if [ "${1:-}" = ... ]` pattern, merge into the new case-statement. | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches `upstream_state_at_authoring` frontmatter OR refresh memo lands in `missions/artifacts/` |
| **P6 commit pair (parallel with T1)** | Single additive commit to `.adna/` with message: `v7.x: add --reset-layout flag to setup.sh for workspace.json idempotency (T2 fix per M3.1; F-S2-4)`. Patches A-E applied. May be combined into a single T1+T2 commit if v8 P6 prefers one upstream commit per mission (vs one per track). | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§3) passes |
| **P6 post-commit smoke** | Run §3 acceptance smoke test scenarios A-D on a fresh fork. | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-D |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T1+T2 fixes; for forks made between v7.0 and v7.x, document one-time recovery (`cp .obsidian/workspace.default.json .obsidian/workspace.json` if the operator hit the clobber pre-fix). | Berthier coord memos (Lattice Labs) | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 setup.sh behavior (existing `--force` continues to mean "re-download plugins only"); fresh forks gain the recovery path; layout-clobber operator-error rate drops to zero with `--reset-layout` available.

**P6 rollback path**: if smoke test fails, revert via `git revert` (single-commit revert; trivially reversible). The orthogonality of `--reset-layout` to `--force` means rollback doesn't affect any other behavior.

## 6. T4 cross-cut hook (M3.2 forecast)

The future `skill_obsidian_canonicalize.md` (T4; M3.2 scope per absorbed campaign master) will be a broader "rehydrate vault to canonical state" skill. **T2 lands the `--reset-layout` flag as a substrate primitive that T4 will consume.**

### Forecast invocation pattern

```bash
# From skill_obsidian_canonicalize.md (M3.2 design):
# Step N: Reset workspace layout to canonical
./setup.sh --reset-layout

# Step N+1: Verify Style Settings default preset applied (T4 scope)
# Step N+2: Verify .obsidianignore present (T3 scope)
# Step N+3: Verify hotkeys.json matches canonical set (T4 scope)
# ...etc.
```

### Substrate contract

T2 commits the following primitive contract for T4 to depend on:

- `--reset-layout` flag is idempotent (re-running has no destructive effect beyond the expected reset)
- Status messages distinguish reset vs. clean-sidebar vs. skip paths
- Fall-through when `workspace.default.json` is missing (no error; `skip` branch)
- Orthogonal to `--force` (combining is supported and predictable)
- Self-locating (setup.sh resolves `$VAULT_DIR` from its own location)

T4's canonicalize skill can rely on these properties without re-implementing workspace restoration. **T2's primitive is the single source of truth for workspace reset behavior.**

### M3.2 mission note

When `skill_obsidian_canonicalize.md` is authored at M3.2, it should:

1. Cite this spec (`m31_obj4_t2_design_spec.md`) as the substrate primitive
2. Verify `--reset-layout` has landed in upstream `.adna/setup.sh` at v8 P6 BEFORE the canonicalize skill ships (cross-mission gate)
3. NOT re-implement workspace reset inline; instead, call `./setup.sh --reset-layout` as a subprocess

## Cross-references

- [[../mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] — parent mission
- [[../../../../how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|F-S2-4 backlog]] — finding source + 4-option matrix substrate
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T2 + T4 track substrate
- [[m31_obj3_t1_design_spec.md|T1 design spec]] — companion (T1 makes setup.sh available to the forked vault; T2 adds the `--reset-layout` flag that consumes it)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — M3.2 forecast row (T3+T4 scope; T4 = `skill_obsidian_canonicalize.md` consumes T2 primitive) + v8 P6 propagation queue

## Notes

- **Patches A-C are the load-bearing changes** to `setup.sh`. Patches D-E are documentation reinforcement.
- **Arg parser refactor (Patch B) opens optionality** for future flags without further structural change. Future flags can be added as a single `case` arm.
- **Orthogonality matters for the canonicalize skill (T4)**. `--reset-layout` MUST NOT trigger plugin redownload; `--force` MUST NOT trigger workspace reset. The orthogonality is what makes `--force --reset-layout` predictable.
- **Dual-audience note**: a newcomer reading F-S2-4's "Obsidian destructively rewrites workspace.json" finds it intimidating; the §3 Acceptance smoke test scenarios A-D translate it into concrete commands. A developer can apply the diff text via `git apply` once the upstream HEAD is verified.
- **Self-reference (Standing Order #8 — 11th tactical invocation candidate in v8)**: this spec, together with T1, occupies `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — the directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The pair (T1 + T2) is the first cohort of M3.x missions consuming the hardened routing layer; their discoverability + downstream-consumption are the FIRST behavioral data point for the M2.4.5 discoverability re-frame per `m245_obj3_measurement_contract.md` §6.
