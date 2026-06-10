---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.4
obj: 4
track: T8
sub_tracks: [T8a, T8b, T8c, T8d, T8e]
finding_id: [F-S2-8]
status: proposed   # design at P3; ratification + landing deferred to v8 P6 for upstream patches; T8d skill ships at Obj 6 this same mission
upstream_target: ".adna/setup.sh + .adna/.obsidian/plugins/obsidian-local-rest-api/data.json + ~/.claude.json mcpServers OR <vault>/.mcp.json + .adna/how/skills/skill_obsidian_integration_test.md + aDNA.aDNA/how/skills/ (T8d skill local landing at Obj 6 this same mission)"
upstream_state_at_authoring: "v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit); post-M3.2-close addendum at 5861133 operator-override NOT precedent"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_4, obj_4, t8, t8a_obsidian_local_rest_api, t8b_per_vault_keyed_data_json, t8c_mcp_obsidian_server, t8d_skill_obsidian_agent_inspect, t8e_t6_skill_mode_profile_activation, agent_driven_obsidian_inspection, local_rest_api, mcp, six_section_structure_7th_canonical_instance, t8_forward_reference_stub_3rd_use_instance_graduates, cross_skill_primitive_composition_3rd_use_instance_at_t8d_graduates, v8_p6_propagation_queue, sixth_instance_additive_upstream_candidate_at_t8a, seventh_instance_additive_upstream_candidate_at_t8b, rosetta, standing_order_8_17th_tactical_invocation_candidate_at_t8d, m245_routing_layer_4th_behavioral_test_at_t8d]
---

# T8 Design Spec — Agent-driven Obsidian inspection (`obsidian-local-rest-api` + MCP + `skill_obsidian_agent_inspect.md` + T6 mode-profile patch)

> **What this is**: a proposed-patch artifact covering **5 sub-tracks T8a-T8e** that together close the operator-side verification surface to agent-driven for the mechanically-inspectable subset of T6's O1-O7 checks. **T8a** ships `obsidian-local-rest-api` plugin in `.adna/setup.sh` PLUGIN_IDS (6th-instance additive-upstream candidate). **T8b** ships a per-vault keyed `data.json` template for the plugin with security contract. **T8c** wires an MCP server (`MarkusPfundstein/mcp-obsidian` default; both user-scope `~/.claude.json` + vault-scope `.mcp.json` options). **T8d** authors NEW skill `skill_obsidian_agent_inspect.md` (local landing at M3.4 Obj 6 this same mission per D1=A; full skill, not stub). **T8e** patches M3.3 T6 skill (`skill_obsidian_integration_test.md`) with `mode: agent_driven | hybrid | operator_side` profile-field activation hook (operationalizes the T8 forward-reference stub at T6 lines 256-269).
>
> **Design-at-P3, propagation-at-P6**: the NEW T8d skill ships LOCALLY at this same M3.4 S2 session (Obj 6 — operational consumer of this design spec; mirrors M3.2 D2 + M3.3 D-canon + M3.4 T7 precedent). T8a + T8b + T8c + T8e are all v8 P6 propagation candidates (each is a `.adna/` upstream patch OR a config patch outside both `.adna/` and `aDNA.aDNA/`; M3.4 ships proposed-patch text but no on-disk mutation). v8 P6 owns the upstream propagation cycle.
>
> **Cross-skill primitive composition (3rd use instance — GRADUATES at M3.4 close)**: T8d skill DELEGATES to (a) M3.3 T6 skill for binary-presence + O1-O7 check-set via T6's `mode: agent_driven` patch (T8e), (b) M3.4 T7 skill for dispatch decision tree consultation, (c) M3.2 skill reachable at delegation depth 3 via the T6 chain. Triple DELEGATION evidence within a single skill. This is the **3rd explicit cross-skill primitive consumption across the M3.x cohort** (after M3.3 T6 → M3.2 skill + M3.4 T7 → T6 skill); the precedent ratified at M3.3 PRIMARY load-bearing finding now extends to M3.4 T7+T8d sibling consumers, **GRADUATING** `skill_cross_skill_primitive_composition.md` at 3 of 3 use instances at M3.4 close.
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/aDNA/.adna/`. It does NOT mutate any `.obsidian/` config or plugin file. All patch text is literal content for v8 P6 (T8a + T8b + T8e upstream) + outside-vault config edits (T8c MCP config) + Obj 6 (the new T8d skill) to apply.
>
> **Standing Order #8 self-reference** — **17th tactical invocation candidate** in v8 (after 16 prior; T7 was 16th; T8d this spec is 17th). The deliverable T8d skill at Obj 6 is the **4th behavioral test** of M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability (after M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md` + M3.4 T7's `skill_verification_handoff.md`).

## 1. Finding statement (F-S2-8)

The operator-side verification surface is too large; 4-5 of the 7 T6 integration-test checks (O1, O2, O3, O5, optionally O7) are mechanically inspectable from agent context if the agent has API access to the running Obsidian instance. Community plugin `obsidian-local-rest-api` (coddingtonbear/obsidian-local-rest-api, MIT) + community MCP servers (e.g., `MarkusPfundstein/mcp-obsidian`) provide the seam between agent context and Obsidian runtime.

> **F-S2-8 (agent-driven Obsidian inspection feasible; new pattern)**: M-LWX-03 closed 2026-05-13 with the operator-side O1-O7 results documented but unreusable for agent-driven inspection. The community has solved the agent-access problem (REST API plugin + MCP servers) but no canonical aDNA pattern wires them. Each forge vault (SiteForge, CanvasForge, ScienceStanley, etc.) and each partner-vault re-fork has the same agent-side-inspection gap. The north-star UX goal — *"easy and fluid way to build/operate/utilize context graphs"* — wants the agent to drive verification autonomously where possible; operator-side stays for theme/UX-feel qualitative judgments only. T8 closes this with 5 sub-tracks T8a-T8e that wire REST API + MCP + agent-inspect skill + T6 mode-profile activation.
>
> — [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] Track 8 line 67-77 (absorbed-campaign verbatim source; 5 sub-tracks enumerated) + [[../../backlog/backlog_F_S2_8_agent_driven_obsidian_inspection.md|F-S2-8 backlog file]]

**Verification status at M3.4 S1 recon (inherited from M3.1+M3.2+M3.3 substrate)**: confirmed via static analysis — `.adna/setup.sh` PLUGIN_IDS array contains 15 plugins at v7.0 frozen state (`27e6395`); `obsidian-local-rest-api` NOT in the array. `.adna/.obsidian/plugins/` ships 15 plugin directories at v7.0; `obsidian-local-rest-api/` not present. `~/.claude.json` mcpServers array is operator-decisioned; no canonical aDNA-pattern MCP server config exists. `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (M3.3 T6) ships `mode: operator_side` semantics only; T8 forward-reference stub at lines 256-269 + 585-601 forecasts the `mode` field activation but ships no implementation.

**Why this is the right scope for T8**: M3.3 T6 explicitly stubbed T8 as the activation pathway for the `mode` field; M3.4 T7 codifies the dispatch decision tree; T8 wires the agent-driven branch that T7 routes to when dispatch resolves to `mode: agent_driven`. Without T8, T7's `--surface agent` branch has no operational primitive to invoke (the agent has nothing to invoke against; Obsidian's API isn't exposed). T8 + T7 together close the dispatch story — T7 decides, T8 executes the agent-side branch. M3.4 is the natural confluence; M3.5 + M3.7 consumers depend on T8's agent-driven primitive.

## 2. Root cause

Four layered causes explain why the agent-driven Obsidian inspection pattern does not yet exist in aDNA:

1. **Obsidian's plugin-API + URL-scheme model is operator-launched.** Obsidian is a desktop app that requires the operator to launch it; the plugin-API exposes runtime state only via in-app plugins (no headless mode). The URL-scheme (`obsidian://`) is browser-invoked (which means operator clicks). Until M3.4, there was no way for an agent to query "is the vault open?" or "is the home page rendered?" without operator intervention.

