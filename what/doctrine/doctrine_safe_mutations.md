---
type: doctrine
created: 2026-06-14
updated: 2026-08-17   # + §8 custody moves, §9 vendor-default rule, §9.1 DP-10 item-2 window PROPOSED (90d), §10 ratification block PROPOSED (Chambellan M-A6)
status: active
last_edited_by: agent_rosetta
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

## §8 — Custody moves (Chambellan M-A6 amendment)

A **custody move** is relocating a credential from one store to another — file → Keychain, Keychain → access engine, a value → an IdP-issued assertion. It is the Chambellan **P5** class, and it is a mutation of exactly the §2 kind: *the thing you are moving may be the thing that authenticates you.*

Two failure modes bound it, and they pull in opposite directions:

**(a) The gap — a window where neither store holds it.** Delete-then-write is never the shape. **Write the destination, prove the destination, then retire the source** — the same stage → validate-before-trust → dispose ladder as §3, with the source acting as its own rollback until the destination is proven. If a move cannot be ordered that way (a store that refuses a duplicate, a vendor that invalidates on re-issue), that is a **rotation**, not a move, and it runs `doctrine_key_rotation.md` with its step 0 evidence preservation.

**(b) The ghost — the old store silently stays live.** This is the S45 property generalized (`doctrine_key_rotation.md` §Revoke ≠ kill; charter **D-36**): a source that still authenticates after the move is *unmonitored and believed-dead*, which is strictly worse than before the move began. Charter **D-50** is the same defect from the other end — a register row claiming coverage for a file that does not exist. **Both directions must be checked**: the destination holds it, *and* the source no longer grants anything.

**The five-step custody move:**

1. **Enumerate every place the credential currently works** — not every place it is *stored*. Caches, agents, `authorized_keys` lines, CI secrets, a partner's copy, a CLI auth artifact. A move that relocates the canonical copy and leaves four working copies has moved nothing.
2. **Write the destination and prove it from a fresh context** (§4.1) — a new shell, a new session, the consumer's real code path, not the mover's warm environment.
3. **Overlap deliberately.** Both stores hold it, briefly and knowingly, with the window recorded. Overlap is the safe state; the gap is not.
4. **Retire the source and prove the retirement** — the negative test. Attempt the old path and require failure. *An unproven retirement is not a retirement.*
5. **Update the register in the same lease.** Storage kind, scope, and locus per `doctrine_credential_handling.md` §3.5. A register that describes the pre-move world is a register that will route the next agent to a dead store (§6.9).

**Blast-radius note**: a custody move for a credential a **second person holds** (`doctrine_credential_handling.md` §4.5) is a coordination event, and §5's channel preference applies — *partner-runs-it* beats reach-in here as everywhere.

## §9 — The vendor-default rule (Chambellan M-A6 amendment — D-56)

> **Any retention, deletion, expiry, or sync behavior found RUNNING but UNCHOSEN is recorded, owned, and
> pinned explicitly — even when the default is the value you would have picked.**

**The instance that earned it** (charter **D-56**): a hard retention cliff was already deleting transcripts — **100 `.jsonl` at 30 days, ZERO at 31+** — with **no `cleanupPeriodDays` set anywhere** in the settings cascade. Nobody chose it, nobody owned it, and it was doing real deletion on a real credential-bearing surface. Worse, it was **asymmetric**: it covered `*.jsonl` only, while **5,269 non-`.jsonl` files beside it had no retention at all and reached 199 days** — including **2,066 persisted tool-result `.txt`**, `file-history/` (453 MB, 49 days), `plans/` (74 days), and `history.jsonl`.

The defect was never "there is no retention policy." It was **an unowned policy doing real work** — bounding exposure and destroying audit evidence *on the same clock*, invisibly, in a direction nobody had reasoned about.

**Why pin a default you agree with**: an unpinned default is a **silent dependency on a vendor's future decision**. It changes in a release note you did not read, and every posture reasoned on top of it becomes false without a single local edit. Pinning costs one line and converts a vendor's choice into yours.

**The rule in four steps** — apply at any audit, onboarding, or system survey:

1. **Look for behavior, not configuration.** Ask what the system *is doing*, then find the setting; a survey that only reads config files will never find a default that was never written down. (D-56 was found by measuring file ages, not by reading settings.)
2. **Record it with its measurement** — the observed behavior, the date, and the method. "30-day cliff, measured by file-age histogram 2026-08-17" survives; "retention is 30 days" does not.
3. **Name an owner.** An unowned behavior has no one to notice when it changes.
4. **Pin it explicitly**, even to its current value — then the next change is a diff instead of a discovery.

**Wired instance** (verified 2026-08-17, Home `f5e4501`): `cleanupPeriodDays: 30` is now **pinned explicitly** in `~/.claude/settings.json` per the operator's DP-10 item 1 ruling. The vendor default and the pinned value agree today; that is the point.

### §9.1 — Retention window for unreaped transcript-adjacent stores (DP-10 item 2) — **PROPOSED**

