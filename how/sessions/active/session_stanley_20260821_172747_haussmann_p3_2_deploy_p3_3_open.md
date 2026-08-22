---
type: session
session_id: session_stanley_20260821_172747_haussmann_p3_2_deploy_p3_3_open
created: 2026-08-21
updated: 2026-08-21
status: active
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
executor_tier: opus
token_budget_estimated: "~120–180 kT — a ship-and-clear session in front of a build. P3.2 prod deploy + live re-probe + evidence re-stamp (~40) · owed queue: Venus memo, Hopper ruling → P4.4 F-k (~25) · push (~10) · P3.3 open: convention-13 AC coherence pass + O0 design → ADR-056 §mcp (~50–100). P3.3 does NOT finish here — it is a ~250–350 kT / 2-session mission and O2 is an operator publish gate."
token_budget_actual:
tags: [session, haussmann, p3, deploy, mcp, owed_queue]
---

# Session — HAUSSMANN: ship P3.2 to prod, clear the owed queue, open P3.3

Opened on *"Please read the CLAUDE.md and let's continue the campaign."*

## Opening state

- **P3.2 is `completed` build-side and UNDEPLOYED.** Verified live before planning `[D]`:
  `adna.network/vaults.json` → **404**, `/api/registry.v1.json` → **404**, while P3.1's
  `/get-started/.md` → **200**. Local `HEAD` `31b8b53`; `origin/main` `924f2d8` — **1 commit
  unpushed**. The gap between "P3.2 completed" and "the registry JSON is live" is exactly the gap
  the campaign CLAUDE.md warns a cold agent about, and it was real.
- **⛩ The Decade-2 SITREP gate was RE-SUBMITTED.** The committed copy reads `completed_at`
  `2026-08-21T22:49:44Z`; the working tree carries `2026-08-21T23:51:27Z`. Decisions are
  **byte-identical** — all four sections `approve`, composite `approve`, confidence 4, no notes.
  No new signal; the diff is timestamp-only. Committed here so the record matches what was signed.
- **Two operator GOs from that gate had never been consumed** — the installer publish (`owed`) and
  the ruling that the missing `.adna` pre-push gate is ours (composite).

## 📨 Intake — the sweep

`git ls-files --others --exclude-standard who/coordination/` at open returned **nothing**. First
clean open sweep in four sessions. Run again at close — three of the last six memos arrived
*mid-session*.

## ⛩ Operator rulings (in-chat, at plan approval)

| # | Question | Ruling |
|---|---|---|
| 1 | P3.2 is built and halted for the prod GO; what does this session do? | **Deploy P3.2, then open P3.3** |
| 2 | The approved v0.4.3 installer publish cannot be executed here — no artifact, no key, no `minisign` | **Memo Venus** — ask for the artifacts; do not improvise |
| 3 | The Hopper `.adna` pre-push gate ruling | **Route to a mission, act later** — record it where the work is scoped, reply to Hopper |

## Recon at execution (convention 12 — the genesis evidence ages)

**The approved installer publish is unreachable from this node** `[D]`, measured 2026-08-21:

| Requirement | State |
|---|---|
| `adna-installer-0.4.3.tar.gz` | **absent workspace-wide** — `find ~/aDNA/Network.aDNA -iname "*installer-0.4*"` returns only `0.4.1` |
| `.minisig` signature | **absent** — no `.minisig` anywhere under `Network.aDNA` |
| `MINISIGN_PUBKEY` in `install.sh` | **pinned** (`RWSKI+VKqsFhy…`) → `release.sh` makes the signature mandatory and aborts without it |
| signing key | **absent** — `~/.secrets/adna_release_minisign.key`, `$ADNA_MINISIGN_KEY`, Keychain, Home.aDNA broker inventory all empty |
| `minisign` binary | **not installed** |

`release_pins.txt` carries the `0.4.3` row (`07ae6371…`), so the cut happened — on a box that is not
this one. **Convention 15 in reverse**: their memo's pin was correct and its supersession condition
was stated; what nobody checked was whether the artifact it named was *reachable from the tree being
asked to publish it*. A GO can be granted for an act that cannot be performed, and the gate that
grants it has no way to tell.

**UTC had rolled past midnight at session open** (local 2026-08-21 17:27 PDT = 2026-08-22 UTC), which
moves two known behaviours:

- the deploy script's changelog cadence prompt compares `date -u` to the newest entry, so it **will**
  fire against `2026-08-21.md`. Nothing to add — that entry *is* this deploy's entry, and it is
  already committed. Writing a second one to silence a nudge is the filler the prompt's own comment
  says it must not train.
- `build_vaults_data.mjs` date-only churn after UTC midnight — restore, never commit.

## Progress log

- **17:27** — session opened; startup checklist run; open sweep clean; recon recorded.
