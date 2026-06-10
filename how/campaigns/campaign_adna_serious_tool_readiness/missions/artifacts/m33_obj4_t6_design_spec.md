---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.3
obj: 4
track: T6
finding_id: [F-Obj2-1, F-Obj2-3]
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395) + aDNA.aDNA/how/skills/ (local landing at Obj 5)"
upstream_state_at_authoring: "v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit); post-M3.2-close addendum at 5861133 operator-override NOT precedent"
created: 2026-05-23
updated: 2026-05-23
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_3, obj_4, t6, integration_test, vault_agnostic, cross_skill_delegation, per_vault_profile, t8_forward_reference_stub, six_section_structure_5th_canonical_instance, v8_p6_propagation_queue, rosetta, standing_order_8_15th_tactical_invocation_candidate, m245_routing_layer_2nd_behavioral_test]
---

# T6 Design Spec — Integration test framework (`skill_obsidian_integration_test.md` vault-agnostic O1-O7 + per-vault profile + cross-skill delegation)

> **What this is**: a proposed-patch artifact for one NEW skill at `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (local landing at M3.3 Obj 5 in this same session; v8 P6 candidate for upstream promotion to `.adna/how/skills/`) and one OPTIONAL upstream patch to `.adna/setup.sh` adding a `--test` mode that delegates to the skill (deferred to v8 P6 candidacy; not required for M3.3 close). The fix closes the **vault-agnostic test-framework gap** documented in F-Obj2-1 + F-Obj2-3 carried from M-LWX-03 S1: the operator-side O1-O7 validation checklist exists today only as inline prose in `mlwx_03_obj2_outer_vault_test_results.md` (mission-specific to node.aDNA); no reusable skill exists; fresh vault forks have no post-fork integration-test recipe.
>
> **Design-at-P3, propagation-at-P6**: the NEW skill ships LOCALLY at this session (M3.3 Obj 5 — operational consumer of this design spec, mirrors M3.2 D2 precedent where `skill_obsidian_canonicalize.md` shipped at S2 ratifying its own design spec end-to-end). The OPTIONAL setup.sh `--test` mode hook is the v8 P6 propagation candidate; the skill itself is the v8 P6 upstream-promotion candidate (operator decides at P6 entry whether to promote `aDNA.aDNA/how/skills/` → `.adna/how/skills/`).
>
> **Cross-skill primitive composition** — the load-bearing architectural decision: T6 skill DELEGATES the binary-presence check (O4 in the generalized O1-O7) to M3.2's `skill_obsidian_canonicalize.md --verify` mode. This is the **first explicit cross-skill primitive consumption across the M3.x cohort**; the precedent applies to M3.4+ skill compositions. T6 explicitly evaluates delegate-vs-reimplement in §3 option matrix per M3.3 mission spec line 293.
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/aDNA/.adna/`. All patch text is literal content for v8 P6 (setup.sh hook) and Obj 5 (the new skill) to apply.
>
> **Standing Order #8 self-reference** — 15th tactical invocation candidate in v8 (jointly with T5; the new skill at Obj 5 is the 2nd behavioral test of M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability after M3.2's `skill_obsidian_canonicalize.md`).

## 1. Finding statement (F-Obj2-1 + F-Obj2-3)

Two carry-forward findings from M-LWX-03 S1 converge on a single architectural gap:

> **F-Obj2-1 (spec-vs-implementation divergence; medium, expected)**: M04b Obj 3 §6's 8-test list was authored before M-LWX-02's Option C reframe. The test list is **architecturally tied to the rejected outer-vault model**; the operator-side validation checklist that emerged from M-LWX-02 + M-LWX-03 (O1-O7) lives ONLY as inline prose inside `mlwx_03_obj2_outer_vault_test_results.md` — mission-specific to node.aDNA, no reusable skill exists. Fresh vault forks have no post-fork integration-test recipe.
>
> — [[../../../campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|mlwx_03_obj2_outer_vault_test_results.md]] §F-Obj2-1 (2026-05-13; M-LWX-03 S1 surfaced)

> **F-Obj2-3 (two operator-side dimensions not in original spec; cosmetic-clarification)**: M-LWX-02 introduced O4 (within-vault wikilinks navigate) + O7 (theme + accent applied) as operator-side checks that the M04b §6 8-test list did NOT specify. These are valuable additions; the divergence shows the design's testable surface grows when role-expansion lands within an existing vault. **Fix candidate**: include O4/O7-equivalent dimensions in any future generalized test surface.
>
> — [[../../../campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|mlwx_03_obj2_outer_vault_test_results.md]] §F-Obj2-3 (2026-05-13; M-LWX-03 S1 surfaced)

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z; inherited by M3.2 + M3.3)**: confirmed via static analysis — `aDNA.aDNA/how/skills/` contains 16 skill files at last `ls` (M3.2 baseline); none of them is named `skill_obsidian_integration_test.md` or covers the O1-O7 surface. `node.aDNA/how/skills/skill_node_health_check.md` is the closest pre-existing primitive (Step 1-12 cover top-level files, scaffolds, inventory, identity, federation, frontmatter) but does NOT cover Obsidian operator-side smoke (UI launch, theme application, wikilink resolution, marketplace link click). `skill_obsidian_canonicalize.md` (M3.2 deliverable) has a `--verify` mode that covers plugin-binary state but NOT the broader 7-dimension operator-side surface.

