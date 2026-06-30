---
type: doctrine
created: 2026-06-14
updated: 2026-06-14
status: active
last_edited_by: agent_stanley
tags: [doctrine, safe]
---

# Doctrine — Safe Mutations (workspace-canonical)

> **Status:** active · ratified at `aDNALabs.aDNA/who/governance/adr_011_safe_mutations.md` (2026-06-12). Sibling to `doctrine_credential_handling.md` · `doctrine_key_rotation.md` · `doctrine_secret_scanning.md`. Inherited by reference across all vaults. **Motivating case:** `aDNALabs.aDNA/what/incidents/aar_authorized_keys_selflockout_20260612.md`.

**Scope:** any operational change that mutates system state an agent depends on or a partner relies on — file edits (esp. auth/config), SSH/`authorized_keys`, sshd/network/firewall config, service restarts, credential stores, remote-node changes. Generalizes the credential-rotation **Pattern A** (stage→verify→dispose) to *all* mutations. This is about **least-op-sec-risk change**, not just avoiding data loss.

This doctrine is **rules, not bureaucracy** — most are one extra command. Apply judgment by blast radius: a vault markdown edit needs little; touching `authorized_keys` over your only channel needs all of it.

## §1 — Pre-mutation

1. **Smallest reversible diff.** Make the smallest change that achieves the goal. Prefer **append-only + validate** over in-place edit. Prefer idempotent (`grep -q … || append`) over unconditional. If a change is *cosmetic* (e.g. duplicate-but-harmless lines), **don't make it** — the risk/benefit is upside-down.
2. **State backup.** Before mutating any file you can't trivially reconstruct, snapshot it: `cp -p <f> <f>.bak-<context>-<date>`. Keep the backup until the change is verified good from a fresh context.
3. **Know your rollback before you start.** State the exact revert command. If you can't name it, you're not ready to mutate.

## §2 — Auth-critical changes (the load-bearing rule)

> **Never mutate the channel you depend on without a fallback.**

When the change could sever your own access or a partner's (`~/.ssh/authorized_keys`, sshd_config, the SSH key/agent, firewall rules on the path you're connected over, the mesh cert, the credential that authenticates you):

1. **Hold a fallback before you touch it** — a *second* independent session to the same host, OR a known-good out-of-band recovery path (console, a partner who can restore, a second key/route). One live session is **not** a fallback — the session stays up after the file changes; the *next* connection is the test, and by then it's too late.
2. **Prefer partner-runs-it.** For a partner machine, the safest mutation is one **they** run (a reviewable one-liner / the lighthouse-inbox task) — an error is local to them and never costs you the channel. Reach-in over the sole channel is the **last** resort, and only with §2.1's fallback.
3. **Append-only for `authorized_keys`.** Never filter it by substring or line-order. To add: backup → `grep -qF '<exact line>' || echo '<line>' >> …` → `chmod 600`. To remove: do it from a host that is **not** depending on that file for the current session, or have the partner do it, and verify a fresh login works **before** trusting it. Duplicate key lines are harmless — leave them.

## §3 — Execution (generalized Pattern A)

**stage → apply → validate-before-trust → dispose.**
1. **Stage** off-history (here-doc to `/private/tmp` or `$TMPDIR`, clipboard) — never `export SECRET=…` or anything that lands in shell history.
2. **Apply** the smallest diff.
3. **Validate before trust** — confirm the result is well-formed *before* you rely on it or close the editing context (syntax-check the file; count what should be there; `visudo -c` for sudoers; `sshd -t`-class checks where available; `git diff --cached --name-only` for commits).
4. **Dispose** — `unset` vars, `rm -P`/`rm -f` temp files, clear the clipboard.

## §4 — Post-mutation validation

1. **Test from a fresh context.** Prove the change works from a *new* session/connection/shell, not the one that made it. For access changes: open a brand-new connection and confirm it authenticates **before** you consider the change done.
2. **Test-restore once.** For high-blast-radius changes, confirm the backup actually restores (on a scratch copy, or by holding it ready) — a backup you haven't verified is a hope, not a rollback.
3. **Leave it testable.** End every node/remote operation with the host in a state someone can verify and recover.

## §5 — Change-channel preference (lowest op-sec risk first)

**partner-runs-it (reviewable one-liner / inbox task) > pull-based (partner fetches + applies) > operator reach-in with a fallback held > operator reach-in over the sole channel (avoid).** Pick the leftmost option that achieves the goal. The aDNA substrate already provides the safer channels — the lighthouse inbox (pull), the Pi hub exchange (relay), the bootstrap-task pattern (partner appends their own keys). Use them.

**Preferred reach-in HOST = a dedicated OS-scoped user, not a key in the owner's account.** When raw-SSH access IS warranted, the canonical host is the **`adna-network`** scoped-access user — its own account, its own `authorized_keys`, scope OS-enforced to `~/aDNA` only, revoke = `userdel -r adna-network` (full spec: `…/p1_node_onboarding_iss/pattern_adna_network_access_user.md`). A key in the owner's shared login account is the legacy/fallback form — larger blast radius, and the shared `authorized_keys` is exactly what the self-lockout incident corrupted.

## §6 — Audit

Record every auth-critical / state-changing mutation in the session record: what changed, the backup path, the rollback command, the verify result. Where the change is a network/access primitive, it belongs in the ledger (see the LatticeProtocol access-grant track — `ACCESS_GRANT_ISSUED/REVOKED` LIP-candidate; until then, an explicit vault note). An access grant or revocation with no record is a forensics gap.

## §7 — Inheritance

Consumer vaults need carry nothing — this doctrine binds by reference (like `doctrine_credential_handling.md`). The companion operational checklist for partner nodes is the node-connect/setup runbook (`aDNALabs.aDNA/how/campaigns/campaign_launch_readiness/missions/p1_node_onboarding_iss/node_connect_setup_runbook.md`). Upstream-to-standard candidacy: `aDNALabs.aDNA/how/backlog/idea_upstream_safe_mutations_doctrine.md`.
