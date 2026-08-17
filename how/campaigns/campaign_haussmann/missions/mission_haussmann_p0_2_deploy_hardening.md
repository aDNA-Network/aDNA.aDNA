---
plan_id: mission_haussmann_p0_2_deploy_hardening
type: plan
title: "P0.2 — Deploy hardening: what ships is what's configured, and nothing ships silently"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: active     # P0 wave opened 2026-08-16 (session haussmann_p0_wave; operator-ordered)
mission_class: build
executor_tier: opus   # infra judgment + one ADR; mechanical steps drop to sonnet inline
token_budget_estimated: "~120–200 kT across 1–2 sessions: header-drift diagnosis + fix + live-header CI check + ADR-050 options + deploy runbook + baseline re-record (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: [N3, "sweep #3/#4 (headers absent live; Observatory C/50)", "session baseline (unrecorded 08-11 deploy)", "Berthier 08-11 memo §4 (deploy-hardening-before-wave)", "WebForge P13 (deploy lib; VERCEL_TOKEN_ADNA parked)"]
vitruvius_dimensions: [D12]
decade_theme: credibility
webforge_patterns: [P13]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p4_4_ci_hardening]
acceptance_criteria:
  - "Live production serves CSP + X-Frame-Options + X-Content-Type-Options + Referrer-Policy (+ Permissions-Policy decision recorded); MDN Observatory ≥ B"
  - "A CI/pre-deploy check fails loudly when live headers drift from vercel.json"
  - "ADR-050 authored at proposed with the three deploy-path options + recommendation"
  - "Deploy runbook updated; every deploy records its ID in session log + STATE (the 08-11 gap class closed)"
verification_method: "curl header probes live + Observatory re-scan + red-test the drift check (prove it can fail)"
human_gate: true
tags: [plan, haussmann, p0, deploy, headers]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Berthier's precondition, now evidence-backed: the deployed artifact has drifted from the committed config.

## Why this mission exists

Live production serves **only HSTS**; `site/vercel.json` configures CSP/XFO/XCTO/Referrer-Policy — none arrive `[D sweep #3]`; MDN Observatory grades **C/50** `[D]`. A production deploy happened 2026-08-11 that no vault record captured `[D session baseline]`. There is no Vercel git integration (pushing ≠ deploying), the token has a leak history, and `VERCEL_TOKEN_ADNA` is parked in WebForge's blocked wave `[R]`. Everything later in the campaign ships through this pipe.

## Where we are (verify on disk at execution)

`site/vercel.json` headers block exists; deploy = manual `npx astro build` + `vercel --prebuilt --prod`; `.github/workflows/gates.yml` runs tests but never deploys and never probes live; WebForge `what/lib/deploy/` has `deploy_prebuilt.sh` + `inject_headers.mjs` (P13); baseline etag `9247…f32`, last deploy 2026-08-11T13:35Z.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Diagnose the drift: why don't vercel.json headers serve? (deploy predates config? prebuilt path skips vercel.json? adapter interaction?) — reproduce on a preview deploy, not prod | diagnosis note [D] | — |
| O1 | Fix + verify on a preview deployment; then one production deploy under operator GO | headers live; Observatory ≥ B | ⛩ operator (prod deploy) |
| O2 | ADR-050: deploy-path options — (a) Vercel git integration (auto-deploy; blast radius) · (b) wrapped-manual script w/ checks + recorded IDs (WebForge deploy_prebuilt pattern) · (c) b now → a after P2. Recommend + record | ADR-050 proposed | ⛩ DP3 |
| O3 | Live-header drift check (script probing prod vs vercel.json) wired into CI/pre-deploy; **red-test it** | check + red-test proof | — |
| O4 | Runbook: deploy discipline (record IDs; env-var token only; clean-tree check; freeze protocol); stage the Hestia token ask (VERCEL_TOKEN_ADNA) in the existing memo thread | runbook + memo ref + AAR | — |

## Constraints

Never `--token` on the CLI; token values never in the conversation; deploys under operator GO during the campaign (freeze in effect); coordinate — don't duplicate — WebForge's parked token wave (memo, not local invention); a check that cannot go red is not evidence.

## Definition of done

A stranger can deploy safely by following the runbook; live headers match config with a gate watching; ADR-050 is decidable at DP3; the unrecorded-deploy class is closed.

## Session opening prompt

> Open this mission + campaign CLAUDE.md. Execute O0 (diagnosis) using preview deploys only; halt before any production deploy for operator GO. Constraints: token via env-var only; record every deploy ID.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
