#!/usr/bin/env bash
# =============================================================================
# item11_probe_redtest.sh — demonstrate machine_eye_item11_probe.mjs FAILS
# (HAUSSMANN P4.4a A1 / F-o · campaign convention 14)
#
# "A verification instrument is not believed until it has been demonstrated to
#  fail, and it must assert it reached the thing it claims to check."
#
# The cases that matter are 5 and 6: they plant the exact tokens a naive probe
# would score as PRESENCE and assert the verdict is STILL ABSENT. That is the
# whole content of F-o — the text limb must be incapable of moving the item.
#
# Case 7 is the check_live_headers lesson: unreachable must report as
# UNREACHABLE (2), never as ABSENT (0).
#
# Controls (cases 8, 9) must PASS. A red-test with no passing control cannot
# distinguish "the probe is strict" from "the probe refuses everything" — and a
# refusal instrument that refuses everything is as useless as one that refuses
# nothing.
# =============================================================================
set -u -o pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROBE="$HERE/machine_eye_item11_probe.mjs"
TMP="$(mktemp -d)"
PORT=8793
SRV_PID=""
PIDS=""

cleanup() {
  # Reap EVERY server started, not just the last — the first version tracked one
  # PID and leaked the rest into the next run's port.
  for p in $PIDS; do kill "$p" 2>/dev/null; done
  rm -rf "$TMP"
}
trap cleanup EXIT

pass=0; fail=0
check() { # name expected_exit actual_exit
  if [ "$2" = "$3" ]; then
    printf '  ✅ %-58s exit %s\n' "$1" "$3"; pass=$((pass+1))
  else
    printf '  ❌ %-58s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1))
  fi
}

# -- fixture corpora ----------------------------------------------------------
# CLEAN: no mcp mention at all.
printf 'aDNA is a context-graph standard.\n' > "$TMP/clean.txt"

# NOISY: exactly the shape of today's live corpus — incidental mentions that
# have nothing to do with this site offering a server.
cat > "$TMP/noisy.txt" <<'EOF'
Playwright MCP (@playwright/mcp) — agentic navigate / click / type.
When using Model Context Protocol servers with Claude Code, the .mcp.json
config file is also gitignored.
Warp.aDNA — config-overlay + MCP (not a fork).
EOF

# DISCLOSURE: the site's OWN honest statement that it has no MCP server. This
# is the fixture that killed the capability-token filter — it contains the most
# specific capability token there is, and it means the opposite.
cat > "$TMP/disclosure.txt" <<'EOF'
There is no MCP server. One exists, it works, and it is not published — so
nothing on this site mentions one, and /.well-known/mcp.json returns 404
rather than describing software you cannot install.
EOF

# HOSTILE: every capability token planted, deliberately, as if the corpus were
# shouting that the server exists.
cat > "$TMP/hostile.txt" <<'EOF'
adna-mcp-server is published. Run npx adna-mcp-server to connect.
The descriptor lives at /.well-known/mcp.json and the endpoint is /mcp.
mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp mcp
EOF

# -- a local server that 404s both endpoints (the true ABSENT state) ---------
# ⚠ EVERY response carries x-redtest-mode. That header is how start_srv proves
# the listener it found is OURS — see the port-reuse note there.
cat > "$TMP/server.mjs" <<'EOF'
import { createServer } from 'node:http';
const mode = process.env.MODE || '404';
const id = { 'x-redtest-mode': mode };
const srv = createServer((req, res) => {
  if (mode === 'answer' && (req.url === '/.well-known/mcp.json' || req.url === '/mcp')) {
    res.writeHead(200, { ...id, 'content-type': 'application/json' });
    return res.end('{"name":"adna-mcp-server"}');
  }
  if (mode === 'redirect') {
    res.writeHead(302, { ...id, location: 'https://vercel.com/login' });
    return res.end();
  }
  res.writeHead(404, { ...id, 'content-type': 'text/html' });
  res.end('<html>404</html>');
});
srv.on('error', (e) => { console.error('LISTEN FAILED:', e.code); process.exit(9); });
srv.listen(Number(process.env.PORT));
EOF

