---
type: artifact
artifact_type: incident_finding
finding_id: F-s
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
severity: S1
status: resolved   # restored 2026-08-24T02:44:59Z under operator GO; red-proven 10/10 — see §Resolution
created: 2026-08-23
updated: 2026-08-23
last_edited_by: agent_rosetta
probe_date: 2026-08-23        # ADR-054 clause 3 — every sentence about an external surface carries its probe date
tags: [haussmann, incident, deploy, regression, live, needs_human]
---

# F-s — `adna.network` is serving a build that predates 2026-08-18. Every HAUSSMANN surface shipped since is **off the live site**.

> **All probes below run 2026-08-23 ~19:20–19:40 PDT (2026-08-24 ~02:20–02:40Z)** against the public
> alias. Provenance `[D]` throughout — direct `curl` against `https://adna.network`, plus the Vercel
> control plane read through the CLI with the token supplied by env-var.

## What is true right now

`adna.network` and `www.adna.network` both resolve to deployment
**`dpl_Y9L5fqiHCzsyoMkuDi6QxAUJj4fN`** (`adna-docs-d39up7nsk-…`), **created 2026-08-23 18:14:24 PDT** —
about **one hour before this probe**. That deployment serves content predating **P2.1** (2026-08-18).

## The evidence — five independent shipped surfaces, all absent

| Probe | Shipped at | Recorded as live-verified | **Live now** |
|---|---|---|---|
| `/api/registry.v1.json` | P3.2 | **200**, alias, 2026-08-22 | **404** |
| `/vaults.json` | P3.2 | **200** byte-identical, alias, 2026-08-22 | **404** |
| `/state-of-the-network` (and `/`-suffixed, and `.md` twin) | P1.2, 2026-08-18 | in `twin_manifest.json`; footer + home `proofHref` + `/about` + `llms.txt` all link it | **404** (all three forms) |
| `/org-context-graphs/` | P2.1 — fixed from 404 → **301** | ADR-051 | **404** (the *pre-fix* behaviour) |
| `/vaults/Astro.aDNA` | P2.1 — 24 slug redirects → **301** | ADR-051 | **200** (un-redirected) |
| `/adopters` | P2.2 ⛩ DP5 — → **301** `/use-cases/` | ADR-049 | **200** (the retired page still serving) |
| homepage `machine-door` block | P3.3 O3 | `"itself an aDNA vault"` greps **1** on the alias, 2026-08-22 | greps **0** |

The live `llms.txt` does not name `/state-of-the-network`; the live sitemap does not contain it; the live
footer still links `/adopters`. **These are not cache artifacts** — a cache-busted request returns the same,
and a stale HTML cache cannot make a JSON *route* 404.

## Where it came from

`site/scripts/deploy_log.txt` ends at:

```
deploy_record: 2026-08-23T01:45:36Z mode=prod url=…izrobe0cq… tree=5c6b22d
```

— the P3.4 deploy, correct and recorded. **`vercel ls` shows TEN production deployments since**, at roughly
1h ×4, 2h ×2, 4h, 5h, 6h ×2, all `● Ready`, all `target: production`, all `Builds: . [0ms]` (prebuilt
uploads), all under user `sciencestanley-5565`. **Not one of them appears in any `deploy_log*` anywhere in
the fleet** `[D]` — a fleet-wide grep returns only this vault's log, whose last line is the P3.4 record.

The project has **no git integration** (`vercel project inspect` shows no repository section), so these were
**CLI deploys by an actor outside this vault's deploy discipline** — not an auto-build. On Vercel, the
production domain follows the newest `--prod` deployment automatically, so each of those ten silently took
`adna.network`; the last one is what a reader gets today.

⚠ **This vault did not deploy today.** This session has run no build, no deploy, and no write to `site/`.

## Why it matters beyond the outage

1. **A reader following the site's own proof link gets a 404.** The homepage's honesty claim carries
   `proofHref="/state-of-the-network/"`; the footer links it from every page. That is the R-90 defect class
   — *shipping a proof-link a reader cannot follow* — which `canonical_properties.json` names in its own
   comments, now live and inbound.
2. **Four separate missions recorded "DEPLOYED + LIVE-VERIFIED ON THE ALIAS"** and every one of those
   verifications was, as far as can be told, honest at the time. The regression happened *after* them. But
   the campaign has no instrument that would ever notice — **every live check runs once, at deploy time, and
   nothing re-probes.** Convention 14 says an instrument is not believed until demonstrated to fail; this is
   the adjacent gap: **an instrument that was right once and is never asked again.**
3. **It silently invalidated this session's own evidence.** The 30 T0 captures taken at O0 are of
   `adna.network` — and are therefore captures of a **pre-Aug-18 build**, not of the campaign's shipped
   state. The harness was green; the alias was reachable; the content was wrong. *The instrument reached
   the surface it named and the surface was not what the name meant.*

## What is NOT claimed

- **No cause is assigned.** Who ran the ten deploys, from which tree, and why, is unknown from here. It is
  not asserted to be malicious, accidental, or automated — only that it is unrecorded.
