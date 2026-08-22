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

## ⛩ Deploy record (campaign law §6 — every deploy ID recorded)

```
deploy_record: 2026-08-22T00:29:33Z mode=prod
               url=https://adna-docs-baguy90ta-science-stanleys-projects.vercel.app
               token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered)
               tree=861e871
```

Chain ran clean: 225 pages · 32 tier-C twins re-emitted, 222 advertised, corpus 929 KB · headers
injected 4/4 · installer routes 5 · redirects widened 42/42 · negotiation 444 routes ·
**live-headers verified against `https://adna.network` → served 4/4, no drift**.

That last line is P3.1's fix working. Before it, `check_live_headers.mjs` pointed at the
per-deployment `*.vercel.app` URL, which Deployment Protection gates on prod as well as preview —
so it read Vercel's SSO login page and printed the same `OK — no drift` it prints now. The output
is identical; only now does it mean anything.

## Live verification (item 8 / item 9, against the ALIAS)

| Check | Result |
|---|---|
| `/vaults.json` | **200**, 80,997 B, `application/json; charset=utf-8` |
| `/api/registry.v1.json` | **200**, `cmp` byte-identical, md5 `b8645979…` |
| `/api/vaults` · `/vaults/index.json` · `/data/vaults.json` | **404** — the other three machine-eye paths, deliberately not aliased |
| payload | 74 vaults + 14 edges, 19 `field_coverage` keys |
| `/reference/registry-api` | **200** (both slash forms); `llms.txt` names both routes |
| `Dataset` on `/vaults` | present, `distribution → DataDownload → contentUrl` = the live endpoint |
| 3 formerly-bare pages | JSON-LD present on all 3 |
| P3.1 twins | `/get-started/.md` · `/about/.md` · `/vaults/.md` → **200**, unregressed |

**Nothing moved between local and live.** Both measurements are recorded separately in the delta
packet rather than merged — local-green is evidence about the build, live-green about the site.

## Findings

- **F-l — the redaction idiom in this campaign's own notes is self-defeating.**
  `${VAR:+SET}${VAR:-UNSET}` does **not** redact: `:+` emits `SET` when the var is set, and `:-`
  then emits **the value** (it only falls back to `UNSET` when *unset*). Run against
  `SS_VERCEL_TOKEN` at session open, it printed `SET` followed by the live token. The token is the
  known throwaway test-account credential whose rotation the operator explicitly de-prioritized
  (E4 c159, 2026-06-07), so this is not an incident — but the *idiom* is recorded in the campaign
  memory as the redaction pattern, and it leaks every time it is used on a var that is set.
  **Correct form: `[ -n "$VAR" ] && echo SET || echo UNSET`**, or `${VAR:+SET}` alone with no
  fallback concatenated after it. Routed to **P4.4**.
- **A third freshly-written instrument was wrong before the site was.** The live JSON-LD census
  written for this session's re-probe walks `@graph` and nested `publisher` — the two blind spots
  P3.2's AAR had just identified — and **not `distribution`**, so it reported `DataDownload` absent
  from `/vaults`. It is present. Caught by reading the payload instead of believing the parser.
  P3.2 hit this twice in one session; this is the third in two missions. Convention 14 is not
  over-written.

## Progress log

- **17:27** — session opened; startup checklist run; open sweep clean; recon recorded.
- **17:29** — ⛩ prod GO fired; deploy clean; live headers verified against the alias.
- **17:32** — item 8 / item 9 re-probed live; all rows held; delta packet re-stamped
  `live_alias_verified`; claim rows R-130/131/132 live-verified (**R-131 deliberately NOT moved up**
  to `verified` — deploying a mechanism does not exercise a forward promise).
