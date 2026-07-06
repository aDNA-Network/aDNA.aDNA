---
campaign_id: campaign_meridian
type: campaign
title: "Operation Meridian — Concord follow-up drain + tri-surface review→improve + adna.network go-live"
owner: stanley
status: completed
phase_count: 5
mission_count: 12
estimated_sessions: "12-16"
calibrated_sessions: "10-13"
estimation_class: governance-broad
priority: high
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
governance_doctrine: v8.4
tags: [campaign, meridian, concord_followup, review_improve, website, deploy]
---

# Campaign: Operation Meridian

> **Working name** "Meridian" — the reference line everything is brought back into alignment with, and the
> point of culmination a body passes at its highest. This campaign brings three surfaces back to true:
> the **campaign layer** (Concord's follow-up register), the **vault/graph/repo**, and the **adna.network
> website** (15 days behind its own repo at charter time). Operator may rename at any gate.

## Goal

Drain Operation Concord's post-campaign follow-up register, run a bounded-comprehensive review across the
campaign layer / vault-graph / website, execute the operator-ratified improvement set, and close the
15-day production-deploy gap — one deploy ships the accumulated Champollion + Looking Glass + Meridian
improvements to adna.network, verified live. The world at completion: no orphaned Concord residue, a
current vault with zero governance drift, a curated v8.6 release-candidate queue, and a live site that
faithfully mirrors the repo.

## Context

Triggered by the operator directive 2026-07-06: *"continue the campaign … review the campaign and
graph/repo/adna.network website for any ways they could be improved and carefully/comprehensively make
those improvements part of our campaign here."* Operation Concord ([[../campaign_w4_governance_doctrine/campaign_w4_governance_doctrine|campaign_w4_governance_doctrine]])
is terminal (`completed` 2026-07-06, do-not-reopen); what continues is its **follow-up register**
([[../campaign_w4_governance_doctrine/artifacts/p2_adoption_ledger|ledger]] §Post-campaign-follow-up).
Exploration (3 recon agents, 2026-07-06) found: 2 Wilhelm memos unwritten; count-drift in 4 sibling
vaults; live adna.network still at its 2026-06-21 launch state with all subsequent site work committed,
gates-green (304/304) and undeployed; `install_truth.json` 26 days stale; a documented v8.6 queue
([[../campaign_champollion/artifacts/handoff_packet_v8_4|Champollion handoff §3]]) needing reconciliation
against the v8.5 ship record. Plan of record: `~/.claude/plans/please-read-the-claude-md-smooth-rossum.md`
(operator-approved 2026-07-06).

## Scope

### In Scope

- Concord follow-up register drain: 2 Wilhelm coordination memos (SO#3 co-sign, ack_required), `template_ratification_record` local mirror, count-drift hygiene ×4 sibling vaults, watch-register entries, stale-session archive.
- Bounded-comprehensive review sweep over three surfaces (campaign residue · vault/graph/repo · website), findings ledger with rank→bound→fix-side→escalate/defer disposition.
- v8.6 queue reconciliation → curated RC **document** (release itself stays operator-fired post-campaign).
- DP1-ratified vault + site improvement sets; A-11 + A-12 (pre-approved at Looking Glass DP3); A-06 as a boxed severable pre-render spike.
- Site data regen (`install_truth.json`, `vaults.json`), gates + build certification, **production deploy** (DP2-gated) + post-deploy verifies (A-07 CLS, A-09 best-practices).

### Out of Scope

- Re-opening Concord / Champollion / Looking Glass (all terminal; ledger references are append-only).
- Firing `skill_template_release` (v8.6 ships at a post-campaign operator gate).
- ScienceStanley adoption (diverged, owner-gated) + genesis-trio adoption (Context·Warp·RemoteControl adopt at graduation, SO#6) — **watch entries only**.
- III.aDNA `campaign_h` graduation (Argus's lane; handoff memo already staged 2026-06-28).
- Held-backlog pushes in other vaults (DP3 offer at close; default hold).
- Modifying `.adna/` (Workspace Rule 1) or `lattice-labs/` (reader-only-historical).

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| Concord follow-up register (post-campaign, [[../campaign_w4_governance_doctrine/artifacts/p2_adoption_ledger|ledger]]) | owned, undrained | M1 (memos + mirror + watches), M2 (count-drift ×4), M11 (DP3 push offer) |
| `idea_upstream_template_ratification_record` | accepted | M1 |
| Looking Glass follow-ons: A-11, A-12 (approved DP3), A-06 (`idea_vaults_graph_ssr`, deferred), A-04 regen, A-07/A-09 post-deploy verifies, deploy go-live | staged/deferred | M7, M8, M9, M10 |
| Champollion handoff §3 v8.6 queue | needs reconciliation vs v8.5 ship | M5 |

## Phases & Missions

### Phase 0: Charter

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M0 | Charter + scaffold + hygiene quickies (stale-session archive, `adna_validate --governance` baseline, DP0 record) | fable | 35 | 1 | — | completed |

**Phase exit gate**: charter committed; baseline recorded; DP0 resolved. *(Satisfied by plan approval 2026-07-06 — plan approval = charter authorization.)*

### Phase 1: Drain + Survey (parallel lanes)

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M1 | Concord residue: 2 Wilhelm coord memos + `template_ratification_record` mirror + watch entries | sonnet | 45 | 1 | M0 | completed |
| M2 | Count-drift hygiene ×4 sibling vaults (ContextCommons · Network · Oration · ZenZachary) | opus | 70 | 1–2 | M0, DP0 | completed |
| M3 | Review sweep A — campaign residue + vault/graph/repo | opus | 90 | 1 | M0 | completed |
| M4 | Review sweep B — website lane | opus | 90 | 1 | M0 | completed |
| M5 | v8.6 queue reconciliation + RC doc (DP1-independent; early-start permitted) | opus | 110 | 1–2 | M0 | completed |

**Phase exit gate**: drain complete + findings ledger populated → **DP1** (operator ratifies bounded improvement set).

### Phase 2: Vault/graph improvements

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M6 | Vault currency fixes — DP1-ratified bounded set | opus | 70 | 1–2 | M3, DP1 | completed |

**Phase exit gate**: `adna_validate --governance` zero NEW drift vs M0 baseline; v8.6 RC doc complete.

### Phase 3: Website + deploy

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M7 | Data regen (`.adna` v8.5-parity check → `sync:install` + `sync:vaults`) + A-11 + A-12 + ratified small site items | opus | 60 | 1 | M4, DP1 | completed |
| M8 | A-06 graph pre-render spike (**boxed 70 kT, severable**) — authoring-time static SVG, Clause-A fallback | opus | 70 box | 1–2 | M7 | completed |
| M9 | Gates re-verify (`test:gates:fast` → `audit:p1s3` separate) + gate extensions + **live-prod baseline capture** + production build + artifact spot-check | opus | 60 | 1 | M7, M8 (or severed) | completed |
| M10 | **DP2 GO** → `vercel --prebuilt --prod` (token env-only, redacted) → live smoke + A-07 CLS ≤ baseline + A-09 ≥ 92 | opus | 50 | 1 | M9, DP2 | completed |

**Phase exit gate**: deployed + post-deploy verifies logged (or DP2 = hold, with evidence pack filed).

### Phase 4: Close

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M11 | Campaign AAR + SITREP splash + STATE/memory updates + `skill_verification_handoff` + **DP3** push authorization | fable | 45 | 1 | all | completed |

**Phase exit gate**: campaign `completed`; DP3 record; final clean tree.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| DP0 | Charter | Cross-vault fix mode for the 4 count-drift vaults | **RESOLVED 2026-07-06** — operator (AskUserQuestion): **direct-by-default, memo fallback if target mid-edit** (Concord DP1 Option C precedent); pushes held for DP3 |
| DP1 | Phase 1 exit | Ratify bounded improvement set (vault set → M6, site set → M7, long-tail A-item re-entries); cap S/M effort, L items called out explicitly (A-06 pre-called as M8) | **RESOLVED 2026-07-06** — full 14-item set ratified; Oration PII (F-MER-A8) = tip-strip now, history-scrub deferred to Oration's lane ([[artifacts/findings_ledger|ledger]] §DP1) |
| DP2 | Pre-M10 | Deploy go-live + content: (a) deploy incl. A-06 if green · (b) deploy without A-06, re-defer · (c) hold (gates regression only) | **RESOLVED 2026-07-06 — GO (option a)**: deploy the certified frozen build incl. A-06 (operator, AskUserQuestion; evidence pack = [[missions/mission_meridian_m9_certification|M9]] 195+118 green + [[artifacts/live_baseline_20260706|baseline]]) |
| DP3 | Close | Pushes: aDNA.aDNA origin (recommended yes) · 4 count-drift vault commits (per-vault) · held backlogs aDNALabs 66 / Network 37 / WebForge 15 / Operations 84 (default **hold**) | **RESOLVED 2026-07-06 — Push set A** (operator): push aDNA.aDNA + ContextCommons + Oration (incl. PII strip) + ZenZachary; **HOLD** Network (SO-9, rides its held backlog) + all long-held backlogs |

Also pre-resolved at charter (operator, 2026-07-06, AskUserQuestion): **deploy go-live IN SCOPE** (DP2-gated) · **review depth = bounded-comprehensive sweep** (not a fresh III decade).

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Concurrent-agent / shared-tree git indiscipline (Mode B subagents) | High | Only the orchestrator runs git in aDNA.aDNA; subagents write files only. One write-mission per vault; explicit-path staging + `STAGED == expected` guard; per-mission commit scope |
| VERCEL_TOKEN leakage into transcripts/SITREPs/AARs | High (low likelihood) | Token env-only (`VERCEL_TOKEN=$SS_VERCEL_TOKEN`) in the DP2 session; never echoed; redaction check on M10 SITREP/AAR before filing |
| Deploying a stale/drifted artifact (regen missed; site/ changed post-certification) | Medium | M7 explicit regen + committed diff; `prebuild` hook backstop; build→deploy freeze M9→M10 (else rebuild + `test:gates:fast` in the DP2 session); `generated` dates spot-checked in built artifact; `.adna` v8.5-parity check before `sync:install` |
| Gates flake when Lighthouse co-runs with preview server | Medium | Native split: `test:gates:fast` first, `audit:p1s3` separate serial run; one re-run before calling regression |
| A-06 scope blowout (why it was L-deferred) | Medium | Hard 70 kT box; authoring-time pre-render (committed SVG, Clause-A fallback, no new build deps) not build-time SSR; severable at DP2; findings recorded back to `idea_vaults_graph_ssr` on sever |
| Node shell flake (empty/garbled command output) | Medium | Prefer Read/Glob/Grep tools; python3.13 for all enumeration (python-not-grep); re-run suspicious empties before acting |
| STATE.md heavy-file handling | Medium | sed/awk windowed reads + python exact-string surgical edits (assert replace-count==1); single-writer; edits concentrated in M0/M11; line-start anchors only |
| Cross-vault write etiquette breach (Rule 10) | Medium | DP0 ruling recorded before M2; verify-first recon per vault; memo fallback on dirty targets; per-vault zero-NEW-drift validate; pushes held for DP3 |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced (5-line) | SO-5, `template_aar_lightweight` | Yes |
| Deliverables validated | Mission AAR scorecard | Yes |
| Files committed, explicit-path | Git status clean, staged==expected | Yes |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| All mission AARs GO | AAR review at gate | Yes |
| Phase exit criteria met | This doc's phase exit gates; operator approval (SO-1) | Yes |
| Findings escalated not buried | Findings ledger disposition column complete | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| Governance drift | `adna_validate --governance` zero NEW drift vs [[artifacts/baseline_governance_validate_20260706|M0 baseline]] |
| Compliance sampling | `compliance_checker.py` evidence in M3 |
| Site certification | `astro check` + `test:gates:fast` green + `audit:p1s3` + production build + artifact spot-check (DP2 evidence pack) |
| Live verification | Post-deploy smoke + A-07 CLS ≤ pre-captured baseline + A-09 ≥ 92 (M10 AAR) |
| Cross-file coherence | New files referenced from parent AGENTS.md; template/skill indices updated if any added |
| STATE.md updated | Banner + Active Campaigns row at open and close |

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Charter | M0 | 1 |
| P1 Drain + Survey | M1–M5 | 4–6 |
| P2 Vault improvements | M6 | 1–2 |
| P3 Website + deploy | M7–M10 | 4–6 |
| P4 Close | M11 | 1 |
| **Total** | **12 missions** | **10–13 (calibrated)** |

## Notes

- Mode B execution throughout (fable orchestrator + opus/sonnet subagents; Champollion §2 G2 dispatch ruling). Champollion §4 standing calibrations inherited (per-row RC pricing, pre-pinned boundary facts, finding-side verification, method variation, verify-don't-inherit, python-not-grep).
- `install_truth.json` regen verified **fully local** (`build_install_truth.mjs` reads `~/aDNA/.adna` only) — the staged A-04 Hestia memo remains parallel coordination, not a regen blocker. Precondition: `.adna` HEAD at v8.5 parity (post-2026-07-03).
- `vaults.json` regen is a cross-graph **read** of `Home.aDNA/what/inventory/inventory_vaults.yaml` (Rule 10 governs writes; no memo needed).
- Wilhelm memos are coordination artifacts in **this vault's** `who/coordination/` — SO#3 co-sign requests to external Wilhelm-Foundation-owned vaults, not guest edits.

## Completion Summary

**CLOSED 2026-07-06** — chartered, reviewed, fixed, and deployed within a single operator session (calibrated 10–13 sessions; Mode-B fan-out: 9 subagent missions under one fable orchestration).

### Deliverables
- **Concord register drained**: 2 Wilhelm co-sign memos staged (`ack_required`; watch) · `template_ratification_record` local mirror (idea closed) · count-drift fixed in 4 sibling vaults (17 tool-flagged + 4 tool-missed claims; all validate 0 count errors) · Oration PII tip-strip (`714037c`) · watches recorded (ScienceStanley · genesis trio).
- **Tri-surface review**: 17 findings (A1–A10, B1–B10 net of overlaps) + verified-clean coverage → [[artifacts/findings_ledger|findings ledger]]; marquee = latent RED G20 gate + 15-day certified-but-undeployed delta.
- **v8.6 RC**: 29 items dispositioned + cut-line + 2 inbound Hestia candidates → [[artifacts/v8_6_release_candidate|RC doc]] (release fires post-campaign at the operator's `skill_template_release` gate).
- **Vault**: counts trued 42/50 across 6 surfaces · STATE.md re-diet 116→76 KB (archive-shifted, SO-6) · 26 backlog statuses trued · compliance-checker hardening idea filed.
- **Site**: G20 manifest v2.5 · registry regen 54→68 · A-02 re-anchor · A-14 truncation root-cause · comment currency · **A-06 pre-rendered no-JS `/vaults/graph` SVG** + `sync:graph` · gates 22/23 + `/security` audit coverage · vault-count fixture 54→68 (attributed override).
- **DEPLOYED**: adna.network live on the certified build (195 gates + 118 audit green) — first production deploy since 2026-06-21; **A-07 CLS ≤ baseline · A-09 best-practices 0.92→1.00** ([[missions/mission_meridian_m10_deploy|M10 verification table]]).
- **Inbound processed** (concurrent Hestia/Metis drops): ADR-043 co-sign roster COMPLETE (back-reference + memo ack) · 2 Hearthfire upstream ideas → RC candidates · Metis `surface_composition_graph` ADR idea accepted.

### Descoped
- STATE.md ≤60 KB target honestly missed (landed 76 KB) — the remaining lever (29 KB `## Current Phase` section) named for a follow-on, not silently scope-crept.
- Long-tail A-05/08/10/13/17/18/19 stay deferred (re-triage justified each).

### Key Findings
- **Latent-red-gate class**: claim-trace fixtures are currency surfaces — a version bump must touch the manifest in the same commit.
- **Mirror-lags-source recurrence** (Looking Glass's inversion, 2nd instance): improvements certify green then sit undeployed; deploy cadence is the systemic gap.
- **Drift isn't just numeric**: the count sweep surfaced committed PII (Oration) + an uncustomized boilerplate README (ContextCommons).
- `fold_batch` frontmatter is unreliable as a shipped-signal; disk beats narrative (M5).

### Scope Changes
- A-11/A-12 found already-implemented at M4 review → M7 pivoted from "implement" to the ratified fix set.
- M2-lane add-on: Oration PII tip-strip (DP1 item 14).

### Follow-Up Campaigns
- None chartered. Routed residuals: v8.6 release (operator gate) · Wilhelm acks (watch) · Network/backlog pushes (per-vault windows) · Oration history-scrub decision (its lane) · CC README customization (its lane) · `surface_composition_graph` ADR minting (Rosetta governance lane) · Current-Phase STATE diet (next hygiene pass).

## Campaign AAR

- **Worked**: Mode-B parallel fan-out (5 concurrent P1 missions) + verify-don't-inherit reviews + the M9 freeze→prebuilt-promotion discipline — charter→review→fix→deploy in one operator session against a 10–13 calibration; the pre-captured live baseline made post-deploy verification a table that wrote itself.
- **Didn't**: One subagent died at the session rate-limit mid-report (M8 — work was complete on disk and verified directly); two concurrent cross-vault drops (Hestia/Metis) appeared mid-campaign and had to be reconciled out of mission commits.
- **Finding**: Both marquee catches were latency-class — a latent RED gate and a 15-day undeployed delta; the site can be green, certified, and still stale on live. Deploy cadence needs a standing rule, not a campaign.
- **Change**: The staged-vs-expected commit guard caught foreign files twice — promote it to doctrine: session scope declarations should name the expected-new-file set, and every commit diffs staged against it.
- **Follow-up**: v8.6 RC → `skill_template_release` gate · Wilhelm + Hestia-memo acks (watch) · deploy-cadence standing-rule idea → backlog · remaining routed residuals per Completion Summary.
