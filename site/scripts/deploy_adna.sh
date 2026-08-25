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
[[ "$MODE" == "preview" || "$MODE" == "prod" ]] || { echo "usage: deploy_adna.sh preview|prod [--force-rollback=YYYY-MM-DD] [--bootstrap-stamp=YYYY-MM-DD]" >&2; exit 1; }
shift || true

# -- the two escape hatches, both DATED so they cannot become standing (AC0) ---
# Each must carry today's UTC date. That is the whole mechanism: a dated flag
# self-expires, so it cannot be pasted into a runbook, aliased, or left in a
# wrapper script and quietly become the default. The design forbids a standing
# "no stamp ⇒ allow" branch; this is how that is enforced rather than promised.
FORCE_ROLLBACK=""; BOOTSTRAP_STAMP=""; DRY_RUN=""; STAMP_URL_OVERRIDE=""
TODAY_UTC="$(date -u +%F)"
for arg in "$@"; do
  case "$arg" in
    --force-rollback=*)  FORCE_ROLLBACK="${arg#*=}" ;;
    --bootstrap-stamp=*) BOOTSTRAP_STAMP="${arg#*=}" ;;
    --dry-run)           DRY_RUN=1 ;;
    --stamp-url=*)       STAMP_URL_OVERRIDE="${arg#*=}" ;;
    *) echo "ABORT: unknown argument $arg" >&2; exit 1 ;;
  esac
done

# --stamp-url exists so the AC0 red-test can drive the REAL script (not a copy of
# it) against mutated stamps — convention 14: an instrument is not believed until
# it has been demonstrated to fail, and a red-test of a copy is not a red-test of
# the thing. It is confined to --dry-run, which exits before the build, so the
# override lives on a path that CANNOT PUBLISH. Refusing it otherwise is what
# keeps it from being the permanent bypass a plain env var would have been.
if [[ -n "$STAMP_URL_OVERRIDE" && -z "$DRY_RUN" ]]; then
  echo "ABORT: --stamp-url is only valid with --dry-run. A deploy path that can be pointed at an" >&2
  echo "       arbitrary stamp is not a guard. (This refusal is itself red-tested — case 8.)" >&2
  exit 1
fi
for pair in "force-rollback:$FORCE_ROLLBACK" "bootstrap-stamp:$BOOTSTRAP_STAMP"; do
  name="${pair%%:*}"; val="${pair#*:}"
  [[ -z "$val" ]] && continue
  if [[ "$val" != "$TODAY_UTC" ]]; then
    echo "ABORT: --$name=$val is not today ($TODAY_UTC UTC)." >&2
    echo "       These flags are dated on purpose — a stale one is a standing override, which is the" >&2
    echo "       exact failure mode AC0 exists to prevent. Re-issue it deliberately, today, with a GO." >&2
    exit 1
  fi
done

# -- guard: token via env only ------------------------------------------------
if [[ -n "${VERCEL_TOKEN_ADNA:-}" ]]; then TOKEN="$VERCEL_TOKEN_ADNA"; TOKEN_NAME="VERCEL_TOKEN_ADNA";
elif [[ -n "${SS_VERCEL_TOKEN:-}" ]]; then TOKEN="$SS_VERCEL_TOKEN"; TOKEN_NAME="SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered)";
else echo "ABORT: no deploy token in env (VERCEL_TOKEN_ADNA or SS_VERCEL_TOKEN)" >&2; exit 1; fi

# -- guard: clean tree (never ship uncommitted WIP; pt19 data untouched) ------
if [[ -n "$(git status --porcelain src/ public/ vercel.json astro.config.mjs 2>/dev/null)" ]]; then
  echo "ABORT: uncommitted changes under site/src|public|vercel.json|astro.config.mjs — commit or stash first (never ship WIP)." >&2
  git status --porcelain src/ public/ vercel.json astro.config.mjs >&2; exit 1
fi

