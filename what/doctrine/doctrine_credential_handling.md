---
type: governance
scope: workspace
created: 2026-05-25
updated: 2026-08-17   # + §2.5/§3.5/§4.5/§6.9 three-body amendment, §9 ratification block PROPOSED (Chambellan M-A6; Rosetta edit — authored_by unchanged)
last_edited_by: agent_rosetta
status: active
canonical_at: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md
authored_by: campaign_node_credentials M01 (Hestia / Home.aDNA)
authority: Home.aDNA broker pattern per adr_002 + adr_003 + adr_005 (cross-platform)
related:
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_key_rotation.md
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md
  - /Users/stanley/aDNA/Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md
  - /Users/stanley/aDNA/Home.aDNA/what/decisions/adr_003_credential_onboarding_surfaces.md
  - /Users/stanley/aDNA/Home.aDNA/what/decisions/adr_005_credential_broker_crossplatform.md
  - /Users/stanley/aDNA/Home.aDNA/what/inventory/inventory_credentials.md
  - /Users/stanley/aDNA/Home.aDNA/how/skills/skill_credential_provision_via_op.md
  - /Users/stanley/aDNA/Home.aDNA/who/governance/plan_service_account_adoption.md
tags: [governance, doctrine, security, credentials, secrets, tokens, api_keys, workspace_scope, broker, hearthkey, names_only, uri_not_value, rotation, backup_exclusion]
---

# Doctrine: Credential Handling (workspace-level)

