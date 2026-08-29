---
type: artifact
artifact_class: deploy_probe_record
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_1_trust_path
phase: GR
title: "GR-1 live probe — POST-DEPLOY run against production (green)"
created: 2026-08-29
updated: 2026-08-29
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260828_193824_haussmann_go_gate_push
tags: [artifact, haussmann, gr_1, deploy_probe, green]
---

# GR-1 live probe — POST-DEPLOY run against production (green)

Run **2026-08-29T03:1xZ** against `https://adna.network`, **after** the GR-1 + P4.4b B1/B2a deploy.
Alias serving **`d5ff043`** (stamp re-read at the object, not inferred from the deploy succeeding).

**The same script, unmodified, that returned 13 PASS / 13 FAIL against `51af717` four hours earlier**
([[probe_predeploy_red]]). That is what makes this green worth something: every assertion below has
been demonstrated capable of failing, on this surface, against a real production build.

```
HAUSSMANN GR-1 live probe → https://adna.network
================================================================

alias is serving: d5ff043

  PASS  / responds 200
  PASS  the BaseLayout stylesheet is linked from /
  PASS  served stylesheet carries no inlined font — found 0
  PASS  /get-started/what-your-agent-reads/ responds 200
  PASS  cites release v8.9, not a bare commit sha
  PASS  no 40-hex commit sha in a source link
  PASS  the page publishes its source links — found 2
  PASS  source link resolves publicly (200) — …/tree/v8.9/.adna
  PASS  /get-started.md responds 200
  PASS  the twin carries the <name> placeholder
  PASS  the check command is intact, not collapsed to ~/aDNA/.aDNA
  PASS  the explanatory sentence is not an empty code span
  PASS  the unscoped "Nothing is sent anywhere" is gone
  PASS  the agent step is disclosed (Anthropic named)
  PASS  the command count is corrected to three
  PASS  the wrong count "except the last two" is gone
  PASS  /reference/ responds 200
  PASS  the card reads "Visual Identity v2"
  PASS  the mislabelled "Visual Identity v3" is gone
  PASS  /llms.txt responds 200
  PASS  the present-tense protocol claim is absent
  PASS  the derived counts survived the rewrite
  PASS  /privacy/ responds 200
  PASS  /accessibility/ responds 200
  PASS  /api/registry.v1.json responds 200
  PASS  the build stamp is readable

================================================================
  26 PASS / 0 FAIL   (alias serving d5ff043)
================================================================

✅ GREEN across every assertion.
```

## Red → green, assertion by assertion

All 13 that failed pre-deploy now pass; all 13 controls held. **No assertion changed state in the
wrong direction**, which is the check that would have caught a deploy that fixed one page by
breaking another.

| Pre-deploy FAIL | Now | The claim it carries |
|---|---|---|
| inlined font in the served stylesheet (found 1) | **found 0** | P1-1 — the production CSP no longer refuses the site's own font |
| bare sha cited; no public resolution (404) | **v8.9, resolves 200** | P1-3 — the provenance pin works for a stranger, not just from this checkout |
| twin missing `<name>`, command collapsed, empty code span | **all three intact** | P1-2 — the machine copy of the quickstart is no longer corrupted |
| unscoped "Nothing is sent anywhere"; wrong command count | **scoped; three** | P2-1 / P2-2 — the copy says what is true |
| card mislabelled "Visual Identity v3" | **reads v2** | AC-4 |
| present-tense protocol claim in `llms.txt` | **absent** | AC-2, R-14 residue |

## Independent spot-checks — not taken from the probe

The probe is one instrument. These were run separately, because a probe agreeing with itself is not
corroboration:

- `curl /.well-known/adna-build.json` → `d5ff043a74ae211f9143bafe90bc2274dd4137aa`, built
  `2026-08-29T03:14:13.845Z`, `mode: prod`.
- ⭐ **`git branch -r --contains <that sha>` → `origin/main`.** The published stamp names a commit
  that **resolves publicly**. This is the specific reason the two record commits were pushed before
  the deploy rather than after: `inject_build_stamp.mjs` stamps local `HEAD` and **nothing in the
  chain checks that HEAD is public**, so deploying first would have published a pin resolvable only
  from this checkout — *the exact defect class this mission exists to repair* (P1-3), reintroduced by
  the act of shipping its fix.
- `HEAD github.com/aDNA-Network/aDNA/tree/v8.9/.adna` → **200**, requested directly.
- `curl /get-started.md | grep -c '<name>'` → **5**.
- Deploy chain's own live-header verification: **4/4 by name and value**, no drift.

## Deploy record

```
deploy_record: 2026-08-29T03:14:32Z mode=prod
  url=https://adna-docs-483gwhhxc-science-stanleys-projects.vercel.app
  token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered)
  tree=d5ff043
```

**No override flags.** Neither `--force-rollback` nor `--bootstrap-stamp` was used or needed; the
alias-ancestry guard passed on its own terms (`live 51af717 is an ancestor of HEAD d5ff043`).

⚠ The changelog cadence nudge fired (newest entry `2026-08-28`, UTC today `2026-08-29`). It is
non-blocking by design and it is a **UTC-rollover artifact** — the `2026-08-28` entry *is* the entry
for this deploy. Recorded so a later reader does not mistake it for a missed changelog.

## What this deploy does NOT establish

- **B1's vitals emitter ships as a no-op.** Zero-network until Speed Insights is enabled — "the
  emitter is live" is not "vitals are being collected." Owed: ⛩ enable → transport → first p75.
- **CI is still red** on `gate-33-freshness` (641/1). It did not gate this deploy — production is
  built locally and shipped `--prebuilt`, so CI's artifact never reaches the site — but the red is
  live and is carried as register row **`F-x`**.