**Why this is the right scope for T6**: M-LWX-03 closed 2026-05-13 with the operator-side O1-O7 results documented but unreusable — Carly + Herb dispatched validation absorbed 4 of 7 checks (O4/O5/O6/O3-extended) via `campaign_validation_node_adna_lwx_outputs` in lattice-labs, but the dispatch is one-off per partner-vault and produces no reusable skill. Every subsequent forge vault (SiteForge, CanvasForge, ScienceStanley, etc.) and every partner-vault re-fork ends up re-inventing the operator-side checklist OR running a custom validation. T6 lifts the checklist into a **vault-agnostic skill** — one place to update when the test surface grows, one place to invoke when validation is needed, one consumer of M3.2's primitive (`--verify`) extended with broader operator-side scope.

## 2. Root cause

Three layered causes explain why a vault-agnostic integration-test skill does not yet exist:

1. **M-LWX-03 captured O1-O7 inline, not as a skill.** The mini-campaign's mission scope was "verify the loop end-to-end on Stanley's L1 (this MacBook Pro) as the canonical reference run, capture findings, produce the mini-campaign AAR" (M-LWX-03 mission spec line 76). Producing a reusable skill was out of scope — the goal was a one-off integration test result, not a framework. The result artifact (`mlwx_03_obj2_outer_vault_test_results.md`) is therefore mission-specific: it talks about `node.aDNA` HOME.md, the specific 21-vault count, the specific Tokyo Night theme + Rebecca Purple accent. Generalization to vault-agnostic was deferred to "successor campaign work" (M-LWX-03 S2 Phase L finding-routing) and absorbed by `campaign_obsidian_deployment_stabilization` Track 6 — now this M3.3 mission.

2. **M3.2 `skill_obsidian_canonicalize.md` solved one operator-side dimension (binary-presence via `--verify`) but not the other 6.** M3.2 was scoped to F-S2-5/6/7 (canonicalization, NN data.json, .obsidianignore). Its `--verify` mode is the cleanest existing primitive but only addresses O4-equivalent (plugin-binary state). The other 6 dimensions (vault opens cleanly, home page renders, content tables enumerate, within-vault wikilinks navigate, cross-vault markdown links open, theme + accent applied) need either reimplementation or composition with new logic. T6 is the composition point.

3. **No skill template for "vault-agnostic operator-side checklist."** `skill_node_health_check.md` is vault-specific to `node.aDNA/` (Steps 1-12 reference node-skills, inventory, identity, federation specific to node-scope). `skill_obsidian_canonicalize.md` is vault-agnostic via `--vault <path>` slot but mode-specific (canonicalize / reset-layout / verify). There is no precedent skill for "run an operator-side checklist against a target vault, with per-vault customization." T6 establishes the pattern — and the **per-vault `.obsidian/integration-test-profile.json`** convention proposed here may apply to future cross-vault operator-side audits.

The compounding produces today's state: every forge vault and partner-vault re-fork either skips operator-side integration testing OR rebuilds the checklist from scratch. T6 closes this by lifting O1-O7 to a vault-agnostic skill with `--vault` + `--profile` slots, while preserving M3.2's `--verify` primitive as a delegated dependency (composition, not duplication).

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **NEW skill + DELEGATE binary-presence to `skill_obsidian_canonicalize.md --verify`** (RECOMMENDED — first explicit cross-skill primitive composition in M3.x cohort). Author `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` with vault-agnostic O1-O7 + `--vault <path>` + `--profile <profile>` slots. For O4 (binary-presence), invoke `skill_obsidian_canonicalize.md --verify` as a subprocess and consume its exit code + summary line. | NEW skill file ~1,500-1,800 LOC markdown (Obj 5 of this same mission) | One new operator-facing skill at the local `aDNA.aDNA/how/skills/` surface; vault-agnostic via `--vault` | Operators gain a single-command integration-test invocation; binary-presence reuses M3.2 primitive | Adds a cross-skill dependency — if M3.2's skill is renamed / removed / extended in non-compatible ways, T6's O4 breaks. Mitigation: T6 skill declares the dependency in its Requirements block; M3.2's spec is marked load-bearing for T6. |
| 2 | **NEW skill + REIMPLEMENT binary-presence locally** (rejected). Same skill structure as Option 1, but instead of delegating O4 to M3.2's `--verify`, reimplement the `community-plugins.json` ∩ `.obsidian/plugins/<id>/main.js` check inline within T6 skill. | NEW skill file ~1,800-2,200 LOC (extra ~300-400 LOC for the duplicated binary-presence logic) | Same operator surface as Option 1 | Behavior identical to Option 1; implementation diverges | **Rejected**: violates the cross-skill primitive composition discipline being established by M3.3 (the very architectural primitive this mission is supposed to demonstrate). Duplicates M3.2's logic → two places to update when Obsidian's `community-plugins.json` schema changes → drift risk. **The whole point of M3.2 shipping `--verify` as a discrete mode was reusability**; Option 2 throws that away. |
| 3 | **Extend `skill_obsidian_canonicalize.md` with an integration-test mode** (rejected). Add `--integration-test` mode to the M3.2 skill; cover O1-O7 there. | M3.2 skill ~+800 LOC + arg parser extension | Single skill, one more mode | All operator-side checks live in one skill | **Rejected**: overloads `skill_obsidian_canonicalize.md`'s single-responsibility (it canonicalizes config; integration-test is a different concern). M3.2's skill is already 3-mode (canonicalize / reset-layout / verify); adding a 4th mode that does something architecturally different (broad operator-side validation) violates the single-responsibility principle and makes the skill harder to reason about. **The mode-overloading rejection IS the cross-skill primitive composition pattern's motivation**: separate skills, composed via delegation. |
| 4 | **Inline checks in setup.sh** (rejected). Add `setup.sh --test` mode that bundles all O1-O7 logic into the setup script. | `.adna/setup.sh` ~+400-500 LOC (substantial; full O1-O7 logic) | New CLI flag on setup.sh; one-stop invocation | Tests live with the install primitive | **Rejected**: couples the test framework to the setup script's lifecycle (operator must have setup.sh in scope to run tests; cross-vault testing requires copying setup.sh around). Also conflates "install" with "validate" — operator can't validate a vault without the install script being present. Skill-as-vault-resident is the better model (vault has its skills; skills have their cross-vault `--vault` slot). **Available as v8 P6 candidate** for the `--test` mode hook ONLY as a thin delegation that forwards to the skill — see Patch B in §5. |
| 5 | **Split agent-side skill vs operator-side skill** (deferred). Two skills: one for agent-driven checks (those that can run headlessly), one for operator-side visual checks (those that require Obsidian UI). | NEW: 2 skill files ~1,000+800 LOC | Two operator-facing skills | Agent and operator have separate invocation surfaces | **Deferred to M3.4+ when T8 (agent-driven inspection via Local REST API + MCP) lands**. At T6 the agent-side ≠ operator-side split adds surface without earning its weight — M-LWX-03 dispatched 4 of 7 operator-side checks to Carly+Herb; T6 reproduces that dispatch model via `--profile` (e.g., `operator-side` vs `agent-driven`) inside a SINGLE skill. M3.4+ may split if T8's agent-driven scope is large enough to warrant a dedicated skill. |

