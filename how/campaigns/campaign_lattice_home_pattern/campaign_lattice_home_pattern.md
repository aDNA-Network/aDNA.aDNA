---
type: campaign
campaign_id: campaign_lattice_home_pattern
created: 2026-05-29
updated: 2026-05-29
status: completed
persona: rosetta
opens_at: 2026-05-29T05:20:55Z
opened_session: session_stanley_20260529T052055Z_lhp_m1_s1
closed_at: 2026-05-30T01:30:00Z
closed_session: session_stanley_20260530T005905Z_lhp_m3_s1
parent_campaign: null
side_campaign_of: campaign_adna_serious_tool_readiness  # detour between M5.5 close + M5.6 entry
detour_authorization: "Operator-authorized 2026-05-29 at plan-approval `please-read-the-claude-md-prancy-badger.md` after AskUserQuestion confirming 3-mission side-campaign scope + Mission 2 actually installs splash in aDNA.aDNA. Mainline campaign_adna_serious_tool_readiness HOLDS at M5.5 close until this side campaign closes and Next Session Prompt → M5.6 D15 fires."
tag_target_at_close: v8.x (no semver bump; pattern + skill + template + idea-file are additive)
last_edited_by: agent_stanley
mission_count_planned: 3
estimated_sessions_total: 3-4
substrate_source_vault: CMux.aDNA  # canonical splash implementation lifted from CMux.aDNA/how/configs/{bin/lattice,home/home_template.md,conf.d/55-cmux-home.zsh}
hard_constraints: [zero_adna_dot_touches, zero_existing_claude_md_modifications, zero_existing_vault_manifest_state_writes, zero_cmux_adna_writes, zero_new_adrs, zero_main_campaign_modifications, zero_image_gen, zero_vault_wide_auto_deploy, no_cmux_code_duplication_only_lift_and_parameterize, mainline_campaign_preserved]
tags: [campaign, side_campaign, lattice_home_pattern, splash_pattern, cmux_lift, vault_portable, upstream_promotion, mainline_detour, rosetta_persona, m5_5_to_m5_6_interstitial]
---

# Campaign — Lattice Home Pattern Lift

> **Side campaign** — runs between `campaign_adna_serious_tool_readiness` M5.5 close (2026-05-29T04:50Z) and M5.6 D15 Persona Page Consolidation entry. Lifts the CMux.aDNA splash ("home page") pattern as a vault-agnostic aDNA primitive that any aDNA vault can adopt and that propagates upstream to `LatticeProtocol/Agentic-DNA`.

## Identity

- **Persona**: Rosetta (aDNA.aDNA standard owner; appropriate authority for pattern + skill + template authoring)
- **Substrate source**: `CMux.aDNA` — splash implementation already shipped at CMux EP2 ex_04 (2026-05-28). Lift target = aDNA.aDNA standard files (NEW additive only; zero CMux writes).
- **Upstream target**: `LatticeProtocol/Agentic-DNA` v7.1+ (filed at Mission 1 D4; PR is operator-discretionary).
- **North-star alignment**: directly serves the operator-stated UX goal "easy and fluid way to build/operate/utilize context graphs" recorded in `aDNA.aDNA/MEMORY.md`. The splash IS the cold-start UX surface.

## Scope

3 missions × ~1 session each (= 3-4 sessions total):

