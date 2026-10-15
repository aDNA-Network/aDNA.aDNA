---
type: artifact
artifact_class: situation_review
campaign_id: campaign_arcade
mission_id: mission_arcade_a0_1_situation_review
title: "Situation review — the standard against its four unwritten relations (2026-10-15)"
created: 2026-10-15
updated: 2026-10-15
status: active
last_edited_by: agent_rosetta
probe_date: 2026-10-15
tags: [artifact, arcade, situation_review, finding_register, exchange, terminal, ailedger, lister]
---

# Situation review — 2026-10-15

> **Method.** Three read-only explorer passes at plan time (Exchange/Terminal · AILedger + estates · the aDNA-Medical trail), each fanned over the fleet; every load-bearing `[R]` claim was then **re-verified at its object** by this desk before entering this register (the `feedback_verify_at_the_object` lesson: prior-session findings keep coming back false). Tags: `[D]` observed first-hand · `[I]` inferred · `[R]` peer record, re-verified · `[A]` assumption. Vault-qualified ADR numbers throughout.

## 0. This vault at the open

- [D] Branch `vitrine/design`, HEAD `8f6516c` (2026-10-04); eleven idle days; `how/sessions/active/` empty; ten untracked inbox memos (receipted `409293c`). Standard v2.5; image v8.12 (2026-10-04); ADR index 58 = 56 accepted · 1 amended · 1 proposed (ADR-063).
- [D] `grep -rn -i exchange what/specs/*.md what/patterns/*.md what/docs/adna_standard.md` → no spec, pattern or standard section names the Exchange (two incidental pattern mentions of unrelated "exchange" words). `what/specs/spec_graph_exchange.md` absent.
- [D] Workspace router `~/aDNA/CLAUDE.md` changed on disk during the sitting (Hestia's compaction, `workspace_router_history.md` §S50-1); taken as current.

## A. The access points

### A1. Exchange.aDNA — Registry · Commons · Market

| # | Finding | Tag | Object |
|---|---|---|---|
| A1.1 | Runtime `adna_exchange` 0.0.44 on `:8791`; root of record = the `.5` machine (`graph_forge_l1`, Exchange ADR-044); L1 = dev harness; Tier-0 complete 2026-07-17; ADOPT posture since 2026-09-17 (Exchange ADR-048) | [R] | `Exchange.aDNA/STATE.md` |
| A1.2 | Active campaigns: `campaign_operation_emporion` (three consumer faces — Terminal berth v0.2 · City Port · **the aiLedger face**) · `campaign_devnet_wave1` | [R] | `Exchange.aDNA/how/campaigns/` |
| A1.3 | Launch gates are operator/peer acts, not the standard's: Rung 1 held by operator ruling · Venus's per-instance rows · SR-6 + counsel · Exchange ADR-057 honest catalog cards (13 anonymous demo cards on `.5`, Jake's desk per card) · unsigned checkpoints (no log key) · Exchange ADR-058 anchor act (Jake's repo + token; Home brokers) · review gate unarmed (`did:lattice:person:stanley`) · no fleet vault has fetched a graph (CF-D1) | [R] | Exchange `STATE.md`, ADR-059 §4 |
| A1.4 | The economics already point at the company: Exchange ADR-058 (checkpoints **anchored** on the AILedger record as a *witness*, never "on the ledger") · ADR-059 A1 (aiLedger Exchange = default face over N branding manifests) · ADR-062 (storefront = branding manifest + catalog scope) · ADR-045/047 (settlement *recorded*, "there is still NO payment rail") · Tier-1 DLT settlement designed, LIP-gated | [R] | `Exchange.aDNA/what/decisions/adr_05[7-9]*.md`, `adr_062*.md` |
| A1.5 | **Owed by this desk, verified:** `what/specs/spec_graph_exchange.md` does not exist; `coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement.md` still `status: draft` (its `refit_disposition` trigger expired 2026-07-24, F-S249-03 theirs); aDNALabs **ratified all three rulings as drafted 2026-08-25** (`coord_2026_08_25_berthier_to_rosetta_adr020_placement_RATIFIED.md`, delivered 08-26 operator-sanctioned); the 08-03 courtesy ETA ask unanswered; the Exchange triad's 07-11 ask (three proposals) `ack_required: true`, never acked | [D] | the four memos in `who/coordination/` |
| A1.6 | Exchange's L2 structural rule-set is `RULE_SET_VERSION = "v0-proposed"` — "PROVISIONAL, Exchange-proposed pending Rosetta (ADR-020 D4)"; non-blocking by law; scope `("context-graph",)` | [D] | `Exchange.aDNA/what/exchange/src/adna_exchange/conformance.py:34-39` |
| A1.7 | The wire objects the standard must cite, not copy: `adna-manifest/v0` (`spec_manifest_schema_v0.md`, ratified, updated 2026-10-08 for the optional `display` block, Exchange ADR-064) · `exchange-access/v1` (`spec_exchange_access_contract_v0.md`, ratified, updated 2026-10-10) · the M-S6 publish-path spec at `aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/spec_exchange_publish_path_v0.md` (v0.1.0, accepted 2026-07-03, last commit `fd04532e`) | [D] | the three files |
| A1.8 | adna.network registry rows for Exchange + Terminal: `status: genesis`, `last_synced: 2026-08-29` | [D] | `site/src/data/vaults.json:1461,1488,1995` |
| A1.9 | ADR-number collisions: Exchange ADR-045 (Market access) / 052 (principal registry) / 062 (storefronts) ≠ aDNA.aDNA ADR-045 (wrapper placement) / 052 (registry admission) / 062 (LinkML) | [D] | both `what/decisions/` |

### A2. Terminal.aDNA — the operator console

| # | Finding | Tag | Object |
|---|---|---|---|
| A2.1 | Python/Textual rewrite: `terminald` (per-node daemon) + `adnaterm` (app + CLI) + `terminal-mcp`; ACP hosts local agents · A2A v1.0 links graphs · MCP carries tools (Terminal ADR-B09). Go console archived 2026-10-06 → `Archive.aDNA/TerminalGo.aDNA` | [R] | `Terminal.aDNA/MANIFEST.md`, router row |
| A2.2 | Campaign Enceinte active: e1–e4 done (e4 Glacis closed 2026-10-15); **e5 Faubourg next; e6 Drawbridge = launch** (alpha, 4-week clock → beta on 3–5 nodes → public kit → `master` merge = operator's act; bar: 14 days without the Go console). "Nothing internal blocks e5" | [R] | `Terminal.aDNA/STATE.md` |
| A2.3 | Standard dependence is structural: finds a graph by the nearest dir holding both `CLAUDE.md` + `MANIFEST.md`; does not parse STATE/MANIFEST frontmatter; schemas are LinkML masters under aDNA.aDNA ADR-062 (Terminal ADR-B10); ⚒ Build wizard calls `skill_project_fork.md`; `exchange.publish` deliberately unbuilt (publishing is a human act, Terminal B7) | [R] | Terminal `lunette/cli.py:45`, `lattice/cli.py:41` |
| A2.4 | **The `aDNA` / `lattice` CLI was retired 2026-10-06** (ruling CP4-1(b)); ~30 graphs still name it in prose, this vault among them | [R] | `Terminal.aDNA/what/docs/reports/cp4/00_CP4-DOCKET.md:71` — count here derived at A1.2 |
| A2.5 | `what/specs/spec_terminal_harness_contract.md` is v0.1 (2026-05-25, LatticeTerminal era); `idea_terminal_harness_contract_reanchor` (accepted) names five stale spots; `idea_default_terminal_harness_standard_touch` deferred (paper row allowed) | [D] | the spec + two backlog files |
| A2.6 | **Unanswered Vauban asks:** 10-06 (nine Bastide conventions; inbox copy `status: staged` while Terminal's STATE records delivery 10-06 10:27:51) · 10-07 (four boundary-AAR template asks, `delivered 2026-10-08 04:38:16`) | [D] | `who/coordination/inbox/coord_2026_10_0[67]_vauban_*.md` |
| A2.7 | Seam: discover · resolve · fetch · acquire live on the Terminal berth; publish / sync / auth reads = Terminal v1.2 (roadmap rows 61–64); both products cite the missing `spec_graph_exchange.md` | [R] | Terminal ROADMAP; Exchange `spec_berth_terminal_v0.md` |

## B. aDNA-Medical — Operation Lister

| # | Finding | Tag | Object |
|---|---|---|---|
| B1 | **It exists.** `campaign_adna_medical` (codename Operation Lister), owner Jake (executor agent_lannes), requested by Stanley on the 2026-10-08 call; `status: active`, **Phase 1 complete (M1 + M2), HELD AT GATE 1 (Jake + Stanley)** | [D] | `~/aDNA/scratchpad/genesis/ailedger_qm_wt/how/campaigns/campaign_adna_medical/campaign_adna_medical.md` (worktree, branch `stanley/quatre-mains-m00`, HEAD `4629dc9`) |
| B2 | Not on the local `AILedger.aDNA` clone (`main` `93d77e1`, 229 behind `forge/main`); nothing named aDNA-Medical in aDNA.aDNA | [D] | `git -C AILedger.aDNA log`; `grep -ril` |
| B3 | Charter: R1–R9 (R7 ledger-verifiable identity); 7 missions / 3 phases / 3 human gates; D1 placement **open — Stanley's input** (default: build in the company graph, publish to aDNA.aDNA as an official profile at release); D4 partner-only until the patent check | [D] | charter §3, §5, §9 |
| B4 | Jake's ten Gate-1 defaults G1–G10; the operator's reply **drafted and ruled "post as drafted" 2026-10-10** (accepts 1,2,3,5,6,7,10; G4 strict — hosted models never see PHI; G9 Stanley + Jake sign Gate 2, Anna reviewer) — **no record it was posted**; Fluxer `operator_actions.md` A12 still open | [R] | `scratchpad/genesis/lab_side/post_s115_lister_gate1_reply.md`; `Fluxer.aDNA/who/governance/operator_actions.md` |
| B5 | `adna_medical_spec.md` v0.1.0-draft, 730 lines: a `medical` conformance level stacked on Starter · N=4 governance files · ≤20k-token core · `data_class` (public · internal · confidential · phi) · PHI only in git-ignored `data/` · no-egress default · audit trail · 12-threat model · "designed for review under" HIPAA, never "compliant" · HITL rule · §10 add-back module interface · **§11 deterministic sha256 hash manifest** · V1–V14 checks · §16 eleven Gate-1 questions; pinned to aDNA.aDNA `27ccafc4`, standard 2.5, base `fd32fc7` (v8.9) | [D] | `…/artifacts/adna_medical_spec.md` |
| B6 | `disposition_ledger.md`: 258 items → 100 CORE / 112 MODULE / 46 DROP; ten add-back modules (`backlog` · `campaigns` · `pipelines` · `knowledge_tooling` · `lifecycle` · `obsidian_ui` · `multi_agent` · `publish` · `network` · `federation_registry`) | [D] | `…/artifacts/disposition_ledger.md` |
| B7 | **`upstream_candidates.md` U1–U25 — proposals for this standard.** Top: U23 conformance profiles + hash-manifest seam · U15 `who/coordination/` optional at Starter · U19 base `data_class` · U13 six "tier" ladders share one word · U14 validator/schema lag · U18 purge carve-out from archive-never-delete · U25 CLAUDE.md always-loaded ~6.5k tok. U2 · U9 · U14 coincide with the primer's I-rows and ADR-063 | [D] | `…/artifacts/upstream_candidates.md` |
| B8 | **The standard has no profile / subset / data-tier / sanitization / ledger concept**; "profile" = §7.2 per-class frontmatter only. Hooks that exist: §5.5 levels + `adna_conformance:` · §7.6 · §19 · §15.4 · §7.7; aDNA.aDNA ADR-008 airlock stub · ADR-024/026 streamline + ledger observation (`III.aDNA/what/artifacts/iii_airlock_standard_spec.md`) · ADR-037 §4 / Network ADR-016 §8 data-bearing · `doctrine_credential_handling.md` PHI → `local` lane (proposed) | [D] | `what/docs/adna_standard.md` §5.5 (lines 515–562) |
| B9 | Schema side already moving: LinkML.aDNA `what/profile/adna_profile_v0_1.yaml` (accepted; imports base, redefines nothing) + proposed `compliance_slots.md` (`data_tier` · `data_posture` · `consent_basis` · `rbac_role` · `compliance_regime` · `minors_material_present`); LatticeProtocol `lattice_core.linkml.yaml` `DataTier` enum (0.2.0-proposed, at `what/schemas/` per Noether 10-10) | [R] | the three files |
| B10 | Adjacent doctrine the profile composes: UHSingapore GREEN/AMBER/RED + safe-Claude + PoFI · WilhelmAI T0–T3 + blind runner · Harness ADR-006/007/009/013 · RemoteControl airlock DOCTRINE §5/§6/§8/§9/§11/§12 · Inference ADR-010 cl. 3 · AILedger `iceberg_privacy_model_v0.md` (three airlocks) | [R] | listed vaults |

## C. AILedger and the estate model

| # | Finding | Tag | Object |
|---|---|---|---|
| C1 | AILedger ADR-008 **accepted** (both founders 2026-10-05; Jake re-ratified 10-07): "AILedger.aDNA is the core graph … AILedger, PBC is its core entity and the commercial home of the AI Ledger, the Lattice Protocol, the aDNA standard and the network" — §1 steward, not owner; §6 the core graph never takes the openness of the standard or the lab's science | [D] | `ailedger_qm_wt/who/governance/adr_008_*.md` |
| C2 | aDNALabs ADR-027 **accepted** (§2 10-01, A1 10-06, §3 v3 both founders): Standard = Lab (open, MIT) · Company = commercial home and steward, not owner; Network = Lab (operation and law) · Company (commercial home); the lab keeps the readiness standard + validator; cross-estate writes = memos/PRs/cargo | [R] | `aDNALabs.aDNA/who/governance/adr_027_two_estates_lab_and_company.md` |
| C3 | **Contradictions with the operator's 10-15 framing**, all on the record: aDNALabs still `node_role: adna_network_org_hq` and "HQ" in AILedger's own CLAUDE.md + Home router · ADR-027 puts standard + network in the lab estate and never says partner/dog-fooding ecosystem · AILedger ADR-011 (proposed) = a vertical service ($60k + $25k/mo), not a platform · AILedger `VISION.md`: "aDNA is not a platform. There is no hosted service." · **zero** hits for "Shopify" / "economic platform" anywhere | [R] | the files named |
| C4 | **The company graph is off every public face:** Hestia B7 ruling `never` (10-06) · the primer scrubs the name · AILedger's own memo to this desk `coord_2026_10_04_berthier_ailedger_to_rosetta_standard_stays_open.md` is **`status: staged`** — "Rosetta's memo HELD: aDNA.aDNA's carrier measured PUBLIC" (its one ask: does aDNA.aDNA carry a pointer to ADR-008, and who declares the LinkML licence) | [D] | `ailedger_qm_wt/who/coordination/…standard_stays_open.md` |
| C5 | "Partners with Jake" is consistent with the record (AILedger ADR-005 Founding Partners · ADR-010 titles · ADR-027 §3 v3 "partnership, not licence") | [R] | — |
| C6 | Where AILedger already reaches toward the standard: Lister M7 (upstream AAR) · P2 docket B3 (A2A envelope → `adna/base` via Rosetta at P3) · the 14 aDNA.aDNA campaigns in its genesis register · the lite paper's "aDNA is an open standard, not a product" | [R] | `campaign_ailedger_genesis/`, `litepaper.md` v0.5 |

## D. What follows (the campaign's spine)

1. The four relations are not written anywhere the standard's own readers would find them → one spec (A1.1), two refreshed specs (A1.2), two ADRs (A2.1, A3.2).
2. The company's economics and Lister's profile both reach *into* the standard at exactly two seams: the publishable-graph minimum (spec §3) and the profile + hash-manifest seam (ADR-066 / U23). Both are additive; neither moves the MIT boundary (R1).
3. Nothing public changes until "publication" (R2); every public claim is tense-labelled (rule 4).
4. GARNIER is not re-planned; it is amended at its own gate (A5.1 at DP3).
