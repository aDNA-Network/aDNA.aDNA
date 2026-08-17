#!/usr/bin/env bash
# ============================================================================
# deploy_adna.sh — the ONLY sanctioned deploy path for adna.network (P0.2).
#
# Chain: guards → npx astro build → inject headers (WebForge P13 canonical,
# byte-identical copy: what/lib/deploy/inject_headers.mjs @ WebForge 6096157a,
# md5 3fa4a975cf9cf10a98103151115c7484) → verify injection → deploy → verify
# live headers → print + append the deploy record line.
#
# Usage:  ./scripts/deploy_adna.sh preview        (from site/)
#         ./scripts/deploy_adna.sh prod           (operator GO required — campaign law)
#
# Token: env-only, NEVER argv (leak-incident class). Prefers VERCEL_TOKEN_ADNA
# (Home-brokered; WebForge W1 rotation), falls back to SS_VERCEL_TOKEN until
# the broker entry lands (gap tracked in the Hestia memo §2a, 2026-08-16).
#
# Discipline (ADR-050 / campaign CLAUDE.md §6): clean-tree check · npx astro
# build (NEVER npm run build — prebuild regenerates committed data, pt19) ·
# every deploy ID recorded (the unrecorded-08-11-deploy class, closed).
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."   # site/

MODE="${1:-preview}"
[[ "$MODE" == "preview" || "$MODE" == "prod" ]] || { echo "usage: deploy_adna.sh preview|prod" >&2; exit 1; }

# -- guard: token via env only ------------------------------------------------
if [[ -n "${VERCEL_TOKEN_ADNA:-}" ]]; then TOKEN="$VERCEL_TOKEN_ADNA"; TOKEN_NAME="VERCEL_TOKEN_ADNA";
elif [[ -n "${SS_VERCEL_TOKEN:-}" ]]; then TOKEN="$SS_VERCEL_TOKEN"; TOKEN_NAME="SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered)";
else echo "ABORT: no deploy token in env (VERCEL_TOKEN_ADNA or SS_VERCEL_TOKEN)" >&2; exit 1; fi

# -- guard: clean tree (never ship uncommitted WIP; pt19 data untouched) ------
if [[ -n "$(git status --porcelain src/ public/ vercel.json astro.config.mjs 2>/dev/null)" ]]; then
  echo "ABORT: uncommitted changes under site/src|public|vercel.json|astro.config.mjs — commit or stash first (never ship WIP)." >&2
  git status --porcelain src/ public/ vercel.json astro.config.mjs >&2; exit 1
fi

echo "== build (npx astro build — never npm run build) =="
npx astro build

echo "== inject headers (vercel.json → .vercel/output/config.json) =="
node scripts/inject_headers.mjs .

# Scoped per-file routes for the installer downloads. SEPARATE TOOL on purpose: inject_headers.mjs
# is the byte-identical WebForge copy and aborts on any source but "/(.*)", so scoped rules live in
# installer_routes.json. Same placement invariant, same abort-loudly discipline. No-op if the file
# is absent, so this stays harmless on any surface that has no installer.
echo "== inject installer routes (installer_routes.json -> config.json) =="
node scripts/inject_installer_headers.mjs .

echo "== verify injection =="
node -e "
const c=require('fs').readFileSync('.vercel/output/config.json','utf8');
const cfg=JSON.parse(c);
const hdrRoute=(cfg.routes||[]).find(r=>r.src==='^/(.*)\$'&&r.headers&&r.continue===true);
if(!hdrRoute) { console.error('ABORT: injected header route not found in config.json'); process.exit(1); }
const need=['Content-Security-Policy','X-Frame-Options','X-Content-Type-Options','Referrer-Policy'];
const missing=need.filter(k=>!(k in hdrRoute.headers));
if(missing.length){ console.error('ABORT: injected route missing: '+missing.join(', ')); process.exit(1); }
const idx=cfg.routes.indexOf(hdrRoute), h=cfg.routes.findIndex(r=>r&&r.handle);
if(h!==-1&&idx>h){ console.error('ABORT: header route after first handle route (placement invariant)'); process.exit(1); }
console.log('injection verified: '+need.join(', ')+' @ route index '+idx);
"

# Installer routes: verify by RE-RUNNING the injector and requiring a no-op. The tool already
# asserts presence and the placement invariant internally and aborts on violation — duplicating
# that logic inline here is what just broke (backslashes in a regex do not survive bash's
# double-quoted node -e). Idempotent no-op == every route present and correctly placed.
echo "== verify installer routes (idempotent re-run) =="
OUT_IIH="$(node scripts/inject_installer_headers.mjs .)" || { echo "$OUT_IIH" >&2; exit 1; }
echo "$OUT_IIH"
case "$OUT_IIH" in
  *"already injected"*|*"nothing to do"*) : ;;
  *) echo "ABORT: installer routes were NOT present after the injection step (second run was not a no-op)" >&2; exit 1 ;;
esac
echo "== deploy ($MODE) using \$${TOKEN_NAME%% *} =="
if [[ "$MODE" == "prod" ]]; then
  OUT="$(VERCEL_TOKEN="$TOKEN" npx vercel deploy --prebuilt --prod --yes 2>&1)" || { echo "$OUT" | sed "s/${TOKEN}/[REDACTED]/g" >&2; exit 1; }
else
  OUT="$(VERCEL_TOKEN="$TOKEN" npx vercel deploy --prebuilt --yes 2>&1)" || { echo "$OUT" | sed "s/${TOKEN}/[REDACTED]/g" >&2; exit 1; }
fi
URL="$(echo "$OUT" | grep -Eo 'https://[a-z0-9.-]+\.vercel\.app' | tail -1)"
echo "$OUT" | sed "s/${TOKEN}/[REDACTED]/g" | tail -3
[[ -n "$URL" ]] || { echo "ABORT: no deployment URL parsed" >&2; exit 1; }

echo "== verify live headers ($URL) =="
sleep 3
node scripts/check_live_headers.mjs "$URL" || { echo "WARN: live header verification failed on $URL" >&2; exit 1; }

STAMP="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
REC="deploy_record: $STAMP mode=$MODE url=$URL token=$TOKEN_NAME tree=$(git rev-parse --short HEAD)"
echo "$REC" | tee -a scripts/deploy_log.txt
echo "== DONE — record the deploy line above in the session log + STATE (campaign law) =="