## 4. Recommendation

**Option 1 — NEW skill + DELEGATE binary-presence to `skill_obsidian_canonicalize.md --verify`** — is recommended, matching the absorbed-source verbatim at [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] line 60-62 ("*Generalize M-LWX-03 Obj 2's operator-side O1-O7 into a reusable skill `skill_obsidian_integration_test.md` that any vault can run post-fork to validate deployment integrity. Vault-agnostic check list + per-vault customization slots + integration with T8 agent-driven inspection where possible.*").

### Rationale

- **Cross-skill primitive composition is the architectural lesson being learned at M3.x cohort.** M3.2 shipped `skill_obsidian_canonicalize.md` with three modes — explicitly designed for composition (e.g., `--verify` mode is "pure delegation to setup.sh --verify"). T6 IS the test of whether that composition pattern survives a cross-mission cross-skill consumer. Recommending Option 1 ratifies the pattern; the alternative (reimplement) would invalidate M3.2's design intent.
- **Vault-agnostic via `--vault <path>` mirrors M3.2 precedent.** `skill_obsidian_canonicalize.md` uses `--vault <path>` (default: vault containing the skill). T6 uses the same convention: `--vault <path>` lets any aDNA vault invoke T6's skill against itself OR against a sibling vault. This is the cross-vault testability primitive that absorbed-source line 61 asks for.
- **`--profile <profile>` is the per-vault customization slot.** Default `default` profile = all 7 checks (O1-O7). Per-vault profiles live at `<vault>/.obsidian/integration-test-profile.json` (opt-in; absent = use `default`). Profiles can skip checks (e.g., a vault that intentionally has no HOME.md skips O2) or add custom checks (e.g., a vault with a Bases gallery adds an O8 for Bases rendering). The profile system is the bridge between vault-agnostic generalization and per-vault reality.
- **T8 forward-reference stub** (`## Forward integration with T8 (M3.4)`) — D4=A per plan ratification mandates stub-only references. T6 skill includes a section naming Local REST API + MCP touch points; no implementation. M3.4 wires Local REST API + MCP and may upgrade T6 from operator-invocation to agent-invocation for the subset of O1-O7 that can run headlessly.
- **Per-mission-class self-reference (Standing Order #8 15th tactical invocation candidate jointly with T5)**: T6 skill is the 2nd new-skill drop at `aDNA.aDNA/how/skills/` in the M3.x cohort (after M3.2's `skill_obsidian_canonicalize.md`). M2.4.5 hardened `how/skills/AGENTS.md` for new-skill discoverability; T6's skill IS the 2nd behavioral test. Combined with T5's documentation patches, this mission produces the **first within-mission cross-skill primitive composition** in v8: T6 skill ratifies M3.2 skill as operational primitive.

### Acceptance smoke test (post-Obj 5 landing + v8 P6 setup.sh `--test` hook landing)

```bash
# Scenario A: invoke T6 skill on local vault (aDNA.aDNA itself) with default profile
cd ~/aDNA/aDNA.aDNA/
./how/skills/skill_obsidian_integration_test --vault . --profile default
# Expect: O1-O7 each report pass/fail; summary line "Integration test: 6/7 PASS — O2 FAIL: HOME.md not present (aDNA.aDNA has README.md + CLAUDE.md but no HOME.md)"
# Exit 1 (any fail)

# Scenario B: invoke T6 skill on node.aDNA (the canonical reference vault from M-LWX-03)
./how/skills/skill_obsidian_integration_test --vault ~/aDNA/node.aDNA/ --profile default
# Expect: O1-O7 each report pass/fail; summary line "Integration test: 7/7 PASS" (matches M-LWX-03 S2 operator-side results post-setup.sh)
# Exit 0

# Scenario C: invoke with per-vault profile that skips O2
cat > ~/aDNA/aDNA.aDNA/.obsidian/integration-test-profile.json <<'EOF'
{
  "profile_name": "aDNA.aDNA-no-home",
  "skip_checks": ["O2"],
  "add_checks": []
}
EOF
./how/skills/skill_obsidian_integration_test --vault . --profile aDNA.aDNA-no-home
# Expect: O1 + O3-O7 report; O2 marked SKIP; summary "Integration test: 6/6 PASS (O2 SKIP)"
# Exit 0

# Scenario D: cross-skill delegation — O4 (binary-presence) invokes skill_obsidian_canonicalize.md --verify
./how/skills/skill_obsidian_integration_test --vault . --profile default --verbose
# Expect: O4 row output includes "DELEGATE to skill_obsidian_canonicalize.md --verify; exit 0 / 1 / 2"
# T6 skill captures the delegate exit code + pass-through summary

# Scenario E: v8 P6 setup.sh --test mode (if landed)
cd ~/aDNA/<some-vault>.aDNA/
./setup.sh --test
# Expect: setup.sh delegates to ./how/skills/skill_obsidian_integration_test --vault . --profile default
# Same exit code + same output as Scenario A direct invocation

# Scenario F: T8 forward-reference stub is documented (not implemented)
grep -A 3 "Forward integration with T8" ./how/skills/skill_obsidian_integration_test.md
# Expect: section heading exists; ≥ 1 paragraph; names Local REST API + MCP; no wiring code
```

Expected: PASS on scenarios A-D + F at Obj 5 landing; Scenario E PASS at v8 P6 landing (or N/A if Patch B is rejected at P6).

## 5. Literal patch text

### Patch A — NEW `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (full skill file)

The full skill body is delivered as **Obj 5 of M3.3 in this same session** — the skill IS the design's operational ratification (mirrors M3.2 D2 where `skill_obsidian_canonicalize.md` shipped at S2). v8 P6 may consume this same skill file content as the upstream-promotion candidate (subject to operator decision at P6 entry whether to promote to `.adna/how/skills/`).

**Skill shape summary** (the full file lands at `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` as Obj 5; this section summarizes the contract to keep the design spec self-contained):

```yaml
---
type: skill
skill_type: agent
created: 2026-05-23
updated: 2026-05-23
status: active
category: obsidian_operations
trigger: "Run vault-agnostic Obsidian deployment integration test (O1-O7) against a target vault. Vault-agnostic checklist + per-vault profile customization slots. Delegates binary-presence (O4) to skill_obsidian_canonicalize.md --verify (cross-skill primitive composition)."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m33_obj5
graduated_at: 2026-05-23
graduated_via: campaign_adna_serious_tool_readiness M3.3 S2
tags: [skill, obsidian, integration_test, vault_agnostic, cross_skill_delegation, t6, m3_3, design_at_p3_propagation_at_p6, t8_forward_reference_stub, per_vault_profile, standing_order_8_15th_tactical_invocation_candidate, m245_routing_layer_2nd_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (json module), grep, sed]
  context:
    - <vault>/.obsidian/                                          # target vault's Obsidian config
    - <vault>/.obsidian/integration-test-profile.json             # opt-in per-vault profile (optional)
    - <vault>/HOME.md OR <vault>/README.md OR <vault>/CLAUDE.md   # default home page (vault-discretionary)
    - <vault>/how/skills/skill_obsidian_canonicalize.md           # cross-skill dependency (HARD; T6 O4 delegates)
  permissions:
    - read vault .obsidian/* recursively
    - read vault home page (HOME.md OR README.md OR CLAUDE.md)
    - invoke ./how/skills/skill_obsidian_canonicalize.md --verify as subprocess (O4 delegation)
    - read-only (zero filesystem mutations under target vault)
---
```

**Invocation contract**:

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--vault <path>` | CLI | No | Vault containing this skill |
| `--profile <profile>` | CLI | No | `default` |
| `--verbose` | CLI flag | No | false (verbose prints delegation + per-check details) |
| `--report-only` | CLI flag | No | false (alias; explicit no-op since skill is read-only — included for symmetry with `skill_obsidian_canonicalize.md`) |

**Check matrix (vault-agnostic O1-O7 generalized from M-LWX-03 Obj 2)**:

| # | Generalized check | Source from M-LWX-03 | Vault-agnostic shape |
|---|---|---|---|
| O1 | **Vault opens in Obsidian cleanly** | "Obsidian opens `node.aDNA/` cleanly; HOME.md visible as default" | `<vault>/.obsidian/` exists + readable; `<vault>/.obsidian/app.json` is valid JSON; vault path is registered in `~/Library/Application Support/obsidian/obsidian.json` (macOS) OR `~/.config/obsidian/obsidian.json` (Linux) OR `%APPDATA%\obsidian\obsidian.json` (Windows). FAIL hint: "Open Obsidian → File → Open Vault → select this folder once to register." |
| O2 | **Default home page renders** | "HOME.md visible in preview mode as the default open file" | If `<vault>/HOME.md` exists, that's the home page; else `<vault>/README.md`; else `<vault>/CLAUDE.md`. Home page must be present + valid markdown (frontmatter parses if present). Profile override: `default_home: "<filename>"` to pin a specific file. |
| O3 | **Structured content tables enumerate correctly** | "21 .aDNA vaults + 11 named projects + 3 drift entries — all present" | Profile-driven: if profile names `home_page_table_assertions: [{section: "Vaults", row_count_source: "inventory_vaults.yaml#/vaults"}, ...]`, the skill parses the home page + YAML source + verifies row count matches. Default profile has no assertions (PASS-with-warning). Per-vault profiles can add assertions (e.g., node.aDNA profile asserts `21 + 11 + 3` rows). |
| O4 | **Plugin binary-presence** (DELEGATE) | "16 enabled in JSON, 0 installed → setup.sh --force fix" | **DELEGATE** to `<vault>/how/skills/skill_obsidian_canonicalize.md --verify` (subprocess invocation; consume exit code 0 = pass, 1 = mismatch, 2 = preflight fail). Pass-through summary line "Enabled / Installed / Missing" included in T6 output. If M3.2 skill is absent at target vault, T6 reports O4 as `SKIP_WITH_HINT` (suggests installing the M3.2 skill via cross-vault fork OR invoking T6 from a vault that has it). |
| O5 | **Cross-vault markdown links resolve** | "Click `[CanvasForge.aDNA](../CanvasForge.aDNA/)` → opens file manager → Open with Obsidian" | Grep home page for relative markdown links (`](../<name>)` or `](../<name>/)`); for each link, verify target directory exists at the resolved relative path. Does NOT actually launch Obsidian for each link (read-only); operator can spot-check manually per the prose-only validation pattern. |
| O6 | **External links accessible** | "Marketplace link clickable → browser opens" | Grep home page for `https://...` or `http://...` URLs. For each, perform a HEAD request with 5s timeout (curl) AND record HTTP status. PASS = 2xx or 3xx; WARN = 4xx (link reachable but error response — e.g., 404 placeholder is expected for not-yet-ready marketplace); FAIL = 5xx or timeout. Profile override: `external_link_policy: "skip" \| "warn_only" \| "fail_on_4xx"` (default `warn_only`). |
| O7 | **Theme + accent applied** | "Tokyo Night theme + Rebecca Purple accent visible on Obsidian launch" | Parse `<vault>/.obsidian/appearance.json` for `cssTheme` (default expected: `Tokyo Night`) and `accentColor` (default expected: `#663399` — Rebecca Purple per OBSIDIAN_CLAUDE.md baseline). Profile override: `theme_policy: {theme: "<name>", accent: "<hex>"}` to pin different values for vaults that intentionally diverge. |

