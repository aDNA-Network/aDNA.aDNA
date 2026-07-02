---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [governance, inventory, identity, all_categories]
campaign_id: campaign_champollion
instances:
  - "Home.aDNA (Hestia) — the node's canonical broker: Keychain-primary + 1P-backup substrate, per-credential `/usr/bin/security` ACL grant, names-only inventory (ADR-002 + ADR-003; 49-credential index)"
  - "aDNA.aDNA (this vault) — consumer-side: workspace-canonical doctrine at `what/doctrine/doctrine_credential_handling.md` + workspace Rule 6 routing rule; the `### Credential routing (broker = Home.aDNA)` CLAUDE.md snippet is the adoption unit"
  - "BusinessIntelligence.aDNA (Metis) — a third-vault snippet-carrier found at the M3.2 fable-review census: its CLAUDE.md lands the routing snippet verbatim-in-shape (names-only, scoped read-only role by NAME, broker + doctrine pointers)"
graduation: "3 vault-level adoptions live (broker: Home.aDNA · doctrine + routing rule: this vault · snippet-carrier: BusinessIntelligence.aDNA) — GRADUATION THRESHOLD MET; ratification = gate work → flagged for Champollion G3 (this file stays draft until the gate rules). Split from shim-registry because credential-non-egress + names-only is a distinct lesson from register-at-creation retirement (see Provenance)."
last_edited_by: agent_rosetta
tags: [pattern, credentials, broker, names_only, keychain, one_password, node_local, non_egress, hestia, one_time_unlock, containment, champollion]
---

# pattern_credential_broker

> **Plain-language version first**: secrets — API tokens, passwords, private keys — are the one kind of knowledge you must *not* copy the way you copy everything else in a context graph. So a node designates exactly one place (here, the `Home.aDNA` vault) as the **broker**: the broker is the only thing that knows the actual secret *values*; every other vault only ever learns the secret's *name*, its *env-var*, and *where it lives* — never the value itself. Two ideas make this liveable. First, **names-only**: an inventory lists "Vercel token → env var `SS_VERCEL_TOKEN` → stored in the Keychain" but never the token; you can share that inventory freely because it leaks nothing. Second, **one-time-unlock-then-fluid**: the operator grants an agent read-access to the local secret store *once* (a macOS Keychain ACL grant); after that, any script or agent reads the secret silently, with no password prompt, forever — the same shape as being handed a house key once instead of being buzzed in every time. The payoff: an agent working in *any* project can use a credential without the value ever passing through the chat, a log file, or another project's files.

## 1. Problem

Every other kind of knowledge in an aDNA workspace *wants* to be copied, cited, and federated — that is the whole point of a context graph. Credentials are the exact inverse: a token that appears in a second place is a token that has *leaked*. And the workspace is full of second places that eagerly retain text — chat transcripts, shell history, process argument lists (`ps -ef`), CI build logs, JSONL audit trails, handoff notes. Three specific failure modes recur (all are real incidents on this node, cited below):

