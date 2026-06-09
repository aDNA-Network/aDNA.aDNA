---
type: backlog_idea
created: 2026-06-09
updated: 2026-06-09
status: open
priority: high
source: campaign_adna_network_audit (P0 audit + P1-S1)
tags: [backlog, idea, deploy, process, adna_network, credibility]
---

# Idea — establish an adna.network deploy cadence

## Problem
The adna.network audit found the **live site multiple states behind HEAD**: live advertised **40** vaults, the registry-of-record had drifted to **38** then **37**, and the whole E5 surface (`/commons`) plus accumulated fixes sat committed-but-undeployed. Live also carried credibility/privacy bugs (a named client in CakeHealth's public page, a 404 GitHub link, a dead-domain `robots.txt`) that had been fixable for a while. **Commit-only with no deploy rhythm means public credibility/privacy defects sit live indefinitely**, and the site silently misrepresents the network's size.

## Proposal
Establish a deploy cadence for adna.network:
- **Scheduled:** deploy at each decadal close (the existing E-series rhythm) — the natural "ship it" gate.
- **Hotfix path:** an explicit fast path to deploy a **credibility/privacy/security fix** without waiting for a decadal close (this audit's P1-S1 ship-now was the first instance — a targeted prebuilt deploy that excluded embargoed content).
- **Drift guard:** a check (CI or pre-deploy) that the live vault count / version match `vaults.json.vault_count` + the version constant, so live can't silently diverge from HEAD.
- **Embargo discipline:** the deploy procedure must support excluding embargoed routes (e.g. holding `/commons` out of the build) until clearance — codify the move used in P1-S1.

## Why it matters
The site is the public face of the standard (convert / recruit / credibility). A stale or defect-bearing live site directly undermines all three. A cadence + hotfix path bounds how long any public defect can live.

## Disposition
Resolve at the audit campaign's **P2** (`mission_ana_p2_closeout_realign`) — fold the cadence into the E5-close deploy procedure + record it in the main campaign STATE / a deploy runbook. Related: [[project_cloudflare_dns_standard]] (DNS→Vercel), the `SS_VERCEL_TOKEN` redaction gotcha, the `/commons` ADR-010 embargo.
