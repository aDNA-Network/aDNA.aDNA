---
plan_id: mission_haussmann_p2_5_onboarding_paths
type: plan
title: "P2.5 — Onboarding paths: a zero-install way in, first success defined, the one-liner's cost stated"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: in_progress   # O0 ✅ 2026-08-19 — design + first-success definition + cost statement + TTFS kit authored; ⛩ HALTED at the pick (4 questions)
mission_class: build
executor_tier: opus
token_budget_estimated: "~200–300 kT across 2 sessions: zero-install path design+build + first-success definition + trust-cost copy + uninstall docs + TTFS instrument + clean-machine run (ADR-016)"
token_budget_actual: "~55 kT for O0 (this session, shared with the P2.4 deploy)"
created: 2026-08-16
last_edited_by: agent_rosetta
updated: 2026-08-19
grounded_in: ["H3 confirmed (+ the engineer's refusal rationale)", "D3 scoring (provisional 3; no TTFS run; no first-success definition)", "machine_eye 12 (no copy-as-context)", "dossier (bun/astro install-forward patterns; MCP use-vs-build split)"]
vitruvius_dimensions: [D3, D1]
decade_theme: navigation
webforge_patterns: []
patterns_to_author: ["TTFS instrument kit (owed to WebForge as a verification module seed — A6)"]
depends_on: [mission_haussmann_p0_1_positioning]
blocks: []
acceptance_criteria:
  - "A zero-install evaluation path exists from the homepage: read-only tour of a real vault (or equivalent) that shows the thing working before any clone"
  - "'First success' explicitly defined and published (what you have after the one-liner, in observable terms) + troubleshooting section + uninstall/cleanup documented"
  - "The one-liner's cost stated up front (what it writes where, what the agent will read) — the trust objection answered in place"
  - "TTFS instrument: stopwatch protocol + friction-log format; one clean-machine run recorded with TTFS < 10 min (or the failure honestly logged and fixed)"
verification_method: "clean-machine TTFS run (recorded) + synthetic cold-read re-test of the new path + D3 re-score"
human_gate: true
tags: [plan, haussmann, p2, onboarding, ttfs]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The best-disposed synthetic reader refused the primary CTA — the ramp needs a costless first step.

## Why this mission exists

There is no way to *see it work* without cloning and launching an agent (H3); "first success" is undefined; no troubleshooting, no uninstall; the D3 score is provisional on a run nobody has made `[D scoring]`. The engineer's objection is precise and fixable in copy + one new surface: state what the one-liner does, and give evaluators a read-only tour first.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Design the zero-install path (options: annotated live-vault tour pages / asciinema-style walkthrough / rendered example session) + first-success definition | design + definitions | ⛩ operator pick |
| O1 | Build the path + get-started upgrades (cost statement, troubleshooting, uninstall, first-success) | pages | — |
| O2 | TTFS instrument (protocol + log format); **clean-machine run** (fresh VM/account; operator or dispatched runner; screen-recorded) | instrument + run record | ⛩ operator (machine) |
| O3 | Synthetic cold-read re-test of the new funnel; register rows; AAR | evidence + AAR | — |

## Constraints

The tour shows *real* artifacts (honesty law — no staged mockups presented as live); "about 5 minutes" claims only after measurement; the instrument kit is written reusable (owed upstream A6).

## Definition of done

An evaluator can understand-and-decide without installing; an installer knows the cost, the success state, the exit; and TTFS is a measured number, not an adjective.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-048 + `evidence/coldreads/coldread_SYNTHETIC_senior_engineer.md`. Execute O0, halt for the pick, then O1–O3. The TTFS run needs a clean machine — coordinate with the operator at O2.

## Progress

### O0 ✅ — design authored, ⛩ halted at the pick (2026-08-19)

Deliverable: [[design_zero_install_path]] (`artifacts/p2_5/design_zero_install_path.md`).

- **Zero-install path**: three variants costed (A annotated real-file tour · B real recorded session ·
  C animated replay). **Recommended: A now, B at O3, C not at all** — A and B answer *different*
  objections, and B's honest form depends on O2's run, so sequencing them follows the mission's own
  order instead of fighting it.
- **"First success" defined observably** — five structural assertions the reader can run, plus the
  behavioural half (a *new* agent session in the project greets you already holding its governance).
  Both ship on the page; a success definition the user cannot check is an adjective.
- **Cost statement drafted** for above the one-liner — answers the trust objection in place, and
  retires two live contradictions: the *"any tool can support"* claim (it is a Claude Code convention)
  and the absent uninstall path (`rm -rf ~/aDNA`; there is nothing else).
- **TTFS kit sketched reusable** (owed to WebForge, A6): clock starts at the *entry URL*, not the first
  command, because reading the page is where the refusal happened; prerequisite time recorded
  separately; an empty friction log is reported as **suspect, not excellent**.

### 🔎 F-P2.5-1 — `/get-started/` renders invented terminal output as if real `[D]`

The `$ claude` block depicts strings that exist **nowhere in the standard** — `.adna/` searched in
full, zero hits; the only occurrence in the repository is the marketing page. It also depicts an
onboarding interview that **does not fire on a fresh clone** (`skill_onboarding.md` gates on a forked
project directory; a fresh workspace has none, so `skill_project_fork.md` runs instead).

Registered **R-118** (`unsupported → to fix at O1`, S3). It decides the pick rather than sitting in a
defect list: O0's option set includes "rendered example session," and the honest form of that option
is precisely what this page is currently faking.

### ⛩ Awaiting operator — 4 questions

Variant pick · disposition of the invented transcript · cost-statement copy · first-success definition
as O2's stop-condition. Recommendations in [[design_zero_install_path]] §7. **O1 does not start until
the pick lands.**

## AAR (SO#5)

*(before completed)*