**Per-profile customization shape**:

```json
{
  "profile_name": "<descriptive_name>",
  "skip_checks": ["O3", "O6"],
  "add_checks": [
    {
      "id": "O8",
      "description": "Bases gallery renders without error",
      "type": "manual_visual_check",
      "operator_instruction": "Open HOME.md in preview mode; verify the `BASES` block enumerates expected entries."
    }
  ],
  "default_home": "HOME.md",
  "home_page_table_assertions": [
    {"section": "Vaults", "row_count_source": "what/inventory/inventory_vaults.yaml#/vaults"}
  ],
  "external_link_policy": "warn_only",
  "theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}
}
```

**Output format**:

```
=== Obsidian integration test ===
Target vault: /Users/stanley/aDNA/<vault>.aDNA/
Profile: default (built-in)
Cross-skill delegations: skill_obsidian_canonicalize.md --verify (O4)

Per-check results:
  O1  Vault registered in Obsidian + .obsidian/ valid         PASS
  O2  Home page present (HOME.md)                              PASS
  O3  Structured content tables                                PASS (0 assertions in default profile)
  O4  Plugin binary-presence (DELEGATE → canonicalize --verify) PASS  Enabled: 15 / Installed: 15 / Missing: 0
  O5  Cross-vault markdown links                               PASS (4 links checked)
  O6  External links                                            WARN  (1 link 404; marketplace.lattice-protocol.com placeholder)
  O7  Theme + accent                                            PASS (Tokyo Night + #663399 Rebecca Purple)

Integration test: 7/7 PASS (1 WARN — non-fatal per warn_only policy)
Exit 0.
```

