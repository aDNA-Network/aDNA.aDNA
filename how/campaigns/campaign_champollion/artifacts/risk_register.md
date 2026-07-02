---
type: artifact
artifact_id: champollion_risk_register
title: "Operation Champollion — risk register"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, risk, register]
---

# Risk Register — Operation Champollion

> Reviewed at every phase gate; likelihood/impact re-scored there. Mitigations bind as mission-brief guardrails. Cross-refs: [[findings_ledger|findings ledger]] · [[order_of_battle|Order of Battle]] · [[../campaign_champollion|charter]].

| ID | Risk | L×I | Mitigation (binding) | Trigger/monitor |
|----|------|-----|----------------------|-----------------|
| R1 | **Concurrent-session interference** — two prior incidents (Keystone shared-tree 2026-06-20; the `98bb488` hold-override push 2026-06-30). A second agent may work this tree or push mid-campaign. | H×H | Explicit-path staging only (never `git add -A`); `pgrep -x git` before clearing locks; session `conflict_scan` at every open; `git fetch` + `ls-remote` before any push decision; STATE ⏭ QUEUED banner declares the active campaign. | Any unexpected ref change at session open |
| R2 | **Public-boundary breach** — this dev graph + site are public; held commits and staged memos could carry private/counsel-gated/credential content outward. | L×**Critical** | No-push discipline (push = operator gate item); gitleaks pre-push hook; credential NAMES only; every mission brief carries a public-boundary guardrail line; sanitizer idea adjudicated in P1. | gitleaks hit; any memo naming external-private material |
| R3 | **Scope explosion** — ~93 backlog items × 10 coverage dimensions × program close in one umbrella. | H×M | Two rings with a mid-campaign **ring cut** (Carnot pattern); per-mission ADR-016 budgets; defer-with-owner-and-trigger is a first-class disposition; out-of-scope findings filed not chased (directive §7.5). | Phase-exit mission-count vs charter delta |
| R4 | **Launch-window compression** — network launches in 1–2 weeks; DP4 additionally waits on Track D (commons, Venus — external). | M×H | Ring-1 front-loads launch-critical (site/first-contact/RC); **DP4 dossier decoupled from DP4 firing** (dossier ready ≠ operator fires); Track D tracked as counterparty row, never a Champollion blocker. | Operator launch-date update; Venus/Track-D state change |
| R5 | **Downtier quality risk** — Opus/Sonnet executors are new practice; a weak brief could ship a wrong mechanical sweep at scale. | M×M | Design-brief contract (pattern §2.2: acceptance criteria + escalation triggers + verification surface); judgment-tier review co-located with gates; per-tier estimate-vs-actual in every AAR (first review at P1 exit); validator runs per-session. | Escalation-trigger fire rate; AAR per-tier drift >2× |
| R6 | **Cross-vault dependency stalls** — Noether countersign, Prometheus ack, Hestia ADR-043 co-sign, Oration/Berthier acks, Track D. External owners, external clocks. | M×M | Staged memos carry explicit asks + discharge conditions; **pending-with-owner is an acceptable close state** (directive §8.5); OoB counterparty table reviewed at each gate. | Ack aging > 1 phase |
| R7 | **Token-economy blowout** — 545 KB STATE router (F-CHM-004), heavy vault, 10-dimension scope; sessions may overrun ADR-016 bands. | M×M | Checkpoint-commit discipline (resume-safe); heavy-file Read convention; STATE diet scheduled early (P1 hygiene); per-session `token_budget_estimated` declared; >2× drift → ADR-016 retrospective. | Session budget actuals at close |
| R8 | **Governance-retro fallout** — ADR-045 disposition could, if the operator chooses re-gate, destabilize an already-public standard consumers built on (~208–216 wrappers). | L×H | Present options with costs at the gate; recommended path (amend-then-ratify) repairs the record without moving shipped structure; wrapper-count discrepancy (216 vs 208) reconciled before signature. | Operator's P0-gate §3 choice |
| R9 | **Template-release regression** — the v8.4+ RC will batch multiple folds through a manual, gated release skill. | L×H | Only gate-ratified folds enter the RC; `skill_template_release` dry-run before ship; post-release `.adna/` sync verification; release checklist is itself a P6 mission acceptance criterion. | RC dry-run diff surprises |
| R10 | **Directive-vs-reality drift recurring** — the founding directive itself carried ≥3 stale assumptions (STR open; v2.3; adr_index exists). Any long campaign's own docs will drift the same way. | H×L | *Verify-don't-inherit* clause in every mission brief; findings ledger appends per-session; STATE §Current Phase rewritten at every stop (directive §9). | Any doc-vs-validator disagreement |
