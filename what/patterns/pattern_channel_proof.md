---
type: pattern
created: 2026-10-04
updated: 2026-10-04   # §7.7 signed
status: accepted          # ⛩ operator §7.7 SIGNED AS WRITTEN 2026-10-03 PDT (UTC 2026-10-04; plan-time AskUserQuestion, session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep) — in force. Was: proposed (agent-authored 2026-10-04 from Network.aDNA's upstream proposal, Venus 2026-08-03, received via the 2026-10-04 nudge)
pattern_category: operational
applies_to: [coordination, credentials, federation, deploys, all_categories]
proposed_by: venus (Network.aDNA) — upstream contribution 2026-08-03; authored here by agent_rosetta 2026-10-04
instances:
  - "Network.aDNA — F-S339-01 (2026-08-03): a forge-admission kit named a git drop-box its PRIMARY transmit channel and the close called it live; the first non-interactive agent to drive it could not — the key it needed sits outside the agent's permission scope, correctly. The channel was provisioned, not proven."
  - "aDNA.aDNA (this vault) — the pre-push secret-scan hook (installed 2026-08-28) resolved a tracked skeleton config before the root config its own header called authoritative; every push for five weeks ran on the wrong allowlist and nobody knew until the first consumer push that needed the root allowlist was blocked (2026-10-03, (d) sitting). Installed ≠ proven."
  - "aDNA.aDNA / HAUSSMANN convention 16 — 'deployed + live-verified is a statement with a timestamp': a deploy is proven by the alias probe against production after the deploy, never by the deploy command's exit code. Same theorem, deploy costume."
graduation: "n=3 instances across 2 vaults at authoring; ⛩ signed 2026-10-04 — template fold filed the same sitting: how/backlog/idea_upstream_pattern_channel_proof.md (v8.13 lane). Was: status stays proposed until the operator signs §7.7 below."
last_edited_by: agent_rosetta
tags: [pattern, channel_proof, agent_scope, credentials, coordination, consuming_side, f_s328_06_class, upstream_from_network]
---

# pattern_channel_proof — the consuming side proves a channel, never the provisioning side

> **Plain-language version first**: when you set up a way for someone to reach you — a shared drop-box, a key that lets a script log in, a deploy that puts a page on the web — the act of *setting it up* tells you almost nothing about whether it *works for the party that has to use it*. Only that party, actually using it, proves it. A read-back from your own side ("I granted the key", "the deploy returned 0", "the drop-box is live") is evidence that *you did something*, not that *they can*. The rule: **a channel is unproven until the party that must use it has used it**, and an agent must never go hunting outside its permission scope to make a channel work that was never proven for it.

## Problem

Channels get declared live by the side that provisions them. The provisioning side has every signal that says "done" — the key was minted, the ACL was granted, the directory was created, the deploy command exited 0 — and none of the signals that say "usable by the consumer": is the key *selectable* from where the consumer runs? does the consumer's process see the granted entry? does the alias serve the new bytes? Three incidents in two vaults, each paid for after a close had already called the channel live (see `instances:` above). The grant form of this rule already exists in the fleet as the **F-S328-06** family (Network.aDNA): *a read-back from the granting side is not proof of access*. The channel form is the same theorem and it is the one that keeps costing ceremonies their primary path.

## Solution

Four rules; the first is the pattern, the other three are what it implies.

