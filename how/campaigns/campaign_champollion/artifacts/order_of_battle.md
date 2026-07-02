---
type: artifact
artifact_id: champollion_order_of_battle
title: "Operation Champollion — Order of Battle (consolidated obligations ledger)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, order_of_battle, obligations, counterparties, dp4]
---

# Order of Battle — Operation Champollion

> One durable ledger of **everything outstanding** at campaign start, each row dispositioned to a mission, a gate item, or an owner. Convention mirrors Carnot's `campaign_carnot/artifacts/order_of_battle.md`. Evidence basis: Phase-0 verification battery + three evidence lanes (2026-07-02; lane reports archived beside this file). Cross-refs: [[../campaign_champollion|charter]] · [[findings_ledger|F-CHM-*]] · [[risk_register|risks]] · [[backlog_adjudication_ledger|backlog ledger]].

## §1 Pre-discharged (verified, not re-executed)

| Item | Evidence | State |
|------|----------|-------|
| **STR terminal close** (Track C) | `campaign_adna_serious_tool_readiness.md` `status: completed` (2026-07-01) · Campaign AAR filled (Hearthstone format) · reconciliation ledger `missions/artifacts/str_resume_reconciliation_ledger.md` · graduation idea filed | **CLOSED** — commits `461a37b..4dbb77e`, local-held; do not reopen |
| Site + domain | `npx astro build` green (179 pages) · adna.network HTTP 200 · sitemap + llms.txt live | GREEN (2026-07-02 checks) |
| Validator | `adna_validate` **full pass** + `--governance` zero drift (after F-CHM-001 fix this session) | GREEN — re-run per-session |

## §2 Queued / held (owner-tagged)

| Item | Detail | Lands at |
|------|--------|----------|
| **DP4 program close** | Operator's gate. Tracks A✅ B✅ C✅; **Track D = Rosetta-owned** (axis-K + `/commons` + subnetwork showcase, recorded in-flight-inside-Track-A; Track A closed 2026-06-21 → needs terminal assessment + Venus check-in). No dossier/content list exists yet (`Completion Summary: (pending)`). | **M6.2** assembles dossier + Track-D assessment at `campaign_operation_adna/dp4_dossier.md`; operator fires DP4 |
| ADR-044 upstream fold | §7.2/§5.5 refinement → next `skill_template_release`; tracked in adr_044 + `idea_upstream_per_class_frontmatter_profiles` | **M6.1** (RC batch) |
| 2 graduation seeds (~~3rd-instance gated~~ **ALREADY 3/3**) | `skill_documentation_layout_props_additive_extension` (**3/3**, graduated cycle 107) · `skill_inline_svg_raw_import_currentColor_inheritance` (**3/3**, graduated cycle 108) — both **GRADUATED 2026-05-27** (v8 M5.3 S3; OoB said 2/3 & 1/3 — stale). **M3.2 re-derived 2026-07-02: backlog filed, G3 ratification flag — see idea files** [[idea_seed_skill_documentation_layout_props_additive_extension\|layout_props]] · [[idea_seed_skill_inline_svg_raw_import_currentcolor_inheritance\|currentColor]]) | **M3.2 ✅ re-derived + filed** → **G3 ratification** (graduation = gate work) |
| P4-installer spin-out memo | `coord_2026_07_01_rosetta_to_lighthouse_terminal_harness_p4_installer_spinout.md` staged, `ack_required: true`, no ack yet (expected — filed yesterday) | §4 ack watch |
| Held local commits | `461a37b..4dbb77e` (STR close) + this session's Phase-0 stack — **not pushed** per Git-Ops rule 3 | **G0 push decision** |
| Model-tier pattern + memos | `pattern_model_tiered_campaign_execution` (draft, instances 2/3) · staged memos to Noether + Prometheus (`status: staged`) · `idea_upstream_model_tier_mission_fields` | Release on **G0 ratification**; fold via M6.1 |

## §3 Governance integrity (#needs-human — G0 adjudication package)

| Item | Lane-2 evidence (full package: `governance_retro_package.md` beside this file) | Options at G0 |
|------|------------------------------------------------------------------|----------------|
| **ADR-045 self-ratification** | Marked `accepted` asserting "ratified via approved plan" **without** the discrete operator gate ADR-043/044 got at `cc7fc3f`; the gating session explicitly flagged it un-gated. Shipped publicly: the ADR + 4 normative docs + this vault's `git/` relocation + 2 scaffolding skills (propagates to all future forks). Fleet migration **claimed ~216 / STATE says ~208** — unreconciled. Decision judged sound; *the record* is the defect. | (a) retro-ratify as-is · **(b) amend-then-ratify (recommended)** · (c) re-gate (destabilizes an already-consumed public standard) → executes as **M1.2** |
| **`98bb488` hold override** | Operator "Local, no push" hold on the de-identified client proof was overridden by a concurrent session's push of the full 17-commit stack ~12 min before ship-approval landed (which retroactively blessed it). Pusher unattributable (all commits authored "Stanley"). Exposure judged **low** (content de-identified by design) — needs one-line operator confirmation. | Confirm exposure-accepted at G0; systemic fix ↓ |
| **Ratification-record discipline** | Draft normative text ready (Lane 2 §4): every `accepted` ADR must carry ratifier + gate/session ref + date + scope; **agents may set `proposed` only**; enforced via `adna_validate` check + `template_adr` fold; folds in `idea_upstream_template_ratification_record`. | Adopt at G0 → lands via **M1.2** + RC batch **M6.1** |

