---
campaign_id: campaign_meridian
type: campaign
title: "Operation Meridian — Concord follow-up drain + tri-surface review→improve + adna.network go-live"
owner: stanley
status: active
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
| M0 | Charter + scaffold + hygiene quickies (stale-session archive, `adna_validate --governance` baseline, DP0 record) | fable | 35 | 1 | — | active |

**Phase exit gate**: charter committed; baseline recorded; DP0 resolved. *(Satisfied by plan approval 2026-07-06 — plan approval = charter authorization.)*

### Phase 1: Drain + Survey (parallel lanes)

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M1 | Concord residue: 2 Wilhelm coord memos + `template_ratification_record` mirror + watch entries | sonnet | 45 | 1 | M0 | planned |
| M2 | Count-drift hygiene ×4 sibling vaults (ContextCommons · Network · Oration · ZenZachary) | opus | 70 | 1–2 | M0, DP0 | planned |
| M3 | Review sweep A — campaign residue + vault/graph/repo | opus | 90 | 1 | M0 | planned |
| M4 | Review sweep B — website lane | opus | 90 | 1 | M0 | planned |
| M5 | v8.6 queue reconciliation + RC doc (DP1-independent; early-start permitted) | opus | 110 | 1–2 | M0 | planned |

**Phase exit gate**: drain complete + findings ledger populated → **DP1** (operator ratifies bounded improvement set).

### Phase 2: Vault/graph improvements

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M6 | Vault currency fixes — DP1-ratified bounded set | opus | 70 | 1–2 | M3, DP1 | planned |

**Phase exit gate**: `adna_validate --governance` zero NEW drift vs M0 baseline; v8.6 RC doc complete.

### Phase 3: Website + deploy

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M7 | Data regen (`.adna` v8.5-parity check → `sync:install` + `sync:vaults`) + A-11 + A-12 + ratified small site items | opus | 60 | 1 | M4, DP1 | planned |
| M8 | A-06 graph pre-render spike (**boxed 70 kT, severable**) — authoring-time static SVG, Clause-A fallback | opus | 70 box | 1–2 | M7 | planned |
| M9 | Gates re-verify (`test:gates:fast` → `audit:p1s3` separate) + gate extensions + **live-prod baseline capture** + production build + artifact spot-check | opus | 60 | 1 | M7, M8 (or severed) | planned |
| M10 | **DP2 GO** → `vercel --prebuilt --prod` (token env-only, redacted) → live smoke + A-07 CLS ≤ baseline + A-09 ≥ 92 | opus | 50 | 1 | M9, DP2 | planned |

**Phase exit gate**: deployed + post-deploy verifies logged (or DP2 = hold, with evidence pack filed).

### Phase 4: Close

| Mission | Title | Tier | Budget (kT) | Sessions | Dependencies | Status |
|---------|-------|------|-------------|----------|-------------|--------|
| M11 | Campaign AAR + SITREP splash + STATE/memory updates + `skill_verification_handoff` + **DP3** push authorization | fable | 45 | 1 | all | planned |

**Phase exit gate**: campaign `completed`; DP3 record; final clean tree.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| DP0 | Charter | Cross-vault fix mode for the 4 count-drift vaults | **RESOLVED 2026-07-06** — operator (AskUserQuestion): **direct-by-default, memo fallback if target mid-edit** (Concord DP1 Option C precedent); pushes held for DP3 |
| DP1 | Phase 1 exit | Ratify bounded improvement set (vault set → M6, site set → M7, long-tail A-item re-entries); cap S/M effort, L items called out explicitly (A-06 pre-called as M8) | **RESOLVED 2026-07-06** — full 14-item set ratified; Oration PII (F-MER-A8) = tip-strip now, history-scrub deferred to Oration's lane ([[artifacts/findings_ledger|ledger]] §DP1) |
| DP2 | Pre-M10 | Deploy go-live + content: (a) deploy incl. A-06 if green · (b) deploy without A-06, re-defer · (c) hold (gates regression only) | pending |
| DP3 | Close | Pushes: aDNA.aDNA origin (recommended yes) · 4 count-drift vault commits (per-vault) · held backlogs aDNALabs 66 / Network 37 / WebForge 15 / Operations 84 (default **hold**) | pending |

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

*Fill out when setting `status: completed`.*

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*
