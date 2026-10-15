---
plan_id: mission_arcade_a1_2_terminal_platform_specs
type: plan
title: "Re-anchor the terminal contract, refresh the platform spec, retire the dead CLI prose"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 3
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 70
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
token_budget_actual: "≈60 executor (content-load, rough: plan-time reads + SHA/tense verification ≈25 · spec v0.2 ≈15 · spec v0.4 ≈8 · sweep + notes + memo ≈7 · close ≈5); inside 70 ± 25; executed fable on a declared-opus card at the operator's session, no lenses"
depends_on:
- mission_arcade_a1_1_spec_graph_exchange
blocks:
- mission_arcade_a1_3_vauban_rulings_packet
gate: "G1 — specs §7.7."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Re-anchor the terminal contract, refresh the platform spec, retire the dead CLI prose

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 3 of 15

## Goal

Bring the standard's two product-facing specs to the launch posture of the products they describe: spec_terminal_harness_contract v0.2 re-anchored to ACP / A2A v1.0 / MCP and the rehomed Harness paths (the accepted rows of idea_terminal_harness_contract_reanchor, blob SHAs verified unchanged where the §8 no-drift case applies); spec_platform_ecosystem v0.4 naming Exchange + Terminal as the network's access points with the recommended-default paper note (idea_default_terminal_harness_standard_touch, paper row only — the hook waits on Terminal's threat-model mission); and the ~19 files in this vault that still name the retired aDNA / lattice CLI struck-not-deleted with the adnaterm successor named.

## Exit Gate

G1 — specs §7.7.

## Objectives

### 1. spec_terminal_harness_contract.md v0.2
- **Status**: completed
- **Session**: session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep
- **Description**: Five stale spots re-anchored; §8 provenance records SHA-unchanged clauses; aDNA.aDNA ADR-027 (ours — qualify!) ratification bundled or left for its own ceremony per the operator.
- **Files**: what/specs/spec_terminal_harness_contract.md
- **Depends on**: none

### 2. spec_platform_ecosystem.md v0.4
- **Status**: completed
- **Session**: session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep
- **Description**: §Access points subsection: Exchange (Registry · Commons · Market) + Terminal (console) with their launch posture and the one spec each cites; recommended-not-required note.
- **Files**: what/specs/spec_platform_ecosystem.md
- **Depends on**: 1

### 3. CLI prose sweep
- **Status**: completed (re-scoped on evidence — see Scope Changes)
- **Session**: session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep
- **Description**: grep -rl for the retired verbs in this vault (excluding history/archive); strike + successor line; a derived count in the AAR, never typed.
- **Files**: ~19 files (derived at the sitting)
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_1_spec_graph_exchange]].

