---
type: artifact
artifact_type: diagnosis_note
campaign_id: campaign_haussmann
mission: mission_haussmann_p0_2_deploy_hardening
title: "P0.2 O0 — why the configured security headers never reached production"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0_2, deploy, headers, diagnosis]
---

# Diagnosis — the header drift, root-caused

**Symptom** `[D]`: live adna.network serves none of the four headers configured in `site/vercel.json` (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy); only platform-default HSTS arrives. MDN Observatory C/50. Confirmed by three independent probes (genesis baseline, B3 sweep, and today's `check_live_headers.mjs` red-proof: served 0/4, exit 1).

**Root cause** `[D]`: the deploy path is `npx astro build` → `vercel deploy --prebuilt`. With `--prebuilt`, the Vercel CLI reads **only** the Build-Output-API config at `site/.vercel/output/config.json` — which the `@astrojs/vercel` adapter generates from the Astro config and which **does not fold in root `vercel.json`**. Inspected on disk: `config.json` keys = `[version, routes]`, **no `headers` key**, only 3 adapter-emitted route entries (asset caching). Root `vercel.json` headers are applied only on Vercel-side builds (`vercel build`/git integration) — a path this project deliberately avoids because `npm run build`'s prebuild reaches sibling vaults absent from any remote build context.

**Independent corroboration** `[R]`: WebForge field-verified the identical mechanism (its `inject_headers.mjs` header: *"`vercel deploy --prebuilt` reads `.vercel/output/config.json` and IGNORES the root `vercel.json` headers — skill_deployment_validation Addendum #4, field-verified B3.5"*), including two subtle hazards our fix inherits guarded: the **placement invariant** (the injected header route must precede the first `{"handle": …}` route or statics never get headers) and the **dialect guard** (`vercel.json` `source` is path-to-regexp; `config.json` `src` is regex — verbatim copy is only safe for `"/(.*)"`).

**Why it shipped unnoticed**: no live-header probe existed anywhere (CI tests the tree, never production), and deploys are manual with no post-deploy verification step. The 2026-08-11 deploy also went unrecorded — same missing-discipline class.

**The fix (implemented this mission)**:
1. `site/scripts/inject_headers.mjs` — **byte-identical adoption** of WebForge's canonical (md5 `3fa4a975cf9cf10a98103151115c7484`, source `WebForge.aDNA/what/lib/deploy/inject_headers.mjs` @ `6096157a`; the fleet's copy-with-identity pattern — a `cmp` sync leg lands with the P4.2 gate work).
2. `site/scripts/deploy_adna.sh` — the only sanctioned deploy path: token-env guard (prefers `VERCEL_TOKEN_ADNA`, absent from the broker as of today → `SS_VERCEL_TOKEN` interim, gap tracked in the Hestia memo §2a) → clean-tree guard → `npx astro build` → inject → **structural injection verification** (headers present + placement invariant) → deploy → **live-header verification** → appended `deploy_record:` line (closes the unrecorded-deploy class).
3. `site/scripts/check_live_headers.mjs` — the standing drift watcher, derived from `vercel.json` (single source; never a transcribed list), with `--expect-fail-demo` red path. **Red-proofs captured 2026-08-16**: real drift detected (exit 1) + demo failure (exit 1).

**Verification plan**: preview deploy → 4/4 headers on the preview URL → operator GO → prod deploy → live 4/4 + Observatory ≥ B.
