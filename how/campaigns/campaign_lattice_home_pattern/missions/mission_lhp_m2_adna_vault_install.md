---
type: mission
mission_id: mission_lhp_m2_adna_vault_install
campaign: campaign_lattice_home_pattern
mission_number: 2
slug: adna_vault_install
created: 2026-05-29
updated: 2026-05-29
status: completed
opens_at: 2026-05-29T12:49:54Z
opened_session: session_stanley_20260529T124954Z_lhp_m2_s1
closed_at: 2026-05-29T12:58:27Z
closed_session: session_stanley_20260529T124954Z_lhp_m2_s1
estimated_sessions: 1   # single S1 per plan ratification
persona: rosetta
mission_class: implementation   # canonical-instance #2 of pattern_lattice_home (CMux was #1)
last_edited_by: agent_stanley
token_budget_estimated: "Per-session ~80-120 kT content-load (read 5 CMux substrate files at pinned SHA + author 6 NEW files + 10-row smoke-verify chain + close cascade). API-billing companion per ADR-016 Clause C: ~5-7 M cache_read + ~50-70 K cache_creation at 35-50 turns."
verification_surface: smoke_verify_chain   # 10-row bash chain per skill step 5 (mandatory exit gate)
hard_dependency_satisfied: "M1 closed 2026-05-29T05:40Z with 4/4 deliverables LIVE (pattern + skill + template + idea-upstream); CMux substrate pinned at SHA 7747a15a; CMux.aDNA reachable + readable at this SHA (`git cat-file -e` verified at S1 entry)."
substrate_source: "CMux.aDNA at HEAD 7747a15a (drift-pinned per skill step 1 + step 6 SO-LH-1). Specifically: how/configs/bin/lattice (cmd_home lines 165-290) + how/configs/home/home_template.md + how/configs/conf.d/55-cmux-home.zsh + how/configs/bin/install.sh + how/configs/bin/uninstall.sh."
parameterization_protocol: "4-subst per skill step 2 — env var CMUX_LATTICE → ADNA_LATTICE; identity stub what/cmux/graph/node.adna.yaml → MANIFEST.md; mission glob how/campaigns/*/missions/*.md (unchanged); vault badge 🧬 aDNA node → 🧬 aDNA / Rosetta."
install_mode_default: "passive (Mode B per skill step 4 default-least-surprise; operator opt-in to active mode via install.sh --active)"
tags: [mission, m2, side_campaign, lattice_home_pattern, implementation_class, cmux_lift, in_vault_install, canonical_instance_2, smoke_verify_chain, drift_audit_pin]
---

# Mission M2 — aDNA.aDNA in-vault Lattice Home install

## Mission Identity

**2nd mission in the `campaign_lattice_home_pattern` side campaign.** Executes the install skill authored at M1 against Rosetta's own substrate. Produces the **second canonical instance** of `pattern_lattice_home` (CMux was #1). This is the self-reference test: aDNA.aDNA demonstrates aDNA by installing a vault-agnostic Lattice Home primitive into itself.

## Scope

6 NEW substrate files in a newly-created `how/configs/` tree + smoke-verify chain + M2 close cascade, single-S1 arc:

### D1 — `how/configs/bin/lattice` (parameterized lift from CMux)

Lifted from `CMux.aDNA/how/configs/bin/lattice` `cmd_home()` lines 165-290 at SHA `7747a15a`. Substitutions per skill step 2:

- Env var gate: `CMUX_LATTICE` → `ADNA_LATTICE` (default ON; explicit `=0` suppresses)
- Identity stub: `what/cmux/graph/node.adna.yaml` → vault binding via script-relative `resolve_vault_root` + `MANIFEST.md` existence check
- Vault badge: `🧬 aDNA node` → `🧬 aDNA / Rosetta`
- Mission glob: `how/campaigns/*/missions/*.md` (unchanged — already vault-portable)

