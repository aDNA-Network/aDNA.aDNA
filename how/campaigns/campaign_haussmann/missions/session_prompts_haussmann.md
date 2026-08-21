---
type: artifact
artifact_type: session_prompt_index
campaign_id: campaign_haussmann
title: "HAUSSMANN session opening prompts — paste-ready, one per mission"
created: 2026-08-16
updated: 2026-08-20
status: active
last_edited_by: agent_rosetta
tags: [haussmann, session_prompts, missions]
---

# Session opening prompts (paste-ready)

> **Precondition for EVERY prompt below**: the charter (`campaign_haussmann.md`) must read ratified
> (§7.7 `accepted`, `status: active`) — if it still reads `planning`/`proposed`, executing any mission is
> a gate violation: report and halt. The universal preamble is baked into each prompt: the mission file
> carries the full spec (including its halt conditions — they bind even where a prompt row compresses
> them); the campaign CLAUDE.md carries the standing conventions + the path/notation/output contracts;
> `grounded_in` evidence is **re-verified on disk at execution** (the genesis evidence ages). Every
> session: Tier-1 session file first; explicit-path git staging; AAR before `completed`. Decade-2 prompts
> (P3–P5) additionally require the P2.6 re-plan ratification (DP6) — **ratified 2026-08-19; Decade 2 is open.**

