---
type: governance
scope: workspace
created: 2026-05-25
updated: 2026-05-31
last_edited_by: agent_hestia
status: active
canonical_at: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md
lifted_from: /Users/stanley/aDNA/ScienceStanley.aDNA/how/governance/doctrine_secret_scanning.md (M01 2026-05-25; generalized to workspace scope; Obsidian allow-list pattern added)
authored_by: campaign_node_credentials M01 (Hestia / Home.aDNA)
authority: Home.aDNA broker pattern per adr_002 + adr_003
related:
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_key_rotation.md
tags: [governance, doctrine, security, secrets, pre_commit, gitleaks, obsidian, workspace_scope]
---

# Doctrine: Pre-Commit Secret Scanning (workspace-level)

## Purpose

Catch accidental secret commits **before** they enter git history. Once a secret value lands in any commit (even a later-reverted one), it must be treated as compromised and rotated per `doctrine_key_rotation.md`. Pre-commit scanning is the cheapest place to enforce the "no key values in vault files" rule from `doctrine_credential_handling.md` §6.

> **Lift note**: this file is the workspace-canonical version. Predecessor `ScienceStanley.aDNA/how/governance/doctrine_secret_scanning.md` (2026-05-21) was authored in SS scope and is retained there for SS-historical context with a canonical-pointer note at top of file. New behavior MUST be added here.

## Scope: per-vault, not workspace-wide

`~/aDNA/` itself is **not** a git repository, so it carries no pre-commit hook. Each `<vault>.aDNA/` directory that IS a git repository installs its own pre-commit hook locally (git hooks live outside the tracked tree). Workspace doctrine sets the pattern; each vault installs it.

Vaults that should carry this hook today (those with a git repository):

- All `<name>.aDNA/` vaults that have been initialized with `git init`
- `lattice-protocol/`, `latlab/`, `lattice-labs/`, `rare-archive/`, `rareharness/`, `latlab-lab/`

Vaults that do NOT need this hook (no git repository): `~/aDNA/` (workspace root), `_archive/`, `_inbox/`, `modules/`, `lattices/`, `datasets/`, `results/`, `shared/`, `llama.cpp/` (vendored), `lunarpro-build-kit/` (vendored).

## Tool of Choice

**Gitleaks** (`https://github.com/gitleaks/gitleaks`) — Apache 2.0, single binary, sensible defaults, low false-positive rate on prose-heavy repos. Alternative: `trufflehog`. Operator may swap per vault; doctrine is tool-neutral.

## Install (operator action)

Gitleaks is **not** installed by default. To install on macOS:

```sh
brew install gitleaks
```

To verify:

```sh
gitleaks version
```

## Pre-Commit Hook

A pre-commit hook at `<vault>/.git/hooks/pre-commit` (vault-local, not tracked by git) runs gitleaks against staged changes only. Hook should:

