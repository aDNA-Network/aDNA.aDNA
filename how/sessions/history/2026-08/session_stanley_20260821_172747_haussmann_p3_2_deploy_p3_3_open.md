---
type: session
session_id: session_stanley_20260821_172747_haussmann_p3_2_deploy_p3_3_open
created: 2026-08-21
updated: 2026-08-21
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
executor_tier: opus
token_budget_estimated: "~120–180 kT — a ship-and-clear session in front of a build. P3.2 prod deploy + live re-probe + evidence re-stamp (~40) · owed queue: Venus memo, Hopper ruling → P4.4 F-k (~25) · push (~10) · P3.3 open: convention-13 AC coherence pass + O0 design → ADR-056 §mcp (~50–100). P3.3 does NOT finish here — it is a ~250–350 kT / 2-session mission and O2 is an operator publish gate."
token_budget_actual: "≈150 kT by content load — inside the ~120–180 kT estimate. The deploy+verify half came in under (~35 kT: the chain is one script and the live probes are cheap); the owed-queue half ran over (~55 kT) because both memos needed real recon before they could be written honestly, and P3.3's coherence pass (~40 kT) cost more than a coherence pass should because it turned into live npm reconnaissance."
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

## SITREP

### Completed

- **⛩ P3.2 DEPLOYED** — `2026-08-22T00:29:33Z mode=prod tree=861e871`. The registry JSON is live;
  every machine-eye row re-probed against the alias held unchanged from the local build.
- **Evidence re-stamped honestly** — delta packet `probe_scope: local_preview_only →
  live_alias_verified`, the LOCAL BUILD banner **struck rather than deleted**, both measurements
  recorded separately. R-130/131/132 live-verified, **R-131 deliberately left `verifiable →
  unexercised`**.
- **Pushed** `924f2d8..45adf02`, then `..9cdd80b`. Manual `gitleaks detect --source .` returned the
  one expected false positive; the pre-push hook printed `clean ✓` having scanned nothing, which
  **confirms Hopper's no-op finding in live operation**.
- **The owed queue is cleared.** Both GOs from the Decade-2 ISS had sat unconsumed. Venus and Hopper
  memos **delivered on operator GO**, `md5` + `cmp` verified after the act, both identical.
- **P3.3 opened** at its convention-13 coherence pass, which found two defects before any build.

### In progress

**P3.3 (`in_progress`)** — coherence pass done and recorded; **O0 design not started**. Budget **not
re-ratified** (the estimate predates both defects).

### Blockers

- ⛩ **Operator owes one authenticated check**: `npm whoami` / `npm org ls adna` — is `@adna` ours?
  It exists and is empty; ownership is UNKNOWN from an unauthenticated node. Gates AC2's package
  name, the install docs, and AC3's homepage wording. **Does not block the rest of O0.**
- **Venus holds the installer publish.** GO granted, artifact unreachable. `adna.network/install.sh`
  serves **v0.3.1** until they deliver the tarball + `.minisig` or re-cut on the key-holding box.

### Next up

**P3.3 O0** — tool surface, transport (stdio npx), versioning against the current MCP spec, and the
**runtime-fetch vs bundled-snapshot** decision for the registry tool. None of it needs the npm
answer. Then O1 build + fresh-agent handshake smoke; **halt at O2** for the publish GO.

### Findings routed

- **F-k → P4.4** — the `.adna` pre-push gate, ⛩ ruled ours. First row there that is an operator
  ruling rather than a mission's leftover.
- **F-l → P4.4** — `${VAR:+SET}${VAR:-UNSET}` does not redact.
- **P4.4's inherited section now carries rows from every Decade-2 mission**, and its budget predates
  four of them. Flagged in-file rather than absorbed.

### Files touched

**Created** — `who/coordination/coord_2026_08_21_rosetta_to_venus_publish_go_granted_artifact_unreachable.md` ·
`who/coordination/coord_2026_08_21_rosetta_to_hopper_template_gate_is_ours.md` · this file.