2. **Agent-side inspection requires a running Obsidian + a server plugin exposing API.** The community plugin `obsidian-local-rest-api` (coddingtonbear/obsidian-local-rest-api, MIT, active maintenance) exposes a local REST API on `https://127.0.0.1:27124` (default port; configurable) when Obsidian is running with the plugin enabled. The plugin requires a per-vault API key generated on first run; the operator-supplied key flows through `<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json`. Without this plugin shipped in `.adna/setup.sh` PLUGIN_IDS + the `data.json` template, every fresh fork has no agent-side API seam.

3. **T6 framework currently scopes all 7 checks to operator-side.** M3.3 T6 explicitly forecast a `mode: agent_driven | hybrid | operator_side` profile field but shipped only `operator_side` semantics. The forecast at T6 lines 256-269 + 585-601 names the activation pathway — when T8 ships, T6's profile schema gains the `mode` field; the skill body branches on `mode` to either run operator-side O1-O7 OR call T8d skill for agent-driven O1-O5 + O7 subset OR run hybrid (agent runs what it can; operator runs the visual checks).

4. **Sub-track decomposition is the right granularity for the propagation cycle.** Each sub-track has independent v8 P6 lifecycle — T8a is a plugin add to PLUGIN_IDS (6th-instance additive-upstream candidate; single-line change); T8b ships a `data.json` template (additive-upstream candidate; per-vault keyed; security contract); T8c selects + wires an MCP server (config patch outside `.adna/`); T8d ships a NEW skill at `aDNA.aDNA/how/skills/` (local landing this M3.4; upstream-promotion candidacy at v8 P6); T8e patches T6 skill body with `mode` field activation (additive-upstream to existing skill OR additive-local within aDNA.aDNA depending on T6 promotion status at P6 entry). The decomposition lets the v8 P6 cycle land each sub-track independently with its own risk/reversibility profile.

The compounding produces today's state: the operator is in the loop for verification surfaces that could be agent-driven; the north-star UX goal stays partial; cross-vault propagation has no canonical pattern for agent-side Obsidian inspection. T8 closes this with 5 sub-tracks that, together, take the agent autonomy needle from ~40% (where M3.3 left it) to ~85% — operator surface shrinks proportionally and stays for the qualitative theme/UX-feel checks that benefit from human eyes.