1. Skip with warning if gitleaks is not on PATH (don't block — so contributors without gitleaks can still commit)
2. Run `gitleaks protect --staged --no-banner --redact` against staged hunks
3. Exit non-zero if a finding is reported, blocking the commit

### Hook source (recommended; identical across vaults)

Create `<vault>/.git/hooks/pre-commit` (mode 0755) with:

```sh
#!/bin/sh
# Vault secret-scan pre-commit hook.
# Skips silently if gitleaks not installed (warn only, do not block).
if ! command -v gitleaks >/dev/null 2>&1; then
  echo "gitleaks not installed — secret scan SKIPPED. See /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md to install." >&2
  exit 0
fi
gitleaks protect --staged --no-banner --redact
status=$?
if [ $status -ne 0 ]; then
  echo ""
  echo "Commit blocked: gitleaks detected secrets in staged changes."
  echo "Review findings above, remove or .gitleaks.toml-allowlist intentional matches, then re-commit."
  echo "Doctrine: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md"
  exit $status
fi
exit 0
```

This hook is **not committed** (git hooks live outside the tree). Each vault's contributors install locally. To bootstrap on a fresh clone, a vault's `bin/install-hooks.sh` could be added — out of scope for this doctrine; vault-discretionary.

## False-Positive Handling

If gitleaks flags an intentional pattern (documentation example, redacted key snippet, prefix-only incident reference), allowlist it in `<vault>/.gitleaks.toml` at repo root.

### Allowlist by path + pattern, not by raw value

```toml
[allowlist]
description = "intentional patterns that look secret-shaped"

[[allowlist.regexes]]
description = "documentation prefix-only references for revoked SI-1/SI-2 incident; ≤2 secret bits per doctrine_credential_handling §6.1"
regex = '''vcp_[0-9A-Za-z]{2}[\.~](?:\.|~|\b)'''  # 2-char prefix only
paths = ['''who/coordination/incident_.*\.md''']
```

Document the allowlist entry inline with a comment explaining what's allowed and why. The pattern is allowed because it carries ≤2 secret bits AND is bounded to incident narrative files AND refers to a revoked credential — per `doctrine_credential_handling.md` §6.1.

### Obsidian allow-list pattern

Some vaults are dual-purpose Obsidian + git vaults (e.g. `Home.aDNA/`, `lattice-labs/`). Obsidian's `.obsidian/` config directory and `.trash/` recovered files can contain false-positive-shaped strings. Allowlist:

```toml
[[allowlist.paths]]
description = "Obsidian config + trash; no secrets land here by policy"
paths = [
  '''\.obsidian/.*''',
  '''\.trash/.*''',
]
```

If a real secret DID land in `.obsidian/` (e.g. a plugin's local API key), that's an Obsidian-plugin-config issue to escalate, NOT a pattern to allowlist. The allowlist is for Obsidian's structural noise, not for secrets-leaked-into-Obsidian.

## Bypass Discipline

**Never use `git commit --no-verify` to skip the hook on a real commit.** If gitleaks flags something:

- If it's a real secret: remove it, rotate the underlying credential per `doctrine_key_rotation.md`, then re-commit
- If it's a false positive: add it to `.gitleaks.toml` and re-commit
- If gitleaks is misbehaving: file a finding in the vault's `who/coordination/`, investigate; don't bypass

Bypass is only acceptable in emergency hotfix contexts where the operator has explicitly authorized it AND a follow-up scan + rotation has been scheduled.

## CI Backstop

Local hook can be skipped (uninstalled, bypassed). A CI-side gitleaks job is a stronger backstop; deferred until each vault has CI configured for security scans. Until then, operator periodically runs `gitleaks detect --no-banner` against full history as a manual audit.

For vaults with GitHub Actions: add `.github/workflows/gitleaks.yml` per gitleaks' standard CI recipe (single job; runs on push + PR).

## Post-Rotation Audit Pattern

After a credential rotation per `doctrine_key_rotation.md` step 7, run gitleaks against the FULL history (not just staged):

```sh
cd <vault>.aDNA
gitleaks detect --no-banner --redact
```

If a hit lands, the old credential was already compromised before rotation — file `who/coordination/incident_<YYYYMMDD>_<scope>.md` per the incident-template pattern in `doctrine_credential_handling.md` §5.1.

## Related Doctrine

- [[doctrine_credential_handling]] — workspace-level handling discipline (NAMES ONLY, URI-not-value, `head -c N`, backup exclusion)
- [[doctrine_key_rotation]] — what to do *after* a leak is detected
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — broker architecture
- `Home.aDNA/what/inventory/inventory_credentials.md` — per-credential inventory (the canonical NAMES-ONLY surface gitleaks should never flag)
- Per-vault `.gitignore` — explicit secret-file patterns (`.env`, `.env.*`, `*.key`, `secrets.json`, etc.)
- Per-vault `.gitleaks.toml` — vault-specific allowlist (false-positive bounded patterns)