DP-10 item 2 was ruled **(b)** at S197: the unreaped half is **left in place, excluded from backup, and scanned now**, with **the window to be proposed at M-A6**. This is that proposal. It lands `proposed`; the number is the operator's.

**Proposed window: 90 days**, measured by file mtime, applied to the non-`.jsonl` contents of `~/.claude/` (persisted tool-result `.txt`, `file-history/`, `plans/`, and siblings).

**Reasoning:**

- **Symmetry with the 30-day `.jsonl` cliff is the tempting answer and the wrong one.** The two halves do different jobs. `.jsonl` is conversation replay; the unreaped half contains **live working material** — `file-history/` is an undo/restore surface and `plans/` holds work the operator returns to. A 30-day cliff there destroys things still in use, and D-56's own lesson is that unexamined deletion is a defect even when the direction is "safer".
- **90 sits above every measured useful lifetime, with margin.** The longest-lived working store measured is `plans/` at **74 days**; `file-history/` at **49**. 90 does not cut into live material *today*, while cutting the observed **199-day** tail by more than half.
- **The security argument is the load-bearing one: residue should not outlive the credentials it may carry.** The scoped/expiring machine-credential class this campaign standardizes is **90-day** (`doctrine_key_rotation.md` §Scoped + expiring). A 90-day residue window means a leaked partner token's residue expires no later than the token itself. **One number for both** is also one number the operator has to remember, and doctrine that needs two adjacent-but-different numbers gets one of them wrong eventually.
- **Weakest point, stated**: a shorter window bounds exposure more, and D-58 shows key material transiting these stores *now*. The counter is that the unreaped half's 21 findings are all lower-specificity `generic-api-key` — the **17 high-specificity findings were all in the reaped half** — so the marginal exposure reduction from 90 → 30 is smaller than it looks, at a real cost in destroyed working material and audit evidence.

**Three carve-outs, which are part of the proposal, not caveats on it:**

1. **PRESERVE—LEGAL overrides globally.** Anything under a `preserve_in_place` posture (charter **D-59**, S47) is **exempt**; a retention window never becomes an instrument of spoliation.
2. **`history.jsonl` is out of scope for a file-age reaper.** It is a single append-only file per user — age-based deletion would remove the whole history at once. It is **named here so it is not silently mishandled**; truncation policy for it is a separate, unproposed question.
3. **Anything under an open incident or investigation is pinned until that closes.** The D-58 lesson exactly: *the residue self-destructs; the un-rotated credential's risk does not.* Evidence must outlive its own investigation (`doctrine_key_rotation.md` §Rotation Procedure step 0).

⚠ **What signing this costs, stated up front**: unlike item 1 — which *pinned a knob the vendor already provides* — **there is no vendor setting for this half.** A 90-day window means someone builds and schedules a reaper, with its own dry-run, its own carve-out enforcement, and its own positive control. **M-A6 builds nothing**; this section is the number a future implementation card takes as input.

## §10 — Ratification record (§7.7) — Chambellan M-A6 amendment

> Authored by an agent; **owned by the operator**. `proposed` until signed; not in force before signature.
> ⚠ **§9.1 carries a number the operator has not yet chosen** — it is a proposal with reasoning, and signing
> it authorizes the window, not an implementation. Nothing was built by this amendment.

| Field | Value |
|---|---|
| **decision** | Adopt the Chambellan M-A6 amendments to this doctrine: **§8 Custody moves** (the P5 class — the gap and the ghost; the five-step move; prove the retirement, not just the write) · **§9 The vendor-default rule** (D-56 — behavior found running but unchosen is recorded, owned, and pinned explicitly) · **§9.1 Retention window for unreaped transcript-adjacent stores** — **PROPOSED at 90 days**, mtime-based, with three carve-outs (PRESERVE—LEGAL exempt · `history.jsonl` out of scope · open-incident pin) |
| **ratified-by** | *(operator — unsigned)* |
| **date** | *(unsigned)* |
| **status** | **proposed** |

**What the operator is signing, in plain terms**: that moving a credential between stores is only finished when the *old* path is proven dead; that a behavior nobody chose but which is running gets written down and pinned even when you agree with it; and — separately and explicitly — **the 90-day number in §9.1**, which discharges DP-10 item 2's deferred window.

**Findings discharged here**: **D-56** (vendor default) · **DP-10 item 2** (window proposed) · **D-36** / **D-50** (both directions of the ghost) · **D-59** (PRESERVE—LEGAL carve-out).

## §7 — Inheritance

Consumer vaults need carry nothing — this doctrine binds by reference (like `doctrine_credential_handling.md`). The companion operational checklist for partner nodes is the node-connect/setup runbook (`aDNALabs.aDNA/how/campaigns/campaign_launch_readiness/missions/p1_node_onboarding_iss/node_connect_setup_runbook.md`). Upstream-to-standard candidacy: `aDNALabs.aDNA/how/backlog/idea_upstream_safe_mutations_doctrine.md`.

> **Numbering note (M-A6)**: §8–§10 are appended amendments and sit **before** §7 in file order by design —
> §7 Inheritance remains the closing section it has always been, and no existing section number moved.
> Numbering is stable for inbound references; reading order is not renumbering.
