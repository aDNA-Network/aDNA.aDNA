---
type: gate
gate_id: champollion_p6_gate
campaign_id: campaign_champollion
title: "G6 — THE RELEASE GATE: fire v8.4 (skill_template_release step (d)→(f)) + P6 close cascade"
status: resolved   # RATIFIED 2026-07-03 — operator in-chat: "Ratify all six as recommended" (after requesting the fable perspective; no pre-fire walk). Record: champollion_p6_gate.output.md
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [gate, champollion, g6, release, v8_4, p6]
---

# G6 — THE RELEASE GATE (operator decision; nothing advances without it)

**P6 work is complete**: all three missions closed with AARs in one Mode-B sweep (`session_stanley_20260703T020820Z_champollion_p6_sweep`; commits `3d372c5`·`4395543`·`0cbdca4`·`f153a23`, all local). The **v8.4 release candidate is assembled, attacked, amended, re-verified, and HELD** — `.adna/` and `aDNA-Network/aDNA` remain untouched; nothing has been pushed.

| Mission | Outcome | Budget |
|---------|---------|--------|
| M6.1 RC | 27 IN / 10 DEFER / 0 DROP curated → assembled (patch **27 files, 770+/48−, 4 NEW**) → `skill_template_release` dry-run STOPPED before step (d); 6/6 integrity checks; record `artifacts/release_candidate_v8_4.md` + held diff `release_candidate_v8_4.patch` | ~85/52 (+63%; aggregate halt-line cross reported; per-row pricing → datapoint #6) |
| M6.2 DP4 dossier | **Track D = READY (terminal)**, live-verified; dossier `campaign_operation_adna/dp4_dossier.md` w/ §6 one-paste close text; Venus memo **staged** | ~38/35 (+9%) |
| M6.3 adversarial + security | 3 findings **found→fixed via recorded curation amendment** (root-README N-01/N-07 surface miss · stale docs-badge URL · I18 stale org URL); 1 candidate dissolved by census; **gitleaks FULL-history 9/9 false-positive** (vendored xterm.js tables); NAMES-ONLY batch sweep CLEAN; **nothing release-blocking**; record `artifacts/adversarial_pass_2.md` | ~30/40 (−25%) |

## D1 — FIRE THE RELEASE (v8.4) — **REC: FIRE**

The RC satisfies §7.7 applied to our own release: every fold traces to a ratified decision (standards-lawyer verified, patch↔curation↔decision), it survived the adversarial pass (3 findings fixed + re-verified, security clean), and the dry-run stopped exactly at the gate-fire point. **Firing = executing `skill_template_release` steps (d)→(f)**:

1. **Apply the held diff**: fresh clone of `aDNA-Network/aDNA` → `git apply how/campaigns/campaign_champollion/artifacts/release_candidate_v8_4.patch` (the patch is the durable RC; the session scratchpad clone may be gone). Verify: `git diff --stat` = 27 files 770+/48−.
2. **Step (d)** — the 5 flagged version-bump sites (RC record §3): `.adna/CLAUDE.md` `version: "8.3"`→`"8.4"` + `updated:` refresh + changelog comment prepend · image `CHANGELOG.md` release entry (two-track: governance v8.4; standard v2.5 already in the folded file) · path-scoped `git add` · commit w/ the §4 release-notes summary · **annotated tag `v8.4`** · push branch + tag (**tags-only** — no `gh release create`; auth via `gh auth token`, never inlined).
3. **Step (e)** — sync local `~/aDNA/.adna` (rsync + the documented divergent-local commit) · regen `install_truth.json` (`cd site && npm run sync:install`) + commit if moved.
4. **Step (f)** — the 7-row fresh-clone smoke test (router present · `role: template` · key skills · `*.aDNA/` ignore + `.adna/` tracked · embed note · old-URL redirect · tag + 1-command flow). **A red row reverts to the operator — never auto-remediate a pushed tag.**

## D2 — PUSH the vault batch — **REC: PUSH (after D1, same sitting)**

`origin/main..HEAD` = `1e3e422` (inbound Berthier bundle) + the four P6 commits + the cascade commit. Pre-push: `git fetch` + `ls-remote` truth-check + gitleaks (increment). **The push releases** `coord_2026_07_03_rosetta_to_venus_track_d_terminal_dp4.md` (staged, informational) to Venus's reading cadence.

## D3 — Telemetry datapoint #6 + Prometheus annotation + TaskNote refresh — **REC: ACCEPT**

`telemetry_corpus_p6.md`: phase ~153/127 (**+20%**) — M6.1 +63% (the RC's 27-row batch; **calibration: RC/fold-batch missions price per curation-row ~2.5–3 kT/row**, not as one integration mission) · M6.2 +9% (pre-pinning 2-for-2 post-adoption) · M6.3 −25%. Cumulative est 832 / actual ~867 ≈ **+4%** — ~2% above the charter's 700–850 planning band ceiling with one (lightest) phase remaining; P7 sizing at the cascade carries the note. New standing signal: **finding-side verification** (fold rows sourced from findings get verified against the finding's CITED surface, not the builder's changed files — the F1 class). TaskNote: P-3 nudge → **RESOLVED-ARRIVED** (`1e3e422`); M6.x → done; next gate G6→G7.

## D4 — Inbound adjudications (the queued proposal batch; all proposal-not-install, our cadence)

| # | Item (source) | REC |
|---|---------------|-----|
| a | **P-1 layer-ruling clause** (Corps M-B2: "layers are composition profiles, not graphs"; graduation trigger = distinct deployable role) | **ACCEPT** — fold one clause into `pattern_software_element_context_graph` at cascade (HQ operating law + Lab/Lighthouse precedents; answers a real recurring question). |
| b | **P-2 `source_vault` validator rule** (canonical-at-authoring; 7 live drift instances fleet-wide) | **ACCEPT-DEFERRED** — sound guard, same tool family as the checker unit; rides the **next `adna_validate` touch** (v8.5 checker window), NOT this RC (post-cut discipline). Trigger named in the fold ledger. |
| c | **P-3 + P-4 naming-clause pair** (P-3 two-tier naming rule [software-named brick · role-named+pinned-default · role-named composer · split-out triggers] + P-4 provider-forge clause; the pair queued since G3, P-3 arrived `1e3e422`) | **ACCEPT-PAIR** — fold both as naming clauses into `pattern_software_element_context_graph` at cascade (they codify practiced, operator-ruled law: ADR-014 §7 + ADR-014-A1/WebForge). |
| d | **W-2 context-dir naming ask** (topic-named vs software-named `what/context/<dir>/`) | **RULE: topic-named** — the found convention across the Keystone cohort; topic names survive graph renames (the pt-series lesson); record beside the P-3 clause at cascade. |
| e | **P-5 fork-time `webforge/` scaffold** (Slipway; extend `skill_project_fork` Step 4.5/4.6) | **ACCEPT-DEFERRED** — worthy, but couples fork-time to a provider surface; needs the optional-step/degradation design. Rides the **v8.5 skill-authoring batch** (fork-skill touch) with a design note. |
| f | **P-6 ADR-015 pattern-pointer** (ARMED — HQ-ratified ⛩C2) | **ACCEPT** — one pointer line from the pattern to HQ ADR-015 (web-surface-plane reference ruling) at cascade. |
| g | **P-7 `GIT_OPTIONAL_LOCKS=0` sandbox probe discipline** (Slipway incident-derived) | **ACCEPT** — one doctrine line in this vault's Git-Ops section at cascade; image-side rides the next release. |
| h | **P-8 light STATE-frontmatter convention** (Surface API v0; optional keys) | **ACCEPT-IN-PRINCIPLE, implementation deferred** — our STATE.md is giant-line-sensitive (M1.5); adopt at the **next STATE diet / v8.5 window** with named trigger. |
| i | **ADR-022 co-sign ask** (Operations: unattended-execution authority envelope; three valid answers offered) | **CO-SIGN-BY-MEMO at cascade** — the MAY/MUST-NOT envelope is exactly our standing law (gates human · no auto-push · escalate `#needs-human`); staged reply memo carries the co-sign + reserves the reshape-to-`pattern_*` option, trigger = our first scheduled consumer. |
| j | **`idea_state_prompt_shed_on_close`** (`proposed`; excluded from RC at §1.4 as un-ratified) | **RATIFY → `accepted`** — the M1.5 finding, practice already followed; joins the **v8.5 fold batch** (not this RC). |

## D5 — DP4 handoff — **REC: dossier ready; operator fires at convenience**

`dp4_dossier.md`: Track D READY (all components live-verified; the one residual is a by-design Venus-gated horizon, routed). §6 carries the one-paste Completion Summary + Program AAR. **Option (either is fine):** operator pastes §6 + flips `status: completed` themselves, **or** says "fire DP4" and the cascade applies §6 verbatim + the status flip. DP4 is independent of D1/D2 (may ride the same sitting).

## D6 — M6.3 flags + housekeeping — **REC: EXECUTE-ALL**

1. **`.gitleaks.toml` vendored-bundle allowlist** (the 9 triaged FPs: xterm.js tables in `.obsidian/plugins/.*/main\.js`) — one file, cascade-executable; documents the triage reason in-file.
2. **`aDNA_overview.md` re-stamp decision** (~47K, pre-v7.0 self-label, stale internal counts) → named trigger: v8.5 / doc-currency mission. No action now.
3. **M7.x retro bundle additions**: builder **surface-selection failure mode** (F1 class — verify from the finding side) · **aggregate-halt-line accounting** (M6.1: two in-band dispatches summed past the mission halt) · the P4 twin-builder item (already recorded).
4. **P7 briefs materialize on D1-GO** (M7.1 ship-verify + handoff packet · M7.2 campaign close + ops-retro per charter; sized with the +4% cumulative note).
5. Session → history at close (done in the close commit).

---

## On ratification (cascade order; push LAST)

1. Gate → `status: resolved` + `champollion_p6_gate.output.md` record (operator wording verbatim).
2. **D1 release execution** (steps (d)→(f) as specced; smoke-test record → the release session file; a red smoke row HALTS and reverts to the operator).
3. Splash/phase-table → P6 ✅ (G6 fired) · P7 ◐ + briefs live (D6.4).
4. D3 telemetry + Prometheus annotation + TaskNote refresh.
5. D4 cascade folds (a·c·d·f·g pattern/doctrine edits + i co-sign reply memo + b/e/h/j ledger dispositions w/ named triggers).
6. D6.1 `.gitleaks.toml` + D5 (if "fire DP4": §6 paste + status flip).
7. STATE ⏭ QUEUED → P7; session → history.
8. **D2 push LAST** (fetch + ls-remote truth-check + gitleaks; releases the Venus memo).