### Next Mission Inputs
- Feeds [[mission_arcade_a1_3_vauban_rulings_packet]]. **Three rows for the Vauban reply, found here:** (1) a pointer-spec for the Python `Terminal.aDNA` (none exists; the Go console's is archived — v0.2 §7 row 3 is `HORIZON` until one does); (2) the access-point threat-model trigger (`idea_access_point_threat_model`) lives only in `Archive.aDNA/TerminalGo.aDNA/how/backlog/` — re-home or re-rule, since the bootstrap hook waits on it; (3) the CP4-1 "aDNA 19" prose count did not reproduce here (6 live-routing files, the rest other live CLIs or records) — a correction for z1's AAR, not an ask.

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

### Deliverables
- `what/specs/spec_terminal_harness_contract.md` **v0.2 (`proposed`, §7.7 empty → G1)** — frontmatter re-anchored (clause sources → `Harness.aDNA/what/context/harness_core/terminal_contracts/`, `canonical_clause_sha` ×2, `archive_originals` ×2, reference conformance = archived original + live snapshot with both SHAs); §0 · §2 (SHA column) · §3 · §4 path cells; §5 tense-labelled providers (`latticeagent` superseded → `rareharness`); **§6 third binding: Terminal.aDNA via ACP / A2A v1.0 / MCP (Terminal ADR-B09)**; §7 table at today's names (Terminal row `HORIZON` for its pointer-spec; Harness row flags its stale aDNA.aDNA ADR-027 status); §8 no-drift clause exercised; §9 historical; provenance.
- `what/specs/spec_platform_ecosystem.md` **v0.4 (`proposed`, §7.7 empty → G1)** — §Terminal ↔ Harness Contract at today's names; **new §Access points** (console `Terminal.aDNA` · exchange `Exchange.aDNA`, one spec each, posture + tense: hosting `PASS`, Tier-0 `PASS`, both launches `TAUGHT-AS-DESIGN`); the recommended-default note (recommended-not-required; hook + entry doc deferred, trigger orphaned); dated line on the stale table; `co_signed_adr_v0_4` = aDNA.aDNA ADR-064 (proposed).
- Dead-CLI sweep — **6 live-routing files annotated**, strike-not-delete, successor `adnaterm` named, substrate source re-pointed to `Archive.aDNA/TerminalGo.aDNA/how/configs/bin/lattice` (read-only): `how/configs/bin/install.sh` · `uninstall.sh` (`bash -n` clean) · `how/configs/runbooks/runbook_lattice_home_install.md` · `how/skills/skill_lattice_home_install.md` · `what/patterns/pattern_lattice_home.md` · `how/backlog/idea_upstream_lattice_home_pattern.md`.
- Backlog dispositions: `idea_terminal_harness_contract_reanchor` EXECUTED (stays `accepted`); `idea_default_terminal_harness_standard_touch` paper row 1 LANDED, rows 2–3 stay `deferred`.
- `who/coordination/coord_2026_10_15_rosetta_to_panacea_adr_027_accepted_since_07_02_repin_after_g1.md` `outbound_ready` — **send after G1** (its SHA claim depends on the signature).

### Descoped
- The stale §Active Platforms table is not refreshed (that is `idea_upstream_platform_spec_refresh`, accepted M2.1, still undone) — one dated line added, table retained verbatim (SO-6).
- No memo to Vauban from here; the three Terminal-side rows ride A1.3's reply (Next Mission Inputs).

### Key Findings
- **[D] The "~19 files still name the retired CLI" expectation did not reproduce at the object.** Derived (`grep -rlE` over md/yaml/py/sh/zsh, excluding `how/sessions/history`, `_archive`, `site/`, `STATE_archive`, evidence): **42** files match the broad pattern · **15** carry a retired-CLI form · **2** of those are false positives ("aDNA campaign", "lattice intro") · **7** are records kept untouched (3 completed `campaign_lattice_home_pattern` cards · 2 of our memos · 2 inbox memos) · **6** are live-routing and were annotated. The bulk of the 42 are `lattice home` — **this vault's own live script** `how/configs/bin/lattice` (pattern_lattice_home canonical-instance #2), `latlab lattice …` (the Jupyter CLI, installed at `/opt/anaconda3/bin/latlab`), or the live launcher names `aDNA terminal` / `lattice terminal` (Vauban 10-06 row 7). Terminal's "aDNA 19" was a dated REPORTED count with no grep recorded.
- [D] aDNA.aDNA ADR-027 (ours) has been `accepted` since 2026-07-02 — the card's "bundled or own ceremony" was moot; Harness's pointer-spec still carries `proposed` (notice staged).
- [D] The Cmux-era pointer-spec the re-anchor idea names is archived with the Go console; the live Python Terminal has **no `what/specs/`** — recorded as `HORIZON`, not papered over.
- [D] The threat-model mission that gates the recommended-default hook exists only in the archive; the deferral trigger is orphaned.
- [D] The LatticeAgent interop snapshot in Harness differs from the archived original by the rehome annotation only (`a640076e…` vs `98cf8b37…`, diffed) — both SHAs now named in the spec so no reader infers a clause moved.

### Scope Changes
- Objective 3 re-scoped at plan time on evidence (operator ruling R6, AskUserQuestion 2026-10-15): **live-routing-dead set only**; records and memos untouched. "~19" → 6 edited / 7 kept / 2 false positives, derived.
- The v0.2 delta added one thing the idea did not list: the §6 Terminal.aDNA protocol-seam binding (the card's goal line asked for the ACP / A2A / MCP re-anchor; ADR-B09 is cited by pointer, no versions restated).
- Plan-time ruling R5: push at close (R4 treated as standing for ARCADE sittings).

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: deriving the sweep before editing — one grep with a per-file classification turned a "~19 files to strike" instruction into 6 real edits and a correction worth sending back to its source.
- **Didn't**: the card inherited two `[R]` claims without their producing command (the "~19", and the idea's Cmux pointer-spec path); both failed at the object. A `[R]` row with no command is a question, not a count.
- **Finding**: three CLIs share the word `lattice` on this node (this vault's splash script, the Jupyter `latlab`, the retired Go console) — a retirement ruling named by verb needs its binary named too, or every sibling CLI reads as dead.
- **Change**: every sweep-class objective on an ARCADE card carries the grep that produced its count (or says "to derive"), and the session log records the command verbatim before the first edit.
- **Follow-up**: Vauban rows ×3 → A1.3; Panacea notice → send after G1; `idea_upstream_platform_spec_refresh` is still the honest fix for the stale table (its own sitting); the Terminal row's `HORIZON` flips only when a Python-graph pointer-spec exists.