**Exit codes**:

- 0 = all checks PASS (WARN is non-fatal per default `warn_only` policy)
- 1 = at least one FAIL (or WARN if profile sets `external_link_policy: "fail_on_4xx"`)
- 2 = preflight failure (target vault not found; `--vault` path invalid; cross-skill dependency missing if O4 not SKIPped)

**Cross-skill delegation contract (O4)**:

```bash
# Inside T6 skill, O4 check:
if [ -f "$VAULT_DIR/how/skills/skill_obsidian_canonicalize.md" ]; then
    bash "$VAULT_DIR/how/skills/skill_obsidian_canonicalize.md" --verify --vault "$VAULT_DIR"
    delegate_exit=$?
    # Pass-through summary + map exit code
    if [ "$delegate_exit" -eq 0 ]; then
        report "O4" "PASS" "Plugin binary-presence (DELEGATE → canonicalize --verify)"
    elif [ "$delegate_exit" -eq 1 ]; then
        report "O4" "FAIL" "Plugin binary-presence MISMATCH (DELEGATE → canonicalize --verify exit 1)"
    else
        report "O4" "PREFLIGHT_FAIL" "DELEGATE preflight failed (exit $delegate_exit; see canonicalize --verify output)"
    fi
else
    report "O4" "SKIP_WITH_HINT" "skill_obsidian_canonicalize.md not present at $VAULT_DIR/how/skills/; install M3.2 skill OR invoke T6 from a vault that has it"
fi
```

