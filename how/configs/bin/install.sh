#!/usr/bin/env bash
# install.sh — idempotent installer for aDNA.aDNA Lattice Home (Rosetta).
# Canonical-instance #2 of pattern_lattice_home (CMux.aDNA was #1).
# Lifted from CMux.aDNA/how/configs/bin/install.sh at SHA 7747a15a + simplified:
# CMux's installer also bootstraps a 100MB cmux runtime + 13 modern-CLI tools;
# the Lattice Home pattern is narrower (5-block splash only), so this script
# only installs the symlinks needed for the splash itself.
#
# Modes:
#   passive (default; --passive)  Substrate-present check only; no user-scope writes.
#                                 Operator invokes `./how/configs/bin/lattice home`.
#   active  (--active)            Symlinks `~/.local/bin/lattice-adna` → vault binary
#                                 + `~/.zsh/conf.d/55-lattice-home.zsh` → vault hook.
#                                 Both gated by ADNA_LATTICE + graph-root walk at runtime.
#
# Conflict-aware: existing `~/.local/bin/lattice` (from CMux install) is NOT touched;
# we install under the vault-prefixed name `lattice-adna` to coexist (M2 mission spec
# AC #9; NEW SEED candidate `skill_lattice_home_install_path_conflict_vault_prefix`).

set -euo pipefail

MODE="passive"
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

log()  { printf 'lattice install: %s\n' "$*"; }
warn() { printf 'lattice install: warn (%s)\n' "$*" >&2; }
fail() { printf 'lattice install: fail (%s)\n' "$*" >&2; exit 1; }

usage() {
  cat <<'EOF'
install.sh — aDNA.aDNA Lattice Home installer

Usage:
  install.sh [--passive]   Substrate check only; no user-scope writes (default).
  install.sh --active      Symlink user-scope: ~/.local/bin/lattice-adna + ~/.zsh/conf.d/55-lattice-home.zsh
  install.sh --dry-run     Print plan; no side-effects.
  install.sh -h | --help   This help.

Vault-prefixed name `lattice-adna` coexists with existing `~/.local/bin/lattice`
(typically a CMux install). Invoke as: `lattice-adna home`.
EOF
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      -h|--help) usage; exit 0 ;;
      --passive) MODE="passive" ;;
      --active)  MODE="active" ;;
      --dry-run) DRY_RUN=true ;;
      *) fail "unknown argument: $1" ;;
    esac
    shift
  done
}

# Idempotent symlink: skip if already correct; back up if foreign file present.
link_one() {
  local src="$1" target="$2"
  if [[ ! -e "$src" ]]; then
    fail "src missing: $src"
  fi
  mkdir -p "$(dirname "$target")"
  if [[ -L "$target" ]]; then
    local current
    current="$(readlink "$target")"
    if [[ "$current" == "$src" ]]; then
      log "ok ($(basename "$target") → $src)"
      return 0
    fi
    warn "foreign symlink at $target → $current"
    if [[ "$DRY_RUN" == "true" ]]; then
      log "would-replace (back up $target → $target.bak.\$ts, then link)"
      return 0
    fi
    local bak="$target.bak.$(date +%Y%m%dT%H%M%S)"
    mv "$target" "$bak"
    log "backup ($target → $bak)"
  elif [[ -e "$target" ]]; then
    if [[ "$DRY_RUN" == "true" ]]; then
      log "would-back-up regular file ($target → $target.bak.\$ts)"
      return 0
    fi
    local bak="$target.bak.$(date +%Y%m%dT%H%M%S)"
    mv "$target" "$bak"
    log "backup ($target → $bak)"
  fi
  if [[ "$DRY_RUN" == "true" ]]; then
    log "would-link ($(basename "$target") → $src)"
    return 0
  fi
  ln -sfn "$src" "$target"
  log "link ($(basename "$target") → $src)"
}

substrate_check() {
  local vault="$1"
  log "vault: $vault"
  local missing=0
  for rel in \
    how/configs/bin/lattice \
    how/configs/home/home_template.md \
    how/configs/conf.d/55-lattice-home.zsh \
    MANIFEST.md
  do
    if [[ ! -e "$vault/$rel" ]]; then
      warn "substrate missing: $rel"
      missing=$((missing+1))
    fi
  done
  if [[ "$missing" -gt 0 ]]; then
    fail "substrate incomplete ($missing missing files)"
  fi
  log "substrate: ok (4/4 present)"
}

passive_install() {
  log "mode: passive (no user-scope writes)"
  log "invoke: cd \"$VAULT\" && ./how/configs/bin/lattice home"
  log "  or, after --active install: lattice-adna home (from any subdir of \"$VAULT\")"
  log "ok (substrate-present; passive)"
}

active_install() {
  log "mode: active (user-scope symlinks)"
  link_one "$VAULT/how/configs/bin/lattice"               "$HOME/.local/bin/lattice-adna"
  if [[ -d "$HOME/.zsh/conf.d" ]]; then
    link_one "$VAULT/how/configs/conf.d/55-lattice-home.zsh" "$HOME/.zsh/conf.d/55-lattice-home.zsh"
  else
    warn "~/.zsh/conf.d absent — hook not symlinked (create + source from ~/.zshrc to enable auto-render)"
  fi
  case ":$PATH:" in
    *":$HOME/.local/bin:"*) ;;
    *) warn "~/.local/bin not on PATH — add to ~/.zshrc: export PATH=\"\$HOME/.local/bin:\$PATH\"" ;;
  esac
  log "ok (lattice-adna installed; invoke: lattice-adna home)"
}

main() {
  parse_args "$@"
  VAULT="$(resolve_vault_root)"
  substrate_check "$VAULT"
  case "$MODE" in
    passive) passive_install ;;
    active)  active_install ;;
  esac
}

main "$@"
