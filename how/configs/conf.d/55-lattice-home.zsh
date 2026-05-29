#!/usr/bin/env zsh
# how/configs/conf.d/55-lattice-home.zsh
# Auto-print the aDNA.aDNA Lattice Home splash at interactive shell start when
# inside the aDNA.aDNA vault graph root.
#
# Gated by: ADNA_LATTICE env (default ON; explicit 0 suppresses) + graph-root walk.
# Lifted + parameterized from CMux.aDNA/how/configs/conf.d/55-cmux-home.zsh at
# SHA 7747a15a per skill_lattice_home_install step 1-2.
#
# Mission: campaign_lattice_home_pattern M2 (canonical-instance #2 of pattern_lattice_home).

# Skip if explicitly disabled.
[[ "${ADNA_LATTICE:-1}" == "0" ]] && return 0

# Skip non-interactive shells (no auto-print in scripts/CI).
[[ -o interactive ]] || return 0

# Skip if lattice-adna CLI not on PATH (passive mode: hook is inert until --active install).
command -v lattice-adna >/dev/null 2>&1 || return 0

# Graph-root walk: PWD ascends looking for MANIFEST.md. Mirrors cmd_home's gate so
# the two surfaces stay aligned on suppress-behavior.
_adna_home_at_graph_root() {
  local dir="$PWD"
  while [[ "$dir" != "/" && -n "$dir" ]]; do
    if [[ -r "$dir/MANIFEST.md" ]]; then
      return 0
    fi
    dir="${dir:h}"
  done
  return 1
}

if _adna_home_at_graph_root; then
  lattice-adna home 2>/dev/null || true
fi

unfunction _adna_home_at_graph_root 2>/dev/null