**`## Forward integration with T8 (M3.4)`** stub section in the new skill:

> Forward integration with T8 (M3.4) — DEFERRED STUB
>
> T8 (per the absorbed `campaign_obsidian_deployment_stabilization` Track 8 + the M3.3 mission's forward dependency on M3.4) brings two agent-driven inspection capabilities to the Obsidian surface: **Local REST API** (via `obsidian-local-rest-api`, coddingtonbear/obsidian-local-rest-api, MIT) and **MCP** (community Obsidian MCP servers, e.g., `MarkusPfundstein/mcp-obsidian`). When T8 wires both, several T6 checks become eligible for agent-driven invocation rather than operator-side visual confirmation:
>
> - **O1 (vault opens cleanly)** — agent can query the Local REST API to confirm the vault is registered + responsive; eliminates the operator-must-launch-Obsidian step
> - **O2 + O3 (home page renders + tables enumerate)** — agent can fetch HOME.md content via Local REST API; verify rendered markdown structure; eliminates operator visual inspection
> - **O5 (cross-vault links)** — agent can resolve links via API; spot-check by API call rather than manual operator click
> - **O7 (theme + accent)** — agent can query `appearance.json` via API; same as today's direct file read but with the runtime confirmation that Obsidian is loading what's on disk
>
> **What T8 does NOT change for T6**: O4 (binary-presence DELEGATE → canonicalize --verify) stays delegation-based (T3 primitive + M3.2 skill's `--verify` mode are the right architecture; no API benefit). O6 (external links HEAD-check) stays curl-based (network call doesn't benefit from Obsidian API).
>
> **Profile flag (forecast)**: T6 may gain `mode: "operator_side" | "agent_driven" | "hybrid"` profile field at M3.4 when T8 wiring lands. `operator_side` (today's default) = current behavior; `agent_driven` = agent fetches via Local REST API + MCP; `hybrid` = agent runs what it can, operator runs the visual checks. The profile field is forecast-scoped; M3.3 ships only `operator_side` semantics.

**Cross-references (≥ 2 prior skills + 2 design specs per Project SO #10)**:

- [[../../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — closest pre-existing primitive (health-check pattern); T6 is its Obsidian-surface sibling
- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 deliverable; T6 O4 DELEGATES to its `--verify` mode (cross-skill primitive composition)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m33_obj4_t6_design_spec.md|T6 design spec]] — this spec; ratifies skill's design + delegation
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m33_obj3_t5_design_spec.md|T5 design spec]] — sibling at same mission; T5 prevents first-open hazards, T6 verifies post-first-open integrity
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — substrate (`setup.sh --verify` primitive that flows through M3.2 skill into T6 O4)

### Patch B — OPTIONAL `.adna/setup.sh` `--test` mode hook (v8 P6 candidate; DEFERRED at M3.3)

Adds a thin delegation in `.adna/setup.sh` that forwards `./setup.sh --test` to the T6 skill. Provides operator-facing parity with `--verify` (already in M3.2 T3 spec) and `--reset-layout` (M3.1 T2 spec).

```diff
@@ -14,11 +14,22 @@ OBSIDIAN_DIR="$VAULT_DIR/.obsidian"

 FORCE=0
 VERIFY=0
 RESET_LAYOUT=0
+TEST=0
 for arg in "$@"; do
     case "$arg" in
         --force)        FORCE=1 ;;
         --verify)       VERIFY=1 ;;
         --reset-layout) RESET_LAYOUT=1 ;;
+        --test)         TEST=1 ;;
-        --help|-h)      echo "Usage: ./setup.sh [--force] [--verify] [--reset-layout]"; exit 0 ;;
+        --help|-h)      echo "Usage: ./setup.sh [--force] [--verify] [--reset-layout] [--test]"; exit 0 ;;
         *)              echo "Unknown flag: $arg (see ./setup.sh --help)"; exit 1 ;;
     esac
 done
```

```diff
@@ -??? +??? — insert after --verify code block (post-T3 landing); before main install loop

+# --- Test mode (delegates to skill_obsidian_integration_test; v8 P6 hook for T6 per M3.3) ---
+
+if [ "$TEST" -eq 1 ]; then
+    SKILL_PATH="$VAULT_DIR/how/skills/skill_obsidian_integration_test.md"
+    if [ ! -f "$SKILL_PATH" ]; then
+        echo "FAIL: skill_obsidian_integration_test.md not found at $SKILL_PATH"
+        echo "Hint: this skill ships from aDNA.aDNA at v8 P6 upstream promotion; if M3.3 T6 skill"
+        echo "      has not been promoted to .adna/ yet, invoke it directly from aDNA.aDNA:"
+        echo "        ~/aDNA/aDNA.aDNA/how/skills/skill_obsidian_integration_test.md --vault $VAULT_DIR"
+        exit 2
+    fi
+    bash "$SKILL_PATH" --vault "$VAULT_DIR" --profile "${PROFILE:-default}"
+    exit $?
+fi
```

**Behavior notes**:
- Pure delegation; setup.sh contains zero T6 logic.
- Requires the T6 skill to be co-resident at `<vault>/how/skills/` — either via direct fork (T6 skill shipped in `.adna/how/skills/` at v8 P6 promotion; then `cp -r .adna/` propagates) OR via cross-vault invocation from `aDNA.aDNA/how/skills/`.
- `PROFILE` env var support for operators to pin a non-default profile via `PROFILE=node-canonical ./setup.sh --test`.
- v8 P6 candidate — NOT required for M3.3 close. Operator decides at P6 entry whether to land the `--test` hook OR keep the skill as direct-invocation-only.

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T6's two propagation candidates: (a) **T6 skill upstream-promotion** (`aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` → `.adna/how/skills/skill_obsidian_integration_test.md`) so fresh forks inherit it via `cp -r .adna/`; (b) **OPTIONAL setup.sh `--test` mode hook** (Patch B above) — operator decides whether to add the thin delegation. Both are part of the post-M3.3-close queue growth (10-11 → 12-14 per campaign master). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §4 acceptance smoke test scenarios A-F against the current `.adna/` HEAD at P6 entry. Skill body was authored against `aDNA.aDNA/how/skills/`; v8 P6 promotion to `.adna/how/skills/` requires re-running cross-vault smoke (Scenarios A + B + D) to confirm `--vault` slot resolves correctly from the new location. Setup.sh `--test` Patch B was authored assuming T3 `--verify` arm has landed (composition with existing arg parser); if T3 has landed, Patch B context lines are correct; if T3 has NOT landed at P6 entry, Patch B needs the full arg parser context refresh. | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches `upstream_state_at_authoring` frontmatter OR refresh memo in `missions/artifacts/` |
| **P6 commit decision: bundle vs. separate** | Choose: **(a)** single commit "T6 integration-test skill + setup.sh --test hook (T6 per M3.3; F-Obj2-1 + F-Obj2-3)" combining the skill promotion + Patch B; **(b)** separate commits — one for skill promotion, one for setup.sh hook (preserves independence — operator may want to land only the skill, deferring the hook to later); **(c)** bundle with T5's two patches as a single "M3.3 Obsidian first-open + integration-test landing" commit covering all 4 patches across T5+T6. **Default**: option (b) per-component — preserves T6 skill's identity as a vault-agnostic primitive distinct from setup.sh hook lifecycle. | Operator decision at P6 entry; Rosetta drafts commit messages | Commit message names T6 + F-Obj2-1 + F-Obj2-3 + cites this spec path |
| **P6 commit** | Apply skill promotion (cp `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` → `.adna/how/skills/skill_obsidian_integration_test.md`) + optionally Patch B. Commit message template: `v7.x: add skill_obsidian_integration_test.md (vault-agnostic O1-O7 + cross-skill delegation to canonicalize --verify) + optional setup.sh --test mode hook (T6 per M3.3; F-Obj2-1 + F-Obj2-3; Nth instance of single-commit additive-upstream pattern)` where N is determined at bundle-vs-separate decision. **T6 IS an instance candidate** (NEW skill file addition = additive-upstream class; counts alongside T1+T3+T4 as instance count growth at P6 entry). | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§4) passes |
| **P6 post-commit smoke** | Run §4 acceptance smoke test scenarios A-F on a fresh fork created via the updated `skill_project_fork.md`. Confirm T6 skill is present at `<new-fork>/how/skills/skill_obsidian_integration_test.md` and resolves the cross-skill dependency (M3.2 skill must also be co-resident — if M3.2 skill is not yet upstream-promoted, T6 O4 reports SKIP_WITH_HINT). | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-F |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T6 skill; partner forks made between v7.0 and v7.x can opt-in by running `./how/skills/skill_obsidian_integration_test.md --vault . --profile default` against their existing vault (read-only; no destructive migration). Cross-vault validation campaigns (e.g., `campaign_validation_node_adna_lwx_outputs`) consume T6 skill at next dispatch as the standard integration-test surface. | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 (existing setup.sh modes continue unchanged; new `--test` mode is additive); fresh forks gain T6 skill at `how/skills/`; F-Obj2-1 + F-Obj2-3 closed at the skill layer; the validation-as-dispatched-campaign pattern (`campaign_validation_node_adna_lwx_outputs`) gains a reusable test surface.

