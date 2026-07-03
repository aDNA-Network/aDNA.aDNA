---
type: gate_record
gate_id: champollion_p6_gate
campaign_id: campaign_champollion
title: "G6 output record — RATIFIED + FIRED: v8.4 shipped (all six decisions as recommended)"
status: resolved
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [gate_record, champollion, g6, release, v8_4]
---

# G6 output record — THE RELEASE GATE, fired

**Ratification (verbatim)**: the operator asked for the fable perspective on the gate, received it (confidence case · ranked residual risks · severability note · D4 nuances), then ruled via the structured decision surface: **"Ratify all six as recommended (Recommended)"** (2026-07-03; no pre-fire walk requested). Cascade executed same session (`session_stanley_20260703T035326Z_champollion_g6_ratification`), gate §final order, push last.

## Per-decision outcomes

| D | Ruling | Executed |
|---|--------|----------|
| **D1 FIRE v8.4** | as rec | **SHIPPED**: fresh clone @ `e4372a6` → held patch applied clean (27 files: 23 M + 4 new; M6.3 amendment verified in) → step (d): `.adna/CLAUDE.md` 8.3→8.4 + `updated:` + changelog-comment prepend + **`.adna/CHANGELOG.md` v8.4 entry** (the governance lint surfaced this fifth bump site — the "CHANGELOG" in the flag list is the image's `.adna/CHANGELOG.md`, not a root file; recorded for the next release-runner) → lint **Zero drift** → commit `4e3bf38` + annotated tag `v8.4` → **pushed branch + tag** (tags-only; gh-auth helper) → step (e): `~/aDNA/.adna` sync commit `9bd4051`; `install_truth.json` verified unchanged (template `9bd4051`, 4 paths) → **step (f) smoke: 7/7 PASS** (router pre-instantiated · role:template · key skills · ignore-rules [dummy `*.aDNA/` ignored + `.adna/` tracked] · embed-note · **old-URL 301 → `aDNA-Network/adna-legacy`** · tag + 1-command flow; bonus content spot: root badges v8.4 + image version 8.4). Full record in the session file §Step (f). |
| **D2 PUSH** | as rec | Executed as the cascade's final step (fetch + ls-remote truth-check + gitleaks increment; releases `coord_2026_07_03_rosetta_to_venus_track_d_terminal_dp4.md` + the ADR-022 co-sign reply). Result recorded in the session SITREP. |
| **D3 telemetry** | as rec | `telemetry_corpus_p6.md` (phase ~153/127 +20%; per-curation-row RC pricing; aggregate-halt question → M7.2; finding-side-verification rule; cumulative ≈+4%) · Prometheus memo annotated · TaskNote G6 rollup + mission rows (P-3 nudge → **RESOLVED-ARRIVED**). |
| **D4 adjudications ×10** | all as rec | **Folded now**: P-1 + P-3 + P-4 + W-2 + P-6 → `pattern_software_element_context_graph.md` §Naming & Composition Rulings (5 clauses w/ provenance) · P-7 → vault CLAUDE.md Git-Ops rule 8. **Co-signed**: ADR-022 via `coord_2026_07_03_rosetta_to_berthier_adr022_cosign_reply.md` (4-field co-sign; reshape-to-pattern reserved, trigger = our first scheduled consumer). **Deferred w/ named triggers**: P-2 (next `adna_validate` touch, v8.5 window) · P-5 (v8.5 fork-skill touch; optional-with-degradation constraint recorded) · P-8 (next STATE-diet window). **Ratified**: `idea_state_prompt_shed_on_close` → `accepted`, `fold_batch: v8_5_next_release`. All three inbound memos carry dated Disposition sections; statuses → `disposed`. |
| **D5 DP4 handoff** | as rec | Dossier stands ready (`campaign_operation_adna/dp4_dossier.md`; Track D READY; §6 = one paste). **No explicit "fire DP4" was given — the §6 paste was NOT executed**; DP4 remains the operator's to fire at any time. |
| **D6 housekeeping** | as rec | `.gitleaks.toml` installed (ONE narrow allowlist: vendored plugin bundles; triage reason in-file; nothing else suppressed) · `aDNA_overview.md` re-stamp → named v8.5/doc-currency trigger · M7.x retro bundle recorded in the M7.2 brief (twin-builder · surface-selection · aggregate-halt · silent-halt) · **P7 briefs live** (M7.1 + M7.2) · session → history at close. |

## Release identity

**`aDNA-Network/aDNA` @ `4e3bf38`, annotated tag `v8.4`** (governance v8.4 · standard v2.5) — pushed 2026-07-03. Local node `.adna` = `9bd4051`. Diff vs v8.3: 28 files (the 27-file RC + CHANGELOG), 767+/48− content + bumps. Release notes: RC record §4.

## Standing consequences

- The tag is immutable; post-ship findings route to v8.5 or a new gate (skill_template_release error-handling law).
- The v8.5 queue now holds: the 10 M6.1 DEFERs + P-2/P-5/P-8 + state-prompt-shed + aDNA_overview re-stamp + the validator-docstring class — M7.1's handoff packet enumerates all with triggers.
- Next gate: **G7 (campaign close)** after M7.1 → M7.2. Operator gate; no auto-advance.
