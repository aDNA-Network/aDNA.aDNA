---
type: idea
status: proposed
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
campaign_id: campaign_keystone
tags: [idea, keystone, awsbootstrap, lighthouse, reconciliation, adr_candidate]
---

# Reconcile AWSBootstrap ↔ Lighthouse ↔ the `<Software>.aDNA` cohort (ADR candidate)

## The overlap (recon finding)

Three things all "install node software," and their boundaries are unstated:

- **AWSBootstrap.aDNA** (Hestia) — a portable AWS→aDNA node "wake-up kit": drop onto an instance → an agent acquaints itself + bootstraps it into an aDNA node.
- **Lighthouse.aDNA** (genesis stub) — the deployable integrated node: composes a chosen set of software graphs into a running node stack.
- **The `<Software>.aDNA` cohort** ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]]) — the per-software bricks the other two install/compose.

Lighthouse's own `vision_integrated_lighthouse.md` already flags the unresolved AWSBootstrap/Home relationship. Left unreconciled, the three proliferate overlapping install logic.

## Proposed resolution (to ratify as an ADR)

A clean three-layer split, to be co-signed by the three personas:

- **The cohort = the bricks.** Each `<Software>.aDNA` owns one software's install/operate/configure/update/interoperate.
- **Lighthouse = the composition/role layer.** It *composes* cohort bricks into a node stack; it does not re-author per-software install.
- **AWSBootstrap = the substrate/wake-up layer.** It acquaints an agent with a raw cloud instance and hands off to Lighthouse + the cohort; it owns the *pre-aDNA* bootstrap, not the per-software installs.

## Next step

When greenlit, author the reconciliation ADR (likely homed in `aDNA.aDNA` as standard material, co-signed by Hestia + Lighthouse-persona-at-P0 + Keystone). Gate: do not let the cohort proliferate overlapping install logic before this lands. Non-blocking for the current clean net-new wave (Nextcloud/Caddy/Bitwarden carry no AWSBootstrap overlap).