1. **The chat-leak (SI-1).** An open-ended prompt ("confirm the token or provide it") invites the operator to paste the *value* into the conversation, because no safer surface exists. The value is now in the transcript forever.
2. **The re-leak on inspection (SI-2 / the `ps` leak).** An agent diagnosing a credential runs `head -20` (line-based — prints the whole single-line token) or passes the value as a `--token` CLI flag (visible in `ps` for the command's lifetime). The leak recurs *while trying to verify the fix*.
3. **The biometric wall.** The obvious safe store (1Password, or any GUI keychain) requires a biometric/PIN prompt to unlock — and that prompt **cannot surface in a non-TTY agentic context** (Claude Code Bash, CI, launchd). So the agent either can't read the secret at all, or the operator gives up and pastes it into chat (back to failure #1).

Naively, every vault manages its own credentials. That multiplies the attack surface by N (N vaults × N drifting rotation policies), and makes "is this secret still live? where does it live? who can read it?" unanswerable. The broker pattern is the standing fix: **one owner of values, names-only everywhere else, and a non-interactive unlock so the agent never has to choose between "prompt the operator" and "leak."**

## 2. The mechanism

A single node vault (`Home.aDNA`, persona Hestia) is the **credential broker**. It is composed of three sub-decisions (ADR-002 §G2.1–G2.3), each of which is a rule other vaults inherit:

| Sub-decision | Rule | Why it matters |
|---|---|---|
| **Storage** | Application-tier secrets live in the **macOS login Keychain (primary) + a 1Password item (backup-of-record)**; federation-tier keys stay on-disk at `0600`; nothing crosses the node boundary | The value has exactly one canonical home per tier; cross-machine secret sync is explicitly *out of scope* |
| **Access** | **env-var injection on the hot path + `op read`-class cold path (TTY-only)**. An idempotent `~/.zshrc` block reads each secret from the Keychain via `security find-generic-password -w` (guarded by an ACL grant, so **no biometric prompt**) and exports it as an env-var before any subshell runs | The agent reads a *value* only via an env-var that was populated by a one-time-granted mechanism; it never prompts mid-task |
| **Discovery** | **inventory cross-reference, NAMES ONLY**. `inventory_credentials.md` lists every credential by name → env-var → URI/path. It carries no values, no hashes, no last-N-char snippets | A consumer vault finds *what exists* without the discovery act itself leaking anything |

Three properties are the heart of the pattern, and each is load-bearing:

- **Non-egress.** Values never leave the node; the *network graph* (and every consumer vault) holds names, fingerprints, and routing only. This is why the broker lives in `Home.aDNA` — the local-by-default node vault (workspace Rule 4) — and not in any shareable project vault.
- **Names-only is a *format*, not just a habit.** The inventory file is designed to be safe to read, cite, and even federate, precisely because it contains no secret bits. `inventory_credentials.md` being names-only *is itself part of the pattern* — the discovery surface is engineered so that "reading the index" can never be a leak.
- **One-time-unlock-then-fluid.** The operator grants access to the local store *once* per credential (the macOS Keychain ACL grant for `/usr/bin/security`; on Linux, an `age`-identity decrypt + `ssh-add` once per session per ADR-005). Thereafter every read is silent and non-TTY-safe. This is the same shape as the one-time-prompt-then-sudoers-grant discipline in [[../../how/skills/skill_agentic_sudo|skill_agentic_sudo]] — grant once, use forever, never prompt again.

### 2.1 The consumer contract is one snippet

A vault that *uses* a credential does not store, cache, or re-specify anything. It adds a single `### Credential routing (broker = Home.aDNA)` block to its `CLAUDE.md` (canonical template in [[../doctrine/doctrine_credential_handling|doctrine_credential_handling]] §7) that says, in four lines: *discover* by reading the broker inventory · *access* by reading the env-var (hot) or the cold path (TTY-only) · *discipline* per the doctrine §6 · *rotate/onboard* by routing a coord memo to the broker. That snippet is the entire adoption unit — it points at canonical homes and restates none of them.

## 3. Live instances (the structure IS the lesson)

**Broker side — the value owner (read-only reference; another vault owns it):**
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — the canonical broker architecture (storage/access/discovery, incl. the §G2.1 Keychain pivot after 1P service-accounts turned out to be Business-tier-only). Its companion `adr_003_credential_onboarding_surfaces.md` adds the two provisioning surfaces (Pattern A terminal rotation · Pattern B ISS paste-ingest). `Home.aDNA/what/inventory/inventory_credentials.md` is the names-only, 49-credential index — the discovery surface that leaks nothing by construction.

**Consumer side — this vault + the workspace (self-reference, concrete paths):**
- [[../doctrine/doctrine_credential_handling|doctrine_credential_handling.md]] lives *in this vault* as the workspace-canonical rule-of-conduct (§1 discovery · §2 access · §6 the disciplines every vault inherits: NAMES ONLY, URI-not-value, the `head -c N` inspection rule, no secret-as-CLI-flag). It is the reference the workspace router's **Rule 6** points to — this vault holds the doctrine; `Home.aDNA` holds the values.
- **Workspace Rule 6** (`~/aDNA/CLAUDE.md`) is the routing rule that makes the broker discoverable fleet-wide: "Credential broker = `Home.aDNA` (Hestia)." Consumer vaults land the routing snippet under that rule.
- **A third-vault snippet-carrier, live**: `BusinessIntelligence.aDNA/CLAUDE.md` carries the `### Credential routing (broker = Home.aDNA)` block — names-only references (a Neo4j read-only role cited by NAME), broker-inventory + doctrine pointers, scoped-grant discipline. Found at the M3.2 fable-review census, not claimed from the rule text: the adoption is verified on the filesystem, which is exactly how this pattern's own counting rule wants it.

> **The honest divergence, recorded not hidden**: the broker's *original* design (ADR-002 as first written) assumed a 1Password **service-account** token as the unlock mechanism. At implementation, `op account get` returned `Type: INDIVIDUAL` — service accounts are a Business/Teams feature. The broker pivoted to **Keychain-primary** (native macOS, same non-TTY-unlock property, no paid tier). The ADR retains the service-account design as a documented Business-plan *upgrade path*, not as fiction. The pattern's *shape* (one-time-unlock-then-fluid, names-only, non-egress) was invariant across the pivot — only the backend changed. ADR-005 later generalized this to a platform-adaptive backend (macOS Keychain · Linux `age`) behind an *identical* consumer interface, which is the proof the shape — not the mechanism — is the pattern.

## 4. Adoption (copy, don't re-derive)

**If you are a NODE standing up the broker (you own the values):**
1. Designate the **local, non-shareable node vault** (`Home.aDNA`) as the broker — never a project vault (values must not ride a pushable repo).
2. Pick the platform backend: macOS → login Keychain + 1P backup; Linux/headless → `age`-encrypted store (ADR-005). Both expose the *same* consumer interface: an exported env-var (hot) + a per-call decrypt (cold).
3. Write the **names-only inventory** (`inventory_credentials.md`) — name → env-var → URI/path, and *nothing else*. This is the discovery surface; keep it leak-free by construction.
4. Grant the non-interactive unlock **once** per credential (Keychain ACL for `/usr/bin/security`; `age` identity + `ssh-add` on Linux). Emit the idempotent `~/.zshrc` export block per credential.
5. Provision new credentials through a **safe surface** — the ISS localhost paste form for first-time onboarding (value never touches chat), direct `op`-CLI for known-credential rotation (ADR-003). Rotation touches **both** stores.

**If you are a VAULT that consumes a credential (you never see values):**
1. Add the `### Credential routing (broker = Home.aDNA)` snippet to your `CLAUDE.md` (template in the doctrine §7). That is the whole integration.
2. Read the **env-var** on the hot path; fall back to the cold path only in a real TTY. Never store, cache, log, or echo the value.
3. Route any rotate/onboard need to the broker as a **coord memo** ([[pattern_coordination_countersign]]) — never write a value into your own vault.

## 5. When NOT to use / anti-pattern

- **Truly public, non-secret config** (a public API base URL, a feature flag, a public key you *want* distributed) doesn't need the broker — it's ordinary context and should be copied freely. Reserve the broker for values whose second appearance is a leak.
- **Anti-pattern — the value in the graph.** Any secret value in an inventory, ADR, mission file, coord note, or commit is the pattern *inverted*. The inventory is names-only *by design*; a value in it defeats the entire mechanism.
- **Anti-pattern — the biometric-gated agentic read.** Wiring an agent to `op signin` (needs a TTY/GUI prompt) instead of the ACL-granted env-var reintroduces the exact biometric wall the broker exists to knock down; the agent will hang or, worse, the operator will paste into chat.
- **Anti-pattern — secret-as-CLI-flag.** Passing the value as a `--token` flag puts it in `ps` for the command's whole lifetime (minutes, on a long upload). Use the tool's env-var path instead: set the tool's env-var to the *env-var reference* (e.g. the shell-expanded `$SS_VERCEL_TOKEN`, never a literal) and run the tool with that env-var in scope. This is a documented recurring incident class on this node; the doctrine's §2.4 carries the safe/unsafe worked pair.
- **Anti-pattern — line-based inspection.** `head -20` / `cat` / `echo` against a single-line credential prints the whole thing. The doctrine's rule is `head -c N` with N ≤ 6 (≤ 2 secret bits) for any verification.
- **Anti-pattern — one-store rotation.** Updating 1P but not the Keychain (or vice-versa) silently drifts; the next shell re-reads the stale store. Rotation is atomic across *both* stores.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: the `### Credential routing (broker = Home.aDNA)` CLAUDE.md snippet folded into the fork-base so a freshly-forked `<name>.aDNA/` vault inherits credential-routing at fork-time (the pre-existing upstream proposal is [[../../how/backlog/idea_upstream_credential_broker_template_inheritance|idea_upstream_credential_broker_template_inheritance]]). WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Harvested at Operation Champollion **M3.2** (Pattern Harvest II, 2026-07-02, Rosetta/this vault) from the live `Home.aDNA` broker machinery (ADR-002/003/005, Hestia) and this vault's consumer-side doctrine + workspace Rule 6. **NAMES-ONLY was observed throughout the harvest** — no value, Keychain content, `security` output, or 1P payload is quoted anywhere in this file. **Instances: 3 vault-level adoptions** (broker: Home.aDNA · workspace-doctrine holder + routing-rule owner: this vault · snippet-carrier: BusinessIntelligence.aDNA, found at the fable-review census) — the graduation threshold is met; **ratification is gate work, flagged for Champollion G3**, and this file stays `status: draft` until the gate rules; the snippet's template fold rides the M6.1 RC per the fold stub above. **Split-call reasoning** (one line, per the M3.2 brief): the broker and the [[pattern_shim_registry|shim-registry]] were authored as **two** patterns, not one — they share only the one-time-grant-then-permanent-access *aspect*; the broker's core lesson (credential **non-egress** + names-only discovery) is orthogonal to the shim-registry's core lesson (register-at-creation + **conjunctive retirement**), so folding them would teach two things under one title. Related patterns: [[pattern_shim_registry]] (the registered-lifecycle sibling — the other half of the one-time-grant family), [[pattern_coordination_countersign]] (how a consumer routes a rotate/onboard ask to the broker without writing into it), [[pattern_federation_readiness]] (the general discoverability envelope the names-only inventory specializes for secrets).