**Modified** — `machine_eye_delta_p3_2.md` · `claim_register.md` · `mission_haussmann_p3_2_registry_json.md` ·
`mission_haussmann_p3_3_mcp_server.md` · `mission_haussmann_p4_4_ci_hardening.md` ·
`campaign_haussmann/CLAUDE.md` · `STATE.md` · `site/scripts/deploy_log.txt` ·
`how/gates/haussmann_decade2_sitrep.output.json`.

**Delivered outward** — the two memos above, into `Network.aDNA/` and `Git.aDNA/`.

## AAR-relevant note (P3.3 is not complete; no mission AAR yet)

**The lesson this session actually taught, and it arrived twice in unrelated lanes:** *an operator GO
can be correctly granted for an act whose prerequisite does not exist, and neither the gate nor the
operator reading it can see that.* Venus's memo was accurate in every particular — right version,
right hashes, supersession condition stated — and the publish was still not performable, because
`dist/` is gitignored and nobody had checked the artifact from *our* filesystem. Four hours later
P3.3's AC2 turned out to have the same shape: *"published under the org's npm scope"*, with no
objective establishing that a scope exists or is ours.

**The habit that follows:** before a gate asks for a GO on an outward act, verify the act's
prerequisites are reachable **from the tree that will perform it** — the artifact, the credential,
the namespace. This is convention 13 (*read the ACs against each other*) pointed outward: read the
**ask** against the **world** before it is signed, not after.

## Progress log

- **17:27** — session opened; startup checklist run; open sweep clean; recon recorded.
- **17:29** — ⛩ prod GO fired; deploy clean; live headers verified against the alias.
- **17:32** — item 8 / item 9 re-probed live; all rows held; delta packet re-stamped
  `live_alias_verified`; claim rows R-130/131/132 live-verified (**R-131 deliberately NOT moved up**
  to `verified` — deploying a mechanism does not exercise a forward promise).
- **17:34** — manual gitleaks (1 known FP); pushed `924f2d8..45adf02`, verified by `ls-remote`.
- **17:38** — Venus + Hopper memos authored; F-k + F-l routed to P4.4.
- **17:42** — P3.3 opened; convention-13 coherence pass found two defects; npm recon run.
- **17:46** — ⛩ memo delivery GO'd; both delivered + verified; **own typed count caught and fixed in
  both copies**.
- **17:50** — STATE updated; SITREP written; close sweep.

## Next Session Prompt

> You are Rosetta in `~/aDNA/aDNA.aDNA`. **P3.2 is deployed and verified live** (`tree=861e871`) —
> do not re-deploy it. **`P3.3` is `in_progress`** (`mission_haussmann_p3_3_mcp_server.md`): its
> convention-13 coherence pass is **done and recorded in-file — read that section first**, it found
> two defects and pre-agreed AC3's two conditional wordings. **Execute O0**: tool surface, transport
> (stdio npx), versioning against the current MCP spec, package name, and the **runtime-fetch vs
> bundled-snapshot** decision for the registry tool (`/vaults.json` is live now, so both are real
> options — a runtime fetch is always-current but adds a network dependency to every tool call; a
> bundled snapshot drifts). Design → ADR-056 §mcp. **Then O1**; **halt at O2** — npm publish is an
> operator act. ⛩ **Check whether the operator answered the npm question**: `@adna` exists on npm but
> is empty and ownership is UNKNOWN from an unauthenticated node; `adna`, `adna-mcp-server` and
> `@adna/mcp-server` are all unclaimed. **Do not let AC3 ship a homepage claim about a server nobody
> can install.** The mission's **budget was not re-ratified** after the coherence pass — re-cost it
> before executing. **Sweep `git ls-files --others --exclude-standard who/coordination/` at open** —
> six inbound memos in three days arrived that way and by no other means, three of them mid-session.
> Watch for **Venus's reply** (they owe the v0.4.3 tarball + `.minisig`, or word that the cut must be
> re-run on the key-holding box; `adna.network/install.sh` still serves v0.3.1).
