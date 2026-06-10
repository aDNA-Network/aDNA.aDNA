---
type: backlog_idea
created: 2026-06-09
updated: 2026-06-10
status: resolved   # cadence ratified at the audit P2 (2026-06-10); see Resolution
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

## Resolution (2026-06-10 — audit P2)

**Cadence ratified:**
1. **Scheduled:** deploy at every **decadal close** (E5 c169 → E6 c179 → …), bundled with that decadal's close cascade.
2. **Hotfix path:** operator-flagged **credibility/privacy/security** fixes deploy immediately via the targeted prebuilt procedure (gates green on the full build → hold out embargoed routes → `vercel build` → `deploy --prebuilt`, token via env only, output redacted). **Instances:** audit P1-S1 (2026-06-09) and the install-truth deploy (2026-06-10) — the procedure is now twice-used and is the runbook of record (documented in both session files).
3. **Embargo discipline:** `/commons` (+ `subnetworks` data) stays held out until the ADR-010 co-sign clears; first inclusion = the E5-close coordinated deploy (C5).
4. **Drift guard** (the live-matches-HEAD check on vault count + version) → routed to the **E7 capstone** launch-verify scope (with gate-14's consistency checks as the build-side half).

Candidate **Campaign Standing Order #21** (alongside the MAX-III candidate SO #20) — ratify at the Phase-5 exit gate per campaign SO #14. Status set `resolved`; file retained per archive-never-delete.
