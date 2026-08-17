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

## Recommendation — evidence-complete (P0.2 O0, 2026-08-16)

**(c) wrapped-manual now, git-integration revisited after P2.** The diagnosis (`campaign_haussmann/artifacts/p0_2/diagnosis.md`) settled the calculus: the drift's root cause is structural to `--prebuilt` (Build-Output config ignores root `vercel.json` — confirmed on disk + field-verified independently by WebForge B3.5), and option (a)'s git integration would force Vercel-side builds that the sibling-vault prebuild makes fragile. The implemented shape:

- `site/scripts/deploy_adna.sh` = the only sanctioned path (token-env guard → clean-tree guard → `npx astro build` → header injection [WebForge canonical, byte-identical md5 `3fa4a975…`] → structural verification → deploy → live verification → appended `deploy_record:` line).
- `site/scripts/check_live_headers.mjs` = the standing drift watcher (vercel.json-derived, red-path proven) — run post-deploy by the script and as a CI probe (offline-skip).
- Token: `VERCEL_TOKEN_ADNA` when brokered (WebForge W1 rotation; not in the Keychain as of 2026-08-16), `SS_VERCEL_TOKEN` env-form interim.
- Revisit trigger: after P2's IA/URL churn settles, re-evaluate (a) with a Vercel build-command override (`npx astro build`) as the candidate mechanism.

## Consequences

Ends the silent-drift class; the freeze protocol becomes enforceable; the token ask routes to Hestia/Vitruvius.

## Ratification

- **Decision:** _pending P0.2_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** DP3 · **Date:** _pending_ · **Status:** **proposed**.