# ⭐ THE HARNESS DEFECT THIS FIXES, FOUND BY THIS RED-TEST ON ITS FIRST RUN.
# The first version polled `curl -s -o /dev/null http://127.0.0.1:$PORT/` and
# treated a 0 exit as "my server is up". On this node **Docker holds port 8791**
# and answered every request with 404 — so the fixture servers never bound, the
# readiness probe reported ready, and all five MOVED/UNREACHABLE cases came back
# ABSENT. The probe under test was CORRECT the whole time; the harness was not.
#
# That is convention 14 applied to the harness itself — *an instrument must
# assert it reached the thing it claims to check* — and it is the same shape as
# check_live_headers.mjs printing "OK — no drift" having read a login page.
# P4.2 already recorded one red-test control failing on port reuse; this is the
# second, so the remedy is IDENTITY, not a different port number. A foreign
# listener cannot forge x-redtest-mode.
start_srv() { # mode
  [ -n "$SRV_PID" ] && kill "$SRV_PID" 2>/dev/null
  MODE="$1" PORT="$PORT" node "$TMP/server.mjs" &
  SRV_PID=$!
  PIDS="$PIDS $SRV_PID"
  for _ in $(seq 1 40); do
    got="$(curl -s -o /dev/null -D - "http://127.0.0.1:$PORT/" 2>/dev/null \
           | tr -d '\r' | awk -F': ' 'tolower($1)=="x-redtest-mode"{print $2}')"
    [ "$got" = "$1" ] && return 0
    if [ -n "$got" ]; then
      echo "  ⛔ port $PORT answers in mode '$got', expected '$1'"; exit 9
    fi
    sleep 0.1
  done
  # Distinguish "nothing came up" from "someone else owns this port" — the two
  # need different fixes and look identical from a bare timeout.
  if curl -s -o /dev/null --max-time 2 "http://127.0.0.1:$PORT/"; then
    echo "  ⛔ PORT $PORT IS HELD BY A FOREIGN LISTENER (no x-redtest-mode header)."
    echo "     Our fixture server never bound. Free the port or change PORT."
    lsof -nP -iTCP:$PORT -sTCP:LISTEN 2>/dev/null | sed -n '2p'
  else
    echo "  ⛔ fixture server failed to start on $PORT"
  fi
  exit 9
}

run() { node "$PROBE" "$@" >/dev/null 2>&1; echo $?; }

echo
echo "item 11 probe — red-test (F-o)"
echo "======================================================================"

echo "-- MUTATIONS: the endpoint limb must decide, and only it --"
start_srv answer
check "1. endpoint answers 200 + clean corpus      → MOVED"   1 "$(run "http://127.0.0.1:$PORT" "$TMP/clean.txt")"
check "2. endpoint answers 200 + noisy corpus      → MOVED"   1 "$(run "http://127.0.0.1:$PORT" "$TMP/noisy.txt")"
check "3. endpoint answers 200 + no corpus at all  → MOVED"   1 "$(run "http://127.0.0.1:$PORT" "$TMP/nonexistent.txt")"

start_srv redirect
check "4. endpoint redirects (login wall)          → UNREACH" 2 "$(run "http://127.0.0.1:$PORT" "$TMP/clean.txt")"

echo
echo "-- ⭐ THE F-o CASES: text must NOT be able to move the verdict --"
start_srv 404
check "5. noisy corpus (11 'mcp' hits)             → ABSENT"  0 "$(run "http://127.0.0.1:$PORT" "$TMP/noisy.txt")"
check "6. HOSTILE corpus, every token planted      → ABSENT"  0 "$(run "http://127.0.0.1:$PORT" "$TMP/hostile.txt")"
check "6b. the site's own DISCLOSURE of absence    → ABSENT"  0 "$(run "http://127.0.0.1:$PORT" "$TMP/disclosure.txt")"

echo
echo "-- reachability: unknown must never read as absent --"
kill "$SRV_PID" 2>/dev/null; SRV_PID=""
sleep 0.3
check "7. nothing listening                        → UNREACH" 2 "$(run "http://127.0.0.1:$PORT" "$TMP/clean.txt")"

echo
echo "-- CONTROLS (must pass, or the probe just refuses everything) --"
start_srv 404
check "8. control: 404s + clean corpus             → ABSENT"  0 "$(run "http://127.0.0.1:$PORT" "$TMP/clean.txt")"
check "9. control: 404s + missing corpus file      → ABSENT"  0 "$(run "http://127.0.0.1:$PORT" "$TMP/nonexistent.txt")"

echo
echo "-- ENUMERATION LIMB: the advisory reading must actually be produced --"
# A limb that silently prints nothing would pass every case above while having
# been deleted. Assert the advisory line REACHES THE OUTPUT.
adv="$(node "$PROBE" "http://127.0.0.1:$PORT" "$TMP/noisy.txt" 2>&1 | grep -c 'ADVISORY LIMB (corpus drift')"
check "10. advisory line is emitted (count=1)"      1 "$adv"
# And it must report the noise rather than swallowing it.
n="$(node "$PROBE" "http://127.0.0.1:$PORT" "$TMP/noisy.txt" 2>&1 | grep -oE 'mcp = [0-9]+' | head -1 | grep -oE '[0-9]+')"
if [ "${n:-0}" -ge 4 ]; then
  printf '  ✅ %-58s mcp = %s\n' "11. advisory COUNTS the noise (>=4)" "$n"; pass=$((pass+1))
else
  printf '  ❌ %-58s mcp = %s\n' "11. advisory COUNTS the noise (>=4)" "${n:-none}"; fail=$((fail+1))
fi

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