# -- guard: ANCESTRY ON THE PRODUCTION ALIAS (HAUSSMANN AC0 / F-u) ------------
#
# The clean-tree guard above proves YOUR tree is clean. Nothing proved the ALIAS
# was not about to be taken by someone else's — and on 2026-08-23 it was, in both
# directions (F-s). Two checkouts of this repo exist; each one's --prod deploy
# silently un-published the other's, and NEITHER MISBEHAVED.
#
# The invariant: never publish a tree that does not contain the commit currently
# serving the alias. The alias says which commit it is via the stamp written by
# inject_build_stamp.mjs below. Full reasoning — including why this is an ancestry
# guard and NOT the single-writer lease F-u originally asked for — lives in
# artifacts/p4_4/f_u_alias_guard_design.md and in check_alias_ancestry.mjs's head.
#
# The URL is hardcoded here on purpose. An env var to repoint it would be a
# permanent bypass; the red-test drives check_alias_ancestry.mjs directly instead.
PROD_ALIAS="https://adna.network"
STAMP_URL="${STAMP_URL_OVERRIDE:-$PROD_ALIAS/.well-known/adna-build.json}"
if [[ "$MODE" == "prod" ]]; then
  echo "== guard: alias ancestry ($STAMP_URL) =="
  set +e
  node scripts/check_alias_ancestry.mjs "$STAMP_URL" .
  ANCESTRY_RC=$?
  set -e
  case "$ANCESTRY_RC" in
    0) : ;;                                     # live commit is an ancestor of HEAD
    2)                                          # 404: no stamp yet — bootstrap only
      if [[ -n "$BOOTSTRAP_STAMP" ]]; then
        echo "⚠ BOOTSTRAP OVERRIDE ACCEPTED ($BOOTSTRAP_STAMP) — publishing over an unstamped alias, once."
        echo "  After this deploy the alias is self-describing and this flag must never be needed again."
      else
        echo "ABORT: the live alias carries no build stamp, so ancestry cannot be checked." >&2
        echo "       This is expected exactly once. With an operator GO, re-run as:" >&2
        echo "         ./scripts/deploy_adna.sh prod --bootstrap-stamp=$TODAY_UTC" >&2
        exit 1
      fi
      ;;
    *)                                          # a real refusal
      if [[ -n "$FORCE_ROLLBACK" ]]; then
        # NOTE: --bootstrap-stamp deliberately CANNOT reach this branch. Forgiving a
        # missing stamp and forcing past a known ancestry violation are different acts
        # with different risks, so they are different flags.
        echo "⚠ FORCE-ROLLBACK OVERRIDE ACCEPTED ($FORCE_ROLLBACK) — knowingly publishing a tree that"
        echo "  rolls back live work. This is recorded in deploy_log.txt."
      else
        echo "ABORT: alias ancestry check refused this deploy (see above)." >&2
        exit 1
      fi
      ;;
  esac
fi

# -- cadence: is the changelog keeping up with what we ship? (P2.3 O3) ---------
# Non-blocking on purpose. Plenty of deploys are a typo fix and deserve no entry, so a hard gate
# would train people to write filler to get past it. But the changelog decayed to a single April
# entry precisely because nobody was ever asked, at the moment of shipping, whether this one
# mattered. Asking here costs a line and puts the question where the answer is known.
NEWEST_ENTRY="$(ls -1 src/content/changelog/*.md 2>/dev/null | sed 's#.*/##; s#\.md$##' | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' | sort | tail -1)"
TODAY="$(date -u +%Y-%m-%d)"
if [[ -n "$NEWEST_ENTRY" && "$NEWEST_ENTRY" < "$TODAY" ]]; then
  echo "-- cadence: newest changelog entry is $NEWEST_ENTRY, today is $TODAY."
  echo "   If this deploy changes anything a reader would notice, add src/content/changelog/$TODAY.md first."
fi

# -- the override record, assembled here so --dry-run can show it --------------
# Any override taken is part of the deploy record, not a footnote to it. A rollback
# that leaves no trace is how "the escape hatch becomes the habit" (AC0's design note).
OVERRIDE=""
[[ -n "$FORCE_ROLLBACK"  ]] && OVERRIDE="$OVERRIDE force_rollback=$FORCE_ROLLBACK"
[[ -n "$BOOTSTRAP_STAMP" ]] && OVERRIDE="$OVERRIDE bootstrap_stamp=$BOOTSTRAP_STAMP"

if [[ -n "$DRY_RUN" ]]; then
  echo "== DRY RUN — all guards passed; stopping before the build. Nothing was built or deployed. =="
  # Printed, NEVER appended: writing a record for a deploy that did not happen would
  # corrupt the one log the ancestry story depends on.
  echo "would_record: mode=$MODE tree=$(git rev-parse --short HEAD)$OVERRIDE"
  exit 0
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

