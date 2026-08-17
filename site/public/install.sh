#!/bin/sh
# adna node installer — one command.
#
#   curl -fsSL https://<host>/install.sh | sh
#
# This bootstrap is deliberately small and boring so that a person can read the whole
# thing before piping it to a shell. It does exactly four things:
#
#   1. checks for python3                 (the payload is python; no other runtime)
#   2. downloads ONE payload tarball      (adna_install.py + the persona profiles)
#   3. VERIFIES it against a hash pinned in this file
#   4. runs it
#
# WHY THE HASH IS PINNED HERE: `curl | sh` is already a trust decision — you are trusting
# whoever serves this file. That is one decision, and it is visible. What must NOT happen is
# a SECOND, invisible trust decision when this script fetches more code. So the payload hash
# is baked in above. If the payload does not match, this refuses and exits non-zero. Fetching
# a checksum next to the payload would be theatre: whoever can swap one can swap both.
#
# Nothing here needs root. Nebula's binaries and config go under $ADNA_PREFIX (default
# ~/.adna), and the install stops before joining any network — a mesh join needs a
# certificate signed by a human at the CA. The last thing printed is the enrollment request
# to send back. Nothing about your machine is transmitted anywhere by this script.
#
# Pass options through the pipe like this:
#   curl -fsSL https://<host>/install.sh | sh -s -- --profile developer --dry-run
#
set -eu

VERSION="0.3.0"
BASE="${ADNA_INSTALL_BASE:-https://adna.network}"
PAYLOAD="adna-installer-${VERSION}.tar.gz"
# sha256 of ${PAYLOAD} — regenerate with ./release.sh, which prints the line to paste here.
PAYLOAD_SHA256="d7c073fffeb92b6fea5d9c8da3c5c35f46e20b5dd582844415d276aca411fe25"

say()  { printf '%s\n' "$*"; }
die()  { printf '\n  ⛔ %s\n\n' "$*" >&2; exit 1; }

# ---------------------------------------------------------------- preflight
# Refuse to run under sudo from a normal user's shell. Everything goes under $HOME, which
# under sudo resolves to root's home — so the keypair and config land in /root and the user's
# own nebula never finds them. Worse than failing: it looks like it worked. Plain root with no
# SUDO_USER (containers, CI) is unaffected. Borrowed from the Claude Code installer, which
# solves the identical problem. ADNA_ALLOW_SUDO=1 for a deliberate root install.
if [ "$(id -u)" -eq 0 ] && [ -n "${SUDO_USER:-}" ] && [ "$SUDO_USER" != "root" ] \
   && [ -z "${ADNA_ALLOW_SUDO:-}" ]; then
    die "do not run this installer with sudo.

     It installs into your home directory and does not need root. Under sudo everything
     would land in root's home instead of yours, and your own nebula would never find it.

     Re-run the same command WITHOUT sudo.
     To install for root on purpose, set ADNA_ALLOW_SUDO=1."
fi

command -v python3 >/dev/null 2>&1 || die "python3 is required and was not found.
     macOS:  xcode-select --install
     Debian/Ubuntu:  sudo apt install python3
     Fedora:  sudo dnf install python3"

if command -v curl >/dev/null 2>&1; then fetch() { curl -fsSL "$1" -o "$2"; }
elif command -v wget >/dev/null 2>&1; then fetch() { wget -qO "$2" "$1"; }
else die "need curl or wget"
fi

# macOS ships shasum, most Linux ships sha256sum. Accept either; refuse if neither, because
# an install that silently skips verification is worse than one that stops.
if command -v sha256sum >/dev/null 2>&1; then sha256() { sha256sum "$1" | cut -d' ' -f1; }
elif command -v shasum  >/dev/null 2>&1; then sha256() { shasum -a 256 "$1" | cut -d' ' -f1; }
else die "no sha256 tool (sha256sum or shasum) — cannot verify the download, refusing to continue"
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT INT TERM

# ---------------------------------------------------------------- fetch + verify
say ""
say "  aDNA node installer ${VERSION}"
say "  • fetching payload"
fetch "${BASE}/${PAYLOAD}" "$TMP/p.tgz" || die "could not download ${BASE}/${PAYLOAD}"

got="$(sha256 "$TMP/p.tgz")"
if [ "$PAYLOAD_SHA256" = "PAYLOAD_SHA256_UNSET" ]; then
    die "this install.sh has no payload hash pinned — it was published unreleased.
     Refusing to run unverified code. Report this; do not work around it."
fi
[ "$got" = "$PAYLOAD_SHA256" ] || die "PAYLOAD CHECKSUM MISMATCH — refusing to run
     expected $PAYLOAD_SHA256
     got      $got
     Do not retry blindly. Either the download was corrupted or the payload was substituted."
say "  ✓ payload verified"

tar xzf "$TMP/p.tgz" -C "$TMP" || die "payload did not extract"
[ -f "$TMP/adna_install.py" ] || die "payload is missing adna_install.py"

# ---------------------------------------------------------------- run
# Default is a real install under ~/.adna. --dry-run (or ADNA_DRY_RUN=1) plans without
# touching anything. Callers can still override --prefix/--bindir/--instance.
DRY=""
[ "${ADNA_DRY_RUN:-}" = "1" ] && DRY=1
HAS_PROFILE=""
# Rotate the arg list to drop --dry-run (this script consumes it; argparse has never heard of
# it) while preserving quoting. Note whether the caller set --profile so the default below
# does not silently override an explicit choice.
n=$#; i=0
while [ $i -lt $n ]; do
    a="$1"; shift
    case "$a" in
        --dry-run)            DRY=1 ;;
        --profile|--profile=*) HAS_PROFILE=1; set -- "$@" "$a" ;;
        *)                    set -- "$@" "$a" ;;
    esac
    i=$((i + 1))
done

[ -n "$HAS_PROFILE" ] || set -- "$@" --profile "${ADNA_PROFILE:-developer}"
if [ -z "$DRY" ]; then
    PREFIX="${ADNA_PREFIX:-$HOME/.adna}"
    set -- "$@" --execute --prefix "$PREFIX" --bindir "$PREFIX/bin"
fi

# stdin is the pipe carrying THIS script, not a keyboard. Anything the installer wants to ask
# has to come from the terminal, or it silently eats the rest of the script. Hand it /dev/tty
# when one exists; otherwise give it nothing rather than the pipe.
cd "$TMP"
if [ -t 1 ] && [ -r /dev/tty ]; then
    exec python3 adna_install.py "$@" </dev/tty
else
    exec python3 adna_install.py "$@" </dev/null
fi