| Mission | Class | Sessions | Deliverables | Goal |
|---|---|---|---|---|
| **M1** Pattern lift + skill + template + upstream-promotion idea | planning | 1-2 | 4 files (`pattern_*` + `skill_*` + `template_*` + `idea_upstream_*`) — **completed 2026-05-29T05:40Z; 4/4 LIVE; estimated_sessions met at 1; 475 lines / ~3.5-4 kT cumulative** | Codify CMux splash as a vault-portable aDNA primitive ✓ |
| **M2** aDNA.aDNA in-vault install | implementation | 1 | 6 substrate files + mission spec (`how/configs/bin/lattice` + `home/home_template.md` + `conf.d/55-lattice-home.zsh` + `install.sh` + `uninstall.sh` + runbook) — **completed 2026-05-29T12:58Z; 6/6 LIVE; 10/10 smoke-verify PASS; ~715 lines / ~8 kT cumulative; canonical-instance #2 LIVE; 3 NEW SEED adaptations surfaced (per-vault PWD binding + realpath canonicalization + dirname+git-config identity probe) for skill v2 at M3** | Prove the lift; make aDNA.aDNA canonical-instance #2 of #2 (CMux is #1) ✓ |
| **M3** Campaign-lifecycle splash variants + side-campaign close | planning | 1 | 3 files (`skill_campaign_sitrep_splash.md` + `template_campaign_open_splash.md` + `template_campaign_close_splash.md`) + `skill_lattice_home_install` v2 amendment (3 NEW SEEDs) + side-campaign close cascade — **completed 2026-05-30T01:30Z; 4/4 LIVE; ~510 lines / ~10–11 kT cumulative; forward-link `[[skill_campaign_sitrep_splash]]` resolved; close-template self-references the side-campaign's own close** | Extend splash to campaign-open + campaign-close moments; route Next Session Prompt → M5.6 D15 ✓ |