1. **The consuming side proves a channel.** A channel (a credential grant, a drop-box, a mesh route, a deploy alias, a mailbox) moves from *provisioned* to *proven* only on a dated record of **the party that must use it having used it** — a real read, a real write, a real fetch, from the vantage it will actually run from. A read-back, a self-test, or an exit code on the provisioning side leaves it *provisioned*.
2. **Name the state honestly.** Any artifact that names a channel names its state: `provisioned` or `proven` (+ by whom, when, from where). "Primary" and "live" are not states; a kit that calls an unproven channel primary has told its reader something it does not know.
3. **Scope is a wall, not a hint.** An agent that finds a channel unusable from inside its permission scope **stops and reports**; it does not look for the credential, key or path that would make it work. What sits outside the scope was put there on purpose. (Network's wording, adopted: *an agent must not hunt for credentials outside its permission scope*.)
4. **The proof is as wide as the probe.** A proven channel is proven for *that* consumer, *that* vantage, *that* day. A second consumer, a second node, or a rotation re-opens the question (HAUSSMANN conventions 16–18: a negative result is only as wide as the command that produced it; every absence assertion names its surface).

## When to Use

Any time a close, a kit, a memo or a STATE row is about to say that a channel *is live* — before the sentence is written. Specifically at: credential onboarding (`doctrine_credential_handling` §4), drop-box or inbox conventions, mesh/route reachability (Network's `skill_mesh_probe_discipline` is the *probe* half; this is the *proof* half), deploys (convention 16), and any federation seam where one vault provisions what another consumes.

## Example: This Vault

The pre-push hook instance above is the clean one: `how/standard/hooks/pre-push-secret-scan.sh` was installed and self-tested on 2026-08-28 (provisioned, and read back by its installer as working), and the (d) sitting of 2026-10-03 found that its config resolution order had never applied the root allowlist — the consumer (a push that needed it) proved the channel broken on first real use, five weeks later. The fix was one line; the five weeks were the pattern's absence. `doctrine_credential_handling.md` §2.1 carries the grant-form sibling: a Keychain ACL grant is proven when the **consumer process** exports the value, not when `security` reports the grant (the M02b root cause).

## Anti-Pattern

- A close that says *"the channel went live today"* on the strength of the provisioning side's commands.
- A kit that names a channel *primary* with no consumer record behind it.
- An agent that, finding a key unselectable, goes looking in `~/.ssh` for the one that would work.
- A proof carried forward past a rotation, a new consumer, or a new vantage without re-running.

## Related

- Network.aDNA `how/backlog/idea_f_dropbox_primary_channel_unusable_by_agent.md` — the originating finding (F-S339-01, the F-S328-06 class); Network.aDNA `how/skills/skill_mesh_probe_discipline.md` — the probe half (adopted as a template skill candidate: [[../../how/backlog/idea_upstream_skill_mesh_probe_discipline|idea_upstream_skill_mesh_probe_discipline]]); Network.aDNA `how/skills/skill_deputy_admission_execution.md` — composes with this rule where a mesh has one certificate authority (declined as a standard object 2026-10-04; Network's copy canonical).
- [[../doctrine/doctrine_credential_handling|doctrine_credential_handling]] §2.1 · §4 · §6.10 (the grant form; the probe that produces a leak is ungoverned).
- [[../../how/campaigns/campaign_haussmann/CLAUDE|HAUSSMANN conventions 16–18]] (deploy = statement with a timestamp; absence names its surface; name the surface an instrument runs against).
- [[pattern_decision_queue]] — the *decided, undelivered* sub-state is this pattern's coordination costume: a memo with `status: sent` is provisioned, not proven, until the receiver's tree carries it.

## Ratification (§7.7)

- **Decision:** adopt rules 1–4 as an operational pattern of the standard's practice layer; file the template fold on signature · **Ratified-by:** Stanley (operator) · **Date:** 2026-10-03 PDT (UTC 2026-10-04) · **Status: accepted** — signed **as written**, no amendment, at the plan gate of session [[session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep]] (`AskUserQuestion`: sign / defer / amend / decline). Fold filed: [[../../how/backlog/idea_upstream_pattern_channel_proof|idea_upstream_pattern_channel_proof]]; Network notified to keep its copy pointing here. *(Was: Ratified-by — · Date — · Status proposed — authored 2026-10-04 by agent_rosetta from Venus's 2026-08-03 proposal, received 2026-10-04; operator signature pending at a gate.)*
