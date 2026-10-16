---
type: session_prompt_index
created: 2026-10-15
updated: 2026-10-16   # G1 RULED (R11–R14); CURRENT → A2.1 (running this sitting); prior: A1.4 closed; P1 complete; CURRENT → G1 (human)
status: active
last_edited_by: agent_rosetta
tags: [arcade, session_prompts]
---
# ARCADE session prompts — the sole CURRENT pointer

[D] Chartered + ratified at the plan gate 2026-10-15 (R1–R4). A0.1 · A1.1 · A1.2 · A1.3 · A1.4 completed (A1.4 closed 2026-10-16: registry corrections derived, memo to Hestia `outbound_ready`, `sync:vaults` GO queued). P1 complete. **G1 RULED 2026-10-16** (operator, plan-time AskUserQuestion, R11–R14): `spec_graph_exchange` v0.1 + aDNA.aDNA ADR-064 + `spec_terminal_harness_contract` v0.2 + `spec_platform_ecosystem` v0.4 all **accepted as written**; three send GOs; A2.1 run in the same sitting; push at close. **CURRENT: A2.1** (below; running in `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`).

## A1.2 — Terminal contract v0.2 · platform spec v0.4 · dead-CLI sweep · ✅ DONE 2026-10-15

```text
Run from ~/aDNA/aDNA.aDNA. Read root CLAUDE.md, STATE.md ⏭ QUEUED, how/sessions/active/, who/coordination/inbox/, git status; then how/campaigns/campaign_arcade/CLAUDE.md, campaign_arcade.md §4–§5 and missions/mission_arcade_a1_2_terminal_platform_specs.md. The charter was ratified by Stanley 2026-10-15 (R3); do not ask again. G1 has NOT been ruled — author everything status: proposed. Inputs: what/specs/spec_terminal_harness_contract.md (v0.1), how/backlog/idea_terminal_harness_contract_reanchor.md (accepted rows 1–5), how/backlog/idea_default_terminal_harness_standard_touch.md (paper row 1 only), Terminal.aDNA/MANIFEST.md + what/docs/reports/cp4/00_CP4-DOCKET.md:71 (the CLI retirement ruling, read-only), what/specs/spec_graph_exchange.md (A1.1). Verify blob SHAs before claiming no-drift. Derive the dead-CLI file count with grep; strike, never delete. Open a Tier-2 session at the open; close with SITREP, five-line AAR on the card, STATE ⏭ QUEUED, CHANGELOG [Unreleased], adna_validate --governance zero drift; commit explicit paths; push only if pre-granted.
```

## A1.3 — Vauban's thirteen asks · ✅ DONE 2026-10-16

```text
Run from ~/aDNA/aDNA.aDNA. Read the two memos in who/coordination/inbox/ (vauban 10-06 ×9, 10-07 ×4). Build artifacts/p1/vauban_rulings_packet.md (13 rows: ask · object · recommendation · risk · v8.13 lane). Put the rows to the operator (AskUserQuestion if ≤4 bounded groups, else skill_create_iss). Apply accepted rows as proposed amendments to how/templates/* and what/patterns/pattern_iss_operator_gate.md; reply to Vauban outbound_ready (send on GO). Note Terminal ROADMAP row 17 in the reply. Carry the three rows A1.2 found (its card §Next Mission Inputs): (1) a pointer-spec for the Python Terminal.aDNA (none exists; spec v0.2 §7 row 3 = HORIZON); (2) re-home or re-rule the access-point threat-model trigger (only in Archive.aDNA/TerminalGo.aDNA/how/backlog/); (3) the CP4-1 'aDNA 19' count did not reproduce here (6 live-routing files) — a correction for z1's AAR.
```

## A1.4 — Registry truth (Exchange · Terminal) · ✅ DONE 2026-10-16

```text
Run from ~/aDNA/aDNA.aDNA. Read root CLAUDE.md, STATE.md ⏭ QUEUED (c), how/sessions/active/, who/coordination/inbox/, who/coordination/ and git status (open reads); then how/campaigns/campaign_arcade/CLAUDE.md and missions/mission_arcade_a1_4_registry_truth.md. G1 is NOT ruled — everything proposed. Derive two corrected registry rows from Exchange.aDNA and Terminal.aDNA STATE/MANIFEST (read-only); write artifacts/p1/registry_corrections_exchange_terminal.md; memo to Hestia (names-only, ADR-052 §admission; asks the inventory write only); queue the sync:vaults GO in STATE §Pending Manual Actions; when it runs, append the GARNIER DP3 disposition item.
```

## G1 — P1 exit (human) · ✅ RULED 2026-10-16 (R11 sign all four · R12 three send GOs, cc as staged · R13 A2.1 now · R14 push at close)

Was owed by the operator, in any order: §7.7 on `what/specs/spec_graph_exchange.md` v0.1 · aDNA.aDNA ADR-064 · `what/specs/spec_terminal_harness_contract.md` v0.2 · `what/specs/spec_platform_ecosystem.md` v0.4; send GOs for the Berthier/triad reply (10-15), the Hestia registry memo (10-16; cc strikeable), the Panacea re-pin notice (after the signatures). Then `sync:vaults` after Hestia's write (its own GO; DP3 item (j) at that sitting). The A2.1 prompt is written here when G1 is ruled.

## A2.1 — ADR-065: the standard's position under the two-estate model · ▶ RUNNING 2026-10-16

```text
Run from ~/aDNA/aDNA.aDNA. Read root CLAUDE.md, STATE.md ⏭ QUEUED (d), how/sessions/active/, who/coordination/inbox/, who/coordination/ and git status (open reads); then how/campaigns/campaign_arcade/CLAUDE.md and missions/mission_arcade_a2_1_adr_065_estate_position.md. G1 is RULED (2026-10-16, R11–R14) — ADR-064 + the three specs are accepted; ADR-065 is authored `status: proposed` with an empty §7.7 (G2). Premise pass first, read-only at HEAD: aDNALabs.aDNA/who/governance/adr_027_two_estates_lab_and_company.md §2 (+A1) + §3 v3 · AILedger.aDNA/who/governance/adr_008_ailedger_adna_is_the_core_graph.md §1/§6 + VISION.md · Exchange.aDNA/what/decisions/adr_058_* · adr_059_* · adr_062_* · artifacts/p0/situation_review_20261015.md §C. Write what/decisions/adr_065_standard_position_two_estates.md on the operator's R1 reading (standard MIT + lab-owned; AILedger, PBC = commercial home AND economic platform; ecosystem = partner/dog-fooding/usage; aDNALabs = lab estate, not HQ): the four relations (access points · commercial home · first profile · public way) + the economic-platform seam, the graph-product minimum by reference to spec_graph_exchange §3, what the standard never carries (prices · settlement · PHI · a hosted service); every ADR number vault-qualified by hand; every product claim tense-labelled. Three name-free glossary entries (access point · commercial home · graph product) + one pattern_federation_readiness cross-link. Private-side only (R2) — site/ untouched. Close the card with the five-line AAR; adr_index tally derived; CURRENT → A2.2; STATE ⏭ (e); CHANGELOG; validator zero drift; explicit-path commit; push per R14.
```

Later prompts are authored at each gate from the mission cards (A2.1 → A5.2).