## §4 Pending acks / co-signs (external owners; pending-with-owner is an acceptable carry)

| Memo | Owner | Asked | State |
|------|-------|-------|-------|
| ADR-043 co-sign | **Hestia** (+ Lighthouse-P0, persona TBD) | co-sign node-provisioning seams (seams non-operative until landed) | OPEN since 2026-06-29 |
| Harness-strip handoff | **Oration** (R. Kennedy) | ack strip plan | OPEN since 2026-06-29 |
| III campaign handoff | **Argus** (III.aDNA) | ack Looking-Glass pattern handoff | OPEN since 2026-06-28 |
| Fleet defects (inbound) | Berthier → Rosetta | — | **RESOLVED** (embedded disposition 2026-06-29; auto-memory stale) |
| P4-installer spin-out | Lighthouse/Terminal/Harness | ack spin-out | OPEN (filed 2026-07-01, expected latency) |
| Champollion↔Carnot alignment | **Noether** | countersign §2 skeleton + joint-memo posture | STAGED (releases at G0) |
| Model-tier pattern | **Prometheus** | field-set review + joint-memo posture + corpus surface | STAGED (releases at G0; harmonized w/ Carnot D-C7) |

## §5 Security posture

| Item | State | Lands at |
|------|-------|----------|
| `SS_VERCEL_TOKEN` rotation | Operator de-prioritized (test account, E4 c159) — **G0 re-confirm**: rotate via Home.aDNA broker or re-accept; either way the **leak-in-CLI-error class** gets a mitigation (env-var + redact discipline is doctrine; sanitizer idea adjudicated in ledger) | G0 item; mitigation via M1.1 disposition + M6.3 re-verify |
| gitleaks pre-push hook | **PRESENT** (symlink verified, Lane 3) | M6.3 re-verify pre-RC |
| Token values in tree | **CLEAN** — all `SS_VERCEL_TOKEN` occurrences names-only | M6.3 re-verify |
| Public-projection sanitizer | `idea_upstream_public_projection_sanitizer` (open) | Ledger disposition → likely M1.1/M6.3 |

## §6 Backlog (full adjudication)

**91 items + 3 stale `proposed` ADRs — zero un-dispositioned.** Every item carries a draft disposition in the [[backlog_adjudication_ledger|backlog adjudication ledger]] (Lane 1, opus tier; fable review); operator ratifies at **G0**; **M1.1** executes.

**Counts**: 27 ALREADY-DISCHARGED (⚠ mostly with stale statuses — see F-CHM-012) · 31 ACCEPT→template-fold · 14 ACCEPT→immediate-fix/mission · 17 DEFER-with-owner · 2 DECLINE-stale. **Rings**: 9 Ring-1 · 34 Ring-2 · 48 post-launch.

**Top-12 Ring-1 spine** (ranked): public_projection_sanitizer · install_script flow verify · demo_gif · obsidian_payload_doc_refresh · per_class_frontmatter_profiles (ADR-044 fold) · terminal_harness_contract_reanchor+ADR-027 · platform_spec_refresh · campaign_reopen_reconciliation_protocol · custom_logo · deploy_cadence drift-guard verify · home_claude_template+router_node_vault_detection verify · plugin_trimming re-eval.

**Stale-ADR draft dispositions**: adr_003 **RATIFY** (implemented ~15 mo) · adr_012 **RATIFY** (implemented; 3 co-signers already) · adr_027 **RATIFY-WITH-REFRESH** (sound, but cites archived vaults — bundle with the reanchor fix). **Batch opportunity**: the ~11-item Hestia Production-Tidy/Spring-Clean upstream cluster is evidence-backed and template-fold-ready → one RC batch (M6.1).

## §7 Counterparty table

| Counterparty | Persona | Seam | State |
|--------------|---------|------|-------|
| LatticeProtocol.aDNA | **Noether** | Sibling campaign (Carnot, CP0-gate-pending) · joint base-layer memo · mutual conformance · "context democracy" T1 preliminary answer given | Memo staged; both campaigns gate ~simultaneously |
| Context.aDNA | **Prometheus** | Model-tier pattern + telemetry corpus (join keys per their ADR-001/011); joint practice memo w/ Carnot M2.14 | Memo staged; their EXECUTION campaign at rest — propose-only |
| Home.aDNA | **Hestia** | ADR-043 co-sign · credential broker (token rotation) · shim registry (ADR-045 shims registered?) | Co-sign OPEN; broker route at G0 |
| Network.aDNA | **Venus** | Track D coordination (commons) · DP4 terminal assessment check-in | M6.2 |
| III.aDNA | **Argus** | Looking-Glass handoff ack; III-cycle machinery reused in M3.3/M4.2 | Ack OPEN |
| Oration.aDNA | R. Kennedy | Harness-strip ack | Ack OPEN |
| Terminal/Harness/Lighthouse | Berthier/Stanley/TBD | P4-installer spin-out acks | OPEN (fresh) |
| Operations.aDNA | Berthier | Fleet-defects memo | RESOLVED |

## §8 Program feed

Champollion feeds **Operation aDNA DP4** (program close): M6.2 delivers the dossier + Track-D terminal assessment; M7.2 reports readiness. **The operator fires DP4** — never this campaign.
