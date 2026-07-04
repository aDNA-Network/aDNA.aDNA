---
type: mission
created: 2026-07-04
updated: 2026-07-04
status: active
last_edited_by: agent_stanley
campaign: campaign_fleet_reseed
phase: P3
wave: W3
token_budget_estimated: 150   # kT; ~2 sessions (80–200 band, Standing Rule 11)
tags: [mission, fleet_reseed, p3, w3, f2, f5, git-remote, push-hygiene]
---

# Mission — Fleet Re-Seed P3 (W3): git-remote setup + commit/push-or-document hygiene

Closes the near-term **compliance-conformance** arc (W1 router/inventory ✅ · W2 wrapper-residue ✅ → **W3 = this**).
Governance-doctrine (W4) stays a separate later gate. Opened 2026-07-04 after the W2 tail closed and the operator
said "move on."

## Objective
1. **F2 — Free-Harbor gap.** Give the 2 **Tier-A no-remote** vaults (**ComfyUI.aDNA**, **WebForge.aDNA**) real git
   remotes. (Home.aDNA staying no-remote is **correct** — local-by-default, Rule 4 — a documented exception, not a gap.)
2. **F5 — commit/push-or-document hygiene.** For each dirty-tree / unpushed-backlog hotspot, either **push** (clean +
   owned + authorized) or record an **explicit documented hold**. No silent dirty trees.

## Gate posture — READ FIRST
P3 is **open**, but **every outward git action is operator-gated per-vault**: creating a remote, choosing host +
visibility (Git.aDNA **ADR-013**: released-FOSS → GitHub-public · FOSS-in-dev → Codeberg-private · private/proprietary
→ GitHub-private-interim), and each push require operator confirmation. **This mission is authored, not executed** —
O1/O2 begin only when the operator sets host + visibility for ComfyUI + WebForge.

## Objectives

### O1 — ComfyUI.aDNA git-remote (F2) · outward-gated
- Pre-flight (SO#1): `git status -sb` + read ComfyUI CLAUDE/STATE; **gitleaks full-history scan** (ADR-011 hard gate
  before any first push / host move) — a finding blocks until purged + credential rotated.
- Operator decision: host + visibility (Platform · `software_deployment_graph`; per ADR-013).
- Run `Home.aDNA/how/skills/skill_git_remote_setup.md`: create remote + `git remote add origin` + initial push.

### O2 — WebForge.aDNA git-remote (F2) · outward-gated
- Same shape as O1 (provider-forge; **3 live `*.vercel.app` deploys** → gitleaks-confirm no deploy secret in history
  before first push).

### O3 — F5 commit/push-or-document hygiene pass · per-vault gated
- Hotspots (scorecard F5): **unpushed** — aDNALabs 55 · LatticeProtocol 54 · Operations 52 · III 23 · Network 16 ·
  Context 10; **dirty** — WilhelmAI 42 · Spacemacs 21 · III 14 · Operations 10 · Obsidian 9 · Molecules 8 (+ ~8 at 3–5).
- Per vault (SO#1): pull + read. If the backlog is **clean, owned, and push-authorized** → push (FF + gitleaks). If
  **operator-held / partner / cross-session churn** → record a **documented hold** (scorecard + a one-line ledger entry).
  **Never** cross-vault bulk-commit; **never** force-push. State moves between sessions → re-check each vault live.

## Standing orders
Campaign SO#1–7 + workspace Rules. Outward = confirm. One path-scoped commit per vault. Credentials via the Home broker
(host → env-var, never inlined; ADR-007). CI portable-first (ADR-008). gitleaks pre-push + full-history-before-host-move
(ADR-011). Sandbox git reads set `GIT_OPTIONAL_LOCKS=0`.

## Deliverables
- ComfyUI + WebForge remotes live (or documented-deferred with operator rationale).
- An F5 hygiene ledger: per-hotspot **pushed** / **held-with-reason**.
- Mission AAR (SO#5) + scorecard **F2/F5** rows closed + charter phase **P3 → done** → then **P5** (final audit / AAR)
  or the separate **W4** governance-doctrine gate.