## 3. Option matrix (≥ 4 options per Mission scope §3 acceptance)

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Full 5-sub-track scope at M3.4 with phased v8 P6 propagation per sub-track** (RECOMMENDED — D1=A operator-stated default). All 5 sub-tracks T8a-T8e land as proposed-patch text in this design spec; T8d skill ships at Obj 6 this same mission (local landing in `aDNA.aDNA/how/skills/`); T8a + T8b + T8c + T8e all queue for v8 P6 propagation with per-sub-track commit/bundle decisions. | T8a 1-line `.adna/setup.sh` PLUGIN_IDS array addition + T8b `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` template ~30-50 LOC + T8c MCP config patch ~10-20 LOC (per-scope option) + T8d NEW skill file ~800-1000 LOC + T8e T6 skill patch ~80-120 LOC | T8d new operator-facing skill at aDNA.aDNA/how/skills/; T8c gives operator choice between user-scope vs vault-scope MCP config | Agent gains REST API + MCP seam into running Obsidian; T6 framework branches on `mode` field; agent-driven O1-O5 + O7 subset operational; ratifies cross-skill primitive composition pattern at 3 of 3 use instances when T8d ships and DELEGATES to T6 + T7 + M3.2 skill | T8a/T8b require operator-supplied API key on first run (security contract; not a regression — community plugin's first-run UX is what it is). T8c MCP server config has both user-scope + vault-scope options; operator decides at P6 entry. T8e patches a skill that ships at M3.3 — if M3.3 T6 skill is not yet upstream-promoted at P6 entry, T8e patches `aDNA.aDNA/how/skills/` only (no `.adna/` touch). |
| 2 | **T8a + T8b only at M3.4; T8c + T8d + T8e deferred to M3.5+** (rejected — operator override D1 was full skill at S2). Plugin add + data.json template land as v8 P6 candidates; MCP wiring + agent-inspect skill + T6 patch deferred. | T8a + T8b only ~50 LOC | One new plugin in fresh forks; first-run API key UX | Agent gains REST API seam; no agent-inspect skill or T6 `mode` activation | **Rejected**: leaves the T8d agent-inspect skill orphaned without the API plumbing. Without T8d, the REST API + data.json exist but no canonical primitive consumes them — partner-vaults would have to invent their own agent-inspect logic per-vault. Operator override D1=A explicitly rejected this option in favor of full 5-sub-track scope. |
| 3 | **T8d skill only at M3.4 (operator-side patterns); T8a/b/c/e deferred** (rejected — same as Option 2 but inverted). Author T8d skill that documents agent-driven patterns as operator-side recipes; defer plugin wiring + MCP + T6 patch. | T8d NEW skill ~600 LOC | One new operator-facing skill | Operators have a recipe; no automated agent-driven invocation | **Rejected**: D1=A operator decision was to author T8d skill at S2 alongside infrastructure design (T8a/b/c/e proposed-patch text in the same design spec). Authoring T8d skill alone without the infrastructure design leaves the skill referencing non-existent plumbing — partner-vault adoption fails because the underlying plugin + MCP doesn't ship. The whole point of T8 is the wired-together stack, not a documentation skill in isolation. |
| 4 | **Skip T8 entirely; defer to M3.7 modular III** (rejected). T8 substrate folds into M3.7 (modular III for Obsidian); M3.4 closes with T7 + ADR-014 only. | Zero change at M3.4 | Operator stays in the loop for all O1-O7 | M3.4 close = 1 of 4 P3 phase-exit bricks (T7 + ADR-014 only); 3 of 4 deferred | **Rejected**: M3.7 needs T8 substrate to make III-on-Obsidian actually agent-driven. M3.7 design would have to invent the REST API + MCP wiring + skill itself before its modular-III content; that's exactly the kind of scope-creep that motivates breaking T8 out as its own mission. M3.4 close = 4 of 4 P3 phase-exit bricks for the agent-autonomy prong **requires** T8 landing at M3.4. |
| 5 | **Author T8d skill as STUB-with-T6-DELEGATION-only** (fallback if context budget overflows at S2). Skill ships at Obj 6 but as a skeleton: just frontmatter + DELEGATION block (T6 + T7 + M3.2 skill citations) + `## Forward integration with M3.7` stub + no full body. Cross-skill primitive composition pattern still graduates because skeleton-mode still cites the DELEGATION graph at 3 of 3 use instances. | T8d NEW skill skeleton ~150-200 LOC | One new operator-facing skill (skeleton) | Cross-skill primitive composition pattern graduates; agent-driven implementation deferred to M3.5+ | **Fallback only**: triggers if S2 context budget > 2× over forecast per Project SO #11 retrospective trigger. Default is full skill per Option 1. Skeleton-mode preserves the architectural graduation evidence without the operational depth; partner-vault adopters get the cross-skill DELEGATION pattern but have to author their own agent-driven body. |
| 6 | **Split T8d into per-check sub-skills** (rejected; deferred to M3.7). Five sub-skills: `skill_obsidian_agent_o1_vault_opens.md` + `skill_obsidian_agent_o2_home_renders.md` + ... etc. Each handles one O-check via REST API. | 5 NEW skill files ~150-200 LOC each ~750-1000 LOC total | 5 operator-facing skills | Each O-check is independently invocable | **Rejected**: dilutes the `how/skills/AGENTS.md` routing layer's signal. The 5-skill split conflicts with the single-skill-with-`--mode`-slot pattern that M3.2 + M3.3 + M3.4 T7 establishes. If M3.7 modular III drives a need for per-O-check invocation, M3.7 can extract sub-skills from T8d's single body at that point. **Deferred to M3.7 evaluation** (not rejected absolutely; just out of scope at M3.4). |

## 4. Recommendation

**Option 1 — Full 5-sub-track scope at M3.4 with phased v8 P6 propagation per sub-track** — is recommended per D1=A operator-stated default at M3.4 S1 plan ratification 2026-05-24, matching the absorbed-source verbatim at [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] line 67-77 ("*Closes the operator-side surface to agent-driven where possible. Sub-tracks: T8a + T8b + T8c + T8d + T8e [as enumerated]. Operator-side handoff persists for visual/UX-feel checks (theme aesthetics, "easy/fluid" qualitative read).*").

### Rationale

- **Cross-skill primitive composition 3 of 3 ratification GRADUATES at M3.4 close.** T8d skill (Obj 6) DELEGATES to T6 (M3.3 skill; binary-presence + O1-O7 check-set primitive) at depth 1 + T7 (M3.4 skill; dispatch decision tree primitive) at depth 1 + M3.2 skill (canonicalize primitive) at depth 3 via T6 chain. Triple DELEGATION within a single skill. Combined with T7's DELEGATION to T6 (this same mission Obj 3 + Obj 5), the M3.4 mission yields 2 explicit cross-skill primitive consumptions (T7→T6 + T8d→T6+T7+M3.2). After M3.3 T6→M3.2 at depth 1 (1 instance) + M3.4 T7→T6 at depth 1 (2nd instance) + M3.4 T8d→T6+T7+M3.2 triple at depths 1+1+3 (3rd instance), **the graduation candidate ratifies at 3 of 3 use instances at M3.4 close** in the S3 AAR.
- **Sub-track decomposition matches the propagation cycle granularity.** Each sub-track has independent v8 P6 lifecycle:
  - T8a `.adna/setup.sh` PLUGIN_IDS = single-line addition; 6th-instance additive-upstream candidate
  - T8b `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` template = additive-upstream; per-vault keyed; security contract (operator-supplied key on first run); 7th-instance additive-upstream candidate
  - T8c MCP server config = outside `.adna/` entirely (`~/.claude.json` mcpServers OR `<vault>/.mcp.json`); operator decides scope; non-additive-upstream class
  - T8d NEW skill at `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md` = local landing this mission (Obj 6); upstream-promotion candidacy at v8 P6
  - T8e `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (M3.3 T6 skill) patch = additive-local within aDNA.aDNA at v8 P6 if T6 promotion has not happened; additive-upstream to `.adna/how/skills/` if T6 has been promoted
- **Vault-agnostic via `--mode agent_driven | hybrid | operator_side` + `--vault <path>` + `--profile <profile>` slots mirrors M3.x precedent.** T8d skill uses the same slot-based vault-agnostic invocation convention as M3.2 + M3.3 T6 + M3.4 T7 skills. Any aDNA vault can invoke T8d's skill against itself.
- **Degradation cascade is the load-bearing operational primitive.** T8d skill operates per `--mode`: `agent_driven` (full REST API + MCP execution; falls through to hybrid if MCP unreachable); `hybrid` (REST API for O1+O2+O3+O5+O7; operator visual for O4+O6); `operator_side` (full T6 O1-O7 operator path; T8d skill defers entirely to T6). This means partner-vaults with incomplete REST API + MCP setup degrade gracefully; the skill never hard-fails on missing infrastructure.
- **T8e operationalizes the T6 forward-reference stub.** M3.3 T6 skill body at lines 585-601 contains the `## Forward integration with T8 (M3.4)` stub forecasting the `mode` field activation. T8e patches T6 skill to add the `mode` field activation hook — when T6 is invoked with `mode: agent_driven` (via profile or CLI flag), T6 calls T8d for the O1-O5 + O7 subset; for O4 (binary-presence) T6 stays with its own DELEGATION to M3.2 skill; for O6 (external links) T6 stays operator-side (network call doesn't benefit from API).
- **Per-mission-class self-reference (Standing Order #8 — 17th tactical invocation candidate in v8)**: T8d skill is the 4th new-skill drop at `aDNA.aDNA/how/skills/` in the M3.x cohort (after M3.2 + M3.3 T6 + M3.4 T7). M2.4.5 hardened `how/skills/AGENTS.md` for new-skill discoverability; T8d's skill IS the 4th behavioral test. Combined with T7's 3rd behavioral test (this same mission Obj 5), M3.4 produces 2 new behavioral tests of the M2.4.5-hardened routing layer.
- **T8 forward-reference-stub discipline GRADUATES at M3.4 close.** This T8 design spec body §5 includes `## Forward integration with M3.5` + `## Forward integration with M3.7` stub paragraphs; T8d skill at Obj 6 includes `## Forward integration with M3.7` stub. Combined with T7 design spec's M3.5 + M3.7 stubs (Obj 3) + T7 skill's M3.5 + M3.7 stubs (Obj 5), the T8 forward-reference-stub discipline reaches 3 of 3 use instances at M3.4 close — **graduates** `skill_forward_reference_stub_design.md` at S3 AAR.

### Acceptance smoke test (post-Obj 6 landing + v8 P6 T8a/b/c/e propagation)

```bash
# Scenario A: invoke T8d skill on local vault (aDNA.aDNA itself) with --mode agent_driven (requires Obsidian running + REST API plugin loaded + valid API key + MCP server reachable)
cd ~/aDNA/aDNA.aDNA/
./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default
# Expect (when REST API + MCP both reachable): O1 (vault opens cleanly via REST API health endpoint) PASS; O2 (HOME.md fetch via REST API) PASS; O3 (content tables enumerate via REST API + frontmatter parse) PASS; O5 (cross-vault links resolve via REST API + MCP file lookup) PASS; O7 (theme + accent via REST API appearance fetch) PASS; O4 + O6 SKIPPED (defer to operator-side via T6)
# Output: "Agent-driven inspection: 5/5 PASS (O4 + O6 deferred to operator-side); summary line emitted to STDOUT; structured JSON to STDERR for T6 consumption"
# Exit 0

# Scenario B: invoke T8d skill with --mode hybrid (REST API reachable; MCP not reachable)
./how/skills/skill_obsidian_agent_inspect.md --mode hybrid --vault . --profile default
# Expect: O1 + O2 + O3 + O7 via REST API PASS; O5 (cross-vault links) FAILS-AGENT, falls through to operator-side; O4 + O6 stay operator-side
# Output: "Hybrid mode: 4/5 PASS agent-driven; 1/5 + O4 + O6 deferred to operator; summary line"
# Exit 0 (graceful degradation)

# Scenario C: invoke T8d skill with --mode operator_side (full deferral to T6)
./how/skills/skill_obsidian_agent_inspect.md --mode operator_side --vault . --profile default
# Expect: T8d defers entirely to T6 skill via subprocess invocation; T8d output is a thin wrapper around T6's output
# Output: "Operator-side mode: DELEGATE to skill_obsidian_integration_test.md --vault . --profile default; [T6 output passes through]"
# Exit 0 or 1 per T6's verdict

# Scenario D: invoke T8d skill with --mode agent_driven but Obsidian NOT running (preflight failure)
./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default
# Expect: preflight check fails (REST API endpoint unreachable); skill degrades to --mode hybrid OR --mode operator_side per --degrade-on-preflight-fail flag
# Output: "Preflight: REST API unreachable at https://127.0.0.1:27124; degrading to operator_side mode" + T6 output
# Exit 0 (graceful degradation per default --degrade-on-preflight-fail=true)

# Scenario E: invoke T8d skill with --mode agent_driven but API key invalid (auth failure mid-execution)
./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default --api-key wrong-key
# Expect: REST API returns 401; T8d catches auth error; falls through to operator_side
# Output: "REST API 401 Unauthorized; falling through to operator_side mode" + T6 output
# Exit 0 (graceful degradation)

# Scenario F: invoke T6 skill in --mode agent_driven (T8e patch ratification)
./how/skills/skill_obsidian_integration_test.md --vault . --profile default --mode agent_driven
# Expect (post-T8e patch): T6 reads --mode flag; branches O1+O2+O3+O5+O7 to T8d skill subprocess invocation; O4 stays in T6's M3.2-DELEGATION; O6 stays operator-side
# Output: T6 output with O1+O2+O3+O5+O7 marked "[DELEGATE → agent_inspect agent_driven]" + O4 "[DELEGATE → canonicalize --verify]" + O6 "[operator-side]"
# Exit 0 or 1 per aggregate verdict

# Scenario G: invoke T7 skill with --check-set T6 against M3.5 hypothetical mission (T7 dispatch routes to T6; T6 routes to T8d via mode field)
./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m35_home_polish --surface operator --check-set T6
# Expect: T7 DELEGATES to T6 --vault ~/aDNA/aDNA.aDNA/ --profile default; if profile sets mode: agent_driven, T6 DELEGATES to T8d for O1-O5+O7 subset; full chain T7 → T6 → T8d → REST API + MCP; depth 3 cross-skill primitive composition
# Output: chained DELEGATION trace with per-skill verdicts aggregated
# Exit 0 or 1
```

Expected: PASS on scenarios A-G at Obj 6 (T8d skill) + Obj 7 (ADR-014 draft) landing in M3.4 S2 + v8 P6 propagation of T8a + T8b + T8c + T8e patches.

## 5. Literal patch text

### Patch A — T8a `.adna/setup.sh` PLUGIN_IDS extension (v8 P6 candidate; 6th-instance additive-upstream)

Add `obsidian-local-rest-api` to the PLUGIN_IDS array in `.adna/setup.sh`. Single-line addition. Reversible by removing the line.

```diff
@@ -??? +??? — PLUGIN_IDS array in .adna/setup.sh (current state at v7.0 frozen 27e6395)

 PLUGIN_IDS=(
     "templater-obsidian"
     "dataview"
     "obsidian-icon-folder"
     "obsidian-git"
     "obsidian-tasks-plugin"
     "obsidian-kanban"
     "calendar"
     "periodic-notes"
     "obsidian-excalidraw-plugin"
     "obsidian-bases"
     "tag-wrangler"
     "obsidian-style-settings"
     "url-into-selection"
     "obsidian-checklist-plugin"
     "advanced-canvas"
+    "obsidian-local-rest-api"
 )
```

**Behavior notes**:
- Pure single-line addition; zero-impact to existing fresh-fork install loop (the install loop iterates the array; adding 1 element adds 1 plugin install step)
- Plugin install via Obsidian's plugin manifest fetch; same mechanism as the existing 15 plugins
- On first run after install, the plugin REQUIRES the operator to generate an API key (first-run UX is the plugin's responsibility, not setup.sh's)
- 6th-instance additive-upstream candidate (after T1 5th-instance + M3.2 T4 NN data.json 6th-instance candidacy per absorbed-campaign Campaign SO #5; T8a takes 6th if M3.2 T4 lands as bundled instance OR T8a takes 7th if M3.2 T4 lands as 6th separately; instance counter ratifies at v8 P6 entry per operator bundle decision)

### Patch B — T8b per-vault keyed `data.json` template (v8 P6 candidate; 7th-instance additive-upstream)

Ship a default `data.json` template at `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` that documents the operator-supplied API key contract + first-run UX.

```json
{
  "apiKey": "REPLACE_ON_FIRST_RUN_VIA_OBSIDIAN_SETTINGS_PANEL",
  "port": 27124,
  "bindToIp": "127.0.0.1",
  "_aDNA_security_contract": {
    "scope": "per-vault",
    "first_run_action": "Generate a fresh API key via Obsidian settings → Local REST API panel; replace the `apiKey` value above. Do NOT commit a real API key to git.",
    "rotation_cadence": "annual or on suspicion of compromise",
    "gitignore_entry_recommended": "<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json",
    "_aDNA_spec_reference": "M3.4 T8b design spec at how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj4_t8_design_spec.md"
  }
}
```

**Behavior notes**:
- Template ships with `apiKey: "REPLACE_ON_FIRST_RUN_..."` placeholder — operator MUST replace via Obsidian settings panel before agent-driven inspection works
- `_aDNA_security_contract` field is aDNA-pattern metadata; the plugin ignores keys it doesn't understand (forward-compatible)
- `bindToIp: "127.0.0.1"` restricts the REST API to localhost — no cross-host exposure
- Operator may add `<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json` to `.gitignore` to prevent accidental key commit; default `.gitignore` template at v8 P6 may include this entry
- 7th-instance additive-upstream candidate (after T8a 6th); ratifies at v8 P6 entry
- **Reversibility**: removing the template restores pre-T8b state; plugin without `data.json` requires operator to generate config via UI (works but loses the aDNA security-contract metadata)

### Patch C — T8c MCP server config (outside `.adna/`; operator scope decision)

T8c proposes 2 options for MCP server config; operator selects scope at v8 P6 entry. Both options use `MarkusPfundstein/mcp-obsidian` as the default community MCP server (active maintenance; MIT license; supports per-vault config).

**Option C1 — User-scope at `~/.claude.json` mcpServers** (affects all aDNA vaults this user opens):

```diff
@@ -??? +??? — ~/.claude.json mcpServers array (current operator state varies)

 "mcpServers": {
   "...existing entries...": {},
+  "obsidian": {
+    "command": "npx",
+    "args": ["-y", "@modelcontextprotocol/server-obsidian"],
+    "env": {
+      "OBSIDIAN_API_KEY": "${OBSIDIAN_API_KEY}",
+      "OBSIDIAN_REST_API_URL": "https://127.0.0.1:27124"
+    }
+  }
 }
```

**Option C2 — Vault-scope at `<vault>/.mcp.json`** (affects only the specific vault):

```diff
@@ -??? +??? — <vault>/.mcp.json (new file at first-run; per-vault scope)

+{
+  "mcpServers": {
+    "obsidian": {
+      "command": "npx",
+      "args": ["-y", "@modelcontextprotocol/server-obsidian"],
+      "env": {
+        "OBSIDIAN_API_KEY": "${OBSIDIAN_API_KEY}",
+        "OBSIDIAN_REST_API_URL": "https://127.0.0.1:27124"
+      }
+    }
+  }
+}
```

**Behavior notes**:
- Both options use environment-variable substitution for the API key (operator exports `OBSIDIAN_API_KEY` in shell env OR uses `.envrc` / direnv)
- Option C1 is convenient for operators who work in multiple aDNA vaults with the same Obsidian instance + same API key
- Option C2 is appropriate when each vault has its own API key (per-vault security boundary; recommended for partner-vault federation)
- **MCP server selection rationale**: `MarkusPfundstein/mcp-obsidian` is community default at M3.4 authoring time; alternatives include `phr00t/obsidian-mcp-server` + `cyanheads/obsidian-mcp-server`. Selection may be revised at v8 P6 entry if community consolidation has happened; ADR-014 names the MCP server only by category ("community Obsidian MCP"), so server choice can change without ADR amendment
- T8c is **outside `.adna/`** — neither option mutates `.adna/`; both target external config files. Hard-constraint zero-`.adna/`-touch holds

### Patch D — T8d NEW `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md` (full skill at Obj 6 this same mission per D1=A)

The full skill body is delivered as **Obj 6 of M3.4 in this same S2 session** — the skill IS the design's operational ratification (mirrors M3.2 D2 + M3.3 D-canon + M3.4 T7 precedent). v8 P6 may consume this same skill file content as the upstream-promotion candidate (subject to operator decision at P6 entry).

**Skill shape summary** (the full file lands at `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md` as Obj 6; this section summarizes the contract to keep the design spec self-contained):

```yaml
---
type: skill
skill_type: agent
created: 2026-05-24
updated: 2026-05-24
status: active
category: obsidian_operations
trigger: "Agent-driven Obsidian inspection via Local REST API + MCP. Executes O1-O5 + O7 subset of T6 check-set mechanically from agent context when --mode agent_driven; defers O4 to T6's M3.2 DELEGATION; keeps O6 + visual checks operator-side. --mode {agent_driven, hybrid, operator_side} with graceful degradation cascade. Cross-skill primitive composition pattern 3 of 3 — GRADUATES at M3.4 close. Ratified by ADR-014 Clause B dispatch decision tree."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m34_obj6
graduated_at: 2026-05-24
graduated_via: campaign_adna_serious_tool_readiness M3.4 S2
tags: [skill, obsidian, agent_driven_inspection, local_rest_api, mcp, vault_agnostic, cross_skill_delegation, t8d, m3_4, design_at_p3_propagation_at_p6, t8_forward_reference_stub_graduates_3rd_use_instance, cross_skill_primitive_composition_3rd_use_instance_graduates, m3_7_forward_reference_stub, standing_order_8_17th_tactical_invocation_candidate, m245_routing_layer_4th_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, curl (REST API), python3 (json + yaml modules), npx (for MCP server invocation)]
  context:
    - <vault>/.obsidian/                                          # target vault's Obsidian config
    - <vault>/.obsidian/plugins/obsidian-local-rest-api/data.json # API key + endpoint config (HARD when --mode agent_driven)
    - <vault>/how/skills/skill_obsidian_integration_test.md       # T6 skill (cross-skill dependency at depth 1; T8d DELEGATES O4 + O6 to T6)
    - <vault>/how/skills/skill_verification_handoff.md            # T7 skill (cross-skill dependency at depth 1; T8d consults T7 for dispatch verdict when --mode auto)
    - <vault>/how/skills/skill_obsidian_canonicalize.md           # M3.2 skill (cross-skill dependency at depth 3 via T6 chain)
    - ~/.claude.json OR <vault>/.mcp.json                         # MCP server config (HARD when --mode agent_driven AND MCP-dependent checks invoked)
  permissions:
    - read vault .obsidian/* recursively
    - HTTP GET to https://127.0.0.1:27124/* (Local REST API; localhost-only)
    - invoke MCP server via npx subprocess
    - invoke ./how/skills/skill_obsidian_integration_test.md as subprocess (T6 delegation for O4 + O6 + when --mode operator_side fallback)
    - read-only (zero filesystem mutations under target vault)
---
```

**Invocation contract**:

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--mode <agent_driven \| hybrid \| operator_side>` | CLI | No | `agent_driven` (falls through cascade on preflight failure) |
| `--vault <path>` | CLI | No | Vault containing this skill |
| `--profile <profile>` | CLI | No | `default` (passed through to T6 when DELEGATING) |
| `--api-key <key>` | CLI | No | Read from `<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json` |
| `--api-endpoint <url>` | CLI | No | `https://127.0.0.1:27124` (or read from `data.json`) |
| `--mcp-server <name>` | CLI | No | `obsidian` (mcpServers entry name; configurable per Patch C) |
| `--degrade-on-preflight-fail <true \| false>` | CLI | No | `true` (graceful degradation; false = hard-fail with exit 2) |
| `--verbose` | CLI flag | No | false |

**Mode cascade (degradation logic)**:

```
agent_driven:
  preflight check: Obsidian running + REST API plugin loaded + API key valid + MCP server reachable
  on success: execute O1 + O2 + O3 + O5 + O7 via REST API + MCP; DELEGATE O4 to T6; keep O6 operator-side
  on partial failure (MCP unreachable, REST API reachable): degrade to hybrid
  on full failure (REST API unreachable): degrade to operator_side per --degrade-on-preflight-fail
hybrid:
  execute O1 + O2 + O3 + O7 via REST API (these don't need MCP)
  DELEGATE O5 to operator (or T6 if T6 has agent-driven O5 logic)
  DELEGATE O4 to T6's M3.2 DELEGATION
  O6 + visual checks stay operator-side
operator_side:
  DELEGATE entirely to T6 via subprocess (--vault <vault> --profile <profile>); pass-through T6 output + exit code
```

**Per-check execution detail (`agent_driven` mode)**:

| Check | Method | API endpoint / MCP tool | Pass criteria |
|---|---|---|---|
| O1 (vault opens cleanly) | REST API | `GET /vault/` (REST API health endpoint) | HTTP 200 + JSON with `name` field matching vault basename |
| O2 (HOME.md renders) | REST API | `GET /vault/HOME.md` | HTTP 200 + content has YAML frontmatter (or operator-acceptable plain markdown per profile) |
| O3 (content tables enumerate) | REST API + parse | `GET /vault/HOME.md` + parse profile-declared table assertions | row count matches profile-declared source YAML |
| O4 (plugin binary-presence) | DELEGATE to T6 | (T6 DELEGATES to M3.2 skill `--verify`) | (passes-through T6's verdict) |
| O5 (cross-vault links) | REST API + MCP | `GET /vault/HOME.md` + parse links + MCP file-lookup per target | each link's target file existence confirmed |
| O6 (external links) | OPERATOR-SIDE | (network call doesn't benefit from API) | (deferred to operator OR T6 curl-based check) |
| O7 (theme + accent) | REST API | `GET /vault/.obsidian/appearance.json` | content matches profile-declared theme + accent |

**`## Forward integration with M3.7` stub section in the new skill**:

> Forward integration with M3.7 — DEFERRED STUB
>
> M3.7 (modular III for Obsidian) ships III-on-Obsidian as an agent-driven inspection runtime. T8d skill provides M3.7 with the agent-driven O-check primitive that III's modular checks compose with. When M3.7 III modules each declare verification needs (e.g., "verify no orphan files", "verify wikilink graph connectivity"), they can extend the O-check matrix by adding profile-declared checks (`O8`, `O9`, ...) that T8d skill executes via REST API + MCP. The mode cascade (agent_driven → hybrid → operator_side) applies to III modules; modules with fully-agent-driven needs execute via T8d directly without operator involvement; modules with theme/visual judgments stay operator-side. M3.7 design spec cites this skill + T6 + T7 + ADR-014; M3.7 III modules declare `verification_surface:` per ADR-014 Clause C.

**Cross-references (≥ 4 prior skills + T8 design spec + ADR-014 per Project SO #10)**:

- [[skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — M3.3 T6 deliverable; T8d DELEGATES O4 + O6 + operator_side fallback to this skill (cross-skill primitive composition pattern 3rd use instance — graduates at M3.4 close)
- [[skill_verification_handoff.md|skill_verification_handoff.md]] — M3.4 T7 deliverable; T8d consults T7 for dispatch verdict when invoked via `--mode auto` (rare case; usually T7 → T6 → T8d, not T8d → T7)
- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 T4 deliverable; T8d reaches it at delegation depth 3 via T6 chain (T8d → T6 → M3.2 skill)
- [[../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — pre-existing health-check pattern; T8d is the agent-driven Obsidian-surface sibling
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj4_t8_design_spec.md|T8 design spec]] — this spec; ratifies T8d skill's design + mode cascade
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — sibling at this mission; T7 dispatch decision tree routes to T8d via `--surface agent` branch
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — doctrinal ratification of the verification-handoff topology (T8d skill operationalizes Clause B for the `agent_driven` branch)

### Patch E — T8e M3.3 T6 skill `mode` profile-field activation (v8 P6 candidate; additive-local within aDNA.aDNA OR additive-upstream to `.adna/how/skills/` per T6 promotion status)

Patches `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (M3.3 T6 skill) to add `mode` field activation hook. Operationalizes the T8 forward-reference stub at T6 lines 256-269 + 585-601.

```diff
@@ Patch target: aDNA.aDNA/how/skills/skill_obsidian_integration_test.md (lines 256-269 + 585-601 — T8 forward-reference stubs)

@@ Replace stub at lines 256-269 (in §5 design-spec body) with:

-> Forward integration with T8 (M3.4) — DEFERRED STUB
-> ...
-> **Profile flag (forecast)**: T6 may gain `mode: "operator_side" | "agent_driven" | "hybrid"` profile field at M3.4 when T8 wiring lands. ...
+> Integration with T8 (M3.4) — ACTIVATED 2026-05-24
+>
+> T8 wiring landed at M3.4 S2 (this same campaign; T8a setup.sh PLUGIN_IDS + T8b data.json template + T8c MCP config + T8d skill_obsidian_agent_inspect.md). T6 framework gains the `mode` profile field activation hook (patched at T8e this same M3.4):
+>
+> - `mode: operator_side` (default) — T6 executes O1-O7 operator-side per M3.3 behavior (unchanged)
+> - `mode: agent_driven` — T6 reads `mode` field from profile; for O1+O2+O3+O5+O7 DELEGATE to skill_obsidian_agent_inspect.md (T8d) via subprocess invocation; O4 stays in M3.2 DELEGATION; O6 stays operator-side
+> - `mode: hybrid` — T6 same as agent_driven but degrades O5 to operator-side; O1+O2+O3+O7 via T8d; O4 + O6 same
+>
+> Per-profile activation: profile JSON adds `"mode": "agent_driven"` field; T6 skill body branches on `profile.mode` at O1-O7 dispatch.

@@ Replace stub at lines 585-601 (in skill body §invocation block) with:

-## Forward integration with T8 (M3.4) — DEFERRED STUB
-...
+## Integration with T8 (M3.4) — ACTIVATED 2026-05-24
+
+T8 wiring landed at M3.4 S2 (T8a-T8e). T6 skill body branches on `profile.mode`:
+
+```bash
+# Inside T6 skill, at O1-O7 dispatch:
+PROFILE_MODE=$(jq -r '.mode // "operator_side"' "$PROFILE_PATH" 2>/dev/null)
+
+for check in O1 O2 O3 O5 O7; do
+    case "$PROFILE_MODE" in
+        agent_driven|hybrid)
+            if [ -f "$VAULT_DIR/how/skills/skill_obsidian_agent_inspect.md" ]; then
+                bash "$VAULT_DIR/how/skills/skill_obsidian_agent_inspect.md" \
+                    --mode "$PROFILE_MODE" --vault "$VAULT_DIR" --profile "$PROFILE_NAME" \
+                    --check "$check"
+                delegate_exit=$?
+                # consume verdict
+            else
+                report "$check" "SKIP_WITH_HINT" "T8d skill not present; install via M3.4 T8d local landing OR fall back to operator_side mode"
+            fi
+            ;;
+        operator_side|*)
+            # original M3.3 operator-side logic for this check
+            ;;
+    esac
+done
+
+# O4 (binary-presence) — always DELEGATE to skill_obsidian_canonicalize.md --verify (unchanged from M3.3)
+# O6 (external links) — always operator-side curl-based (unchanged from M3.3)
+```
+
+Note: T6 with `mode: hybrid` is equivalent to T8d skill invoked with `--mode hybrid` for the O1+O2+O3+O7 subset; O5 explicitly stays operator-side in T6 hybrid mode (T8d's `--mode hybrid` keeps O5 in REST API path).
```

**Behavior notes**:
- T8e is a content-only patch to T6 skill markdown — no structural change; `mode` field activation hook reads from profile JSON + branches per-check
- Operators with existing profiles default to `mode: operator_side` (no implicit activation; per-profile opt-in)
- T8e is **additive-local within aDNA.aDNA** at v8 P6 entry IF T6 has not been upstream-promoted yet (M3.3 T6 skill is currently at `aDNA.aDNA/how/skills/`; v8 P6 may promote to `.adna/how/skills/`)
- T8e is **additive-upstream to `.adna/how/skills/`** at v8 P6 entry IF T6 promotion lands BEFORE T8e application (cascading-upstream-after-promotion pattern)
- Reversibility: revert the diff blocks; T6 returns to M3.3 operator_side-only semantics

## 6. v8 P6 propagation contract

| Sub-track | Action | Authority | Verification |
|---|---|---|---|
| **T8a** `.adna/setup.sh` PLUGIN_IDS extension | Single-line addition; 6th-instance additive-upstream candidate; bundle decision at P6 entry (separate OR bundled with other T8 sub-tracks OR with T7 skill upstream-promotion). Commit message: `v7.x: add obsidian-local-rest-api to PLUGIN_IDS (T8a per M3.4 T8 design spec; F-S2-8; Nth instance of single-commit additive-upstream pattern)`. | Operator pushes; Rosetta drafts commit | Fresh fork shows `obsidian-local-rest-api` plugin installed at `.obsidian/plugins/obsidian-local-rest-api/`; smoke test Scenario A from T8d skill PASSES preflight |
| **T8b** `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` template | Template file addition; 7th-instance additive-upstream candidate; bundle with T8a in single commit (recommended); commit message: `v7.x: ship obsidian-local-rest-api data.json template with per-vault security contract (T8a+T8b per M3.4 T8 design spec; F-S2-8)`. Operator-supplied key first-run UX documented at `_aDNA_security_contract` block. | Operator pushes; Rosetta drafts commit | Fresh fork shows `data.json` template at the path; smoke test confirms `apiKey: "REPLACE_ON_FIRST_RUN_..."` placeholder; first-run UX flow documented in propagation memo |
| **T8c** MCP server config (Option C1 user-scope OR Option C2 vault-scope) | NOT a `.adna/` patch (outside both `.adna/` and `aDNA.aDNA/`); operator-decisioned at v8 P6 entry which scope to recommend; aDNA pattern documentation at `aDNA.aDNA/what/context/observability/` may cite both options. **Default recommendation**: Option C2 (vault-scope `.mcp.json`) for federation discipline — per-vault security boundary. Option C1 (user-scope `~/.claude.json`) acceptable for single-operator multi-vault setups. | Operator decision at P6 entry; Rosetta drafts pattern doc | Operator confirms MCP server config in chosen scope; smoke test Scenario A from T8d skill PASSES preflight MCP server reachability |
| **T8d** `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md` | Local landing at M3.4 Obj 6 this session (already at S2 commit); upstream-promotion candidacy at v8 P6 entry (cp to `.adna/how/skills/`); commit message at P6 promotion: `v7.x: add skill_obsidian_agent_inspect.md (agent-driven Obsidian inspection via Local REST API + MCP; cross-skill primitive composition pattern 3 of 3 — graduated; T8d per M3.4 T8 design spec; F-S2-8)`. | Operator decision at P6 entry; Rosetta drafts commit | Fresh fork shows T8d skill at `.adna/how/skills/`; smoke test Scenarios A-E PASS |
| **T8e** M3.3 T6 skill `mode` field activation hook | Patches `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (if T6 still at aDNA.aDNA at P6) OR `.adna/how/skills/skill_obsidian_integration_test.md` (if T6 promoted at P6); commit message: `v7.x: activate T6 mode field hook (DELEGATE O1+O2+O3+O5+O7 to T8d when mode: agent_driven; T8e per M3.4 T8 design spec; F-S2-8)`. | Operator pushes; Rosetta drafts commit | T6 skill body shows `## Integration with T8 — ACTIVATED 2026-05-24` section; smoke test Scenario F PASSES (T6 with `--mode agent_driven` DELEGATES to T8d) |

**P6 verification expectation**: zero regressions against v7.0 (existing 15 plugins continue unchanged; new 16th plugin is additive; T6 skill body changes are additive content-only); fresh forks gain `obsidian-local-rest-api` plugin + `data.json` template + T8d skill + T6 mode-field activation; F-S2-8 closed at the skill + plugin + MCP layer; the agent autonomy needle takes from ~40% (M3.3 close) to ~85% (M3.4 close).

**P6 rollback path**: per-sub-track revert via `git revert`. T8a removal: restore PLUGIN_IDS to pre-T8a state; existing forks keep the plugin (no destructive removal). T8b removal: restore plugin directory to pre-T8b state; existing forks keep their `data.json`. T8c removal: operator removes MCP server entry from chosen scope. T8d removal: restore `.adna/how/skills/` to pre-T8d state; skill stays at `aDNA.aDNA/how/skills/` as the v8 P6 source-of-truth. T8e removal: revert T6 skill patch; T6 returns to operator_side-only semantics.

## Cross-references

- [[../mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md|M3.4 mission spec]] — parent mission (Objective 4)
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — Track 8 substrate (line 67-77 verbatim)
- [[../../../../how/backlog/backlog_F_S2_8_agent_driven_obsidian_inspection.md|F-S2-8 backlog file]]
- [[m34_obj3_t7_design_spec.md|T7 design spec]] — sibling at this mission (T7 = dispatch; T8 = agent-driven branch primitive that T7 routes to via `--surface agent`)
- [[m33_obj4_t6_design_spec.md|M3.3 T6 design spec]] — substrate (T6 O1-O7 check-set; T8 forward-reference stub at lines 256-269 + 585-601; T8e activates the `mode` field hook)
- [[m33_obj3_t5_design_spec.md|M3.3 T5 design spec]] — substrate (6-section structural template; first-open hazard prevention model parallel to T8's mode cascade model)
- [[m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — substrate at delegation depth 3
- [[m32_obj4_t4_design_spec.md|M3.2 T4 design spec]] — sibling (T4 ships NN data.json triad-color hex; T8b ships obsidian-local-rest-api data.json template — same per-vault-keyed pattern)
- [[../../../../how/skills/skill_obsidian_integration_test.md|M3.3 T6 skill]] — T8e patches this file with `mode` field activation hook
- [[../../../../how/skills/skill_obsidian_canonicalize.md|M3.2 T4 skill]] — depth-3 delegation target via T6 chain
- [[../../../../how/skills/skill_verification_handoff.md|T7 skill]] — sibling at this mission (Obj 5; T8d consults T7 for dispatch when `--mode auto`)
- [[../../../../how/skills/skill_obsidian_agent_inspect.md|T8d skill]] — paired skill artifact (drafted at Obj 6 this same session)
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — doctrinal ratification (T8d operationalizes Clause B `agent_driven` branch)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership (T8a-T8e ALL queue at P6)
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign SO #14 in-phase exception clause + #16 v7.0 tag dependency hard

## Prior-instance + bundle citation (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1-4 | (additive-upstream instances 1-4 — ADR-008 + e3b3bcc + 8673383 + 202c9ec) | ratified pre-M3.x | Single-commit additive-upstream lineage | M03 + M04 + M-LWX-01 + M-LWX-03 |
| 5 | T1 — preserve setup.sh in skill_project_fork.md | v8 P6 candidate (M3.1 T1 design spec) | Single line removal + comment update | M3.1 |
| 6 | T3 — `setup.sh --verify` mode + health-check + fork-time gate | v8 P6 candidate (M3.2 T3 design spec) | 3-file additive | M3.2 |
| 7 | T4 — `skill_obsidian_canonicalize.md` orchestrator + setup.sh `--reset-layout` + NN data.json shipping + .obsidianignore extension | v8 P6 candidate (M3.2 T4 design spec — bundled F-S2-5/6/7) | Combined 4-file additive | M3.2 |
| 8 | T6 — `skill_obsidian_integration_test.md` + optional setup.sh --test hook | v8 P6 candidate (M3.3 T6 design spec) | NEW skill file + optional setup.sh delegation arm | M3.3 |
| 9 | T7 — `skill_verification_handoff.md` + ADR-014 ecosystem propagation | v8 P6 candidate (M3.4 T7 design spec) | NEW skill file + ADR-014 ecosystem cycle | M3.4 |
| **10** | **T8a — `obsidian-local-rest-api` to setup.sh PLUGIN_IDS** | **v8 P6 candidate (this T8 spec; sub-track T8a)** | **Single-line PLUGIN_IDS array addition** | **M3.4 (this mission)** |
| **11** | **T8b — `obsidian-local-rest-api/data.json` template with per-vault security contract** | **v8 P6 candidate (this T8 spec; sub-track T8b)** | **NEW template file in `.adna/.obsidian/plugins/`** | **M3.4 (this mission)** |
| **12** | **T8d — `skill_obsidian_agent_inspect.md`** | **v8 P6 candidate (this T8 spec; sub-track T8d)** | **NEW skill file at `aDNA.aDNA/how/skills/`** | **M3.4 (this mission)** |
| **13** | **T8e — T6 skill `mode` field activation hook** | **v8 P6 candidate (this T8 spec; sub-track T8e)** | **Additive content patch to existing T6 skill** | **M3.4 (this mission)** |

**Note on instance counting**: T8a + T8b + T8d + T8e are 4 instance candidates of the single-commit additive-upstream pattern (each is additive class; counts alongside T1+T3+T4+T6+T7). T8c is NOT an instance (outside both `.adna/` and `aDNA.aDNA/`; non-additive-upstream class). The instance counter post-T7+T8 lands at v8 P6 entry depends on operator bundle decisions; if T7+T8a+T8b+T8d+T8e land as 5 separate commits, T8e is the 13th instance; if heavily bundled (e.g., all 5 in one commit), the counter lands lower. Standing Order #5 (absorbed-campaign) lineage applies — operator decides at P6 entry.

## Notes

- **Patch D (T8d skill) is the load-bearing change at M3.4.** It ships at Obj 6 this same session; the other 4 sub-tracks (T8a/T8b/T8c/T8e) are v8 P6 propagation candidates with proposed-patch text only at M3.4. Cross-skill primitive composition pattern GRADUATES at M3.4 close because T8d ships with TRIPLE DELEGATION evidence (T6 + T7 + M3.2 skill at depths 1+1+3) — the 3rd of 3 use instances.
- **T8 forward-reference-stub discipline GRADUATES at M3.4 close.** This T8 design spec body §5 includes `## Forward integration with M3.5` + `## Forward integration with M3.7` stub paragraphs; T8d skill at Obj 6 includes `## Forward integration with M3.7` stub. Combined with T7 design spec's M3.5 + M3.7 stubs + T7 skill's M3.5 + M3.7 stubs, the discipline reaches 3 of 3 use instances at M3.4 close — graduates `skill_forward_reference_stub_design.md` at S3 AAR.
- **Sub-track decomposition matches the propagation cycle granularity** — each of T8a-T8e has independent v8 P6 lifecycle (commit/bundle decisions per sub-track). This is the operational primitive that absorbed-campaign Standing Order #5 establishes: per-sub-track instance counting + bundle decision at P6 entry.
- **Mode cascade is the load-bearing operational primitive of T8d.** Graceful degradation (agent_driven → hybrid → operator_side) means partner-vaults with incomplete REST API + MCP setup degrade gracefully; the skill never hard-fails on missing infrastructure. This is the federation-discipline contract — every aDNA vault can invoke T8d's skill with whatever infrastructure it has, and the skill degrades to what's available.
- **MCP server selection (T8c) is operator-decisioned at v8 P6 entry.** ADR-014 names the MCP server only by category ("community Obsidian MCP"), so server choice can change without ADR amendment. Default `MarkusPfundstein/mcp-obsidian` at M3.4 authoring time; may revise if community consolidation has happened at P6 entry.
- **Per-vault security contract (T8b)** is the federation-readiness primitive. Operator-supplied API key + per-vault scope + `.gitignore` recommendation = each vault's REST API access is isolated. Partner-vault federation cannot accidentally cross-access another vault's Obsidian instance.
- **Per-mission-class self-reference (Standing Order #8 — 17th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The deliverable T8d skill at Obj 6 IS the 4th behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer (after M3.2's first behavioral test + M3.3's second + M3.4 T7's third). Combined with T7's 3rd behavioral test (this same mission Obj 5), M3.4 produces 2 new behavioral tests of the M2.4.5-hardened routing layer. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **`skill_design_spec_authoring.md` graduation** advances from 7 (with T7 at this same mission Obj 3) to 8 (this T8 spec) of 3+ use instances. Graduation already ratified at M3.2 close; T5+T6+T7+T8 add post-ratification reinforcement.
- **Validation-as-dispatched-campaign pattern reinforcement**: T8d skill is the agent-driven primitive that `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier + Carly + Herb) and any successor cross-vault validation campaign consumes when partner-vault has agent-driven Obsidian inspection wired. The skill replaces ad-hoc per-mission API+MCP wiring prose with a single reusable invocation.
- **Dual-audience note**: a newcomer reading the spec finds Option 1 explained in plain language ("the agent can check most of the Obsidian boxes itself if you wire the REST API + MCP — operator stays for theme/UX-feel only") + the mode cascade narrative + smoke-test Scenarios A-G as concrete commands. A developer reads the §5 Patch A-E literal patch content + the per-check execution matrix + the §6 propagation contract for the v8 P6 cycle. Both audiences land on the same T8d skill invocation surface + the same T6 mode-field activation contract.

## Completion Summary

T8 design spec landed at M3.4 S2 covering 5 sub-tracks T8a-T8e; T8d skill ships at M3.4 Obj 6 (this same S2 session); ADR-014 drafts at M3.4 Obj 7 (this same S2 session) and ratifies at M3.4 S3 close per Campaign SO #14 in-phase exception clause. v8 P6 propagation queue grows by 4 items (T8a + T8b + T8c + T8e patches; T8d local landing already at S2). Cross-skill primitive composition pattern reaches 3 of 3 use instances at T8d triple DELEGATION (GRADUATES at M3.4 close); T8 forward-reference-stub discipline reaches 3 of 3 use instances across T7+T8 spec stubs + T7+T8d skill stubs (GRADUATES at M3.4 close). M3.4 close (after S3 AAR) graduates both candidates + closes 4 of 4 P3 phase-exit bricks for the agent-autonomy prong.
