---
type: mission
created: 2026-07-04
updated: 2026-07-05
status: completed
last_edited_by: agent_stanley
campaign: campaign_fleet_reseed
phase: P3
wave: W3
token_budget_estimated: 150   # kT; ~2 sessions (80–200 band, Standing Rule 11)
token_budget_actual: 95        # kT (rough) — single session; scope shrank (1 remote + 1 push, not 2 + 6)
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

## AAR (2026-07-05, SO#5)
- **Worked:** Grounding the two outward decisions in each vault's *own* posture (not the scorecard) before recommending
  paid off twice — ComfyUI's STATE reclassified it out of the "gap" set (Class-L), and WebForge's CLAUDE.md + the fleet
  norm (Videos/Molecules) made Codeberg-private the obvious, self-consistent call. The ADR-011 full-history gate did
  exactly its job: it caught 2 `github-pat` findings on WebForge's first push. The `useDefault=true` allowlist + the
  *proof test* (a private key outside the corpus still trips) turned a scary finding into a clean, non-bypassing fix.
- **Didn't:** Push Network/Context — live pre-flight exposed an SO-9 "operator-gated / local" posture the P0 scorecard
  (and the recon agent's keyword scan) had missed, so the "3 pushes" became **1**. Also deferred the Home remote-registry
  registration + the ComfyUI mesh-drift (both routed, non-blocking).
- **Finding:** **The scorecard aged.** By W3, F2's "2 gaps" was really **1** (ComfyUI already Class-L) and F5's "6
  unpushed" was **1 pushable + 6 held/synced** (III had drained to 0; Network/Context were SO-9-held). *Re-verify each
  target's live STATE at execution — the audit is a starting map, not ground truth.* And a keyword scan ("do not push")
  misses real holds phrased "push operator-gated" — read the STATE, don't just grep it.
- **Change:** Two standing habits reinforced: (1) run the ADR-011 **full-history** gitleaks scan *before* proposing a
  first-push host, so fixture-vs-secret triage happens up front; (2) for any cross-vault push, **read the owner's STATE
  push-posture line** as the gate of record, over any prior classification.
- **Follow-up:** WebForge `origin` → Home remote registry (Hestia); ComfyUI mesh-drift → Hopper/Venus; the 6 F5 holds
  unblock on their own campaigns' gates. **Next campaign step = P5 final audit / AAR** (or the separate **W4**
  governance-doctrine gate) — both operator-gated. Budget: est 150 kT / actual ~95 kT (−37%; scope shrank, within Rule 11).
