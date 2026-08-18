---
type: governance
scope: workspace
created: 2026-05-25
updated: 2026-08-17   # + scoped/expiring class, revoke≠kill (S45), procedure step 0 evidence-preservation; ratification block PROPOSED (Chambellan M-A6; Rosetta edit — authored_by unchanged)
last_edited_by: agent_rosetta
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

## Scoped + expiring machine credentials (Chambellan M-A6 amendment)

The credential classes above assume a long-lived value the operator rotates on a trigger. A second class is now in routine use and rotates on a **clock instead of an event**: the scoped, expiring machine credential — DP-6's alpha class (*scoped, expiring, single-graph, single-node*), of which the S193 90-day partner token is the worked example.

**What changes for this class:**

- **Expiry is the rotation trigger.** A 90-day token has a rotation date the day it is minted. That date belongs in the register row at mint time, not in someone's memory. A class whose rotation trigger is a calendar entry that was never written down does not have a rotation trigger.
- **Scope is half the credential.** A team-scoped mint is not "a smaller token" — it is a *different* credential with a different blast radius, and the register's `scope:` field (per `doctrine_credential_handling.md` §3.5) is what makes that radius auditable. Rotating a scoped credential into an unscoped replacement is a **silent privilege escalation**, and it will not look like one in any log.
- **A second holder makes expiry a coordination event.** If the value was delivered to a partner (`doctrine_credential_handling.md` §4.5), expiry is *their* outage as well as yours. §6 "Notify downstream consumers" is mandatory for this class, not discretionary, and the notice goes out **before** expiry, not after the breakage.

### Revoke ≠ kill: cached CLI identities (the S45 property)

⚠ **Revoking a token at the vendor does not necessarily end the session it authorized.** Charter **D-36** located the worked case: the shared cached Vercel CLI identity at `~/Library/Application Support/com.vercel.cli/auth.json` (mode `0600`, ~252 B) — present in no register before Chambellan, registered as census row **S45**. **A token revoke does not kill it.**

Generalized, this is a property of the whole class of tools that exchange a token for a local session artifact (CLI auth caches, `gh`'s keyring entry, browser-extension sessions, agent sidecars holding a warm client):

1. **Step 4 of the procedure below ("revoke the old key") is necessary and not sufficient** for any credential that has ever been fed to a CLI that caches. Enumerate the caches *before* you revoke, so you know what is left alive after.
2. **A cached identity is a credential.** It gets its own register row, its own path, its own mode — and its own removal step in the runsheet. A file that grants access and appears in no register is exactly the defect the Chambellan census exists to find.
3. **The old-key-is-dead assumption is what makes this dangerous.** After a revoke, everyone stops watching. A cache that still authenticates is then unmonitored *and* believed-dead — a worse state than before the rotation.

## Rotation Procedure

When rotation is triggered, execute in this order:

### 0. Preserve the evidence before you rotate (Chambellan M-A6 amendment)

**Rotation destroys the evidence of why it was needed.** Before touching the vendor console, write down what the investigation will need after the value is gone — because after step 4 nobody can re-derive it.

The lesson is dated, and the date is the point (charter **D-58** / **DP-11**): the residue that proved a credential's exposure — the three `C01` transcript copies — **ages out on a 30-day clock and self-destructs around 2026-08-27**, while the un-rotated credential's risk does not. A ruling made against that evidence had to be re-sequenced (**DP-11 amendment-in-effect**, S197: queue item ② moved to a standalone rotation *before* the evidence-expiry date) precisely because the evidence had an expiry the ruling never stated.

**Therefore, every rotation runsheet states, before step 1:**

1. **What evidence exists** that this rotation is needed — file, rule, and date only (never content; the M-A3 pattern). "17 findings on high-specificity rules, ages 2–22 days" is evidence; the finding bodies are not, and must not be copied to preserve them.
2. **What ages out, and when.** Any store with a retention window — transcript residue at 30 days, vendor audit logs at their own cadence, CI logs — carries an **expiry date written into the runsheet**. A timing ruling that does not carry its evidence-date is a ruling that can silently outlive its own basis.
3. **What survives the rotation on purpose** — the register row, the coord note, the incident file (§5). These are the permanent record; the residue is not, and must never be the only place a fact lives.
4. **Whether preservation conflicts with a deletion posture.** Where a store is under `preserve_in_place` (PRESERVE—LEGAL — charter **D-59**), preservation wins and the runsheet says so explicitly. Where it is not, evidence is *summarized into* the durable record rather than kept by suppressing a retention job.

**The one-line rule**: *a rotation is an act of destruction as well as repair — take the picture before you fire.*

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

## Ratification record (§7.7) — Chambellan M-A6 amendment

> Authored by an agent; **owned by the operator**. `proposed` until signed; not in force before signature.

| Field | Value |
|---|---|
| **decision** | Adopt the Chambellan M-A6 amendments to this doctrine: **§Scoped + expiring machine credentials** (expiry-as-trigger, scope-as-half-the-credential, second-holder coordination) · **§Revoke ≠ kill** (the S45 cached-CLI-identity property, charter D-36 — enumerate caches before revoking; a cached identity is a credential with its own row) · **§Rotation Procedure step 0 — Preserve the evidence before you rotate** (the D-58 / DP-11 lesson: a timing ruling carries its evidence-date; runsheets state what ages out and when) |
| **ratified-by** | *(operator — unsigned)* |
| **date** | *(unsigned)* |
| **status** | **proposed** |

**What the operator is signing, in plain terms**: that a revoke is not a kill until the caches are enumerated; that an expiring credential's rotation date is written down at mint, not remembered; and that a rotation begins by recording why it was needed, because the proof expires on its own schedule and the risk does not.

**Findings discharged here**: charter **D-36** (S45 cached identity) · **D-58** + **DP-11** (evidence-dates a ruling) · DP-6's alpha class as a named credential class.

## Related

- [[doctrine_credential_handling]] — workspace-level handling discipline (NAMES ONLY, URI-not-value, `head -c N`, backup exclusion)
- [[doctrine_secret_scanning]] — pre-commit gitleaks hook + post-rotation audit
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — broker architecture (storage + access + discovery)
- `Home.aDNA/what/inventory/inventory_credentials.md` — per-credential rotation cadence + vault distribution
- `Home.aDNA/who/governance/plan_service_account_adoption.md` — service-account model + 90-day rotation procedure
- `Home.aDNA/how/skills/skill_credential_provision_via_op.md` — programmatic provisioning surface
- Per-vault `.gitignore` — file patterns that block accidental secret-file commits
