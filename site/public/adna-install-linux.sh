#!/bin/sh
# Double-click installer. Same file ships as:
#   "Install aDNA (Mac).command"    — macOS runs .command in Terminal on double-click
#   "Install aDNA (Linux).sh"       — mark executable, or run ./Install*.sh
#
# It is a wrapper around install.sh and nothing more, so there is exactly one install path
# to reason about. The reason it exists is that a double-click has no terminal to read
# output from and no way to pass a flag — so this one keeps the window open at the end and
# says, in plain words, what happened and what to do next.
set -eu

BASE="${ADNA_INSTALL_BASE:-https://adna.network}"

# macOS quarantines anything downloaded from a browser. If we were opened from a quarantined
# copy the user has already clicked through that, so nothing to do here but note it for
# support: `xattr -d com.apple.quarantine <file>` clears it.

clear 2>/dev/null || true
cat <<'BANNER'

   ┌──────────────────────────────────────────────┐
   │   aDNA — joining you to the network          │
   └──────────────────────────────────────────────┘

   This sets up your machine and sends one enrollment
   request to the network operator: your machine's name
   and its PUBLIC key, nothing else. It does not connect
   you to anything on its own — a person has to approve
   your machine first. Offline, the request is printed
   for you to send instead.

BANNER

# A double-clicked window HAS a tty, so reading from it is safe here (unlike inside a curl
# pipe). But if nobody can press return — a test, a scripted run, no tty at all — waiting
# forever is the wrong answer, so ADNA_YES=1 skips every pause.
pause() {
    [ "${ADNA_YES:-}" = "1" ] && return 0
    [ -r /dev/tty ] || return 0
    printf '%s' "$1"
    read _ignored </dev/tty || true
    echo ""
}

pause "   Press return to begin, or close this window to cancel. "

rc=0
if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$BASE/install.sh" | ADNA_INSTALL_BASE="$BASE" sh || rc=$?
elif command -v wget >/dev/null 2>&1; then
    wget -qO- "$BASE/install.sh" | ADNA_INSTALL_BASE="$BASE" sh || rc=$?
else
    echo "   ⛔ Neither curl nor wget is installed, so I cannot download the installer."
    rc=1
fi

echo ""
if [ "$rc" -eq 0 ]; then
    cat <<'DONE'
   ✅ Done. Scroll up and follow the line that starts
      with NEXT — it says exactly what (if anything) to
      send to whoever invited you.

DONE
else
    cat <<'FAILED'
   ⛔ It stopped early. It is safe to run again.

      Copy everything above and send it to whoever invited
      you; the reason is in there.

FAILED
fi

pause "   Press return to close. "