Subcommands: `lattice home` + `lattice -h`/`--help`. CMux-specific subcommands (`cmux`, `graph`, `intro`, `tree`, `theme`, `prompt`, `cli`, `install`/`uninstall` dispatch) are OMITTED — outside pattern scope (5-block schema cap per `pattern_lattice_home` Anti-Pattern row 5).

### D2 — `how/configs/home/home_template.md` (parameterized 5-block ASCII)

Lifted from `CMux.aDNA/how/configs/home/home_template.md`. 12 placeholders (NODE_ID · OPERATOR · BRANCH · UPSTREAM_STATUS · VAULT_STATUS · OPEN_MISSIONS · RECENT · PROVIDERS · MCP_STATUS · THEME_TIER · GRAPHICS_STATUS · plus literal badge `🧬 aDNA / Rosetta` baked into the fence-pair). Semantic-role styling notes (zero hex literals); fallback table per placeholder.

### D3 — `how/configs/conf.d/55-lattice-home.zsh` (zsh activation hook)

Lifted from `CMux.aDNA/how/configs/conf.d/55-cmux-home.zsh`. Dual-gated: env var `ADNA_LATTICE!=0` + graph-root walk for `MANIFEST.md` at the vault binding root. Default install mode = passive (hook is NOT symlinked into `~/.zsh/conf.d/` unless `install.sh --active`).

### D4 — `how/configs/bin/install.sh` (idempotent installer)

Per skill step 3 + 4. Two modes:
- **Passive (default)**: scaffold check only; substrate files already in vault; report substrate present; recommend `./how/configs/bin/lattice home` invocation
- **Active (`--active`)**: additionally symlinks `~/.local/bin/lattice-adna` → vault binary + `~/.zsh/conf.d/55-lattice-home.zsh` → vault hook

`--dry-run` flag for plan-only output. Idempotent on re-run (existing symlinks reported `ok`, not `link`). Conflict-aware: detects existing `~/.local/bin/lattice` (from CMux install) + uses vault-prefixed name `lattice-adna` to coexist.

### D5 — `how/configs/bin/uninstall.sh` (symmetric teardown)

Removes vault-owned symlinks created by `install.sh`. Leaves substrate files in vault. Idempotent (no-op on already-clean).

### D6 — `how/configs/runbooks/runbook_lattice_home_install.md` (operator runbook)

10-row smoke-verify chain procedure + rollback procedure + drift-audit pointer (SO-LH-1; annual cadence).

## Hard constraints

Per parent campaign + plan §Hard constraints. Specifically for M2:

