#!/usr/bin/env bash
# visual_regression_container.sh — run gate-49 INSIDE the CI container (HAUSSMANN P4.4b B0 · AC1).
#
# ⛩ AC1's 08-24 amendment is the whole reason this file exists: "the red-test runs IN THE SAME
# CONTAINER that generated the baselines — a diff produced on a developer machine is not admissible
# evidence for this criterion." On this Mac against container baselines EVERY screenshot diffs on
# font rasterisation, so a true positive is indistinguishable from the exact noise the container
# exists to eliminate. Without this script the amendment is unfollowable locally, and an
# unfollowable rule is one that gets quietly skipped.
#
# The image is the SAME PIN gates.yml uses (v1.59.1-noble, matched to @playwright/test ^1.59.1).
# If those two ever drift, baselines generated here stop being the baselines CI compares against —
# so the pin is asserted below rather than trusted.
#
# ⚠ THE WHOLE VAULT IS MOUNTED, NOT JUST site/. The freshness layer derives each page's date from
# `git log` over `site/src/content` (utils/contentSource.ts), and git cannot answer from a subtree
# with no .git. gates.yml solves the same problem with `fetch-depth: 0`; mounting the repo root is
# the local equivalent. Mount only site/ and every page silently ships with no date — which
# contentSource.ts is careful to make honest, and which would still bake a different picture into
# all 24 baselines than CI produces.
#
# ⚠ node_modules IS A NAMED VOLUME, shadowing the host's. The host tree is darwin-arm64; the
# container is linux. Sharing them gets you esbuild/sharp binaries for the wrong platform and a
# build failure that looks like a code error.
#
# Usage (from site/):
#   bash scripts/visual_regression_container.sh baseline   # generate/refresh the 24 baselines
#   bash scripts/visual_regression_container.sh check      # compare against committed baselines
#   bash scripts/visual_regression_container.sh redtest    # V1's 7-case matrix, in-container
#   bash scripts/visual_regression_container.sh shell      # poke around

set -euo pipefail
cd "$(dirname "$0")/.." || exit 2

MODE="${1:-check}"
IMAGE="mcr.microsoft.com/playwright:v1.59.1-noble"
VAULT="$(cd .. && pwd)"
VOLUME="adna_gate49_node_modules"

# The pin, asserted rather than assumed: this script and CI must agree on the image, or "generated
# in the CI container" becomes a sentence about a container nobody used.
CI_IMAGE="$(grep -oE 'mcr\.microsoft\.com/playwright:[^ ]+' "$VAULT/.github/workflows/gates.yml" | head -1)"
if [ "$CI_IMAGE" != "$IMAGE" ]; then
  echo "✗ IMAGE PIN DRIFT — gates.yml uses '$CI_IMAGE', this script uses '$IMAGE'."
  echo "  Baselines generated here would not be the baselines CI compares against. Fix both, then re-baseline."
  exit 2
fi

case "$MODE" in
  baseline) INNER='npx playwright test --project=snapshot --update-snapshots' ;;
  check)    INNER='npx playwright test --project=snapshot' ;;
  redtest)  INNER='bash scripts/visual_regression_redtest.sh' ;;
  shell)    INNER='bash' ;;
  *) echo "usage: $0 {baseline|check|redtest|shell}"; exit 2 ;;
esac

docker volume create "$VOLUME" >/dev/null

echo "⛩ gate-49 in-container ($MODE) — $IMAGE"
echo "  vault: $VAULT"
echo

# Interactive flags ONLY when there is a terminal. An agent/CI runner has no TTY and `docker run -it`
# fails there with "the input device is not a TTY" — which reads like a container problem and is not.
TTY_FLAGS=()
[ -t 0 ] && [ -t 1 ] && TTY_FLAGS=(-it)

exec docker run --rm "${TTY_FLAGS[@]}" \
  -v "$VAULT":/work \
  -v "$VOLUME":/work/site/node_modules \
  -w /work/site \
  -e CI=1 \
  -e GATE_PORT=4399 \
  "$IMAGE" \
  bash -c "
    set -e
    git config --global --add safe.directory /work
    # npm ci, not npm install: the lockfile is the point of a reproducible baseline.
    [ -x node_modules/.bin/astro ] || npm ci --no-audit --no-fund
    # \`npx astro build\`, NEVER \`npm run build\` — the prebuild regenerates committed vault data
    # from sibling vaults that are not in this mount (campaign convention 6, and gates.yml's own note).
    npx astro build
    $INNER
  "