**P6 rollback path**: if smoke test fails, revert via `git revert`. Skill removal: restore `.adna/how/skills/` to pre-T6 state (the skill stays at `aDNA.aDNA/how/skills/` as the v8 P6 source-of-truth; rollback removes only the `.adna/` propagated copy). Setup.sh `--test` hook removal: revert Patch B; existing `--force` + `--verify` + `--reset-layout` modes continue unchanged.

## Cross-references

- [[../mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests.md|M3.3 mission spec]] — parent mission (Objective 4)
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T6 track substrate (line 60-62)
- [[../../../campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|M-LWX-03 Obj 2 results]] — O1-O7 source (F-Obj2-1 + F-Obj2-3 origin)
- [[../../../campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_03_integration_test_and_closeout.md|M-LWX-03 AAR]] — load-bearing rationale (URL-scheme + verification-handoff topology)
- [[m33_obj3_t5_design_spec.md|T5 design spec]] — sibling at this mission (T5 prevents first-open hazards; T6 verifies post-first-open integrity; paired narrative)
- [[m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — substrate (`setup.sh --verify` primitive that flows through M3.2 skill into T6 O4)
- [[m32_obj4_t4_design_spec.md|M3.2 T4 design spec]] — sibling (T4 ships canonical workspace.default.json + NN data.json triad-color hex; T6 O7 verifies the resulting theme+accent)
- [[m31_obj3_t1_design_spec.md|M3.1 T1 design spec]] — preserves setup.sh in fork (precondition for `--test` hook Patch B to function in forked vaults)
- [[../../../../how/skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 Obj 5 deliverable; T6 O4 DELEGATES to its `--verify` mode (cross-skill primitive composition)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — token budget two-metric + Heavy-File Read Convention
- [[../../../campaign_lattice_workspace_ux/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md|LWX cross-graph findings memo]] — F-Obj2-1 + F-Obj2-3 routing context

## Prior-instance + bundle citation (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1-4 | (additive-upstream instances 1-4 — ADR-008 + e3b3bcc + 8673383 + 202c9ec) | ratified pre-M3.x | Single-commit additive-upstream lineage | M03 + M04 + M-LWX-01 + M-LWX-03 |
| 5 | T1 — preserve setup.sh in skill_project_fork.md | v8 P6 candidate (M3.1 T1 design spec) | Single line removal + comment update | M3.1 |
| 6 | T3 — `setup.sh --verify` mode + health-check + fork-time gate | v8 P6 candidate (M3.2 T3 design spec) | 3-file additive | M3.2 |
| 7 | T4 — `skill_obsidian_canonicalize.md` orchestrator + setup.sh `--reset-layout` + NN data.json shipping + .obsidianignore extension | v8 P6 candidate (M3.2 T4 design spec — bundled F-S2-5/6/7) | Combined 4-file additive | M3.2 |
| **8 (or bundled w/ T1+T3+T4)** | **T6 — `skill_obsidian_integration_test.md` (vault-agnostic O1-O7 + per-vault profile + cross-skill delegation to canonicalize --verify) + optional setup.sh --test hook** | **v8 P6 candidate (this spec)** | **NEW skill file (+ optional setup.sh delegation arm)** | **M3.3 (this mission)** |

**Note on instance counting**: T6 IS an instance candidate of the single-commit additive-upstream pattern (NEW skill file addition; counts alongside T1+T3+T4). T5 is NOT an instance (pure-prose doc-into-existing-skill). The instance counter post-T5+T6 lands depends on v8 P6 bundle decisions: if T5+T6+T1+T3+T4 land as 5 separate commits, T6 is the 8th instance; if bundled, the counter may land lower. Standing Order #5 (absorbed-campaign) lineage applies — operator decides at P6 entry.

## Notes

- **Patch A is the load-bearing change.** Patch B is optional; rejection at P6 has no impact on the skill's invocation surface (operators just call the skill directly from `aDNA.aDNA/how/skills/` or the upstream-promoted `.adna/how/skills/`).
- **Cross-skill delegation is the load-bearing architectural primitive** of M3.3. T6 O4 invokes M3.2 skill's `--verify` mode; M3.2 skill's `--verify` mode invokes T3 `setup.sh --verify` primitive; T3 reads `community-plugins.json` ∩ `.obsidian/plugins/<id>/main.js`. The chain is: **T6 skill → M3.2 skill → T3 setup.sh → Obsidian state**. Each layer adds scope; no layer reimplements another's primitive. This is the cross-skill primitive composition discipline that the M3.x cohort establishes for M3.4+ and beyond.
- **Per-vault profile is the bridge from generalization to reality.** Default profile = M-LWX-03's O1-O7 verbatim; per-vault profiles add/skip checks. The profile schema is itself extensible (operators can introduce `add_checks` entries with custom logic); future profiles may add `mode: "agent_driven"` when T8 wires Local REST API + MCP.
- **T8 forward-reference stub** is intentionally narrative (≥ 1 paragraph) and **not implementation**. The stub commits to the architectural shape (Local REST API + MCP touch points; per-check eligibility for agent-driven invocation) without front-running M3.4's decision-making.
- **Dual-audience note**: a newcomer reading the spec finds Option 1 explained in plain language ("delegate to existing skill so we don't duplicate logic") + the smoke-test scenarios A-F as concrete commands. A developer reads the §5 skill body summary + the `--profile` schema + the §6 propagation contract for the v8 P6 cycle. Both audiences land on the same skill invocation surface.
- **Self-reference (Standing Order #8 — 15th tactical invocation candidate in v8, jointly with T5)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The deliverable skill at Obj 5 IS the 2nd behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability. Combined with M3.2's first behavioral test (`skill_obsidian_canonicalize.md` 2026-05-21), the M3.x cohort produces the first empirical signal on whether new-skill drops surface to fresh-agent invocations via the hardened routing layer. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **`skill_design_spec_authoring.md` graduation** advances from 5 (with T5 at this same mission) to 6 (this spec) of 3+ use instances. Graduation already ratified at M3.2 close; T5+T6 add post-ratification reinforcement.
- **Validation-as-dispatched-campaign pattern reinforcement**: T6 skill is the natural test surface that `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier + Carly + Herb) and any successor cross-vault validation campaign consumes. The skill replaces ad-hoc per-mission validation prose with a single reusable invocation.