This is the **workspace-canonical** discipline for every credential touched by any vault under `/Users/stanley/aDNA/`. It codifies the rules that emerged from `ScienceStanley.aDNA` M02 incidents SI-1 (chat-leak 2026-05-23) and SI-2 (no-op rotation + `head -20` re-leak 2026-05-24), and ratifies the broker pattern decided in `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` (Hestia's hearthkey pattern). Every consumer vault inherits these rules; per-vault doctrine, if any, extends rather than overrides.

> **Authority**: `Home.aDNA/` (Hestia) is the credential broker. This doctrine is the rule of conduct; ADR-002 + ADR-003 are the architecture; `inventory_credentials.{md,yaml}` is the index; `skill_credential_provision_via_op.md` is the operational skill.

> **Amendment (M05, 2026-05-25)** — §2.1, §3, §3.1, §5, §6.4, §6.7, and the §7 routing template were reconciled from the originally-planned **1P service-account model** (`~/.lattice/load_secrets.sh` exporting `OP_SERVICE_ACCOUNT_TOKEN`) to the **macOS Keychain-primary + 1P-backup substrate** that M02 actually shipped. The service-account model was never deployed: the operator's 1P account is INDIVIDUAL-tier and service accounts are Business-only (ADR-002 §G2.1 amendment, M02 close). `~/.lattice/load_secrets.sh` does not exist. §4.3 (Pattern A rotation) was already correct and is unchanged.

## §1 Discovery — find a credential by name

To learn what credentials exist and where they live (URI, file path, env-var name), read the broker inventory:

```text
Home.aDNA/what/inventory/inventory_credentials.md   # human-readable table
Home.aDNA/what/inventory/inventory_credentials.yaml # programmatic queries
```

The inventory carries **names only** (URIs, paths, env-var names, public-key fingerprints). It never carries values, hashes, or last-N-character snippets. Per `Standing Order #7` and ADR-002 G2.3, the inventory is the workspace's single source of truth for discovery; a consumer vault that needs a credential queries the inventory first.

A vault that consumes a credential MUST add a `### Credential routing (broker = Home.aDNA)` snippet to its `CLAUDE.md` (template at §7) so future sessions in that vault route credential questions back here.

## §2 Access — read a credential value at runtime

The runtime access pattern is **env-var injection for hot path + per-call `op` CLI for cold paths** (ADR-002 G2.2).

### §2.1 Keychain-exported env-var (canonical)

Each broker-managed application-tier credential is stored in the macOS login Keychain and exported as an env-var at shell init by an idempotent `~/.zshrc` block (sourced from the Keychain via `security find-generic-password`, guarded by `if [ -z "$VAR" ]`):

```sh
# ~/.zshrc — one block per credential (service-name + env-var per inventory row)
if [ -z "$SS_VERCEL_TOKEN" ]; then
  __v="$(security find-generic-password -a "$USER" -s SS_VERCEL_TOKEN -w 2>/dev/null)"
  [ -n "$__v" ] && export SS_VERCEL_TOKEN="$__v"
  unset __v
fi
```

With the env-var present, the consumer reads it directly:

- **No biometric prompt** — the Keychain entry carries a `/usr/bin/security` ACL grant, so `security` reads succeed without GUI auth.
- **No TTY requirement** — works in Claude Code Bash, CI, scripts, launchd jobs (the env-var is already exported by the time any subshell runs).
- The `security` read is local; no network round-trip.

**Cold-path fallback (TTY only):** if the env-var is not set and you are in a real terminal, read the 1P backup-of-record directly — this surfaces a biometric prompt, so it works only in a TTY:

```sh
op read "op://Personal/Vercel Token/credential"
# account-pinned:
op --account FI56OGLVAFAJRJITSWCO5NNIZM read "op://Personal/Vercel Token/credential"
```

### §2.2 Consumer-code wrapper

Vaults that consume `op` repeatedly should wrap it in a small adapter that:
- Reads URI from a env-var override if set (e.g. `SS_OP_VERCEL_URI`), falling back to a canonical default.
- Treats `op read` failure as a hard error (no silent fallback to placeholder values).
- Captures `op read` output to a variable; never to a logged shell command, file, or stdout intended for chat.

Reference implementation: `ScienceStanley.aDNA/audit/lib/creds.ts::getVercelToken()`.

### §2.3 Direct env-var (legacy / pre-broker)

Some credentials live as env vars exported from shell rc directly (`SS_GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, etc.). These work but are friction-class MED per the inventory: rotation requires shell-rc rewrite + new shell + smoke-test. Migrate to 1P storage when motivated by a rotation or hygiene event; don't force-migrate routine-stable keys.

### §2.4 Never

- `sudo -S <password>` — no hard-coded passwords in shell pipes. Use `osascript` GUI dialog per `aDNA.aDNA/how/skills/skill_agentic_sudo.md`.
- `curl -H "Authorization: Bearer <literal>"` — bake the value through an env var or `op read` substitution at the last moment.
- Logging a credential value to stdout, stderr, file, JSONL audit trail, or any other sink retained beyond the calling process's lifetime.
- **Any CLI tool's secret-as-flag pattern** (`--token=<value>` · `--password=<value>` · `--api-key=<value>` etc.) — argv is visible to any user/process with `ps -ef` access for the lifetime of the command. On long-running commands (multi-minute uploads, watch loops, etc.) the exposure window is correspondingly long. **Use the tool's env-var path instead**:
  - ❌ `vercel deploy --prod --yes --token="$SS_VERCEL_TOKEN"` — token visible in `ps`
  - ✅ `VERCEL_TOKEN="$SS_VERCEL_TOKEN" vercel deploy --prod --yes` — env var; not visible
  - ❌ `gh auth login --with-token <<< "$TOKEN"` is safe (stdin), but `gh --token "$TOKEN"` would NOT be
  - ❌ `op signin --account ... --raw <password>` would leak; `OP_SESSION_<acct>=...` env var path doesn't
  
  **Reference incident** (third-event recurrence for `SS_VERCEL_TOKEN`): `ScienceStanley.aDNA/who/coordination/incident_20260528_vercel_token_ps_leak.md`. Agent invoked `vercel deploy --prod --yes --token=$SS_VERCEL_TOKEN` during M08 P-D; full token value visible in `ps -ef` for ~6 min during a 1.4 GB upload. Local-only exposure window, but discipline regression. Most CLI tools (Vercel, gh, op, fly, doctl, etc.) accept env-var auth as a first-class path; if a tool ONLY supports `--flag`, file an upstream issue or wrap with `expect`/heredoc into stdin.

### §2.5 Access under the three-body model (Chambellan M-A6 amendment)

Three bodies now answer credential questions, and they answer **different** ones. Asking the wrong body is how a register goes stale without anybody lying.

| Body | The question it answers | What it is authoritative about |
|---|---|---|
| **`Home.aDNA` (Hestia) — broker of record** | *Does this credential exist, what is it called, who consumes it, where does it live?* | **Existence and identity.** The register is the truth about what there is. |
| **Bitwarden / Vaultwarden — access engine** | *Give me the value, now, under this scope.* | **Values**, for the tiers migrated to it. It holds no opinion about what *should* exist. |
| **Keycloak (Aeacus) — identity provider** | *Is this principal who they claim to be, and what may they reach?* | **Assertions about principals.** It issues short-lived tokens, not long-lived secrets. |

Four rules follow, and they are the whole point of naming the bodies separately:

1. **Discovery always starts at the broker** (§1), whichever engine holds the value. An access engine that can hand you a value you cannot find in the register is a **finding**, not a shortcut — the register's coverage claim is false the moment that is true.
2. **The IdP is not a credential store.** A Keycloak client is a broker row of `storage.kind: keycloak_client` recording client id, realm, and audience/scope — **never a client-secret value**. If a flow genuinely needs a long-lived client secret, that secret is a broker-held credential in its own right, with its own row and its own rotation trigger. "It's in Keycloak" is a locus, not an exemption.
3. **No body is authoritative about another body's population.** A clean report from any one of the three covers **its own reach only**. This is the same rule `doctrine_secret_scanning.md` states for scanners (reach ≠ efficacy) and the same shape as the parity-instrument law there — a check is sound only over the population it actually enumerates.
4. **The consumer interface does not change.** §3.3's invariant holds across all three bodies: env-var on the hot path, a cold path for a TTY. Consumer code and the §7 routing snippet **never branch on which body ultimately held the value** — that is precisely what makes a later custody move (§ `doctrine_safe_mutations.md` §8) survivable.

## §3 Storage — where credentials live, canonically

Per ADR-002 G2.1, storage is **hybrid**:

| Tier | Canonical location | Runtime read |
|---|---|---|
| Application-tier (Vercel, Squarespace, vendor API keys) | **macOS Keychain (`login.keychain-db`) primary + 1Password `op://<vault>/<item>/<field>` backup-of-record** | env-var exported at shell init from Keychain (`security`); 1P is the TTY cold-path fallback + operator-facing surface |
| Federation-tier (Tailscale admin, Nebula CA, Nebula node) | Filesystem at `~/.lattice/secrets/<name>` or `/opt/homebrew/etc/nebula/pki/<name>` (mode 0600; sudoers grants per `inventory_credentials.yaml`) | direct file read (sudoers-gated where applicable) |
| Substrate-tier (gh, ssh, macOS Keychain, sudoers grants) | System-managed (gh CLI keyring; `~/.ssh/`; macOS Keychain; `/etc/sudoers.d/`) | system manages |

A new credential's storage decision follows the friction-class table in `inventory_credentials.yaml`. Application-tier defaults to **macOS Keychain primary + 1P backup-of-record**; everything else MUST justify the deviation (typically: federation-tier filesystem precedent, file-backed `secrets.json` loader, or system-managed). Both stores are written at onboarding and kept in sync on every rotation (§4.3).

### §3.1 Backup exclusion

`~/.lattice/` MUST be excluded from any backup or sync target that leaves the local filesystem:

- Time Machine: System Settings → Time Machine → Options → add `~/.lattice` to "Exclude these items from backups"
- iCloud Drive: not enabled for `~/.lattice` by default; verify if iCloud Drive desktop+documents sync is active
- Dropbox / Google Drive / OneDrive: do NOT place `~/.lattice` inside a synced folder
- Git: `~/.lattice` is not a git repository; do not initialize one

Rationale: `~/.lattice/` holds federation-tier private keys (Nebula CA, Tailscale admin) and the file-backed `secrets.json` application tokens — all device-local by design. Cross-machine secrets sync is explicitly out of scope (ADR-002 G2.1; matches Tailscale admin key precedent). (The macOS Keychain primary lives in `~/Library/Keychains/login.keychain-db`, not under `~/.lattice/`; it is governed by FileVault + the system keychain, not by this exclusion rule.)

### §3.2 Mode + ownership

- Service-account-token files at `~/.lattice/secrets/`: mode `0600`, owner `stanley:staff`
- Nebula PKI files at `/opt/homebrew/etc/nebula/pki/`: mode `0600`, owner `stanley:admin`
- Public certs (Nebula `.crt`): mode `0644`, owner same as private peer
- Sudoers fragments at `/etc/sudoers.d/latticelabs-*`: mode `0440`, owner `root:wheel`, tightly-scoped (no `NOPASSWD: ALL`)

### §3.3 Cross-platform backends (ADR-005)

The broker **architecture** is platform-invariant; the **backend** (where a secret sits at rest and how it is unlocked) is **platform-adaptive per `Home.aDNA` ADR-005** — but every backend exposes the **same consumer interface**: an exported **env-var on the hot path** (set once per session, readable by any subshell without TTY/GUI/biometric) plus an `op read`-class **cold path**. Consumer code and the §7 routing snippet never branch on platform; only the mechanism that populates the env-var differs by OS. Architecture invariants (unchanged, every backend satisfies them): secrets are node-local · the network graph holds NAMES/fingerprints/routing only · the per-node broker is `Home.aDNA` · substrate private keys are generated on-node and never move.

A node runs exactly **one** application-tier backend, recorded in that node's `inventory_system.{md,yaml}`. macOS is the implicit default until a node declares otherwise.

| Aspect | macOS (Backend A — canonical) | Linux / headless (Backend B — ADR-005) |
|---|---|---|
| Application-tier at rest | macOS login Keychain (`login.keychain-db`) item per credential; 1P item = backup-of-record | `age`-encrypted `~/.config/aDNA/age/secrets.age` (dir 0700, identity 0600, on-node) |
| Hot-path env-var | `~/.zshrc` block per credential via `security find-generic-password -w` (ACL grant, no biometric) | once-per-session `load_secrets.sh` decrypts `secrets.age` → exports each `KEY=VALUE` (`age -d -i identity.txt`) |
| Cold path (TTY) | `op read "op://<vault>/<item>/<field>"` (biometric prompt) | per-call `age -d` of a single item from `secrets.age` |
| SSH / PGP keys | macOS ssh-agent / Keychain (`ssh-add` once) | `ssh-agent` / `gpg-agent` (`ssh-add` once per session) |
| Service-unit secrets | launchd + Keychain | `systemd-creds` (`LoadCredentialEncrypted=`; decrypted only into the unit, never a general shell) |
| Unlock surface | Keychain ACL (already granted) | `age` identity decrypt / `pinentry` once per session |
| Dependencies | FileVault + login Keychain + (optional) 1P | `age`, `ssh-agent`, `gpg-agent`, `systemd-creds`, `pinentry` — no GUI, no 1P, no gnome-keyring required |

**Agent access principle (every backend): one-time-unlock-then-fluid.** An agent never prompts mid-task. The operator unlocks the backend once per session (macOS ACL is pre-granted; Linux = `age` decrypt + `ssh-add`); thereafter all reads are silent and non-TTY-safe. Same shape as the one-time-prompt-then-sudoers-grant discipline (`.adna/how/skills/skill_agentic_sudo.md`). Full Linux backend spec (age identity at `~/.config/aDNA/age/`, the sourced decrypt-to-env script, ssh-add posture, systemd-creds): `Home.aDNA/what/decisions/adr_005_credential_broker_crossplatform.md` §Linux Backend Spec.

### §3.4 SSH keys by tier (ADR-005)

SSH keys are brokered in **two named tiers**; each key's tier is recorded in its `inventory_credentials` row.

- **Broad / production keys** — the secure **default**: **passphrase-protected**, loaded into a running **`ssh-agent` once per session** (one TTY unlock → served non-interactively to agents thereafter). An agent never enters the passphrase mid-task. Example: `id_ed25519` (C27).
- **Automation / scoped keys** — **dedicated, passphraseless**, protected by **scope + the cert-gated mesh + file perms (0600)**, and **revocable in one line** (delete the `authorized_keys` line + retire the key). Names + fingerprints in the inventory; **never the standard for broad keys** — justified per-key by an automation need that can't tolerate an interactive unlock, and carrying an explicit revoke condition. Example: `id_ed25519_adna_alpha_ops` (C55; ADR-018 alpha exemption; "revoke at alpha close"). This key stays **out of broad ssh-agent preload** by design.

### §3.5 Storage kinds and scope under the three-body model (ADR-011 — WIRED, Chambellan M-A6 amendment)

`Home.aDNA` **ADR-011** (`what/decisions/adr_011_register_schema_extensions_one_ruling.md` — ratified by the operator at the S197 chat gate, 2026-08-17; folding WI-20 + WI-21 + DP-8 + FU-2 into one ruling per the DP-8 recommendation) extends the **register schema of record**. This is **wired fact, not intent** — executed the same day at Home commit `5172655`, register at **100 rows**, multiset-parity **PASS in both directions**:

- `storage.kind` gains two values: **`bitwarden_scoped`** and **`keycloak_client`**
- every row gains a **`scope:`** field

The §3 tier table above is **unchanged and still correct** for what it describes (where a credential sits at rest, by tier). These two kinds are an **extension**, not a replacement — a credential's tier says what class of thing it is; its `storage.kind` says which body currently holds it, and the two now vary independently:

| `storage.kind` | Held by | `scope:` records | Rotation shape |
|---|---|---|---|
| `bitwarden_scoped` | Access engine (Vaultwarden per DP-1) | The collection/scope the value is reachable under — the blast radius of a single engine compromise | Value rotates in the engine; the broker row is unchanged (the row is identity, not value) |
| `keycloak_client` | IdP (Aeacus) | Realm · client id · **token audience** — what an issued assertion is good *for* | Client lifecycle, not value rotation: the client is disabled/recreated, and every audience it was good for is affected at once |

**Why `scope:` is load-bearing and not bookkeeping.** Every count derived from this register is a blast-radius estimate, and a row without scope silently reports the wrong one — the register's own history proves it twice: a broker row that understated `admin:org` **understated blast radius** (charter D-51), and a row claiming coverage for a file that does not exist **inflated every count derived from it** (D-50). `scope:` is where that failure is now forced into the open.

**Trigger for a successor doctrine — named, not left implicit** (per the HQ naming rule, `aDNALabs.aDNA` ADR-014 §7: name the split-out trigger rather than pre-splitting). A standalone `doctrine_identity_federation.md` is chartered **when, and only when, IdP rules stop fitting as §-amendments here** — concretely, when *any* of: (a) realm/client lifecycle needs its own multi-step ceremony that is not a case of §4, (b) token audience/scoping rules need to bind consumers who are not credential consumers at all, or (c) `Keycloak.aDNA` (DP-13) has an operating surface whose rules would be duplicated rather than referenced here. Until then, the IdP is a **body in this doctrine**, not a doctrine of its own. See the M-A6 verdict recorded at §9.

## §4 Provisioning — onboard a new credential

Two surfaces are available; pick by use case per ADR-003.

### §4.1 First-time onboarding (operator-interactive)

When a NEW credential is provisioned (vendor portal → 1P), use the **Interactive Secrets Surface (ISS)** for paste-ingest. The ISS is a localhost-only HTML form launched by `Home.aDNA/how/skills/skill_credential_provision_via_op.md`:

- Loopback transport only (`http://localhost:<port>`; never bound to a routable interface).
- DOM-scrub on submit (the form clears the input field synchronously before the network call returns).
- One-shot lifecycle (the server exits after a single successful submit).
- No browser-history leak (URL contains no query parameters).
- No agent transcript involvement — operator pastes into a browser form, not chat.

This addresses SI-1 directly: the operator no longer needs to paste into chat because a safer surface exists.

### §4.2 Routine access / re-provisioning (programmatic)

For rotation, re-binding, or scope updates, use `op` CLI directly:

```sh
op item edit "Vercel Token" credential="<new_value>" --account FI56OGLVAFAJRJITSWCO5NNIZM
```

Never expose `<new_value>` in shell history. Patterns that work:

```sh
op item edit "Vercel Token" credential="$(pbpaste)" --account ...  # clipboard
op item edit "Vercel Token" credential="$(cat /tmp/staged)" ...    # ephemeral file (gshred -u after)
```

See `Home.aDNA/how/skills/skill_credential_provision_via_op.md` for the canonical procedures.

### §4.3 Rotation in Terminal.app (Pattern A — both stores)

Pattern A per ADR-003: the operator runs the rotation in a real TTY (Terminal.app, iTerm2, etc.) where biometric prompts can surface. **Per ADR-002 §G2.1 amendment (M02 close 2026-05-25), rotation MUST touch BOTH the 1P canonical backup AND the Keychain primary runtime substrate** — a credential that lives in only one store will silently drift, and the env-var-first consumer pattern will keep using the stale value until shell init re-fires.

Use this surface for rotations once a credential is already known to the broker (it's in `inventory_credentials.yaml` with both `storage.kind: macos_keychain_primary_1p_backup` and a `storage.backup.uri`). For first-time onboarding of a brand-new credential, use the ISS paste surface (§4.1) instead — its labelled form prevents the SI-1 chat-leak vector.

**Operator ceremony** (replace `<NAME>`, `<URI>`, `<KEYCHAIN_NAME>` with the values from the credential's inventory row):

```sh
# 1. Open Terminal.app — NOT a non-TTY shell (no Claude Code Bash here; biometric
#    prompts cannot surface in a non-TTY context and will hang or fail silently).

# 2. Stage the new value WITHOUT it landing in shell history.
#    Either clipboard-pipe, or here-doc to a /private/tmp file then dispose:
ROTATED=$(pbpaste)                                    # option a: clipboard
#   OR
cat > /private/tmp/rot_$$.txt <<'EOF'                 # option b: paste-into-here-doc
PASTE_HERE_THEN_HIT_ENTER_THEN_EOF
EOF
ROTATED=$(cat /private/tmp/rot_$$.txt)

# 3. Update 1P canonical backup.
op item edit "<NAME>" credential[concealed]="$ROTATED" --vault Personal \
   notesPlain[text]="Rotated $(date +%Y-%m-%d) — Pattern A doctrine §4.3"

# 4. Update Keychain primary substrate (idempotent — -U updates existing).
/usr/bin/security add-generic-password -U \
   -a "$USER" -s "<KEYCHAIN_NAME>" \
   -T /usr/bin/security \
   -w "$ROTATED"

# 5. Verify both stores hold the new value (read-back; diff against expected).
op read "<URI>" | head -c 4 ; echo ""                 # first 4 chars only (§6.3)
/usr/bin/security find-generic-password -s "<KEYCHAIN_NAME>" -w | head -c 4 ; echo ""

# 6. Dispose of plaintext + variable + clipboard.
unset ROTATED
rm -P /private/tmp/rot_$$.txt 2>/dev/null              # APFS caveat — see §6.5
pbcopy < /dev/null                                     # clipboard-clear
```

**Operator checklist** (in order, no skipping):

1. **Real TTY** — Terminal.app or equivalent. Never a non-TTY agentic shell.
2. **Stage off-history** — clipboard OR here-doc to `/private/tmp`. Never `export FOO=<value>` (lands in `~/.zsh_history`).
3. **Update 1P FIRST** — if this step fails (auth lapse, network), don't touch Keychain; the old value stays consistent across both stores.
4. **Update Keychain SECOND** — only after `op item edit` returns 0.
5. **Verify both** — `head -c 4` to confirm match without echoing the full value (§6.3 rule).
6. **Dispose** — `unset` the variable, `rm -P` any temp files, `pbcopy < /dev/null`.
7. **No inventory update needed** — rotation does not change the inventory row (storage kind + URI + Keychain name are unchanged). If the credential is leaving the broker entirely, that's not rotation; that's deprovisioning.

**Why two stores, not one**: The Keychain entry is what the runtime reads (zero-friction, non-TTY-safe, exported as env-var by `~/.zshrc` blocks). The 1P entry is the backup-of-record + the surface most operator-facing tools (`op read`, the 1P app, the 1P browser extension) speak to. They MUST agree, or `~/.zshrc` re-init will fetch a stale value from one and confuse the consumer that reads the other.

**Anti-pattern**: skipping the Keychain step because "the env-var is still set in my current shell." That env-var dies with the shell. The next session re-reads from Keychain via the `~/.zshrc` block and silently picks up the OLD value.

### §4.4 Discovery after provisioning

After any new credential lands, append a row to `Home.aDNA/what/inventory/inventory_credentials.{md,yaml}`. The inventory is the broker's index; an unindexed credential is invisible to future sessions.

### §4.5 Delivering a credential value to a second person (Chambellan M-A6 amendment)

§4.1–§4.4 cover onboarding a credential the **operator** holds. Handing a live value to a **second person** is a different act with a different failure mode, and it has now happened twice on one credential — the S193 G31 arc (a 90-day, team-scoped partner token). Both variants are on record **because the second superseded the first mid-arc under operator direction**, so doctrine carries **n=2**, not a single blessed path:

- **Variant A — view-once share link.** A one-shot link from the custodian store; the value is never composed into a message body. Preferred in the abstract: one retrieval, then the link is dead.
- **Variant B — raw-token-inline message.** The value composed directly into a message to the recipient. Chosen by operator direction when the recipient's retrieval path made A unreliable.

**Six rules make either variant lawful. All six bind both.**

1. **The value never transits the conversation.** The message is composed operator-read → heredoc → clipboard and verified by **byte and occurrence count**, never by printing it. (Counting is how you confirm a value you are forbidden to look at — a hash or a length, never an echo; cf. §6.3.)
2. **The value never lands in the vault.** §6.1 NAMES ONLY is unchanged and admits no delivery exception. The rebuild script for a delivery lives in session scratch, not in the tree.
3. **Scoped and expiring *before* delivery, never after.** Per DP-6's alpha class — scoped, expiring, single-purpose. A credential that has to be narrowed after it is in a second person's hands has already been delivered wide.
4. **Mitigations travel with the value, in the same message**: store-it-now, confirm-receipt, and *the sender deletes the delivery message*. A mitigation sent separately is a mitigation the recipient may never read.
5. **A custodian of record is named, and it is not the delivery channel.** The 1P item stays custodian; the channel is transport, and **transport is assumed retained** (§6.1's "anything that helps reconstruct"). Variant B's whole risk is exactly this: an inline value in a retained messaging system.
6. **The grant gets a register row before delivery, not after.** A live credential issued to a second person with no row in the register of record is the highest-priority defect the M-A2 reconciliation surfaced (charter D-46 note, row **E1** — that very token). Delivery without a row means the credential's existence depends on someone remembering it.

**Recorded honestly, not smoothed**: variant B is the *less* safe of the two in the abstract, and it was chosen by operator direction with compensations (in-message mitigations, revoke/expiry/scope warnings retained, operator-deletes-the-message). Doctrine records the ruling and its compensations rather than retconning a preference; a future delivery picks A by default and must **state a reason** to pick B.

## §5 Rotation — periodic + on-leak

Per-credential rotation cadence is in `inventory_credentials.yaml`. Two cadences apply globally:

- ~~**1P service-account tokens** — rotate every 90 days~~ — **SUPERSEDED** (M05 2026-05-25): the service-account model was never deployed (INDIVIDUAL-tier; see top amendment). No periodic service-account cadence applies.
- **Application-tier credentials** (Keychain-primary + 1P-backup) — rotate on doctrine trigger (see `doctrine_key_rotation.md` §"Mandatory Triggers"). No periodic cadence by default; operator-discretionary hygiene. **Rotation touches BOTH stores** per §4.3.

### §5.1 Containment-first on any leak

If a credential value appears anywhere it shouldn't (chat, file, screenshot, terminal scrollback that may be shared):

1. **Stop using it.** The agent does not make further API calls with the leaked value — that propagates the leak into vendor audit logs and local JSONL audit trails keyed by the (still-valid) token's identity.
2. **Revoke at the vendor** within minutes, not hours. The vendor portal (Vercel, Anthropic, Google AI Studio, etc.) revokes/rotates the application token itself — that is the authoritative kill switch; updating 1P/Keychain afterward only re-syncs the broker stores.
3. **Re-provision a fresh value.** Generate at vendor; store in 1P via §4.1 / §4.2.
4. **Verify the new value is in use.** Prefix-check with `op read ... | head -c 4` (NEVER `head -20` or `head -N` line-based — SI-2 root cause).
5. **Document.** Create `who/coordination/incident_<YYYYMMDD>_<scope>.md` in the affected vault. Append a rotation log entry to the relevant coord note.
6. **Post-rotation gitleaks scan.** Run `gitleaks detect --no-banner --redact` against the affected vault's full history to confirm the old value never committed.

Full procedure: `doctrine_key_rotation.md`.

### §5.2 The "no-op rotation" anti-pattern (SI-2)

A "rotation" that stores the same byte-identical value back is **not a rotation**. Always:

- Generate a fresh value at the vendor (do NOT reuse the leaked value).
- Verify the new value's prefix differs from the leaked value's prefix (`op read ... | head -c 6`).
- Confirm the new value works against the vendor API (smoke test).

The leaked value is dead from the moment of leak; the rotation re-provisions a live replacement.

## §6 Discipline — the rules every vault inherits

### §6.1 NAMES ONLY (D4=A)

Inventory files, coord notes, doctrine files, ADRs, mission files — all carry **names only**: URIs, paths, env-var names, public-key fingerprints, vendor item IDs. **Never**:

- Token values, hashes of token values, last-N-character snippets
- Private-key file contents
- Account passwords (even hashed or one-way-derived)
- Anything that, combined with public information, helps reconstruct a secret

Prefix references (≤ 2 secret bits, e.g. `vcp_3D...`) appearing inside narrative incident descriptions are tolerated ONLY for revoked credentials, ONLY when the prefix already exists in a prior coord note, and never for live credentials. The default is no prefix at all.

### §6.2 URI-not-value (SI-1 root cause)

When asked to confirm a credential's location, paste the **URI** (`op://Vault/Item/field`), never the **value**. This rule applies to:

- Operator → agent chat exchanges
- Mission spec content
- ADR / doctrine examples
- Coord notes
- Bug reports / incident records
- Anywhere the operator might be tempted to "just paste it for verification"

Agent-side: prompts that elicit credential info MUST be structured to make URI-paste the obvious answer ("If you stored the token at a non-canonical URI, paste the URI here — NOT the token value"). Open-ended prompts that allow value-paste are the root cause of SI-1.

### §6.3 `head -c N` rule for inspection (SI-2 root cause)

When inspecting a credential value programmatically (smoke-test, prefix-check, post-rotation verification):

- Use **`head -c N`** with **N ≤ 6** (character-bounded, ≤ 2 secret bits of entropy revealed).
- **NEVER `head -N`** (line-based — credentials are single-line; `head -20` prints the whole value).
- **NEVER `cat`** or `echo` against a credential value, even for "just for a moment".
- **NEVER** capture credential output to stdout when stdout might be retained (chat transcript, audit log, CI build log).

Safe patterns:

```sh
op read "op://Personal/Vercel Token/credential" | head -c 4    # prefix check
op read "op://Personal/Vercel Token/credential" | wc -c         # length check
op read "op://Personal/Vercel Token/credential" | md5sum        # canary (hash leaks 0 secret bits)
```

Unsafe patterns:

```sh
op read ... | head -20         # WRONG — line-based; prints everything (SI-2)
op read ... | tee /tmp/x       # WRONG — persists value to disk
echo "$(op read ...)"          # WRONG — likely shows in process listings
```

### §6.4 Keychain-export preference (M02b root cause)

When provisioning access for an agentic context (Claude Code Bash, CI, launchd, cron):

- **Prefer Keychain-exported env-vars** — a Keychain entry with a `/usr/bin/security` ACL grant has no GUI/biometric requirement, and the `~/.zshrc` block exports it before any subshell runs.
- **Avoid `op signin`-driven sessions** for agentic use — they require a TTY for the biometric/master-password prompt and don't propagate to subshells. Use `op read` only as a TTY cold-path fallback (§2.1).
- One Keychain entry per credential; the env-var name and service-name are recorded in the credential's `inventory_credentials.yaml` row.
- *(Historical: 1P service-account tokens were the original M02b remedy but are unavailable on the operator's INDIVIDUAL-tier 1P account — Business-only. ADR-002 §G2.1 pivoted to the Keychain pattern above.)*

### §6.5 Plaintext file disposal (APFS-aware)

When a credential value transits a temporary file (e.g. ISS paste-ingest, vendor-portal export download), dispose of the file securely:

**Primary**: `gshred -uz <file>` (GNU coreutils — `brew install coreutils`; installs as `g`-prefixed binaries to avoid Apple bsdshim collision). Three default overwrite passes + final zero pass + unlink.

**Fallback**: `rm -P <file>` (BSD-native; always available on macOS). Three overwrite passes + unlink. Note: the `--PP` extended form is documented as a no-op on FreeBSD 13+ (and BSD-derived macOS), so prefer `gshred` when both are available.

**APFS reality** (verified at M01 2026-05-25): both `gshred` and `rm -P` successfully unlink. The overwrite passes are advisory on copy-on-write filesystems — APFS may write the "overwrite" to NEW blocks, leaving the original block intact until garbage-collected. The load-bearing protection on macOS is the **unlink + FileVault disk encryption** (operator's Mac has FileVault on per Apple-default config); the overwrite passes are belt-and-suspenders.

**Never use plain `rm`** for files holding a plaintext credential. `rm` does not overwrite at all (just unlinks). On APFS this is functionally identical to `gshred`/`rm -P` post-FileVault — but the policy is "show intent + use the right tool" so an audit reading the script knows the file held a secret.

### §6.6 Backup-exclusion enforcement

Per §3.1, `~/.lattice/` is excluded from Time Machine, iCloud, Dropbox, Google Drive, OneDrive, git. Verify after any system migration or backup-tool reconfiguration. Spot-check command:

```sh
tmutil isexcluded ~/.lattice
```

Expected: `[Excluded] /Users/stanley/.lattice`. If `[Included]`, fix immediately.

### §6.7 Rotation cadence (table)

| Class | Cadence | Source-of-truth |
|---|---|---|
| ~~1P service-account tokens~~ | ~~90 days~~ — **SUPERSEDED** (M05; never deployed, INDIVIDUAL-tier) | — |
| Application-tier (Keychain-primary + 1P-backup) | Doctrine-trigger only; touch both stores (§4.3) | `doctrine_key_rotation.md` §"When to Rotate" |
| Federation-tier (Tailscale, Nebula CA/node keys) | On personnel change / on PKI rebuild | `inventory_memberships.yaml` |
| Substrate-tier (gh, SSH, sudoers grants) | On personnel change / on key compromise | system-managed |

### §6.8 Handoff-note discipline (F14 root cause)

Operator handoff notes (`~/.lattice/handoff_*.md`, `~/.lattice/handoff_kai_*.md`, anything in `~/.lattice/secrets/handoffs/`, plus equivalent "carry-this-forward-to-the-next-session" notes anywhere on disk) are governed by the **same** §6.3 inspection rules as chat / audit log / CI build log:

- **`head -c N` rule applies** — when a handoff note references a credential by prefix for cross-session continuity, the prefix MUST be **≤ 6 chars** (≤ 2 secret bits of entropy revealed). Suffixes are NEVER included. Truncate-with-ellipsis (`vcp_3D…`) is the canonical shape.
- **Live credentials get URI references only** — handoff notes for an unrotated credential carry `op://Personal/Vendor/credential` (URI) and the env-var name; never the value, never a prefix beyond 6 chars.
- **Revoked credentials**: a prefix-plus-suffix reference (e.g. `vcp_3D…XyZ9`) is tolerated ONLY when (a) the credential has been revoked and replaced before the handoff note is written, AND (b) the prior coord note documents the revocation. Default is still no prefix at all.
- **Handoff notes inherit backup-exclusion** — `~/.lattice/` is excluded per §6.6; verify after any backup-tool reconfiguration.

Historical context (F14, M05 O1 audit 2026-05-25): a `~/.lattice/handoff_kai_*.md` file contained an 8-char prefix-plus-suffix reference (exceeded the §6.3 ≤6-char rule). The token has rotated 2× since — historical-only, benign — but the §6 family did not explicitly cover handoff notes when written. §6.8 closes that gap. F14 doctrine-gap RESOLVED at M06 2026-05-26.

### §6.9 A rule that names a path names a **locus**, and loci rot (D-28 — Chambellan M-A6 amendment)

The fleet's finding **F8** described the MCP-config secret surface as `.mcp.json`. Verified at the Chambellan census (charter **D-28**, 2026-08-16): the only workspace `.mcp.json` outside the DataRoom extraction is `Archive.aDNA/lattice-labs/.mcp.json` — **F8 as written describes a dead file in the archive.** Its failure mode survives; its locus does not.

**Live surface, verified 2026-08-16**: `~/.claude.json` (mode `0600`) and `~/.lattice/mcp_config.json`. Registered as census rows **S24 / S25 / S26**. Both inherit §3.1's backup exclusion and §6.6's enforcement.

The general rule — the part worth inheriting past this one correction:

- **Every path a doctrine names is a claim with a date on it.** Write the date (`verified <YYYY-MM-DD>`) at the point of writing.
- **Re-verify at use, not at authoring.** A rule executed a year after it was written is executing against a path nobody has looked at since. (Exact analogue: charter **D-47** — a remedy naming a specific free id went stale *three days* after it was written, and nothing watched it.)
- **When a locus moves, correct the locus and keep the failure mode.** A finding does not retire because its file did. Annotate forward (SO-7); never delete the original.

**Why this is worse than a missing path, not merely equivalent**: an uncorrected locus makes a scan of the wrong place **look like coverage**. The register reports clean, the sweep exits 0, and the live surface was never in scope. That is the same defect class as a parity checker that verifies both files exist while printing a row count (charter **D-60**) — a cheap legible proxy promoted to the thing it stands for.

## §7 Cross-vault routing (template snippet)

Every consumer vault adds the following snippet to its `CLAUDE.md`. The snippet is **NAMES ONLY** — no credential value is referenced anywhere in a consumer vault.

> _Broker vault was formerly `node.aDNA` → `LatticeHome.aDNA` (both remain as back-compat symlinks). Older snippets that still say those names should be updated to `Home.aDNA`._

```markdown
### Credential routing (broker = `Home.aDNA`)

Credentials are brokered by `Home.aDNA/` (Hestia) — **NAMES ONLY** here, never a value.
1. **Discover** — `Home.aDNA/what/inventory/inventory_credentials.md` (name → env-var + `op://` URI/path).
2. **Access** — read the **env-var** (hot path — no biometric/TTY); else the cold path (TTY-only). **Backend is platform-adaptive per ADR-005; consumer interface is identical** (macOS: `~/.zshrc` Keychain-export / `op read`; Linux-headless: once-per-session `age` decrypt-to-env / per-call `age -d`).
3. **Discipline** — never write a value; URI/env-var name only; apply `~/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` §6.
4. **Rotate/onboard** — route to the broker: coord memo to `Home.aDNA/who/coordination/` or `Home.aDNA/how/skills/skill_credential_provision_via_op.md`.

Broker docs: inventory · ADR-002 (Keychain+1P) · ADR-003 (onboarding) · ADR-005 (cross-platform backends + SSH-key-by-tier) · `skill_credential_provision_via_op` — all under `Home.aDNA/`; workspace doctrine `~/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md`.
```

Day-1 vaults that received the snippet (M06 sweep 2026-05-26): `ScienceStanley.aDNA` (M02 pilot; snippet at `CLAUDE.md` `### Credential routing (broker = Home.aDNA)`), `LatticeLabs.aDNA` (M05 O3; snippet at `CLAUDE.md:206`). Deferred to future Platform.aDNA forks (Vault Fork Queue in `Home.aDNA/STATE.md`): `latlab/` → `LatLab.aDNA/`, `lattice-protocol/` → `LatticeProtocol.aDNA/` (snippet lands at fork-time). Forward-inheritance via `.adna/` template proposed upstream at `aDNA.aDNA/how/backlog/idea_upstream_credential_broker_template_inheritance.md` (M06 filing 2026-05-26).

## §8 Single-writer-lease for inventory + credential edits (M05 dual-session root cause)

Before editing **any** of the following files, the agent MUST first scan `Home.aDNA/how/sessions/active/` and abort the edit if another session is in flight on the same file or campaign. **This is not a polite suggestion** — it is a doctrinal requirement equivalent to the §6 inspection rules.

**Files in scope**:
- `Home.aDNA/what/inventory/inventory_credentials.{md,yaml}` (broker index — workspace-shared truth)
- `/Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` (this file)
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md`
- `Home.aDNA/what/decisions/adr_003_credential_onboarding_surfaces.md`
- Any consumer-vault `### Credential routing (broker = Home.aDNA)` snippet (concurrent edits → snippet drift across vaults)
- Any file containing actual credential values or `op://` URIs being edited concurrently (e.g. `~/.zshrc`, Keychain ACL grant scripts)

**Pre-flight check (mandatory)**:

```sh
ls /Users/stanley/aDNA/Home.aDNA/how/sessions/active/ 2>/dev/null | grep -v '^\.gitkeep$'
```

If output is non-empty:
1. Read the existing session file (`how/sessions/active/<id>.md`).
2. If the existing session's `mission_id` overlaps the intended edit scope (credentials / inventory / doctrine / ADR-002 / ADR-003), **abort** and surface to operator: "Single-writer lease held by `<existing_session_id>` on `<file_path>`. Wait for that session to close, OR coordinate explicitly with the operator."
3. If non-overlapping, proceed but file own session record FIRST.

**Why this rule exists** (M05 dual-session root cause):

`campaign_node_credentials` M05 (2026-05-25 → 2026-05-26) ran as two parallel agent sessions writing concurrently to `inventory_credentials.md`, `doctrine_credential_handling.md`, and the campaign master. `mossy-badger` ran the audit (NAMES-ONLY workspace-wide); `expressive-sunset` ran the C06 migration + doctrine reconciliation. The collision surfaced as Edit-tool "File modified since read" warnings mid-write and was reconciled by operator routing (`expressive-sunset` halt; `mossy-badger` owns close). Cost: one mistaken speculative-content revert + several minutes of operator-mediated bridging. Source: `Home.aDNA/who/coordination/coord_2026_05_25_m05_dual_session_handoff.md`.

The credential / inventory / doctrine surface is a small-fan-in shared resource (one broker, one inventory, one doctrine) where concurrent writes don't naturally merge. **Single-writer lease is the lightest enforceable discipline** that prevents the failure mode without requiring real locks.

**Carry-forward at v8.0+**: this rule is proposed for the `.adna/` template at `aDNA.aDNA/how/backlog/idea_upstream_single_writer_lease_for_inventory.md` — applies to **any** node-local inventory entity type (not just credentials). Until upstream adoption, the rule binds at the workspace-doctrine level documented here.

### §8.1 The general form (the discipline, not the schema) — Refit M1 promotion

§8 binds the lease to the credential / inventory surface because that is where it was first drawn in blood (M05). The **discipline generalizes** to any high-collision, small-fan-in shared entity where concurrent writes do not naturally merge — inventory, identity, a registry, a `STATE.md`, a shared config. In its general form, four rules:

1. **One writer per unit of work.** A "unit" is whatever two agents would corrupt by co-writing — a file, a campaign scope, an entity type. Exactly one session holds the write at a time.
2. **Fencing token.** The lease-holder is named by its session id in `how/sessions/active/`; that id is the fence. A later writer that finds a live *overlapping* lease defers to the named holder, and a stale write from a superseded holder is rejected by re-reading `updated` immediately before write (File Safety).
3. **Heartbeat / TTL.** A lease is only as live as its session. A session whose `heartbeat` has gone cold past its declared window is a **candidate-dead** lease, not a permanent block — surfaced to the operator for release, never silently stolen.
4. **Stuck → human.** When two writers genuinely need the same unit, the tie does **not** resolve by "last write wins" — it escalates to the operator. (The M05 reconciliation was operator-routed; that is the pattern, not the exception.)

This is the **discipline**, not a schema. The *federated wire-format* for a cross-node lease (lease records, lock tables, a claim-lease protocol) stays **D-DP1-gated** — the Coordination-category ontology lock — and is Operations.aDNA's to define. A standalone `pattern_single_writer_lease` lifting these four rules out of the credential doctrine into a general operational pattern is **filed for M5 vNext triage** ([[idea_upstream_single_writer_lease_for_inventory]]); this promotion teaches the general form here in the meantime, per the D-DP2 / DP6 ruling (Operation Refit M1, 2026-07-22).

## §9 Ratification record (§7.7) — Chambellan M-A6 amendment

> Authored by an agent; **owned by the operator**. This block is `proposed` and stays `proposed` until the
> operator signs it. Nothing in the M-A6 amendment set is in force before that signature.

| Field | Value |
|---|---|
| **decision** | Adopt the Chambellan M-A6 amendments to this doctrine: **§2.5** (three-body access model — broker of record / access engine / IdP, and the four rules that follow) · **§3.5** (ADR-011 storage kinds `bitwarden_scoped` + `keycloak_client` and the `scope:` field as schema of record, plus the **named trigger** for a future `doctrine_identity_federation.md`) · **§4.5** (partner delivery of a value to a second person; n=2 variants with six binding rules) · **§6.9** (the locus rule; D-28's correction of F8's dead `.mcp.json` path) |
| **ratified-by** | stanley |
| **date** | 2026-08-17 |
| **status** | **ratified** *(⛩ S198 chat gate, HQ fable desk — ruled "ratify 1–3, hold safe-mutations for Hestia's co-sign")* |

**What the operator is signing, in plain terms**: that the three-body split is *law* rather than description — a value reachable outside the register becomes a finding; a Keycloak client is a row, never a place secrets hide; a value handed to a second person needs a register row **before** it is sent; and a doctrine that names a file path owes that path a date.

**Findings discharged here**: charter **D-28** (locus) · **ADR-011 Part 3** as wired schema-of-record (Home `5172655`) · the S193 **G31** partner-delivery arc (n=2). **Deliberately not decided here**: which credentials migrate to which body — that is Chambellan **P5** custody work, and this doctrine only makes the move expressible.

## Related

- [[doctrine_key_rotation]] — what to do *after* a leak is detected
- [[doctrine_secret_scanning]] — pre-commit gitleaks hook + Obsidian allow-list
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — broker architecture
- `Home.aDNA/what/decisions/adr_003_credential_onboarding_surfaces.md` — paste-ingest surfaces
- `Home.aDNA/what/inventory/inventory_credentials.md` — broker index
- `Home.aDNA/how/skills/skill_credential_provision_via_op.md` — programmatic provisioning
- `Home.aDNA/who/governance/plan_service_account_adoption.md` — **superseded** (`status: superseded_by_keychain_pivot`); retained for audit only. The live model is Keychain-primary + 1P-backup (§2.1, §3, ADR-002 §G2.1).
- `.adna/how/skills/skill_agentic_sudo.md` — analogous one-time-grant pattern (sudo elevation)
- `ScienceStanley.aDNA/who/coordination/incident_20260523_vercel_token_chat_leak.md` — SI-1 (URI-not-value origin)
- `ScienceStanley.aDNA/who/coordination/incident_20260524_vercel_token_double_leak.md` — SI-2 (`head -c N` rule origin)