**Total NEW files**: 13 (4 + 6 + 3) — *reconciled from the stale "12 (4 + 5 + 3)" at M3 close: M2 delivered 6 substrate files (bin/lattice, install.sh, uninstall.sh, home_template.md, conf.d hook, runbook), not 5; mission specs are not counted per the M1 deliverable convention*. **Modified files**: the side-campaign master / mission specs / STATE.md (own governance) + the M3 `skill_lattice_home_install` v2 amendment (this-campaign edit). Per M1 precedent, **no `AGENTS.md` index rows** were added. **Touched governance files**: STATE.md (Op 3 archive-on-close 39th canonical at side-campaign close). **Token-add budget**: ≈ 10–11 kT cumulative across the 13 NEW files — marginally over the ≤ 10 kT hard cap (≤ 6 kT was the target; M2's implementation-class substrate drove the overage); documented-rationale escape per [[mission_lhp_m3_lifecycle_variants_and_close|M3 close notes §Bloat audit]].

## Hard constraints (per plan §Hard constraints; bloat mitigation per explicit operator request)

1. Zero modifications to `.adna/` — upstream propagation via `idea_upstream_*` file only
2. Zero modifications to existing `CLAUDE.md` files at any level
3. Zero modifications to existing vault MANIFEST / STATE files (other than aDNA.aDNA's own STATE during side-campaign close)
4. Zero modifications to `CMux.aDNA` — read-only substrate source
5. Zero new ADRs
6. Zero modifications to `campaign_adna_serious_tool_readiness/`
7. Zero image-gen
8. No vault-wide auto-deploy
9. No CMux code duplication — lift + parameterize only
10. Mainline campaign preserved; Next Session Prompt routes to M5.6 D15 at side-campaign close

## Standing orders

This campaign inherits project-level Standing Orders 1-10 from `aDNA.aDNA/CLAUDE.md`. Additional campaign-specific rules:

- **SO-LH-1 — Drift audit per Mission 1 D2**: the install skill must include an explicit annual or operator-triggered diff gate against CMux's current `cmd_home()` to prevent cross-vault implementation drift.
- **SO-LH-2 — Splash = augments AAR, never replaces**: campaign-lifecycle splash variants (Mission 3) are operator-facing recap surfaces. They do NOT discharge Standing Order #5 (every mission gets an AAR) or Campaign SO #11 (per-phase decadal AAR mandatory) in the main campaign.
- **SO-LH-3 — Detour discipline**: this side campaign closes BEFORE M5.6 D15 opens. Any in-flight finding that wants to amend the main campaign is filed as a backlog idea + carried forward to M5.6 entry — never inlined into M5.5 close artifacts (which are frozen).

## Mission tree

| ID | Mission | Status | Notes |
|---|---|---|---|
| M1 | `mission_lhp_m1_pattern_lift.md` | **completed 2026-05-29T05:40Z** | 4/4 deliverables LIVE; M2 UNBLOCKED |
| M2 | `mission_lhp_m2_adna_vault_install.md` | **completed 2026-05-29T12:58Z** | 6/6 substrate LIVE + 10/10 smoke-verify PASS; M3 UNBLOCKED |
| M3 | `mission_lhp_m3_lifecycle_variants_and_close.md` | **completed 2026-05-30T01:30Z** | 4/4 deliverables LIVE; side campaign CLOSED; Next Session Prompt → M5.6 D15 |

## Exit gate

**Side campaign closes when** (all discharged at M3 close 2026-05-30T01:30Z):
1. ✅ All 3 missions completed (M1 05-29T05:40Z · M2 05-29T12:58Z · M3 05-30T01:30Z)
2. ✅ 13 NEW files LIVE + pushed to origin/main *(reconciled from stale "12")*
3. ✅ Bloat audit recorded — ≈10–11 kT cumulative; marginally over the ≤10 kT cap; documented-rationale escape
4. ✅ Lightweight 5-line side-campaign AAR appended (below)
5. ✅ STATE.md Op 3 archive-on-close **39th** canonical instance applied *(reconciled from stale "38th"; M2 was 38th)*
6. ✅ Next Session Prompt → M5.6 D15 Persona Page Consolidation LIVE
7. ✅ `git push origin main` clean

## Side-campaign AAR (Lightweight 5-line; Standing Order 5)

1. **Worked**: a 3-mission side campaign codified the CMux splash as a vault-portable aDNA primitive end-to-end — pattern + install skill + render template (M1), live in-vault install with 10/10 smoke-verify (M2), and a three-variant lifecycle family (cold-start + campaign-open + campaign-close) with a sibling skill (M3) — all inside the M5.5→M5.6 interstitial without touching the frozen mainline. The vault demonstrated its own primitive on its own closing moment (M3 close splash self-references this campaign).
2. **Didn't**: did not wire CLI verbs for the lifecycle variants (author-only, deferred like M1 deferred install to M2); did not propagate to sibling vaults (Phase-6 / upstream-promotion concern); did not file the upstream PR (operator-discretionary per M1 D4).
3. **Finding**: aDNA-class vaults (bare `MANIFEST.md` identity) need 3 adaptations beyond the CMux-class 4-substitution protocol — surfaced at M2, folded into `skill_lattice_home_install` v2 at M3. SO-LH-2 (splash augments AAR) is best enforced *structurally* (a mandatory AAR-pointer block in the close template), not by exhortation.
4. **Change**: the upstream-promotion idea-file should describe a *three-variant* render family sharing one template vocabulary + the CMux-class vs aDNA-class identity-class fork — fold at PR time.
5. **Follow-up**: side campaign CLOSED; mainline `campaign_adna_serious_tool_readiness` resumes at **M5.6 D15 Persona Page Consolidation** per the Next Session Prompt. Open carries: path-coexistence SEED (`lattice-adna` vault-prefix) for Phase-6 multi-vault propagation; the v8.0+ upstream PR for the lattice-home pattern family.

## See also

- [[mission_lhp_m1_pattern_lift|M1 mission spec]]
- [[mission_lhp_m2_adna_vault_install|M2 mission spec]] (planned)
- [[mission_lhp_m3_lifecycle_variants_and_close|M3 mission spec]] (completed)
- [[skill_campaign_sitrep_splash|M3 D1 lifecycle skill]] · [[template_campaign_open_splash|M3 D2 open template]] · [[template_campaign_close_splash|M3 D3 close template]]
- [[campaign_adna_serious_tool_readiness|Mainline campaign]] (resumes at M5.6 D15 now that this side campaign has closed)
- [[aar_decadal_d14_readme_first_contact|D14 decadal AAR]] (immediate predecessor)