- **`izrobe0cq` is not proven good by probe.** It is `● Ready` and carries `tree=5c6b22d`, the tree the P3.4
  record names and the tree whose site content matches the working tree (`git log -- site/` HEAD is
  `c84e19b`; nothing after `5c6b22d` touches `site/`). Its own URL is Deployment-Protection-gated, so it
  cannot be probed directly — **the convention-14 trap, and the reason this is stated as inference, not fact.**

## Options for the operator (all outward; none fired)

| # | Act | Cost | Risk |
|---|---|---|---|
| **A** | `vercel promote adna-docs-izrobe0cq…` — re-point production at the known-good P3.4 deployment | seconds, no rebuild | Restores `tree=5c6b22d` exactly. Does **not** address the unknown actor; could be clobbered again. |
| **B** | Rebuild + ship via `site/scripts/deploy_adna.sh prod` (the only sanctioned path, convention 6) | a full build + 4 injectors + verify | Produces a proper `deploy_record`; slower; same clobber exposure. |
| **C** | Identify the source of the ten deploys **first**, then restore | unknown | A restore that is overwritten in an hour is not a fix. |

**Recommendation: C-then-A** — a one-question check with the operator about what else deploys `adna-docs`,
then the cheap promote. Restoring blind risks a fifth "verified live" record that is false by morning, which
is the exact failure this finding is about.

## Resolution — restored 2026-08-24T02:44:59Z, red-proven

⛩ **Operator ruled option B**: restore via the sanctioned path, not `promote`. Executed
`site/scripts/deploy_adna.sh prod` — the full chain (clean-tree guard → `npx astro build` → four
injectors in deploy order → injection verification → prebuilt prod deploy → alias header check → record).

```
deploy_record: 2026-08-24T02:44:59Z mode=prod url=https://adna-docs-j2fq4vn44-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered) tree=922519c
```

Build: **225 pages**, 32 tier-C twins written, **222 advertised** — matching the count the homepage
narrates. Injectors: headers 4 @ route 0 · installer 5 · redirects **42/42 widened** · negotiation
**444**. Both idempotent re-run proofs no-op'd. `check_live_headers` served **4/4 on the alias**.

⭐ **The header check is not the verification that mattered.** It passed identically *before* the restore —
the stale build carried the same four headers. **Content is what regressed, and only a content probe could
see it.** The verification of record is therefore the F-s probe set re-run against the alias, which is
**red-proven by construction**: every assertion below was failing one hour earlier, on the same command.

| Probe | Before (19:2x PDT) | After (19:45 PDT) |
|---|---|---|
| `/api/registry.v1.json` | 404 | **200** |
| `/vaults.json` | 404 | **200** |
| `/state-of-the-network/` | 404 | **200** |
| `/state-of-the-network.md` (twin) | 404 | **200** |
| `/org-context-graphs/` | 404 | **301** |
| `/vaults/Astro.aDNA` | 200 | **301** |
| `/adopters` | 200 | **301** |
| homepage `machine-door` | 0 | **1** |
| `"itself an aDNA vault"` | 0 | **1** |
| `"222 pages have one"` | 0 | **1** |

**10/10.** The site's own proof-link is reachable again.

### What is still open after the restore

1. ⚠ **The cause is still unknown, and the exposure is unchanged.** Ten unrecorded production deploys
   landed today from an actor outside this vault. Nothing prevents an eleventh. **`tree=922519c` is live
   now; that is a fact with a timestamp, not a guarantee.**
2. ⛔ **No changelog entry was written, deliberately.** The restore returns the site to content whose
   changelog entry already exists (P3.4's); a new entry would imply new content. Whether the *outage
   itself* warrants public disclosure under convention 1 is an operator judgment, not a deploy-step
   decision — **flagged, not decided.**
3. **The structural gap is untouched**: every live check in this campaign runs once, at deploy time.
   Nothing re-probes. F-s was found by accident, in a mission about tokens, because a capture harness
   happened to be pointed at production.

## Evidence estate (what a later reader can actually open)

Per the ratified capture policy, applied in its dangle-safe order — **nothing below is cited that is not
tracked**:

- **Tracked**: `captures_outage_20260823/capture_report.json` (per-surface status/title/h1/bodyLen for all
  15 routes as production served them **during** the outage) + two cited frames —
  `home__desktop__dark.png` (the machine-door block **absent**) and
  `state-of-the-network__desktop__dark.png` (the **404** a reader following the site's own proof-link got).
- **Local-only, gitignored**: the other 28 outage frames and 26 post-restore frames.
- ⚠ **The outage set is NOT regenerable.** The build it captures no longer exists anywhere. That is why
  the report JSON and the two frames were committed rather than left to a "re-run the harness" note — the
  usual regenerate-on-demand escape hatch does not apply to evidence of a state that has been repaired.

## Routed

- **Escalation** (CLAUDE.md Escalation Cascade): session → mission → campaign → `STATE.md` `#needs-human`.
- **P4.4 (CI hardening)** already owns **F-h** (re-read P0.2's header evidence against the alias) and
  **F-p**. This adds the structural sibling: **a live surface has no standing re-probe**, only deploy-time
  checks. A `verified`-quote fixture that carries a probe date (ADR-054 clause 3) still cannot catch this,
  because nothing re-runs it.
