---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m32_obsidian_stabilization_extension
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.2
obj: 4
track: T4
finding_ids: [F-S2-5, F-S2-6, F-S2-7]
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395)"
upstream_state_at_authoring: v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit)
created: 2026-05-21
updated: 2026-05-21
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_2, obj_4, t4, obsidian_config_canonicalization, combined_spec_d1_default, normalization_drift, nn_data_json_triad_colors, obsidianignore_extension, sixth_instance_additive_upstream_candidate, v8_p6_propagation_queue, setup_sh, obsidianignore, skill_obsidian_canonicalize, reset_layout_absorption, six_section_structure_extended, rosetta]
---

# T4 Design Spec — Obsidian config canonicalization (combined F-S2-5 + F-S2-6 + F-S2-7)

> **What this is**: a proposed-patch artifact covering three sub-findings under a single canonicalization narrative: F-S2-5 (Obsidian normalizes tracked `.obsidian/*.json` on every open — schema-correct relocations + reformat + trailing-newline strip); F-S2-6 (Notebook Navigator per-vault `data.json` triad colors are NOT shipped by `setup.sh`, so the curated purple/cyan/green folder palette renders as default white); F-S2-7 (template files at `how/templates/*.md` use bare `<project_slug>` placeholder syntax that Obsidian's tag indexer surfaces as a literal tag — `.obsidianignore` does not currently exclude `how/templates/`).
>
> **D1 = A combined** per M3.2 mission spec §Operator decision gates: a single 6-section design spec covering all three sub-findings beats three separate specs because the narrative arc is unified (Obsidian's canonical-state vs. on-disk-authored-state asymmetry) and the recommended option (a unified canonicalize skill) holds across all three.
>
> **Design-at-P3, propagation-at-P6**: this spec ships as an aDNA.aDNA-resident artifact under `missions/artifacts/`; v8 P6 owns the upstream cycle that lands the patches on `LatticeProtocol/aDNA`. The new skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (Obj 5 of this mission) lives in aDNA.aDNA — NOT upstream — per F-S2-5 §Critical files.
>
> **NN `data.json` shipping** is evaluated as the **6th-instance additive-upstream candidate** after T1's 5th (or 6th if T3 bundled separately). See §6 propagation contract for the disposition decision tree.
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/aDNA/.adna/`. All patch text is literal diff content for v8 P6 to apply.

## 1. Finding statement (3 sub-findings)

### F-S2-5 — `.obsidian/*.json` normalization drift

> Obsidian rewrites tracked `.obsidian/*.json` files on every open — moves fields to schema-correct homes (e.g., `monospaceFontFamily` from `app.json` to `appearance.json`), reformats arrays to multi-line, strips trailing newlines. Changes are typically BENIGN (often improvements over hand-authored configs) but tracked .obsidian config diverges from upstream as soon as Obsidian runs.
>
> — [[../../../../how/backlog/backlog_F_S2_5_obsidian_json_normalization.md|backlog_F_S2_5_obsidian_json_normalization.md]] §Summary

### F-S2-6 — NN plugin per-vault `data.json` not shipped

> Notebook Navigator's per-vault configuration lives at `.obsidian/plugins/notebook-navigator/data.json` and contains operator-facing settings like folder triad colors (purple `who/`, cyan `what/`, green `how/` per `node.aDNA/.obsidian/OBSIDIAN_CLAUDE.md:170-174`). `setup.sh` downloads only plugin binaries (`main.js` + `manifest.json` + optional `styles.css`) — NOT per-vault `data.json`. Post-install, NN renders folders in default white instead of the intended triad palette.
>
> — [[../../../../how/backlog/backlog_F_S2_6_nn_data_json_not_shipped.md|backlog_F_S2_6_nn_data_json_not_shipped.md]] §Summary

### F-S2-7 — Template placeholder tags leak into vault tag index

> Template files (`how/templates/template_prd.md` + `how/templates/template_rfc.md`) contain `tags: [<project_slug>]` in YAML frontmatter as a literal placeholder. Obsidian's tag indexer treats `<project_slug>` as a real tag and surfaces it in the tag pane (count: 2). Cosmetic pollution. Root cause: `how/templates/` is NOT in `.obsidianignore`.
>
> — [[../../../../how/backlog/backlog_F_S2_7_template_placeholder_tags.md|backlog_F_S2_7_template_placeholder_tags.md]] §Summary

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z; inherited by M3.2 per mission spec §Current State)**:

- F-S2-5: confirmed via static analysis of `.obsidian/*.json` post-first-open vs. `.adna/.obsidian/` upstream. Drift observed at 2026-05-13T05:35Z+ via `git diff` after operator's first Obsidian open of `node.aDNA` (app.json removed `monospaceFontFamily`; appearance.json gained it; core-plugins.json stripped trailing newline).
- F-S2-6: confirmed via inspection of `.adna/setup.sh:108-145` (install loop downloads `main.js`/`manifest.json`/optional `styles.css` only) + absence of `.adna/.obsidian/plugins/notebook-navigator/data.json` template. Operator screenshot 2026-05-13T05:55Z+ shows folders in default white.
- F-S2-7: confirmed via current `.adna/.obsidianignore` (read at S2 2026-05-21T~21:51Z): 24-line file with .git/ + Python build artifacts + node_modules/ + .DS_Store exclusions; ZERO mention of `how/templates/`. Operator screenshot 2026-05-13T05:55Z+ shows literal `<project_slug>` tag with count 2.

## 2. Root cause (unified narrative — canonical-state vs. authored-state asymmetry)

Obsidian models its config as a canonical internal representation; on-disk JSON is a *serialized projection* of that representation. The serialization differs from what a human (or a setup-skill) might author by hand. Three layered consequences:

1. **Canonical-state serialization is opaque to upstream authors.** When `.adna/.obsidian/app.json` ships with `monospaceFontFamily`, Obsidian reads it, internalizes the field into its `appearance` namespace, and on next save writes the field to `appearance.json` instead. The original placement was "wrong" by Obsidian's canonical rules; the relocation is correct. But upstream authors don't know which fields belong where without running Obsidian + observing the result. **The disk-truth diverges from the upstream-truth on the first open.** (F-S2-5)

2. **Per-vault plugin-data is operator-state, not template-state.** Plugin binaries (`main.js`, `manifest.json`) are template-shippable. Plugin per-vault config (`data.json`) is operator-configured via the plugin's Settings UI. There's no canonical "this is what aDNA's NN data.json should be" anywhere — it's purely operator-side. The asymmetry: F-S2-2 closes the plugin-binary layer (T3); F-S2-6 reveals the SAME asymmetry exists one layer deeper (plugin-data). For workflows where operator-state IS curated (the triad-color palette is intentional aDNA UX), shipping a per-vault data.json template closes the asymmetry. (F-S2-6)

3. **File-watcher scope is broader than authored content.** `.obsidianignore` controls what Obsidian's file-watcher + indexer pick up. `how/templates/` contains template files (not real content), but the indexer still reads them, parses YAML frontmatter, and finds `tags: [<project_slug>]`. Without explicit exclusion, the indexer treats placeholder-syntax as content. This compounds with F-S2-5's drift problem: any operator who runs Obsidian sees the polluted tag pane immediately, before any real content has been authored. (F-S2-7)

**Unified narrative**: the three sub-findings share a root mechanism — **Obsidian's canonical state is computed at runtime + differs from authored state on disk.** F-S2-5 is the JSON-config layer; F-S2-6 is the plugin-data layer; F-S2-7 is the file-watcher layer. A unified canonicalize skill (Option 1 below) operates across all three layers from a single operator surface.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Unified `skill_obsidian_canonicalize.md` primitive** (new skill at `aDNA.aDNA/how/skills/`). 3 modes: `--canonicalize` (diff-and-merge against upstream), `--reset-layout` (T2 absorption), `--verify` (T3 absorption). Operator surface: one skill, three modes; mental model unified. | NEW skill file ~250-350 LOC at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (Obj 5 of this mission) + `.adna/setup.sh` post-install canonicalize block (~15-25 LOC for F-S2-6 NN data.json shipping) + `.adna/.obsidianignore` extension (~3-5 LOC for `how/templates/`) | Single new operator command (`<vault>/how/skills/skill_obsidian_canonicalize`); modes self-documenting | F-S2-5 closure: explicit canonicalize-on-demand with operator-local-override preservation. F-S2-6 closure: post-install copy via setup.sh + skill mode for ongoing rehydrate. F-S2-7 closure: `.obsidianignore` extension via setup.sh canonicalize block. | New skill drops at `aDNA.aDNA/how/skills/` (not upstream); requires v8 P6 to land setup.sh + .obsidianignore patches before skill can fully execute. Delta-aware merge logic adds complexity (mitigated by 3-way merge spec at §5 Patch A). |
| 2 | **Stop tracking `.obsidian/*.json` entirely** — treat all .obsidian state as per-device (like workspace.json). | `.gitignore` extension across all aDNA vaults (~5 LOC each); operator-discretionary removal of currently-tracked `.obsidian/*.json` files | Operators clone vault → see no Obsidian config → operator-configures from scratch | Loses "vault works on clone" guarantee per F-S2-5 §Proposed approaches Option 3 | Heavy operator-discipline burden; new vaults effectively un-bootstrap-able without per-operator manual config. |
| 3 | **Split `.obsidian-template/` (tracked, read-only) + `.obsidian/` (per-device, gitignored)** with rehydrate skill. | `.adna/` directory restructure: new `.obsidian-template/` parallel to `.obsidian/` + `.gitignore` for `.obsidian/` + new rehydrate skill | Operators clone → run rehydrate → `.obsidian/` populated from `.obsidian-template/` | Loses convenience of "clone and open in Obsidian works out of the box"; requires rehydrate step | Heavy refactor; ripples across all 19+ existing aDNA vaults; only worth it if drift becomes painful enough to justify the migration cost. Per F-S2-5 §Proposed approaches Option 4: "defer Option 4 unless T4 surfaces unexpected pain." |
| 4 | **Per-vault `setup.sh` post-install custom-canonicalize block** (no new skill; baked into setup.sh). | `.adna/setup.sh` ~30-50 LOC (canonicalize block after install loop; reads `.adna/.obsidian/*.json` and copies-or-merges into vault's `.obsidian/`) | Operators invoke via existing `./setup.sh` (auto-canonicalize as part of install) OR new `./setup.sh --canonicalize` flag | F-S2-5 closure: every `./setup.sh` run re-canonicalizes (operator-local overrides lost unless setup.sh becomes delta-aware — adds complexity to setup.sh that belongs in a separate skill) | Tightly couples canonicalize behavior to setup.sh's install flow; harder to invoke canonicalize without re-installing plugins; harder to test in isolation; harder to extend with delta-aware merge logic. The skill-vs-script separation Option 1 chose exists for a reason. |

## 4. Recommendation

**Option 1 — unified `skill_obsidian_canonicalize.md` primitive** — is recommended, matching F-S2-5 §Proposed approaches Option 2 verbatim + extended to cover F-S2-6 + F-S2-7 per D1=A combined.

### Rationale

- **Single mental model for the operator.** "Need to fix Obsidian config?" → one skill, three modes. Discoverable, memorable, composable.
- **Operator-local override preservation.** F-S2-5's primary failure mode under Options 2-4 is "operator customizes a value; canonicalize overwrites." Option 1's delta-aware merge protocol (§5 Patch A; 3-way merge of upstream ↔ vault ↔ local-overrides) preserves operator customization. This is the load-bearing UX advantage.
- **Absorbs T2 + T3 substrate** (per M3.2 mission spec D3=A): the new skill's `--reset-layout` mode wraps T2's `setup.sh --reset-layout` invocation; the `--verify` mode wraps T3's `setup.sh --verify` invocation. **Two existing primitives + one new primitive (`--canonicalize`) = three modes from a single skill surface.** The substrate inversion: skill orchestrates; setup.sh provides primitives.
- **F-S2-6 closure via setup.sh post-install + skill mode**: setup.sh post-install ships the NN `data.json` template (one-time copy on fresh fork); the canonicalize skill's `--canonicalize` mode re-applies the template on operator demand (for vaults that already exist + want the triad colors). Two-layer approach: install-time (no operator action needed) + on-demand (operator-initiated rehydrate).
- **F-S2-7 closure via `.obsidianignore` extension**: one-line addition (`how/templates/`) to `.adna/.obsidianignore`. Trivially additive; no operator action required beyond next sync.
- **Option 2 rejected**: kills the "vault works on clone" guarantee — too operator-hostile.
- **Option 3 deferred**: heavy refactor; only worth it if Option 1's drift surface becomes painful enough at scale. F-S2-5 §Proposed approaches Option 4 explicitly says "defer Option 4 unless T4 surfaces unexpected pain" — current pain doesn't justify the refactor.
- **Option 4 rejected**: setup.sh becomes monolithic; canonicalize coupling to install flow hurts testability + composability. Skill-vs-script separation is the right factoring.

### Acceptance smoke test (post-P6 landing — assumes Obj 5 skill landed in aDNA.aDNA + Patches A-C below landed in .adna/)

```bash
# Scenario A: fresh fork → setup.sh runs → triad colors visible immediately
cd ~/aDNA/<test_project>.aDNA/
./setup.sh
ls .obsidian/plugins/notebook-navigator/data.json  # expect: file exists (shipped per Patch B)
grep -c "purple\|cyan\|green" .obsidian/plugins/notebook-navigator/data.json  # expect: ≥ 3 color tokens

# Scenario B: existing vault (.obsidian/*.json has drifted) → canonicalize skill rehydrates
# (Assumes `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` has been forked/dropped into this vault)
how/skills/skill_obsidian_canonicalize --canonicalize
# Expect: diff report shown to operator + offer to apply + 3-way merge if operator-local overrides exist

# Scenario C: F-S2-7 closure → .obsidianignore prevents template tags from polluting tag pane
# (Assumes fresh fork OR canonicalize has run)
cat .obsidianignore | grep "how/templates"  # expect: line present (shipped per Patch C)
# Open in Obsidian → tag pane should NOT show `<project_slug>` as a tag

# Scenario D: operator-local override preservation
# Manually edit .obsidian/app.json to set "fontSize": 18 (operator preference)
# Create .obsidian/.local-overrides.json with: {"app.json": {"fontSize": 18}}
how/skills/skill_obsidian_canonicalize --canonicalize
# Expect: 3-way merge preserves fontSize=18 + applies upstream changes to other fields

# Scenario E: idempotency
how/skills/skill_obsidian_canonicalize --canonicalize
how/skills/skill_obsidian_canonicalize --canonicalize
# Expect: second run reports "no canonicalize needed; vault matches upstream + local overrides"

# Scenario F: mode composability (T2 + T3 absorption)
how/skills/skill_obsidian_canonicalize --verify           # invokes setup.sh --verify (T3)
how/skills/skill_obsidian_canonicalize --reset-layout     # invokes setup.sh --reset-layout (T2)
how/skills/skill_obsidian_canonicalize --canonicalize     # the new T4 primitive
```

Expected: PASS on all six scenarios; operator messaging clearly distinguishes which mode ran + which deltas were applied.

## 5. Literal patch text

### Patch A — NEW skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md`

**Forward-reference**: this patch is the heading-level shape; the full skill content is authored at M3.2 Obj 5 deliverable `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (this mission). See that file for the complete spec. The shape:

```markdown
# Skill: Obsidian Canonicalize

## Overview
Three modes that share one mental model: rehydrate vault Obsidian state to canonical aDNA defaults.

## Triggers
- F-S2-5/6/7 silent drifts detected
- Operator-initiated rehydrate
- Cross-vault audit step

## Parameters
| Mode | Action |
|---|---|
| `--canonicalize` | Diff vault `.obsidian/*` against `.adna/.obsidian/*`; offer to apply with 3-way operator-local-override merge |
| `--reset-layout` | Invoke `setup.sh --reset-layout` (T2 absorption) |
| `--verify` | Invoke `setup.sh --verify` (T3 absorption) |

## Implementation: --canonicalize 3-way merge
Inputs:
- Upstream: `.adna/.obsidian/<file>` (canonical source)
- Vault: `<vault>/.obsidian/<file>` (current state)
- Local overrides: `<vault>/.obsidian/.local-overrides.json` (operator-discretionary opt-in)

Algorithm:
1. Read upstream → parse JSON → flatten to dotted-key map (e.g., `app.fontSize`)
2. Read vault → parse JSON → flatten to dotted-key map
3. Read local-overrides → parse JSON → flatten to dotted-key map (default empty)
4. For each upstream key:
   - If key in local-overrides: keep operator value (override wins)
   - Else if key value in upstream ≠ vault: apply upstream value (canonicalize)
   - Else: no change
5. For each vault-only key (not in upstream):
   - If key in local-overrides: keep operator value
   - Else: keep vault value (preserve operator-customization that just hasn't been overridden yet)
6. Write merged map → reconstruct JSON → write to vault `.obsidian/<file>`
7. Report deltas (per file: N keys canonicalized, M keys preserved from local, K keys vault-only kept)

## Safety preconditions
- No Obsidian process running (file lock contention risk)
- Git working tree clean OR operator explicitly opts in to canonicalize-with-dirty-tree
- Vault path is a recognized aDNA vault (`.obsidian/` + `CLAUDE.md` present)

(see Obj 5 deliverable for full skill spec — frontmatter, examples, error handling, related)
```

### Patch B — `.adna/setup.sh` post-install canonicalize block + NN `data.json` shipping (insert after workspace-copy block ~line 184, before Verification section ~line 186)

```diff
@@ -184,6 +184,28 @@ else
     skip "Workspace layout (already exists)"
 fi

+# --- Ship per-vault plugin data templates (F-S2-6 closure; T4 per M3.2) ---
+
+TEMPLATE_DIR="$VAULT_DIR/.adna/.obsidian/plugins"  # template shipping source
+for plugin_id in notebook-navigator; do  # extensible list; NN is the first
+    src="$TEMPLATE_DIR/$plugin_id/data.json"
+    dest="$PLUGINS_DIR/$plugin_id/data.json"
+    if [ ! -f "$src" ]; then
+        skip "Plugin data ($plugin_id; no template shipped)"
+        continue
+    fi
+    if [ -f "$dest" ] && [ "$FORCE" -eq 0 ]; then
+        skip "Plugin data ($plugin_id; already exists; use --force to overwrite)"
+        continue
+    fi
+    if cp "$src" "$dest"; then
+        ok "Plugin data ($plugin_id; triad colors applied)"
+    else
+        fail "Plugin data ($plugin_id; copy failed)"
+    fi
+done
+
+# --- End plugin data templates ---
+
 # ---------- Verification ----------
```

**Behavior notes**:
- Runs only if `.adna/.obsidian/plugins/<id>/data.json` ships in the template repo (currently only `notebook-navigator` is the 6th-instance candidate).
- Respects `--force` semantics: existing per-vault data.json is preserved unless `--force` is passed.
- Falls through cleanly when template-side data.json is absent (skip; no failure).
- Loop is extensible: future plugin data.json templates added by extending the `for plugin_id in …` list.

### Patch B' — NEW `.adna/.obsidian/plugins/notebook-navigator/data.json` (template-side shipping; the 6th-instance additive-upstream candidate)

```json
{
  "settings": {
    "rootFolder": "/",
    "folderColors": {
      "who": "#c4a3eb",
      "what": "#7fdbff",
      "how": "#9bd47c"
    },
    "showNoteCount": true,
    "showFileExtension": false
  }
}
```

**Provenance**: triad colors are operator-configured at `node.aDNA/.obsidian/OBSIDIAN_CLAUDE.md:170-174` (purple `who/` + cyan `what/` + green `how/`). The exact hex values above are illustrative defaults; v8 P6 should harvest the actual values from `node.aDNA/.obsidian/plugins/notebook-navigator/data.json` (operator's live config) before commit, OR from the OBSIDIAN_CLAUDE.md authoritative source if the operator confirms those are canonical.

**6th-instance additive-upstream candidacy**: this NEW file is the **strongest 6th-instance candidate** in the v8 P6 propagation queue. It satisfies all three criteria of the single-commit additive-upstream pattern: (1) one logical commit in `.adna/` (single new file); (2) additive (no behavior change for existing forks; only future forks gain the triad colors at install time); (3) verifiable post-landing via a single smoke test (Scenario A above). See §6 propagation contract for the bundle-vs-separate disposition decision.

### Patch C — `.adna/.obsidianignore` extension (F-S2-7 closure)

```diff
@@ -22,3 +22,8 @@ node_modules/
 # Large binary directories (add project-specific exclusions below)
 # If you symlink git repos into this vault, add them here to prevent
 # Obsidian from watching thousands of files it doesn't need to index.
+
+# Template files — placeholder syntax (e.g., <project_slug>) would otherwise
+# leak into the vault tag index (F-S2-7 per M3.2 T4)
+how/templates/
```

**Per-vault propagation**: after Patch C lands at `.adna/.obsidianignore`, fresh forks inherit the extension via `cp -r .adna/ <project>.aDNA/` in `skill_project_fork.md`. Existing forks gain the extension via the canonicalize skill's `--canonicalize` mode (Patch A) which detects `.obsidianignore` drift + offers the operator to apply.

### Patch D (optional; F-S2-7 root-cause hardening) — `.adna/how/templates/template_prd.md` + `.adna/how/templates/template_rfc.md` placeholder syntax migration to Templater

```diff
@@ -1,5 +1,5 @@
 ---
 type: prd
-tags: [<project_slug>]
+tags: [<% tp.frontmatter.project_slug %>]
 ---
```

**Cross-cut note**: Patch C alone closes F-S2-7 (templates stop being indexed). Patch D goes further: even if the template files are inspected directly (e.g., operator opens one in Obsidian), Templater syntax `<% … %>` does NOT match the literal `<project_slug>` pattern Obsidian's tag indexer picks up. v8 P6 may ship Patch D as a follow-up if Patch C alone proves insufficient in practice. **Default**: ship Patch C only; defer Patch D unless drift surfaces.

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T4 (this spec) alongside T1 + T2 + T3 + 7+ prior P2 doctrinal additions (post-M3.2 queue = 9-10). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §4 acceptance smoke test scenarios A-F against the current `.adna/` HEAD at P6 entry. Patch text was authored against `27e6395`. If `.adna/` HEAD has advanced, refresh patches against the new HEAD. **Special attention to Patch B' (NN data.json)**: harvest current operator-configured triad colors from `node.aDNA/.obsidian/plugins/notebook-navigator/data.json` before commit to ensure the template ships the *correct* canonical values (not the illustrative ones in this spec). | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches the `upstream_state_at_authoring` frontmatter OR refresh memo lands in `missions/artifacts/` |
| **P6 commit decision: bundle vs. separate** | Three patches (B + B' + C; optional D) are independent in their effects: B+B' close F-S2-6 (NN data.json shipping); C closes F-S2-7 (.obsidianignore extension). Options: (a) single commit "T4 canonicalization (F-S2-5/6/7)" — operator-friendly narrative + smaller commit count; (b) per-sub-finding commits (B+B' as one + C as another + D as optional third) — preserves audit-trail granularity. **Default**: option (a) single commit per T4 design spec; sibling design-specs T1+T2+T3 may aggregate into a single "M3.1 + M3.2 propagation" super-commit at v8 P6 if operator prefers. | Operator decision at P6 entry; Rosetta drafts commit messages | Commit message names T4 + F-S2-5/6/7 + cites this spec path + flags 6th-instance candidacy for Patch B' |
| **P6 commit** | Apply Patches B + B' + C (+ optional D). Commit message template: `v7.x: Obsidian config canonicalization (T4 per M3.2; F-S2-5/6/7): post-install NN data.json shipping + .obsidianignore extension for how/templates/ (Nth instance of single-commit additive-upstream pattern; Patch B' = NN data.json shipping as 6th-instance candidate)`. | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§4) passes |
| **P6 post-commit smoke** | Run §4 acceptance smoke test scenarios A-F on a fresh fork + an existing vault (rehydrate test). | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-F |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T4 fix. For existing forks: rehydrate via `aDNA.aDNA/how/skills/skill_obsidian_canonicalize --canonicalize` (or fork the new skill into the affected vault first). For fresh forks: setup.sh auto-applies. | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 setup.sh behavior (existing install flow unchanged); fresh forks gain triad colors + clean tag pane + canonicalize substrate; existing forks gain rehydrate path via the new skill.

**P6 rollback path**: Patches B + C are additive (new code block + new line); revert via `git revert`. Patch B' (NN data.json) is a new file; rollback = `git rm` of the file. Operators who already received the data.json see no behavior change on rollback (their per-vault state preserved). Zero data loss in all rollback paths.

### 6th-instance additive-upstream candidacy disposition (Patch B' NN data.json)

| Decision | Choose if | Effect |
|---|---|---|
| **Ship Patch B' as 6th-instance additive-upstream** (own commit OR bundled with T4) | NN triad-color UX is intentional aDNA standard | Future forks render triad colors at install; operator-local overrides preserved via canonicalize skill's local-overrides.json layer |
| **Defer Patch B' to canonicalize-skill-only delivery** (no upstream data.json shipping) | NN triad colors are operator-discretionary (each operator picks their own palette) | New skill's `--canonicalize` mode ships the data.json on first run; setup.sh has no NN data.json block |
| **Operator picks at v8 P6 entry** | Disposition is policy-level | Default: ship B' as 6th-instance per F-S2-6 §Proposed approaches Option 1 recommendation |

## Cross-references

- [[../mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — parent mission (Objective 4)
- [[../../../../how/backlog/backlog_F_S2_5_obsidian_json_normalization.md|F-S2-5 backlog]] — finding source (sub-finding 1)
- [[../../../../how/backlog/backlog_F_S2_6_nn_data_json_not_shipped.md|F-S2-6 backlog]] — finding source (sub-finding 2)
- [[../../../../how/backlog/backlog_F_S2_7_template_placeholder_tags.md|F-S2-7 backlog]] — finding source (sub-finding 3)
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T4 track substrate
- [[m31_obj3_t1_design_spec.md|M3.1 T1 design spec]] — companion (T1 preserves setup.sh in fork; precondition for T4 setup.sh patches reaching forked vaults)
- [[m31_obj4_t2_design_spec.md|M3.1 T2 design spec]] — sibling (T2 lands `--reset-layout` primitive; T4's new skill absorbs as sub-mode per D3=A)
- [[m32_obj3_t3_design_spec.md|T3 design spec]] — sibling (T3 lands `--verify` primitive; T4's new skill absorbs as sub-mode; T3 + T4 are paired M3.2 deliverables)
- [[../../../../how/skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — Obj 5 deliverable (the unified skill THIS spec recommends; full content authored at Obj 5 in this mission)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — token budget two-metric + Heavy-File Read Convention

## Prior-instance + bundle citation (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1 | ADR-008 — airlock template stub at `.adna/how/airlock/AIRLOCK.md` | M03 S3 ratified 2026-05-11; commit `6f1822a` | ADR + single template file | M03 |
| 2 | `e3b3bcc` — cross-project routing hook for node.aDNA-aware forks | v7.0 M04 S2 commit | Single hook addition | M04 |
| 3 | `8673383` — `skill_node_bootstrap_interview` skill | v7.x commit | Single skill file addition | M-LWX-01 |
| 4 | `202c9ec` — HOME.md inline-comment plain-prose rephrase | v7.x commit (self-names "4th instance") | Single content rephrase | M-LWX-03 Finding 1 |
| 5 | T1 — preserve setup.sh in skill_project_fork.md | v8 P6 candidate (M3.1) | Single line removal + comment update | M3.1 |
| 6a (or bundled w/ T1=5) | T3 — `setup.sh --verify` mode + integrations | v8 P6 candidate (M3.2) | Multi-file additive | M3.2 |
| **6b (or 7 if T3 separate)** | **T4 Patch B' — NN `data.json` shipping** | **v8 P6 candidate (this spec)** | **Single new template file** | **M3.2 (this mission)** |

**Bundle disposition** at v8 P6 entry: T4's three patches (B + B' + C) are unified by narrative; T4 may ship as a single commit. Patch B' (NN data.json) as an additive-upstream-pattern instance counts separately for lineage discipline. Operator decides at P6.

## Notes

- **Patches B + B' + C are the load-bearing changes** to upstream `.adna/`. Patch D (Templater syntax migration) is operator-discretionary at P6.
- **The new skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md`** (Obj 5; this mission) is the operational consumer of T4 + T2 + T3 primitives. **The skill lives in `aDNA.aDNA/`, NOT upstream** — per F-S2-5 §Critical files placement. This is a deliberate architectural choice: the skill is aDNA.aDNA-resident because it operates on a per-vault basis using upstream primitives from `.adna/setup.sh`; the skill's location preserves the design-at-P3-propagation-at-P6 pattern.
- **3-way merge complexity** (Patch A): the canonicalize skill's delta-aware merge logic operates on flattened dotted-key JSON maps. Edge cases: (a) nested array reordering (Obsidian may reorder array elements; merge treats arrays as opaque blobs unless operator opts into per-element merge); (b) trailing-newline policy (canonicalize strips trailing newlines to match Obsidian's serialization); (c) field-relocation drift from F-S2-5 root cause (e.g., `monospaceFontFamily` migrating `app.json` → `appearance.json`) — merge handles this by treating the relocation as "upstream removed key from app.json + upstream added key to appearance.json"; operator-local overrides anchored to the OLD path may need operator-attention.
- **Cross-cut composability**: T4's new skill orchestrates T2 + T3 + T4 primitives as three modes. T2's `--reset-layout` becomes `skill_obsidian_canonicalize --reset-layout`. T3's `--verify` becomes `skill_obsidian_canonicalize --verify`. T4's `--canonicalize` is the new primitive. **One skill, three operator surfaces, three upstream primitives — unified mental model.**
- **NN data.json provenance**: §5 Patch B' uses illustrative hex values; v8 P6 should source canonical values from operator's live `node.aDNA/.obsidian/plugins/notebook-navigator/data.json` OR from OBSIDIAN_CLAUDE.md:170-174 with operator confirmation.
- **Dual-audience note**: a newcomer reading F-S2-5/6/7 finds them disorienting (three drift narratives with no apparent connection); §2 root cause unifies them under "canonical-state vs. authored-state asymmetry" and §4 recommendation pulls them under a single operator surface. A developer can apply Patches B + B' + C via `git apply` once upstream HEAD is verified.
- **Self-reference (Standing Order #8 — 13th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The pair (T3 + T4) + the new skill at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (Obj 5) form the FIRST behavioral test of whether the M2.4.5-hardened `how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops in M3.x missions. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
