---
type: artifact
created: 2026-07-05
updated: 2026-07-05
status: active
last_edited_by: agent_stanley
campaign: campaign_fleet_reseed
phase: P3
wave: W3
tags: [fleet_reseed, w3, f2, f5, git-remote, push-hygiene, ledger]
---

# Fleet Re-Seed W3 — F2/F5 hygiene ledger

Executed 2026-07-05 (operator-ratified: ComfyUI keep-Class-L · WebForge Codeberg-private · F5 Molecules-only).
Outward actions ran with per-vault pre-flight; every push ran gitleaks.

## F2 — Free-Harbor (git-remote) gap

| Vault | Disposition | Detail |
|---|---|---|
| **WebForge.aDNA** | ✅ **remoted → Codeberg-private** | `origin = codeberg.org/aDNA-Network/WebForge.aDNA` (private); `master` pushed (`[new branch] master -> master`). FOSS-in-dev per its own CLAUDE.md + fleet norm (Videos/Molecules). Setup via `Git.aDNA` `gitops_dispatch.sh` (dry-run → live, `GITOPS_ALLOW_LIVE=1`). |
| **ComfyUI.aDNA** | ⛔ **NOT a gap — Class-L documented exception** | Its own STATE declares it local-only "not for release" (operator decision, Git.aDNA Wave 3c 2026-06-24). Scorecard F2 corrected. Already carries an internal `luke-mesh` remote → **mesh-drift routed to the Hopper/Hestia/Venus `luke-mesh` thread** (already tracked in ComfyUI STATE, M-C6 census). No public remote added. |
| **Home.aDNA** | ⛔ documented exception | Local-by-default (Rule 4) — never a gap. |

**ADR-011 gate event (WebForge):** the mandatory full-history gitleaks scan flagged **2 `github-pat` findings**, both under
`what/research/eval/golden_corpus/` (commit `65e017eb`). Confirmed **synthetic** — planted fixtures for the
Operation-Vitruvius reviewer eval harness (`build_corpus.py`: "each slopped fixture injects exactly ONE family of
violation"), not live credentials. Resolved by adding **`.gitleaks.toml`** (commit `4c03fbbc`) — `[extend] useDefault=true`
+ an allowlist scoped **only** to the corpus tree. **Verified** a private-key / high-entropy PAT *outside* the corpus
still trips (default ruleset intact), and the full history re-scanned **clean**. Not a blanket bypass.

## F5 — commit/push-or-document hygiene

| Vault | ahead | Disposition | Reason |
|---|---|---|---|
| **Molecules.aDNA** | +1 | ✅ **pushed** (`51ad306` → Codeberg; gitleaks clean) | Single authorized Corps M-A2 ADR-045 fleet-drift fix ("aDNALabs Operation Corps P1 gate GO"). No hold. |
| **Network.aDNA** | +25 | 🔒 **HOLD** | SO-9 — First-Light integrity work (einstein-ledger chain), STATE marks it "local, NO push". Venus-gated. |
| **Context.aDNA** | +18 | 🔒 **HOLD** | SO-9 — "ALL LOCAL — nothing pushed; push operator-gated"; Operation Prometheia; **public repo** (push = public exposure). Prometheus-gated. |
| **aDNALabs.aDNA** | +60 | 🔒 **HOLD** | Explicit "Local, no push" (Vitruvian Man P0 staged for a fresh session). |
| **LatticeProtocol.aDNA** | +61 | 🔒 **HOLD** | Explicit "(no push)" (Carnot D-C11 pre-dispatch). |
| **Operations.aDNA** | +60 | 🔒 **HOLD** | Explicit "local, no push" (C04 P3 close + ADR-022). |
| **Obsidian.aDNA** | +3 | 🔒 **HOLD** | Explicit "Local, no push" (Corps M-D2 consent-gated, R-6). |
| **III.aDNA** | 0 | ⚪ synced | Already at origin (was +23 at P0 scorecard; since pushed). |
| **WilhelmAI.aDNA** | 0 | ⚪ synced | Already synced; also **Wilhelm-Foundation partner** — any future push needs owner co-sign. |
| **Spacemacs.aDNA** | 0 | ⚪ synced | Already synced; editor-config vault, local-design by nature. |

**Posture:** the 6 holds are **deliberate, owner-set** operator gates — respected, not overridden. Each remains its
owner-persona's to push when its own gate opens. `.obsidian` UI churn in the pushed/held vaults was left uncommitted
(not ours).

## Follow-ups (non-blocking)
- **WebForge `origin` → register in the Home remote registry** (ADR-006 D4; Hestia lane).
- **ComfyUI `luke-mesh` posture reconciliation** — Hopper/Hestia/Venus thread (its STATE claims "no remote" but a mesh
  remote is configured + a push egressed 2026-06-30).
- The 6 F5 holds unblock on their own campaigns' gates (Venus First-Light, Prometheia, Vitruvian Man, Carnot, C04, Corps M-D2).
