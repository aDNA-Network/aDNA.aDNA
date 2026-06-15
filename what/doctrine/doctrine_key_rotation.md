---
type: governance
scope: workspace
created: 2026-05-25
updated: 2026-05-31
last_edited_by: agent_hestia
status: active
canonical_at: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_key_rotation.md
lifted_from: /Users/stanley/aDNA/ScienceStanley.aDNA/how/governance/doctrine_key_rotation.md (M01 2026-05-25; generalized to workspace scope)
authored_by: campaign_node_credentials M01 (Hestia / Home.aDNA)
authority: Home.aDNA broker pattern per adr_002 + adr_003
related:
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md
  - /Users/stanley/aDNA/Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md
  - /Users/stanley/aDNA/Home.aDNA/what/inventory/inventory_credentials.md
tags: [governance, doctrine, security, secrets, rotation, workspace_scope, broker_aware]
---

# Doctrine: API Key Rotation (workspace-level)

## Purpose

Define when and how to rotate an API key used by any vault under `/Users/stanley/aDNA/`. Rotation is the response to a **leak**, **expiry**, **scheduled hygiene event**, or **vendor advisory**. This doctrine does **not** dictate a routine rotation cadence beyond the per-credential cadence captured in `Home.aDNA/what/inventory/inventory_credentials.yaml`.

**This doctrine does not trigger any rotation by itself.** It is the checklist used **when** rotation is performed.

> **Lift note**: this file is the workspace-canonical version. Predecessor `ScienceStanley.aDNA/how/governance/doctrine_key_rotation.md` (2026-05-21) was authored in SS scope and is retained there for SS-historical context with a canonical-pointer note at top of file. New behavior MUST be added here.

## Scope

Applies to:

- Application-tier credentials (Vercel, Squarespace, Gemini, Anthropic, OpenAI, vendor API tokens) — full procedure
- 1Password service-account tokens — every 90 days per `plan_service_account_adoption.md` (procedure is in §Rotation Procedure, abbreviated for 1P-internal rotation)
- Federation-tier credentials (Tailscale admin API key, Nebula CA private key, Nebula node private keys) — on personnel change or PKI rebuild; coordinate via `Home.aDNA/who/coordination/` before rotating
- Substrate-tier (SSH keys, gh CLI tokens) — on key compromise or personnel change; out-of-band tooling (gh auth refresh, ssh-keygen) handles these

Out of scope:

- Master credentials (1P master password, FileVault recovery key) — operator-direct, never agentic

## When to Rotate (Mandatory Triggers)

Rotate **immediately** if the key value:

1. Appears in any file (tracked or untracked) inside any vault
2. Appears in a chat transcript, screenshot, or screen-share recording
3. Appears in a system that retains data outside the chosen secret store (Slack, email, ticket system, browser history with full URL params, etc.)
4. Is found by gitleaks scan or other audit
5. Is shared with someone leaving the operator's trust circle
6. Has triggered an anomalous usage alert from the vendor

A "rotation" that stores the same byte-identical value back is **not a rotation** (see SI-2 root cause documented in `doctrine_credential_handling.md` §5.2). Generate a fresh value at the vendor.

## When to Rotate (Operator-Discretionary)

- Periodic hygiene (e.g., annual rotation)
- After a major vendor security advisory
- When migrating between secret-storage locations (e.g., file → 1P)
- When the budget envelope is exhausted and a new key is provisioned

## When NOT to Rotate

- Vault-internal references to the env-var **name** or 1P URI (`SS_GEMINI_API_KEY` / `op://Personal/Vercel Token/credential`) — these are NAMES, not values; rule per `doctrine_credential_handling.md` §6.1
- Documentation of how the key is used (without value)
- Audit log mentions of the key existing or being used

Pre-launch hygiene session 2026-05-21 explicitly **did not** rotate the SS Gemini key per operator directive ("We do not want to mess with any of the gemini keys"). Rotation envelope remained operator-discretionary until a mandatory-trigger event. Use this as the policy template: scheduled hygiene that touches a stable key is operator-discretionary; mandatory triggers are not.

## Rotation Procedure

When rotation is triggered, execute in this order:

### 1. Provision the new key

- Generate the new key in the vendor console.
- Note the new key's metadata: created-on date, budget, scope, expiry.
- Store the new value in the chosen secret store **only** (never in a file outside the store, never in chat). Application-tier defaults to 1P per `doctrine_credential_handling.md` §3; use `Home.aDNA/how/skills/skill_credential_provision_via_op.md` for the programmatic provisioning surface.

### 2. Update the secret store

Depending on chosen storage location (per `inventory_credentials.yaml` for the credential):

- **1Password (canonical for application-tier)**: `op item edit "<item>" <field>="<new_value>" --account <user_uuid>` — see `doctrine_credential_handling.md` §4.2 for safe value-substitution patterns. CLI integration auto-picks up the new value via `OP_SERVICE_ACCOUNT_TOKEN`.
- **Shell rc (legacy / pre-broker)**: replace the line in `~/.zshrc` / shell secrets file; `source` the file in any open shell.
- **macOS Keychain**: `security delete-generic-password -a stanley -s <key_name>` then `security add-generic-password -a stanley -s <key_name> -w "<new_value>"`.
- **`~/.lattice/secrets/<name>` (federation-tier file)**: replace file contents (mode 0600 stanley:staff); for the service-account-token files, see `plan_service_account_adoption.md` §Rotation.