# Redirect widening (HAUSSMANN P2.1). Astro's redirect routes are anchored `…$`, which matches
# the bare path only — verified live 2026-08-18, both shipped redirects 404'd on their
# trailing-slash form, the shape every canonical URL on this site actually uses. This rewrites
# each to `…/?$` so one route answers both. Carries no redirect list of its own: it widens
# whatever astro.config.mjs emitted, so there is no second place to keep in sync.
echo "== widen redirects to both slash forms (config.json) =="
node scripts/inject_redirects.mjs .

# Content negotiation (HAUSSMANN P3.1 / ADR-056). Probed live 2026-08-19: `Accept: text/markdown`
# returned text/html with the LITERAL SAME ETag — Vercel served one cached object regardless of
# `Accept`. One exact route per twin, generated from twin_manifest.json; deliberately not a
# blanket rewrite, which would 404 every path that has no twin. Runs AFTER inject_redirects so a
# legacy URL still redirects to its canonical form first, then negotiates there.
echo "== inject Accept: text/markdown negotiation (config.json) =="
node scripts/inject_negotiation.mjs .

# Build stamp (HAUSSMANN AC0 / F-u). Publishes the commit this artifact was built
# from to /.well-known/adna-build.json, so the NEXT deploy — from this checkout or
# any other — can check ancestry before publishing. `deploy_log.txt` cannot do this
# job: it is per-checkout, which is exactly why F-s was invisible from here while
# ten deploys it knew nothing about had landed. A log on the machine that deployed
# is not evidence available to the machine about to deploy.
#
# Runs LAST of the injectors and writes into .vercel/output/static (not config.json),
# so it cannot disturb the route placement invariant the others share.
echo "== inject build stamp (/.well-known/adna-build.json) =="
node scripts/inject_build_stamp.mjs . "$MODE"

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

# Negotiation routes: same idempotent-re-run proof as the installer routes above. The tool
# asserts placement, per-route `Vary: Accept`, count-vs-manifest, that every manifest twin is
# actually present on the deploy surface, and that its splice did not push any redirect past the
# filesystem boundary — so a no-op second run means all of that held.
echo "== verify negotiation routes (idempotent re-run) =="
OUT_NEG="$(node scripts/inject_negotiation.mjs .)" || { echo "$OUT_NEG" >&2; exit 1; }
echo "$OUT_NEG"
case "$OUT_NEG" in
  *"already injected"*) : ;;
  *) echo "ABORT: negotiation routes were NOT present after the injection step (second run was not a no-op)" >&2; exit 1 ;;
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

# HAUSSMANN P3.1 — VERIFY THE ALIAS, NOT THE DEPLOYMENT URL.
#
# `$URL` is the per-deployment *.vercel.app address, and Vercel Deployment Protection gates it on
# BOTH preview and prod. Every request there answers 302 → vercel.com/sso-api, and the login page
# it lands on sets the same four header NAMES this check looks for. So the step has been reading
# Vercel's own CSP (`default-src 'self' vercel.com *.stripe.com twitter.com …`) and reporting
# "OK — no drift" since P0.2 built it. It has never once verified adna.network.
#
# Found when P3.1's hardened checker refused the redirect and the step failed on a deploy that had
# in fact succeeded — the deploy was fine; the verification had always been decorative.
#
# Prod verifies the public alias, which is genuinely reachable. Preview has no public alias, so it
# is verified only when reachable, and says CANNOT VERIFY rather than passing on someone else's
# headers — an honest gap beats a false green.
# PROD_ALIAS is defined once, up at the ancestry guard.
if [[ "$MODE" == "prod" ]]; then VERIFY_URL="$PROD_ALIAS"; else VERIFY_URL="$URL"; fi

echo "== verify live headers ($VERIFY_URL) =="
sleep 3
if [[ "$MODE" == "prod" ]]; then
  node scripts/check_live_headers.mjs "$VERIFY_URL" || { echo "WARN: live header verification failed on $VERIFY_URL" >&2; exit 1; }
else
  node scripts/check_live_headers.mjs "$VERIFY_URL" || \
    echo "NOTE: preview headers unverifiable (Deployment Protection gates *.vercel.app). The deploy itself is unaffected; prod verifies against $PROD_ALIAS." >&2
fi

STAMP="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
# $OVERRIDE is assembled above, before the dry-run exit, so --dry-run can show it.
REC="deploy_record: $STAMP mode=$MODE url=$URL token=$TOKEN_NAME tree=$(git rev-parse --short HEAD)$OVERRIDE"
echo "$REC" | tee -a scripts/deploy_log.txt
echo "== DONE — record the deploy line above in the session log + STATE (campaign law) =="
