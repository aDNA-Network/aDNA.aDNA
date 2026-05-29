#!/usr/bin/env bash
# uninstall.sh — symmetric teardown for aDNA.aDNA Lattice Home (Rosetta).
# Removes vault-owned symlinks created by install.sh --active. Leaves substrate
# files in vault untouched. Idempotent (no-op on already-clean).
#
# Lifted + simplified from CMux.aDNA/how/configs/bin/uninstall.sh at SHA 7747a15a
# per skill_lattice_home_install step 1.

set -euo pipefail

DRY_RUN=false

resolve_vault_root() {
  local script_path
  if command -v realpath >/dev/null 2>&1; then
    script_path="$(realpath "${BASH_SOURCE[0]}")"
  else
    script_path="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
  fi
  printf '%s\n' "$(cd "$(dirname "$script_path")/../../.." && pwd)"
}

log()  { printf 'lattice uninstall: %s\n' "$*"; }
warn() { printf 'lattice uninstall: warn (%s)\n' "$*" >&2; }
fail() { printf 'lattice uninstall: fail (%s)\n' "$*" >&2; exit 1; }

usage() {
  cat <<'EOF'
uninstall.sh — aDNA.aDNA Lattice Home teardown

Usage:
  uninstall.sh           Remove vault-owned user-scope symlinks; idempotent.
  uninstall.sh --dry-run Print plan; no side-effects.
  uninstall.sh -h | --help

Removes: ~/.local/bin/lattice-adna  (if symlinked into this vault)
         ~/.zsh/conf.d/55-lattice-home.zsh  (if symlinked into this vault)

Leaves: substrate files in <vault>/how/configs/ untouched.
        Existing ~/.local/bin/lattice (from CMux or other) untouched.
EOF
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      -h|--help) usage; exit 0 ;;
      --dry-run) DRY_RUN=true ;;
      *) fail "unknown argument: $1" ;;
    esac
    shift
  done
}

# Unlink target only if it's a symlink pointing into this vault.
unlink_vault_owned() {
  local target="$1"
  if [[ ! -L "$target" ]]; then
    [[ -e "$target" ]] && log "skip ($target exists but is not a symlink — operator-managed)"
    return 0
  fi
  local current
  current="$(readlink "$target")"
  case "$current" in
    "$VAULT"/*) ;;
    *) log "skip ($target → $current — not vault-owned)"; return 0 ;;
  esac
  if [[ "$DRY_RUN" == "true" ]]; then
    log "would-unlink ($target)"
  else
    rm "$target"
    log "unlink ($target)"
  fi
}

main() {
  parse_args "$@"
  VAULT="$(resolve_vault_root)"
  log "vault: $VAULT"
  unlink_vault_owned "$HOME/.local/bin/lattice-adna"
  unlink_vault_owned "$HOME/.zsh/conf.d/55-lattice-home.zsh"
  log "ok (vault-owned user-scope symlinks removed; substrate intact)"
}

main "$@"