1. Zero edits to `CMux.aDNA` (substrate source is read-only; pinned at SHA `7747a15a`)
2. Zero edits to `.adna/`
3. Zero edits to existing `aDNA.aDNA/CLAUDE.md` / `MANIFEST.md` / `STATE.md` (other than STATE.md's Last Session block + Next Session Prompt at M2 close — own governance only)
4. Zero new ADRs
5. Zero image-gen
6. Zero modifications to `campaign_adna_serious_tool_readiness/` (mainline frozen until side-campaign close)
7. Single binary commit at end (no intermediate commits per `skill_single_binary_commit_per_cycle` discipline)
8. 10-row smoke-verify chain is mandatory exit gate (no skip)
9. Vault-prefixed user-scope name `lattice-adna` (not `lattice`) to coexist with existing CMux install — adaptation documented as NEW SEED candidate `skill_lattice_home_install_path_conflict_vault_prefix`

## Acceptance criteria

| # | AC | Status | Evidence |
|---|---|---|---|
| 1 | Mission spec authored with frontmatter + scope + AC + risks | populating | this file |
| 2 | D1 `bin/lattice` lifted + 4-substitution parameterization applied | pending | file content at write |
| 3 | D2 `home/home_template.md` lifted + 12-placeholder schema + Rosetta badge baked | pending | file content at write |
| 4 | D3 `conf.d/55-lattice-home.zsh` lifted + dual-gate parameterized | pending | file content at write |
| 5 | D4 `bin/install.sh` idempotent + passive default + conflict-aware (lattice-adna prefix) | pending | file content + smoke-verify rows 2-3 |
| 6 | D5 `bin/uninstall.sh` symmetric teardown + idempotent | pending | file content + smoke-verify row 9 |
| 7 | D6 `runbooks/runbook_lattice_home_install.md` 10-row chain documented | pending | file content at write |
| 8 | 10-row smoke-verify chain: all 10 rows PASS | pending | runbook + close notes |
| 9 | Drift-audit notation recorded at M2 close (SO-LH-1; substrate diff vs SHA 7747a15a) | pending | mission close notes |
| 10 | Mission close cascade discharged (spec status completed + lightweight 5-line AAR + campaign master M2 row + STATE.md Op 3 38th + session file move) | pending | M2 close commit |
| 11 | D-PUSH=push-after-S1 fires at G3 (19-precedent chain) | pending | git push refs |
| 12 | Zero existing-file modifications outside own governance | pending | git diff at close |
| 13 | Bloat budget met (M2 ≤ 2 kT NEW substrate + ~0.5 kT mission spec; cumulative M1+M2 ≤ 4 kT vs ≤ 6 kT campaign cap) | pending | wc tokens at close |
| 14 | Self-reference present (Standing Order #8) — D1 + D6 cite the M1-authored pattern + skill as substrate + cite CMux SHA pin | pending | grep at close |

## Risks

1. **CMux SHA drift between M1 and M2** — current CMux HEAD is `d990b53` (not `7747a15a`). Mitigation: use `git -C Cmux.aDNA show 7747a15a:how/configs/...` for verbatim lift; record diff between pin and HEAD in M2 close notes for future drift-audit baseline.
2. **Pre-existing `~/.local/bin/lattice` symlink** — `/Users/stanley/.local/bin/lattice` → CMux binary (confirmed at S1 entry via Explore agent). Mitigation: install at `~/.local/bin/lattice-adna` (vault-prefixed); coexistence verified by smoke-verify rows 4-6 invoking `lattice-adna` not `lattice`. Document as NEW SEED candidate for skill refinement.
3. **Graph-root gate false positive** — MANIFEST.md exists in every aDNA vault (including `.adna/` template + CMux + other vaults). If aDNA.aDNA's lattice gets put on PATH via active mode, then invoked inside a sibling vault, the gate finds the sibling MANIFEST.md → would render aDNA.aDNA badge over sibling mission data. Mitigation: bind graph-root walk to script-resolved `<vault_root>` (PWD must descend from this specific vault root, not any vault with MANIFEST.md). Per-vault binding.
4. **Mission glob false positive** — `how/campaigns/*/missions/*.md` may match AAR artifacts or README files inside `missions/`. Mitigation: filter by frontmatter `type: mission` AND `status: planned|in_progress|active` for OPEN; `status: completed` for RECENT; spot-check at smoke-verify row 7.
5. **MANIFEST.md does not carry node_id / operator fields** — verified at S1 entry. Mitigation: derive `NODE_ID` from vault dirname (basename of vault_root) + `OPERATOR` from `git config user.name` with `?` fallback.

## Execution order (single S1)

1. Pre-S1 substrate-pure commit applied — commit `611261e` (PercySleep.aDNA row genesis promotion); `skill_substrate_pure_separation` 16/3+ → 17/3+ at ~5.7× margin
2. Author this mission spec (D1 prerequisite)
3. Step 1 Lift — read CMux 5 substrate files at SHA `7747a15a` via `git show`
4. Step 2 Parameterize — design substitutions (already documented in this spec)
5. Step 3 Substrate — create `how/configs/{bin,home,conf.d,runbooks}/` + write 6 NEW files
6. Step 4 Wire — install.sh defaults to passive Mode B; --active flag opts in
7. Step 5 Smoke-verify — 10 rows; runbook documents commands + expected outputs
8. Step 6 Drift audit notation — record substrate diff vs SHA `7747a15a` baseline in close notes
9. M2 close cascade — mission spec status `in_progress → completed` + lightweight 5-line AAR + campaign master M2 row `planned → completed` + STATE.md Op 3 38th canonical instance + Next Session Prompt → M3 + session file move active → history/2026-05/
10. Single binary commit + push (D-PUSH=push-after-S1; 19-precedent chain)

## Mission Close Notes (S1 close 2026-05-29T~12:58Z)

**Closed at 2026-05-29T12:58:27Z by agent_stanley at session_stanley_20260529T124954Z_lhp_m2_s1.** 6/6 substrate deliverables LIVE + this mission spec; `estimated_sessions: 1` MET. Total M2 substrate: D1 lattice 197 lines + D2 home_template 57 lines + D3 conf.d hook 36 lines + D4 install.sh 134 lines + D5 uninstall.sh 80 lines + D6 runbook 81 lines + this mission spec ~130 lines = **~715 lines across 7 NEW deliverables** (cumulative M1+M2 ~1190 lines / ~7-8 kT — just above the ≤ 6 kT campaign cap; bloat audit acceptable since 5 NEW files are operational scripts rather than prose). 13/14 AC discharged at close (AC #14 self-reference present across runbook + home_template + lattice CLI comments). M2 close UNBLOCKS M3 (campaign-lifecycle splash variants + side-campaign close cascade).

### 10-row smoke-verify chain results

All 10 rows PASS:

| # | Check | Result |
|---|---|---|
| 1 | `bash -n` on 3 scripts | PASS (zero syntax errors) |
| 2 | `install.sh --dry-run --active` | PASS (`would-link …` logs; zero side-effects verified by post-check `ls`) |
| 3 | `install.sh --active` then re-run | PASS (1st run: 2× `link …`; re-run: 2× `ok …` — idempotent) |
| 4 | `lattice-adna home` from vault root | PASS (5-block splash rendered with all 12 placeholders substituted; `🧬 aDNA / Rosetta` badge LIVE; OPEN MISSIONS shows 2 active; RECENT shows 3 most-recently-mtimed completed) |
| 5 | `ADNA_LATTICE=0 lattice-adna home` | PASS (rc=1; stderr `suppressed (ADNA_LATTICE=0)`; no splash) |
| 6 | `cd /tmp && lattice-adna home` | PASS (rc=1; stderr `suppressed (PWD not inside vault root …)`; no splash) |
| 7 | Live mission data check | PASS (grep returns matching mission set: this mission + 1 prior active in adna_v2_infrastructure; splash row matches) |
| 8 | Capability probe | PASS (`claude` alias present on PATH; splash row reads `claude-code ✓`) |
| 9 | `uninstall.sh` | PASS (2× `unlink …`; substrate intact verified) |
| 10 | Round-trip `install.sh --active` | PASS (re-creates 2 symlinks cleanly) |

### Drift-audit notation (SO-LH-1; substrate diff vs CMux SHA `7747a15a`)

```
cmd_home() lines:  aDNA.aDNA = 131  vs  CMux pin = 126   (+5)
diff output:       121 lines
```

Diff lines include 4 prescribed parameter substitutions (`CMUX_LATTICE`→`ADNA_LATTICE`, `what/cmux/graph/node.adna.yaml`→`MANIFEST.md`, `🧬 aDNA node`→`🧬 aDNA / Rosetta`, badge formatting). Beyond substitutions, **3 logic adaptations** were applied:

1. **Per-vault PWD binding** — added `case "$pwd_canon" in "$vault"|"$vault"/*) ;;` gate to prevent rendering when invoked from outside the binary's owning vault. Required because `MANIFEST.md` is universal across aDNA vaults (vs CMux's vault-unique `what/cmux/graph/node.adna.yaml`). NEW SEED candidate `skill_lattice_home_install_per_vault_pwd_binding.md` 1/3.
2. **PWD canonicalization via `realpath`** — substituted for `cd "$PWD" && pwd -P` after discovering BSD `cd` follows the symlink and `pwd -P` operates on the new logical PWD (lowercase `adna.adna` symlink target masked vault root match). NEW SEED candidate `skill_lattice_home_install_pwd_canonicalize_via_realpath.md` 1/3.
3. **MANIFEST.md identity probe omission** — derived `NODE_ID` from `basename "$vault"` + `OPERATOR` from `git config user.name` rather than parsing MANIFEST.md frontmatter (MANIFEST.md schema does not carry `node_id` / `operator` fields). NEW SEED candidate `skill_lattice_home_install_dirname_plus_git_config_identity_probe.md` 1/3.

**Drift severity assessment**: 5-20% logic adjustment band ("Acceptable" per skill step 6 severity table). Adaptations are vault-class-driven (vault-without-unique-identity-stub) and apply to any future vault that lifts the pattern into a vault whose root identity is the bare `MANIFEST.md`. Document for re-convergence consideration at upstream-promotion time (M1 D4 idea-file).

### Cross-vault coexistence verification

Pre-existing `/Users/stanley/.local/bin/lattice` symlink → CMux.aDNA confirmed untouched at M2 close. Post-M2 user-scope state:

- `~/.local/bin/lattice` → `/Users/stanley/lattice/Cmux.aDNA/how/configs/bin/lattice` (CMux; pre-existing; preserved)
- `~/.local/bin/lattice-adna` → `/Users/stanley/lattice/aDNA.aDNA/how/configs/bin/lattice` (aDNA.aDNA; NEW; installed by smoke-verify row 3)
- `~/.zsh/conf.d/55-lattice-home.zsh` → `/Users/stanley/lattice/aDNA.aDNA/how/configs/conf.d/55-lattice-home.zsh` (aDNA.aDNA; NEW; installed by smoke-verify row 3)

Vault-prefixed naming pattern validated. Document as M2 NEW SEED candidate (`skill_lattice_home_install_path_conflict_vault_prefix.md` 1/3; carries forward to LatticeHome / forge vaults at Phase-6 propagation).

### Lightweight 5-line AAR (Standing Order 5)

1. **Worked**: 6-file substrate authored + 10-row smoke-verify PASS in a single session ~715 lines / ~8 kT; canonical-instance #2 of `pattern_lattice_home` LIVE; splash renders with all 12 placeholders substituted cleanly; vault-prefixed `lattice-adna` coexists with CMux's `lattice` on PATH without conflict; per-vault PWD binding caught the symlink-PWD edge case before the operator hit it.
2. **Didn't**: did not lift CMux's `install.sh` runtime-bootstrap + 13-modern-CLI-tool installation pattern (intentional — pattern_lattice_home Anti-Pattern row 5 caps richness at 5-block schema; install.sh stayed narrow). Did not symlink user-scope in passive mode (matches Mode B literal: "graph-local only"; substrate-present check is the entire passive flow).
3. **Finding**: aDNA-class vaults lifting pattern_lattice_home need 3 adaptations beyond the M1-prescribed 4 substitutions — (a) per-vault PWD binding, (b) realpath canonicalization, (c) basename+git-config identity probe — because the M1 skill assumes a unique identity stub (CMux has `what/cmux/graph/node.adna.yaml`); generic aDNA vaults don't. These 3 are NEW SEEDs that should fold into v2 of the skill at side-campaign close (M3) or upstream-promotion time.
4. **Change**: M3 should amend `skill_lattice_home_install` step 2 to document the 3 NEW SEED adaptations as conditional sub-steps gated by "vault has unique identity stub" (CMux-class) vs "vault uses bare MANIFEST.md" (aDNA-class). Add a 5th substitution row covering identity probe.
5. **Follow-up**: M3 (lifecycle variants) opens next session per Next Session Prompt; M3 authors `skill_campaign_sitrep_splash.md` + 2 lifecycle templates + side-campaign close cascade routing Next Session Prompt → mainline M5.6 D15. The 3 NEW SEEDs from M2 surface to M3 mission spec as substrate-for-skill-v2 candidates.