> **⚠ THIS TABLE IS IN MISSION-NUMBER ORDER, WHICH IS NO LONGER EXECUTION ORDER.** Since ⛩ DP6
> (2026-08-19), **phase order is not claim order.** Decade 2 runs:
>
> > **P4.5a → P3.5 → P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5b → P5.1 → P5.2**
>
> Reading down this table and claiming the next open row would start the decade on **P3.1** — the wrong
> mission. Two departures, both operator-ruled: **P4.5a runs first in the whole decade** (⊳ D-A — an S2
> homepage self-contradiction outranks the ordering convention) and **P3.5 runs first within P3** (D9 is
> the one dimension nine missions never moved, and its repair is small and high-leverage). Decade-1
> leftovers stay open independently of that sequence: **P0.4** (Aspasia's ack) and **P2.6**
> (`in_progress` behind ⛩ O0b, the operator-gated TTFS run).
>
> *(This warning exists because the index was last updated 2026-08-16 and still carried a P4.5 row reading
> "deliberately last" — the instruction DP6 had reversed. An index believed over the artifact it points at
> is §1.8's own finding, and it has now recurred twice in this campaign.)*

| Mission | Paste this |
|---|---|
| **P0.1** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `how/campaigns/campaign_haussmann/missions/mission_haussmann_p0_1_positioning.md` — read it cold with the campaign `CLAUDE.md`, run O0–O2 autonomously, halt at O3 with the candidates memo for my pick. Do not touch site/ before O3 ratifies. |
| **P0.2** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p0_2_deploy_hardening.md` (campaign_haussmann). Diagnose the live header drift on preview deploys only; halt before any production deploy for my GO. Token via env-var only; record every deploy ID. |
| **P0.3** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p0_3_webforge_intake.md` end-to-end in one session: wrapper + vault-manifest pin + staged §3 ask to Vitruvius + the craft-floor graduation ruling. WebForge is read-only. |
| **P0.4** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p0_4_flux_state_recon.md`. Confirm memo delivery with me at O0; escalate if delivery stalls. Never touch the Fluxer instance itself. |
| **P0.5** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p0_5_editorial_gate.md`. Detection only — no copy fixes; every new check red-tested; today's 8 FALSE claims must FAIL the gate (xfail-until-P1.1 with expiry). |
| **P1.1** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p1_1_claim_purge.md`. O0 disposition memo first, halt for my per-row channel elections (ship vs stop-claiming); GitHub actions need my GO. Claims only move down. |
| **P1.2** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p1_2_state_of_network.md`. Halt at O1 for consent on named people/institutions. Every new sentence gets a claim-register row. |
| **P1.3** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p1_3_registry_truth.md`. Projection/template code only — never edit vaults.json data (honor pt19; data asks go to Hestia). Halt at O3 for the DP4 confidential-vault ruling. |
| **P1.4** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p1_4_mobile_integrity.md`. View the cited PNGs first (F1/F2/F3/F12); layout fixes only; re-capture everything you touch; red-test the new reflow gate. |
| **P2.1** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_1_url_normalization.md`. Every URL change ships with its 301 + its gate update in the same commit. Run the Wayback CDX sweep before designing the map. |
| **P2.2** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_2_ia_consolidation.md` (needs ADR-048 ratified). Spike comps at O1, halt for my pick. Content is re-homed, never deleted. |
| **P2.3** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_3_docs_freshness.md`. Changelog backfill uses register-verifiable facts only. Red-test the link gate. |
| **P2.4** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_4_registry_redesign.md` (needs P1.3 landed). Complete ADR-052, spike at O1, halt for my pick. Tiers derive from data, never narrated. |
| **P2.5** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_5_onboarding_paths.md` (needs ADR-048). Halt at O0 for the zero-install-path pick; the TTFS run needs a clean machine — coordinate with me at O2. |
| **P2.6** | You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p2_6_midscore.md` — the Decade-2 activation gate. Fresh isolated scorers, same protocol as baseline; halt at DP6 with the re-plan. |
| **P3.1** | ✅ **COMPLETE 2026-08-21** *(kept for the record; scope corrected at O0 — twins are THREE tiers, not collections-only)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p3_1_md_twins.md`. Twins derive from the same single-source content as HTML; fix the old .md link targets to the new twins. |
| **P3.2** | **⬅ NEXT** *(post-DP6; scope SHRANK — Organization+sameAs already shipped unremarked at P1.2, so what remains is Dataset on the registry, the versioned JSON endpoint, schema-dts, and the three zero-JSON-LD pages)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p3_2_registry_json.md`. The endpoint serves the sanitized projection only; versioned URL; honest-absent nulls. |
| **P3.3** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p3_3_mcp_server.md` (needs P3.1+P3.2). Halt at O2 for the npm-publish GO. The self-conformance sentence must pass the editorial gate. |
| **P3.4** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p3_4_flux_integration.md`. Verify the prerequisite checklist live at O0; halt at DP7 for GO/NO-GO. The honest no-link fallback is an acceptable end-state. |
| **P3.5** | ✅ **COMPLETE 2026-08-20** *(kept for the record)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p3_5_proposal_process.md`. Halt at O0 for ADR-055 ratification; proposal #1 must traverse real states. |
| **P4.1** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p4_1_token_pipeline.md`. Halt at DP8 (ADR-053 visual-voice ruling) before building. Every aesthetic choice carries its a11y consequence. |
| **P4.2** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p4_2_craft_floor.md` (needs P4.1). Coverage anchors must be grep-verifiable; gaps are honest rows, not omissions. |
| **P4.3** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p4_3_a11y_manual.md`. Schedule my VoiceOver session at O2. Assertions test semantics, not pixels. |
| **P4.4** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p4_4_ci_hardening.md`. Baselines generate IN the CI container; red-test with a deliberate diff; I'll enable Speed Insights at O1. |
| **P4.5a** | ✅ **COMPLETE 2026-08-20** You are Rosetta in ~/aDNA/aDNA.aDNA. Execute the **P4.5a** section of `mission_haussmann_p4_5_voice_rewrite.md` — the copy increment (⛩ DP6 ⊳ D-A). Rows **R-120 · R-125 · R-111 · R-121**; **R-124 is deferred — do not fix it with copy.** Cut *"Lattice Protocol"* from all four `HomeHero` surfaces with term-free phrasing; **invert gate-23, never delete it** (its second half guards R-14). Red-prove every assertion. |
| **P4.5b** | *(LAST)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute the **P4.5b** section of `mission_haussmann_p4_5_voice_rewrite.md` — deliberately last. Halt at O0 for voice-guide sign-off. Claims never round up during rewrite. |
| **P5.1** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p5_1_human_evidence.md`. O0 hands me the recruitment brief — humans only from here; no coaching, no defending. |
| **P5.2** | *(post-DP6)* You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_p5_2_rescore_capstone.md`. Full evidence refresh, isolated scorers, capstone ranker, launch checklist; halt at O3/O4 (DP9). |
