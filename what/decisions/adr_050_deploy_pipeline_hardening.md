---
type: adr
adr_number: "050"
title: "Deploy-pipeline hardening for adna-docs: reproducible, recorded, drift-watched"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, deploy, vercel, d12]
---

# ADR-050 — Deploy path (stub)

## Status

**Proposed** — options fixed at genesis; diagnosis + recommendation completed by mission P0.2, ratified at **DP3**.

## Context

There is no Vercel git integration: pushing does not redeploy; deploys are hand-typed `npx astro build` + `vercel --prebuilt --prod` shipping the local tree (including any WIP) `[R Berthier; D STATE]`. The live site serves only HSTS while `vercel.json` configures four more headers — deployed ≠ configured `[D sweep #3; Observatory C/50]`. A production deploy on 2026-08-11 is unrecorded in any vault record `[D baseline]`. The token (`SS_VERCEL_TOKEN`) has a recurring leak-in-CLI-error history; per-project `VERCEL_TOKEN_ADNA` is parked in WebForge's blocked wave `[R]`.

## Decision space

- **(a) Vercel git integration** — push-to-deploy; eliminates ships-local-WIP and unrecorded deploys; adds blast radius (every push is a deploy; prebuild/sibling-vault constraint must be handled in Vercel build config or ignored via prebuilt-only… note the historic reason for prebuilt: source builds fail on `../scripts`).
- **(b) Wrapped manual** — a checked deploy script (WebForge `deploy_prebuilt.sh` lineage): clean-tree assertion, header injection/verification, deploy-ID recording, token via broker env only.
- **(c) b now, a after P2** — harden immediately, revisit integration once the IA churn settles.

## Recommendation

(c), pending P0.2's diagnosis of *why* headers drift (which may change the calculus). Either way: the live-header CI probe + deploy-ID recording discipline are unconditional.

## Consequences

Ends the silent-drift class; the freeze protocol becomes enforceable; the token ask routes to Hestia/Vitruvius.

## Ratification

- **Decision:** _pending P0.2_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** DP3 · **Date:** _pending_ · **Status:** **proposed**.