### 3. Verify the new key works

Run a smoke test against the vendor API. For Gemini/Imagen, a minimal generation call; for Vercel, `GET /v9/projects`; for vendor X, the cheapest read endpoint.

Confirm the response is successful. If unsuccessful, **do not revoke the old key yet**; investigate first.

**Prefix-check** to confirm the new value is in active use:

```sh
op read "op://Personal/Vercel Token/credential" | head -c 6
```

This MUST differ from the old value's prefix. NEVER use `head -N` (line-based) for inspection — see `doctrine_credential_handling.md` §6.3.

### 4. Revoke the old key

Once the new key is verified live in the operator's environment, revoke the old key in the vendor console. Allow up to 24h for caches to flush if the vendor mentions propagation delay.

### 5. Update coordination notes

- The credential's coord note (e.g. `<vault>.aDNA/who/coordination/coord_<scope>_<name>.md`) — append a rotation entry under a "Rotation Log" section: date, trigger, new-key-metadata (no value), old-key-status (revoked).
- For 1P service-account-token rotations, log in `Home.aDNA/who/coordination/coord_<date>_service_account_rotation.md`.
- Do **not** delete prior rotation log entries — they form the audit trail.

### 6. Notify downstream consumers (if any)

If any other vault or contributor relies on the rotated key:

- Coord memo to each affected vault under `who/coordination/`.
- Pin the rotation date so downstream agents know any cached / in-flight runs may need re-auth.
- The broker inventory (`Home.aDNA/what/inventory/inventory_credentials.{md,yaml}`) is the authoritative consumer list — cross-reference `vault_distribution` for fan-out.

### 7. Post-rotation audit

Run gitleaks against the full vault history of every affected vault to confirm the old key value never landed in any commit:

```sh
cd <vault>.aDNA && gitleaks detect --no-banner --redact
```

If a hit is found, the old key was already compromised before rotation — file an incident note at `who/coordination/incident_<YYYYMMDD>_<scope>.md` per `doctrine_secret_scanning.md`.

### 8. Plaintext-disposal of any transit files

If the new key value passed through a temporary file during provisioning (vendor portal export, ISS paste-ingest, clipboard staging file), dispose of the file per `doctrine_credential_handling.md` §6.5:

```sh
gshred -uz /tmp/staged_credential   # primary
rm -P /tmp/staged_credential        # fallback (always available; advisory on APFS)
```

NEVER plain `rm`.

## Carry-Over Keys

When a new key supersedes a prior shared key (as the SS Gemini key did to Carly's `GEMINI_API_KEY` 2026-05-21):

- The prior key may remain valid for unrelated scopes (other operator's brand work, partner-tier use, etc.).
- The scope-owning vault's coord note documents the supersession.
- Revocation of the prior key is the prior-key-owner's call, not the new-key-scope's.

When two vaults share a key (e.g. shared HPC L2 passwords in `secrets.json`), rotation requires multi-vault coordination — coord memo to every affected vault BEFORE rotating, and re-verification BY each affected consumer after.

## Service-account-token rotation (90-day cadence)

The 1P service-account token at `~/.lattice/secrets/op_service_account_token_<scope>` is the bootstrap secret that unlocks all application-tier credentials in that scope. Rotation procedure (per `plan_service_account_adoption.md`):

1. 1P web admin → Service Accounts → select scope → "Regenerate Token".
2. Copy new token (clipboard only); paste into `~/.lattice/secrets/op_service_account_token_<scope>` (mode 0600 stanley:staff) via the safe paste pattern (`pbpaste > <file>` followed by `chmod 0600 <file>`).
3. Source `~/.lattice/load_secrets.sh` in any open shell (or open a new shell).
4. Smoke-test: `op read "<known-uri>" | head -c 6` returns expected prefix.
5. 1P web admin → old token "Revoke" (do AFTER new token verified).
6. Coord note at `Home.aDNA/who/coordination/coord_<YYYYMMDD>_service_account_rotation.md`.

This rotation does NOT cascade to application-tier credentials — the underlying 1P items are unchanged, just the access token used to read them.

## Related

- [[doctrine_credential_handling]] — workspace-level handling discipline (NAMES ONLY, URI-not-value, `head -c N`, backup exclusion)
- [[doctrine_secret_scanning]] — pre-commit gitleaks hook + post-rotation audit
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — broker architecture (storage + access + discovery)
- `Home.aDNA/what/inventory/inventory_credentials.md` — per-credential rotation cadence + vault distribution
- `Home.aDNA/who/governance/plan_service_account_adoption.md` — service-account model + 90-day rotation procedure
- `Home.aDNA/how/skills/skill_credential_provision_via_op.md` — programmatic provisioning surface
- Per-vault `.gitignore` — file patterns that block accidental secret-file commits
